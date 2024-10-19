"use server";

import db from "@/drizzle";
import { userTable } from "@/drizzle/schema";
import {
  createSession,
  deleteSessionTokenCookie,
  generateSessionToken,
  setSessionTokenCookie,
} from "@/lib/auth/session";
import { hash, verify } from "@node-rs/argon2";
import { invalidateSession, validateSessionToken } from "@/lib/auth/session";
import { SignInSchema, SignUpSchema } from "@/schemas";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export const signIn = async (values: unknown) => {
  const parsed = SignInSchema.safeParse(values);

  if (!parsed.success) {
    const err = parsed.error.flatten();
    return {
      fieldError: {
        email: err.fieldErrors.email?.[0],
        password: err.fieldErrors.password?.[0],
      },
    };
  }

  const { email, password } = parsed.data;

  const existingUser = await db.query.userTable.findFirst({
    where: (table, { eq }) => eq(table.email, email),
  });

  if (!existingUser || !existingUser?.hashedPassword) {
    return {
      formError: "Incorrect email or password",
    };
  }

  const validPassword = await verify(existingUser.hashedPassword, password);
  if (!validPassword) {
    return {
      formError: "Incorrect email or password",
    };
  }

  const sessionToken = generateSessionToken();
  const session = await createSession(sessionToken, existingUser.id);
  setSessionTokenCookie(sessionToken, session.expiresAt);

  return redirect("/app/dashboard");
};

export const signUp = async (values: unknown) => {
  const parsed = SignUpSchema.safeParse(values);

  if (!parsed.success) {
    const err = parsed.error.flatten();
    return {
      fieldError: {
        email: err.fieldErrors.email?.[0],
        password: err.fieldErrors.password?.[0],
      },
    };
  }

  const { name, email, password } = parsed.data;

  const existingUser = await db.query.userTable.findFirst({
    where: (table, { eq }) => eq(table.email, email),
    columns: { email: true },
  });

  if (existingUser) {
    return {
      formError: "Cannot create account with that email",
    };
  }

  const userId = crypto.randomUUID();
  const hashedPassword = await hash(password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });

  await db.insert(userTable).values({
    id: userId,
    name,
    email,
    hashedPassword,
  });

  return redirect("/signin");
};

export const signOut = async () => {
  const token = cookies().get("session")?.value ?? null;
  if (token === null) {
    return redirect("/signin");
  }

  if (!token) {
    return {
      error: "No session found",
    };
  }

  const result = await validateSessionToken(token);

  if (!result.session) {
    return redirect("/login");
  }

  await invalidateSession(result.session?.id);
  deleteSessionTokenCookie();

  return redirect("/");
};

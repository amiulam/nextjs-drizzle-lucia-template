"use server";

import db from "@/drizzle";
import { userTable } from "@/drizzle/schema";
import { CreateUserSchema, UpdateUserSchema } from "@/schemas";
import { hash } from "@node-rs/argon2";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const createUser = async (values: unknown) => {
  const validatedFields = CreateUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { name, email, password, role } = validatedFields.data;

  const checkExistingUser = await db.query.userTable.findFirst({
    where: eq(userTable.email, email),
  });

  if (checkExistingUser) {
    return { error: "Email sudah terdaftar" };
  }

  const userId = crypto.randomUUID();

  try {
    const hashedPassword = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    await db.insert(userTable).values({
      id: userId,
      name,
      email: email.toLowerCase(),
      hashedPassword,
      role,
    });
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }

  revalidatePath("/app", "layout");
};

export const updateUser = async (values: unknown, userId?: string) => {
  if (!userId) {
    return { error: "Please provide user id" };
  }

  const validatedFields = UpdateUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  const { name, email, password, role } = validatedFields.data;

  const existingUser = await db.query.userTable.findFirst({
    where: eq(userTable.email, email),
  });

  if (!existingUser) {
    return { error: "User not found" };
  }

  let hashedPassword;

  if (password) {
    hashedPassword = await hash(password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
  }

  try {
    await db
      .update(userTable)
      .set({
        name,
        email,
        role,
        hashedPassword: hashedPassword ?? existingUser?.hashedPassword,
      })
      .where(eq(userTable.id, userId));
  } catch (error) {
    console.log(error);
    return { error: "Something went wrong" };
  }

  revalidatePath("/app", "layout");
};

export const deleteUser = async (userId?: string) => {
  if (!userId) {
    return { error: "Please provide user id" };
  }

  try {
    await db.delete(userTable).where(eq(userTable.id, userId));
  } catch (error) {
    console.log(error);

    return {
      error: "Fail to delete data",
    };
  }

  revalidatePath("/app", "layout");
};

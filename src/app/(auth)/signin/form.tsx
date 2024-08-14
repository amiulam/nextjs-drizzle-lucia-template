"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/password-input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/actions/auth";
import { useActionState } from "react";
import { AnimatedSpinner } from "@/components/spinner";
import { cn } from "@/lib/utils";

export function SignInForm() {
  const [formState, formAction, isPending] = useActionState(signIn, undefined);

  return (
    <form action={formAction} className="grid gap-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          required
          id="email"
          placeholder="email@example.com"
          autoComplete="email"
          name="email"
          type="email"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <PasswordInput
          id="password"
          name="password"
          required
          autoComplete="current-password"
          placeholder="********"
        />
      </div>
      <div className="flex flex-wrap justify-between">
        <Button variant={"link"} size={"sm"} className="p-0" asChild>
          <Link href={"/signup"}>Not signed up? Sign up now.</Link>
        </Button>
        <Button variant={"link"} size={"sm"} className="p-0" asChild>
          <Link href={"/reset-password"}>Forgot password?</Link>
        </Button>
      </div>

      {formState?.fieldError ? (
        <ul className="list-disc space-y-1 rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
          {Object.values(formState.fieldError).map((err) => (
            <li className="ml-4" key={err}>
              {err}
            </li>
          ))}
        </ul>
      ) : formState?.formError ? (
        <p className="rounded-lg border bg-destructive/10 p-2 text-[0.8rem] font-medium text-destructive">
          {formState?.formError}
        </p>
      ) : null}

      <Button disabled={isPending} className="relative">
        <span className={cn(isPending ? "opacity-0" : "")}>Sign In</span>
        {isPending ? (
          <div className="absolute inset-0 grid place-items-center">
            <AnimatedSpinner className="h-6 w-6" />
          </div>
        ) : null}
      </Button>
    </form>
  );
}

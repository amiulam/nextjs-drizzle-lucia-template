"use client";

import Link from "next/link";
import { PasswordInput } from "@/components/password-input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/actions/auth";
import { useActionState } from "react";
import { cn } from "@/lib/utils";
import { AnimatedSpinner } from "@/components/spinner";

export function SignUpForm() {
  const [formState, formAction, isPending] = useActionState(signUp, null);

  return (
    <form action={formAction} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          required
          placeholder="John Doe"
          name="name"
          type="name"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          required
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
      <div>
        <Link href={"/signin"}>
          <span className="p-0 text-xs font-medium underline-offset-4 hover:underline">
            Already signed up? Sign in instead.
          </span>
        </Link>
      </div>

      <Button disabled={isPending} className="relative w-full">
        <span className={cn(isPending ? "opacity-0" : "")}>Sign Up</span>
        {isPending ? (
          <div className="absolute inset-0 grid place-items-center">
            <AnimatedSpinner className="h-6 w-6" />
          </div>
        ) : null}
      </Button>
    </form>
  );
}

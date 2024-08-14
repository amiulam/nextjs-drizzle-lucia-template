import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Google } from "@/components/feature-icons";
import { SignUpForm } from "./form";
import Image from "next/image";

export default function SignUpPage() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-x-1.5">
          <Image
            src="/logo-ipsum.svg"
            alt="the-logo"
            height={50}
            width={50}
            className="size-7"
          />{" "}
          <p>Sign Up</p>
        </CardTitle>
        <CardDescription>Sign up to start using the app</CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full" asChild>
          <Link href="#" prefetch={false}>
            <Google className="mr-2.5 size-4" />
            Continue with Google
          </Link>
        </Button>
        <div className="my-2 flex items-center">
          <div className="flex-grow border-t border-muted" />
          <div className="mx-2 text-muted-foreground">or</div>
          <div className="flex-grow border-t border-muted" />
        </div>
        <SignUpForm />
      </CardContent>
    </Card>
  );
}

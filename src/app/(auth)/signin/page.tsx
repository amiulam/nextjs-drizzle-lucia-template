import { Button } from "@/components/ui/button";
import { SignInForm } from "./form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { DiscordLogoIcon } from "@radix-ui/react-icons";

export default function SignInPage() {
  return (
    <Card className="w-[400px]">
      <CardHeader className="text-center">
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Log in to your account to access your dashboard
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button variant="outline" className="w-full" asChild>
          <Link href="/login/discord" prefetch={false}>
            <DiscordLogoIcon className="mr-2 h-5 w-5" />
            Log in with Discord
          </Link>
        </Button>
        <div className="my-2 flex items-center">
          <div className="flex-grow border-t border-muted" />
          <div className="mx-2 text-muted-foreground">or</div>
          <div className="flex-grow border-t border-muted" />
        </div>
        <SignInForm />
      </CardContent>
    </Card>
  );
}

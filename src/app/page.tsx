import {
  Drizzle,
  LuciaAuth,
  NextjsLight,
  ReactJs,
  ShadcnUi,
  TailwindCss,
} from "@/components/feature-icons";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { validateRequest } from "@/lib/lucia";
import Link from "next/link";

export default async function Home() {
  const { session } = await validateRequest();

  const features = [
    {
      name: "Next.js",
      description: "The React Framework for Production",
      logo: NextjsLight,
    },
    {
      name: "React.js",
      description: "Server and client components.",
      logo: ReactJs,
    },
    {
      name: "Lucia Auth",
      description:
        "Credential authentication with email and password",
      logo: LuciaAuth,
    },
    {
      name: "Drizzle",
      description: "ORM with postgres database",
      logo: Drizzle,
    },
    {
      name: "Tailwindcss",
      description: "Simple and elegant UI components built with Tailwind CSS",
      logo: TailwindCss,
    },
    {
      name: "Shadcn UI",
      description: "A set of beautifully designed UI components for React",
      logo: ShadcnUi,
    },
  ];
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 sm:p-20">
      <div>Next.js 15 Template</div>
      <main className="relative row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <div className="container mx-auto lg:max-w-screen-lg">
          <h1 className="mb-7 text-center text-3xl font-bold md:text-xl lg:text-3xl">
            <a id="features"></a> Tech Stacks
          </h1>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {features.map(({ logo: Logo, ...feature }, i) => (
              <Card key={i}>
                <div className="pl-6 pt-6">
                  <Logo className="size-12" />
                </div>

                <CardHeader className="pb-6">
                  <CardTitle className="text-xl">{feature.name}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-6">
        {session ? (
          <Link href="/app/dashboard">Dashboard</Link>
        ) : (
          <>
            <Link href="/signin">Sign In</Link>
            <Link href="/signup">Sign Up</Link>
          </>
        )}
      </footer>
    </div>
  );
}

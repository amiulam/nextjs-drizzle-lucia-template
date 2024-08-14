import Sidebar from "@/components/sidebar";
import { validateRequest } from "@/lib/lucia";
import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await validateRequest();
  if (!user) redirect("/");

  return (
    <div className="grid grid-cols-[4rem_1fr]">
      <Sidebar />
      <main className="flex h-screen items-center justify-center">
        {children}
      </main>
    </div>
  );
}

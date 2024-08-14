import Header from "@/components/header";
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
      <div className="grid grid-rows-[3.5rem_1fr]">
        <Header />
        <main className="flex h-[calc(100vh-3.5rem)] items-center justify-center bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}

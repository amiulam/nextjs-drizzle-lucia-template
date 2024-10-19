import type { Metadata } from "next";
import { getCurrentSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TheSidebar from "@/components/sidebar";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await getCurrentSession();
  if (!user) redirect("/");

  return (
    <>
      <SidebarProvider>
        <TheSidebar />
        <SidebarInset>
          <Header />
          <div className="flex flex-1 flex-col gap-4 p-6 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

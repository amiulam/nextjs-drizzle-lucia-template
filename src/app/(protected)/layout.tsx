import type { Metadata } from "next";
import { getCurrentSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import TheSidebar from "@/components/sidebar";
import Header from "@/components/header";
import { SessionContextProvider } from "@/context/session-context-provider";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default async function ProtectedLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sessionData = await getCurrentSession();
  if (!sessionData) redirect("/");

  return (
    <SessionContextProvider value={sessionData}>
      <SidebarProvider>
        <TheSidebar />
        <SidebarInset>
          <Header />
          <div className="flex flex-1 flex-col gap-4 p-6 pt-0">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </SessionContextProvider>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbPage,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";
import { capitalizeFirstLetter } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const breadcrumbData = pathname.split("/").filter(Boolean);
  breadcrumbData.shift();

  return (
    <header className="flex items-center justify-center border-b border-zinc-300 bg-white">
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbData.length === 0 ? (
            <BreadcrumbItem>
              <BreadcrumbPage>Home</BreadcrumbPage>
            </BreadcrumbItem>
          ) : (
            breadcrumbData.map((data, i) => (
              <BreadcrumbItem key={data}>
                {breadcrumbData.length - 1 === i ? (
                  <BreadcrumbPage>{capitalizeFirstLetter(data)}</BreadcrumbPage>
                ) : (
                  <>
                    <BreadcrumbItem key={data}>
                      <BreadcrumbLink asChild>
                        <Link href={`/${data}`}>{data}</Link>
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                  </>
                )}
              </BreadcrumbItem>
            ))
          )}
        </BreadcrumbList>
      </Breadcrumb>
    </header>
  );
}

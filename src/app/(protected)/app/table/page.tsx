import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { UpdateIcon } from "@radix-ui/react-icons";

export default function TablePage() {
  return (
    <div className="grid gap-3 xl:grid-cols-2">
      {/* Table 1 Example */}
      <div className="relative w-full space-y-1.5 overflow-x-auto rounded-xl border border-zinc-200 bg-white px-5 py-4">
        <h1 className="text-xl">Table Data</h1>
        <table className="w-full text-left text-sm rtl:text-right">
          <thead className="border-b text-gray-500">
            <tr>
              <th scope="col" className="px-2 py-3">
                Product name
              </th>
              <th scope="col" className="px-2 py-3">
                Color
              </th>
              <th scope="col" className="px-2 py-3">
                Category
              </th>
              <th scope="col" className="px-2 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr>
              <th
                scope="row"
                className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white"
              >
                Apple MacBook Pro 17&quot;
              </th>
              <td className="px-2 py-4">Silver</td>
              <td className="px-2 py-4">Laptop</td>
              <td className="px-2 py-4">$2999</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="whitespace-nowrap px-2 py-4 font-medium text-gray-900 dark:text-white"
              >
                Apple MacBook Pro 17&quot;
              </th>
              <td className="px-2 py-4">Silver</td>
              <td className="px-2 py-4">Laptop</td>
              <td className="px-2 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Table 2 Example */}
      <div className="relative w-full overflow-x-auto rounded-xl border border-zinc-300 bg-white">
        <div className="flex items-center justify-between border-b border-zinc-300 px-5 py-4">
          <div className="flex items-center gap-x-1">
            <ShoppingBagIcon className="size-6 text-zinc-500" />
            <h1 className="text-xl">Table Data</h1>
          </div>
          <div className="flex items-center gap-x-2">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[250px] rounded-lg border-zinc-300 bg-background pl-8"
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="rounded-lg border-zinc-300"
            >
              <UpdateIcon className="size-5 text-zinc-600" />
            </Button>
          </div>
        </div>
        <table className="w-full text-left text-sm rtl:text-right">
          <thead className="border-b border-zinc-300 text-zinc-500">
            <tr>
              <th scope="col" className="px-5 py-3">
                Product name
              </th>
              <th scope="col" className="px-2 py-3">
                Color
              </th>
              <th scope="col" className="px-2 py-3">
                Category
              </th>
              <th scope="col" className="px-2 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-300">
            <tr>
              <th
                scope="row"
                className="whitespace-nowrap px-5 py-4 font-medium text-gray-900 dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-2 py-4">Silver</td>
              <td className="px-2 py-4">Laptop</td>
              <td className="px-2 py-4">$2999</td>
            </tr>
            <tr>
              <th
                scope="row"
                className="whitespace-nowrap px-5 py-4 font-medium text-gray-900 dark:text-white"
              >
                Apple MacBook Pro 17
              </th>
              <td className="px-2 py-4">Silver</td>
              <td className="px-2 py-4">Laptop</td>
              <td className="px-2 py-4">$2999</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

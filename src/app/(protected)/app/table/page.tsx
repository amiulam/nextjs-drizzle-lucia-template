export default function TablePage() {
  return (
    <div className="relative space-y-1.5 overflow-x-auto rounded-xl bg-white px-5 py-4 max-w-xl border border-zinc-200">
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
  );
}

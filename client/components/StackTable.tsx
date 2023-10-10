export default function StackTable(params: any) {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-spaceCadet dark:text-white ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Area
              </th>
              <th scope="col" className="px-6 py-3">
                Tech
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-spaceCadet border-b border-cyclamen">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Front-End
              </th>
              <td className="px-6 py-4">React.Js</td>
            </tr>
            <tr className="bg-spaceCadet border-b border-cyclamen">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Back-End
              </th>
              <td className="px-6 py-4">Node.Js</td>
            </tr>
            <tr className="bg-spaceCadet border-b border-cyclamen">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Database
              </th>
              <td className="px-6 py-4">MySQL</td>
            </tr>
            <tr className="bg-spaceCadet border-b border-cyclamen">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
              >
                Cloud
              </th>
              <td className="px-6 py-4">Azure</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

import StackTable from "./StackTable";

export default function StackCard(params: any) {
  return (
    <div className="p-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="p-4">
          <h5 className="mb-2 text-xl font-medium text-gray-900">Sysco Labs</h5>
          <span className="text-sm text-gray-500">Main Web Stack</span>
          <StackTable />
        </div>
      </div>
    </div>
  );
}

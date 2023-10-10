export default function StackCard(params:any) {
    return (
        <>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8">
      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center p-4">
          <h5 className="mb-1 text-xl font-medium text-gray-900">Sysco Labs</h5>
          <span className="text-sm text-gray-500">Main-Stack</span>
          <p className="text-sm">Front-End: React.Js</p>
          <p className="text-sm">Back-End: Node.Js</p>
        </div>
      </div>
      </div>
        </>
    )
}
export default function CompCard(params: any) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-8">
      {/* Card 1 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center p-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/D560BAQHe1jLow77zGg/company-logo_200_200/0/1688472902715?e=1704931200&v=beta&t=IBrmpXPw354GDtJnbeaA0zybXJIbO89VtmZGcqfHKZ4"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">Sysco Labs</h5>
          <span className="text-sm text-gray-500">501-1,000 employees</span>
          <div className="flex mt-4 space-x-3">
            <a
              href="/details"
              type="button"
              className="text-spaceCadet hover:text-seasalt border border-spaceCadet hover:bg-spaceCadet focus:ring-4 focus:outline-none focus:ring-cyclamen font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              View Stack
            </a>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center p-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/D560BAQE6diZwj0bz9w/company-logo_200_200/0/1682655230323?e=1704931200&v=beta&t=3kwzcFcVYDoF6gU8cd3UfDCW3PyaB63w2dKBTjx3-fg"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Creative Software
          </h5>
          <span className="text-sm text-gray-500">201-500 employees</span>
          <div className="flex mt-4 space-x-3">
            <a
              href="#"
              type="button"
              className="text-spaceCadet hover:text-seasalt border border-spaceCadet hover:bg-spaceCadet focus:ring-4 focus:outline-none focus:ring-cyclamen font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              View Stack
            </a>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center p-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/C560BAQEVg8fDYKXBCw/company-logo_200_200/0/1601228756308?e=1704931200&v=beta&t=2X-bU3RE3g8w57tYU_3UD_7FqGlco6Xvbn2WYGv1Bh4"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">99x</h5>
          <span className="text-sm text-gray-500">201-500 employees</span>
          <div className="flex mt-4 space-x-3">
            <a
              href="#"
              type="button"
              className="text-spaceCadet hover:text-seasalt border border-spaceCadet hover:bg-spaceCadet focus:ring-4 focus:outline-none focus:ring-cyclamen font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              View Stack
            </a>
          </div>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md">
        <div className="flex flex-col items-center p-4">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/C4D0BAQE0VYCblFbhow/company-logo_200_200/0/1589456808611?e=1704931200&v=beta&t=Lfk84koV5qx2glIn63yqVqV1MJO4rARp7656gXPuQ_Y"
            alt="Bonnie image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900">
            Rooster Technology
          </h5>
          <span className="text-sm text-gray-500">11-50 employees</span>
          <div className="flex mt-4 space-x-3">
            <a
              href="#"
              type="button"
              className="text-spaceCadet hover:text-seasalt border border-spaceCadet hover:bg-spaceCadet focus:ring-4 focus:outline-none focus:ring-cyclamen font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              View Stack
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import { gql } from "@apollo/client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import client from "../../lib/grapql-client";
import { Software } from "../../models/software";

const take = 20;

const getSoftwares = async (currentPage: number): Promise<Software[]> => {
  const current_page = currentPage === undefined ? 1 : currentPage;
  const skip = (current_page - 1) * take;

  const { data } = await client.query({
    query: gql`
      query get_softwares($take: Int, $skip: Int) {
        softwares(take: $take, skip: $skip) {
          currentLicense
          group
          id
          installerPath
          license
          note
          numberOfLicense
          softwareName
          version
        }
      }
    `,
    variables: {
      take,
      skip,
    },
  });
  return data.softwares;
};

const getSoftwareCount = async (): Promise<number> => {
  const { data } = await client.query({
    query: gql`
      query get_software_count {
        softwareCount
      }
    `,
  });
  return data.softwareCount;
};

export default async function SoftwarePage({
  searchParams,
}: {
  searchParams: { currentPage: number };
}) {
  const softwares: Software[] = await getSoftwares(searchParams.currentPage);
  const softwareCount = await getSoftwareCount();
  const numberOfPage = Math.ceil(softwareCount / take);

  return (
    <>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Room Number
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Master Type
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Location
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Details</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {softwares.map((software, idx) => (
                    <tr
                      key={software.id}
                      className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {software.softwareName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {software.currentLicense}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {software.group}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          href={`/software/${software.id}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Detail
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* Nav */}
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
                <div className="flex-1 flex justify-between sm:hidden">
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                  >
                    Previous
                  </a>
                  <a
                    href="#"
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
                  >
                    Next
                  </a>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing{" "}
                      <span className="font-medium">
                        {(Number(searchParams.currentPage) - 1) * take + 1}
                      </span>{" "}
                      to{" "}
                      <span className="font-medium">
                        {(Number(searchParams.currentPage) - 1) * take +
                          softwares.length}
                      </span>{" "}
                      of <span className="font-medium">{softwareCount}</span>{" "}
                      results
                    </p>
                  </div>
                  <div>
                    <nav
                      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                      aria-label="Pagination"
                    >
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Previous</span>
                        <ChevronLeftIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                      {Array(numberOfPage)
                        .fill(1)
                        .map((_, idx) => {
                          return (
                            <Link
                              key={idx}
                              href={`/software?currentPage=${idx + 1}`}
                              className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                              {idx + 1}
                            </Link>
                          );
                        })}
                      <a
                        href="#"
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                      >
                        <span className="sr-only">Next</span>
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

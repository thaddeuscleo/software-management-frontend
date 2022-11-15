const stats = [
  { name: "Total Subscribers", stat: "71,897" },
  { name: "Avg. Open Rate", stat: "58.16%" },
  { name: "Avg. Click Rate", stat: "24.57%" },
];

export default function Dashboard() {
  return (
    <>
      {/* Software */}
      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Total Software
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Room */}
      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Total Rooms
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>

     {/* Course */}
      <div className="mt-10">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Total Courses
        </h3>
        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {stats.map((item) => (
            <div
              key={item.name}
              className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6"
            >
              <dt className="text-sm font-medium text-gray-500 truncate">
                {item.name}
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                {item.stat}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
}

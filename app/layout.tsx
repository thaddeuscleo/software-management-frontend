import "./globals.css";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  InboxIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const navigation = [
  { name: "Dashboard", icon: HomeIcon, href: "/", current: true },
  {
    name: "Softwares",
    icon: UsersIcon,
    href: "/software",
    count: 3,
    current: false,
  },
  { name: "Rooms", icon: FolderIcon, href: "/room", count: 4, current: false },
  { name: "Courses", icon: CalendarIcon, href: "/course", current: false },
  { name: "Patch", icon: InboxIcon, href: "#", count: 12, current: false },
  { name: "Reports", icon: ChartBarIcon, href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="flex">
          {/* Navigation */}
          <div className="flex flex-col w-64 min-h-screen">
            <div className="flex flex-col flex-grow pt-8 pb-4 bg-white overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-grow flex flex-col">
                <nav
                  className="flex-1 px-2 bg-white space-y-1"
                  aria-label="Sidebar"
                >
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-3 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                      {item.count ? (
                        <span
                          className={classNames(
                            item.current
                              ? "bg-white"
                              : "bg-gray-100 group-hover:bg-gray-200",
                            "ml-auto inline-block py-0.5 px-3 text-xs font-medium rounded-full"
                          )}
                        >
                          {item.count}
                        </span>
                      ) : null}
                    </Link>
                  ))}
                </nav>
              </div>
            </div>
          </div>
          {/* ================ */}
          {/* Content */}
          <div className="p-10 w-full">
            <div className="mt-2 md:flex md:items-center md:justify-between mb-5">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                  Software Management
                </h2>
              </div>
            </div>

            <hr className="mb-5" />

            {/* ============== */}
            {/* children section */}
            {children}
            {/* ============== */}
          </div>
        </div>
      </body>
    </html>
  );
}

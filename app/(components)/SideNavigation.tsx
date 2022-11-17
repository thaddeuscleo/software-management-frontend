import Link from "next/link";

type sideNavProp = {
  navigations?: {
    name: string;
    href: string;
    icon: any;
    count?: number;
    current?: boolean;
  }[];
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function SideNavigation({ navigations }: sideNavProp) {
  return (
    <div className="flex flex-col w-64 min-h-screen sticky top-0">
      <div className="flex flex-col flex-grow pt-8 pb-4 bg-white overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
            alt="Workflow"
          />
        </div>
        <div className="mt-5 flex-grow flex flex-col">
          <nav className="flex-1 px-2 bg-white space-y-1" aria-label="Sidebar">
            {navigations?.map((item) => (
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
  );
}

import "./globals.css";
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  InboxIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import SideNavigation from "./(components)/SideNavigation";
import Header from "./(components)/Header";

const navigationList = [
  { name: "Dashboard", icon: HomeIcon, href: "/", count: 4, current: false },
  {
    name: "Softwares",
    icon: UsersIcon,
    href: "/software?currentPage=1",
    count: 3,
    current: false,
  },
  { name: "Rooms", icon: FolderIcon, href: "/room", count: 4, current: false },
  {
    name: "Courses",
    icon: CalendarIcon,
    href: "/course",
    count: 4,
    current: false,
  },
  {
    name: "Upload",
    icon: InboxIcon,
    href: "/upload",
    count: 12,
    current: false,
  },
  { name: "Reports", icon: ChartBarIcon, href: "#", count: 4, current: false },
];

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
          <SideNavigation navigations={navigationList} />

          {/* Content Start */}
          <div className="p-10 w-full bg-violet-50">
            <Header />

            {children}
          </div>
          {/* Content End */}
        </div>
      </body>
    </html>
  );
}

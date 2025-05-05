"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { 
  Home, 
  CreditCard, 
  Goal, 
  RefreshCw, 
  Bell, 
  Ticket, 
  BarChart2, 
  Settings, 
  ChevronDown, 
  ChevronRight, 
  LogOut
} from "lucide-react";

// Type for sidebar menu items
type MenuItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  current?: boolean;
  submenu?: MenuItem[];
};

type OpenSections={
    accountManagement: boolean,
    activity: boolean,
}

export default function Sidebar() {
  const pathname = usePathname();
  
  const [openSections, setOpenSections] = useState<OpenSections>({
    accountManagement: false,
    activity: true,
  });

  const toggleSection = (section: keyof OpenSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const navigation: MenuItem[] = [
    {
      name: "Dashboard",
      href: "/Dashboard",
      icon: <Home size={18} />,
      current: pathname === "/Dashboard",
    },
    {
      name: "Account",
      href: "#",
      icon: <CreditCard size={18} />,
      submenu: [
        { name: "Credit", href: "/credit", icon: <CreditCard size={16} /> },
        { name: "Goals", href: "/goals", icon: <Goal size={16} /> },
      ],
    },
    {
      name: "Transaction",
      href: "/Transaction",
      icon: <RefreshCw size={18} />,
      current: pathname === "/transaction",
    },
    {
      name: "Notification",
      href: "/notification",
      icon: <Bell size={18} />,
      current: pathname === "/notification",
    },
    {
      name: "Cards",
      href: "/cards",
      icon: <Ticket size={18} />,
      current: pathname === "/cards",
    },
    {
      name: "Activity",
      href: "#",
      icon: <BarChart2 size={18} />,
      submenu: [
        { name: "Balance", href: "/balance", icon: <BarChart2 size={16} /> },
        { name: "Spend", href: "/spend", icon: <BarChart2 size={16} /> },
        { name: "Saving", href: "/saving", icon: <BarChart2 size={16} /> },
      ],
    },
    {
      name: "Setting",
      href: "/setting",
      icon: <Settings size={18} />,
      current: pathname === "/setting",
    },
  ];

  return (
    <div className="flex flex-col h-screen border-r border-gray-200 w-full bg-white py-4">
        <div className="mt-5 m-5">
        <h1 className="text-2xl font-bold">
          <span className="text-[#003399]">Opti</span>
          <span className="text-[#0DDE65]">Reach</span>
     </h1>
        </div>
      
      {/* Navigation */}
      <nav className="flex-1 px-2 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          // Check if this item has submenu
          const hasSubmenu = item.submenu && item.submenu.length > 0;
          // Get the correct section key for this item
          const sectionKey = item.name.toLowerCase().replace(/\s+/g, "");
          // Check if section is open
          const isOpen = openSections[sectionKey as keyof typeof openSections];
          // Check if item or any of its children is current
          const isActive = item.current || 
            (hasSubmenu && item.submenu?.some(subItem => 
              pathname === subItem.href
            ));

          return (
            <div key={item.name} className="space-y-1">
              {hasSubmenu ? (
                <>
                  {/* Expandable section header */}
                  <button
                    onClick={() => toggleSection(sectionKey)}
                    className={`group flex items-center justify-between w-full px-3 py-2 text-sm font-medium rounded-md ${
                      isActive ? "text-blue-600" : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center">
                      <span className={`mr-3 ${isActive ? "text-blue-500" : "text-gray-500"}`}>
                        {item.icon}
                      </span>
                      {item.name}
                    </div>
                    {isOpen ? (
                      <ChevronDown size={16} className="text-gray-500" />
                    ) : (
                      <ChevronRight size={16} className="text-gray-500" />
                    )}
                  </button>
                  
                  {/* Submenu items */}
                  {isOpen && (
                    <div className="pl-10 space-y-1">
                      {item.submenu?.map((subItem) => {
                        const isSubActive = pathname === subItem.href;
                        
                        return (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                              isSubActive
                                ? "text-blue-600"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            <span className={`mr-3 ${isSubActive ? "text-blue-500" : "text-gray-500"}`}>
                              {subItem.icon}
                            </span>
                            {subItem.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </>
              ) : (
                // Regular menu item
                <Link
                  href={item.href}
                  className={`group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    item.current
                      ? "text-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <span className={`mr-3 ${item.current ? "text-blue-500" : "text-gray-500"}`}>
                    {item.icon}
                  </span>
                  {item.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
      
      {/* Logout button */}
      <div className="px-4 mt-6">
        <button
          className="flex items-center w-full px-3 py-2 text-sm font-medium text-gray-700 rounded-md hover:bg-gray-50"
        >
          <LogOut size={18} className="mr-3 text-gray-500" />
          Logout
        </button>
      </div>
    </div>
  );
}
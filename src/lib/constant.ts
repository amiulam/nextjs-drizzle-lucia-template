import { LayoutDashboard, Settings, Sheet, SquareTerminal, Users } from "lucide-react";

export const data = {
  user: {
    name: "Amiul Amruh",
    email: "me@example.com",
    avatar: "/avatars/dipper.jpeg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/app/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Tables Example",
      url: "/app/table",
      icon: Sheet,
    },
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: false,
      items: [
        {
          title: "Sub Menu",
          url: "/app/sub-menu",
        },
        {
          title: "Framer",
          url: "/app/framer",
        },
      ],
    },
  ],
  administrator: [
    {
      name: "Users Management",
      url: "#",
      icon: Users,
    },
    {
      name: "App Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

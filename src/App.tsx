// import { useState } from "react";
import TopHeader from "./layout/TopHeader";
import LeftsideMenu from "./layout/LeftsideMenu";
// import MainContent from "./layout/MainContent";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       {/* <TopHeader /> */}
//       <div className="flex">
//         <LeftsideMenu />
//         <MainContent />
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";

const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </svg>
    ),
    content: {
      title: "Dashboard Overview",
      description: "Welcome back! Here's a snapshot of your workspace.",
      stats: [
        { label: "Total Projects", value: "24", delta: "+3 this week" },
        { label: "Active Tasks", value: "87", delta: "+12 today" },
        { label: "Team Members", value: "16", delta: "2 new" },
        { label: "Completion Rate", value: "94%", delta: "+2% this month" },
      ],
      body: "Your dashboard gives you a real-time view of everything happening across your team. Monitor project progress, track deadlines, and stay on top of what matters most.",
    },
  },
  {
    id: "projects",
    label: "Projects",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path d="M3 7a2 2 0 012-2h3l2 2h9a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
      </svg>
    ),
    content: {
      title: "Projects",
      description: "Manage and track all your ongoing projects.",
      stats: [
        { label: "In Progress", value: "8", delta: "3 due soon" },
        { label: "Completed", value: "41", delta: "+5 this month" },
        { label: "On Hold", value: "3", delta: "Review needed" },
        { label: "Upcoming", value: "6", delta: "Starting next week" },
      ],
      body: "Keep your projects organized and on schedule. Assign tasks, set milestones, and collaborate seamlessly with your team to deliver on time.",
    },
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path d="M4 20V14m5 6V10m5 10V4m5 16v-6" strokeLinecap="round" />
      </svg>
    ),
    content: {
      title: "Analytics",
      description: "Deep dive into your performance data.",
      stats: [
        { label: "Page Views", value: "12.4k", delta: "+18% vs last week" },
        { label: "Conversions", value: "3.2%", delta: "+0.4% this week" },
        { label: "Avg. Session", value: "4m 12s", delta: "+30s improvement" },
        { label: "Bounce Rate", value: "28%", delta: "-5% this month" },
      ],
      body: "Understand your metrics with clarity. From traffic trends to conversion funnels, analytics helps you make smarter decisions backed by real data.",
    },
  },
  {
    id: "team",
    label: "Team",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
        <path d="M16 3.13a4 4 0 010 7.75M21 21v-2a4 4 0 00-3-3.87" />
      </svg>
    ),
    content: {
      title: "Team",
      description: "Meet and manage your crew.",
      stats: [
        { label: "Total Members", value: "16", delta: "2 pending invites" },
        { label: "Active Now", value: "9", delta: "Online today" },
        { label: "Departments", value: "4", delta: "Eng, Design, PM, QA" },
        { label: "Open Roles", value: "3", delta: "Hiring now" },
      ],
      body: "Build a high-performing team with clear roles and responsibilities. Manage permissions, track contributions, and keep everyone aligned toward shared goals.",
    },
  },
  {
    id: "messages",
    label: "Messages",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    content: {
      title: "Messages",
      description: "All your conversations in one place.",
      stats: [
        { label: "Unread", value: "14", delta: "5 urgent" },
        { label: "Sent Today", value: "32", delta: "Active day" },
        { label: "Threads", value: "7", delta: "3 unresolved" },
        { label: "Mentions", value: "6", delta: "Needs attention" },
      ],
      body: "Stay connected with your team through direct messages and group threads. Never miss an important update or conversation.",
    },
  },
  {
    id: "settings",
    label: "Settings",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
    content: {
      title: "Settings",
      description: "Customize your workspace experience.",
      stats: [
        { label: "Integrations", value: "12", delta: "2 new available" },
        { label: "API Keys", value: "4", delta: "All active" },
        { label: "Webhooks", value: "7", delta: "All healthy" },
        { label: "Storage Used", value: "68%", delta: "32% remaining" },
      ],
      body: "Fine-tune your workspace to match your workflow. Manage integrations, configure notifications, set permissions, and keep your account secure.",
    },
  },
];

export default function App() {
  const [activeId, setActiveId] = useState("dashboard");

  const active = menuItems.find((m) => m.id === activeId);

  return (
    <>
      <div className="flex h-screen">
        <LeftsideMenu />
        {/* <aside className="w-64 p-4 border-e border-[#8D5F8C]">
          <h2 className="text-lg font-bold mb-6 text-[#8D5F8C]">MyApp</h2>
          <nav className="space-y-2"></nav>
        </aside> */}
        <main className="flex-1 p-4">
          <div className="h-10 text-[#8D5F8C]">
            <TopHeader />
          </div>
          <div className="bg-[#A376A2] rounded-lg shadow p-4 h-100 mt-4">
            <h1 className="text-2xl font-bold mb-2">Title</h1>
          </div>
        </main>
      </div>
    </>
  );
}

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FaCogs, FaKey, FaFileAlt, FaTools } from 'react-icons/fa'; // Importing icons
import { Logs, Cable, KeyRound, Settings, BookOpen } from "lucide-react";

const VerticalNavbar = () => {
  const router = useRouter();

  return (
    <nav className="w-64 min-h-screen text-white p-5">
      <div className="space-y-4">
        <Link
          className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 mt-8 scroll-m-20 text-base font-semibold tracking-tight"
          href="/applications"
        >
          <Cable className="mr-2" /> {/* Icon for APIs */}
          APIs
        </Link>
        <Link
          href="/profile"
          className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 mt-8 scroll-m-20 text-base font-semibold tracking-tight"
        >
          <Logs className="mr-2" /> {/* Icon for Audit Logs */}
          Audit Logs
        </Link>
        <Link
          href="/root-key"
          className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 mt-8 scroll-m-20 text-base font-semibold tracking-tight"
        >
          <KeyRound className="mr-2" /> {/* Icon for Root Key */}
          Root Key
        </Link>
        <Link
          href="/settings"
          className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 mt-8 scroll-m-20 text-base font-semibold tracking-tight"
        >
          <Settings className="mr-2" /> {/* Icon for Settings */}
          Settings
        </Link>
        <Link
          href="/settings"
          className="flex items-center w-full text-zinc-400 py-2 px-4 rounded hover:bg-neutral-900 hover:text-zinc-200 mt-8 scroll-m-20 text-base font-semibold tracking-tight"
        >
          <BookOpen className="mr-2" /> {/* Icon for Settings */}
          Docs
        </Link>
      </div>
    </nav>
  );
};

export default VerticalNavbar;

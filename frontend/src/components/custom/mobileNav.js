"use client"
import { Home, Briefcase, Award, BookOpen, Newspaper, User } from "lucide-react";
import Link from "next/link";
import { usePathname  } from "next/navigation";

const MobileNav = () => {
const pathname = usePathname()
  const isActive = (path) => pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        <Link
          href="/"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/") ? "text-accent" : "text-gray-600"
          }`}
        >
          <Home size={20} />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="/jobs"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/jobs") ? "text-accent" : "text-gray-600"
          }`}
        >
          <Briefcase size={20} />
          <span className="text-xs">Jobs</span>
        </Link>
        <Link
          href="/competitions"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/competitions") ? "text-accent" : "text-gray-600"
          }`}
        >
          <Award size={20} />
          <span className="text-xs">Compete</span>
        </Link>
        <Link
          href="/courses"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/courses") ? "text-accent" : "text-gray-600"
          }`}
        >
          <BookOpen size={20} />
          <span className="text-xs">Learn</span>
        </Link>
        <Link
          href="/news"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/news") ? "text-accent" : "text-gray-600"
          }`}
        >
          <Newspaper size={20} />
          <span className="text-xs">News</span>
        </Link>
        <Link
          href="/profile"
          className={`flex flex-col items-center space-y-1 ${
            isActive("/profile") ? "text-accent" : "text-gray-600"
          }`}
        >
          <User size={20} />
          <span className="text-xs">Profile</span>
        </Link>
      </div>
    </nav>
  );
};

export default MobileNav;
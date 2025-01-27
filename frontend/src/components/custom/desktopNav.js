"use client"
import { Home, Briefcase, Award, BookOpen, Newspaper, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DesktopNav = () => {
 const pathname = usePathname()
  const isActive = (path) => pathname === path;

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 p-6">
      <div className="flex flex-col w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">StudentHub</h1>
        </div>
        <div className="space-y-2">
          <Link
            href="/"
            className={`nav-item ${isActive("/") ? "active" : ""}`}
          >
            <Home size={20} />
            <span>Home</span>
          </Link>
          <Link
            href="/jobs"
            className={`nav-item ${isActive("/jobs") ? "active" : ""}`}
          >
            <Briefcase size={20} />
            <span>Jobs</span>
          </Link>
          <Link
            href="/competitions"
            className={`nav-item ${isActive("/competitions") ? "active" : ""}`}
          >
            <Award size={20} />
            <span>Competitions</span>
          </Link>
          <Link
            href="/courses"
            className={`nav-item ${isActive("/courses") ? "active" : ""}`}
          >
            <BookOpen size={20} />
            <span>Courses</span>
          </Link>
          <Link
            href="/news"
            className={`nav-item ${isActive("/news") ? "active" : ""}`}
          >
            <Newspaper size={20} />
            <span>News</span>
          </Link>
          <Link
            href="/profile"
            className={`nav-item ${isActive("/profile") ? "active" : ""}`}
          >
            <User size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
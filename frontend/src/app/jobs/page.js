"use client"
import { useState } from "react";
import { Search, Filter, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data based on the provided schema
  const jobs = [
    {
      _id: "676bd8a8c67f7cdd53b5f32b",
      company: "Motorola Solutions",
      title: "Junior Devops Engineer",
      location: "Bangalore, India",
      jobSummary: "Motorola Solutions is looking for a talented and highly motivated Junior DevOps Engineer...",
      type: "Full-time",
      experience: "Freshers",
      department: "IT/ Software",
      salary: "Best in industry",
    },
    // Add more mock jobs here
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input
            placeholder="Search jobs..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={20} />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Link key={job._id} href={`/jobs/${job._id}`} className="card hover:scale-[1.02]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-md">
                  <Briefcase className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{job.title}</h3>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-600">{job.location}</p>
              <p className="text-sm">{job.jobSummary}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm">
                  {job.type}
                </span>
                <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm">
                  {job.experience}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Jobs;
import { Briefcase, Award, TrendingUp, Users, Search, Calendar, MapPin, BookOpen, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Index = () => {
  const latestJobs = [
    {
      id: "1",
      company: "TechCorp",
      title: "Frontend Developer",
      location: "Remote",
      jobSummary: "Join our dynamic team as a Frontend Developer...",
      type: "Full-time",
      experience: "2-3 years",
      department: "Engineering",
    },
    {
      id: "2",
      company: "DataTech",
      title: "Data Scientist",
      location: "Bangalore",
      jobSummary: "Looking for an experienced Data Scientist...",
      type: "Full-time",
      experience: "3-5 years",
      department: "Data Science",
    },
    {
      id: "3",
      company: "DesignHub",
      title: "UX Designer",
      location: "Mumbai",
      jobSummary: "Create amazing user experiences...",
      type: "Contract",
      experience: "2+ years",
      department: "Design",
    },
  ];

  const latestCompetitions = [
    {
      id: "1",
      title: "AI Innovation Challenge",
      organizer: "TechCorp",
      date: "March 15, 2024",
      location: "Online",
      prize: "₹5,00,000",
      type: "AI/ML",
    },
    {
      id: "2",
      title: "Hackathon 2024",
      organizer: "CodeHub",
      date: "March 20, 2024",
      location: "Hybrid",
      prize: "₹3,00,000",
      type: "Development",
    },
    {
      id: "3",
      title: "Design Sprint",
      organizer: "DesignCo",
      date: "March 25, 2024",
      location: "Online",
      prize: "₹2,00,000",
      type: "Design",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4 bg-primary/5 p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to StudentHub
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Your gateway to opportunities - discover jobs, competitions, and resources tailored for students.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-accent/5">
          <TrendingUp className="text-accent mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Latest Trends</h2>
          <div className="flex flex-wrap gap-2">
            {["AI/ML", "Web3", "Cloud", "Data Science", "DevOps"].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="card bg-accent/5">
          <Users className="text-accent mb-4" size={32} />
          <h2 className="text-xl font-semibold mb-2">Community</h2>
          <div className="space-y-2">
            <p className="text-gray-600">5000+ Active Students</p>
            <p className="text-gray-600">1000+ Companies</p>
            <p className="text-gray-600">500+ Daily Jobs</p>
          </div>
        </div>
      </div>

      {/* Latest Jobs Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Latest Jobs</h2>
          <Link href="/jobs">
            <Button variant="outline" className="text-accent hover:bg-accent/10">View All Jobs</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestJobs.map((job) => (
            <Link key={job.id} href={`/jobs/${job.id}`} className="card hover:scale-[1.02]">
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

      {/* Latest Competitions Section */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Latest Competitions</h2>
          <Link href="/competitions">
            <Button variant="outline" className="text-accent hover:bg-accent/10">View All Competitions</Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestCompetitions.map((competition) => (
            <div key={competition.id} className="card hover:scale-[1.02]">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent/10 rounded-md">
                    <Award className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{competition.title}</h3>
                    <p className="text-sm text-gray-600">{competition.organizer}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span>{competition.date}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin size={16} />
                  <span>{competition.location}</span>
                </div>
                <div className="flex items-center gap-2 mt-3">
                  <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm">
                    {competition.type}
                  </span>
                  <span className="px-2 py-1 bg-green-100 text-green-700 rounded-md text-sm">
                    Prize: {competition.prize}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
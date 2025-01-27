"use client"
import { Award, Search, Filter, Calendar, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const competitions = [
  {
    id: 1,
    title: "National Coding Championship 2024",
    organizer: "TechCorp India",
    date: "March 15, 2024",
    location: "Online",
    prize: "₹5,00,000",
    type: "Coding",
  },
  {
    id: 2,
    title: "Data Science Hackathon",
    organizer: "Analytics Vidya",
    date: "April 1, 2024",
    location: "Hybrid",
    prize: "₹3,00,000",
    type: "Data Science",
  },
  {
    id: 3,
    title: "UI/UX Design Challenge",
    organizer: "DesignHub",
    date: "March 25, 2024",
    location: "Online",
    prize: "₹2,00,000",
    type: "Design",
  },
];

const Competitions = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Competitions</h1>
          <p className="text-gray-600">Showcase your skills and win exciting prizes</p>
        </div>
        <Button variant="outline">Create Competition</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input placeholder="Search competitions..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={20} />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {competitions.map((competition) => (
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
  );
};

export default Competitions;
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Trophy,
  Users,
  Clock,
  Building,
  Award,
  ExternalLink,
} from "lucide-react";

const CompetitionDetails = () => {

  // Mock competition data
  const competition = {
    title: "AI Innovation Challenge",
    organizer: "TechCorp",
    description:
      "Join our AI Innovation Challenge and showcase your skills in developing cutting-edge AI solutions. This competition aims to find the most innovative applications of artificial intelligence across various domains.",
    deadline: "March 15, 2024",
    prize: "₹5,00,000",
    participants: "500+",
    duration: "4 weeks",
    requirements: [
      "Basic knowledge of Machine Learning",
      "Programming skills in Python",
      "Understanding of Neural Networks",
      "Data preprocessing experience",
    ],
    rules: [
      "Teams must consist of 2-4 members",
      "All code must be original",
      "Solutions must be scalable",
      "Multiple submissions are not allowed",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{competition.title}</h1>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <Building size={18} />
              <span>{competition.organizer}</span>
            </div>
          </div>
          <Button className="w-full md:w-auto">Register Now</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <Trophy className="text-primary mb-2" size={24} />
          <h3 className="font-semibold">Prize Pool</h3>
          <p className="text-gray-600">{competition.prize}</p>
        </div>
        <div className="card">
          <Calendar className="text-primary mb-2" size={24} />
          <h3 className="font-semibold">Deadline</h3>
          <p className="text-gray-600">{competition.deadline}</p>
        </div>
        <div className="card">
          <Users className="text-primary mb-2" size={24} />
          <h3 className="font-semibold">Participants</h3>
          <p className="text-gray-600">{competition.participants}</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">About the Competition</h2>
        <p className="text-gray-600 mb-6">{competition.description}</p>

        <h3 className="font-semibold mb-2">Requirements:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          {competition.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2">Rules:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {competition.rules.map((rule, index) => (
            <li key={index}>{rule}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompetitionDetails;
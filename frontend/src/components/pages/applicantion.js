"use client"
import { Clock, CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";

const mockApplications = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    company: "Tech Corp",
    submittedAt: "2024-01-25",
    status: "pending",
    feedback: "",
  },
  {
    id: 2,
    jobTitle: "UI/UX Designer",
    company: "Design Studio",
    submittedAt: "2024-01-20",
    status: "approved",
    feedback: "Great portfolio!",
  },
  {
    id: 3,
    jobTitle: "Full Stack Developer",
    company: "Startup Inc",
    submittedAt: "2024-01-15",
    status: "rejected",
    feedback: "Looking for more experience",
  },
];

const Application = () => {
 

  const getStatusColor = (status) => {
    switch (status) {
      case "approved":
        return "text-green-500";
      case "rejected":
        return "text-red-500";
      default:
        return "text-yellow-500";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "rejected":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getTimelineStatus = (status) => {
    const stages = ["pending", "reviewing", "approved"];
    const currentIndex = stages.indexOf(status);
    
    return stages.map((stage, index) => {
      let stageColor = "bg-gray-200";
      let textColor = "text-gray-500";
      let lineColor = "bg-gray-200";
      
      if (status === "rejected") {
        if (index <= 1) {
          stageColor = "bg-red-500";
          textColor = "text-red-500";
          lineColor = "bg-red-500";
        }
      } else if (index <= currentIndex) {
        stageColor = "bg-green-500";
        textColor = "text-green-500";
        lineColor = "bg-green-500";
      }
      
      return (
        <div key={stage} className="flex items-center">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 rounded-full ${stageColor} flex items-center justify-center`}>
              {index === 0 && <Clock className="w-4 h-4 text-white" />}
              {index === 1 && <ArrowRight className="w-4 h-4 text-white" />}
              {index === 2 && <CheckCircle className="w-4 h-4 text-white" />}
            </div>
            <span className={`mt-2 text-sm font-medium capitalize ${textColor}`}>
              {stage}
            </span>
          </div>
          {index < stages.length - 1 && (
            <div className={`h-1 w-24 ${lineColor} mx-2`} />
          )}
        </div>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">My Applications</h1>
      <div className="grid gap-6">
        {mockApplications.map((application) => (
          <Card
            key={application.id}
            className="p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{application.jobTitle}</h3>
                  <p className="text-gray-600">{application.company}</p>
                  <p className="text-sm text-gray-500">
                    Submitted: {application.submittedAt}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {getStatusIcon(application.status)}
                  <span
                    className={`capitalize ${getStatusColor(application.status)}`}
                  >
                    {application.status}
                  </span>
                </div>
              </div>
              
              <div className="flex justify-center items-center py-4 bg-gray-50 rounded-lg">
                {getTimelineStatus(application.status)}
              </div>

              {application.feedback && (
                <div className="p-3 bg-gray-50 rounded-md">
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Feedback:</span>{" "}
                    {application.feedback}
                  </p>
                </div>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Application;
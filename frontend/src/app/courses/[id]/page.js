import { Button } from "@/components/ui/button";
import {
  Clock,
  BookOpen,
  Star,
  Users,
  CheckCircle,
  PlayCircle,
  Award,
} from "lucide-react";

const CourseDetails = () => {

  // Mock course data
  const course = {
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    description:
      "Master web development from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and more. Build real-world projects and gain practical experience.",
    duration: "12 weeks",
    level: "Beginner",
    rating: 4.8,
    students: 15000,
    price: "₹4,999",
    topics: [
      "HTML5 & CSS3 Fundamentals",
      "JavaScript ES6+",
      "React.js",
      "Node.js & Express",
      "MongoDB",
      "REST APIs",
      "Authentication & Security",
      "Deployment",
    ],
    requirements: [
      "Basic computer knowledge",
      "No prior programming experience needed",
      "Willingness to learn and practice",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="card">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold">{course.title}</h1>
            <div className="flex items-center gap-4 text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-yellow-400" size={20} />
                <span>{course.rating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={20} />
                <span>{course.students.toLocaleString()} students</span>
              </div>
            </div>
            <p className="text-gray-600">Created by {course.instructor}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div className="text-3xl font-bold">{course.price}</div>
            <Button className="w-full">Enroll Now</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <Clock className="text-primary mb-2" size={24} />
          <h3 className="font-semibold">Duration</h3>
          <p className="text-gray-600">{course.duration}</p>
        </div>
        <div className="card">
          <BookOpen className="text-primary mb-2" size={24} />
          <h3 className="font-semibold">Level</h3>
          <p className="text-gray-600">{course.level}</p>
        </div>
        <div className="card">
          <Award className="text-primary mb-2" size={24} />
          <h3 className="font-semibold">Certificate</h3>
          <p className="text-gray-600">Upon completion</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">About This Course</h2>
        <p className="text-gray-600 mb-6">{course.description}</p>

        <h3 className="font-semibold mb-2">What you'll learn:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
          {course.topics.map((topic, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="text-primary" size={20} />
              <span className="text-gray-600">{topic}</span>
            </div>
          ))}
        </div>

        <h3 className="font-semibold mb-2">Requirements:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {course.requirements.map((req, index) => (
            <li key={index}>{req}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseDetails;
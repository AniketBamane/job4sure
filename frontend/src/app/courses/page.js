import { Search, Filter, BookOpen, Clock, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    duration: "12 weeks",
    level: "Beginner",
    rating: 4.8,
    students: 15000,
    price: "₹4,999",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Data Science Fundamentals",
    instructor: "Jane Smith",
    duration: "8 weeks",
    level: "Intermediate",
    rating: 4.7,
    students: 12000,
    price: "₹3,999",
    category: "Data Science",
  },
  {
    id: 3,
    title: "Mobile App Development with React Native",
    instructor: "Mike Johnson",
    duration: "10 weeks",
    level: "Intermediate",
    rating: 4.9,
    students: 8000,
    price: "₹5,999",
    category: "Mobile Development",
  },
];

const Courses = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Courses</h1>
          <p className="text-gray-600">Enhance your skills with our curated courses</p>
        </div>
        <Button variant="outline">My Learning</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input placeholder="Search courses..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={20} />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="card hover:scale-[1.02]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-md">
                  <BookOpen className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-sm text-gray-600">{course.instructor}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span>{course.rating} ({course.students.toLocaleString()} students)</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm">
                  {course.level}
                </span>
                <span className="font-semibold text-lg">{course.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
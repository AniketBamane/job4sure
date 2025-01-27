import { User, Mail, Phone, MapPin, Briefcase, GraduationCap, Award, Link as LinkIcon, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const profile = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+91 98765 43210",
    location: "Bangalore, India",
    bio: "Final year Computer Science student passionate about web development and AI. Looking for opportunities in full-stack development.",
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "Indian Institute of Technology",
        year: "2020-2024",
        grade: "8.5 CGPA",
        image: "photo-1473091534298-04dcbce3278c"
      },
    ],
    experience: [
      {
        title: "Software Development Intern",
        company: "Tech Solutions Inc.",
        duration: "May 2023 - July 2023",
        description: "Worked on developing full-stack web applications using React and Node.js",
        image: "photo-1486312338219-ce68d2c6f44d"
      },
    ],
    projects: [
      {
        title: "StudentHub Platform",
        description: "A comprehensive platform for students to find opportunities",
        technologies: ["React", "Node.js", "MongoDB"],
        image: "photo-1498050108023-c5249f4df085",
        link: "https://github.com/johndoe/studenthub"
      },
      {
        title: "AI Study Assistant",
        description: "An AI-powered study assistant for students",
        technologies: ["Python", "TensorFlow", "Flask"],
        image: "photo-1485827404703-89b55fcc595e",
        link: "https://github.com/johndoe/ai-study-assistant"
      }
    ],
    skills: ["React", "Node.js", "Python", "Java", "SQL", "AWS", "Git"],
    certifications: [
      {
        name: "AWS Certified Developer Associate",
        issuer: "Amazon Web Services",
        date: "Jan 2024",
        image: "photo-1581091226825-a6a2a5aee158"
      },
    ],
    socials: {
      linkedin: "linkedin.com/in/johndoe",
      github: "github.com/johndoe",
      portfolio: "johndoe.dev",
    },
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center">
            <User className="w-10 h-10 text-accent" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <div className="flex items-center gap-2 text-gray-600">
              <MapPin size={16} />
              <span>{profile.location}</span>
            </div>
          </div>
        </div>
        <Button className="bg-accent hover:bg-accent/90">Edit Profile</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <p className="text-gray-600">{profile.bio}</p>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="space-y-6">
              {profile.projects.map((project, index) => (
                <div key={index} className="flex gap-4">
                  <img
                    src={`https://source.unsplash.com/${project.image}`}
                    alt={project.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-accent/10 text-accent rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Education</h2>
            {profile.education.map((edu, index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={`https://source.unsplash.com/${edu.image}`}
                  alt={edu.institution}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.year} • {edu.grade}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            {profile.experience.map((exp, index) => (
              <div key={index} className="flex gap-4">
                <img
                  src={`https://source.unsplash.com/${exp.image}`}
                  alt={exp.company}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{exp.title}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">{exp.duration}</p>
                  <p className="text-gray-600 mt-2">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail size={16} />
                <span>{profile.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Phone size={16} />
                <span>{profile.phone}</span>
              </div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Certifications</h2>
            {profile.certifications.map((cert, index) => (
              <div key={index} className="flex gap-3 items-start">
                <img
                  src={`https://source.unsplash.com/${cert.image}`}
                  alt={cert.name}
                  className="w-32 h-24 object-cover rounded-lg"
                />
                <div>
                  <h3 className="font-semibold">{cert.name}</h3>
                  <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card">
            <h2 className="text-xl font-semibold mb-4">Social Links</h2>
            <div className="space-y-3">
              {Object.entries(profile.socials).map(([platform, url]) => (
                <div key={platform} className="flex items-center gap-2 text-gray-600">
                  <LinkIcon size={16} />
                  <a href={`https://${url}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {url}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
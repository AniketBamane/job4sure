import { Button } from "@/components/ui/button";
import { MapPin, Building, Clock, Briefcase, Mail, Phone } from "lucide-react";

const JobDetails = () => {

  // Mock job data based on the provided schema
  const job = {
    _id: "676bd8a8c67f7cdd53b5f32b",
    company: "Motorola Solutions",
    title: "Junior Devops Engineer",
    location: "Bangalore, India",
    jobSummary: "Motorola Solutions is looking for a talented and highly motivated Junior DevOps Engineer...",
    responsibilities: [
      "Design, develop, and maintain both front-end and back-end components",
      "Participate in code reviews and ensure adherence to coding standards",
      "Automate infrastructure provisioning, configuration management, and deployment",
      "Design and implement continuous integration and continuous delivery (CI/CD)",
      "Monitor system performance, identify bottlenecks, and troubleshoot issues",
      "Collaborate with the security team to implement and maintain security",
    ],
    requiredSkills: [
      "Excellent programming skills in Java and Python",
      "Sound Full Stack Development knowledge and DevOps skills",
      "Sound knowledge of Cloud technologies (AWS/Azure)",
      "Software development expertise in Bash/Python",
      "Experience with Docker, Kubernetes, Artifactory, Jenkins/GitLab, Ansible",
      "Experience working with Deployment/Configuration management tools",
      "Excellent troubleshooting skills",
      "Strong verbal and written communication skills",
    ],
    type: "Full-time",
    experience: "Freshers",
    department: "IT/ Software",
    salary: "Best in industry",
    email: "kameshwar.duvvuri@motorolasolutions.com",
    contacts: ["9845162868"],
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="card">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">{job.title}</h1>
            <div className="flex items-center gap-2 mt-2 text-gray-600">
              <Building size={18} />
              <span>{job.company}</span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-gray-600">
              <MapPin size={18} />
              <span>{job.location}</span>
            </div>
          </div>
          <Button className="w-full md:w-auto">Apply Now</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card">
          <Clock className="text-accent mb-2" size={24} />
          <h3 className="font-semibold">Job Type</h3>
          <p className="text-gray-600">{job.type}</p>
        </div>
        <div className="card">
          <Briefcase className="text-accent mb-2" size={24} />
          <h3 className="font-semibold">Experience</h3>
          <p className="text-gray-600">{job.experience}</p>
        </div>
        <div className="card">
          <Building className="text-accent mb-2" size={24} />
          <h3 className="font-semibold">Department</h3>
          <p className="text-gray-600">{job.department}</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Job Description</h2>
        <p className="text-gray-600 mb-6">{job.jobSummary}</p>

        <h3 className="font-semibold mb-2">Responsibilities:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
          {job.responsibilities.map((resp, index) => (
            <li key={index}>{resp}</li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2">Required Skills:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          {job.requiredSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <Mail size={18} />
            <a href={`mailto:${job.email}`} className="hover:text-accent">
              {job.email}
            </a>
          </div>
          {job.contacts.map((contact, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-600">
              <Phone size={18} />
              <a href={`tel:${contact}`} className="hover:text-accent">
                {contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
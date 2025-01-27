"use client"
import { Calendar, Share2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const NewsDetails = () => {

  const mockNews = {
    id: 1,
    title: "Google Announces New AI Development Program for Students",
    author: "John Doe",
    date: "March 1, 2024",
    category: "Technology",
    content: `Google has launched a comprehensive AI development program aimed at university students. The program will provide students with hands-on experience in machine learning and artificial intelligence development.

    The program includes:
    • Access to Google's AI development tools
    • Mentorship from Google engineers
    • Real-world project opportunities
    • Potential internship placements`,
    image: "https://source.unsplash.com/random/800x400?ai",
    tags: ["AI", "Education", "Technology", "Google"],
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-6">
        <img
          src={mockNews.image}
          alt={mockNews.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                {mockNews.category}
              </span>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {mockNews.date}
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-1" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <MessageSquare className="w-4 h-4 mr-1" />
                Comment
              </Button>
            </div>
          </div>

          <h1 className="text-3xl font-bold">{mockNews.title}</h1>
          <p className="text-gray-600">By {mockNews.author}</p>

          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{mockNews.content}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4">
            {mockNews.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
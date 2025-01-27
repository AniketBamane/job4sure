import { Search, Filter, Newspaper, Calendar, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const news = [
  {
    id: 1,
    title: "Google Announces New AI Development Program for Students",
    source: "Tech Daily",
    date: "March 1, 2024",
    category: "Technology",
    summary: "Google launches a comprehensive AI development program aimed at university students...",
  },
  {
    id: 2,
    title: "Top Tech Companies Increase Entry-Level Salaries",
    source: "Business Insider",
    date: "February 28, 2024",
    category: "Career",
    summary: "Major tech companies announce significant increases in entry-level compensation packages...",
  },
  {
    id: 3,
    title: "New Certification Program Launched by Microsoft",
    source: "Tech News",
    date: "February 25, 2024",
    category: "Education",
    summary: "Microsoft introduces a new certification program focused on cloud computing and AI...",
  },
];

const News = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold">Industry News</h1>
          <p className="text-gray-600">Stay updated with the latest tech and career news</p>
        </div>
        <Button variant="outline">Subscribe to Newsletter</Button>
      </div>

      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <Input placeholder="Search news..." className="pl-10" />
        </div>
        <Button variant="outline" className="flex items-center gap-2">
          <Filter size={20} />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {news.map((item) => (
          <div key={item.id} className="card hover:scale-[1.02]">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent/10 rounded-md">
                  <Newspaper className="text-accent" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.source}</p>
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>
              <p className="text-gray-600">{item.summary}</p>
              <div className="flex items-center justify-between mt-3">
                <span className="px-2 py-1 bg-accent/10 text-accent rounded-md text-sm">
                  {item.category}
                </span>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  Read More
                  <ExternalLink size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
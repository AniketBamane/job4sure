"use client"
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Input } from '@/components/ui/input';



const technologies = [
  { name: 'React', color: 'default' },
  { name: 'Node', color: 'secondary' },
  { name: 'Express', color: 'default' },
  { name: 'MongoDB', color: 'secondary' },
  { name: 'Frontend', color: 'default' },
  { name: 'Backend', color: 'secondary' },
  { name: 'Python', color: 'default' },
] ;

const mockVideos= [
  {
    _id: '6797a2fc2f9fb02c2b88ec86',
    videoUrl: 'https://www.youtube.com/embed/rX4dlpvbvu8?si=cUoCEpDBqo1WxV92',
    title: '3 Year Experience React Interview',
    type: 'react',
    createdAt: '2025-01-26T12:00:00Z',
    updatedAt: '2025-01-26T12:00:00Z',
  },
  // Add more mock videos as needed
];

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState(null);

  const filteredVideos = mockVideos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTech = !selectedTech || video.type.toLowerCase() === selectedTech.toLowerCase();
    return matchesSearch && matchesTech;
  });

  return (
    <div className="container mx-auto md:px-10 animate-fade-in">
      <h1 className="text-3xl font-bold text-primary mb-8">Learn & Grow</h1>
      
      {/* Search Section */}
      <div className="relative mb-6">
        <Input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 w-full"
        />
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
      </div>

      {/* Technology Filters */}
      <div className="mb-6">
        <Carousel
         
          className="w-full"
        >
          <CarouselContent className="-ml-2 py-2 pl-4">
            {technologies.map((tech) => (
              <CarouselItem key={tech.name} className="pl-2 basis-auto">
                <Badge
                  variant={tech.color}
                  className={`cursor-pointer text-sm px-4 py-2 ${
                    selectedTech === tech.name.toLowerCase()
                      ? 'ring-2 ring-primary'
                      : ''
                  }`}
                  onClick={() =>
                    setSelectedTech(
                      selectedTech === tech.name.toLowerCase()
                        ? null
                        : tech.name.toLowerCase()
                    )
                  }
                >
                  {tech.name}
                </Badge>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="md:block sm:hidden" />
          <CarouselNext className="md:block sm:hidden" />
        </Carousel>
      </div>

      {/* Video Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredVideos.map((video) => (
          <Card key={video._id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold line-clamp-2">
                {video.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={video.videoUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Learn;
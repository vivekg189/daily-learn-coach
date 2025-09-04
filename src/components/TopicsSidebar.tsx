import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

interface TopicsSidebarProps {
  course: string;
  topics: string[];
  selectedTopic: string | null;
  onTopicSelect: (topic: string) => void;
  onBackToCourses: () => void;
}

export function TopicsSidebar({ 
  course, 
  topics, 
  selectedTopic, 
  onTopicSelect, 
  onBackToCourses 
}: TopicsSidebarProps) {
  return (
    <div className="w-80 border-r bg-background">
      <div className="p-4 border-b">
        <Button 
          variant="ghost" 
          size="sm"
          onClick={onBackToCourses}
          className="mb-3 -ml-2"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Courses
        </Button>
        <h2 className="text-lg font-semibold capitalize flex items-center">
          <BookOpen className="w-5 h-5 mr-2" />
          {course} Topics
        </h2>
      </div>

      <ScrollArea className="h-[calc(100vh-120px)]">
        <div className="p-4 space-y-2">
          {topics.map((topic, index) => (
            <Button
              key={topic}
              variant={selectedTopic === topic ? "default" : "ghost"}
              className="w-full justify-start text-sm h-auto py-3 px-3"
              onClick={() => onTopicSelect(topic)}
            >
              <span className="text-xs text-muted-foreground mr-2 min-w-[20px]">
                {index + 1}
              </span>
              <span className="text-left truncate">{topic}</span>
            </Button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
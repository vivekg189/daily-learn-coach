import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { getLessonContent } from '@/data/lessonContent';

interface LessonContentProps {
  course: string;
  topic: string;
  onBackToTopics: () => void;
}

export function LessonContent({ course, topic, onBackToTopics }: LessonContentProps) {
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTopicContent();
  }, [course, topic]);

  const fetchTopicContent = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Get content from our comprehensive content database
      const content = getLessonContent(course, topic);
      setContent(content);
    } catch (err) {
      setError('Failed to load content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4" />
          <p className="text-muted-foreground">Loading content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <Card>
          <CardContent className="p-6 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={fetchTopicContent}>Try Again</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={onBackToTopics}
            className="-ml-2 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Topics
          </Button>
          
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">{topic}</h1>
              <p className="text-muted-foreground capitalize">{course} Course</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div 
                className="prose prose-slate max-w-none dark:prose-invert prose-pre:bg-slate-100 dark:prose-pre:bg-slate-800 prose-code:text-primary"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
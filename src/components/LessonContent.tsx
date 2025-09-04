import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink, Loader2 } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

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
      // For now, we'll use placeholder content
      // In a real implementation, you would fetch from W3Schools or GeeksforGeeks APIs
      const mockContent = await getMockContent(course, topic);
      setContent(mockContent);
    } catch (err) {
      setError('Failed to load content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const getMockContent = async (course: string, topic: string): Promise<string> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const topicKey = topic.toLowerCase().replace(/\s+/g, '_');
    
    const mockContents = {
      'python_home': `
        <h1>Python Tutorial</h1>
        <p>Python is a popular programming language. It was created by Guido van Rossum, and released in 1991.</p>
        
        <h2>What is Python?</h2>
        <ul>
          <li>Python is a high-level, interpreted programming language</li>
          <li>Python has a simple syntax similar to the English language</li>
          <li>Python can be treated in a procedural way, an object-oriented way or a functional way</li>
        </ul>

        <h2>What can Python do?</h2>
        <ul>
          <li>Python can be used on a server to create web applications</li>
          <li>Python can be used alongside software to create workflows</li>
          <li>Python can connect to database systems</li>
          <li>Python can handle big data and perform complex mathematics</li>
          <li>Python can be used for rapid prototyping, or for production-ready software development</li>
        </ul>

        <h2>Why Python?</h2>
        <ul>
          <li>Python works on different platforms (Windows, Mac, Linux, Raspberry Pi, etc)</li>
          <li>Python has a simple syntax similar to the English language</li>
          <li>Python has syntax that allows developers to write programs with fewer lines than some other programming languages</li>
          <li>Python runs on an interpreter system, meaning that code can be executed as soon as it is written</li>
        </ul>
      `,
      'python_intro': `
        <h1>Python Introduction</h1>
        <p>Python is a programming language that lets you work quickly and integrate systems more effectively.</p>
        
        <h2>Python Features</h2>
        <ul>
          <li><strong>Easy to Learn:</strong> Python has a simple syntax that mimics natural language</li>
          <li><strong>Interpreted:</strong> Python code is executed line by line</li>
          <li><strong>Object-Oriented:</strong> Everything in Python is an object</li>
          <li><strong>High-level:</strong> Python handles memory management automatically</li>
          <li><strong>Cross-platform:</strong> Python runs on Windows, macOS, and Linux</li>
        </ul>

        <h2>Python Versions</h2>
        <p>There are two major Python versions:</p>
        <ul>
          <li><strong>Python 2:</strong> Legacy version (end of life January 1, 2020)</li>
          <li><strong>Python 3:</strong> Current version with active development</li>
        </ul>

        <p><strong>Note:</strong> This tutorial focuses on Python 3, which is the recommended version.</p>
      `,
      'python_get_started': `
        <h1>Python Get Started</h1>
        
        <h2>Python Install</h2>
        <p>Many PCs and Macs will have Python already installed. To check if you have Python installed, open a command line and type:</p>
        <pre><code>python --version</code></pre>
        
        <h2>Python Installation</h2>
        <p>If you don't have Python installed, you can download it for free from: <a href="https://www.python.org/" target="_blank">https://www.python.org/</a></p>
        
        <h2>Python Quickstart</h2>
        <p>Python is an interpreted programming language, this means that as a developer you write Python (.py) files in a text editor and then put those files into the Python interpreter to be executed.</p>
        
        <p>The way to run a Python file is like this on the command line:</p>
        <pre><code>python helloworld.py</code></pre>
        
        <p>Where "helloworld.py" is the name of your Python file.</p>
        
        <h2>Your First Python Program</h2>
        <p>Let's write our first Python file, called helloworld.py, which can be done in any text editor:</p>
        <pre><code>print("Hello, World!")</code></pre>
        
        <p>Simple as that. Save your file. Open your command line, navigate to the directory where you saved your file, and run:</p>
        <pre><code>python helloworld.py</code></pre>
        
        <p>The output should read: Hello, World!</p>
      `
    };

    return mockContents[topicKey] || `
      <h1>${topic}</h1>
      <p>Content for ${topic} is being prepared. This topic will cover important concepts related to ${topic.toLowerCase()}.</p>
      
      <h2>What you'll learn:</h2>
      <ul>
        <li>Core concepts of ${topic}</li>
        <li>Practical examples and use cases</li>
        <li>Best practices and common patterns</li>
        <li>Hands-on exercises</li>
      </ul>
      
      <p><em>Note: This content would typically be fetched from educational platforms like W3Schools or GeeksforGeeks.</em></p>
    `;
  };

  const getExternalLinks = () => {
    const topicSlug = topic.toLowerCase().replace(/\s+/g, '_').replace(/\./g, '');
    return [
      {
        name: 'W3Schools',
        url: `https://www.w3schools.com/python/${topicSlug}.asp`
      },
      {
        name: 'GeeksforGeeks', 
        url: `https://www.geeksforgeeks.org/python-${topicSlug}/`
      }
    ];
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
            
            <div className="flex gap-2">
              {getExternalLinks().map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="sm"
                  asChild
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {link.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <ScrollArea className="h-[calc(100vh-300px)]">
              <div 
                className="prose prose-slate max-w-none dark:prose-invert"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
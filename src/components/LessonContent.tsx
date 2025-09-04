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
        <h1>Welcome to Python Programming!</h1>
        <p>Python is a powerful yet easy-to-learn programming language. Think of it like learning to speak a new language, but instead of talking to people, you're talking to computers!</p>
        
        <h2>What is Python?</h2>
        <p>Python is a programming language that reads almost like English. Here's what makes it special:</p>
        <ul>
          <li><strong>Easy to read:</strong> Python code looks clean and simple</li>
          <li><strong>Beginner-friendly:</strong> Perfect for people who are new to programming</li>
          <li><strong>Powerful:</strong> Used by companies like Google, Netflix, and Instagram</li>
          <li><strong>Versatile:</strong> You can build websites, games, apps, and even control robots!</li>
        </ul>

        <h2>What can you build with Python?</h2>
        <ul>
          <li><strong>Websites:</strong> Like Instagram and Pinterest</li>
          <li><strong>Games:</strong> Simple games or complex simulations</li>
          <li><strong>Mobile Apps:</strong> Apps for your phone</li>
          <li><strong>Data Analysis:</strong> Understand patterns in large amounts of data</li>
          <li><strong>Automation:</strong> Make your computer do repetitive tasks for you</li>
        </ul>

        <h2>Why choose Python?</h2>
        <ul>
          <li><strong>Simple syntax:</strong> Looks like English sentences</li>
          <li><strong>Large community:</strong> Millions of people ready to help you learn</li>
          <li><strong>Free:</strong> Completely free to download and use</li>
          <li><strong>Cross-platform:</strong> Works on Windows, Mac, and Linux</li>
        </ul>

        <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0;">
          <h3>💡 Fun Fact</h3>
          <p>Python was named after the British comedy group "Monty Python's Flying Circus" - not the snake!</p>
        </div>
      `,
      'python_intro': `
        <h1>Getting to Know Python</h1>
        <p>Let's dive deeper into what makes Python such an amazing programming language for beginners!</p>
        
        <h2>Python's Special Features</h2>
        
        <h3>1. Easy to Learn 📚</h3>
        <p>Python uses simple words and symbols. Compare these two ways to say "Hello":</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
          <strong>In Python:</strong><br>
          <code>print("Hello, World!")</code><br><br>
          <strong>In some other languages:</strong><br>
          <code>System.out.println("Hello, World!");</code>
        </div>
        <p>See how Python is shorter and clearer?</p>

        <h3>2. Interpreted Language 🔄</h3>
        <p>This means you can write code and see results immediately - no waiting!</p>
        
        <h3>3. Object-Oriented 🎯</h3>
        <p>Think of this like organizing your toys in boxes. Python helps you organize your code neatly.</p>
        
        <h3>4. High-level Language 🚀</h3>
        <p>Python handles the complicated computer stuff for you, so you can focus on solving problems.</p>

        <h2>Python Versions: Which One to Use?</h2>
        <p>There are two main versions:</p>
        <ul>
          <li><strong>Python 2:</strong> The older version (like an old phone - still works but not recommended)</li>
          <li><strong>Python 3:</strong> The current version (like the latest smartphone - this is what you want!)</li>
        </ul>
        
        <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
          <h3>✅ Recommendation</h3>
          <p>Always use Python 3! It's actively updated and has all the latest features.</p>
        </div>
      `,
      'python_get_started': `
        <h1>Let's Start Your Python Journey!</h1>
        
        <h2>Step 1: Check if Python is Already Installed</h2>
        <p>Many computers already have Python installed. Let's check yours!</p>
        
        <h3>On Windows:</h3>
        <ol>
          <li>Press <strong>Windows key + R</strong></li>
          <li>Type <code>cmd</code> and press Enter</li>
          <li>Type <code>python --version</code> and press Enter</li>
        </ol>
        
        <h3>On Mac:</h3>
        <ol>
          <li>Press <strong>Cmd + Space</strong></li>
          <li>Type <code>Terminal</code> and press Enter</li>
          <li>Type <code>python3 --version</code> and press Enter</li>
        </ol>
        
        <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
          <h3>⚠️ What You'll See</h3>
          <p>If Python is installed, you'll see something like: <code>Python 3.9.7</code><br>
          If not, you'll get an error message.</p>
        </div>

        <h2>Step 2: Install Python (if needed)</h2>
        <p>If Python isn't installed, don't worry! Here's how to get it:</p>
        <ol>
          <li>Go to <strong>python.org</strong></li>
          <li>Click the big yellow "Download Python" button</li>
          <li>Run the downloaded file</li>
          <li><strong>Important:</strong> Check "Add Python to PATH" during installation!</li>
        </ol>

        <h2>Step 3: Your First Python Program!</h2>
        <p>Let's write your very first Python program. It's a tradition to start with "Hello, World!"</p>
        
        <h3>Method 1: Using a Text Editor</h3>
        <ol>
          <li>Open Notepad (Windows) or TextEdit (Mac)</li>
          <li>Type exactly: <code>print("Hello, World!")</code></li>
          <li>Save the file as <code>hello.py</code></li>
          <li>Open command prompt/terminal in the same folder</li>
          <li>Type: <code>python hello.py</code></li>
        </ol>
        
        <h3>Method 2: Using Python Interactive Mode</h3>
        <ol>
          <li>Open command prompt/terminal</li>
          <li>Type <code>python</code> and press Enter</li>
          <li>You'll see <code>>>></code> - this means Python is ready!</li>
          <li>Type: <code>print("Hello, World!")</code></li>
          <li>Press Enter and watch the magic happen!</li>
        </ol>

        <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
          <h3>🎉 Congratulations!</h3>
          <p>If you see "Hello, World!" on your screen, you've just run your first Python program! You're officially a programmer now!</p>
        </div>

        <h2>What Just Happened?</h2>
        <p>Let's break down your first program:</p>
        <ul>
          <li><strong>print()</strong> - This is a function that displays text on the screen</li>
          <li><strong>"Hello, World!"</strong> - This is called a string (text wrapped in quotes)</li>
          <li>The parentheses () tell Python to run the print function</li>
        </ul>
      `
    };

    return mockContents[topicKey] || `
      <h1>${topic}</h1>
      <p>Welcome to the ${topic} lesson! This topic will help you understand important programming concepts.</p>
      
      <h2>What You'll Learn</h2>
      <ul>
        <li><strong>Core concepts:</strong> The fundamental ideas behind ${topic.toLowerCase()}</li>
        <li><strong>Practical examples:</strong> Real-world code you can try yourself</li>
        <li><strong>Step-by-step guidance:</strong> Clear instructions for beginners</li>
        <li><strong>Hands-on practice:</strong> Exercises to reinforce your learning</li>
      </ul>
      
      <h2>Getting Started</h2>
      <p>This lesson is designed for beginners, so don't worry if you're new to programming. We'll explain everything clearly with plenty of examples!</p>
      
      <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <h3>💡 Tip for Success</h3>
        <p>Take your time and practice each concept. Programming is like learning to ride a bike - it takes practice, but once you get it, it becomes natural!</p>
      </div>
    `;
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
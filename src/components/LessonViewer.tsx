import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { LearningSession } from '@/hooks/useLearningData';

interface LessonViewerProps {
  session: LearningSession;
  onLessonComplete: (nextLesson: number) => void;
  onStartQuiz: () => void;
  onBackToDashboard: () => void;
}

interface LessonContent {
  title: string;
  content: string;
  duration: string;
}

interface LevelContent {
  lessons: LessonContent[];
}

interface TopicContent {
  beginner: LevelContent;
  intermediate: LevelContent;
  expert: LevelContent;
}

const lessonContent: Record<string, TopicContent> = {
  "React Fundamentals": {
    beginner: {
      lessons: [
        {
          title: "Understanding JSX and Components",
          content: "# Understanding JSX and Components\n\nJSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code in your React components.\n\n## What is JSX?\n\nJSX allows you to describe what your UI should look like by combining JavaScript with HTML-like syntax.\n\n## Key Concepts:\n\n1. **Components are Functions**: In modern React, components are just JavaScript functions that return JSX\n2. **Props**: Components can receive data through props (properties)\n3. **State**: Components can manage their own internal state\n4. **Virtual DOM**: React uses a virtual representation of the DOM for efficient updates\n\n## Best Practices:\n\n- Always return a single parent element or use React Fragments\n- Use camelCase for HTML attributes (className instead of class)\n- Close all tags, even self-closing ones\n- Keep components small and focused on a single responsibility",
          duration: "8 min read"
        }
      ]
    },
    intermediate: {
      lessons: [
        {
          title: "Advanced React Hooks",
          content: "# Advanced React Hooks\n\n## useEffect Hook\n\nThe useEffect hook lets you perform side effects in function components.\n\n## useMemo and useCallback\n\nOptimization hooks for expensive calculations and preventing unnecessary re-renders.\n\n## Custom Hooks\n\nCreate your own hooks to share stateful logic between components.",
          duration: "12 min read"
        }
      ]
    },
    expert: {
      lessons: [
        {
          title: "React Performance Optimization",
          content: "# React Performance Optimization\n\n## React.memo\n\nPrevent unnecessary re-renders of components.\n\n## Virtualization\n\nRender only visible items in large lists.\n\n## Code Splitting\n\nSplit your code into smaller chunks for faster loading.",
          duration: "15 min read"
        }
      ]
    }
  },
  "Python": {
    beginner: {
      lessons: [
        {
          title: "🐍 Introduction to Python & Setup",
          content: "# 🐍 Introduction to Python & Setup\n\n## What is Python?\n\nPython is a **high-level, interpreted programming language** created by Guido van Rossum in 1991. It's designed with an emphasis on **code readability** and allows programmers to express concepts in **fewer lines of code**.\n\n## Key Features of Python\n\n🎯 **Simple & Easy to Learn**\n- Clean, readable syntax similar to English\n- No complex punctuation like braces `{}`\n- Uses indentation to define code blocks\n\n🚀 **Versatile Applications**\n- **Web Development** (Django, Flask)\n- **Data Science** (Pandas, NumPy)\n- **Machine Learning** (TensorFlow, Scikit-learn)\n- **Automation & Scripting**\n- **Desktop Applications**\n\n💡 **Why Learn Python?**\n- **High Demand**: One of most sought-after programming skills\n- **Large Community**: Millions of developers worldwide\n- **Extensive Libraries**: Pre-built solutions for almost everything\n- **Beginner Friendly**: Perfect first programming language\n\n## Installation & Setup\n\n### Step 1: Download Python\n- Visit [python.org](https://python.org)\n- Download latest version (Python 3.x)\n- ✅ **Important**: Check \"Add Python to PATH\" during installation\n\n### Step 2: Verify Installation\nOpen Command Prompt/Terminal and type:\n```bash\npython --version\n```\n\n### Step 3: Choose an IDE\n- **IDLE**: Comes with Python (good for beginners)\n- **VS Code**: Lightweight with Python extension\n- **PyCharm**: Full-featured Python IDE\n\n## Your First Python Program\n\n```python\n# This is a comment in Python\nprint(\"Hello, World!\")\nprint(\"Welcome to Python Programming!\")\n```\n\n**Output:**\n```\nHello, World!\nWelcome to Python Programming!\n```\n\n## Python Philosophy - The Zen of Python\n\n```python\nimport this\n```\n\nKey principles:\n- **Simple is better than complex**\n- **Readability counts**\n- **There should be one obvious way to do it**",
          duration: "10 min read"
        },
        {
          title: "Variables & Data Types",
          content: "# Variables & Data Types\n\n## Understanding Variables\n\nIn Python, a **variable** is like a container that stores data. Unlike other languages, you don't need to declare the type - Python figures it out automatically!\n\n### Creating Variables\n```python\n# No special keywords needed!\nname = \"Alice\"\nage = 25\nheight = 5.6\nis_student = True\n```\n\n## Python Data Types\n\n### 1. Numeric Types\n**Integer (int)**\n```python\nage = 25\ncount = -10\nbig_number = 1000000\n```\n\n**Float (float)**\n```python\nheight = 5.9\npi = 3.14159\ntemperature = -10.5\n```\n\n### 2. Text Type\n**String (str)**\n```python\nfirst_name = \"John\"\nlast_name = 'Doe'\n```\n\n### 3. Boolean Type\n**Boolean (bool)**\n```python\nis_active = True\nis_complete = False\n```",
          duration: "12 min read"
        },
        {
          title: "Control Structures & Loops",
          content: "# Control Structures & Loops\n\n## Conditional Statements\n\n### The if Statement\n```python\nage = 18\n\nif age >= 18:\n    print(\"You are eligible to vote!\")\n```\n\n### if-else Statement\n```python\ntemperature = 25\n\nif temperature > 30:\n    print(\"It's hot outside!\")\nelse:\n    print(\"The weather is pleasant.\")\n```\n\n## Loops\n\n### The while Loop\n```python\ncount = 1\nwhile count <= 5:\n    print(f\"Count: {count}\")\n    count += 1\n```\n\n### The for Loop\n```python\nfor i in range(5):\n    print(i)\n```",
          duration: "15 min read"
        },
        {
          title: "Data Structures & Functions",
          content: "# Data Structures & Functions\n\n## Lists\n```python\nfruits = [\"apple\", \"banana\", \"orange\"]\nprint(fruits[0])  # \"apple\"\nfruits.append(\"grape\")\n```\n\n## Dictionaries\n```python\nstudent = {\n    \"name\": \"Alice\",\n    \"age\": 20,\n    \"grade\": \"A\"\n}\nprint(student[\"name\"])  # \"Alice\"\n```\n\n## Functions\n```python\ndef greet(name):\n    return f\"Hello, {name}!\"\n\nresult = greet(\"World\")\nprint(result)  # \"Hello, World!\"\n```",
          duration: "18 min read"
        }
      ]
    },
    intermediate: {
      lessons: [
        {
          title: "Advanced Data Structures",
          content: "# Advanced Data Structures\n\n## List Comprehensions\n```python\nsquares = [x**2 for x in range(10)]\neven_squares = [x**2 for x in range(10) if x % 2 == 0]\n```\n\n## Sets and Tuples\n```python\n# Sets - unique elements\nunique_numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4}\n\n# Tuples - immutable sequences\ncoordinates = (10, 20)\nx, y = coordinates  # Tuple unpacking\n```",
          duration: "15 min read"
        },
        {
          title: "Object-Oriented Programming",
          content: "# Object-Oriented Programming\n\n## Classes and Objects\n```python\nclass Dog:\n    def __init__(self, name, breed):\n        self.name = name\n        self.breed = breed\n    \n    def bark(self):\n        return f\"{self.name} says Woof!\"\n\nmy_dog = Dog(\"Buddy\", \"Labrador\")\nprint(my_dog.bark())\n```\n\n## Inheritance\n```python\nclass Animal:\n    def speak(self):\n        pass\n\nclass Cat(Animal):\n    def speak(self):\n        return \"Meow!\"\n```",
          duration: "20 min read"
        }
      ]
    },
    expert: {
      lessons: [
        {
          title: "Decorators & Context Managers",
          content: "# Decorators & Context Managers\n\n## Decorators\n```python\ndef timer_decorator(func):\n    def wrapper(*args, **kwargs):\n        start_time = time.time()\n        result = func(*args, **kwargs)\n        print(f\"Execution time: {time.time() - start_time}\")\n        return result\n    return wrapper\n\n@timer_decorator\ndef slow_function():\n    time.sleep(1)\n    return \"Done!\"\n```\n\n## Context Managers\n```python\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# File automatically closed\n```",
          duration: "25 min read"
        },
        {
          title: "Generators & Async Programming",
          content: "# Generators & Async Programming\n\n## Generators\n```python\ndef fibonacci(n):\n    a, b = 0, 1\n    for _ in range(n):\n        yield a\n        a, b = b, a + b\n\nfor num in fibonacci(10):\n    print(num)\n```\n\n## Async Programming\n```python\nimport asyncio\n\nasync def fetch_data():\n    await asyncio.sleep(1)\n    return \"Data fetched!\"\n\nasync def main():\n    result = await fetch_data()\n    print(result)\n```",
          duration: "30 min read"
        }
      ]
    }
  }
};

export default function LessonViewer({ session, onLessonComplete, onStartQuiz, onBackToDashboard }: LessonViewerProps) {
  const currentTopic = lessonContent[session.topic];
  
  if (!currentTopic) {
    return (
      <div className="min-h-screen bg-gradient-surface p-4">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Topic Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The topic "{session.topic}" is not available yet.
            </p>
            <Button onClick={onBackToDashboard} className="mt-4">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const levelContent = currentTopic[session.level];
  
  if (!levelContent) {
    return (
      <div className="min-h-screen bg-gradient-surface p-4">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Level Not Available</h2>
            <p className="text-muted-foreground mb-4">
              The {session.level} level for "{session.topic}" is not available yet.
            </p>
            <Button onClick={onBackToDashboard} className="mt-4">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentLesson = levelContent.lessons[session.current_lesson - 1];
  
  if (!currentLesson) {
    return (
      <div className="min-h-screen bg-gradient-surface p-4">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Lesson Not Found</h2>
            <Button onClick={onBackToDashboard} className="mt-4">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-surface p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">{session.topic}</h1>
              <div className="flex items-center gap-4 mt-2">
                <span className="text-primary font-medium">{session.level.charAt(0).toUpperCase() + session.level.slice(1)} Level</span>
                <span className="text-muted-foreground">Lesson {session.current_lesson} of {levelContent.lessons.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Lesson Content */}
        <Card className="shadow-card mb-6">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">{currentLesson.title}</h2>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Clock className="h-4 w-4" />
              <span>{currentLesson.duration}</span>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="whitespace-pre-wrap">
                {currentLesson.content}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            className="flex-1"
            disabled={session.current_lesson <= 1}
            onClick={() => {
              if (session.current_lesson > 1) {
                onLessonComplete(session.current_lesson - 1);
              }
            }}
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous Lesson
          </Button>
          
          <Button 
            className="flex-1"
            onClick={() => {
              if (session.current_lesson < levelContent.lessons.length) {
                onLessonComplete(session.current_lesson + 1);
              } else {
                onStartQuiz();
              }
            }}
          >
            {session.current_lesson >= levelContent.lessons.length ? "Start Quiz" : "Next Lesson"}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
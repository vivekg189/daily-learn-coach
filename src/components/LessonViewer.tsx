import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Play } from "lucide-react";
import { LearningSession } from "@/hooks/useLearningData";

interface LessonViewerProps {
  session: LearningSession;
  onStartQuiz: () => void;
  onBackToDashboard: () => void;
}

export function LessonViewer({ session, onStartQuiz, onBackToDashboard }: LessonViewerProps) {
  const mockLessons = {
    "React Fundamentals": {
      lessons: [
        {
          title: "Understanding JSX and Components",
          content: "# Understanding JSX and Components\n\nJSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code in your React components.\n\n## What is JSX?\n\nJSX allows you to describe what your UI should look like by combining JavaScript with HTML-like syntax.\n\n## Key Concepts:\n\n1. **Components are Functions**: In modern React, components are just JavaScript functions that return JSX\n2. **Props**: Components can receive data through props (properties)\n3. **State**: Components can manage their own internal state\n4. **Virtual DOM**: React uses a virtual representation of the DOM for efficient updates\n\n## Best Practices:\n\n- Always return a single parent element or use React Fragments\n- Use camelCase for HTML attributes (className instead of class)\n- Close all tags, even self-closing ones\n- Keep components small and focused on a single responsibility",
          duration: "8 min read"
        }
      ]
    },
    "Python Basics": {
      lessons: [
        {
          title: "🐍 Introduction to Python & Setup",
          content: "# 🐍 Introduction to Python & Setup\n\n## What is Python?\n\nPython is a powerful, high-level programming language created by Guido van Rossum in 1991. It's known for its simple, readable syntax.\n\n## Why Learn Python?\n\n🐍 **Easy to Learn**: Python's syntax is close to natural language\n🚀 **Versatile**: Used in web development, data science, AI, automation\n📚 **Large Community**: Millions of developers and extensive documentation\n💼 **High Demand**: One of the most sought-after programming skills\n\n## Installation & Setup\n\n**Python Installation**\n- Download from Python.org (latest version)\n- Choose \"Add Python to PATH\" during installation\n- Verify installation: `python --version`\n\n**IDE Setup**\n- **VS Code**: Lightweight with Python extension\n- **PyCharm**: Full-featured Python IDE\n- **Jupyter Notebook**: Great for data science and learning\n\n## Your First Python Program\n\n```python\nprint(\"Hello, World!\")\n```\n\n## Python Philosophy\n\nKey principles:\n- **Simple is better than complex**\n- **Readability counts**\n- **There should be one obvious way to do it**",
          duration: "10 min read"
        },
        {
          title: "Variables, Data Types & Basic Operations",
          content: "# Variables, Data Types & Basic Operations\n\n## Variables & Constants\n\n**Variables** store data that can change:\n```python\nname = \"Alice\"        # String\nage = 25             # Integer\nheight = 5.6         # Float\nis_student = True    # Boolean\n```\n\n## Data Types\n\n**Basic Data Types**\n```python\n# Integer (whole numbers)\ncount = 42\nnegative = -10\n\n# Float (decimal numbers)\nprice = 19.99\ntemperature = -5.5\n\n# String (text)\nmessage = \"Hello Python\"\nname = 'Alice'  # Single or double quotes\n\n# Boolean (True/False)\nis_active = True\nis_complete = False\n```\n\n## Basic Operations\n\n**Arithmetic Operations**\n```python\na, b = 10, 3\n\nprint(a + b)    # Addition: 13\nprint(a - b)    # Subtraction: 7\nprint(a * b)    # Multiplication: 30\nprint(a / b)    # Division: 3.333...\nprint(a // b)   # Floor division: 3\nprint(a % b)    # Modulus (remainder): 1\nprint(a ** b)   # Exponentiation: 1000\n```",
          duration: "12 min read"
        },
        {
          title: "Control Structures & Loops",
          content: "# Control Structures & Loops\n\n## Conditional Statements\n\n**if-elif-else**\n```python\nscore = 85\n\nif score >= 90:\n    grade = \"A\"\n    print(\"Excellent!\")\nelif score >= 80:\n    grade = \"B\"\n    print(\"Good job!\")\nelse:\n    grade = \"C\"\n    print(\"Keep trying!\")\n```\n\n## Loops\n\n**for Loop**\n```python\n# Range function\nfor i in range(5):          # 0, 1, 2, 3, 4\n    print(f\"Number: {i}\")\n\n# Iterating over sequences\nfruits = [\"apple\", \"banana\", \"orange\"]\nfor fruit in fruits:\n    print(f\"I like {fruit}\")\n```\n\n**while Loop**\n```python\ncount = 0\nwhile count < 5:\n    print(f\"Count: {count}\")\n    count += 1\n```\n\n## Loop Control\n\n- **break**: Exit the loop\n- **continue**: Skip current iteration\n- **pass**: Placeholder (do nothing)",
          duration: "15 min read"
        },
        {
          title: "Data Structures: Lists, Dictionaries & Functions",
          content: "# Data Structures: Lists, Dictionaries & Functions\n\n## Lists - Ordered Collections\n\n```python\n# Creating lists\nfruits = [\"apple\", \"banana\", \"orange\"]\nnumbers = [1, 2, 3, 4, 5]\nmixed = [\"text\", 42, True, 3.14]\n\n# Accessing elements\nprint(fruits[0])      # \"apple\"\nprint(fruits[-1])     # \"orange\" (last element)\n\n# List methods\nfruits.append(\"grape\")        # Add to end\nfruits.insert(1, \"mango\")     # Insert at index 1\nfruits.remove(\"banana\")       # Remove first occurrence\n```\n\n## Dictionaries - Key-Value Pairs\n\n```python\n# Creating dictionaries\nstudent = {\n    \"name\": \"John\",\n    \"age\": 20,\n    \"courses\": [\"Math\", \"Physics\"]\n}\n\n# Accessing values\nprint(student[\"name\"])          # \"John\"\nprint(student.get(\"age\"))       # 20\n\n# Adding/updating values\nstudent[\"email\"] = \"john@email.com\"\nstudent[\"age\"] = 21\n```\n\n## Functions - Reusable Code Blocks\n\n```python\n# Basic function\ndef greet(name):\n    return f\"Hello, {name}!\"\n\n# Function with parameters\ndef add_numbers(a, b):\n    return a + b\n\n# Function calls\nmessage = greet(\"Alice\")\nresult = add_numbers(5, 3)\n```",
          duration: "18 min read"
        }
      ]
    },
    "Machine Learning": {
      lessons: [
        {
          title: "Introduction to Neural Networks",
          content: "# Introduction to Neural Networks\n\nNeural networks are the backbone of modern deep learning, inspired by how biological neurons work in the human brain.\n\n## What are Neural Networks?\n\nA neural network is a computational model consisting of interconnected nodes (neurons) organized in layers:\n\n- **Input Layer**: Receives the raw data\n- **Hidden Layers**: Process and transform the data\n- **Output Layer**: Produces the final prediction\n\n## Key Components:\n\n1. **Neurons**: Basic processing units that apply a function to inputs\n2. **Weights**: Parameters that determine the strength of connections\n3. **Biases**: Additional parameters that help the model fit the data\n4. **Activation Functions**: Non-linear functions like ReLU, Sigmoid, or Tanh\n\n## How They Learn:\n\nNeural networks learn through a process called backpropagation:\n1. Forward pass: Data flows through the network to make predictions\n2. Loss calculation: Compare predictions with actual values\n3. Backward pass: Adjust weights to minimize the loss\n4. Repeat: Continue this process for many iterations\n\n## Applications:\n\n- Image recognition and computer vision\n- Natural language processing\n- Speech recognition\n- Recommendation systems\n- Game playing (like AlphaGo)",
          duration: "12 min read"
        }
      ]
    }
  };

  const topicLessons = mockLessons[session.topic as keyof typeof mockLessons];
  
  if (!topicLessons) {
    return (
      <div className="min-h-screen bg-gradient-surface p-4">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card">
            <CardContent className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-4">Topic Not Found</h2>
              <p className="text-muted-foreground mb-4">
                The topic "{session.topic}" is not available yet. Please try:
              </p>
              <ul className="text-left max-w-md mx-auto space-y-1 text-muted-foreground">
                <li>• React Fundamentals</li>
                <li>• Python Basics</li>
                <li>• Machine Learning</li>
              </ul>
              <Button onClick={onBackToDashboard} className="mt-4">
                Back to Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const currentLessonIndex = (session.current_lesson || 1) - 1;
  const currentLesson = topicLessons.lessons[currentLessonIndex] || topicLessons.lessons[0];

  return (
    <div className="min-h-screen bg-gradient-surface p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onBackToDashboard}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="capitalize">
              {session.level}
            </Badge>
            <div className="text-sm text-muted-foreground">
              Lesson {session.current_lesson || 1} of {topicLessons.lessons.length}
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">{session.topic}</h2>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                {currentLesson.duration}
              </div>
            </div>
            <Progress 
              value={((session.current_lesson || 1) / topicLessons.lessons.length) * 100} 
              className="h-2"
            />
          </CardContent>
        </Card>

        {/* Lesson Content */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-learning-primary" />
              {currentLesson.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line text-foreground leading-relaxed">
                {currentLesson.content}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <Button 
            variant="outline"
            disabled={session.current_lesson === 1}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Previous Lesson
          </Button>

          <Button 
            onClick={onStartQuiz}
            className="bg-gradient-primary hover:opacity-90 shadow-button flex items-center gap-2"
          >
            <Play className="h-4 w-4" />
            Take Quiz
          </Button>

          <Button 
            variant="outline"
            disabled={session.current_lesson === topicLessons.lessons.length}
            className="flex items-center gap-2"
          >
            Next Lesson
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
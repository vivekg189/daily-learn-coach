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
      title: "Understanding JSX and Components",
      content: `
# Understanding JSX and Components

JSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code in your React components. It's one of the core concepts that makes React so powerful and intuitive.

## What is JSX?

JSX allows you to describe what your UI should look like by combining JavaScript with HTML-like syntax. Here's a simple example:

\`\`\`jsx
const Welcome = () => {
  return <h1>Hello, World!</h1>;
};
\`\`\`

## Key Concepts:

1. **Components are Functions**: In modern React, components are just JavaScript functions that return JSX
2. **Props**: Components can receive data through props (properties)
3. **State**: Components can manage their own internal state
4. **Virtual DOM**: React uses a virtual representation of the DOM for efficient updates

## Best Practices:

- Always return a single parent element or use React Fragments
- Use camelCase for HTML attributes (className instead of class)
- Close all tags, even self-closing ones like <br />
- Keep components small and focused on a single responsibility

This foundational knowledge will help you build more complex React applications with confidence!
      `,
      duration: "8 min read"
    },
    "Python Basics": {
      title: "Introduction to Python Programming",
      content: `
# Introduction to Python Programming

## What is Python?

Python is a powerful, high-level programming language that has become one of the most popular languages in the world. Created by Guido van Rossum in 1991, Python is known for its simple, readable syntax that makes it perfect for beginners while being powerful enough for complex applications.

## Why Learn Python?

🐍 **Easy to Learn**: Python's syntax is close to natural language
🚀 **Versatile**: Used in web development, data science, AI, automation, and more  
📚 **Large Community**: Millions of developers and extensive documentation
💼 **High Demand**: One of the most sought-after programming skills

## Your First Python Program

Let's start with the traditional "Hello, World!" program:

\`\`\`python
print("Hello, World!")
\`\`\`

That's it! Notice how simple and readable Python code is.

## Core Python Concepts

### 1. Variables and Data Types

Variables store data that your program can use and manipulate:

\`\`\`python
# Strings (text)
name = "Alice"
message = "Welcome to Python!"

# Numbers
age = 25              # Integer
height = 5.6          # Float
temperature = -10     # Negative number

# Boolean (True/False)
is_student = True
is_working = False
\`\`\`

### 2. Basic Operations

\`\`\`python
# Math operations
result = 10 + 5       # Addition: 15
result = 20 - 8       # Subtraction: 12
result = 4 * 3        # Multiplication: 12
result = 15 / 3       # Division: 5.0

# String operations
full_name = "John" + " " + "Doe"    # Concatenation
repeated = "Hi! " * 3               # Repetition: "Hi! Hi! Hi! "
\`\`\`

### 3. Functions - Reusable Code Blocks

Functions help you organize and reuse code:

\`\`\`python
# Defining a function
def greet_user(name):
    return f"Hello, {name}! Welcome to Python!"

# Using the function
message = greet_user("Alice")
print(message)  # Output: Hello, Alice! Welcome to Python!

# Function with multiple parameters
def calculate_area(length, width):
    area = length * width
    return area

room_area = calculate_area(10, 12)
print(f"Room area: {room_area} square feet")
\`\`\`

### 4. Lists - Storing Multiple Items

\`\`\`python
# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = ["text", 42, True, 3.14]

# Accessing items (starting from 0)
first_fruit = fruits[0]      # "apple"
last_number = numbers[-1]    # 5 (negative index counts from end)

# Adding items
fruits.append("grape")       # Add to end
fruits.insert(1, "mango")    # Insert at position 1
\`\`\`

### 5. Dictionaries - Key-Value Pairs

\`\`\`python
# Creating a dictionary
student = {
    "name": "John",
    "age": 20,
    "grade": "A",
    "subjects": ["Math", "Science", "English"]
}

# Accessing values
student_name = student["name"]        # "John"
student_age = student.get("age", 0)   # 20 (with default value)

# Adding/updating values
student["email"] = "john@email.com"
student["age"] = 21
\`\`\`

### 6. Control Flow - Making Decisions

\`\`\`python
# If statements
age = 18

if age >= 18:
    print("You are an adult")
elif age >= 13:
    print("You are a teenager")
else:
    print("You are a child")

# Loops - repeating actions
# For loop
for i in range(5):
    print(f"Count: {i}")

# While loop
count = 0
while count < 3:
    print(f"While count: {count}")
    count += 1
\`\`\`

## Python's Philosophy - The Zen of Python

Python follows these principles:
- **Simple is better than complex**
- **Readability counts**
- **There should be one obvious way to do it**

## What's Next?

In upcoming lessons, you'll learn:
- More advanced data structures
- File handling and input/output
- Error handling with try/except
- Object-oriented programming
- Working with external libraries

Python's journey from beginner to expert is exciting and rewarding. Let's continue building your Python skills!
      `,
      duration: "10 min read"
    },
    "Machine Learning": {
      title: "Introduction to Neural Networks",
      content: `
# Introduction to Neural Networks

Neural networks are the backbone of modern deep learning, inspired by how biological neurons work in the human brain.

## What are Neural Networks?

A neural network is a computational model consisting of interconnected nodes (neurons) organized in layers:

- **Input Layer**: Receives the raw data
- **Hidden Layers**: Process and transform the data
- **Output Layer**: Produces the final prediction

## Key Components:

1. **Neurons**: Basic processing units that apply a function to inputs
2. **Weights**: Parameters that determine the strength of connections
3. **Biases**: Additional parameters that help the model fit the data
4. **Activation Functions**: Non-linear functions like ReLU, Sigmoid, or Tanh

## How They Learn:

Neural networks learn through a process called backpropagation:
1. Forward pass: Data flows through the network to make predictions
2. Loss calculation: Compare predictions with actual values
3. Backward pass: Adjust weights to minimize the loss
4. Repeat: Continue this process for many iterations

## Applications:

- Image recognition and computer vision
- Natural language processing
- Speech recognition
- Recommendation systems
- Game playing (like AlphaGo)

Understanding these fundamentals will prepare you for more advanced topics in deep learning!
      `,
      duration: "12 min read"
    }
  };

  const currentLessonData = mockLessons[session.topic as keyof typeof mockLessons] || {
    title: "Custom Learning Content",
    content: `# ${session.topic}\n\nThis is a customized lesson for ${session.topic} at ${session.level} level. In a full implementation, this content would be generated by AI based on your specific topic and difficulty level.`,
    duration: "10 min read"
  };

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
              Lesson {session.current_lesson} of {session.total_lessons}
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
                {currentLessonData.duration}
              </div>
            </div>
            <Progress 
              value={(session.current_lesson / session.total_lessons) * 100} 
              className="h-2"
            />
          </CardContent>
        </Card>

        {/* Lesson Content */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-learning-primary" />
              {currentLessonData.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <div className="whitespace-pre-line text-foreground leading-relaxed">
                {currentLessonData.content}
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
            disabled={session.current_lesson === session.total_lessons}
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
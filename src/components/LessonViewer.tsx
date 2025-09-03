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

interface TopicContent {
  lessons: LessonContent[];
}

const lessonContent: Record<string, TopicContent> = {
  "Python HOME": {
    lessons: [
      {
        title: "Welcome to Python Learning",
        duration: "5 min read",
        content: `Welcome to Python Learning

Start your journey with Python, one of the most popular and versatile programming languages in the world.

What You'll Learn
- Complete Python fundamentals
- Data structures and algorithms
- Object-oriented programming
- File handling and modules
- Database connectivity
- Real-world applications

Why Choose Python?
- Beginner-friendly syntax
- Huge community support
- Versatile applications
- High-demand career skill
- Extensive libraries

Getting Started
Choose any topic from the navigation to begin your Python learning journey. Each topic includes hands-on examples and exercises to reinforce your understanding.

Learning Path Suggestions:
1. Start with Python Intro
2. Learn Python Syntax
3. Master Variables and Data Types
4. Practice with Control Flow
5. Build projects with Functions and Classes`
      }
    ]
  },
  "Python Intro": {
    lessons: [
      {
        title: "What is Python?",
        duration: "8 min read",
        content: `What is Python?

Python is a popular programming language created by Guido van Rossum and released in 1991.

Python is used for:
- Web development (server-side)
- Software development
- Mathematics
- System scripting
- Data analysis
- Artificial intelligence

What can Python do?
- Create web applications on servers
- Build workflows alongside software
- Connect to database systems
- Read and modify files
- Handle big data and complex mathematics
- Rapid prototyping and production development

Why Python?
- Works on different platforms (Windows, Mac, Linux, Raspberry Pi)
- Simple syntax similar to English language
- Fewer lines of code than other programming languages
- Runs on interpreter system - code executes immediately
- Can be procedural, object-oriented, or functional

Python Syntax Comparison
- Designed for readability with English-like syntax
- Uses new lines to complete commands (no semicolons)
- Uses indentation instead of curly brackets for scope
- Mathematical influence in design

Your First Python Program:
print("Hello, World!")

This simple command will display "Hello, World!" on your screen.`
      }
    ]
  },
  "Python Get Started": {
    lessons: [
      {
        title: "Installing and Setting Up Python",
        duration: "10 min read",
        content: `Installing Python

Python Installation Options:
Many PCs and Macs already have Python installed. To check:

On Windows: Open Command Prompt and type:
python --version

On Mac/Linux: Open Terminal and type:
python3 --version

If Python is not installed, download it for free from python.org

Python IDE Options
You can write Python in several environments:
- Text Editor (Notepad, TextEdit)
- Integrated Development Environment (Thonny, PyCharm, Visual Studio Code)
- Online editors (for testing)

Running Python Code
Python can run in two ways:

1. Interactive Mode
Open command line and type "python" (or "python3"):
>>> print("Hello, World!")

2. Script Mode
Create a file with .py extension:
Create file: hello.py
Content: print("Hello, World!")
Run: python hello.py

Setting Up Your Environment
1. Download Python from python.org
2. Install with default settings
3. Verify installation with version check
4. Choose your preferred code editor
5. Create your first Python file
6. Run your first program

Best Practices
- Use meaningful file names
- Save files with .py extension
- Keep projects organized in folders
- Use version control (Git) for larger projects`
      }
    ]
  },
  "Python Syntax": {
    lessons: [
      {
        title: "Python Syntax Fundamentals",
        duration: "12 min read",
        content: `Python Syntax Fundamentals

Executing Python Code
Python syntax can be executed directly in the command line:
>>> print("Hello, World!")
Hello, World!

Or by creating Python files with .py extension:
Save as: myfile.py
Run: python myfile.py

Python Indentation
Indentation is crucial in Python - it defines code blocks.

Correct indentation:
if 5 > 2:
    print("Five is greater than two!")

Incorrect indentation causes SyntaxError:
if 5 > 2:
print("Five is greater than two!")  # Error!

Indentation Rules:
- Use at least one space (4 spaces is standard)
- Be consistent within the same block
- All lines in a block must have same indentation

Examples of proper indentation:
if 5 > 2:
    print("Five is greater than two!")
    print("This is also indented")

Python Variables
Variables are created when you assign a value:
x = 5
y = "Hello, World!"

No declaration command needed - Python creates variables automatically.

Python Comments
Comments start with # symbol:
# This is a comment
print("Hello, World!")  # Comment at end of line

Multi-line comments:
"""
This is a multi-line comment
spanning several lines
"""

Basic Syntax Rules:
- Case sensitive (myVar and myvar are different)
- No semicolons needed
- Use indentation for code blocks
- Comments improve code readability`
      }
    ]
  },
  "Python Comments": {
    lessons: [
      {
        title: "Writing Comments in Python",
        duration: "6 min read",
        content: `Python Comments

Comments are used to explain code and make it more readable. Python ignores comments when executing code.

Single Line Comments
Start with # symbol:
# This is a comment
print("Hello, World!")

Comments can be at the end of lines:
print("Hello, World!")  # This is also a comment

Multi-Line Comments
Python doesn't have specific multi-line comment syntax, but you can use:

Option 1 - Multiple # symbols:
# This is a comment
# written in
# more than just one line

Option 2 - Triple quotes (not truly comments, but often used as such):
"""
This is a comment
written in
more than just one line
"""

Best Practices for Comments:
- Explain WHY, not WHAT
- Keep comments updated with code changes
- Avoid obvious comments
- Use comments to explain complex logic

Good comment examples:
# Calculate compound interest using formula A = P(1 + r/n)^(nt)
amount = principal * (1 + rate/compounds) ** (compounds * time)

# TODO: Add input validation for negative numbers
user_input = input("Enter a number: ")

Comment Guidelines:
- Write comments before writing code
- Use clear, concise language
- Update comments when code changes
- Remove outdated comments`
      }
    ]
  },
  "Python Variables": {
    lessons: [
      {
        title: "Working with Variables",
        duration: "10 min read",
        content: `Python Variables

Variables are containers for storing data values. Python has no command for declaring variables.

Creating Variables:
x = 5
y = "John"
print(x)
print(y)

Variables can change type after assignment:
x = 4       # x is of type int
x = "Sally" # x is now of type str
print(x)

Variable Names Rules:
- Must start with letter or underscore
- Cannot start with number
- Can only contain alphanumeric characters and underscores
- Case-sensitive (age, Age, AGE are different)

Valid variable names:
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

Invalid variable names:
2myvar = "John"    # Cannot start with number
my-var = "John"    # Cannot use hyphen
my var = "John"    # Cannot use spaces

Multiple Variables Assignment:
x, y, z = "Orange", "Banana", "Cherry"

Same value to multiple variables:
x = y = z = "Orange"

Variable Types:
Python automatically determines the type:
x = 1      # int
y = 2.8    # float
z = "John" # str

Check variable type:
print(type(x))
print(type(y))
print(type(z))

Global vs Local Variables:
x = "global"  # Global variable

def myfunc():
    x = "local"  # Local variable
    print("Inside function: " + x)

myfunc()
print("Outside function: " + x)`
      }
    ]
  },
  "React Fundamentals": {
    lessons: [
      {
        title: "Understanding JSX and Components",
        content: "Understanding JSX and Components\n\nJSX (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like code in your React components.\n\nWhat is JSX?\n\nJSX allows you to describe what your UI should look like by combining JavaScript with HTML-like syntax.\n\nKey Concepts:\n\n1. Components are Functions: In modern React, components are just JavaScript functions that return JSX\n2. Props: Components can receive data through props (properties)\n3. State: Components can manage their own internal state\n4. Virtual DOM: React uses a virtual representation of the DOM for efficient updates\n\nBest Practices:\n\n- Always return a single parent element or use React Fragments\n- Use camelCase for HTML attributes (className instead of class)\n- Close all tags, even self-closing ones\n- Keep components small and focused on a single responsibility",
        duration: "8 min read"
      }
    ]
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

  const currentLesson = currentTopic.lessons[session.current_lesson - 1];
  
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
                <span className="text-muted-foreground">Lesson {session.current_lesson} of {currentTopic.lessons.length}</span>
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
              if (session.current_lesson < currentTopic.lessons.length) {
                onLessonComplete(session.current_lesson + 1);
              } else {
                onStartQuiz();
              }
            }}
          >
            {session.current_lesson >= currentTopic.lessons.length ? "Start Quiz" : "Next Lesson"}
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
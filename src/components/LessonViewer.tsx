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
          title: "Introduction to Python & Setup",
          duration: "8 min read",
          content: `What is Python?

Python is a high-level, interpreted programming language created by Guido van Rossum in 1991. It's designed with an emphasis on code readability and allows programmers to express concepts in fewer lines of code.

Key Features of Python

Simple & Easy to Learn
- Clean, readable syntax similar to English
- No complex punctuation like braces
- Uses indentation to define code blocks

Versatile Applications
- Web Development (Django, Flask)
- Data Science (Pandas, NumPy)
- Machine Learning (TensorFlow, Scikit-learn)
- Automation & Scripting
- Desktop Applications

Why Learn Python?
- High Demand: One of most sought-after programming skills
- Large Community: Millions of developers worldwide
- Extensive Libraries: Pre-built solutions for almost everything
- Beginner Friendly: Perfect first programming language

Installation & Setup

Step 1: Download Python
- Visit python.org
- Download latest version (Python 3.x)
- Important: Check "Add Python to PATH" during installation

Step 2: Verify Installation
Open Command Prompt/Terminal and type:
python --version

Step 3: Choose an IDE
- IDLE: Comes with Python (good for beginners)
- VS Code: Lightweight with Python extension
- PyCharm: Full-featured Python IDE`
        },
        {
          title: "Your First Python Program",
          duration: "6 min read",
          content: `Writing Your First Python Program

Let's start with the traditional "Hello, World!" program:

print("Hello, World!")
print("Welcome to Python Programming!")

Output:
Hello, World!
Welcome to Python Programming!

Understanding the print() Function

The print() function is used to display output on the screen. You can print:
- Text (strings) in quotes
- Numbers without quotes
- Variables
- Multiple items separated by commas

Examples:
print("Hello")
print(42)
print("Age:", 25)

Python Philosophy

Python has a philosophy called "The Zen of Python". Key principles:
- Simple is better than complex
- Readability counts
- There should be one obvious way to do it
- If the implementation is hard to explain, it's a bad idea

Comments in Python

Comments help explain your code:
- Single line comments start with #
- Multi-line comments use triple quotes

Example:
# This is a single line comment
print("Hello")  # Comment at end of line

"""
This is a
multi-line comment
"""

Running Python Programs

You can run Python code in several ways:
1. Interactive mode: Type python in terminal
2. Script mode: Save code in .py file and run it
3. IDE: Use your chosen development environment`
        },
        {
          title: "Variables and Basic Data Types",
          duration: "10 min read",
          content: `Variables in Python

Variables are containers for storing data. Python variables are created when you assign a value to them.

Creating Variables:
name = "John"
age = 25
height = 5.9
is_student = True

Variable Naming Rules:
- Must start with a letter or underscore
- Can contain letters, numbers, and underscores
- Case-sensitive (name and Name are different)
- Cannot use Python keywords

Good variable names:
first_name = "Alice"
user_age = 30
total_score = 95

Basic Data Types

Python has several built-in data types:

1. Strings (text)
message = "Hello Python"
name = 'Alice'

2. Integers (whole numbers)
age = 25
score = 100

3. Floats (decimal numbers)
height = 5.9
price = 19.99

4. Booleans (True/False)
is_active = True
is_complete = False

Checking Data Types:
print(type(name))     # <class 'str'>
print(type(age))      # <class 'int'>
print(type(height))   # <class 'float'>
print(type(is_active)) # <class 'bool'>

String Operations

You can work with strings in many ways:

Concatenation (joining):
first_name = "John"
last_name = "Doe"
full_name = first_name + " " + last_name

String formatting:
name = "Alice"
age = 25
message = f"My name is {name} and I am {age} years old"

Common string methods:
text = "Hello World"
print(text.upper())    # HELLO WORLD
print(text.lower())    # hello world
print(text.replace("Hello", "Hi"))  # Hi World`
        },
        {
          title: "Basic Operators and Input",
          duration: "8 min read",
          content: `Python Operators

Arithmetic Operators:
+ Addition
- Subtraction
* Multiplication
/ Division
// Floor division (rounds down)
% Modulus (remainder)
** Exponentiation (power)

Examples:
a = 10
b = 3

print(a + b)   # 13
print(a - b)   # 7
print(a * b)   # 30
print(a / b)   # 3.333...
print(a // b)  # 3
print(a % b)   # 1
print(a ** b)  # 1000

Comparison Operators:
== Equal to
!= Not equal to
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to

Examples:
age = 18
print(age >= 18)  # True
print(age == 21)  # False

Getting User Input

The input() function gets user input as a string:

name = input("Enter your name: ")
print("Hello, " + name)

Converting input to numbers:
age = int(input("Enter your age: "))
height = float(input("Enter your height: "))

Simple Calculator Example:
num1 = float(input("Enter first number: "))
num2 = float(input("Enter second number: "))
result = num1 + num2
print(f"The sum is: {result}")

Indentation in Python

Python uses indentation to group code:
if age >= 18:
    print("You are an adult")
    print("You can vote")
else:
    print("You are a minor")
    print("You cannot vote yet")

Important: Use 4 spaces for indentation (most common)`
        }
      ]
    },
    intermediate: {
      lessons: [
        {
          title: "Data Structures and Control Flow",
          duration: "15 min read",
          content: `Python Data Structures

Lists - Ordered, mutable collections
fruits = ["apple", "banana", "orange"]
fruits.append("grape")
print(fruits[0])  # apple

Dictionaries - Key-value pairs
person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}
print(person["name"])  # Alice

Tuples - Ordered, immutable collections
coordinates = (10, 20)
x, y = coordinates  # unpacking

Sets - Unordered, unique elements
numbers = {1, 2, 3, 4, 5}
numbers.add(6)

Control Flow Statements

If-elif-else statements:
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

For loops:
for fruit in fruits:
    print(fruit)

for i in range(5):
    print(i)  # prints 0, 1, 2, 3, 4

While loops:
count = 0
while count < 5:
    print(count)
    count += 1

List Comprehensions

Simple list comprehension:
squares = [x**2 for x in range(10)]

With condition:
even_squares = [x**2 for x in range(10) if x % 2 == 0]

Functions

Defining functions:
def greet(name):
    return f"Hello, {name}!"

def calculate_area(length, width):
    return length * width

result = greet("Python")
area = calculate_area(5, 3)

Error Handling

Try-except blocks:
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(result)
except ValueError:
    print("Please enter a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")`
        }
      ]
    },
    expert: {
      lessons: [
        {
          title: "Advanced Python Concepts",
          duration: "20 min read",
          content: `Object-Oriented Programming

Classes and Objects:
class Car:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
        self.speed = 0
    
    def accelerate(self, amount):
        self.speed += amount
    
    def brake(self, amount):
        self.speed = max(0, self.speed - amount)

my_car = Car("Toyota", "Camry")
my_car.accelerate(50)

Inheritance:
class ElectricCar(Car):
    def __init__(self, brand, model, battery_capacity):
        super().__init__(brand, model)
        self.battery_capacity = battery_capacity
    
    def charge(self, amount):
        print(f"Charging {amount} kWh")

Decorators

Function decorators:
def timer(func):
    import time
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"Function took {end - start} seconds")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "Done"

Generators

Generator functions:
def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

# Usage
fib = fibonacci()
for _ in range(10):
    print(next(fib))

Generator expressions:
squares = (x**2 for x in range(1000000))

Context Managers

Using with statements:
with open("file.txt", "r") as file:
    content = file.read()
    # file automatically closed

Custom context manager:
class DatabaseConnection:
    def __enter__(self):
        print("Connecting to database")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing database connection")

Lambda Functions and Functional Programming

Lambda functions:
square = lambda x: x**2
add = lambda x, y: x + y

Map, filter, reduce:
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

from functools import reduce
sum_all = reduce(lambda x, y: x + y, numbers)

Advanced Data Structures

Collections module:
from collections import defaultdict, Counter, deque

# defaultdict
dd = defaultdict(list)
dd["key"].append("value")

# Counter
counter = Counter("hello world")
print(counter)  # Counter({'l': 3, 'o': 2, ...})

# deque
queue = deque([1, 2, 3])
queue.appendleft(0)
queue.append(4)`
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
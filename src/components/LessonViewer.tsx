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
      title: "🐍 Python Topics from Scratch with Levels",
      content: `
# 🐍 Python Topics from Scratch with Levels

## 🔰 1. Beginner (Foundations)
*Focus: Syntax, data types, and basic problem-solving*

### ✅ Introduction to Python

**Installation**
- Python installation (Python.org)
- IDEs setup (VS Code, PyCharm, Jupyter)
- Setting up your development environment

**First Program**
\`\`\`python
print("Hello, World!")
\`\`\`

**Comments & Indentation**
\`\`\`python
# This is a single-line comment
"""
This is a multi-line comment
or docstring
"""

# Python uses indentation for code blocks
if True:
    print("Indented code")  # 4 spaces indentation
\`\`\`

### ✅ Basics

**Variables & Constants**
\`\`\`python
# Variables (dynamic typing)
name = "Alice"
age = 25
height = 5.6

# Constants (convention: uppercase)
PI = 3.14159
MAX_SIZE = 100
\`\`\`

**Data Types**
\`\`\`python
# Basic data types
integer_num = 42           # int
float_num = 3.14          # float
text = "Hello Python"     # str
is_active = True          # bool

# Check data type
print(type(integer_num))  # <class 'int'>
\`\`\`

**Typecasting**
\`\`\`python
# Converting between types
num_str = "123"
num_int = int(num_str)    # Convert to integer
num_float = float(num_str) # Convert to float
bool_val = bool(num_int)   # Convert to boolean

print(str(42))            # "42"
\`\`\`

**Input/Output**
\`\`\`python
# Getting user input
name = input("Enter your name: ")
age = int(input("Enter your age: "))

# Output with formatting
print(f"Hello {name}, you are {age} years old")
print("Name: {}, Age: {}".format(name, age))
\`\`\`

### ✅ Operators

**Arithmetic Operators**
\`\`\`python
a, b = 10, 3

print(a + b)    # Addition: 13
print(a - b)    # Subtraction: 7
print(a * b)    # Multiplication: 30
print(a / b)    # Division: 3.333...
print(a // b)   # Floor division: 3
print(a % b)    # Modulus: 1
print(a ** b)   # Exponentiation: 1000
\`\`\`

**Comparison Operators**
\`\`\`python
x, y = 5, 10

print(x == y)   # Equal: False
print(x != y)   # Not equal: True
print(x < y)    # Less than: True
print(x > y)    # Greater than: False
print(x <= y)   # Less than or equal: True
print(x >= y)   # Greater than or equal: False
\`\`\`

**Logical Operators**
\`\`\`python
a, b = True, False

print(a and b)  # Logical AND: False
print(a or b)   # Logical OR: True
print(not a)    # Logical NOT: False
\`\`\`

**Assignment Operators**
\`\`\`python
x = 10
x += 5    # x = x + 5, result: 15
x -= 3    # x = x - 3, result: 12
x *= 2    # x = x * 2, result: 24
x /= 4    # x = x / 4, result: 6.0
\`\`\`

**Membership & Identity Operators**
\`\`\`python
# Membership operators
fruits = ["apple", "banana", "orange"]
print("apple" in fruits)      # True
print("grape" not in fruits)  # True

# Identity operators
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a is c)     # True (same object)
print(a is b)     # False (different objects)
print(a == b)     # True (same values)
\`\`\`

### ✅ Control Structures

**Conditional Statements**
\`\`\`python
# if-elif-else
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")

# Ternary operator
status = "Pass" if score >= 60 else "Fail"
\`\`\`

**Loops**
\`\`\`python
# while loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# for loop
for i in range(5):
    print(f"Number: {i}")

# for loop with list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"Fruit: {fruit}")

# Nested loops
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
\`\`\`

**Loop Control**
\`\`\`python
# break - exit loop
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0,1,2,3,4

# continue - skip iteration
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0,1,3,4

# pass - placeholder
for i in range(3):
    if i == 1:
        pass  # Do nothing
    else:
        print(i)
\`\`\`

### ✅ Data Structures Basics

**Strings**
\`\`\`python
text = "Hello Python"

# String slicing
print(text[0])      # "H"
print(text[0:5])    # "Hello"
print(text[:5])     # "Hello"
print(text[6:])     # "Python"
print(text[-1])     # "n" (last character)

# String methods
print(text.upper())           # "HELLO PYTHON"
print(text.lower())           # "hello python"
print(text.split())           # ["Hello", "Python"]
print(text.replace("Hello", "Hi"))  # "Hi Python"
print(len(text))              # 12
\`\`\`

**Lists**
\`\`\`python
# Creating and manipulating lists
numbers = [1, 2, 3, 4, 5]
mixed = ["text", 42, True, 3.14]

# Accessing elements
print(numbers[0])     # 1
print(numbers[-1])    # 5 (last element)

# List methods
numbers.append(6)           # Add to end
numbers.insert(0, 0)        # Insert at index
numbers.remove(3)           # Remove first occurrence
popped = numbers.pop()      # Remove and return last
numbers.extend([7, 8, 9])   # Add multiple elements

# List slicing
print(numbers[1:4])   # Elements from index 1 to 3
\`\`\`

**Tuples**
\`\`\`python
# Tuples are immutable
coordinates = (10, 20)
person = ("Alice", 25, "Engineer")

# Accessing tuple elements
print(person[0])      # "Alice"
print(person[-1])     # "Engineer"

# Tuple unpacking
name, age, job = person
print(f"{name} is {age} years old")
\`\`\`

**Sets**
\`\`\`python
# Sets contain unique elements
numbers = {1, 2, 3, 4, 5}
fruits = {"apple", "banana", "orange"}

# Set operations
numbers.add(6)
numbers.remove(1)
print(3 in numbers)   # True

# Set operations
set1 = {1, 2, 3}
set2 = {3, 4, 5}
print(set1.union(set2))         # {1, 2, 3, 4, 5}
print(set1.intersection(set2))  # {3}
\`\`\`

**Dictionaries**
\`\`\`python
# Key-value pairs
student = {
    "name": "John",
    "age": 20,
    "courses": ["Math", "Physics"]
}

# Accessing values
print(student["name"])          # "John"
print(student.get("age", 0))    # 20

# Modifying dictionaries
student["grade"] = "A"
student["age"] = 21
del student["courses"]

# Dictionary methods
print(student.keys())    # dict_keys(['name', 'age', 'grade'])
print(student.values())  # dict_values(['John', 21, 'A'])
print(student.items())   # dict_items([...])
\`\`\`

**Iteration over Collections**
\`\`\`python
# List iteration
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# Dictionary iteration
student = {"name": "John", "age": 20}
for key in student:
    print(f"{key}: {student[key]}")

# Using items()
for key, value in student.items():
    print(f"{key}: {value}")

# Enumerate for index
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")
\`\`\`

### ✅ Functions

**Defining & Calling Functions**
\`\`\`python
# Basic function
def greet():
    print("Hello!")

greet()  # Call the function

# Function with parameters
def greet_user(name):
    print(f"Hello, {name}!")

greet_user("Alice")

# Function with return value
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 3)
print(result)  # 8
\`\`\`

**Parameters**
\`\`\`python
# Positional parameters
def describe_pet(name, animal_type):
    print(f"I have a {animal_type} named {name}")

describe_pet("Max", "dog")

# Keyword parameters
describe_pet(animal_type="cat", name="Whiskers")

# Default parameters
def greet_user(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet_user("Alice")           # Hello, Alice!
greet_user("Bob", "Hi")       # Hi, Bob!

# *args - variable positional arguments
def sum_all(*numbers):
    return sum(numbers)

print(sum_all(1, 2, 3, 4))    # 10

# **kwargs - variable keyword arguments
def display_info(**info):
    for key, value in info.items():
        print(f"{key}: {value}")

display_info(name="Alice", age=25, city="New York")
\`\`\`

---

## 🟡 2. Intermediate (Core Programming)
*Focus: OOP, file handling, and error handling*

### ✅ Advanced Data Structures

**List Comprehension**
\`\`\`python
# Basic list comprehension
squares = [x**2 for x in range(10)]
# Instead of:
squares = []
for x in range(10):
    squares.append(x**2)

# With condition
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Nested comprehension
matrix = [[i*j for i in range(3)] for j in range(3)]
\`\`\`

**Dictionary Comprehension**
\`\`\`python
# Basic dictionary comprehension
word_lengths = {word: len(word) for word in ["apple", "banana", "orange"]}

# With condition
even_squares = {x: x**2 for x in range(10) if x % 2 == 0}
\`\`\`

**Nested Collections**
\`\`\`python
# List of lists (matrix)
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

# Dictionary of lists
grades = {
    "Alice": [90, 85, 92],
    "Bob": [78, 82, 80],
    "Charlie": [95, 90, 88]
}

# Accessing nested data
print(matrix[1][2])           # 6
print(grades["Alice"][0])     # 90
\`\`\`

### ✅ Functions (Deep)

**Recursion**
\`\`\`python
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # 120

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)
\`\`\`

**Lambda Functions**
\`\`\`python
# Lambda (anonymous) functions
square = lambda x: x**2
print(square(5))  # 25

# Using with map, filter, reduce
numbers = [1, 2, 3, 4, 5]

# map - apply function to all elements
squares = list(map(lambda x: x**2, numbers))

# filter - filter elements based on condition
evens = list(filter(lambda x: x % 2 == 0, numbers))

# reduce - reduce list to single value
from functools import reduce
sum_all = reduce(lambda x, y: x + y, numbers)
\`\`\`

**Higher-Order Functions**
\`\`\`python
def apply_operation(numbers, operation):
    return [operation(x) for x in numbers]

def square(x):
    return x**2

def cube(x):
    return x**3

numbers = [1, 2, 3, 4]
squared = apply_operation(numbers, square)
cubed = apply_operation(numbers, cube)
\`\`\`

This comprehensive curriculum takes you from absolute beginner to intermediate Python programmer with hands-on examples and practical applications!
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
export const lessonContent: Record<string, Record<string, string>> = {
  // PYTHON CONTENT
  python: {
    "python_home": `
      <h1>Welcome to Python Programming! 🐍</h1>
      <p>Python is a powerful yet easy-to-learn programming language. Think of it like learning to speak a new language, but instead of talking to people, you're talking to computers!</p>
      
      <h2>What is Python?</h2>
      <p>Python is a programming language that reads almost like English. Here's what makes it special:</p>
      <ul>
        <li><strong>Easy to read:</strong> Python code looks clean and simple</li>
        <li><strong>Beginner-friendly:</strong> Perfect for people who are new to programming</li>
        <li><strong>Powerful:</strong> Used by companies like Google, Netflix, and Instagram</li>
        <li><strong>Versatile:</strong> You can build websites, games, apps, and even control robots!</li>
      </ul>

      <h2>Example: Your First Python Code</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <pre><code>print("Hello, World!")
print("Welcome to Python!")
print("Let's start coding!")</code></pre>
        <p><strong>Output:</strong></p>
        <pre>Hello, World!
Welcome to Python!
Let's start coding!</pre>
      </div>

      <h2>What can you build with Python?</h2>
      <ul>
        <li><strong>Websites:</strong> Like Instagram and Pinterest</li>
        <li><strong>Games:</strong> Simple games or complex simulations</li>
        <li><strong>Mobile Apps:</strong> Apps for your phone</li>
        <li><strong>Data Analysis:</strong> Understand patterns in large amounts of data</li>
        <li><strong>Automation:</strong> Make your computer do repetitive tasks for you</li>
      </ul>

      <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0;">
        <h3>💡 Fun Fact</h3>
        <p>Python was named after the British comedy group "Monty Python's Flying Circus" - not the snake!</p>
      </div>
    `,

    "python_intro": `
      <h1>Getting to Know Python 🚀</h1>
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

      <h2>Example: Simple Calculations</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <pre><code># This is a comment - Python ignores this line
# Let's do some math!
print(5 + 3)    # Addition
print(10 - 4)   # Subtraction  
print(6 * 7)    # Multiplication
print(15 / 3)   # Division</code></pre>
        <p><strong>Output:</strong></p>
        <pre>8
6
42
5.0</pre>
      </div>

      <h2>Python Versions: Which One to Use?</h2>
      <ul>
        <li><strong>Python 2:</strong> The older version (not recommended)</li>
        <li><strong>Python 3:</strong> The current version (this is what you want!)</li>
      </ul>
      
      <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <h3>✅ Recommendation</h3>
        <p>Always use Python 3! It's actively updated and has all the latest features.</p>
      </div>
    `,

    "python_get_started": `
      <h1>Let's Start Your Python Journey! 🏁</h1>
      
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

      <h2>Step 2: Your First Python Program!</h2>
      <p>Let's write your very first Python program. It's a tradition to start with "Hello, World!"</p>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <h3>Method 1: Using Python Interactive Mode</h3>
        <ol>
          <li>Open command prompt/terminal</li>
          <li>Type <code>python</code> and press Enter</li>
          <li>You'll see <code>&gt;&gt;&gt;</code> - this means Python is ready!</li>
          <li>Type the following:</li>
        </ol>
        <pre><code>&gt;&gt;&gt; print("Hello, World!")
Hello, World!
&gt;&gt;&gt; print("My name is Python!")
My name is Python!
&gt;&gt;&gt; print(2 + 2)
4</code></pre>
      </div>

      <h2>Let's Try More Examples!</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <pre><code># Creating variables (like boxes to store information)
name = "Alice"
age = 25
height = 5.6

# Using the variables
print("My name is", name)
print("I am", age, "years old")
print("I am", height, "feet tall")

# Doing math with variables
next_year = age + 1
print("Next year I will be", next_year)</code></pre>
        <p><strong>Output:</strong></p>
        <pre>My name is Alice
I am 25 years old
I am 5.6 feet tall
Next year I will be 26</pre>
      </div>

      <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <h3>🎉 Congratulations!</h3>
        <p>You've just learned the basics of Python! You can now create variables, do math, and display results. You're officially a programmer!</p>
      </div>
    `,

    "python_syntax": `
      <h1>Python Syntax - The Rules of Writing Python 📝</h1>
      <p>Just like English has grammar rules, Python has syntax rules. Don't worry - they're much simpler than English grammar!</p>

      <h2>Basic Syntax Rules</h2>
      
      <h3>1. Indentation (Spacing) is Important! 📏</h3>
      <p>Python uses spaces to group code together. Think of it like organizing your notebook with proper margins.</p>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <h4>✅ Correct:</h4>
        <pre><code>if 5 > 3:
    print("Five is greater than three!")
    print("This line is also part of the if statement")</code></pre>
        
        <h4>❌ Wrong:</h4>
        <pre><code>if 5 > 3:
print("Five is greater than three!")  # No indentation - Error!
    print("This line has indentation")  # Inconsistent - Error!</code></pre>
      </div>

      <h3>2. Variables - Naming Your Data 🏷️</h3>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <pre><code># Good variable names
student_name = "John"
student_age = 20
is_student = True

# You can change variables
student_age = 21  # Now John is 21

# Using variables
print("Student:", student_name)
print("Age:", student_age)
print("Is a student:", is_student)</code></pre>
        <p><strong>Output:</strong></p>
        <pre>Student: John
Age: 21
Is a student: True</pre>
      </div>

      <h3>3. Comments - Notes to Yourself 💭</h3>
      <p>Comments are notes that Python ignores. They help you remember what your code does.</p>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #6c757d;">
        <pre><code># This is a single line comment
print("Hello!")  # Comment at the end of a line

"""
This is a multi-line comment.
You can write several lines here.
Great for longer explanations!
"""

print("Comments don't appear in the output")</code></pre>
      </div>

      <h3>4. Case Sensitivity 🔤</h3>
      <p>Python treats uppercase and lowercase letters as different!</p>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #ffc107;">
        <pre><code>name = "Alice"
Name = "Bob"
NAME = "Charlie"

print(name)  # Prints: Alice
print(Name)  # Prints: Bob  
print(NAME)  # Prints: Charlie

# These are three different variables!</code></pre>
      </div>

      <div style="background-color: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0;">
        <h3>💡 Pro Tips</h3>
        <ul>
          <li>Use 4 spaces for indentation (most Python programmers do this)</li>
          <li>Give your variables descriptive names like <code>student_age</code> instead of <code>x</code></li>
          <li>Write comments to explain tricky parts of your code</li>
        </ul>
      </div>
    `,

    "python_variables": `
      <h1>Python Variables - Storing Information 📦</h1>
      <p>Think of variables as labeled boxes where you can store different types of information. You can look at what's in the box, change it, or use it later!</p>

      <h2>Creating Variables</h2>
      <p>In Python, creating a variable is super easy - just give it a name and a value:</p>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <pre><code># Creating different types of variables
message = "Hello, Python!"  # Text (string)
age = 25                     # Number (integer)
height = 5.9                 # Decimal number (float)
is_student = True            # True/False (boolean)

# Python figures out the type automatically!
print(message)
print(age)
print(height)
print(is_student)</code></pre>
        <p><strong>Output:</strong></p>
        <pre>Hello, Python!
25
5.9
True</pre>
      </div>

      <h2>Variable Naming Rules</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <h3>✅ Good Variable Names:</h3>
        <pre><code>first_name = "John"
last_name = "Doe"
age_in_years = 30
total_score = 95
is_game_over = False</code></pre>
        
        <h3>❌ Bad Variable Names:</h3>
        <pre><code># These will cause errors:
# 2name = "John"      # Can't start with number
# first-name = "John" # Can't use dashes
# first name = "John" # Can't have spaces</code></pre>
      </div>

      <h2>Working with Variables</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #17a2b8;">
        <pre><code># You can change variables
score = 0
print("Starting score:", score)

score = 10
print("After first game:", score)

score = score + 5  # Add 5 to current score
print("After bonus:", score)

# You can use variables in calculations
double_score = score * 2
print("Double score:", double_score)

# Combining text and numbers
print("Your final score is", score, "points!")</code></pre>
        <p><strong>Output:</strong></p>
        <pre>Starting score: 0
After first game: 10
After bonus: 15
Double score: 30
Your final score is 15 points!</pre>
      </div>

      <h2>Multiple Variables at Once</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #fd7e14;">
        <pre><code># Assign multiple variables at once
name, age, city = "Alice", 28, "New York"
print(name, "is", age, "years old and lives in", city)

# Give the same value to multiple variables
x = y = z = 0
print("x =", x, ", y =", y, ", z =", z)

# Swap variables (neat trick!)
a = 5
b = 10
print("Before swap: a =", a, ", b =", b)

a, b = b, a  # Magic swap!
print("After swap: a =", a, ", b =", b)</code></pre>
        <p><strong>Output:</strong></p>
        <pre>Alice is 28 years old and lives in New York
x = 0 , y = 0 , z = 0
Before swap: a = 5 , b = 10
After swap: a = 10 , b = 5</pre>
      </div>

      <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <h3>🎯 Practice Exercise</h3>
        <p>Try creating variables for your favorite movie, the year it was made, and your rating out of 10. Then print them in a nice message!</p>
      </div>
    `
  },

  // JAVASCRIPT CONTENT
  javascript: {
    "javascript_home": `
      <h1>Welcome to JavaScript! ⚡</h1>
      <p>JavaScript is the programming language that makes websites interactive and dynamic. It's one of the most popular programming languages in the world!</p>

      <h2>What is JavaScript?</h2>
      <p>JavaScript is a programming language that runs in web browsers and makes websites come alive with:</p>
      <ul>
        <li><strong>Interactive elements:</strong> Buttons that respond to clicks</li>
        <li><strong>Dynamic content:</strong> Content that changes without reloading the page</li>
        <li><strong>Animations:</strong> Smooth visual effects</li>
        <li><strong>User input handling:</strong> Forms that validate data</li>
      </ul>

      <h2>Your First JavaScript Code</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #ffc107;">
        <pre><code>// Display a message to the user
alert("Hello, World!");

// Write to the browser console
console.log("Welcome to JavaScript!");

// Change content on a webpage
document.write("JavaScript is awesome!");</code></pre>
      </div>

      <h2>Why Learn JavaScript?</h2>
      <ul>
        <li><strong>Universal:</strong> Runs on every device with a web browser</li>
        <li><strong>Versatile:</strong> Frontend, backend, mobile apps, desktop apps</li>
        <li><strong>In-demand:</strong> One of the most requested skills by employers</li>
        <li><strong>Beginner-friendly:</strong> Easy to start, powerful when mastered</li>
      </ul>

      <h2>What Can You Build?</h2>
      <div style="background-color: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0;">
        <ul>
          <li><strong>Interactive websites:</strong> Like Facebook, Google, YouTube</li>
          <li><strong>Web applications:</strong> Gmail, Google Docs, Spotify Web</li>
          <li><strong>Mobile apps:</strong> Using React Native or Ionic</li>
          <li><strong>Desktop applications:</strong> Using Electron (like Discord, VS Code)</li>
          <li><strong>Games:</strong> Browser games and even 3D games</li>
        </ul>
      </div>

      <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0;">
        <h3>💡 Fun Fact</h3>
        <p>JavaScript was created in just 10 days in 1995! Despite its quick creation, it has become one of the most important programming languages ever.</p>
      </div>
    `,

    "js_introduction": `
      <h1>JavaScript Introduction 🚀</h1>
      <p>Let's dive deeper into JavaScript and understand what makes it so special!</p>

      <h2>JavaScript Can Change HTML Content</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <pre><code>&lt;!-- HTML --&gt;
&lt;p id="demo"&gt;JavaScript can change HTML content.&lt;/p&gt;
&lt;button onclick="changeText()"&gt;Click Me!&lt;/button&gt;

&lt;script&gt;
function changeText() {
    document.getElementById("demo").innerHTML = "Hello JavaScript!";
}
&lt;/script&gt;</code></pre>
        <p><strong>Result:</strong> When you click the button, the text changes from "JavaScript can change HTML content" to "Hello JavaScript!"</p>
      </div>

      <h2>JavaScript Can Change CSS Styles</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <pre><code>&lt;p id="myText"&gt;This text will change style!&lt;/p&gt;
&lt;button onclick="changeStyle()"&gt;Change Style&lt;/button&gt;

&lt;script&gt;
function changeStyle() {
    let element = document.getElementById("myText");
    element.style.color = "red";
    element.style.fontSize = "20px";
    element.style.fontWeight = "bold";
}
&lt;/script&gt;</code></pre>
        <p><strong>Result:</strong> The text becomes red, larger, and bold when you click the button!</p>
      </div>

      <h2>JavaScript Can Validate Data</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #dc3545;">
        <pre><code>function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        alert("Valid email address!");
        return true;
    } else {
        alert("Please enter a valid email address!");
        return false;
    }
}

// Test the function
validateEmail("user@example.com");  // Valid!
validateEmail("invalid-email");     // Invalid!</code></pre>
      </div>

      <h2>JavaScript Can Do Math</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #17a2b8;">
        <pre><code>// Basic math operations
let x = 5;
let y = 3;

console.log("Addition:", x + y);       // 8
console.log("Subtraction:", x - y);    // 2
console.log("Multiplication:", x * y); // 15
console.log("Division:", x / y);       // 1.666...

// More advanced calculations
let radius = 5;
let area = Math.PI * radius * radius;
console.log("Circle area:", area.toFixed(2)); // 78.54</code></pre>
      </div>

      <h2>Where JavaScript Runs</h2>
      <ul>
        <li><strong>In the browser:</strong> Makes websites interactive</li>
        <li><strong>On servers:</strong> Using Node.js for backend development</li>
        <li><strong>In mobile apps:</strong> Using frameworks like React Native</li>
        <li><strong>In desktop apps:</strong> Using Electron framework</li>
      </ul>

      <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <h3>✨ JavaScript is Everywhere!</h3>
        <p>JavaScript is the only programming language that can run natively in web browsers, making it essential for web development!</p>
      </div>
    `,

    "js_where_to": `
      <h1>Where to Write JavaScript Code 📝</h1>
      <p>JavaScript can be placed in different locations in your HTML document. Let's explore the best practices!</p>

      <h2>1. Internal JavaScript (In the HTML File)</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <h3>In the &lt;head&gt; section:</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;script&gt;
        function greetUser() {
            alert("Hello from the head section!");
        }
    &lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button onclick="greetUser()"&gt;Click Me&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <h3>In the &lt;body&gt; section:</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    &lt;h1 id="title"&gt;Welcome!&lt;/h1&gt;
    
    &lt;script&gt;
        // This runs immediately when the page loads
        document.getElementById("title").style.color = "blue";
        console.log("Page is ready!");
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <h2>2. External JavaScript (Separate File)</h2>
      <p>This is the recommended approach for larger projects!</p>
      
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #ffc107;">
        <h3>Create a file called "script.js":</h3>
        <pre><code>// script.js
function showMessage() {
    alert("Hello from external file!");
}

function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

console.log("External JavaScript loaded!");</code></pre>
        
        <h3>Link it in your HTML:</h3>
        <pre><code>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;button onclick="showMessage()"&gt;Show Message&lt;/button&gt;
    &lt;button onclick="changeBackground()"&gt;Change Background&lt;/button&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
      </div>

      <h2>3. Inline JavaScript (In HTML Elements)</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #dc3545;">
        <pre><code>&lt;!-- Inline JavaScript --&gt;
&lt;button onclick="alert('Button clicked!')"&gt;Click Me&lt;/button&gt;

&lt;p onmouseover="this.style.color='red'" 
   onmouseout="this.style.color='black'"&gt;
   Hover over this text!
&lt;/p&gt;

&lt;input type="text" 
       onchange="console.log('Input changed:', this.value)"&gt;</code></pre>
        <p><strong>Note:</strong> Inline JavaScript is quick for simple tasks but not recommended for complex code.</p>
      </div>

      <h2>Best Practices 🏆</h2>
      <div style="background-color: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0;">
        <h3>1. Use External Files for Large Projects</h3>
        <ul>
          <li>Keeps HTML clean and organized</li>
          <li>JavaScript can be reused across multiple pages</li>
          <li>Easier to maintain and debug</li>
        </ul>
        
        <h3>2. Place Scripts Before &lt;/body&gt;</h3>
        <pre><code>&lt;body&gt;
    &lt;!-- Your HTML content --&gt;
    
    &lt;script src="script.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre>
        <p>This ensures the HTML loads first, then JavaScript runs.</p>
      </div>

      <h2>Loading Multiple JavaScript Files</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #6f42c1;">
        <pre><code>&lt;head&gt;
    &lt;script src="utilities.js"&gt;&lt;/script&gt;
    &lt;script src="main.js"&gt;&lt;/script&gt;
    &lt;script src="animations.js"&gt;&lt;/script&gt;
&lt;/head&gt;</code></pre>
        <p><strong>Important:</strong> Files load in order, so make sure dependencies come first!</p>
      </div>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
        <h3>⚡ Performance Tip</h3>
        <p>Use the <code>defer</code> attribute to load JavaScript without blocking HTML rendering:</p>
        <pre><code>&lt;script src="script.js" defer&gt;&lt;/script&gt;</code></pre>
      </div>
    `
  },

  // REACT CONTENT
  react: {
    "react_home": `
      <h1>Welcome to React! ⚛️</h1>
      <p>React is a powerful JavaScript library for building user interfaces. Created by Facebook, it's now used by millions of developers worldwide!</p>

      <h2>What is React?</h2>
      <p>React is a JavaScript library that helps you build interactive user interfaces by:</p>
      <ul>
        <li><strong>Component-based:</strong> Build encapsulated components that manage their own state</li>
        <li><strong>Declarative:</strong> Describe what the UI should look like, React handles the how</li>
        <li><strong>Virtual DOM:</strong> Efficient updates for better performance</li>
        <li><strong>Learn Once, Write Anywhere:</strong> Web, mobile, desktop applications</li>
      </ul>

      <h2>Your First React Component</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #61dafb;">
        <pre><code>import React from 'react';

function Welcome() {
  return (
    &lt;div&gt;
      &lt;h1&gt;Hello, React!&lt;/h1&gt;
      &lt;p&gt;Welcome to the world of React components!&lt;/p&gt;
    &lt;/div&gt;
  );
}

export default Welcome;</code></pre>
      </div>

      <h2>Why Choose React?</h2>
      <div style="background-color: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0;">
        <ul>
          <li><strong>Popular:</strong> Used by Netflix, Airbnb, Instagram, WhatsApp</li>
          <li><strong>Ecosystem:</strong> Huge community and library support</li>
          <li><strong>Job Market:</strong> High demand for React developers</li>
          <li><strong>Performance:</strong> Virtual DOM makes apps fast and responsive</li>
          <li><strong>Flexibility:</strong> Works with other libraries and frameworks</li>
        </ul>
      </div>

      <h2>What You'll Build</h2>
      <ul>
        <li><strong>Single Page Applications (SPAs):</strong> Gmail, Twitter-like apps</li>
        <li><strong>E-commerce sites:</strong> Online stores with dynamic content</li>
        <li><strong>Dashboards:</strong> Admin panels and data visualization</li>
        <li><strong>Social media apps:</strong> Interactive user interfaces</li>
        <li><strong>Mobile apps:</strong> Using React Native</li>
      </ul>

      <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0;">
        <h3>💡 Did You Know?</h3>
        <p>React was first deployed on Facebook's newsfeed in 2011 and was open-sourced in 2013. Today, it powers some of the most visited websites in the world!</p>
      </div>
    `,

    "react_intro": `
      <h1>React Introduction 🎯</h1>
      <p>Let's understand what makes React special and how it revolutionizes web development!</p>

      <h2>React Philosophy: Components</h2>
      <p>Think of React components like LEGO blocks - small, reusable pieces that you combine to build something amazing!</p>

      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <h3>Example: A Simple Button Component</h3>
        <pre><code>function Button({ text, color, onClick }) {
  return (
    &lt;button 
      style={{ backgroundColor: color, padding: '10px 20px' }}
      onClick={onClick}
    &gt;
      {text}
    &lt;/button&gt;
  );
}

// Using the component
function App() {
  const handleClick = () =&gt; alert('Button clicked!');
  
  return (
    &lt;div&gt;
      &lt;Button text="Save" color="green" onClick={handleClick} /&gt;
      &lt;Button text="Cancel" color="red" onClick={handleClick} /&gt;
      &lt;Button text="Submit" color="blue" onClick={handleClick} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
      </div>

      <h2>JSX: JavaScript + HTML</h2>
      <p>JSX lets you write HTML-like syntax directly in JavaScript. It's like magic!</p>

      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <h3>Regular JavaScript (DOM manipulation):</h3>
        <pre><code>const element = document.createElement('div');
element.className = 'container';
element.innerHTML = '&lt;h1&gt;Hello World&lt;/h1&gt;';
document.body.appendChild(element);</code></pre>
        
        <h3>React with JSX:</h3>
        <pre><code>const element = (
  &lt;div className="container"&gt;
    &lt;h1&gt;Hello World&lt;/h1&gt;
  &lt;/div&gt;
);</code></pre>
        <p>Much cleaner and easier to read!</p>
      </div>

      <h2>State: Making Components Interactive</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #17a2b8;">
        <pre><code>import React, { useState } from 'react';

function Counter() {
  // State: a value that can change
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;h2&gt;Count: {count}&lt;/h2&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;
        Increase
      &lt;/button&gt;
      &lt;button onClick={() =&gt; setCount(count - 1)}&gt;
        Decrease
      &lt;/button&gt;
      &lt;button onClick={() =&gt; setCount(0)}&gt;
        Reset
      &lt;/button&gt;
    &lt;/div&gt;
  );
}</code></pre>
        <p><strong>Result:</strong> A counter that updates when you click the buttons!</p>
      </div>

      <h2>Props: Passing Data Between Components</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #ffc107;">
        <pre><code>function UserCard({ name, age, email, avatar }) {
  return (
    &lt;div className="user-card"&gt;
      &lt;img src={avatar} alt={name} /&gt;
      &lt;h3&gt;{name}&lt;/h3&gt;
      &lt;p&gt;Age: {age}&lt;/p&gt;
      &lt;p&gt;Email: {email}&lt;/p&gt;
    &lt;/div&gt;
  );
}

function App() {
  return (
    &lt;div&gt;
      &lt;UserCard 
        name="Alice Johnson" 
        age={28} 
        email="alice@example.com"
        avatar="/avatar1.jpg"
      /&gt;
      &lt;UserCard 
        name="Bob Smith" 
        age={32} 
        email="bob@example.com"
        avatar="/avatar2.jpg"
      /&gt;
    &lt;/div&gt;
  );
}</code></pre>
      </div>

      <h2>The Virtual DOM Magic</h2>
      <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <h3>🔮 How React Makes Apps Fast</h3>
        <ol>
          <li><strong>Virtual DOM:</strong> React keeps a virtual copy of the DOM in memory</li>
          <li><strong>Diffing:</strong> When state changes, React compares old vs new virtual DOM</li>
          <li><strong>Reconciliation:</strong> Only the differences are updated in the real DOM</li>
          <li><strong>Result:</strong> Lightning-fast updates even in complex applications!</li>
        </ol>
      </div>

      <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
        <h3>🎯 React's Superpowers</h3>
        <ul>
          <li><strong>Reusability:</strong> Write once, use everywhere</li>
          <li><strong>Maintainability:</strong> Easy to update and debug</li>
          <li><strong>Performance:</strong> Virtual DOM optimizations</li>
          <li><strong>Developer Experience:</strong> Great tools and debugging</li>
        </ul>
      </div>
    `
  },

  // SQL CONTENT
  sql: {
    "sql_introduction": `
      <h1>Welcome to SQL! 🗄️</h1>
      <p>SQL (Structured Query Language) is the language used to communicate with databases. Think of it as a way to ask questions to your data!</p>

      <h2>What is SQL?</h2>
      <p>SQL is a special language designed for managing and retrieving data from databases. It's like asking questions to a very organized filing cabinet!</p>
      <ul>
        <li><strong>Structured:</strong> Has clear rules and syntax</li>
        <li><strong>Query:</strong> You ask questions (queries) to get answers (data)</li>
        <li><strong>Language:</strong> A way to communicate with databases</li>
      </ul>

      <h2>Why Learn SQL?</h2>
      <div style="background-color: #e3f2fd; padding: 15px; border-left: 4px solid #2196f3; margin: 20px 0;">
        <ul>
          <li><strong>Universal:</strong> Works with almost all databases</li>
          <li><strong>Essential:</strong> Required for data analysis, web development</li>
          <li><strong>Powerful:</strong> Handle millions of records efficiently</li>
          <li><strong>In-demand:</strong> One of the most sought-after skills</li>
        </ul>
      </div>

      <h2>Your First SQL Query</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #28a745;">
        <pre><code>-- Select all data from a table called 'students'
SELECT * FROM students;

-- This returns all columns and all rows from the students table</code></pre>
        <p><strong>What this does:</strong> Shows you everything in the students table, like opening a folder and seeing all the files inside!</p>
      </div>

      <h2>Common SQL Operations</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
        <h3>1. SELECT - Getting Data</h3>
        <pre><code>-- Get specific columns
SELECT name, age FROM students;

-- Get data with conditions
SELECT name FROM students WHERE age > 18;</code></pre>
        
        <h3>2. INSERT - Adding Data</h3>
        <pre><code>-- Add a new student
INSERT INTO students (name, age, grade)
VALUES ('Alice', 20, 'A');</code></pre>
        
        <h3>3. UPDATE - Changing Data</h3>
        <pre><code>-- Update a student's grade
UPDATE students 
SET grade = 'A+' 
WHERE name = 'Alice';</code></pre>
        
        <h3>4. DELETE - Removing Data</h3>
        <pre><code>-- Remove a student
DELETE FROM students 
WHERE name = 'Alice';</code></pre>
      </div>

      <h2>Real-World Example</h2>
      <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #17a2b8;">
        <p>Imagine you're managing a library. Here's how SQL helps:</p>
        <pre><code>-- Find all books by a specific author
SELECT title, year_published 
FROM books 
WHERE author = 'J.K. Rowling';

-- Count how many books we have
SELECT COUNT(*) FROM books;

-- Find books published in the last 5 years
SELECT title, author 
FROM books 
WHERE year_published >= 2019;</code></pre>
      </div>

      <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #0066cc; margin: 20px 0;">
        <h3>💡 Fun Fact</h3>
        <p>SQL was developed in the 1970s and is still going strong! It's one of the oldest programming languages still in widespread use.</p>
      </div>

      <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
        <h3>🎯 What You'll Master</h3>
        <p>By the end of this course, you'll be able to:</p>
        <ul>
          <li>Retrieve specific data from large databases</li>
          <li>Create relationships between different tables</li>
          <li>Perform calculations and analysis on data</li>
          <li>Build and manage your own databases</li>
        </ul>
      </div>
    `
  }
};

// Helper function to get content for a topic
export function getLessonContent(course: string, topic: string): string {
  const topicKey = topic.toLowerCase().replace(/\s+/g, '_').replace(/[^\w_]/g, '');
  const courseContent = lessonContent[course.toLowerCase()];
  
  if (courseContent && courseContent[topicKey]) {
    return courseContent[topicKey];
  }
  
  // Default content for topics without specific content
  return `
    <h1>${topic}</h1>
    <p>Welcome to the ${topic} lesson! This comprehensive guide will help you master this important concept.</p>
    
    <h2>What You'll Learn</h2>
    <ul>
      <li><strong>Core concepts:</strong> The fundamental ideas behind ${topic.toLowerCase()}</li>
      <li><strong>Practical examples:</strong> Real-world code you can try yourself</li>
      <li><strong>Step-by-step guidance:</strong> Clear instructions for beginners</li>
      <li><strong>Best practices:</strong> Professional tips and recommendations</li>
    </ul>
    
    <h2>Getting Started</h2>
    <p>This lesson is designed for beginners, so don't worry if you're new to programming. We'll explain everything clearly with plenty of examples!</p>
    
    <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 15px 0; border-left: 4px solid #007acc;">
      <h3>Example Code:</h3>
      <pre><code>// This is a sample code block
// You'll see many examples like this throughout the lesson
console.log("Welcome to ${topic}!");

// Try running this code to see how it works
let greeting = "Hello, World!";
console.log(greeting);</code></pre>
    </div>
    
    <div style="background-color: #e8f5e8; padding: 15px; border-left: 4px solid #4caf50; margin: 20px 0;">
      <h3>💡 Tip for Success</h3>
      <p>Take your time and practice each concept. Programming is like learning to play an instrument - the more you practice, the better you become!</p>
    </div>
    
    <div style="background-color: #fff3cd; padding: 15px; border-left: 4px solid #ffc107; margin: 20px 0;">
      <h3>🎯 Practice Exercise</h3>
      <p>Try implementing the examples shown in this lesson. Experiment with different values and see what happens!</p>
    </div>
  `;
}
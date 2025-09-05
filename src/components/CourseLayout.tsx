import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Book, Code, Database, Globe, Smartphone } from 'lucide-react';
import { TopicsSidebar } from './TopicsSidebar';
import { LessonContent } from './LessonContent';

const courses = [
  {
    id: 'python',
    name: 'Python',
    icon: Code,
    description: 'Learn Python programming from basics to advanced',
    color: 'from-blue-500 to-purple-600'
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: Globe,
    description: 'Master modern JavaScript development',
    color: 'from-yellow-500 to-orange-600'
  },
  {
    id: 'react',
    name: 'React',
    icon: Smartphone,
    description: 'Build modern web applications with React',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: Database,
    description: 'Database management and queries',
    color: 'from-green-500 to-teal-600'
  }
];

const pythonTopics = [
  "Python HOME",
  "Python Intro", 
  "Python Get Started",
  "Python Syntax",
  "Python Comments",
  "Python Variables",
  "Python Data Types",
  "Python Numbers",
  "Python Casting",
  "Python Strings",
  "Python Booleans",
  "Python Operators",
  "Python Lists",
  "Python Tuples",
  "Python Sets",
  "Python Dictionaries",
  "Python If...Else",
  "Python Match",
  "Python While Loops",
  "Python For Loops",
  "Python Functions",
  "Python Lambda",
  "Python Arrays",
  "Python OOP",
  "Python Classes/Objects",
  "Python Inheritance",
  "Python Iterators",
  "Python Polymorphism",
  "Python Scope",
  "Python Modules",
  "Python Dates",
  "Python Math",
  "Python JSON",
  "Python RegEx",
  "Python PIP",
  "Python Try...Except",
  "Python String Formatting",
  "Python User Input",
  "Python VirtualEnv",
  "Python File Handling",
  "Python Read Files",
  "Python Write/Create Files",
  "Python Delete Files"
];

const javascriptTopics = [
  "JavaScript HOME",
  "JS Introduction", 
  "JS Where To",
  "JS Output",
  "JS Syntax",
  "JS Statements",
  "JS Comments",
  "JS Variables",
  "JS Let",
  "JS Const",
  "JS Operators",
  "JS Arithmetic", 
  "JS Assignment",
  "JS Functions",
  "JS Objects",
  "JS Events",
  "JS Strings",
  "JS String Templates",
  "JS Numbers",
  "JS Arrays",
  "JS Dates",
  "JS Math",
  "JS Booleans",
  "JS Comparisons",
  "JS If Else",
  "JS Switch",
  "JS Loops",
  "JS Break",
  "JS Continue",
  "JS Errors",
  "JS Scope",
  "JS Data Types",
  "JS String Methods",
  "JS Number Methods",
  "JS Array Methods",
  "JS Array Search",
  "JS Array Sort",
  "JS Array Iterations",
  "Function Definitions",
  "Function Arrows",
  "Function Parameters",
  "Function Invocation",
  "Object Definitions",
  "Object Properties",
  "Object Methods",
  "Object Constructors",
  "JS Classes",
  "JS Class Inheritance",
  "JS Sets",
  "JS Maps",
  "JS RegExp",
  "JS Async",
  "JS Callbacks",
  "JS Promises",
  "JS Async/Await",
  "JS JSON",
  "DOM Introduction",
  "DOM Methods",
  "DOM Elements",
  "DOM Events",
  "JS AJAX"
];

const reactTopics = [
  "React HOME",
  "React Intro",
  "React Get Started",
  "React Upgrade",
  "React ES6",
  "ES6 Classes",
  "ES6 Arrow Functions",
  "ES6 Variables",
  "ES6 Array Methods",
  "ES6 Destructuring",
  "ES6 Spread Operator", 
  "ES6 Modules",
  "ES6 Ternary Operator",
  "React Render HTML",
  "React JSX",
  "React Components",
  "React Class",
  "React Props",
  "React Events",
  "React Conditionals",
  "React Lists",
  "React Forms",
  "React Router",
  "React Memo",
  "React CSS Styling",
  "React Sass Styling",
  "What is a Hook?",
  "useState",
  "useEffect",
  "useContext",
  "useRef",
  "useReducer",
  "useCallback",
  "useMemo",
  "Custom Hooks"
];

const sqlTopics = [
  "SQL Introduction",
  "SQL Syntax",
  "SQL SELECT",
  "SQL SELECT DISTINCT",
  "SQL WHERE",
  "SQL ORDER BY",
  "SQL AND, OR, NOT",
  "SQL INSERT INTO",
  "SQL NULL Values",
  "SQL UPDATE",
  "SQL DELETE",
  "SQL SELECT TOP",
  "Aggregate Functions",
  "SQL MIN and MAX",
  "SQL COUNT, AVG, SUM",
  "SQL LIKE",
  "SQL Wildcards",
  "SQL IN",
  "SQL BETWEEN",
  "SQL Aliases",
  "SQL Joins",
  "SQL INNER JOIN",
  "SQL LEFT JOIN",
  "SQL RIGHT JOIN",
  "SQL FULL JOIN",
  "SQL Self Join",
  "SQL UNION",
  "SQL GROUP BY",
  "SQL HAVING",
  "SQL EXISTS",
  "SQL ANY and ALL",
  "SQL SELECT INTO",
  "SQL INSERT INTO SELECT",
  "SQL CASE",
  "SQL NULL Functions",
  "SQL Stored Procedures",
  "SQL Comments",
  "SQL Operators",
  "SQL CREATE DATABASE",
  "SQL DROP DATABASE",
  "SQL BACKUP DATABASE",
  "SQL CREATE TABLE",
  "SQL DROP TABLE",
  "SQL ALTER TABLE",
  "SQL Constraints",
  "SQL NOT NULL",
  "SQL UNIQUE",
  "SQL PRIMARY KEY",
  "SQL FOREIGN KEY",
  "SQL CHECK",
  "SQL DEFAULT",
  "SQL CREATE INDEX",
  "SQL AUTO INCREMENT",
  "SQL Dates",
  "SQL Views",
  "SQL Injection",
  "SQL Hosting",
  "SQL Data Types"
];

const courseTopics = {
  python: pythonTopics,
  javascript: javascriptTopics,
  react: reactTopics,
  sql: sqlTopics
};

export function CourseLayout() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setSelectedTopic(null);
  };

  const handleTopicSelect = (topic: string) => {
    setSelectedTopic(topic);
  };

  const handleBackToCourses = () => {
    setSelectedCourse(null);
    setSelectedTopic(null);
  };

  if (selectedCourse && selectedTopic) {
    return (
      <div className="flex min-h-screen w-full">
        <TopicsSidebar
          course={selectedCourse}
          topics={courseTopics[selectedCourse] || []}
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
          onBackToCourses={handleBackToCourses}
        />
        <main className="flex-1">
          <LessonContent 
            course={selectedCourse}
            topic={selectedTopic}
            onBackToTopics={() => setSelectedTopic(null)}
          />
        </main>
      </div>
    );
  }

  if (selectedCourse) {
    return (
      <div className="flex min-h-screen w-full">
        <TopicsSidebar
          course={selectedCourse}
          topics={courseTopics[selectedCourse] || []}
          selectedTopic={selectedTopic}
          onTopicSelect={handleTopicSelect}
          onBackToCourses={handleBackToCourses}
        />
        <main className="flex-1 p-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 capitalize">{selectedCourse} Course</h1>
            <p className="text-muted-foreground mb-8">
              Select a topic from the sidebar to start learning.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-surface p-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Available Courses</h1>
          <p className="text-muted-foreground text-lg">
            Choose a course to start your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {courses.map((course) => {
            const IconComponent = course.icon;
            return (
              <Card 
                key={course.id} 
                className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:-translate-y-1"
                onClick={() => handleCourseSelect(course.id)}
              >
                <CardContent className="p-6">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center mb-4`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{course.name}</h3>
                  <p className="text-muted-foreground mb-4">{course.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
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

const courseTopics = {
  python: pythonTopics,
  javascript: ["JavaScript HOME", "JS Introduction", "JS Variables", "JS Functions"],
  react: ["React HOME", "React Components", "React Props", "React State"],
  sql: ["SQL HOME", "SQL SELECT", "SQL WHERE", "SQL INSERT"]
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
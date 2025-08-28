import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Target, Zap, Brain, Star } from "lucide-react";
import { QuizComponent } from "./QuizComponent";
import { LessonViewer } from "./LessonViewer";

interface LearningSession {
  topic: string;
  level: "beginner" | "intermediate" | "expert";
  currentLesson: number;
  totalLessons: number;
  score: number;
  streak: number;
}

export function LearningDashboard() {
  const [currentView, setCurrentView] = useState<"dashboard" | "lesson" | "quiz">("dashboard");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<"beginner" | "intermediate" | "expert">("beginner");
  const [session, setSession] = useState<LearningSession | null>(null);

  const mockSessions = [
    { topic: "React Fundamentals", level: "intermediate" as const, currentLesson: 3, totalLessons: 8, score: 85, streak: 5 },
    { topic: "Python Basics", level: "beginner" as const, currentLesson: 5, totalLessons: 10, score: 92, streak: 12 },
    { topic: "Machine Learning", level: "expert" as const, currentLesson: 2, totalLessons: 6, score: 78, streak: 3 },
  ];

  const startNewSession = () => {
    if (!selectedTopic) return;
    
    const newSession: LearningSession = {
      topic: selectedTopic,
      level: selectedLevel,
      currentLesson: 1,
      totalLessons: 8,
      score: 0,
      streak: 0,
    };
    
    setSession(newSession);
    setCurrentView("lesson");
  };

  const handleQuizComplete = (score: number) => {
    if (session) {
      setSession({
        ...session,
        score: Math.round((session.score + score) / 2),
        streak: score >= 70 ? session.streak + 1 : 0,
      });
    }
    setCurrentView("dashboard");
  };

  if (currentView === "lesson" && session) {
    return (
      <LessonViewer
        session={session}
        onStartQuiz={() => setCurrentView("quiz")}
        onBackToDashboard={() => setCurrentView("dashboard")}
      />
    );
  }

  if (currentView === "quiz" && session) {
    return (
      <QuizComponent
        topic={session.topic}
        level={session.level}
        onComplete={handleQuizComplete}
        onBack={() => setCurrentView("lesson")}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-surface p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-3 bg-gradient-primary rounded-full shadow-button">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Daily Learning Buddy
            </h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Your AI-powered learning companion for personalized education
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="bg-gradient-primary text-white shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Trophy className="h-8 w-8" />
                <div>
                  <p className="text-sm opacity-90">Total Score</p>
                  <p className="text-2xl font-bold">85%</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-success text-white shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Zap className="h-8 w-8" />
                <div>
                  <p className="text-sm opacity-90">Current Streak</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-accent text-white shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8" />
                <div>
                  <p className="text-sm opacity-90">Lessons Completed</p>
                  <p className="text-2xl font-bold">24</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-learning-surface-elevated shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-learning-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">This Week</p>
                  <p className="text-2xl font-bold text-foreground">5/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Start New Learning Session */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5 text-learning-primary" />
                Start New Learning Session
              </CardTitle>
              <CardDescription>
                Choose a topic and difficulty level to begin your AI-powered learning journey
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Learning Topic</label>
                <Input
                  placeholder="e.g., JavaScript, Machine Learning, Spanish..."
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Difficulty Level</label>
                <Select value={selectedLevel} onValueChange={(value) => setSelectedLevel(value as "beginner" | "intermediate" | "expert")}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="beginner">Beginner - New to this topic</SelectItem>
                    <SelectItem value="intermediate">Intermediate - Some experience</SelectItem>
                    <SelectItem value="expert">Expert - Advanced knowledge</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button 
                className="w-full bg-gradient-primary hover:opacity-90 shadow-button"
                onClick={startNewSession}
                disabled={!selectedTopic}
              >
                Start Learning Session
              </Button>
            </CardContent>
          </Card>

          {/* Recent Learning Sessions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Continue Learning</CardTitle>
              <CardDescription>
                Pick up where you left off in your recent sessions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {mockSessions.map((sessionData, index) => (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-learning-surface transition-smooth cursor-pointer"
                  onClick={() => {
                    setSession(sessionData);
                    setCurrentView("lesson");
                  }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{sessionData.topic}</h4>
                    <Badge variant="secondary" className="capitalize">
                      {sessionData.level}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Lesson {sessionData.currentLesson} of {sessionData.totalLessons}</span>
                      <span>Score: {sessionData.score}%</span>
                    </div>
                    <Progress 
                      value={(sessionData.currentLesson / sessionData.totalLessons) * 100} 
                      className="h-2"
                    />
                    <div className="flex items-center gap-2 text-sm">
                      <Zap className="h-4 w-4 text-learning-accent" />
                      <span className="text-muted-foreground">
                        {sessionData.streak} day streak
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
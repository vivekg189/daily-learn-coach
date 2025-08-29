import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Trophy, Target, Zap, Brain, Star, LogOut, Loader2 } from "lucide-react";
import { QuizComponent } from "./QuizComponent";
import { LessonViewer } from "./LessonViewer";
import { useAuth } from "@/hooks/useAuth";
import { useLearningData, LearningSession } from "@/hooks/useLearningData";

export function LearningDashboard() {
  const { user, signOut } = useAuth();
  const { profile, sessions, loading, createSession, updateSession, saveQuizResult, updateProfile } = useLearningData();
  const [currentView, setCurrentView] = useState<"dashboard" | "lesson" | "quiz">("dashboard");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<"beginner" | "intermediate" | "expert">("beginner");
  const [session, setSession] = useState<LearningSession | null>(null);
  const [creating, setCreating] = useState(false);

  const startNewSession = async () => {
    if (!selectedTopic) return;
    
    setCreating(true);
    try {
      const newSession = await createSession(selectedTopic, selectedLevel);
      if (newSession) {
        setSession(newSession as LearningSession);
        setCurrentView("lesson");
        setSelectedTopic("");
      }
    } finally {
      setCreating(false);
    }
  };

  const handleQuizComplete = async (score: number, totalQuestions: number, answers: any) => {
    if (session) {
      // Save quiz result
      await saveQuizResult(session.id, score, totalQuestions, answers);
      
      // Update session with new score
      const newScore = Math.round((session.score + score) / 2);
      const newStreak = score >= 70 ? session.streak + 1 : 0;
      
      const updatedSession = await updateSession(session.id, {
        score: newScore,
        streak: newStreak,
        current_lesson: Math.min(session.current_lesson + 1, session.total_lessons),
      });
      
      if (updatedSession) {
        setSession(updatedSession as LearningSession);
        
        // Update profile stats
        if (profile) {
          await updateProfile({
            total_score: Math.round((profile.total_score + score) / 2),
            current_streak: newStreak,
            lessons_completed: profile.lessons_completed + 1,
          });
        }
      }
    }
    setCurrentView("dashboard");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-surface flex items-center justify-center">
        <Card className="p-8 shadow-card">
          <CardContent className="flex flex-col items-center space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-primary rounded-full shadow-button">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Daily Learning Buddy
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-learning-primary" />
              <span className="text-muted-foreground">Loading your progress...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

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
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-primary rounded-full shadow-button">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Daily Learning Buddy
                </h1>
                <p className="text-sm text-muted-foreground">
                  Welcome back, {profile?.display_name || user?.email}!
                </p>
              </div>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={signOut}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Sign Out
            </Button>
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
                  <p className="text-2xl font-bold">{profile?.total_score || 0}%</p>
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
                  <p className="text-2xl font-bold">{profile?.current_streak || 0}</p>
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
                  <p className="text-2xl font-bold">{profile?.lessons_completed || 0}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-learning-surface-elevated shadow-card">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-learning-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Active Sessions</p>
                  <p className="text-2xl font-bold text-foreground">{sessions.filter(s => !s.is_completed).length}</p>
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
                disabled={!selectedTopic || creating}
              >
                {creating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating Session...
                  </>
                ) : (
                  'Start Learning Session'
                )}
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
              {sessions.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>No learning sessions yet.</p>
                  <p className="text-sm">Start your first session to begin learning!</p>
                </div>
              ) : (
                sessions.slice(0, 5).map((sessionData) => (
                  <div
                    key={sessionData.id}
                    className="p-4 border rounded-lg hover:bg-learning-surface transition-smooth cursor-pointer"
                  onClick={() => {
                    setSession(sessionData as LearningSession);
                    setCurrentView("lesson");
                  }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{sessionData.topic}</h4>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className="capitalize">
                          {sessionData.level}
                        </Badge>
                        {sessionData.is_completed && (
                          <Badge variant="outline" className="text-learning-success border-learning-success">
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>Lesson {sessionData.current_lesson} of {sessionData.total_lessons}</span>
                        <span>Score: {sessionData.score}%</span>
                      </div>
                      <Progress 
                        value={(sessionData.current_lesson / sessionData.total_lessons) * 100} 
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
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
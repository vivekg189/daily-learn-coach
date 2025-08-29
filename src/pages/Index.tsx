import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LearningDashboard } from "@/components/LearningDashboard";
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Loader2 } from 'lucide-react';

const Index = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate('/auth');
    }
  }, [user, loading, navigate]);

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
              <span className="text-muted-foreground">Loading your learning journey...</span>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-surface flex items-center justify-center p-4">
        <Card className="max-w-md w-full shadow-card">
          <CardContent className="flex flex-col items-center space-y-6 p-8">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-gradient-primary rounded-full shadow-button">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Daily Learning Buddy
              </h1>
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-xl font-semibold">Welcome to Your Learning Journey</h2>
              <p className="text-muted-foreground">
                Sign in to access personalized AI-powered learning sessions and track your progress.
              </p>
            </div>
            <Button 
              onClick={() => navigate('/auth')}
              className="bg-gradient-primary hover:opacity-90 shadow-button"
            >
              Get Started
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return <LearningDashboard />;
};

export default Index;

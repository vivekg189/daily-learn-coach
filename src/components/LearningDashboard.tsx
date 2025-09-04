import React from 'react';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { CourseLayout } from './CourseLayout';

export function LearningDashboard() {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-between">
          <h1 className="text-lg font-semibold">AI Learning Platform</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">
              Welcome, {user?.email?.split('@')[0] || 'User'}!
            </span>
            <Button variant="outline" size="sm" onClick={() => signOut()}>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      <CourseLayout />
    </div>
  );
}
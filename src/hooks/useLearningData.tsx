import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { useToast } from './use-toast';

export interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  avatar_url: string | null;
  total_score: number;
  current_streak: number;
  lessons_completed: number;
  created_at: string;
  updated_at: string;
}

export interface LearningSession {
  id: string;
  user_id: string;
  topic: string;
  level: 'beginner' | 'intermediate' | 'expert';
  current_lesson: number;
  total_lessons: number;
  score: number;
  streak: number;
  is_completed: boolean;
  created_at: string;
  updated_at: string;
}

export function useLearningData() {
  const { user } = useAuth();
  const { toast } = useToast();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [sessions, setSessions] = useState<LearningSession[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch user profile
  const fetchProfile = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error) {
        console.error('Error fetching profile:', error);
        return;
      }

      setProfile(data);
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
  };

  // Fetch learning sessions
  const fetchSessions = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('learning_sessions')
        .select('*')
        .eq('user_id', user.id)
        .order('updated_at', { ascending: false });

      if (error) {
        console.error('Error fetching sessions:', error);
        return;
      }

      setSessions((data || []) as LearningSession[]);
    } catch (error) {
      console.error('Error fetching sessions:', error);
    }
  };

  // Create a new learning session
  const createSession = async (topic: string, level: 'beginner' | 'intermediate' | 'expert') => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('learning_sessions')
        .insert({
          user_id: user.id,
          topic,
          level,
          current_lesson: 1,
          total_lessons: 8,
          score: 0,
          streak: 0,
        })
        .select()
        .single();

      if (error) {
        toast({
          variant: "destructive",
          title: "Error creating session",
          description: error.message,
        });
        return null;
      }

      setSessions(prev => [data as LearningSession, ...prev]);
      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error creating session",
        description: error.message,
      });
      return null;
    }
  };

  // Update a learning session
  const updateSession = async (sessionId: string, updates: Partial<LearningSession>) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('learning_sessions')
        .update(updates)
        .eq('id', sessionId)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        toast({
          variant: "destructive",
          title: "Error updating session",
          description: error.message,
        });
        return null;
      }

      setSessions(prev => 
        prev.map(session => 
          session.id === sessionId ? data as LearningSession : session
        )
      );

      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error updating session",
        description: error.message,
      });
      return null;
    }
  };

  // Save quiz result
  const saveQuizResult = async (sessionId: string, score: number, totalQuestions: number, answers: any) => {
    if (!user) return null;

    try {
      const { data, error } = await supabase
        .from('quiz_results')
        .insert({
          user_id: user.id,
          session_id: sessionId,
          score,
          total_questions: totalQuestions,
          answers,
        })
        .select()
        .single();

      if (error) {
        toast({
          variant: "destructive",
          title: "Error saving quiz result",
          description: error.message,
        });
        return null;
      }

      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error saving quiz result",
        description: error.message,
      });
      return null;
    }
  };

  // Update profile stats
  const updateProfile = async (updates: Partial<Profile>) => {
    if (!user || !profile) return null;

    try {
      const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('user_id', user.id)
        .select()
        .single();

      if (error) {
        toast({
          variant: "destructive",
          title: "Error updating profile",
          description: error.message,
        });
        return null;
      }

      setProfile(data);
      return data;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error updating profile",
        description: error.message,
      });
      return null;
    }
  };

  useEffect(() => {
    if (user) {
      Promise.all([fetchProfile(), fetchSessions()]).finally(() => setLoading(false));
    } else {
      setProfile(null);
      setSessions([]);
      setLoading(false);
    }
  }, [user]);

  return {
    profile,
    sessions,
    loading,
    createSession,
    updateSession,
    saveQuizResult,
    updateProfile,
    fetchProfile,
    fetchSessions,
  };
}
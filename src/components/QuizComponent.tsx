import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { LearningSession } from '@/hooks/useLearningData';

interface QuizComponentProps {
  session: LearningSession;
  onQuizComplete: (score: number, totalQuestions: number, answers: any[]) => void;
  onBackToDashboard: () => void;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface TopicQuizzes {
  beginner: QuizQuestion[];
  intermediate: QuizQuestion[];
  expert: QuizQuestion[];
}

const quizQuestions: Record<string, TopicQuizzes> = {
  "React Fundamentals": {
    beginner: [
      {
        question: "What does JSX stand for?",
        options: ["JavaScript XML", "Java Syntax Extension", "JavaScript Extension", "Java XML"],
        correctAnswer: 0,
        explanation: "JSX stands for JavaScript XML. It allows you to write HTML-like code in your React components."
      }
    ],
    intermediate: [
      {
        question: "Which hook is used for side effects?",
        options: ["useState", "useEffect", "useContext", "useReducer"],
        correctAnswer: 1,
        explanation: "useEffect is used to perform side effects in functional components."
      }
    ],
    expert: [
      {
        question: "What is React.memo used for?",
        options: ["State management", "Performance optimization", "Routing", "Form handling"],
        correctAnswer: 1,
        explanation: "React.memo is used for performance optimization by preventing unnecessary re-renders."
      }
    ]
  },
  "Python": {
    beginner: [
      {
        question: "Which of the following is a correct way to declare a variable in Python?",
        options: ["var name = 'John'", "let name = 'John'", "name = 'John'", "string name = 'John'"],
        correctAnswer: 2,
        explanation: "In Python, you declare variables by simply assigning a value to a name without any special keywords."
      },
      {
        question: "What data type is the value 3.14?",
        options: ["int", "float", "string", "boolean"],
        correctAnswer: 1,
        explanation: "3.14 is a floating-point number (float) because it contains a decimal point."
      },
      {
        question: "How do you start a comment in Python?",
        options: ["//", "/* */", "#", "<!--"],
        correctAnswer: 2,
        explanation: "Comments in Python start with the # symbol."
      }
    ],
    intermediate: [
      {
        question: "What is a list comprehension?",
        options: [
          "A way to sort lists",
          "A concise way to create lists",
          "A method to delete lists",
          "A type of list"
        ],
        correctAnswer: 1,
        explanation: "List comprehension is a concise way to create lists in Python."
      },
      {
        question: "Which keyword is used to define a class in Python?",
        options: ["def", "class", "function", "object"],
        correctAnswer: 1,
        explanation: "The 'class' keyword is used to define a class in Python."
      }
    ],
    expert: [
      {
        question: "What is a decorator in Python?",
        options: [
          "A design pattern",
          "A function that modifies another function",
          "A type of class",
          "A module"
        ],
        correctAnswer: 1,
        explanation: "A decorator is a function that takes another function and extends its behavior."
      },
      {
        question: "What does 'yield' keyword do in Python?",
        options: [
          "Stops the program",
          "Creates a generator",
          "Raises an exception",
          "Imports a module"
        ],
        correctAnswer: 1,
        explanation: "The 'yield' keyword is used to create generators."
      }
    ]
  }
};

export default function QuizComponent({ session, onQuizComplete, onBackToDashboard }: QuizComponentProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answers, setAnswers] = useState<any[]>([]);
  const [score, setScore] = useState(0);

  const topicQuestions = quizQuestions[session.topic];
  const levelQuestions = topicQuestions?.[session.level];
  
  if (!levelQuestions || levelQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-surface p-4">
        <Card className="shadow-card">
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-semibold mb-4">Quiz Not Available</h2>
            <p className="text-muted-foreground mb-4">
              The quiz for {session.level} level "{session.topic}" is not available yet.
            </p>
            <Button onClick={onBackToDashboard} className="mt-4">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const questions = levelQuestions;
  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showAnswer) return;
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctAnswer;
    const newAnswer = {
      question: currentQuestion.question,
      selectedAnswer,
      correctAnswer: currentQuestion.correctAnswer,
      isCorrect,
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowAnswer(false);
    } else {
      // Quiz completed
      const finalScore = isCorrect ? score + 1 : score;
      onQuizComplete(finalScore, questions.length, newAnswers);
    }
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="min-h-screen bg-gradient-surface p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">{session.topic} Quiz</h1>
          <div className="flex items-center justify-between">
            <span className="text-primary font-medium">{session.level.charAt(0).toUpperCase() + session.level.slice(1)} Level</span>
            <span className="text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <Card className="shadow-card mb-6">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-6">{currentQuestion.question}</h2>
            
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  className={`w-full p-4 text-left rounded-lg border transition-colors ${
                    selectedAnswer === index
                      ? showAnswer
                        ? index === currentQuestion.correctAnswer
                          ? 'bg-success/20 border-success text-success'
                          : 'bg-destructive/20 border-destructive text-destructive'
                        : 'bg-primary/20 border-primary text-primary'
                      : showAnswer && index === currentQuestion.correctAnswer
                      ? 'bg-success/20 border-success text-success'
                      : 'bg-card border-border hover:bg-muted'
                  }`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showAnswer}
                >
                  <div className="flex items-center justify-between">
                    <span>{option}</span>
                    {showAnswer && (
                      <>
                        {index === currentQuestion.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-success" />
                        )}
                        {selectedAnswer === index && index !== currentQuestion.correctAnswer && (
                          <XCircle className="h-5 w-5 text-destructive" />
                        )}
                      </>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {showAnswer && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Explanation:</h3>
                <p className="text-muted-foreground">{currentQuestion.explanation}</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex gap-4">
          <Button variant="outline" onClick={onBackToDashboard}>
            Back to Dashboard
          </Button>
          
          <div className="flex-1" />
          
          {!showAnswer && selectedAnswer !== null && (
            <Button onClick={handleShowAnswer}>
              Show Answer
            </Button>
          )}
          
          {showAnswer && (
            <Button onClick={handleNextQuestion}>
              {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Complete Quiz"}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
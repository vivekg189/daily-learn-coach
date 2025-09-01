import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, CheckCircle, XCircle, Timer } from "lucide-react";

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface QuizComponentProps {
  topic: string;
  level: "beginner" | "intermediate" | "expert";
  onComplete: (score: number, totalQuestions: number, answers: any) => void;
  onBack: () => void;
}

export function QuizComponent({ topic, level, onComplete, onBack }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  const mockQuestions: Record<string, QuizQuestion[]> = {
    "React Fundamentals": [
      {
        question: "What does JSX stand for?",
        options: ["JavaScript XML", "Java Syntax Extension", "JSON XML", "JavaScript Extension"],
        correctAnswer: 0,
        explanation: "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that allows you to write HTML-like code in your React components."
      },
      {
        question: "Which of the following is the correct way to create a React component?",
        options: [
          "function MyComponent() { return <div>Hello</div>; }",
          "const MyComponent = <div>Hello</div>;",
          "class MyComponent extends Component { render() { return 'Hello'; } }",
          "MyComponent() { return <div>Hello</div>; }"
        ],
        correctAnswer: 0,
        explanation: "A functional component is created by defining a function that returns JSX. This is the most common and recommended way in modern React."
      },
      {
        question: "What is the Virtual DOM?",
        options: [
          "A real DOM element",
          "A JavaScript representation of the actual DOM",
          "A CSS framework",
          "A database for React apps"
        ],
        correctAnswer: 1,
        explanation: "The Virtual DOM is a JavaScript representation of the actual DOM that React uses to efficiently update the UI by comparing changes and only updating what's necessary."
      }
    ],
    "Python": [
      {
        question: "Which of the following is a correct way to declare a variable in Python?",
        options: ["var name = 'John'", "let name = 'John'", "name = 'John'", "string name = 'John'"],
        correctAnswer: 2,
        explanation: "In Python, you declare variables by simply assigning a value to a name without any special keywords."
      },
      {
        question: "What data type is the value 3.14?",
        options: ["Integer", "Float", "String", "Boolean"],
        correctAnswer: 1,
        explanation: "3.14 is a floating-point number (float) because it contains a decimal point."
      },
      {
        question: "How do you create a list in Python?",
        options: ["list = {1, 2, 3}", "list = [1, 2, 3]", "list = (1, 2, 3)", "list = <1, 2, 3>"],
        correctAnswer: 1,
        explanation: "Lists in Python are created using square brackets []. Curly brackets {} create sets or dictionaries, and parentheses () create tuples."
      }
    ],
    "Machine Learning": [
      {
        question: "What is the main purpose of an activation function in a neural network?",
        options: [
          "To initialize weights",
          "To introduce non-linearity",
          "To reduce overfitting",
          "To normalize inputs"
        ],
        correctAnswer: 1,
        explanation: "Activation functions introduce non-linearity into neural networks, allowing them to learn complex patterns and solve non-linear problems."
      },
      {
        question: "What happens during backpropagation?",
        options: [
          "Data flows forward through the network",
          "Weights are randomly initialized",
          "Gradients are calculated and weights are updated",
          "The model makes predictions"
        ],
        correctAnswer: 2,
        explanation: "During backpropagation, the network calculates gradients of the loss function with respect to the weights and updates the weights to minimize the loss."
      },
      {
        question: "Which layer typically comes first in a neural network?",
        options: ["Output layer", "Hidden layer", "Input layer", "Activation layer"],
        correctAnswer: 2,
        explanation: "The input layer comes first in a neural network. It receives the raw data that will be processed by the subsequent hidden layers."
      }
    ]
  };

  const questions = mockQuestions[topic] || [
    {
      question: `What is a key concept in ${topic}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: 0,
      explanation: "This is a sample question for your custom topic."
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null) return;

    const newAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newAnswers);
    setShowResult(true);

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
      } else {
        // Quiz complete
        const score = Math.round((newAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length / questions.length) * 100);
        setQuizComplete(true);
        setTimeout(() => onComplete(score, questions.length, newAnswers), 2000);
      }
    }, 2000);
  };

  if (quizComplete) {
    const score = Math.round((userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length / questions.length) * 100);
    
    return (
      <div className="min-h-screen bg-gradient-surface p-4 flex items-center justify-center">
        <Card className="w-full max-w-md shadow-elevated text-center">
          <CardContent className="p-6">
            <div className="mb-4">
              {score >= 70 ? (
                <CheckCircle className="h-16 w-16 text-learning-success mx-auto mb-4" />
              ) : (
                <XCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              )}
            </div>
            <h2 className="text-2xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              {score}%
            </p>
            <p className="text-muted-foreground mb-4">
              {score >= 90 ? "Excellent work!" : score >= 70 ? "Great job!" : "Keep practicing!"}
            </p>
            <div className="text-sm text-muted-foreground">
              {userAnswers.filter((answer, index) => answer === questions[index].correctAnswer).length} out of {questions.length} correct
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correctAnswer;

  return (
    <div className="min-h-screen bg-gradient-surface p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Lesson
          </Button>
          
          <div className="flex items-center gap-4">
            <Badge variant="secondary" className="capitalize">
              {level}
            </Badge>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Timer className="h-4 w-4" />
              Quiz Mode
            </div>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-6 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-semibold">{topic} Quiz</h2>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </div>
            </div>
            <Progress 
              value={((currentQuestion + 1) / questions.length) * 100} 
              className="h-2"
            />
          </CardContent>
        </Card>

        {/* Question */}
        <Card className="mb-6 shadow-card">
          <CardHeader>
            <CardTitle className="text-xl">
              {currentQ.question}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {currentQ.options.map((option, index) => (
              <Button
                key={index}
                variant={selectedAnswer === index ? "default" : "outline"}
                className={`w-full text-left justify-start p-4 h-auto ${
                  showResult
                    ? index === currentQ.correctAnswer
                      ? "bg-learning-success text-white"
                      : selectedAnswer === index && index !== currentQ.correctAnswer
                      ? "bg-destructive text-white"
                      : ""
                    : selectedAnswer === index
                    ? "bg-gradient-primary text-white"
                    : ""
                }`}
                onClick={() => !showResult && handleAnswerSelect(index)}
                disabled={showResult}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </Button>
            ))}
          </CardContent>
        </Card>

        {/* Result Explanation */}
        {showResult && (
          <Card className="mb-6 shadow-card">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                {isCorrect ? (
                  <CheckCircle className="h-5 w-5 text-learning-success mt-0.5" />
                ) : (
                  <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                )}
                <div>
                  <p className="font-semibold mb-2">
                    {isCorrect ? "Correct!" : "Incorrect"}
                  </p>
                  <p className="text-muted-foreground">
                    {currentQ.explanation}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Next Button */}
        {!showResult && (
          <div className="flex justify-end">
            <Button 
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="bg-gradient-primary hover:opacity-90 shadow-button"
            >
              {currentQuestion === questions.length - 1 ? "Finish Quiz" : "Next Question"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
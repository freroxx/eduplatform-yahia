
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const ArabicExercises = () => {
  const { id } = useParams();
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const exerciseData: { [key: string]: any } = {
    "401": {
      title: "تمارين - الإملاء",
      exercises: [
        {
          id: 1,
          title: "تمييز الهمزات",
          difficulty: "سهل",
          duration: "10 دقائق",
          points: 15,
          question: "حدد نوع الهمزة في الكلمات التالية:\n\nأحمد - ابن - إبراهيم - اسم - أسد - استعمال",
          options: ["كلها همزة قطع", "كلها همزة وصل", "مختلطة", "لا توجد همزات"],
          correctAnswer: "مختلطة",
          explanation: "أحمد (قطع) - ابن (وصل) - إبراهيم (قطع) - اسم (وصل) - أسد (قطع) - استعمال (وصل)"
        },
        {
          id: 2,
          title: "التاء المربوطة والمفتوحة",
          difficulty: "متوسط",
          duration: "12 دقيقة",
          points: 20,
          question: "اختر الإملاء الصحيح:",
          options: ["مدرست", "مدرسة", "مدرسه", "مدرسط"],
          correctAnswer: "مدرسة",
          explanation: "مدرسة تُلفظ 'مدرسه' عند الوقف، لذلك تُكتب بالتاء المربوطة (ة)"
        }
      ]
    },
    "407": {
      title: "تمارين - أسماء الآلة والزمان والمكان",
      exercises: [
        {
          id: 3,
          title: "تحديد اسم الآلة",
          difficulty: "متوسط",
          duration: "15 دقيقة",
          points: 20,
          question: "أي من الكلمات التالية اسم آلة؟",
          options: ["مَدرسة", "مِفتاح", "مَولِد", "مَكتبة"],
          correctAnswer: "مِفتاح",
          explanation: "مِفتاح على وزن مِفعال وهو اسم آلة يدل على الأداة التي يُفتح بها"
        }
      ]
    }
  };

  const currentExercises = exerciseData[id || "401"];

  const toggleExercise = (exerciseId: number) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(x => x !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const toggleSolution = (exerciseId: number) => {
    setOpenSolutions(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(x => x !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20" dir="rtl">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground">تمارين اللغة العربية</h1>
            <p className="text-sm text-muted-foreground">{currentExercises?.title}</p>
          </div>
          <Link to="/lessons/arabic" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <span className="font-medium">العودة للدروس</span>
            <ArrowLeft className="h-5 w-5 rotate-180" />
          </Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {currentExercises?.exercises.map((exercise: any) => (
            <Card key={exercise.id} className="bg-card/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Button
                    onClick={() => toggleExercise(exercise.id)}
                    variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                    size="sm"
                    className={completedExercises.includes(exercise.id) ? 'bg-green-600 hover:bg-green-700' : ''}
                  >
                    <CheckCircle className="h-4 w-4 ml-2" />
                    {completedExercises.includes(exercise.id) ? "مكتمل ✓" : "تم"}
                  </Button>
                  <div className="flex-1 text-right">
                    <div className="flex items-center justify-end space-x-3 mb-3">
                      <Badge variant="outline" className="text-orange-600 border-orange-300">
                        <Star className="h-3 w-3 ml-1" />
                        {exercise.points} نقطة
                      </Badge>
                      <Badge variant="outline">
                        <Clock className="h-3 w-3 ml-1" />
                        {exercise.duration}
                      </Badge>
                      <Badge className="bg-amber-100 text-amber-800 border-amber-200">
                        <Target className="h-3 w-3 ml-1" />
                        {exercise.difficulty}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground text-right">
                      {exercise.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg border-r-4 border-blue-500">
                    <p className="text-gray-700 whitespace-pre-line text-right">{exercise.question}</p>
                  </div>
                  
                  {exercise.options && (
                    <div className="space-y-2">
                      {exercise.options.map((option: string, index: number) => (
                        <div key={index} className="p-2 border rounded hover:bg-accent/50 text-right">
                          {option} ({String.fromCharCode(65 + index)})
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <Button
                    onClick={() => toggleSolution(exercise.id)}
                    variant="ghost"
                    className="w-full"
                  >
                    {openSolutions.includes(exercise.id) ? 'إخفاء الحل' : 'عرض الحل'}
                  </Button>
                  
                  {openSolutions.includes(exercise.id) && (
                    <div className="bg-green-50 p-4 rounded-lg border-r-4 border-green-500">
                      <p className="font-semibold text-green-800 mb-2 text-right">الإجابة: {exercise.correctAnswer}</p>
                      <p className="text-gray-700 text-right">{exercise.explanation}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArabicExercises;

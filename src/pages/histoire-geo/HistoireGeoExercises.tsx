import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Trophy, Target, CheckCircle, XCircle, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const HistoireGeoExercises = () => {
  const { id } = useParams();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{[key: number]: string}>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  // Sample exercises for Histoire-Geo
  const exerciseSets = {
    "501": {
      title: "العالم المتوسطي في القرنين 15م و18م",
      exercises: [
        {
          question: "ما هي أهم القوى السياسية في العالم المتوسطي خلال القرن 15م؟",
          options: ["الإمبراطورية العثمانية فقط", "العثمانيون وإسبانيا وفرنسا", "الدول العربية فقط", "الإمبراطورية البيزنطية"],
          correct: "العثمانيون وإسبانيا وفرنسا",
          explanation: "شهد العالم المتوسطي ظهور قوى متعددة منها الإمبراطورية العثمانية وإسبانيا الموحدة وفرنسا الناشئة."
        },
        {
          question: "متى تم فتح القسطنطينية؟",
          options: ["1453م", "1492م", "1517م", "1529م"],
          correct: "1453م",
          explanation: "فتح العثمانيون القسطنطينية عام 1453م تحت قيادة السلطان محمد الفاتح."
        },
        {
          question: "ما هو تأثير الاكتشافات الجغرافية على التجارة المتوسطية؟",
          options: ["لم تؤثر عليها", "زادت من أهميتها", "قللت من أهميتها", "أوقفتها تماماً"],
          correct: "قللت من أهميتها",
          explanation: "الاكتشافات الجغرافية وفتح طرق تجارية جديدة قلل من أهمية طرق التجارة التقليدية في المتوسط."
        }
      ]
    },
    "521": {
      title: "ملف حول كارثة طبيعية (الزلازل في المغرب)",
      exercises: [
        {
          question: "لماذا يتعرض المغرب للزلازل؟",
          options: ["بسبب البراكين", "بسبب التقاء الصفائح التكتونية", "بسبب التغير المناخي", "بسبب النشاط البشري"],
          correct: "بسبب التقاء الصفائح التكتونية",
          explanation: "يقع المغرب عند التقاء الصفائح الأفريقية والأوراسية مما يجعله عرضة للنشاط الزلزالي."
        },
        {
          question: "كم عدد الضحايا في زلزال أكادير 1960؟",
          options: ["5000", "10000", "15000", "20000"],
          correct: "15000",
          explanation: "زلزال أكادير عام 1960 خلف حوالي 15000 قتيل ودمر 80% من المدينة."
        },
        {
          question: "ما هي أفضل طريقة للوقاية من أضرار الزلازل؟",
          options: ["منع الزلازل", "البناء المقاوم للزلازل", "الهجرة من المناطق الزلزالية", "التنبؤ الدقيق بالزلازل"],
          correct: "البناء المقاوم للزلازل",
          explanation: "البناء المقاوم للزلازل والتأهب للكوارث أهم وسائل تقليل الأضرار الناتجة عن الزلازل."
        }
      ]
    }
  };

  const currentSet = exerciseSets[id as keyof typeof exerciseSets] || exerciseSets["501"];
  const totalExercises = currentSet.exercises.length;

  
  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentExercise]: answer
    }));
  };

  const nextExercise = () => {
    if (currentExercise < totalExercises - 1) {
      setCurrentExercise(prev => prev + 1);
    } else {
      calculateScore();
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    currentSet.exercises.forEach((exercise, index) => {
      if (selectedAnswers[index] === exercise.correct) {
        correct++;
      }
    });
    setScore(Math.round((correct / totalExercises) * 100));
  };

  const resetExercises = () => {
    setCurrentExercise(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const progress = ((currentExercise + 1) / totalExercises) * 100;

  if (showResults) {
    return (
      <div className="min-h-screen animated-bg" dir="rtl">
        <GlobalHeader />
        
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-card/90 backdrop-blur-sm rounded-2xl p-8 border-0 shadow-2xl">
              <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-card-foreground mb-4">
                انتهيت من التمارين!
              </h2>
              <div className="text-6xl font-bold text-orange-600 mb-4">
                {score}%
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                أجبت بشكل صحيح على {Math.round(score * totalExercises / 100)} من {totalExercises} أسئلة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={resetExercises} size="lg">
                  <Target className="h-5 w-5 ml-2" />
                  إعادة المحاولة
                </Button>
                <Link to="/lessons/histoire-geo">
                  <Button variant="outline" size="lg">
                    <ChevronRight className="h-5 w-5 ml-2" />
                    العودة للدروس
                  </Button>
                </Link>
                <Link to="/">
                  <Button variant="outline" size="lg">
                    <Home className="h-5 w-5 ml-2" />
                    الصفحة الرئيسية
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen animated-bg" dir="rtl">
      <GlobalHeader />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <Button variant="outline" size="sm">
                <Home className="h-4 w-4 ml-2" />
                الصفحة الرئيسية
              </Button>
            </Link>
            <Link to="/lessons/histoire-geo">
              <Button variant="outline" size="sm">
                <ChevronRight className="h-4 w-4 ml-2" />
                العودة للدروس
              </Button>
            </Link>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Target className="h-8 w-8 text-orange-600" />
              {currentSet.title}
            </h1>
            <p className="text-muted-foreground">
              الدرس {id} - تمارين تطبيقية في التاريخ والجغرافيا
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <Badge variant="secondary">
                {Math.round(progress)}% مكتمل
              </Badge>
              <span className="text-sm text-muted-foreground">
                السؤال {currentExercise + 1} من {totalExercises}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Exercise */}
          <Card className="mb-8 bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground text-right">
                {currentSet.exercises[currentExercise].question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentSet.exercises[currentExercise].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full p-4 text-right rounded-lg border-2 transition-all ${
                      selectedAnswers[currentExercise] === option
                        ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                        : "border-border hover:border-orange-300 hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center justify-end">
                      <span className="font-medium mr-3">{option}</span>
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentExercise] === option
                          ? "border-orange-500 bg-orange-500"
                          : "border-muted-foreground"
                      }`}>
                        {selectedAnswers[currentExercise] === option && (
                          <CheckCircle className="h-4 w-4 text-white" />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {selectedAnswers[currentExercise] && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-start gap-2 justify-end">
                    <div className="text-right">
                      <p className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                        {selectedAnswers[currentExercise] === currentSet.exercises[currentExercise].correct 
                          ? "إجابة صحيحة!" 
                          : "إجابة خاطئة"}
                      </p>
                      <p className="text-blue-700 dark:text-blue-300">
                        {currentSet.exercises[currentExercise].explanation}
                      </p>
                    </div>
                    {selectedAnswers[currentExercise] === currentSet.exercises[currentExercise].correct ? (
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-600 mt-0.5" />
                    )}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-center">
            <Button
              onClick={nextExercise}
              disabled={!selectedAnswers[currentExercise]}
              size="lg"
              className="px-8"
            >
              {currentExercise === totalExercises - 1 ? "مشاهدة النتائج" : "السؤال التالي"}
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HistoireGeoExercises;

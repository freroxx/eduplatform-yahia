
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight, BookOpen, Landmark, Home } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import GlobalHeader from "@/components/GlobalHeader";

const HistoireGeoCourse = () => {
  const { id } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample lesson content - you would expand this with all 26 lessons
  const lessonContent = {
    "501": {
      title: "العالم المتوسطي في القرنين 15م و18م",
      slides: [
        {
          title: "مقدمة حول العالم المتوسطي",
          content: "شهد العالم المتوسطي خلال القرنين 15 و16م تحولات جذرية على جميع المستويات السياسية والاقتصادية والثقافية. كانت هذه المنطقة ملتقى الحضارات والثقافات المختلفة.",
          formula: "العالم المتوسطي = أوروبا + العالم الإسلامي + شمال أفريقيا",
          example: "الأندلس، الإمبراطورية العثمانية، الجمهوريات الإيطالية"
        },
        {
          title: "التطورات السياسية",
          content: "برزت قوى سياسية جديدة في حوض البحر المتوسط، مع توسع الإمبراطورية العثمانية وظهور الدول الحديثة في أوروبا.",
          formula: "القوى الجديدة = العثمانيون + إسبانيا + فرنسا + البندقية",
          example: "فتح القسطنطينية 1453م، توحيد إسبانيا تحت الملوك الكاثوليك"
        },
        {
          title: "التبادل التجاري والثقافي",
          content: "ازدهرت التجارة عبر البحر المتوسط رغم الصراعات، وكان هناك تبادل ثقافي مستمر بين الحضارات المختلفة.",
          formula: "التبادل = تجارة + علوم + فنون + تقنيات",
          example: "طريق الحرير، تجارة التوابل، انتقال المعرفة العربية إلى أوروبا"
        },
        {
          title: "التحديات والصراعات",
          content: "واجه العالم المتوسطي تحديات كبيرة منها الصراعات الدينية والسياسية والمنافسة على طرق التجارة.",
          formula: "التحديات = صراعات دينية + منافسة تجارية + تهديدات خارجية",
          example: "الحروب الصليبية المتأخرة، حروب الاسترداد في الأندلس"
        }
      ]
    },
    // Add more lessons here...
    "521": {
      title: "ملف حول كارثة طبيعية (الزلازل في المغرب)",
      slides: [
        {
          title: "الزلازل في المغرب: السياق الجيولوجي",
          content: "يقع المغرب في منطقة نشاط زلزالي بسبب التقاء الصفائح التكتونية الأفريقية والأوراسية، مما يجعله عرضة للزلازل.",
          formula: "النشاط الزلزالي = التقاء الصفائح + الصدوع الجيولوجية",
          example: "زلزال أكادير 1960، زلزال الحوز 2023"
        },
        {
          title: "أسباب الزلازل في المغرب",
          content: "تنتج الزلازل في المغرب عن الضغط المستمر بين الصفائح التكتونية والنشاط على طول الصدوع الرئيسية.",
          formula: "أسباب الزلازل = ضغط الصفائح + النشاط التكتوني + الصدوع النشطة",
          example: "صدع الأطلس الكبير، صدع الريف، الصدع الأطلسي"
        },
        {
          title: "التأثيرات والأضرار",
          content: "تخلف الزلازل أضراراً بشرية ومادية كبيرة، خاصة في المناطق ذات البناء التقليدي والكثافة السكانية العالية.",
          formula: "الأضرار = خسائر بشرية + دمار المباني + أضرار اقتصادية",
          example: "ضحايا زلزال أكادير: 15000 قتيل، دمار 80% من المدينة"
        },
        {
          title: "استراتيجيات الوقاية والتأهب",
          content: "يتطلب التعامل مع مخاطر الزلازل وضع استراتيجيات شاملة للوقاية والاستعداد والاستجابة السريعة.",
          formula: "الوقاية = البناء المقاوم + الإنذار المبكر + التربية الزلزالية",
          example: "قانون البناء المقاوم للزلازل، شبكات الرصد الزلزالي"
        }
      ]
    }
  };

  const lesson = lessonContent[id as keyof typeof lessonContent] || lessonContent["501"];
  const totalSlides = lesson.slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const progress = ((currentSlide + 1) / totalSlides) * 100;

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

          {/* Course Title */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center justify-center gap-3">
              <Landmark className="h-8 w-8 text-orange-600" />
              {lesson.title}
            </h1>
            <p className="text-muted-foreground">
              الدرس {id} - درس تفاعلي في التاريخ والجغرافيا
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% مكتمل
              </span>
              <span className="text-sm text-muted-foreground">
                الشريحة {currentSlide + 1} من {totalSlides}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Slide Content */}
          <Card className="mb-8 bg-card/90 backdrop-blur-sm border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-card-foreground flex items-center justify-center gap-2">
                <BookOpen className="h-6 w-6 text-orange-600" />
                {lesson.slides[currentSlide].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg leading-relaxed text-card-foreground text-right">
                {lesson.slides[currentSlide].content}
              </div>
              
              {lesson.slides[currentSlide].formula && (
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                  <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 text-right">
                    المفهوم الأساسي:
                  </h4>
                  <div className="font-mono text-lg text-orange-700 dark:text-orange-300 text-right">
                    {lesson.slides[currentSlide].formula}
                  </div>
                </div>
              )}

              {lesson.slides[currentSlide].example && (
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 text-right">
                    أمثلة تاريخية:
                  </h4>
                  <div className="text-blue-700 dark:text-blue-300 text-right">
                    {lesson.slides[currentSlide].example}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              variant="outline"
              size="lg"
            >
              التالي
              <ChevronLeft className="h-5 w-5 ml-2" />
            </Button>

            <div className="flex space-x-2">
              {lesson.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide
                      ? "bg-orange-600"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
            >
              <ChevronRight className="h-5 w-5 mr-2" />
              السابق
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HistoireGeoCourse;

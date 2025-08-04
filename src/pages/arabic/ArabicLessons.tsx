import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlobalHeader from "@/components/GlobalHeader";

const ArabicLessons = () => {
  const semester1Lessons = [
    // الدروس اللغوية : الدورة الأولى
    { id: 401, title: "الإملاء", category: "الدروس اللغوية", description: "قواعد الإملاء والكتابة الصحيحة", duration: "45 دقيقة", difficulty: "سهل", hasVideos: true },
    { id: 402, title: "الخبر والإنشاء", category: "الدروس اللغوية", description: "أساليب الخبر والإنشاء في اللغة العربية", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 403, title: "الخبر - أغراضه وخروجه عن مقتضى الظاهر", category: "الدروس اللغوية", description: "دراسة أغراض الخبر البلاغية", duration: "55 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 404, title: "التشبيه - أركانه وأقسامه", category: "الدروس اللغوية", description: "البلاغة: التشبيه وأنواعه", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 405, title: "الحقيقة والمجاز", category: "الدروس اللغوية", description: "الفرق بين الحقيقة والمجاز في الكلام", duration: "45 دقيقة", difficulty: "متوسط", hasVideos: true },
    // دروس النصوص : الدورة الأولى
    { id: 406, title: "النص السردي", category: "دروس النصوص", description: "خصائص النص السردي وعناصره", duration: "40 دقيقة", difficulty: "سهل", hasVideos: true },
    { id: 407, title: "النص الوصفي", category: "دروس النصوص", description: "تقنيات الوصف في النصوص الأدبية", duration: "40 دقيقة", difficulty: "سهل", hasVideos: false },
    { id: 408, title: "النص الحواري", category: "دروس النصوص", description: "أساليب الحوار في الأدب", duration: "45 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 409, title: "النص الحجاجي", category: "دروس النصوص", description: "تقنيات الحجاج والإقناع", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 410, title: "النص الإعلامي", category: "دروس النصوص", description: "خصائص النص الإعلامي المعاصر", duration: "40 دقيقة", difficulty: "سهل", hasVideos: false },
    // دروس التعبير والإنشاء : الدورة الأولى
    { id: 411, title: "مهارة إنتاج نص سردي", category: "التعبير والإنشاء", description: "تعلم كتابة النصوص السردية", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 412, title: "مهارة إنتاج نص حجاجي", category: "التعبير والإنشاء", description: "تقنيات كتابة النصوص الحجاجية", duration: "55 دقيقة", difficulty: "صعب", hasVideos: false }
  ];

  const semester2Lessons = [
    // الدروس اللغوية : الدورة الثانية
    { id: 413, title: "أسماء الآلة والزمان والمكان", category: "الدروس اللغوية", description: "دراسة الأسماء المشتقة", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 414, title: "الاسم الموصول واسم الإشارة", category: "الدروس اللغوية", description: "قواعد الأسماء الموصولة وأسماء الإشارة", duration: "45 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 415, title: "الجموع", category: "الدروس اللغوية", description: "أنواع الجموع في اللغة العربية", duration: "55 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 416, title: "الكتابة العروضية والتفاعيل", category: "الدروس اللغوية", description: "علم العروض والأوزان الشعرية", duration: "60 دقيقة", difficulty: "صعب", hasVideos: true },
    { id: 417, title: "البحر المتقارب", category: "الدروس اللغوية", description: "دراسة البحر المتقارب في الشعر العربي", duration: "50 دقيقة", difficulty: "صعب", hasVideos: true },
    // دروس النصوص : الدورة الثانية
    { id: 418, title: "ثقافتنا في ظل العولمة", category: "دروس النصوص", description: "النصوص المعاصرة والتحديات الثقافية", duration: "45 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 419, title: "ثقافة حقوق الإنسان", category: "دروس النصوص", description: "النصوص حول حقوق الإنسان", duration: "40 دقيقة", difficulty: "متوسط", hasVideos: false },
    // دروس التعبير والإنشاء : الدورة الثانية
    { id: 420, title: "مهارة التعبير عن موقف أو رأي", category: "التعبير والإنشاء", description: "تقنيات التعبير عن الآراء والمواقف", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: false }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "سهل": return "bg-green-100 text-green-800 border-green-200";
      case "متوسط": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "صعب": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "الدروس اللغوية": return "bg-blue-100 text-blue-800 border-blue-200";
      case "دروس النصوص": return "bg-purple-100 text-purple-800 border-purple-200";
      case "التعبير والإنشاء": return "bg-orange-100 text-orange-800 border-orange-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderLessonCard = (lesson: any, index: number) => (
    <Card key={lesson.id} className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group bg-card/80" dir="rtl">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3 justify-end">
              <Badge className={`${getCategoryColor(lesson.category)} font-medium border text-xs`}>
                {lesson.category}
              </Badge>
              {lesson.hasVideos && (
                <Badge variant="outline" className="text-amber-600 border-amber-300 dark:border-amber-400">
                  <Video className="h-3 w-3 ml-1" />
                  فيديوهات
                </Badge>
              )}
              <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground">
                <Clock className="h-3 w-3 ml-1" />
                {lesson.duration}
              </Badge>
              <Badge className={`${getDifficultyColor(lesson.difficulty)} font-medium border`}>
                <Target className="h-3 w-3 ml-1" />
                {lesson.difficulty}
              </Badge>
              <span className="bg-amber-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
                {index + 1}
              </span>
            </div>
            <CardTitle className="text-xl font-bold transition-colors mb-2 text-card-foreground group-hover:text-primary text-right">
              {lesson.title}
            </CardTitle>
            <CardDescription className="leading-relaxed text-right">
              {lesson.description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-3 justify-end">
          {lesson.hasVideos && (
            <Link to={`/arabic/lesson/${lesson.id}/videos`}>
              <Button variant="outline" size="sm" className="transition-all duration-200 border-amber-600 text-amber-600 hover:bg-amber-50 hover:border-amber-700 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-900/20">
                <Video className="h-4 w-4 ml-2" />
                فيديوهات يوتيوب
              </Button>
            </Link>
          )}
          <Link to={`/arabic/lesson/${lesson.id}/exercises`}>
            <Button variant="outline" size="sm" className="transition-all duration-200 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
              <FileText className="h-4 w-4 ml-2" />
              تمارين
            </Button>
          </Link>
          <Link to={`/arabic/lesson/${lesson.id}/course`}>
            <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200 bg-amber-600 hover:bg-amber-700">
              <BookOpen className="h-4 w-4 ml-2" />
              درس
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen animated-bg"
    >
      <GlobalHeader />
      
      <header className="backdrop-blur-md border-b sticky top-16 z-40 bg-background/80 border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 transition-all duration-200 hover:scale-105 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Retour à l'accueil</span>
            </Link>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Globe className="h-6 w-6 text-amber-600" />
                العربية
              </h1>
              <p className="text-sm text-muted-foreground">الجذع المشترك العلمي</p>
            </div>
            <div className="text-sm font-medium text-primary">20 درس</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            منهاج اللغة العربية
          </h2>
          <p className="text-xl mb-6 text-muted-foreground">
            دروس شاملة في القواعد، النصوص، والتعبير والإنشاء
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>دورتان</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>20 درس</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>15 ساعات محتوى</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 backdrop-blur-sm shadow-md bg-card/80">
              <TabsTrigger 
                value="semester1" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>الدورة الأولى</span>
                <Badge variant="secondary" className="ml-2">12 درس</Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>الدورة الثانية</span>
                <Badge variant="secondary" className="ml-2">8 دروس</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">الدورة الأولى</h3>
                <p className="text-muted-foreground">الدروس اللغوية ودروس النصوص والتعبير والإنشاء</p>
              </div>
              {semester1Lessons.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">الدورة الثانية</h3>
                <p className="text-muted-foreground">الدروس اللغوية المتقدمة ودروس النصوص والتعبير والإنشاء</p>
              </div>
              {semester2Lessons.map((lesson, index) => renderLessonCard(lesson, index + 12))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default ArabicLessons;

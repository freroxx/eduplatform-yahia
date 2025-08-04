import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Landmark, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlobalHeader from "@/components/GlobalHeader";

const HistoireGeoLessons = () => {
  const historyS1Lessons = [
    { id: 501, title: "العالم المتوسطي في القرنين 15م و18م", category: "دروس التاريخ", description: "دراسة التطورات السياسية والاقتصادية في المتوسط", duration: "60 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 502, title: "التحولات الفكرية والعلمية والفنية: الحركة الإنسية", category: "دروس التاريخ", description: "النهضة الأوروبية والفكر الإنساني", duration: "55 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 503, title: "التحولات السياسية والاجتماعية في أوربا خلال القرنين 15 و16م", category: "دروس التاريخ", description: "تشكل الدول الحديثة في أوروبا", duration: "65 دقيقة", difficulty: "صعب", hasVideos: false },
    { id: 504, title: "الاكتشافات الجغرافية وظاهرة الميركنتيلية", category: "دروس التاريخ", description: "الاستكشافات البحرية والسياسة التجارية", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 505, title: "المد الإسلامي (امتداد النفوذ العثماني وبداية التدخل الأوربي)", category: "دروس التاريخ", description: "التوسع العثماني والتدخل الأوروبي", duration: "70 دقيقة", difficulty: "صعب", hasVideos: false },
    { id: 506, title: "التطورات السياسية والإجتماعية في العالم الإسلامي", category: "دروس التاريخ", description: "الأوضاع السياسية في العالم الإسلامي", duration: "60 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 507, title: "التطورات الإقتصادية في العالم الإسلامي", category: "دروس التاريخ", description: "الاقتصاد الإسلامي في العصور الوسطى", duration: "55 دقيقة", difficulty: "متوسط", hasVideos: false }
  ];

  const geographyS1Lessons = [
    { id: 508, title: "المجموعات البنيوية الكبرى وأشكال التظاريس", category: "دروس الجغرافيا", description: "التكوينات الجيولوجية وأشكال السطح", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 509, title: "النطاقات المناخية والغطاء النباتي في العالم", category: "دروس الجغرافيا", description: "دراسة المناخ والنباتات عبر القارات", duration: "45 دقيقة", difficulty: "سهل", hasVideos: false },
    { id: 510, title: "السكان (التوزع)", category: "دروس الجغرافيا", description: "توزع السكان في العالم وعوامله", duration: "40 دقيقة", difficulty: "سهل", hasVideos: false },
    { id: 511, title: "أشكال استغلال الإنسان للمجال في الأرياف", category: "دروس الجغرافيا", description: "الأنشطة الريفية والزراعية", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 512, title: "أشكال استغلال الإنسان للمجال في المدن", category: "دروس الجغرافيا", description: "التحضر والأنشطة الحضرية", duration: "45 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 513, title: "تقنيات رسم خرائط المجال الريفي - الحضري", category: "دروس الجغرافيا", description: "مهارات رسم الخرائط وتمثيل المعطيات", duration: "55 دقيقة", difficulty: "صعب", hasVideos: false }
  ];

  const historyS2Lessons = [
    { id: 514, title: "عصر الأنوار: الفكر الأنجليزي والفكر الفرنسي", category: "دروس التاريخ", description: "الفلسفة والفكر في عصر التنوير", duration: "65 دقيقة", difficulty: "صعب", hasVideos: false },
    { id: 515, title: "الثورات الإجتماعية والسياسية: الثورة الفرنسية", category: "دروس التاريخ", description: "أسباب ونتائج الثورة الفرنسية", duration: "70 دقيقة", difficulty: "صعب", hasVideos: false },
    { id: 516, title: "انطلاقة الثورة الصناعية", category: "دروس التاريخ", description: "التطور التقني والتأثير الاجتماعي", duration: "60 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 517, title: "الأوضاع العامة في العالم الإسلامي خلال القرنين 17 و18م", category: "دروس التاريخ", description: "حالة العالم الإسلامي في العصر الحديث", duration: "55 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 518, title: "تصاعد الضغوط الأوربية على العالم الإسلامي", category: "دروس التاريخ", description: "الاستعمار الأوروبي للعالم الإسلامي", duration: "65 دقيقة", difficulty: "صعب", hasVideos: false },
    { id: 519, title: "بداية محاولات الإصلاح وحدودها", category: "دروس التاريخ", description: "حركات الإصلاح في العالم الإسلامي", duration: "60 دقيقة", difficulty: "متوسط", hasVideos: false }
  ];

  const geographyS2Lessons = [
    { id: 520, title: "المنظومة البيئية", category: "دروس الجغرافيا", description: "مفهوم النظام البيئي وتوازنه", duration: "45 دقيقة", difficulty: "سهل", hasVideos: false },
    { id: 521, title: "ملف حول كارثة طبيعية (الزلازل في المغرب)", category: "دروس الجغرافيا", description: "دراسة الزلازل في المغرب وآثارها", duration: "50 دقيقة", difficulty: "متوسط", hasVideos: true },
    { id: 522, title: "ملف حول كارثة بيئية (الاحتباس الحراري)", category: "دروس الجغرافيا", description: "ظاهرة الاحتباس الحراري وتأثيراتها", duration: "45 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 523, title: "الإجراءات والتدابير التشريعية والتقنية", category: "دروس الجغرافيا", description: "القوانين والتقنيات البيئية", duration: "40 دقيقة", difficulty: "سهل", hasVideos: false },
    { id: 524, title: "الإجراءات والتدابير التربوية", category: "دروس الجغرافيا", description: "التربية البيئية والتوعية", duration: "35 دقيقة", difficulty: "سهل", hasVideos: false },
    { id: 525, title: "الإجراءات والتدابير على مستوى تنظيم المجال", category: "دروس الجغرافيا", description: "التخطيط المجالي والبيئي", duration: "45 دقيقة", difficulty: "متوسط", hasVideos: false },
    { id: 526, title: "دور الجمعيات والمنظمات غير الحكومية في حماية البيئة", category: "دروس الجغرافيا", description: "المجتمع المدني والعمل البيئي", duration: "40 دقيقة", difficulty: "سهل", hasVideos: false }
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
      case "دروس التاريخ": return "bg-orange-100 text-orange-800 border-orange-200";
      case "دروس الجغرافيا": return "bg-green-100 text-green-800 border-green-200";
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
                <Badge variant="outline" className="text-red-600 border-red-300">
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
              <span className="bg-orange-600 rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold text-white">
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
            <Link to={`/histoire-geo/lesson/${lesson.id}/videos`}>
              <Button variant="outline" size="sm" className="transition-all duration-200 border-red-600 text-red-600 hover:bg-red-50 hover:border-red-700">
                <Video className="h-4 w-4 ml-2" />
                فيديوهات يوتيوب
              </Button>
            </Link>
          )}
          <Link to={`/histoire-geo/lesson/${lesson.id}/exercises`}>
            <Button variant="outline" size="sm" className="transition-all duration-200 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700">
              <FileText className="h-4 w-4 ml-2" />
              تمارين
            </Button>
          </Link>
          <Link to={`/histoire-geo/lesson/${lesson.id}/course`}>
            <Button variant="default" size="sm" className="shadow-md hover:shadow-lg transition-all duration-200 bg-orange-600 hover:bg-orange-700">
              <BookOpen className="h-4 w-4 ml-2" />
              درس
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );

  const semester1Lessons = [...historyS1Lessons, ...geographyS1Lessons];
  const semester2Lessons = [...historyS2Lessons, ...geographyS2Lessons];

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
                <Landmark className="h-6 w-6 text-orange-600" />
                <Globe className="h-6 w-6 text-green-600" />
                التاريخ والجغرافيا
              </h1>
              <p className="text-sm text-muted-foreground">الجذع المشترك العلمي</p>
            </div>
            <div className="text-sm font-medium text-primary">26 درس</div>
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
            منهاج التاريخ والجغرافيا
          </h2>
          <p className="text-xl mb-6 text-muted-foreground">
            دروس شاملة في التاريخ والجغرافيا
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>دورتان</span>
            </div>
            <div className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              <span>26 درس</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-2" />
              <span>20 ساعات محتوى</span>
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
                <Badge variant="secondary" className="ml-2">13 درس</Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>الدورة الثانية</span>
                <Badge variant="secondary" className="ml-2">13 درس</Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">الدورة الأولى</h3>
                <p className="text-muted-foreground">دروس التاريخ والجغرافيا - الفترة الأولى</p>
              </div>
              {semester1Lessons.map((lesson, index) => renderLessonCard(lesson, index))}
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-foreground">الدورة الثانية</h3>
                <p className="text-muted-foreground">دروس التاريخ والجغرافيا - الفترة الثانية</p>
              </div>
              {semester2Lessons.map((lesson, index) => renderLessonCard(lesson, index + 13))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default HistoireGeoLessons;

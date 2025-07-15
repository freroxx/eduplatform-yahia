
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, FileText, Video, ArrowLeft, Calendar, Clock, Target, Landmark } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import GlobalHeader from "@/components/GlobalHeader";

const HistoireGeoLessons = () => {
  const semester1HistoryLessons = [
    {
      id: 501,
      title: "العالم المتوسطي في القرنين 15م و18م",
      description: "دراسة التطورات السياسية والاقتصادية والثقافية في منطقة البحر المتوسط",
      duration: "60 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 502,
      title: "التحولات الفكرية والعلمية والفنية: الحركة الإنسية",
      description: "النهضة الأوروبية وتأثيرها على الفكر والعلوم والفنون",
      duration: "55 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 503,
      title: "التحولات السياسية والاجتماعية في أوربا خلال القرنين 15 و16م",
      description: "ظهور الدول الحديثة والتغيرات الاجتماعية في أوروبا",
      duration: "65 دقيقة",
      difficulty: "صعب",
      hasVideos: true
    },
    {
      id: 504,
      title: "الاكتشافات الجغرافية وظاهرة الميركنتيلية",
      description: "عصر الاستكشاف والنظام التجاري الجديد",
      duration: "50 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 505,
      title: "المد الإسلامي (امتداد النفوذ العثماني وبداية التدخل الأوربي)",
      description: "توسع الإمبراطورية العثمانية والتدخل الأوروبي في العالم الإسلامي",
      duration: "70 دقيقة",
      difficulty: "صعب",
      hasVideos: true
    },
    {
      id: 506,
      title: "التطورات السياسية والإجتماعية في العالم الإسلامي",
      description: "التغيرات الداخلية في المجتمعات الإسلامية",
      duration: "60 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 507,
      title: "التطورات الإقتصادية في العالم الإسلامي",
      description: "الأنشطة الاقتصادية والتجارية في العالم الإسلامي",
      duration: "55 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    }
  ];

  const semester1GeographyLessons = [
    {
      id: 508,
      title: "المجموعات البنيوية الكبرى وأشكال التظاريس",
      description: "دراسة التضاريس والبنية الجيولوجية للأرض",
      duration: "65 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 509,
      title: "النطاقات المناخية والغطاء النباتي في العالم (مقابلة بين خريطتين)",
      description: "توزيع المناخ والنباتات الطبيعية عبر القارات",
      duration: "70 دقيقة",
      difficulty: "صعب",
      hasVideos: true
    },
    {
      id: 510,
      title: "السكان (التوزع)",
      description: "أنماط توزيع السكان وعوامل التوطن البشري",
      duration: "50 دقيقة",
      difficulty: "سهل",
      hasVideos: true
    },
    {
      id: 511,
      title: "أشكال استغلال الإنسان للمجال في الأرياف",
      description: "الأنشطة الزراعية وتنظيم المجال الريفي",
      duration: "60 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 512,
      title: "أشكال استغلال الإنسان للمجال في المدن",
      description: "التنظيم الحضري والأنشطة الاقتصادية في المدن",
      duration: "55 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 513,
      title: "تقنيات رسم خرائط المجال الريفي - الحضري (تمثيل المعطيات النوعية والكمية)",
      description: "مهارات الخرائط والتمثيل الجغرافي",
      duration: "75 دقيقة",
      difficulty: "صعب",
      hasVideos: true
    }
  ];

  const semester2HistoryLessons = [
    {
      id: 514,
      title: "عصر الأنوار: الفكر الأنجليزي والفكر الفرنسي",
      description: "الحركة الفكرية في أوروبا خلال القرن الثامن عشر",
      duration: "60 دقيقة",
      difficulty: "صعب",
      hasVideos: true
    },
    {
      id: 515,
      title: "الثورات الإجتماعية والسياسية: الثورة الفرنسية",
      description: "أسباب وأحداث ونتائج الثورة الفرنسية",
      duration: "70 دقيقة",
      difficulty: "صعب",
      hasVideos: true
    },
    {
      id: 516,
      title: "انطلاقة الثورة الصناعية: التطور التقني والإنعكاسات على البنية الإجتماعية",
      description: "بداية التصنيع وتأثيره على المجتمع الأوروبي",
      duration: "65 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 517,
      title: "الأوضاع العامة في العالم الإسلامي خلال القرنين 17 و18م",
      description: "حالة الدول الإسلامية في العصر الحديث المبكر",
      duration: "55 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 518,
      title: "تصاعد الضغوط الأوربية على العالم الإسلامي",
      description: "بدايات الاستعمار الأوروبي في البلدان الإسلامية",
      duration: "60 دقيقة",
      difficulty: "صعب",
      hasVideos: true
    },
    {
      id: 519,
      title: "بداية محاولات الإصلاح وحدودها",
      description: "حركات الإصلاح في الدولة العثمانية والعالم الإسلامي",
      duration: "50 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    }
  ];

  const semester2GeographyLessons = [
    {
      id: 520,
      title: "المنظومة البيئية (مفهومها، أسس توازنها والتعريف بأنواعها)",
      description: "علم البيئة والنظم الإيكولوجية",
      duration: "60 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 521,
      title: "ملف حول كارثة طبيعية (الزلازل في المغرب)",
      description: "دراسة حالة عن المخاطر الطبيعية",
      duration: "45 دقيقة",
      difficulty: "سهل",
      hasVideos: true
    },
    {
      id: 522,
      title: "ملف حول كارثة بيئية (الاحتباس الحراري)",
      description: "التغير المناخي وتأثيره على البيئة",
      duration: "55 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 523,
      title: "الإجراءات والتدابير التشريعية والتقنية",
      description: "السياسات البيئية والحلول التقنية",
      duration: "50 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 524,
      title: "الإجراءات والتدابير التربوية",
      description: "التربية البيئية ونشر الوعي",
      duration: "40 دقيقة",
      difficulty: "سهل",
      hasVideos: true
    },
    {
      id: 525,
      title: "الإجراءات والتدابير على مستوى تنظيم المجال",
      description: "التخطيط المجالي والتنمية المستدامة",
      duration: "55 دقيقة",
      difficulty: "متوسط",
      hasVideos: true
    },
    {
      id: 526,
      title: "دور الجمعيات والمنظمات غير الحكومية في حماية البيئة",
      description: "دور المجتمع المدني في الحفاظ على البيئة",
      duration: "45 دقيقة",
      difficulty: "سهل",
      hasVideos: true
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "سهل": return "bg-green-100 text-green-800 border-green-200";
      case "متوسط": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "صعب": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const renderLessonCard = (lesson: any, index: number) => (
    <Card key={lesson.id} className="backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group bg-card/80" dir="rtl">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-3 mb-3 justify-end">
              {lesson.hasVideos && (
                <Badge variant="outline" className="text-orange-600 border-orange-300 dark:border-orange-400">
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
                {lesson.id - 500}
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
              <Button variant="outline" size="sm" className="transition-all duration-200 border-orange-600 text-orange-600 hover:bg-orange-50 hover:border-orange-700 dark:border-orange-400 dark:text-orange-400 dark:hover:bg-orange-900/20">
                <Video className="h-4 w-4 ml-2" />
                فيديوهات يوتيوب
              </Button>
            </Link>
          )}
          <Link to={`/histoire-geo/lesson/${lesson.id}/exercises`}>
            <Button variant="outline" size="sm" className="transition-all duration-200 border-purple-600 text-purple-600 hover:bg-purple-50 hover:border-purple-700 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-900/20">
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

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20"
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
                التاريخ والجغرافيا
              </h1>
              <p className="text-sm text-muted-foreground">
                الجذع المشترك العلمي
              </p>
            </div>
            <div className="text-sm font-medium text-primary">
              26 درس
            </div>
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
            دروس شاملة في التاريخ والجغرافيا للجذع المشترك العلمي
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
              <span>24 ساعة محتوى</span>
            </div>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="semester1" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 backdrop-blur-sm shadow-md bg-card/80">
              <TabsTrigger 
                value="semester1" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>الدورة الأولى</span>
                <Badge variant="secondary" className="ml-2">
                  13 درس
                </Badge>
              </TabsTrigger>
              <TabsTrigger 
                value="semester2" 
                className="flex items-center space-x-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Calendar className="h-4 w-4" />
                <span>الدورة الثانية</span>
                <Badge variant="secondary" className="ml-2">
                  13 درس
                </Badge>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="semester1" className="space-y-8">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    دروس التاريخ - الدورة الأولى
                  </h3>
                  <p className="text-muted-foreground">
                    التحولات الكبرى في العالم الحديث
                  </p>
                </div>
                {semester1HistoryLessons.map((lesson, index) => renderLessonCard(lesson, index))}
              </div>
              
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    دروس الجغرافيا - الدورة الأولى
                  </h3>
                  <p className="text-muted-foreground">
                    المجال الجغرافي والبشري
                  </p>
                </div>
                {semester1GeographyLessons.map((lesson, index) => renderLessonCard(lesson, index))}
              </div>
            </TabsContent>
            
            <TabsContent value="semester2" className="space-y-8">
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    دروس التاريخ - الدورة الثانية
                  </h3>
                  <p className="text-muted-foreground">
                    عصر الثورات والتحولات
                  </p>
                </div>
                {semester2HistoryLessons.map((lesson, index) => renderLessonCard(lesson, index))}
              </div>
              
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2 text-foreground">
                    دروس الجغرافيا - الدورة الثانية
                  </h3>
                  <p className="text-muted-foreground">
                    البيئة والتنمية المستدامة
                  </p>
                </div>
                {semester2GeographyLessons.map((lesson, index) => renderLessonCard(lesson, index))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </motion.div>
  );
};

export default HistoireGeoLessons;

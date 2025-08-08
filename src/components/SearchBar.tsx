import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, Play, FileText, PenTool } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'course' | 'exercise' | 'video' | 'lesson';
  subject: string;
  link: string;
}

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  // Enhanced search data with complete course content
  const searchData: SearchResult[] = [
    // Mathematics
    { id: '1', title: 'Les ensembles de nombres', description: 'Introduction aux ensembles N, Z, Q, D et R avec exemples pratiques', type: 'course', subject: 'Mathématiques', link: '/math/lesson/1/course' },
    { id: '2', title: 'Exercices sur les ensembles', description: 'Exercices pratiques avec correction détaillée', type: 'exercise', subject: 'Mathématiques', link: '/math/lesson/1/exercises' },
    { id: '3', title: 'Produit scalaire', description: 'Cours complet sur le produit scalaire et ses applications', type: 'course', subject: 'Mathématiques', link: '/math/lesson/11/course' },
    { id: '4', title: 'Statistiques', description: 'Population statistique, caractères, effectifs et paramètres', type: 'course', subject: 'Mathématiques', link: '/math/lesson/15/course' },
    { id: '5', title: 'Vidéos explicatives - Mathématiques', description: 'Collection de vidéos YouTube pour approfondir', type: 'video', subject: 'Mathématiques', link: '/math/lesson/1/videos' },
    
    // Physics
    { id: '6', title: 'La gravitation universelle', description: 'Lois de Newton et applications de la gravitation', type: 'course', subject: 'Physique-Chimie', link: '/physics/lesson/1' },
    { id: '7', title: 'Le courant électrique continu', description: 'Nature du courant, lois d\'Ohm et applications', type: 'course', subject: 'Physique-Chimie', link: '/physics/lesson/14' },
    { id: '8', title: 'Exercices de gravitation', description: 'Calculs de forces et applications pratiques', type: 'exercise', subject: 'Physique-Chimie', link: '/physics/exercises/1' },
    { id: '9', title: 'La tension électrique', description: 'Définition, mesure et lois de Kirchhoff', type: 'course', subject: 'Physique-Chimie', link: '/physics/lesson/15' },
    { id: '10', title: 'La mole, unité de quantité de matière', description: 'Nombre d\'Avogadro et calculs stœchiométriques', type: 'course', subject: 'Physique-Chimie', link: '/physics/lesson/21' },
    
    // French
    { id: '11', title: 'Typologie textuelle', description: 'Les différents types de textes et leurs caractéristiques', type: 'course', subject: 'Français', link: '/french/lesson/1' },
    { id: '12', title: 'Guy de Maupassant et le réalisme', description: 'Étude de l\'œuvre et du mouvement littéraire', type: 'course', subject: 'Français', link: '/french/lesson/2' },
    { id: '13', title: 'Exercices d\'analyse textuelle', description: 'Pratique d\'identification et d\'analyse des types de textes', type: 'exercise', subject: 'Français', link: '/french/exercises/1' },
    
    // English
    { id: '14', title: 'Grammar Fundamentals', description: 'Parts of speech and sentence structure', type: 'course', subject: 'English', link: '/english/lesson/1' },
    { id: '15', title: 'Tenses and Time', description: 'Complete guide to English tenses', type: 'course', subject: 'English', link: '/english/lesson/2' },
    { id: '16', title: 'Reading Comprehension', description: 'Strategies for effective reading', type: 'course', subject: 'English', link: '/english/lesson/3' },
    { id: '17', title: 'Business English', description: 'Professional communication skills', type: 'course', subject: 'English', link: '/english/lesson/9' },
    { id: '18', title: 'Grammar Practice Exercises', description: 'Parts of speech and sentence analysis', type: 'exercise', subject: 'English', link: '/english/exercises/1' },
    
    // Arabic
    { id: '19', title: 'الإملاء والقواعد الأساسية', description: 'قواعد الهمزة والتاء وعلامات الترقيم', type: 'course', subject: 'العربية', link: '/arabic/lesson/1' },
    { id: '20', title: 'أسماء الآلة والزمان والمكان', description: 'الاشتقاق وأوزان الأسماء المشتقة', type: 'course', subject: 'العربية', link: '/arabic/lesson/7' },
    { id: '21', title: 'تمارين الإملاء', description: 'تطبيقات عملية على قواعد الإملاء', type: 'exercise', subject: 'العربية', link: '/arabic/exercises/1' },
    
    // Philosophy
    { id: '22', title: 'تقديم عام لمجزوءة الفلسفة', description: 'ما هي الفلسفة وخصائص التفكير الفلسفي', type: 'course', subject: 'الفلسفة', link: '/philosophy/lesson/1' },
    { id: '23', title: 'نشأة الفلسفة', description: 'البدايات اليونانية والانتقال من الأسطورة إلى العقل', type: 'course', subject: 'الفلسفة', link: '/philosophy/lesson/2' },
    { id: '24', title: 'الفلسفة الإسلامية', description: 'خصائصها ورواد الفكر الإسلامي', type: 'course', subject: 'الفلسفة', link: '/philosophy/lesson/4' },
    { id: '25', title: 'الإنسان كائن ثقافي', description: 'مفهوم الثقافة وخصائصها الإنسانية', type: 'course', subject: 'الفلسفة', link: '/philosophy/lesson/10' },
    { id: '26', title: 'منطق الفلسفة', description: 'المنطق كآلة للتفكير وقوانين الفكر', type: 'course', subject: 'الفلسفة', link: '/philosophy/lesson/7' },
    
    // SVT
    { id: '27', title: 'التقنيات التكيفية الإيكولوجية', description: 'طرق دراسة ومراقبة الأوساط الطبيعية', type: 'course', subject: 'علوم الحياة والأرض', link: '/svt/lesson/1' },
    
    // Histoire-Géographie
    { id: '28', title: 'التاريخ والحضارة', description: 'مناهج دراسة التاريخ والحضارات', type: 'course', subject: 'التاريخ والجغرافيا', link: '/histoire-geo/lesson/1' }
  ];

  useEffect(() => {
    // Load recent searches from localStorage
    const saved = localStorage.getItem('recentSearches');
    if (saved) {
      setRecentSearches(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    if (query.length > 1) {
      setIsSearching(true);
      
      const searchTimeout = setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.subject.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsSearching(false);
      }, 200);

      return () => clearTimeout(searchTimeout);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [query]);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'course': return <BookOpen className="h-4 w-4" />;
      case 'exercise': return <PenTool className="h-4 w-4" />;
      case 'video': return <Play className="h-4 w-4" />;
      case 'lesson': return <FileText className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-300';
      case 'exercise': return 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-300';
      case 'video': return 'bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-300';
      case 'lesson': return 'bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'course': return 'Cours';
      case 'exercise': return 'Exercice';
      case 'video': return 'Vidéo';
      case 'lesson': return 'Leçon';
      default: return type;
    }
  };

  const saveRecentSearch = (searchTerm: string) => {
    const updated = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  };

  const handleResultClick = (result: SearchResult) => {
    saveRecentSearch(result.title);
    onClose();
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[80vh] p-0 gap-0 bg-background/95 backdrop-blur-md border border-border/50 shadow-2xl">
        <DialogHeader className="p-6 pb-4 border-b border-border/20">
          <DialogTitle className="flex items-center space-x-3">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Search className="h-6 w-6 text-primary" />
            </motion.div>
            <span className="text-xl font-semibold">Rechercher dans les cours</span>
          </DialogTitle>
        </DialogHeader>

        <div className="px-6 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Rechercher des cours, exercices, vidéos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-12 pr-12 h-12 text-lg border-2 focus:border-primary/50 transition-all duration-200 rounded-xl"
              autoFocus
            />
            <AnimatePresence>
              {query && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-red-100 dark:hover:bg-red-900 rounded-full"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="max-h-[50vh] overflow-y-auto px-6 pb-6">
          <AnimatePresence mode="wait">
            {isSearching && (
              <motion.div
                key="searching"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-12"
              >
                <div className="flex items-center space-x-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full"
                  />
                  <span className="text-muted-foreground font-medium">Recherche en cours...</span>
                </div>
              </motion.div>
            )}

            {!isSearching && query.length > 1 && results.length === 0 && (
              <motion.div
                key="no-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <Search className="h-12 w-12 mx-auto mb-4 text-muted-foreground/50" />
                <p className="text-muted-foreground text-lg">
                  Aucun résultat trouvé pour <span className="font-semibold">"{query}"</span>
                </p>
              </motion.div>
            )}

            {!isSearching && results.length > 0 && (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-3"
              >
                {results.map((result, index) => (
                  <motion.div
                    key={result.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={result.link}
                      onClick={() => handleResultClick(result)}
                      className="block p-4 rounded-xl border border-border/50 hover:border-primary/30 bg-card/50 hover:bg-card/80 transition-all duration-200 group hover:shadow-lg hover:scale-[1.02]"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <motion.div
                              whileHover={{ scale: 1.1, rotate: 5 }}
                              transition={{ duration: 0.2 }}
                            >
                              <Badge className={`${getTypeColor(result.type)} transition-all duration-200`}>
                                {getTypeIcon(result.type)}
                                <span className="ml-1">{getTypeLabel(result.type)}</span>
                              </Badge>
                            </motion.div>
                            <h3 className="font-semibold group-hover:text-primary transition-colors text-lg">
                              {result.title}
                            </h3>
                          </div>
                          <p className="text-muted-foreground mb-2 leading-relaxed">
                            {result.description}
                          </p>
                          <p className="text-xs text-primary/70 font-medium">
                            {result.subject}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {query.length <= 1 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="text-center py-8">
                  <Search className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
                  <p className="text-muted-foreground text-lg">
                    Tapez au moins 2 caractères pour rechercher
                  </p>
                </div>
                
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">
                        Recherches récentes
                      </h4>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={clearRecentSearches}
                        className="text-xs hover:bg-red-100 dark:hover:bg-red-900"
                      >
                        Effacer
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          onClick={() => setQuery(search)}
                          className="px-3 py-1.5 bg-muted hover:bg-muted/80 rounded-full text-sm transition-all duration-200 hover:scale-105"
                        >
                          {search}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;

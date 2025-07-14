import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
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

  // Mock search data - in a real app this would come from an API
  const searchData: SearchResult[] = [
    {
      id: '1',
      title: 'Les ensembles de nombres',
      description: 'Introduction aux ensembles N, Z, Q, D et R',
      type: 'course',
      subject: 'Mathématiques',
      link: '/lesson/1/course'
    },
    {
      id: '2',
      title: 'Exercices sur les ensembles',
      description: 'Exercices pratiques sur les ensembles de nombres',
      type: 'exercise',
      subject: 'Mathématiques',
      link: '/lesson/1/exercises'
    },
    {
      id: '3',
      title: 'Vidéos explicatives',
      description: 'Vidéos YouTube sur les mathématiques',
      type: 'video',
      subject: 'Mathématiques',
      link: '/lesson/1/videos'
    },
    {
      id: '4',
      title: 'Typologie textuelle',
      description: 'Les différents types de textes en français',
      type: 'course',
      subject: 'Français',
      link: '/french/module1'
    },
    {
      id: '5',
      title: 'La gravitation universelle',
      description: 'Lois de Newton et gravitation',
      type: 'course',
      subject: 'Physique-Chimie',
      link: '/physics/lesson1'
    },
    {
      id: '6',
      title: 'Techniques adaptatives écologiques',
      description: 'Méthodes d\'étude sur le terrain',
      type: 'course',
      subject: 'SVT',
      link: '/svt/lesson1'
    }
  ];

  useEffect(() => {
    if (query.length > 2) {
      setIsSearching(true);
      
      // Simulate search delay
      const searchTimeout = setTimeout(() => {
        const filtered = searchData.filter(item =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.subject.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filtered);
        setIsSearching(false);
      }, 300);

      return () => clearTimeout(searchTimeout);
    } else {
      setResults([]);
      setIsSearching(false);
    }
  }, [query]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'course': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'exercise': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'video': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'lesson': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Search className="h-5 w-5" />
            <span>Rechercher dans les cours</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Rechercher des cours, exercices, vidéos..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setQuery('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="max-h-96 overflow-y-auto">
            <AnimatePresence>
              {isSearching && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center justify-center py-8"
                >
                  <div className="animate-spin rounded-full h-6 w-6 border-2 border-primary border-t-transparent" />
                  <span className="ml-2 text-muted-foreground">Recherche...</span>
                </motion.div>
              )}

              {!isSearching && query.length > 2 && results.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 text-muted-foreground"
                >
                  Aucun résultat trouvé pour "{query}"
                </motion.div>
              )}

              {!isSearching && results.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-2"
                >
                  {results.map((result, index) => (
                    <motion.div
                      key={result.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={result.link}
                        onClick={onClose}
                        className="block p-4 rounded-lg border hover:bg-muted/50 transition-colors group"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                              <h3 className="font-medium group-hover:text-primary transition-colors">
                                {result.title}
                              </h3>
                              <Badge className={getTypeColor(result.type)}>
                                {getTypeLabel(result.type)}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {result.description}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              {result.subject}
                            </p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {query.length <= 2 && (
              <div className="text-center py-8 text-muted-foreground">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-20" />
                <p>Tapez au moins 3 caractères pour rechercher</p>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchBar;
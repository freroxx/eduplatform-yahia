
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Star, Zap, Globe, BookOpen, Palette } from 'lucide-react';
import { motion } from 'framer-motion';

interface ChangelogDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangelogDialog = ({ isOpen, onClose }: ChangelogDialogProps) => {
  const changes = [
    {
      icon: Globe,
      title: 'Sélection de pays',
      description: 'Choisissez votre pays pendant l\'inscription pour une expérience personnalisée',
      type: 'new'
    },
    {
      icon: BookOpen,
      title: 'Contenu enrichi',
      description: 'Cours et exercices complets pour Mathématiques, Arabe et Histoire-Géographie',
      type: 'improved'
    },
    {
      icon: Zap,
      title: 'Interface simplifiée',
      description: 'Suppression des champs inutiles et amélioration de l\'expérience utilisateur',
      type: 'improved'
    },
    {
      icon: CheckCircle,
      title: 'Corrections de bugs',
      description: 'Résolution des problèmes d\'embeds et amélioration des performances',
      type: 'fixed'
    },
    {
      icon: Palette,
      title: 'Design moderne',
      description: 'Interface repensée avec de meilleures animations et une typographie améliorée',
      type: 'improved'
    },
    {
      icon: Star,
      title: 'Tutoriel interactif',
      description: 'Découverte guidée des fonctionnalités lors de votre première visite',
      type: 'new'
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'new': return 'bg-green-500';
      case 'improved': return 'bg-blue-500';
      case 'fixed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'new': return 'Nouveau';
      case 'improved': return 'Amélioré';
      case 'fixed': return 'Corrigé';
      default: return 'Autre';
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto" hideCloseButton>
        <DialogHeader>
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full">
              <Star className="h-6 w-6" />
            </div>
            <div>
              <DialogTitle className="text-2xl font-bold gradient-text">
                Nouveautés v4.5
              </DialogTitle>
              <p className="text-muted-foreground">Découvrez les dernières améliorations</p>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 p-4 rounded-lg border">
            <h3 className="font-semibold text-lg mb-2">🎉 Version 4.5 disponible !</h3>
            <p className="text-muted-foreground">
              Cette mise à jour apporte des améliorations significatives à votre expérience d'apprentissage
              avec un contenu enrichi, une interface simplifiée et de nouvelles fonctionnalités.
            </p>
          </div>

          <div className="space-y-4">
            {changes.map((change, index) => (
              <motion.div
                key={change.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-lg border bg-card hover-lift"
              >
                <div className={`p-2 rounded-full ${getTypeColor(change.type)} text-white flex-shrink-0`}>
                  <change.icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="font-semibold">{change.title}</h4>
                    <Badge variant="outline" className={`text-xs ${getTypeColor(change.type)} text-white border-0`}>
                      {getTypeLabel(change.type)}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{change.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">📚 Contenu ajouté</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• 15 leçons complètes en Mathématiques (Semestre 1 & 2)</li>
              <li>• 6 modules complets en Arabe avec exercices</li>
              <li>• 26 leçons d'Histoire-Géographie restructurées</li>
              <li>• Intégration musicale améliorée</li>
              <li>• Interface responsive optimisée</li>
            </ul>
          </div>

          <div className="flex justify-end pt-4 border-t">
            <Button onClick={onClose} className="px-6 btn-modern hover-glow">
              Parfait, merci !
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangelogDialog;

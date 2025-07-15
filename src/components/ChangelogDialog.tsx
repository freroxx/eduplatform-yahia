
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Music, Globe, BookOpen, Zap, Palette, Users } from "lucide-react";
import { motion } from "framer-motion";

interface ChangelogDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangelogDialog = ({ isOpen, onClose }: ChangelogDialogProps) => {
  const changes = [
    {
      version: "4.0.0",
      date: "Janvier 2025",
      changes: [
        {
          icon: Globe,
          title: "Nouveau sujet : التاريخ والجغرافيا",
          description: "Ajout complet du sujet Histoire-Géographie en arabe avec 26 leçons détaillées",
          type: "feature"
        },
        {
          icon: Music,
          title: "EduMusic Player",
          description: "Lecteur audio intégré pour accompagner vos sessions d'étude",
          type: "feature"
        },
        {
          icon: BookOpen,
          title: "Cours et exercices complets",
          description: "Chaque leçon dispose maintenant de son cours unique et d'exercices dédiés",
          type: "improvement"
        },
        {
          icon: Zap,
          title: "Performance optimisée",
          description: "Interface plus fluide avec de meilleures animations et transitions",
          type: "improvement"
        },
        {
          icon: Palette,
          title: "Design amélioré",
          description: "Nouveau système de couleurs et effets visuels modernisés",
          type: "improvement"
        },
        {
          icon: Users,
          title: "Onboarding enrichi",
          description: "Processus d'accueil personnalisé avec profil étudiant/enseignant",
          type: "feature"
        }
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "feature": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "improvement": return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "fix": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "feature": return "Nouveau";
      case "improvement": return "Amélioré";
      case "fix": return "Corrigé";
      default: return "Autre";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2 text-2xl">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-6 w-6 text-purple-600" />
            </motion.div>
            <span>Nouveautés EduPlatform</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {changes.map((release) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between border-b pb-2">
                <h3 className="text-xl font-bold text-foreground">
                  Version {release.version}
                </h3>
                <Badge variant="outline" className="text-muted-foreground">
                  {release.date}
                </Badge>
              </div>

              <div className="space-y-3">
                {release.changes.map((change, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <change.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="font-semibold text-foreground">
                          {change.title}
                        </h4>
                        <Badge className={`text-xs ${getTypeColor(change.type)}`}>
                          {getTypeLabel(change.type)}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {change.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg border">
          <p className="text-sm text-center text-muted-foreground">
            Merci d'utiliser EduPlatform ! Votre feedback nous aide à améliorer la plateforme.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangelogDialog;


import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Bug, Settings, BookOpen, Target, Zap, Image, Palette, Cpu, Play, Users, Globe, Layers } from "lucide-react";

interface ChangelogDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChangelogDialog = ({ open, onOpenChange }: ChangelogDialogProps) => {
  const versions = [
    {
      version: "5.5.0",
      date: "Janvier 2025",
      type: "major",
      changes: [
        {
          type: "feature",
          icon: Sparkles,
          title: "Onboarding amélioré",
          description: "Nouvelle expérience d'accueil interactive avec tutoriel personnalisé"
        },
        {
          type: "feature",
          icon: Play,
          title: "Lecteur vidéo intégré",
          description: "Nouveau lecteur vidéo avec support YouTube et contrôles avancés"
        },
        {
          type: "feature",
          icon: Image,
          title: "Visionneuse d'images optimisée",
          description: "Interface améliorée avec zoom, navigation et mode plein écran"
        },
        {
          type: "feature",
          icon: BookOpen,
          title: "Cours de Physique-Chimie complets",
          description: "23 modules structurés sur 2 semestres avec exercices et vidéos"
        },
        {
          type: "improvement",
          icon: Zap,
          title: "Animations fluides",
          description: "Nouvelles animations avec Framer Motion pour une expérience premium"
        },
        {
          type: "improvement",
          icon: Palette,
          title: "Interface redessinée",
          description: "Design moderne avec gradients et effets visuels améliorés"
        },
        {
          type: "improvement",
          icon: Layers,
          title: "Navigation optimisée",
          description: "Routage amélioré et structure de pages plus intuitive"
        }
      ]
    },
    {
      version: "5.0.0",
      date: "Janvier 2025",
      type: "major",
      changes: [
        {
          type: "feature",
          icon: Image,
          title: "Visionneuse d'images intégrée",
          description: "Nouveau système de visualisation d'images avec zoom, navigation et mode plein écran"
        },
        {
          type: "feature",
          icon: BookOpen,
          title: "Support multi-images pour les cours",
          description: "Chaque leçon peut maintenant contenir plusieurs images avec navigation fluide"
        },
        {
          type: "feature",
          icon: Zap,
          title: "Animations améliorées",
          description: "Nouvelles transitions et animations pour une expérience utilisateur plus fluide"
        },
        {
          type: "improvement",
          icon: Palette,
          title: "Interface utilisateur repensée",
          description: "Design moderne avec de meilleures animations et transitions"
        }
      ]
    },
    {
      version: "4.8.0",
      date: "Août 2024",
      type: "major",
      changes: [
        {
          type: "feature",
          icon: BookOpen,
          title: "Contenu de cours complet",
          description: "Tous les cours ont maintenant leur contenu unique et leurs exercices spécifiques"
        },
        {
          type: "feature",
          icon: Settings,
          title: "Paramètres avancés",
          description: "Nouvelles options de notification, mode concentration, et préférences d'apprentissage"
        },
        {
          type: "fix",
          icon: Bug,
          title: "Correction des cours dupliqués",
          description: "Chaque leçon a maintenant son propre contenu unique"
        },
        {
          type: "feature",
          icon: Target,
          title: "Système de progression amélioré",
          description: "Suivi détaillé des progrès avec statistiques personnalisées"
        }
      ]
    },
    {
      version: "4.0.0",
      date: "Août 2024",
      type: "major",
      changes: [
        {
          type: "feature",
          icon: Cpu,
          title: "Architecture moderne",
          description: "Refonte complète avec React 18 et TypeScript"
        },
        {
          type: "feature",
          icon: Sparkles,
          title: "Interface redesignée",
          description: "Nouvelle interface utilisateur moderne et responsive"
        }
      ]
    },
    {
      version: "3.2.1",
      date: "Juillet 2024",
      type: "patch",
      changes: [
        {
          type: "fix",
          icon: Bug,
          title: "Correction des erreurs de navigation",
          description: "Les liens entre les pages fonctionnent maintenant correctement"
        }
      ]
    },
    {
      version: "3.0.0",
      date: "Juillet 2024",
      type: "minor",
      changes: [
        {
          type: "feature",
          icon: BookOpen,
          title: "Assistant IA intégré",
          description: "Aide personnalisée pour vos études avec intelligence artificielle"
        },
        {
          type: "feature",
          icon: Target,
          title: "Système d'exercices interactif",
          description: "Exercices adaptatifs avec correction automatique"
        }
      ]
    }
  ];

  const getVersionBadgeColor = (type: string) => {
    switch (type) {
      case "major": return "bg-gradient-to-r from-red-500 to-pink-500 text-white border-0";
      case "minor": return "bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0";
      case "patch": return "bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0";
      default: return "bg-gray-500 text-white";
    }
  };

  const getChangeIcon = (type: string) => {
    switch (type) {
      case "feature": return "text-green-600 dark:text-green-400";
      case "fix": return "text-orange-600 dark:text-orange-400";
      case "improvement": return "text-blue-600 dark:text-blue-400";
      default: return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] bg-gradient-to-br from-background to-secondary/20">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <div className="bg-gradient-to-r from-primary to-accent p-2 rounded-lg">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            Nouveautés EduPlatform
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[65vh] pr-4">
          <div className="space-y-8">
            {versions.map((version, index) => (
              <div key={version.version} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Version {version.version}
                    </h3>
                    <Badge className={getVersionBadgeColor(version.type)}>
                      {version.type}
                    </Badge>
                    {version.version === "5.5.0" && (
                      <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white border-0">
                        <Sparkles className="h-3 w-3 mr-1" />
                        NOUVEAU
                      </Badge>
                    )}
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{version.date}</span>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2">
                  {version.changes.map((change, changeIndex) => {
                    const IconComponent = change.icon;
                    return (
                      <div key={changeIndex} className="flex gap-3 p-4 rounded-xl bg-card/60 border border-border/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
                        <div className={`flex-shrink-0 ${getChangeIcon(change.type)} bg-background p-2 rounded-lg border`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-foreground">{change.title}</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{change.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {index < versions.length - 1 && <Separator className="my-8" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ChangelogDialog;

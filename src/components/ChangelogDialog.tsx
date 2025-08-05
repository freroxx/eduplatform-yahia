
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Sparkles, Bug, Settings, BookOpen, Target, Zap } from "lucide-react";

interface ChangelogDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ChangelogDialog = ({ open, onOpenChange }: ChangelogDialogProps) => {
  const versions = [
    {
      version: "4.8.0",
      date: "Janvier 2025",
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
          type: "fix",
          icon: Bug,
          title: "Correction du cours de mathématiques",
          description: "Le premier cours de mathématiques a été entièrement refait"
        },
        {
          type: "feature",
          icon: Target,
          title: "Système de progression amélioré",
          description: "Suivi détaillé des progrès avec statistiques personnalisées"
        },
        {
          type: "feature",
          icon: Zap,
          title: "Performance optimisée",
          description: "Temps de chargement réduits et navigation plus fluide"
        }
      ]
    },
    {
      version: "4.7.2",
      date: "Décembre 2024",
      type: "patch",
      changes: [
        {
          type: "fix",
          icon: Bug,
          title: "Correction des erreurs de navigation",
          description: "Les liens entre les pages fonctionnent maintenant correctement"
        },
        {
          type: "feature",
          icon: Sparkles,
          title: "Interface utilisateur améliorée",
          description: "Nouvelles animations et transitions fluides"
        }
      ]
    },
    {
      version: "4.7.0",
      date: "Novembre 2024",
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
      case "major": return "bg-red-500 text-white";
      case "minor": return "bg-blue-500 text-white";
      case "patch": return "bg-green-500 text-white";
      default: return "bg-gray-500 text-white";
    }
  };

  const getChangeIcon = (type: string) => {
    switch (type) {
      case "feature": return "text-green-600";
      case "fix": return "text-orange-600";
      case "improvement": return "text-blue-600";
      default: return "text-gray-600";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            Nouveautés EduPlatform
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="space-y-6">
            {versions.map((version, index) => (
              <div key={version.version} className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold">Version {version.version}</h3>
                    <Badge className={getVersionBadgeColor(version.type)}>
                      {version.type}
                    </Badge>
                  </div>
                  <span className="text-sm text-muted-foreground">{version.date}</span>
                </div>
                
                <div className="space-y-3">
                  {version.changes.map((change, changeIndex) => {
                    const IconComponent = change.icon;
                    return (
                      <div key={changeIndex} className="flex gap-3 p-3 rounded-lg bg-muted/50">
                        <div className={`flex-shrink-0 ${getChangeIcon(change.type)}`}>
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-semibold text-foreground">{change.title}</h4>
                          <p className="text-sm text-muted-foreground">{change.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {index < versions.length - 1 && <Separator className="my-6" />}
              </div>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ChangelogDialog;

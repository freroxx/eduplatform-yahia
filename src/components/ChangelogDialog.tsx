
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Plus, Trash2, MapPin, Globe, BookOpen, Palette } from "lucide-react";

interface ChangelogDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChangelogDialog = ({ isOpen, onClose }: ChangelogDialogProps) => {
  const changes = [
    {
      version: "v4.5",
      date: "Janvier 2025",
      changes: [
        "Suppression du niveau d'étude de l'onboarding",
        "Ajout de la sélection du pays",
        "Ajout des cours et exercices manquants partout",
        "Correction des leçons de maths, histoire-géo, arabe",
        "Amélioration des boutons et intégrations",
        "Design amélioré, arrière-plan, performances"
      ],
      type: "major"
    },
    {
      version: "v4.0",
      date: "Décembre 2024",
      changes: [
        "Nouvelle interface utilisateur moderne",
        "Assistant IA intégré",
        "Lecteur audio EduMusic",
        "Système de progression avancé",
        "Thèmes sombre et clair",
        "Navigation améliorée"
      ],
      type: "major"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <Sparkles className="h-6 w-6 text-purple-500" />
            Journal des modifications
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {changes.map((release) => (
            <div key={release.version} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{release.version}</h3>
                  <Badge 
                    variant={release.type === 'major' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {release.type === 'major' ? 'Version majeure' : 'Mise à jour'}
                  </Badge>
                </div>
                <span className="text-sm text-muted-foreground">{release.date}</span>
              </div>
              
              <ul className="space-y-2">
                {release.changes.map((change, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <Plus className="h-3 w-3 text-green-500 mt-1 flex-shrink-0" />
                    <span>{change}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-end pt-4 border-t">
          <Button onClick={onClose}>
            Fermer
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangelogDialog;

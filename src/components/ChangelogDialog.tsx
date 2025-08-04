
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Sparkles, Bug, Plus, Zap } from "lucide-react";

const ChangelogDialog = () => {
  const [isOpen, setIsOpen] = useState(false);

  const versions = [
    {
      version: "4.5",
      date: "2024-08-04",
      type: "major",
      changes: [
        { type: "removed", text: "Removed 'niveau d'étude' and 'age' from onboarding and settings" },
        { type: "added", text: "Added country selection in onboarding (also changeable in settings)" },
        { type: "added", text: "Added missing cours & exercices everywhere" },
        { type: "fixed", text: "Fixed maths lessons structure with proper semester organization" },
        { type: "fixed", text: "Fixed histoire géo lessons with complete Arabic content" },
        { type: "fixed", text: "Fixed Arabic lessons with proper course structure" },
        { type: "fixed", text: "Fixed Elfsight Audio Player embed to work everywhere" },
        { type: "improved", text: "Improved overall design, typography, and modern UI" },
        { type: "improved", text: "Enhanced animated background and performance optimizations" },
        { type: "improved", text: "Better responsive design for mobile and desktop" }
      ]
    },
    {
      version: "4.0",
      date: "2024-08-03",
      type: "major",
      changes: [
        { type: "added", text: "Introduced EduMusic audio player with Elfsight integration" },
        { type: "added", text: "New welcome banner with changelog feature" },
        { type: "added", text: "Enhanced onboarding with user type selection" },
        { type: "improved", text: "Merged History-Geography into unified subject" },
        { type: "improved", text: "Updated branding to EduPlatform" },
        { type: "improved", text: "Enhanced visual design with 10x better animations" },
        { type: "improved", text: "Better glass morphism effects and color system" },
        { type: "improved", text: "Enhanced statistics and navigation" }
      ]
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "added": return <Plus className="h-3 w-3 text-green-600" />;
      case "fixed": return <Bug className="h-3 w-3 text-blue-600" />;
      case "improved": return <Zap className="h-3 w-3 text-purple-600" />;
      case "removed": return <FileText className="h-3 w-3 text-red-600" />;
      default: return <Sparkles className="h-3 w-3" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "added": return "bg-green-100 text-green-800 border-green-200";
      case "fixed": return "bg-blue-100 text-blue-800 border-blue-200";
      case "improved": return "bg-purple-100 text-purple-800 border-purple-200";
      case "removed": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2 hover:bg-primary/5 transition-colors"
        >
          <FileText className="h-4 w-4" />
          Changelog
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-xl">
            <Sparkles className="h-6 w-6 text-primary" />
            Notes de version
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6">
            {versions.map((version, vIndex) => (
              <div key={vIndex} className="border-l-2 border-primary/20 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-lg font-bold">Version {version.version}</h3>
                  <Badge variant={version.type === "major" ? "default" : "secondary"}>
                    {version.type === "major" ? "Majeure" : "Mineure"}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{version.date}</span>
                </div>
                
                <div className="space-y-2">
                  {version.changes.map((change, cIndex) => (
                    <div key={cIndex} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                      <div className="mt-0.5">
                        {getTypeIcon(change.type)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Badge className={`text-xs px-2 py-0.5 ${getTypeColor(change.type)}`}>
                            {change.type === "added" && "Ajouté"}
                            {change.type === "fixed" && "Corrigé"}
                            {change.type === "improved" && "Amélioré"}
                            {change.type === "removed" && "Supprimé"}
                          </Badge>
                        </div>
                        <p className="text-sm leading-relaxed">{change.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        
        <div className="border-t pt-4 mt-4">
          <p className="text-sm text-muted-foreground text-center">
            🚀 Merci d'utiliser EduPlatform ! Restez à l'écoute pour plus d'améliorations.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChangelogDialog;

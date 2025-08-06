
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Construction, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface WorkInProgressModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  lessonTitle: string;
}

const WorkInProgressModal = ({ open, onOpenChange, lessonTitle }: WorkInProgressModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-center justify-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Construction className="h-6 w-6 text-orange-500" />
            </motion.div>
            Contenu en préparation
          </DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4 py-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-orange-100 to-yellow-100 dark:from-orange-900/20 dark:to-yellow-900/20 rounded-full p-6 mx-auto w-fit"
          >
            <Clock className="h-16 w-16 text-orange-600 mx-auto" />
          </motion.div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Nous travaillons sur cette leçon</h3>
            <p className="text-muted-foreground">
              Le contenu visuel pour <strong>"{lessonTitle}"</strong> est en cours de préparation.
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 rounded-lg p-4">
            <div className="flex items-center gap-2 justify-center mb-2">
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="font-medium text-purple-700 dark:text-purple-300">Bientôt disponible</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Notre équipe prépare du contenu interactif de haute qualité pour enrichir votre expérience d'apprentissage.
            </p>
          </div>
          
          <Button onClick={() => onOpenChange(false)} className="w-full">
            Compris
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkInProgressModal;

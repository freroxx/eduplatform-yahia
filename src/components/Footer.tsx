
import { Mail, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-auto py-6 border-t bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <span>Développé avec</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>pour l'éducation marocaine</span>
          </div>
          
          <div className="flex items-center space-x-2 text-sm">
            <Mail className="h-4 w-4 text-primary" />
            <a 
              href="mailto:yikni2829@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              yikni2829@gmail.com
            </a>
          </div>
        </div>
        
        <div className="mt-4 text-center text-xs text-muted-foreground">
          © 2024 EduPlatform v4.5 - Tous droits réservés
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, Clock, Target, Users, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
// Custom course slide component for SVT

const SVT1Course = () => {
  const { lessonId } = useParams();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') return true;
    if (saved === 'light') return false;
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  const [userName] = useState(() => localStorage.getItem('userName') || 'Étudiant');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const slides = [
    {
      id: 1,
      title: "Introduction aux techniques écologiques",
      content: `
        <div class="space-y-6">
          <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
            <h3 class="text-xl font-bold text-green-800 mb-3">🌱 Bienvenue ${userName} dans les Sciences de la Vie et de la Terre</h3>
            <p class="text-green-700">Dans cette leçon, nous allons découvrir les méthodes scientifiques pour étudier les écosystèmes naturels sur le terrain.</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="text-lg font-semibold mb-3">🔬 Objectifs d'apprentissage</h4>
              <ul class="space-y-2 text-gray-700">
                <li>• Comprendre l'importance de l'étude écologique</li>
                <li>• Apprendre les techniques d'observation</li>
                <li>• Maîtriser les méthodes de prélèvement</li>
                <li>• Analyser les données écologiques</li>
              </ul>
            </div>
            <div>
              <h4 class="text-lg font-semibold mb-3">⏱️ Durée estimée</h4>
              <p class="text-gray-700">55 minutes de cours interactif</p>
              <h4 class="text-lg font-semibold mb-3 mt-4">📚 Prérequis</h4>
              <p class="text-gray-700">Notions de base en biologie</p>
            </div>
          </div>
        </div>
      `,
      isInteractive: false
    },
    {
      id: 2,
      title: "Qu'est-ce que l'écologie ?",
      content: `
        <div class="space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">🌍 L'écologie : science des relations</h3>
            <p class="text-lg text-gray-600 mb-6">L'écologie étudie les interactions entre les êtres vivants et leur environnement</p>
          </div>
          
          <div class="grid md:grid-cols-3 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🦋</div>
              <h4 class="font-semibold">Organismes</h4>
              <p class="text-sm text-gray-600">Êtres vivants individuels</p>
            </div>
            <div class="bg-green-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🌳</div>
              <h4 class="font-semibold">Populations</h4>
              <p class="text-sm text-gray-600">Groupes d'individus</p>
            </div>
            <div class="bg-purple-50 p-4 rounded-lg text-center">
              <div class="text-3xl mb-2">🏞️</div>
              <h4 class="font-semibold">Écosystèmes</h4>
              <p class="text-sm text-gray-600">Communautés + environnement</p>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="text-lg font-semibold mb-3">💡 Exemple concret</h4>
            <p class="text-gray-700">Dans une forêt, l'écologie étudie comment les arbres, les animaux, les champignons et les facteurs comme la lumière et l'eau interagissent ensemble.</p>
          </div>
        </div>
      `,
      isInteractive: false
    },
    {
      id: 3,
      title: "Quiz interactif : Niveaux d'organisation",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-center mb-6">🧠 Testez vos connaissances</h3>
          <div class="question-container">
            <p class="text-lg mb-4"><strong>Question :</strong> Quel est le niveau d'organisation le plus complexe en écologie ?</p>
            <div class="space-y-3">
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectAnswer(this, false)">
                A) Organisme
              </button>
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectAnswer(this, false)">
                B) Population
              </button>
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectAnswer(this, true)">
                C) Écosystème
              </button>
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectAnswer(this, false)">
                D) Espèce
              </button>
            </div>
            <div id="feedback" class="mt-4 p-3 rounded-lg hidden"></div>
          </div>
        </div>
        
        <script>
          function selectAnswer(button, isCorrect) {
            const options = document.querySelectorAll('.quiz-option');
            const feedback = document.getElementById('feedback');
            
            options.forEach(opt => {
              opt.classList.remove('border-green-400', 'border-red-400', 'bg-green-50', 'bg-red-50');
              opt.disabled = true;
            });
            
            if (isCorrect) {
              button.classList.add('border-green-400', 'bg-green-50');
              feedback.innerHTML = '✅ Excellent ! L\\'écosystème est effectivement le niveau le plus complexe car il inclut tous les êtres vivants ET leur environnement physique.';
              feedback.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-800';
            } else {
              button.classList.add('border-red-400', 'bg-red-50');
              feedback.innerHTML = '❌ Pas tout à fait. L\\'écosystème est le niveau le plus complexe car il englobe tous les autres niveaux.';
              feedback.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800';
            }
            
            feedback.classList.remove('hidden');
          }
        </script>
      `,
      isInteractive: true
    },
    {
      id: 4,
      title: "Méthodes d'étude sur le terrain",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-bold mb-4">🔍 Techniques d'observation et de mesure</h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-semibold text-blue-800 mb-2">📋 Techniques qualitatives</h4>
                <ul class="text-sm text-blue-700 space-y-1">
                  <li>• Observation directe</li>
                  <li>• Identification des espèces</li>
                  <li>• Description des habitats</li>
                  <li>• Relevés photographiques</li>
                </ul>
              </div>
              
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-semibold text-green-800 mb-2">📊 Techniques quantitatives</h4>
                <ul class="text-sm text-green-700 space-y-1">
                  <li>• Comptages d'individus</li>
                  <li>• Mesures de densité</li>
                  <li>• Analyses statistiques</li>
                  <li>• Quadrats et transects</li>
                </ul>
              </div>
            </div>
            
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-semibold text-purple-800 mb-2">🛠️ Matériel nécessaire</h4>
                <ul class="text-sm text-purple-700 space-y-1">
                  <li>• Loupe et microscope</li>
                  <li>• Carnets de terrain</li>
                  <li>• Appareils de mesure</li>
                  <li>• Matériel de prélèvement</li>
                </ul>
              </div>
              
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-semibold text-orange-800 mb-2">⚠️ Précautions</h4>
                <ul class="text-sm text-orange-700 space-y-1">
                  <li>• Respect de l'environnement</li>
                  <li>• Prélèvements minimaux</li>
                  <li>• Sécurité sur le terrain</li>
                  <li>• Réglementation locale</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `,
      isInteractive: false
    },
    {
      id: 5,
      title: "Exercice pratique : Plan d'étude",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-bold mb-4">📝 Élaborons ensemble un plan d'étude écologique</h3>
          
          <div class="bg-indigo-50 p-6 rounded-lg">
            <h4 class="font-semibold text-indigo-800 mb-3">🎯 Situation :</h4>
            <p class="text-indigo-700 mb-4">Vous devez étudier la biodiversité dans un petit étang proche de votre lycée. Cet étang abrite plusieurs espèces de plantes aquatiques, d'insectes et d'amphibiens.</p>
            
            <div class="space-y-4">
              <div>
                <h5 class="font-medium mb-2">1. Objectif de l'étude :</h5>
                <textarea class="w-full p-3 border rounded-lg" rows="2" placeholder="Définissez clairement ce que vous voulez étudier..."></textarea>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">2. Matériel nécessaire :</h5>
                <textarea class="w-full p-3 border rounded-lg" rows="2" placeholder="Listez le matériel dont vous aurez besoin..."></textarea>
              </div>
              
              <div>
                <h5 class="font-medium mb-2">3. Méthodes d'observation :</h5>
                <textarea class="w-full p-3 border rounded-lg" rows="2" placeholder="Décrivez comment vous allez procéder..."></textarea>
              </div>
              
              <button class="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                💡 Voir un exemple de réponse
              </button>
            </div>
          </div>
        </div>
      `,
      isInteractive: true
    },
    {
      id: 6,
      title: "Analyse des données écologiques",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-bold mb-4">📈 Traitement et interprétation des données</h3>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold mb-3">📊 Types de données collectées</h4>
              <div class="space-y-3">
                <div class="bg-gray-50 p-3 rounded">
                  <strong>Données quantitatives :</strong>
                  <p class="text-sm text-gray-600">Nombre d'individus, surfaces, températures, pH...</p>
                </div>
                <div class="bg-gray-50 p-3 rounded">
                  <strong>Données qualitatives :</strong>
                  <p class="text-sm text-gray-600">Espèces présentes, comportements, états de santé...</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold mb-3">🔄 Méthodes d'analyse</h4>
              <div class="space-y-3">
                <div class="bg-blue-50 p-3 rounded">
                  <strong>Indices de diversité :</strong>
                  <p class="text-sm text-blue-600">Shannon, Simpson, richesse spécifique</p>
                </div>
                <div class="bg-green-50 p-3 rounded">
                  <strong>Analyses statistiques :</strong>
                  <p class="text-sm text-green-600">Moyennes, écarts-types, corrélations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-6 rounded-lg">
            <h4 class="font-semibold text-yellow-800 mb-3">💡 Conseil méthodologique</h4>
            <p class="text-yellow-700">Les données d'une seule visite ne suffisent pas ! Il faut répéter les observations à différentes saisons pour avoir une vision complète de l'écosystème.</p>
          </div>
        </div>
      `,
      isInteractive: false
    },
    {
      id: 7,
      title: "Quiz final : Techniques adaptatives",
      content: `
        <div class="space-y-6">
          <h3 class="text-xl font-bold text-center mb-6">🏆 Évaluation finale</h3>
          
          <div class="question-container">
            <p class="text-lg mb-4"><strong>Question 1 :</strong> Quelle technique est la plus adaptée pour étudier la répartition des plantes dans une prairie ?</p>
            <div class="space-y-3">
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectFinalAnswer(this, true, 1)">
                A) Méthode des quadrats
              </button>
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectFinalAnswer(this, false, 1)">
                B) Observation directe uniquement
              </button>
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectFinalAnswer(this, false, 1)">
                C) Comptage global
              </button>
            </div>
            <div id="feedback1" class="mt-4 p-3 rounded-lg hidden"></div>
          </div>
          
          <div class="question-container">
            <p class="text-lg mb-4"><strong>Question 2 :</strong> Pourquoi est-il important de répéter les observations à différentes saisons ?</p>
            <div class="space-y-3">
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectFinalAnswer(this, false, 2)">
                A) Pour confirmer les résultats
              </button>
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectFinalAnswer(this, true, 2)">
                B) Pour observer les variations saisonnières
              </button>
              <button class="quiz-option w-full p-3 text-left border-2 border-gray-200 rounded-lg hover:border-blue-400 transition-colors" onclick="selectFinalAnswer(this, false, 2)">
                C) Pour collecter plus de données
              </button>
            </div>
            <div id="feedback2" class="mt-4 p-3 rounded-lg hidden"></div>
          </div>
          
          <div id="finalScore" class="mt-6 p-4 rounded-lg hidden text-center">
            <h4 class="text-lg font-bold mb-2">📊 Votre score</h4>
            <div id="scoreDisplay"></div>
          </div>
        </div>
        
        <script>
          let score = 0;
          let totalQuestions = 2;
          let answeredQuestions = 0;
          
          function selectFinalAnswer(button, isCorrect, questionNum) {
            const questionContainer = button.closest('.question-container');
            const options = questionContainer.querySelectorAll('.quiz-option');
            const feedback = document.getElementById('feedback' + questionNum);
            
            options.forEach(opt => {
              opt.classList.remove('border-green-400', 'border-red-400', 'bg-green-50', 'bg-red-50');
              opt.disabled = true;
            });
            
            if (isCorrect) {
              button.classList.add('border-green-400', 'bg-green-50');
              feedback.innerHTML = '✅ Correct !';
              feedback.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-800';
              score++;
            } else {
              button.classList.add('border-red-400', 'bg-red-50');
              feedback.innerHTML = '❌ Incorrect.';
              feedback.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800';
            }
            
            feedback.classList.remove('hidden');
            answeredQuestions++;
            
            if (answeredQuestions === totalQuestions) {
              showFinalScore();
            }
          }
          
          function showFinalScore() {
            const finalScore = document.getElementById('finalScore');
            const scoreDisplay = document.getElementById('scoreDisplay');
            const percentage = (score / totalQuestions) * 100;
            
            let message = '';
            if (percentage >= 80) {
              message = '🎉 Excellent travail ! Vous maîtrisez bien les techniques écologiques.';
            } else if (percentage >= 60) {
              message = '👍 Bon travail ! Revoyez quelques points pour parfaire vos connaissances.';
            } else {
              message = '📚 Il est recommandé de revoir cette leçon pour mieux comprendre les concepts.';
            }
            
            scoreDisplay.innerHTML = score + '/' + totalQuestions + ' (' + percentage + '%) - ' + message;
            finalScore.classList.remove('hidden');
          }
        </script>
      `,
      isInteractive: true
    },
    {
      id: 8,
      title: "Résumé et perspectives",
      content: `
        <div class="space-y-6">
          <div class="text-center">
            <h3 class="text-2xl font-bold mb-4">🎯 Ce que nous avons appris</h3>
            <p class="text-lg text-gray-600 mb-6">Récapitulatif des techniques adaptatives à l'étude écologique</p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-green-50 p-6 rounded-lg">
              <h4 class="text-lg font-semibold text-green-800 mb-3">✅ Points clés maîtrisés</h4>
              <ul class="space-y-2 text-green-700">
                <li>• Définition et importance de l'écologie</li>
                <li>• Niveaux d'organisation du vivant</li>
                <li>• Techniques d'observation sur le terrain</li>
                <li>• Méthodes de collecte de données</li>
                <li>• Principes d'analyse écologique</li>
              </ul>
            </div>
            
            <div class="bg-blue-50 p-6 rounded-lg">
              <h4 class="text-lg font-semibold text-blue-800 mb-3">🔮 Pour aller plus loin</h4>
              <ul class="space-y-2 text-blue-700">
                <li>• Étude des facteurs édaphiques</li>
                <li>• Analyse des facteurs climatiques</li>
                <li>• Flux d'énergie dans les écosystèmes</li>
                <li>• Équilibres naturels</li>
                <li>• Applications en conservation</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-indigo-50 p-6 rounded-lg text-center">
            <h4 class="text-lg font-semibold text-indigo-800 mb-3">🌟 Félicitations ${userName} !</h4>
            <p class="text-indigo-700 mb-4">Vous avez terminé cette première leçon de SVT. Vous êtes maintenant prêt(e) à explorer les facteurs qui influencent les êtres vivants dans leur environnement.</p>
            <div class="flex justify-center space-x-4">
              <Link to="/lesson/201/exercises" class="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                📝 Faire les exercices
              </Link>
              <Link to="/lessons" class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                📚 Voir toutes les leçons
              </Link>
            </div>
          </div>
        </div>
      `,
      isInteractive: false
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50'}`}>
      <header className={`backdrop-blur-md border-b sticky top-0 z-50 transition-colors duration-300 ${isDarkMode ? 'bg-gray-900/80 border-gray-700/50' : 'bg-white/80 border-gray-200/50'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/lessons" className={`flex items-center space-x-2 transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-green-400 hover:text-green-300' : 'text-green-600 hover:text-green-700'}`}>
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Retour aux leçons</span>
            </Link>
            <div className="text-center">
              <h1 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Techniques adaptatives - Cours interactif
              </h1>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                SVT • Leçon {lessonId ? parseInt(lessonId) - 200 : 1} • {slides.length} diapositives
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="outline" className={`${isDarkMode ? 'border-gray-600 text-gray-300' : 'border-green-300 text-green-600'}`}>
                <Clock className="h-3 w-3 mr-1" />
                55 min
              </Badge>
              <Badge variant="outline" className={`${isDarkMode ? 'border-gray-600 text-gray-300' : 'border-green-300 text-green-600'}`}>
                <Target className="h-3 w-3 mr-1" />
                Moyen
              </Badge>
            </div>
          </div>
          <div className="mt-4">
            <Progress value={progress} className="h-2 bg-gray-200" />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Diapositive {currentSlide + 1} / {slides.length}</span>
              <span>{Math.round(progress)}% terminé</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Card className={`backdrop-blur-sm border-0 shadow-lg ${isDarkMode ? 'bg-gray-800/80' : 'bg-white/80'}`}>
            <CardHeader>
              <CardTitle className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                {slides[currentSlide].title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div 
                className={`prose max-w-none ${isDarkMode ? 'prose-invert' : ''}`}
                dangerouslySetInnerHTML={{ __html: slides[currentSlide].content }}
              />
            </CardContent>
          </Card>
          
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              className={`flex items-center space-x-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : 'border-green-300 text-green-600 hover:bg-green-50'}`}
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Précédent</span>
            </Button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? 'bg-green-600' 
                      : isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white"
            >
              <span>Suivant</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {currentSlide === slides.length - 1 && (
            <div className="mt-8 text-center">
              <div className={`inline-flex items-center space-x-2 px-6 py-3 rounded-lg ${isDarkMode ? 'bg-green-900/20 text-green-400' : 'bg-green-100 text-green-800'}`}>
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Cours terminé ! Bravo {userName} 🎉</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SVT1Course;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle, Clock, Target, BookOpen, Star, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const EnglishExercises = () => {
  const [completedExercises, setCompletedExercises] = useState<number[]>([]);
  const [openSolutions, setOpenSolutions] = useState<number[]>([]);

  const exercises = [
    {
      id: 1,
      title: "Present Simple vs Present Continuous",
      difficulty: "Easy",
      duration: "10 min",
      points: 15,
      question: `Choose the correct form (Present Simple or Present Continuous):

1. I _______ (study) English every day.
2. Right now, she _______ (cook) dinner.
3. They usually _______ (go) to school by bus.
4. Look! It _______ (rain) heavily.
5. We _______ (have) lunch at 12 PM every day.
6. At the moment, he _______ (play) football.`,
      solution: `Correct answers:

1. I study English every day. (habit - Present Simple)
2. Right now, she is cooking dinner. (happening now - Present Continuous)
3. They usually go to school by bus. (routine - Present Simple)
4. Look! It is raining heavily. (happening now - Present Continuous)
5. We have lunch at 12 PM every day. (routine - Present Simple)
6. At the moment, he is playing football. (happening now - Present Continuous)`
    },
    {
      id: 2,
      title: "Past Simple - Regular and Irregular Verbs",
      difficulty: "Easy",
      duration: "15 min",
      points: 18,
      question: `Complete the sentences with the Past Simple form:

1. Yesterday, I _______ (visit) my grandmother.
2. She _______ (buy) a new car last week.
3. They _______ (not go) to the party.
4. _______ you _______ (see) the movie?
5. We _______ (travel) to Spain in 2020.
6. He _______ (not understand) the lesson.
7. _______ she _______ (come) to class yesterday?
8. The children _______ (play) in the garden.`,
      solution: `Correct answers:

1. Yesterday, I visited my grandmother. (regular verb: visit → visited)
2. She bought a new car last week. (irregular verb: buy → bought)
3. They didn't go to the party. (negative: didn't + base form)
4. Did you see the movie? (question: did + base form)
5. We traveled to Spain in 2020. (regular verb: travel → traveled)
6. He didn't understand the lesson. (negative: didn't + base form)
7. Did she come to class yesterday? (question: did + base form)
8. The children played in the garden. (regular verb: play → played)`
    },
    {
      id: 3,
      title: "Past Continuous - Actions in Progress",
      difficulty: "Medium",
      duration: "20 min",
      points: 22,
      question: `Complete with Past Continuous and Past Simple:

1. I _______ (read) when the phone _______ (ring).
2. While they _______ (watch) TV, it _______ (start) to rain.
3. She _______ (not sleep) at midnight yesterday.
4. What _______ you _______ (do) at 9 PM last night?
5. The students _______ (study) when the teacher _______ (arrive).
6. _______ he _______ (work) when you _______ (call) him?

Write a short paragraph (3-4 sentences) describing what you were doing yesterday evening, using Past Simple and Past Continuous.`,
      solution: `Correct answers:

1. I was reading when the phone rang. (continuous interrupted by simple)
2. While they were watching TV, it started to rain. (two actions: one ongoing, one interrupting)
3. She wasn't sleeping at midnight yesterday. (negative past continuous)
4. What were you doing at 9 PM last night? (question about ongoing action)
5. The students were studying when the teacher arrived. (ongoing action interrupted)
6. Was he working when you called him? (question about interrupted action)

Example paragraph:
"Yesterday evening, I was doing my homework when my friend called me. While we were talking on the phone, my mother was cooking dinner in the kitchen. After I finished my homework, I watched a movie and then went to bed."`
    },
    {
      id: 4,
      title: "Mixed Tenses - Real Life Situations",
      difficulty: "Medium",
      duration: "25 min",
      points: 25,
      question: `Read the text and choose the correct tense:

"My name is Sarah, and I _______ (be) a student. Every morning, I _______ (wake up) at 7 AM and _______ (have) breakfast. Yesterday, I _______ (wake up) late because my alarm clock _______ (not work). While I _______ (run) to school, I _______ (see) my friend Tom. He _______ (wait) for the bus when I _______ (meet) him. Today, I _______ (plan) to study for my English test. Right now, I _______ (practice) grammar exercises, and my sister _______ (help) me."

Then, write 5 sentences about your daily routine using different tenses.`,
      solution: `Text completed:

"My name is Sarah, and I am a student. Every morning, I wake up at 7 AM and have breakfast. Yesterday, I woke up late because my alarm clock wasn't working. While I was running to school, I saw my friend Tom. He was waiting for the bus when I met him. Today, I am planning to study for my English test. Right now, I am practicing grammar exercises, and my sister is helping me."

Example sentences about daily routine:
1. I usually get up at 6:30 AM. (Present Simple - routine)
2. I am currently learning French. (Present Continuous - temporary situation)  
3. Yesterday, I finished my project. (Past Simple - completed action)
4. While I was having dinner, my phone rang. (Past Continuous + Past Simple)
5. I am meeting my friends tomorrow. (Present Continuous - future plan)`
    },
    {
      id: 5,
      title: "Error Correction and Advanced Practice",
      difficulty: "Hard",
      duration: "30 min",
      points: 30,
      question: `Part A: Correct the errors in these sentences:

1. I am having a car since 2020.
2. She is going to school every day.
3. Did you went to the party yesterday?
4. While I was study, my brother was watch TV.
5. I don't understanding this lesson.
6. Are you knowing the answer?

Part B: Translate these sentences and explain which tense to use:

1. Je fais mes devoirs tous les jours.
2. En ce moment, j'étudie l'anglais.
3. Hier, j'ai visité le musée.
4. Pendant que je lisais, le téléphone a sonné.

Part C: Create a story (5-6 sentences) using all four tenses we studied.`,
      solution: `Part A - Corrections:

1. I have had a car since 2020. (possession - use Present Perfect, not Continuous)
2. She goes to school every day. (routine - use Present Simple, not Continuous)
3. Did you go to the party yesterday? (don't use past form after 'did')
4. While I was studying, my brother was watching TV. (use -ing form after 'was')
5. I don't understand this lesson. (use base form after 'don't')
6. Do you know the answer? (knowledge verbs don't use continuous)

Part B - Translations:

1. I do my homework every day. (Present Simple - habit)
2. Right now, I am studying English. (Present Continuous - happening now)
3. Yesterday, I visited the museum. (Past Simple - completed action)
4. While I was reading, the phone rang. (Past Continuous + Past Simple - interrupted action)

Part C - Example story:
"Every morning, I walk to school because I like the exercise. Today, I am walking a different route because there's construction on my usual path. Yesterday, I met my old friend while I was walking, and we talked about our school memories. It was a wonderful surprise that made my day special."`
    }
  ];

  const toggleExercise = (exerciseId: number) => {
    setCompletedExercises(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(x => x !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const toggleSolution = (exerciseId: number) => {
    setOpenSolutions(prev => 
      prev.includes(exerciseId) 
        ? prev.filter(x => x !== exerciseId)
        : [...prev, exerciseId]
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy": return "bg-green-100 text-green-800 border-green-200";
      case "Medium": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "Hard": return "bg-red-100 text-red-800 border-red-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="bg-background/80 backdrop-blur-md border-b border-border/50 p-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/lessons" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-all duration-200">
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium">Back to lessons</span>
          </Link>
          <div className="text-center">
            <h1 className="text-xl font-bold text-foreground flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-blue-600" />
              English Exercises
            </h1>
            <p className="text-sm text-muted-foreground">Present and Past Tenses</p>
          </div>
          <Badge variant="outline" className="flex items-center gap-1">
            <Star className="h-4 w-4" />
            {completedExercises.length} completed
          </Badge>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {exercises.map((exercise, index) => (
            <motion.div
              key={exercise.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.01]">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <Badge className={`${getDifficultyColor(exercise.difficulty)} font-medium border`}>
                          <Target className="h-3 w-3 mr-1" />
                          {exercise.difficulty}
                        </Badge>
                        <Badge variant="outline">
                          <Clock className="h-3 w-3 mr-1" />
                          {exercise.duration}
                        </Badge>
                        <Badge variant="outline" className="text-orange-600 border-orange-300">
                          <Star className="h-3 w-3 mr-1" />
                          {exercise.points} pts
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground flex items-center gap-2">
                        <Brain className="h-5 w-5 text-blue-600" />
                        {exercise.title}
                      </CardTitle>
                    </div>
                    <Button
                      onClick={() => toggleExercise(exercise.id)}
                      variant={completedExercises.includes(exercise.id) ? "default" : "outline"}
                      size="sm"
                      className={`transition-all duration-300 ${
                        completedExercises.includes(exercise.id) 
                          ? 'bg-green-600 hover:bg-green-700 shadow-lg' 
                          : 'hover:border-green-500'
                      }`}
                    >
                      <CheckCircle className="h-4 w-4 mr-2" />
                      {completedExercises.includes(exercise.id) ? "Completed ✓" : "Mark done"}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-500">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line font-medium">{exercise.question}</p>
                    </div>
                    
                    <Button
                      onClick={() => toggleSolution(exercise.id)}
                      variant="ghost"
                      className="w-full hover:bg-accent/50 transition-colors"
                    >
                      {openSolutions.includes(exercise.id) ? 'Hide solution' : '🔍 Show solution'}
                    </Button>
                    
                    {openSolutions.includes(exercise.id) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border-l-4 border-green-500"
                      >
                        <p className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
                          <CheckCircle className="h-4 w-4" />
                          Detailed Solution:
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line text-sm">{exercise.solution}</p>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnglishExercises;

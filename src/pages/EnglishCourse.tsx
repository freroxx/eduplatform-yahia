
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CourseSlide from "@/components/CourseSlide";
import LoadingSpinner from "@/components/LoadingSpinner";

const EnglishCourse = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setIsLoading(false);
          clearInterval(timer);
          return 100;
        }
        return prev + 12;
      });
    }, 500);

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Module 1: English Tenses - Present and Past",
      content: `Welcome to our comprehensive English tenses course! Mastering English tenses is crucial for effective communication.
      
      Course objectives:
      • Understand the structure of present and past tenses
      • Learn when to use each tense correctly
      • Practice with real-life examples and situations
      • Build confidence in English conversation
      • Master time expressions and markers`,
      type: "intro" as const
    },
    {
      title: "Present Simple Tense",
      content: `📚 Structure: Subject + Verb (base form) + Object
      
      ✅ Usage:
      • Permanent situations: "I live in Morocco"
      • Habits and routines: "She studies every day"
      • General truths: "Water boils at 100°C"
      • Scheduled events: "The train leaves at 8 AM"
      
      🔧 Formation:
      • Positive: I/You/We/They work | He/She/It works
      • Negative: I/You/We/They don't work | He/She/It doesn't work
      • Question: Do I/you/we/they work? | Does he/she/it work?
      
      ⏰ Time markers: always, usually, often, sometimes, never, every day`,
      type: "definition" as const
    },
    {
      title: "Present Continuous Tense",
      content: `📚 Structure: Subject + am/is/are + Verb-ing
      
      ✅ Usage:
      • Actions happening now: "I am studying English"
      • Temporary situations: "He is living with his parents"
      • Future plans: "We are meeting tomorrow"
      • Changing situations: "It's getting cold"
      
      🔧 Formation:
      • Positive: I am working | You/We/They are working | He/She/It is working
      • Negative: I am not working | You/We/They aren't working | He/She/It isn't working
      • Question: Am I working? | Are you/we/they working? | Is he/she/it working?
      
      ⏰ Time markers: now, at the moment, currently, today, this week`,
      type: "definition" as const
    },
    {
      title: "Past Simple Tense",
      content: `📚 Structure: Subject + Past form of verb
      
      ✅ Usage:
      • Completed actions in the past: "I visited Paris last year"
      • Past habits: "When I was young, I played football"
      • Sequences of past events: "He came home and had dinner"
      
      🔧 Formation:
      • Regular verbs: add -ed (work → worked, study → studied)
      • Irregular verbs: learn individual forms (go → went, see → saw)
      • Negative: didn't + base form ("I didn't go")
      • Question: Did + subject + base form ("Did you go?")
      
      ⏰ Time markers: yesterday, last week/month/year, ago, in 1990, when`,
      type: "definition" as const
    },
    {
      title: "Past Continuous Tense",
      content: `📚 Structure: Subject + was/were + Verb-ing
      
      ✅ Usage:
      • Actions in progress in the past: "I was sleeping at midnight"
      • Interrupted actions: "I was cooking when he arrived"
      • Parallel actions: "While I was studying, he was watching TV"
      • Setting the scene: "It was raining heavily"
      
      🔧 Formation:
      • Positive: I/He/She/It was working | You/We/They were working
      • Negative: I/He/She/It wasn't working | You/We/They weren't working
      • Question: Was I/he/she/it working? | Were you/we/they working?
      
      ⏰ Often used with: while, when, as, at that time`,
      type: "definition" as const
    },
    {
      title: "Practical Examples",
      content: `🌟 Real-life situations:
      
      📅 Daily routine (Present Simple):
      "Every morning, I wake up at 7 AM, have breakfast, and go to school."
      
      📱 Current activities (Present Continuous):
      "Right now, I am texting my friend and listening to music."
      
      📖 Past events (Past Simple):
      "Yesterday, I finished my homework and watched a movie."
      
      🎬 Past ongoing actions (Past Continuous):
      "At 9 PM last night, I was doing my English exercises while my brother was playing video games."
      
      💡 Mixed example:
      "I usually study in the evening (present simple), but yesterday I was studying in the afternoon (past continuous) because I had a test today."`,
      type: "example" as const
    },
    {
      title: "Common Mistakes and Tips",
      content: `⚠️ Common errors to avoid:
      
      ❌ "I am having a car" → ✅ "I have a car" (possession - use simple)
      ❌ "I go to school now" → ✅ "I am going to school now" (happening now)
      ❌ "Did you went?" → ✅ "Did you go?" (don't use past form after 'did')
      ❌ "I was go" → ✅ "I went" or "I was going" (correct form)
      
      💡 Helpful tips:
      • Listen for time markers to choose the right tense
      • Practice with daily activities
      • Read English stories to see tenses in context
      • Don't translate directly from your native language
      • Use contractions in spoken English (I'm, don't, didn't)`,
      type: "example" as const
    },
    {
      title: "Summary and Practice",
      content: `📋 Quick reference:
      
      ⏰ Present Simple: habits, facts, schedules
      → "I work every day"
      
      ⏰ Present Continuous: now, temporary, future plans  
      → "I am working now"
      
      ⏰ Past Simple: completed past actions
      → "I worked yesterday"
      
      ⏰ Past Continuous: ongoing past actions
      → "I was working at 5 PM"
      
      🎯 Next steps:
      Practice identifying which tense to use in different contexts. Remember: English tenses help express WHEN and HOW actions happen. Keep practicing with real examples from your daily life!`,
      type: "summary" as const
    }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <LoadingSpinner text="Loading English course..." progress={progress} type="progress" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CourseSlide 
        lessonTitle="Module 1: English Tenses" 
        slides={slides} 
      />
    </motion.div>
  );
};

export default EnglishCourse;


// Re-export from the main physics data file
export { physicsLessonsData, physicsLessonsStructure } from './physicsCourseData';

// Exercise data for physics
export const physicsExercisesData = {
  "1": {
    title: "تمارين الجاذبية العامة",
    exercises: [
      {
        id: 1,
        title: "حساب قوة الجذب",
        difficulty: "متوسط",
        duration: "15 دقيقة",
        points: 12,
        question: "احسب قوة الجذب بين الأرض (M = 6.0×10²⁴ kg) والقمر (m = 7.3×10²² kg)، علماً أن المسافة بينهما d = 3.8×10⁸ m.\nمعطى: G = 6.67×10⁻¹¹ N⋅m²/kg²",
        solution: "F = G × (M × m) / d²\nF = 6.67×10⁻¹¹ × (6.0×10²⁴ × 7.3×10²²) / (3.8×10⁸)²\nF = 6.67×10⁻¹¹ × 4.38×10⁴⁷ / 1.44×10¹⁷\nF = 2.0×10²⁰ N"
      },
      {
        id: 2,
        title: "الوزن والكتلة",
        difficulty: "سهل",
        duration: "10 دقيقة",
        points: 8,
        question: "جسم كتلته m = 60 kg على سطح الأرض.\n1. احسب وزنه على سطح الأرض (g = 9.8 m/s²)\n2. احسب وزنه على القمر حيث g = 1.6 m/s²",
        solution: "1. على سطح الأرض:\nP = mg = 60 × 9.8 = 588 N\n\n2. على القمر:\nP = mg = 60 × 1.6 = 96 N\n\nملاحظة: الكتلة ثابتة، لكن الوزن يختلف حسب التسارع"
      }
    ]
  },
  "14": {
    title: "تمارين التيار الكهربائي المستمر",
    exercises: [
      {
        id: 1,
        title: "تطبيق قانون أوم",
        difficulty: "سهل",
        duration: "10 دقيقة",
        points: 8,
        question: "مقاوم مقاومته R = 100 Ω يمر به تيار شدته I = 0.2 A. احسب التوتر U بين طرفي المقاوم.",
        solution: "حسب قانون أوم: U = R × I\nU = 100 × 0.2 = 20 V\nإذن التوتر بين طرفي المقاوم هو 20 V."
      },
      {
        id: 2,
        title: "دارة كهربائية بسيطة",
        difficulty: "متوسط",
        duration: "15 دقيقة",
        points: 12,
        question: "دارة كهربائية تحتوي على بطارية (12V) ومقاومين متتاليين:\nR₁ = 4 Ω و R₂ = 8 Ω\n1. احسب المقاومة الكلية\n2. احسب شدة التيار\n3. احسب التوتر عبر كل مقاوم",
        solution: "1. المقاومة الكلية (متتالية):\nR_total = R₁ + R₂ = 4 + 8 = 12 Ω\n\n2. شدة التيار:\nI = U/R_total = 12/12 = 1 A\n\n3. التوتر عبر كل مقاوم:\nU₁ = R₁ × I = 4 × 1 = 4 V\nU₂ = R₂ × I = 8 × 1 = 8 V\n\nتحقق: U₁ + U₂ = 4 + 8 = 12 V ✓"
      }
    ]
  }
};

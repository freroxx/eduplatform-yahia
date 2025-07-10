import CourseSlide from "@/components/CourseSlide";

interface Slide {
  title: string;
  content: string;
  type: "intro" | "definition" | "example" | "exercise" | "summary";
}

const Physics1Course = () => {
  const slides: Slide[] = [
    {
      title: "Introduction à la Gravitation Universelle",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-blue-100 to-indigo-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-indigo-800 mb-3">🌍 Qu'est-ce que la gravitation ?</h3>
            <p class="text-gray-700 leading-relaxed">
              La gravitation universelle est la force d'attraction qui s'exerce entre tous les corps de l'univers. 
              Elle explique pourquoi les objets tombent vers la Terre et comment les planètes orbitent autour du Soleil.
            </p>
          </div>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h4 class="font-semibold text-gray-800 mb-2">📚 Dans ce chapitre</h4>
              <ul class="text-sm space-y-1 text-gray-600">
                <li>• Loi de Newton de la gravitation</li>
                <li>• Force gravitationnelle</li>
                <li>• Applications pratiques</li>
                <li>• Calculs et exercices</li>
              </ul>
            </div>
            <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 class="font-semibold text-yellow-800 mb-2">💡 Le saviez-vous ?</h4>
              <p class="text-sm text-yellow-700">
                Newton a découvert la loi de la gravitation en observant la chute d'une pomme !
              </p>
            </div>
          </div>
        </div>
      `,
      type: "intro"
    },
    {
      title: "La Loi de Newton",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-green-100 to-emerald-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-emerald-800 mb-4">📐 Énoncé de la Loi</h3>
            <div class="bg-white p-4 rounded-lg shadow-inner">
              <p class="text-lg font-medium text-gray-800 text-center">
                "Deux corps s'attirent avec une force proportionnelle au produit de leurs masses et inversement proportionnelle au carré de la distance qui les sépare."
              </p>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">🧮 Formule mathématique</h4>
            <div class="bg-gray-50 p-4 rounded-lg text-center">
              <div class="text-2xl font-bold text-indigo-600 mb-2">
                F = G × (m₁ × m₂) / r²
              </div>
              <div class="grid grid-cols-2 gap-4 mt-4 text-sm">
                <div>
                  <strong>F :</strong> Force gravitationnelle (N)
                </div>
                <div>
                  <strong>G :</strong> Constante gravitationnelle
                </div>
                <div>
                  <strong>m₁, m₂ :</strong> Masses des corps (kg)
                </div>
                <div>
                  <strong>r :</strong> Distance entre les centres (m)
                </div>
              </div>
            </div>
          </div>
        </div>
      `,
      type: "definition"
    },
    {
      title: "La Constante Gravitationnelle G",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-purple-800 mb-3">🔢 Valeur de G</h3>
            <div class="bg-white p-4 rounded-lg shadow-inner text-center">
              <div class="text-xl font-bold text-purple-600">
                G = 6,67 × 10⁻¹¹ N⋅m²⋅kg⁻²
              </div>
            </div>
          </div>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-blue-50 p-4 rounded-lg">
              <h4 class="font-semibold text-blue-800 mb-2">📏 Unités</h4>
              <ul class="text-sm space-y-1 text-blue-700">
                <li>• N : Newton (unité de force)</li>
                <li>• m : mètre (distance)</li>
                <li>• kg : kilogramme (masse)</li>
              </ul>
            </div>
            <div class="bg-green-50 p-4 rounded-lg">
              <h4 class="font-semibold text-green-800 mb-2">🌟 Caractéristiques</h4>
              <ul class="text-sm space-y-1 text-green-700">
                <li>• Constante universelle</li>
                <li>• Très petite valeur</li>
                <li>• Mesurée expérimentalement</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
            <h4 class="font-semibold text-amber-800 mb-2">💭 Réflexion</h4>
            <p class="text-sm text-amber-700">
              Pourquoi G est-elle si petite ? Cela explique pourquoi nous ne ressentons pas l'attraction gravitationnelle entre les objets du quotidien !
            </p>
          </div>
        </div>
      `,
      type: "definition"
    },
    {
      title: "Exemple Pratique : Terre-Lune",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-indigo-100 to-blue-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-indigo-800 mb-3">🌍🌙 Calcul de la Force Terre-Lune</h3>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">📊 Données</h4>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h5 class="font-semibold text-blue-800 mb-2">🌍 Terre</h5>
                <p class="text-sm text-blue-700">Masse : 5,97 × 10²⁴ kg</p>
              </div>
              <div class="bg-gray-50 p-4 rounded-lg">
                <h5 class="font-semibold text-gray-800 mb-2">🌙 Lune</h5>
                <p class="text-sm text-gray-700">Masse : 7,35 × 10²² kg</p>
              </div>
            </div>
            <div class="bg-green-50 p-4 rounded-lg mt-4">
              <p class="text-sm text-green-700">
                <strong>Distance :</strong> 3,84 × 10⁸ m (384 000 km)
              </p>
            </div>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h4 class="text-lg font-semibold text-gray-800 mb-4">🧮 Calcul</h4>
            <div class="bg-gray-50 p-4 rounded-lg space-y-3">
              <div class="text-sm">
                <strong>F = G × (m₁ × m₂) / r²</strong>
              </div>
              <div class="text-sm">
                F = 6,67 × 10⁻¹¹ × (5,97 × 10²⁴ × 7,35 × 10²²) / (3,84 × 10⁸)²
              </div>
              <div class="text-sm">
                <strong class="text-indigo-600">F = 1,98 × 10²⁰ N</strong>
              </div>
            </div>
          </div>
          
          <div class="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
            <h4 class="font-semibold text-yellow-800 mb-2">🎯 Conclusion</h4>
            <p class="text-sm text-yellow-700">
              Cette force énorme maintient la Lune en orbite autour de la Terre !
            </p>
          </div>
        </div>
      `,
      type: "example"
    },
    {
      title: "Applications de la Gravitation",
      content: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-green-100 to-teal-100 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-teal-800 mb-3">🚀 Applications Pratiques</h3>
          </div>
          
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h4 class="font-semibold text-blue-800 mb-2">🛰️ Satellites</h4>
              <p class="text-sm text-gray-700">
                Les satellites artificiels utilisent la gravitation pour rester en orbite autour de la Terre.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h4 class="font-semibold text-purple-800 mb-2">🌍 Marées</h4>
              <p class="text-sm text-gray-700">
                L'attraction de la Lune et du Soleil provoque les marées océaniques.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h4 class="font-semibold text-red-800 mb-2">🚀 Sondes Spatiales</h4>
              <p class="text-sm text-gray-700">
                Les missions spatiales calculent les trajectoires en utilisant la gravitation.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h4 class="font-semibold text-green-800 mb-2">⚖️ Pesanteur</h4>
              <p class="text-sm text-gray-700">
                Le poids des objets est la manifestation de la force gravitationnelle terrestre.
              </p>
            </div>
          </div>
          
          <div class="bg-indigo-50 p-4 rounded-lg">
            <h4 class="font-semibold text-indigo-800 mb-2">🎓 Pour aller plus loin</h4>
            <p class="text-sm text-indigo-700">
              La gravitation explique aussi la formation des systèmes planétaires et des galaxies !
            </p>
          </div>
        </div>
      `,
      type: "summary"
    }
  ];

  return (
    <CourseSlide 
      lessonTitle="La gravitation universelle"
      slides={slides}
    />
  );
};

export default Physics1Course;
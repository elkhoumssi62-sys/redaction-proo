import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function analyzeText(text: string) {
  if (!text || text.trim().length === 0) {
    return null;
  }

  const lower = text.toLowerCase();
  const wordCount = text.trim().split(/\s+/).filter((w) => w.length > 0).length;
  const charCount = text.length;
  const sentenceCount = text.split(/[.!?]+/).filter((s) => s.trim().length > 0).length;
  const avgWordsPerSentence = sentenceCount > 0 ? Math.round(wordCount / sentenceCount) : 0;
  const paragraphCount = text.split(/\n\n+/).filter((p) => p.trim().length > 0).length;

  // Count indicators per type
  const indicators: Record<string, { count: number; words: string[] }> = {
    narratif: { count: 0, words: [] },
    descriptif: { count: 0, words: [] },
    explicatif: { count: 0, words: [] },
    argumentatif: { count: 0, words: [] },
    injonctif: { count: 0, words: [] },
    expressif: { count: 0, words: [] },
  };

  const indicatorLists = {
    narratif: ["puis", "soudain", "alors", "un jour", "ensuite", "enfin", "pendant que", "tandis que", "lorsque", "quand", "dès que", "enfin", "puis", "histoire", "raconter", "personnage", "récit", "aventure", "narrer", "conte", "roman"],
    descriptif: ["voir", "apercevoir", "beau", "joli", "grand", "petit", "gros", "mince", "bleu", "rouge", "vert", "à gauche", "à droite", "au loin", "près", "derrière", "devant", "au-dessus", "au-dessous", "comme", "semble", "paraît", "on dirait"],
    explicatif: ["car", "en effet", "c'est pourquoi", "parce que", "donc", "c'est-à-dire", "par exemple", "définition", "explication", "phénomène", "analyse", "consiste", "on appelle", "c'est un", "il s'agit de", "autrement dit"],
    argumentatif: ["je pense", "selon moi", "il me semble", "cependant", "pourtant", "néanmoins", "toutefois", "thèse", "argument", "exemple", "démontrer", "prouver", "convaincre", "contraire", "objection", "mais", "donc", "ainsi", "alors que", "même si", "bien que", "quoique", "en revanche"],
    injonctif: ["il faut", "vous devez", "veuillez", "interdit", "consigne", "attention", "étape", "recette", "règlement", "impératif", "prié", "obligatoire", "défense de", "il est", "recommandé"],
    expressif: ["je ressens", "j'aime", "je hais", "ému", "hélas", "oh", "joie", "bonheur", "tristesse", "peine", "chagrin", "amour", "haine", "douleur", "plaisir", "extase", "quelle", "quel", "mon coeur", "âme", "sentiment", "émotion", "!", "...", "?"],
  };

  for (const [type, words] of Object.entries(indicatorLists)) {
    for (const w of words) {
      const regex = new RegExp(`(^|\\s|[!?,.;:])${escapeRegex(w.toLowerCase())}`, "g");
      const matches = lower.match(regex);
      if (matches && matches.length > 0) {
        indicators[type].count += matches.length;
        if (!indicators[type].words.includes(w)) {
          indicators[type].words.push(w);
        }
      }
    }
  }

  // Detect first person
  const firstPerson = (lower.match(/\bje\b|\bj'|\bmon\b|\bma\b|\bmoi\b|\bme\b|\bmien/g) || []).length;
  const imperativeMatches = text.match(/^\s*(?:Veuillez|Faites|Ajoutez|Mélangez|Prendre|Aller|Faire|Prendre|Écrivez|Lisez|Répondez|Respectez|Assurez-vous)/im);
  const hasImperative = !!imperativeMatches;

  // Detect tenses (heuristic)
  const passeSimple = (text.match(/\b(?:il|elle|on|je|tu|ils|elles)\s+\w+(?:a|ai|as|èrent|èrent|it|irent|ut|urent)\b/g) || []).length;
  const imparfait = (text.match(/\b(?:je|tu|il|elle|on|nous|vous|ils|elles)\s+\w+(?:ais|ait|ions|iez|aient)\b/g) || []).length;
  const present = (text.match(/\b(?:je|tu|il|elle|on|nous|vous|ils|elles)\s+\w+(?:e|es|ons|ez|ent|t|s)\b/g) || []).length;

  if (hasImperative) indicators.injonctif.count += 3;
  if (firstPerson > 2) indicators.expressif.count += Math.min(firstPerson, 3);

  // Calculate percentages
  const total = Object.values(indicators).reduce((a, b) => a + b.count, 0);
  const scores: Record<string, number> = {};
  let dominantType = "";
  let highestScore = 0;

  for (const [type, data] of Object.entries(indicators)) {
    scores[type] = total > 0 ? Math.round((data.count / total) * 100) : 0;
    if (data.count > highestScore) {
      highestScore = data.count;
      dominantType = type;
    }
  }

  // Determine readability
  const readability = avgWordsPerSentence < 12 ? "Facile" : avgWordsPerSentence < 20 ? "Moyenne" : "Complexe";

  // Suggestions
  const suggestions: string[] = [];
  if (avgWordsPerSentence > 25) {
    suggestions.push("Vos phrases sont longues. Envisagez de les raccourcir pour améliorer la clarté.");
  }
  if (paragraphCount === 1 && wordCount > 100) {
    suggestions.push("Votre texte est dense. Pensez à aérer avec des paragraphes.");
  }
  if (!dominantType && wordCount > 50) {
    suggestions.push("Le type de texte n'est pas très marqué. Affirmez davantage votre intention.");
  }
  if (firstPerson > 5 && dominantType === "explicatif") {
    suggestions.push("Votre texte explicatif contient beaucoup de marques de la première personne. Un ton plus neutre pourrait être approprié.");
  }

  const typeLabels: Record<string, string> = {
    narratif: "Narratif",
    descriptif: "Descriptif",
    explicatif: "Explicatif / Informatif",
    argumentatif: "Argumentatif",
    injonctif: "Injonctif / Prescriptif",
    expressif: "Expressif / Émotif",
  };

  return {
    stats: { wordCount, charCount, sentenceCount, avgWordsPerSentence, paragraphCount },
    scores,
    dominantType: dominantType ? typeLabels[dominantType] : "Indéterminé",
    indicators,
    tenses: { passeSimple, imparfait, present },
    firstPerson,
    hasImperative,
    readability,
    suggestions,
  };
}

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function suggestConnectors(typeId: string) {
  const map: Record<string, string[]> = {
    narratif: ["d'abord", "puis", "ensuite", "soudain", "brusquement", "enfin", "pendant que", "tandis que", "finalement", "alors"],
    descriptif: ["à gauche", "à droite", "au centre", "au loin", "près de", "en haut", "en bas", "on distingue", "on aperçoit", "tel que"],
    explicatif: ["car", "en effet", "c'est pourquoi", "ainsi", "donc", "par exemple", "c'est-à-dire", "autrement dit", "en d'autres termes"],
    argumentatif: ["tout d'abord", "de plus", "en outre", "cependant", "pourtant", "néanmoins", "donc", "c'est pourquoi", "en effet", "au contraire", "par ailleurs"],
    injonctif: ["d'abord", "puis", "ensuite", "enfin", "il faut", "veuillez", "pensez à", "attention"],
    expressif: ["oh!", "hélas!", "comme", "que de", "quelle", "je ressens", "mon cœur", "j'éprouve"],
  };
  return map[typeId] || [];
}

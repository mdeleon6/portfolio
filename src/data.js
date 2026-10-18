// All the content lives here. Edit this file to change the site; the components only display it.

export const profile = {
  name: "Martino DeLeon",
  tagline: "Data analyst building AI products that answer real questions.",
  intro:
    "Data analyst with 2.5 years at Ubisoft Halifax until the studio closed in 2026. Since then I've been building AI engineering projects alongside my analytics work, and I'm open to Data Analyst, AI Engineer, or hybrid roles.",
  links: {
    github: "https://github.com/mdeleon6",
    linkedin: "https://www.linkedin.com/in/martino-deleon/",
    email: "martino.deleon@gmail.com",
    skillsMap: "https://martino-ai-data-skills.streamlit.app/",
  },
};

export const projects = [
  {
    title: "Canada Labour Code RAG",
    question: "Can Claude answer questions about the Canada Labour Code, with citations?",
    answer:
      "Plain-language answers that cite the exact section of the law. In testing it cited the right section for 83% of questions and flagged both off-topic questions as not covered.",
    highlights: [
      "Parsed 205 sections of federal law from the official XML",
      "BM25 retrieval measured with hit@k on a hand-labelled test set",
      "Grounded answers with citations and an honest 'not covered'",
      "Password-gated live mode with a per-visit question cap",
    ],
    tech: ["Python", "Claude API", "BM25", "Streamlit"],
    live: "https://canada-labour-code-rag.streamlit.app/",
    code: "https://github.com/mdeleon6/canada-labour-code-rag",
  },
  {
    title: "Steam indie RPG pricing",
    question: "What should a small studio charge for an indie RPG on Steam?",
    answer:
      "Indie RPGs priced £10–20 got the best reviews, clearly ahead of free games; the £20+ band was too uncertain to call.",
    highlights: [
      "Question brief and data-trust notes before any analysis",
      "Bootstrap confidence intervals on median review scores",
      "Survivorship bias measured and reported (half the genre excluded)",
      "Answer-first results app with an uncertainty chart",
    ],
    tech: ["Python", "pandas", "Plotly", "Streamlit"],
    live: "https://indie-rpg-pricing.streamlit.app/",
    code: "https://github.com/mdeleon6/indie-rpg-pricing-analysis",
  },
  {
    title: "RPG classifier evaluation",
    question: "Can Claude spot an RPG from its store description?",
    answer:
      "Claude agreed with Steam's tags on 76% of games. A looser prompt raised recall (60% → 72%) but added false alarms: a trade-off, not a win.",
    highlights: [
      "Balanced 100-game eval set to avoid the baseline trap",
      "Precision, recall and a paired bootstrap of two prompts",
      "Error analysis that found label noise in Steam's own tags",
    ],
    tech: ["Python", "Claude API", "pandas", "Streamlit"],
    live: "https://rpg-classifier-eval.streamlit.app/",
    code: "https://github.com/mdeleon6/rpg-classifier-eval",
  },
  {
    title: "Telemetry audit case study (Ubisoft)",
    question: "Why was game data going missing, and how do you fix it at the source?",
    answer:
      "I audited every telemetry event against the tracking plan and fixed the deprecated ones, then supported QA testing to confirm the data was coming through correctly, so daily data cleaning became rare.",
    highlights: [],
    tech: ["Telemetry", "Tracking plans", "SQL"],
    live: "",
    code: "https://github.com/mdeleon6/ai-data-skills-hub/blob/main/notes/case-study-telemetry-audit.md",
  },
];

export const experience = [
  { role: "Data Analyst, Live Ops", org: "Ubisoft Halifax", dates: "2023 – 2026" },
  { role: "Junior Developer", org: "Plan Heal", dates: "2022 – 2023" },
  { role: "Technical Support Representative", org: "Matrix Orbital", dates: "2013 – 2014" },
  { role: "Naval Communicator", org: "Royal Canadian Navy", dates: "2005 – 2008" },
];
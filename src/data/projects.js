export const projects = [
  {
    slug: 'carboledger',
    title: 'Carboledger',
    role: 'Product Designer',
    year: '2024–Present',
    tags: ['Climate Tech', 'B2B', 'Enterprise'],
    feeling: {
      hook: "On day one I didn't know what ISCC meant. Two years later I was in rooms with sustainability experts, ESG auditors, and MNC clients — validating what we'd built together.",
      body: "The product went from an idea to something real people depended on. That gap is the part I'm most proud of.",
      context: "Carboledger is a climate tech startup building compliance and ESG tooling for enterprises navigating sustainability reporting requirements.",
      problem: "Sustainability reporting is dense, regulatory, and deeply technical. Companies needed tools that could handle ISCC compliance, contribution analysis, and ESG benchmarking — without requiring an expert at every step.",
      process: "I came in as the sole designer. The first months were almost entirely research — sitting with the domain, learning the regulatory language, building a vocabulary before building screens.",
      outcome: "The product grew from 0 to $100k across multiple pilots and production launches. Shipped to MNCs including Musket and Bell. Currently building AI-assisted ESG workflows.",
      learned: "You can't design something you don't understand. The first thing I needed to learn wasn't Figma — it was carbon accounting.",
    },
    thinking: {
      hook: 'Sole designer owning the product end to end, from domain research to production launch.',
      body: "Designed ISCC compliance tooling for Smart Balance, SecureShare's Contribution Analysis module, and AI × ESG agents — Data Collection, Questionnaire Response, Peer Benchmarking, Indexing. Shipped to MNCs including Musket and Bell. Product grew from 0 → $100k across pilots and production.",
      context: 'B2B climate tech. Sustainability reporting, ISCC compliance, ESG benchmarking for enterprises.',
      problem: 'No existing tooling handled ISCC compliance workflows at the depth enterprise clients needed. Manual processes, high error rates, no auditability.',
      process: 'Full design ownership: domain research, user interviews with sustainability managers and ESG auditors, information architecture, interaction design, usability testing, and production handoff.',
      outcome: '0 → $100k ARR across pilots and production launches. Shipped to MNCs including Musket and Bell. Currently leading design for AI × ESG agent workflows.',
      learned: 'Designed a full design system from scratch to maintain consistency across a complex, multi-module B2B product.',
    },
  },
  {
    slug: 'spiti',
    title: 'Spiti',
    role: 'Product Designer',
    year: '2022–2023',
    tags: ['Async Video', 'B2B', 'Design System'],
    feeling: {
      hook: "I learned something at Spiti that had nothing to do with pixels.",
      body: "My founders showed me that integrity and systematic thinking are design tools too. I came in thinking design was about craft. I left understanding it was also about how you work.",
      context: "Spiti was a B2B async video collaboration tool for teams — think screen recording, AI summaries, and action items from recorded meetings.",
      problem: "The product had grown without a consistent visual language. Every new feature felt slightly off from the last one. And there was no foundation to build from.",
      process: "Started with a full audit of existing UI patterns. Built the design system from the ground up — tokens, components, documentation, usage guidelines. Then applied it across the product.",
      outcome: "Shipped the design system foundation. Led design for screen recorder, AI summary generation, and action items feature. Also redesigned the product website.",
      learned: "A design system is only as good as the team's commitment to it. The real work is in making it easy enough that no one goes around it.",
    },
    thinking: {
      hook: 'Built the design system from scratch and led design for three major features across web and mobile.',
      body: "Design system foundation — tokens, components, documentation. Screen recorder, AI summary generation, and action items feature design. Product website redesign.",
      context: 'B2B async video collaboration tool. Teams use Spiti for async screen recordings, AI-generated meeting summaries, and action item tracking.',
      problem: 'No design system. Inconsistent UI patterns across features. Each new screen required design decisions that should have already been made.',
      process: 'Full UI audit → design system architecture → token structure → component library → documentation → product application. Ran the system in parallel with active feature design.',
      outcome: 'Complete design system shipped. Three major features launched. Product website redesigned. Reduced design-to-dev handoff friction significantly.',
      learned: 'Systematic design and product integrity are prerequisites for good craft, not alternatives to it.',
    },
  },
  {
    slug: 'roado',
    title: 'Roado',
    role: 'UI/UX Designer',
    year: '2021–2022',
    tags: ['Fleet Management', 'B2B', 'Mobile'],
    feeling: {
      hook: 'My first job. We worked weekends helping move oxygen cylinders during the pandemic.',
      body: "That was the product, that was the problem, that was the user. Every single day I didn't know something I didn't know I didn't know.",
      context: 'Roado is a fleet management platform connecting industries with transporters. During my time, the product was actively used for logistics coordination including medical supply chains.',
      problem: "Two very different user types — industries needing to dispatch freight, and transporters managing vehicles and drivers — needed a seamless connection with minimal friction on both ends.",
      process: "Learned by doing. Wireframes, prototypes, mockups across both user flows. Heavy research. Made mistakes quickly and fixed them faster.",
      outcome: 'Shipped across industry and transporter-side flows. Contributed to research and strategy for new modules. Steep learning curve, fast growth.',
      learned: "The hardest part of being a first-year designer is not knowing what you don't know. The only fix is to keep going.",
    },
    thinking: {
      hook: 'First design role. Full design execution across two user types — industries and transporters.',
      body: 'Wireframes, prototypes, and mockups across both user flows. Contributed to research and strategy for new modules. Mobile-first.',
      context: 'Fleet management and logistics SaaS. Two primary user types: industries (freight dispatchers) and transporters (vehicle and driver managers).',
      problem: "Designing for two completely different mental models within one product. What makes sense to a dispatcher is often opaque to a transporter and vice versa.",
      process: 'User research across both types. Parallel flows. Continuous iteration. Heavy stakeholder collaboration to balance competing needs.',
      outcome: 'Shipped across industry and transporter flows. Built foundational understanding of B2B mobile product design.',
      learned: "B2B product design requires depth in the user's domain, not just the user's screen.",
    },
  },
]

export const getProject = (slug) => projects.find(p => p.slug === slug)

export const getAdjacentProjects = (slug) => {
  const idx = projects.findIndex(p => p.slug === slug)
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  }
}

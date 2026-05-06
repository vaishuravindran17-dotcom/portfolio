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
    title: 'Spiti Connect · AI · Screen Recorder',
    company: 'Spiti',
    role: 'Product Designer',
    year: '2022–2023',
    tags: ['Async Video', 'B2B', 'Design System'],
    sections: [
      {
        label: 'Goal',
        feeling: "I joined with nothing. No design language, no system, no history. Just a product that needed to become something people could trust. Every colour, every font, every component was a decision I got to make.",
        thinking: "Joining as the founding and sole designer, I was responsible for building Spiti's design foundation from the ground up. Crafting the design system, redesigning the product across web and mobile, and shipping three major features: Spiti Connect, AI-powered content tools, and a native screen recorder.",
      },
      {
        label: 'Role',
        feeling: "Everything. Which sounds like a lot and it was. But also, it was mine.",
        thinking: "Sole designer across the entire product surface. Design system, web and mobile UI, marketing website, social collaterals, and end-to-end feature design from concept to shipped.",
      },
      {
        label: 'Design System',
        feeling: "The best part of starting from zero is that every decision is yours. I picked the colours, the fonts, the spacing, the components and made them detailed enough that designing a new screen took ten minutes. When the team started using it without asking me how, I knew it had become a language, not just a file.",
        thinking: "Built entirely from scratch, the design system became Spiti's shared visual language. With a component library detailed enough to reduce new screen design to under ten minutes, it gave the team the speed to ship without compromising consistency.",
      },
      {
        label: 'Spiti Connect',
        media: { type: 'video', src: '/Spiti_connect_video.mp4' },
        feeling: "Share is easy. Connect is different. Spiti Connect let teams share entire playlists across workspaces. Engage privately with each team, generate leads, share demos, onboarding videos, tech talks. The hardest part was designing the connection flow itself. How two workspaces come together without it feeling complicated or risky.",
        thinking: "Spiti Connect enabled teams to share entire playlists across workspaces, keeping each team relationship private, contextual, and manageable. Designed across three deliberate states: Connect, Active, and Invited. The feature made cross-team collaboration feel controlled, not chaotic. The core challenge was crafting a connection flow that felt secure and clear the moment two workspaces came together.",
      },
      {
        label: 'AI Summary · AI Description',
        media: { type: 'video', src: '/Ai_summary_website_video.mp4' },
        feeling: "Nobody wants to watch a 45-minute video to find three things. We built two ways to get at what matters. A summary of what happened, and a longer description if you need the detail. The hardest thing wasn't the features. It was making the AI's response feel like something a person wrote. This was early LLMs. No set patterns for how AI should sound, no design patterns for how it should look. We figured it out as we went.",
        thinking: "At a time when LLMs had no established design patterns, we shipped two distinct AI content tools. A concise summary and a detailed description, each serving a different way of consuming the same video. The central design challenge was making AI-generated output feel authored and trustworthy, optimising responses across vastly different video formats and lengths.",
      },
      {
        label: 'AI Action Items',
        media: { type: 'placeholder', label: 'Visual coming' },
        feeling: "If the summary tells you what happened, action items tell you what to do next. A natural extension. Once you can summarise a video, extracting what needs to happen after it is the obvious next step. The hard part was getting the AI to know the difference between a task and a talking point.",
        thinking: "Designed as a natural extension of the AI content suite, AI Action Items extracted a structured list of next steps directly from video content, turning passive watching into active follow-through. Optimising the AI's ability to distinguish actionable tasks from general discussion, across varied video types, was the defining design and engineering challenge.",
      },
      {
        label: 'Screen Recorder',
        media: { type: 'video', src: '/SSR_launch_website_final.mp4' },
        feeling: "People were recording elsewhere and coming back to upload. That's a broken workflow. It means the product isn't where the work is. We fixed that. Screen only or screen and camera, audio input, video source, go. The challenge was keeping it simple. There were so many options. The wrong call was to show all of them.",
        thinking: "Designed to close the loop between creation and storage, the Spiti Screen Recorder brought recording natively into the product, eliminating the need for third-party tools entirely. Offering two recording formats, flexible audio and video source selection, and a live camera preview, the challenge was restraint. A feature with many options that needed to feel like it had only the ones that mattered.",
      },
      {
        label: 'What I Learned',
        feeling: "Spiti was eventually shut down. Lack of funding, not enough marketing reach. We tracked everything. Video recordings of users, every interaction, every drop-off. We were trying our hardest to understand what wasn't working. It still didn't make it. That taught me something no successful product ever could. Understanding your users isn't enough on its own. The product has to reach them first. I think about that a lot.",
        thinking: "Working across the full product lifecycle, from design system to shipped features to eventual shutdown, built an understanding of what it takes beyond design for a product to survive. Strong research and tight execution aren't enough without distribution. That lesson shapes how I think about every product problem I work on now.",
      },
    ],
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

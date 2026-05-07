export const projects = [
  {
    slug: 'carboledger',
    title: 'SecureShare | Decarbonize',
    cover: '/Contribution analysis cover.png',
    company: 'Carboledger',
    role: 'Product Designer',
    year: '2024–Present',
    tags: ['Climate Tech', 'B2B', 'Enterprise'],
    sections: [
      {
        label: 'Goal',
        feeling: "Climate data is complex, domain-specific and deeply consequential. A sustainability manager trying to reduce their product's carbon footprint needs more than a dashboard. They need a tool that can hold the complexity of their decisions without collapsing it into something useless.",
        thinking: "Carboledger's Decarbonize module helps sustainability managers model and reduce Product Carbon Footprint across their supply chain. I was responsible for the full design of the Scenario Builder feature — from research and client conversations to production. Built from scratch, currently live.",
      },
      {
        label: 'Role',
        feeling: "Sole designer. Spoke with clients, understood the domain, ideated, hit walls, found what was actually buildable, and shipped it.",
        thinking: "Sole designer. End to end ownership across research, client interviews, ideation, design and production. Worked directly with sustainability domain experts and MNC clients including Afton Chemicals and Shaw.",
      },
      {
        label: 'SecureShare',
        feeling: "Before any of this analysis means anything, the data has to be trusted. SecureShare is how Carboledger makes that possible. Companies sharing carbon data with suppliers and customers, with full control over who sees what, without needing the other party to even be on Carboledger.",
        thinking: "SecureShare enables companies to securely share carbon data — PCF, LCA, EPD — with supply chain partners. Granular permission controls for view, edit, and share. Reads Excel, PDFs, and custom formats automatically. Works even if the recipient doesn't use Carboledger. Keeps all sustainability data, communication, and updates in one place instead of email and spreadsheets.",
      },
      {
        label: 'What is Decarbonize',
        feeling: "Sustainability managers want to reduce their product's carbon footprint. But switching a raw material to a sustainable alternative costs lakhs. Before they commit, they need to know if it's worth it — across one product, across a customer's entire portfolio, across every product that shares that raw material. That's what this module is for.",
        thinking: "Decarbonize is a carbon reduction module within Carboledger that allows sustainability managers to model the impact of switching raw materials to sustainable alternatives, compare scenarios visually, and assess the portfolio-wide impact of a material change before committing to it.",
      },
      {
        label: 'New Scenario',
        media: { type: 'video', src: '/New scenario final.mp4' },
        feeling: "It starts with a question. What if I replaced this raw material with something more sustainable? The user selects a product, picks a raw material, chooses an alternative. The Sankey diagram shows the entire PCF of the product broken down to its most granular level. Raw materials, transport, production. Every flow visible, every number traceable.",
        thinking: "Users initiate a scenario by selecting a product and choosing a raw material to substitute. The Sankey diagram renders the full Product Carbon Footprint breakdown — raw materials, transport, production and auxiliaries — at a granular level. Three view modes: Sankey, Chart, and Grid, allowing users to consume the same data in the format that works best for them.",
      },
      {
        label: 'Scenario Comparison',
        media: { type: 'video', src: '/Scenario comparison.mp4' },
        feeling: "Once a scenario is created, the real question begins. Is the alternative actually better? The comparison view puts the current product and the new scenario side by side. Same Sankey, same breakdown, same scale. The difference is visible without having to calculate it.",
        thinking: "The scenario comparison surface places the current product PCF and the modelled alternative side by side in Sankey, Chart, and Grid views. Users can see the exact delta in carbon footprint at every level of the supply chain — raw materials, transport, production — enabling an evidence-based decision before any material switch is made.",
      },
      {
        label: 'Charts Comparison',
        media: { type: 'video', src: '/Charts comparison.mp4' },
        feeling: "Not everyone reads a Sankey. Some users need bars, not flows. The chart view takes the same data and makes it readable in a different way. Same comparison, different lens.",
        thinking: "The chart view renders the same scenario comparison data in a bar chart format, offering an alternative consumption mode for users who need to present findings to stakeholders or prefer quantitative comparison over flow visualisation.",
      },
      {
        label: 'Assess Portfolio',
        media: { type: 'video', src: '/Access portfolio.mp4' },
        feeling: "One product is a test. The portfolio assessment is the real decision. If I switch this raw material across every product it touches, across every customer it's associated with, what is the total impact? That's the question this feature answers. And because switching costs lakhs, getting the answer right matters.",
        thinking: "Portfolio assessment extends the scenario beyond a single product. Users select a customer and product group, and the tool calculates the impact of the material substitution across every associated product in that customer's portfolio — showing impacted products, current vs scenario PCF values, and the aggregate carbon reduction potential. Enables a business case to be built before a procurement decision is made.",
      },
      {
        label: 'Save Scenario',
        media: { type: 'video', src: '/Save scenario.mp4' },
        feeling: "After all the modelling, the comparison, the portfolio assessment, you save it. Give it a name. Come back to it. Share it. The work doesn't disappear.",
        thinking: "Scenarios are saved with a user-defined name and persist across sessions. Saved scenarios can be shared with stakeholders, revisited, and used as the basis for future comparisons or portfolio assessments.",
      },
      {
        label: 'Material Finder',
        media: { type: 'video', src: '/Material finder.mp4' },
        feeling: "Before you can build a scenario, you need to know what alternatives exist. That's harder than it sounds. Sustainable certified materials are not easy to find. And even when you find them, their PCF values rarely exist anywhere publicly. So we built a curated pool of certified alternatives ourselves — and for the ones without PCF data, we request it directly from the supplier. The tool does the asking so the sustainability manager doesn't have to.",
        thinking: "Material Finder is a searchable database of certified sustainable material alternatives, filterable by region, industry, category and certification type. Where PCF data for an alternative is unavailable, the platform initiates supplier data requests on behalf of the user — tracking request status across In Progress, Response Received, and Not Found states. The curated pool of certified alternatives represents a significant data asset, built to solve one of the most practical blockers in decarbonisation: finding credible substitutes with verifiable sustainability credentials.",
      },
      {
        label: 'The Design Challenge',
        feeling: "The problem with designing for complex domain-specific data is not a lack of ideas. We had a hundred ideas for every feature. The problem was finding what was actually buildable. What data could be procured. What the system could support. What a sustainability manager could actually use under real conditions. Every good decision here came after understanding ten constraints.",
        thinking: "The core design challenge was not ideation but implementation feasibility. Operating in a specific domain with complex data dependencies meant every design decision had to be validated against what could actually be built, what data could be reliably sourced, and what a sustainability manager could practically use. Narrowing from possibility to practicality was the defining skill this module required.",
      },
    ],
  },
  {
    slug: 'project-2',
    title: 'Project Title',
    company: 'Company',
    role: 'Product Designer',
    year: '2024',
    tags: ['Tag 1', 'Tag 2'],
    sections: [
      {
        label: 'Goal',
        feeling: 'Coming soon.',
        thinking: 'Coming soon.',
      },
    ],
  },
  {
    slug: 'spiti',
    title: 'Spiti Connect · AI · Screen Recorder',
    cover: '/Spiti cover.png',
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
        media: { type: 'video', src: '/Spiti connect video.mp4' },
        feeling: "Share is easy. Connect is different. Spiti Connect let teams share entire playlists across workspaces. Engage privately with each team, generate leads, share demos, onboarding videos, tech talks. The hardest part was designing the connection flow itself. How two workspaces come together without it feeling complicated or risky.",
        thinking: "Spiti Connect enabled teams to share entire playlists across workspaces, keeping each team relationship private, contextual, and manageable. Designed across three deliberate states: Connect, Active, and Invited. The feature made cross-team collaboration feel controlled, not chaotic. The core challenge was crafting a connection flow that felt secure and clear the moment two workspaces came together.",
      },
      {
        label: 'AI Summary · AI Description',
        media: { type: 'video', src: '/Ai summary website video.mp4' },
        feeling: "Nobody wants to watch a 45-minute video to find three things. We built two ways to get at what matters. A summary of what happened, and a longer description if you need the detail. The hardest thing wasn't the features. It was making the AI's response feel like something a person wrote. This was early LLMs. No set patterns for how AI should sound, no design patterns for how it should look. We figured it out as we went.",
        thinking: "At a time when LLMs had no established design patterns, we shipped two distinct AI content tools. A concise summary and a detailed description, each serving a different way of consuming the same video. The central design challenge was making AI-generated output feel authored and trustworthy, optimising responses across vastly different video formats and lengths.",
      },
      {
        label: 'AI Action Items',
        media: { type: 'video', src: '/Ai action items video.mp4' },
        feeling: "If the summary tells you what happened, action items tell you what to do next. A natural extension. Once you can summarise a video, extracting what needs to happen after it is the obvious next step. The hard part was getting the AI to know the difference between a task and a talking point.",
        thinking: "Designed as a natural extension of the AI content suite, AI Action Items extracted a structured list of next steps directly from video content, turning passive watching into active follow-through. Optimising the AI's ability to distinguish actionable tasks from general discussion, across varied video types, was the defining design and engineering challenge.",
      },
      {
        label: 'Screen Recorder',
        media: { type: 'video', src: '/SSR launch website final (1).mp4' },
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
    title: 'Request for Quotation (RFQ)',
    cover: '/Roado cover.png',
    company: 'Roado',
    role: 'UI/UX Designer',
    year: '2021–2022',
    tags: ['Fleet Management', 'B2B', 'Web', 'Mobile'],
    sections: [
      {
        label: 'Goal',
        feeling: "Roado was my first job. The product was complex, the domain was new, and the users were nothing like anyone I had designed for before. I had to learn an entire industry before I could design anything useful in it.",
        thinking: "Roado is a fleet management platform that helps enterprise companies track freight across web, tablet, and mobile. Separate products for three distinct users: industries, transporters, and drivers. I was responsible for designing core modules serving both the industry and transporter sides of the product.",
      },
      {
        label: 'Role',
        feeling: "First design hire. Which meant working closely with founders, product managers and developers every single day. Later managing another designer. New to everything but never at a distance from the decisions that mattered.",
        thinking: "First design hire. Worked directly with founders, product managers and developers across the full product cycle. Later managed one designer. Responsible for wireframes, prototypes and mockups across industry and transporter user types. Web, tablet and mobile.",
      },
      {
        label: 'Consignment Note',
        media: { type: 'video', src: '/Roado 1.mp4' },
        feeling: "Before I could design anything, I had to understand what a consignment note actually was. What a fleet manager needed to see at 6am. What an overdue delivery looked like to someone whose business depended on it arriving on time.",
        thinking: "The Consignment Note module gave fleet managers a complete view of freight movement. Tracking trucks in real time on a live map, monitoring ongoing, upcoming and completed consignments, managing e-POD, purchase orders and eway bill generation, all from a single surface. The challenge was making dense, time-sensitive logistics data readable and actionable at a glance.",
      },
      {
        label: 'RFQ — Industry Side',
        media: { type: 'video', src: '/RFQ 1.mp4' },
        feeling: "Industries need trucks. They don't always have them. The RFQ flow was about giving them a way to ask, compare, negotiate and decide without the chaos of doing it over calls and spreadsheets.",
        thinking: "The industry-side RFQ module enabled enterprise companies to create requests for quotation, specifying origin, destination, number of trucks required, and timeline. Transporters respond with quotes, industries can counter-quote or approve directly. Designed across states: Live, Closed, Cancelled with clear visual hierarchy for quote comparison, counter-quote management, and time-sensitive approvals. The challenge was designing one coherent flow for two completely different users acting on the same data.",
      },
      {
        label: 'RFQ — Transporter Side',
        media: { type: 'video', src: '/RFQ 2.mp4' },
        feeling: "The transporter sees the same request but needs completely different things from it. They're not deciding. They're responding, competing, waiting. The design had to make that feel fair and clear.",
        thinking: "The transporter-side RFQ module allowed logistics companies to view incoming requests, submit quotes, counter-quote in response to industry counters, and accept or re-quote as negotiations progressed. Designed across states: Live, Archive, Won with actions that changed dynamically based on where a quote stood in the negotiation cycle. Keeping both sides of the same flow coherent without one feeling like an afterthought was the defining challenge.",
      },
      {
        label: 'What I Learned',
        feeling: "Roado taught me that you cannot design for a domain you don't understand. Not really. The domain has to get into you first. And it taught me something else. A small feature, a missing state, an unclear action can cost a real person lakhs. That weight changed how I design.",
        thinking: "Designing across two user types on the same flow, each with opposing goals and different mental models, built a foundation for thinking about complex B2B products. But the defining lesson was understanding consequence. In logistics, a design gap is not just a UX problem. It translates directly into financial penalty for real users. That lesson shapes every decision I make now.",
      },
    ],
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

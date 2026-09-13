// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Images go in /public/images. If a file is missing the site shows a
//  labelled placeholder, so you can add photos whenever you have them.
// ─────────────────────────────────────────────────────────────

export type Field = 'rocketry' | 'drones'

export interface Section {
  slug: string
  name: string
  field: Field
  intro: string
  cover: string
  order: number
}

export interface Project {
  slug: string
  title: string
  summary: string
  section: string      // Section slug
  field: Field
  date: string         // ISO date — controls "latest" ordering
  status: 'Flown' | 'Tested' | 'Complete' | 'In development'
  role?: string
  cover: string
  gallery?: string[]
  body: string[]
  tools?: string[]
  featured?: boolean   // exactly one project should be true
}

export const site = {
  name: 'William Kruse',
  wordmark: 'WILLIAM KRUSE',
  fields: 'Hybrid rocketry · Unmanned flight',
  heroLine: 'Aerospace engineering student building propulsion systems and rugged aircraft for work beyond the runway.',
  heroImage: '/images/hero.jpg',
  heroImageLabel: 'Hardware photo — static fire or flight',
  email: 'will.iamkruse17@gmail.com',
  linkedin: 'https://www.linkedin.com/in/william-kruse-aeroeng/',
  github: 'https://github.com/Billiaam',
  domain: 'williamkruse.ca',
  resumePdf: '/resume.pdf',
  resumePreview: '/images/resume-page-1.png',
  resumeUpdated: 'September 2026',
  portrait: '/images/portrait.jpg',
  selectedWorkTitle: 'Built for the test stand and the field.',
  lookingFor: 'Seeking a summer 2027 co-op in propulsion, testing, or unmanned systems.',
  about: [
    "I'm William Kruse, an aerospace engineering student at Carleton University in Ottawa. My work spans hybrid rocket propulsion and unmanned flight.",
    "I lead the propulsion team in my university's rocketry group, working on motors, fuel, injectors, static-fire testing, and flight.",
    "I'm also a licensed drone pilot and FPV builder. I'm working toward rugged unmanned aircraft for conservation and scientific work in harsh environments.",
  ],
  fieldIntro: {
    rocketry: 'Hybrid propulsion, test-stand development, and the work that turns hardware into flight.',
    drones: 'Simulation, FPV builds, and unmanned aircraft for conservation and scientific work in demanding environments.',
  } as Record<Field, string>,
}

export const sections: Section[] = [
  {
    slug: 'cu-inspace',
    name: 'CU InSpace',
    field: 'rocketry',
    intro: "Carleton's student rocketry team, building and validating flight-ready systems.",
    cover: '/images/sections/cu-inspace.jpg',
    order: 1,
  },
  {
    slug: 'tripoli-certification',
    name: 'Tripoli L1/L2 Certification',
    field: 'rocketry',
    intro: 'Certification flight work focused on safe, repeatable launch operations.',
    cover: '/images/sections/tripoli.jpg',
    order: 2,
  },
  {
    slug: 'drone-simulation-training',
    name: 'Drone Simulation Training',
    field: 'drones',
    intro: 'Flight simulation and systems practice for controlled unmanned operations.',
    cover: '/images/sections/drone-sim.jpg',
    order: 1,
  },
]

export const projects: Project[] = [
  {
    slug: 'hybrid-motor-development',
    title: 'Hybrid Motor Development',
    summary: 'Leading the design, build, and static-fire validation of a student hybrid rocket motor.',
    section: 'cu-inspace',
    field: 'rocketry',
    date: '2026-08-01',
    status: 'In development',
    role: 'Propulsion Lead',
    cover: '/images/projects/hybrid-motor-development.jpg',
    gallery: [
      '/images/projects/hybrid-motor-development-1.jpg',
      '/images/projects/hybrid-motor-development-2.jpg',
      '/images/projects/hybrid-motor-development-3.jpg',
    ],
    body: [
      'EDIT: What the motor is, what you own on it, and what the static-fire campaign showed.',
      'EDIT: What went wrong, what you changed, and what is next.',
    ],
    tools: ['SolidWorks', 'MATLAB', 'Python'],
    featured: true,
  },
  {
    slug: 'static-fire-instrumentation',
    title: 'Static-Fire Instrumentation',
    summary: 'A practical test-data workflow for measuring real motor performance.',
    section: 'cu-inspace',
    field: 'rocketry',
    date: '2026-07-15',
    status: 'Tested',
    cover: '/images/projects/static-fire-instrumentation.jpg',
    body: ['EDIT: sensors, DAQ, sample rate, what the data revealed.'],
    tools: ['Python'],
  },
  {
    slug: 'injector-test-campaign',
    title: 'Injector Test Campaign',
    summary: 'Building evidence for repeatable oxidizer flow and ignition performance.',
    section: 'cu-inspace',
    field: 'rocketry',
    date: '2026-06-20',
    status: 'Tested',
    cover: '/images/projects/injector-test-campaign.jpg',
    body: ['EDIT: injector type, cold-flow results, iteration count.'],
    tools: ['SolidWorks', 'MATLAB'],
  },
  {
    slug: 'flight-operations',
    title: 'Flight Operations',
    summary: 'Preparing hardware and field procedures for reliable flight-day execution.',
    section: 'tripoli-certification',
    field: 'rocketry',
    date: '2026-05-10',
    status: 'In development',
    cover: '/images/projects/flight-operations.jpg',
    body: ['EDIT: certification flights, checklists, what each flight taught you.'],
  },
  {
    slug: 'rugged-uav-concept',
    title: 'Rugged UAV Concept',
    summary: 'Unmanned aircraft concepts for conservation and scientific work in harsh environments.',
    section: 'drone-simulation-training',
    field: 'drones',
    date: '2027-01-01',
    status: 'In development',
    cover: '/images/projects/rugged-uav-concept.jpg',
    body: ['EDIT: requirements, what exists today, what does not yet.'],
  },
  {
    slug: 'long-range-fpv-platform',
    title: 'Long-Range FPV Platform',
    summary: 'A field-repairable FPV build for remote flight and systems iteration.',
    section: 'drone-simulation-training',
    field: 'drones',
    date: '2026-08-15',
    status: 'In development',
    cover: '/images/projects/long-range-fpv-platform.jpg',
    body: ['EDIT: frame, stack, tuning changes, hours flown.'],
    tools: ['Betaflight'],
  },
]

// ── helpers ───────────────────────────────────────────────────
export const byDateDesc = (a: Project, b: Project) => b.date.localeCompare(a.date)
export const fieldLabel: Record<Field, string> = { rocketry: 'Rocketry', drones: 'Drones' }
export const getSection = (slug: string) => sections.find((s) => s.slug === slug)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProject = () => projects.find((p) => p.featured) ?? [...projects].sort(byDateDesc)[0]
export const latest = (n: number, field?: Field) =>
  projects.filter((p) => !field || p.field === field).sort(byDateDesc).slice(0, n)
export const inSection = (slug: string) => projects.filter((p) => p.section === slug).sort(byDateDesc)
export const sectionsFor = (field: Field) => sections.filter((s) => s.field === field).sort((a, b) => a.order - b.order)

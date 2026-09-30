// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//
//  • Links inside any text: write [Name](https://url) and it renders as a link.
//  • Images go in /public/images. Missing files show a labelled placeholder.
//  • Adding a project: copy an entry, give it a new slug, set its section,
//    group (optional), date, and status. It appears everywhere automatically.
//  • Lineage: projects that share a `lineage` id are linked "previous / next"
//    on their project pages, ordered by `generation`.
// ─────────────────────────────────────────────────────────────

export type Field = 'rocketry' | 'drones'

export interface Spec { label: string; value: string }
export interface LinkRef { label: string; url: string }

export interface Group {
  id: string
  kicker: string          // e.g. "2026" or "Upcoming"
  title: string           // e.g. "Iced Cappogee (CR26H)"
  intro: string
}

export interface Section {
  slug: string
  name: string
  field: Field
  intro: string           // one line, used on cards
  description?: string    // longer, shown on the section page
  cover: string
  order: number
  groups?: Group[]        // shown top to bottom in this order
}

export interface Project {
  slug: string
  title: string
  summary: string
  section: string
  group?: string
  field: Field
  date: string            // ISO date — controls "latest" ordering
  status: string          // Flown · Tested · Complete · In development · Early design · Awaiting test · In build · Upcoming
  role?: string
  cover: string
  gallery?: string[]
  specs?: Spec[]
  body: string[]
  tools?: string[]
  links?: LinkRef[]
  lineage?: string
  generation?: number
  featured?: boolean      // exactly one project should be true
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
  x: 'https://x.com/Bill_iam17',
  domain: 'williamkruse.ca',
  resumePdf: '/resume.pdf',
  resumePreview: '/images/resume-page-1.png',
  resumeUpdated: 'September 2026',
  portrait: '/images/portrait.jpg',
  selectedWorkTitle: 'Built for the test stand and the field.',
  lookingFor: 'Seeking co-op placements in propulsion, testing, or unmanned systems — 4 or 12 months.',
  about: [
    "I'm an aerospace engineering student at Carleton University in Ottawa, originally from Calgary. My work sits in two fields: hybrid rocket propulsion and unmanned flight.",
    "I lead propulsion at CU InSpace. In 2026 our rocket Iced Cappogee reached 39,279 ft, the highest amateur hybrid flight in Canada. This year I'm moving the team to static-cast fuel grains and scaling our motor to P-class, while building LUNARE, my own Tripoli certification rocket, and the flight computer that will fly on it.",
    "Drones are where I'm headed. I hold a Transport Canada RPAS certificate, train in simulation every week, and contributed to Carleton's award-winning entry in the VFS Student Design Competition. The goal is rugged unmanned aircraft for conservation and science in places conventional platforms can't reach, and the flight computer is the first piece I'm building toward it.",
    'Outside of engineering: music, creativity, and time outdoors.',
  ],
  fieldIntro: {
    rocketry: "Hybrid propulsion, test stands, and everything it takes to turn hardware into a flight.",
    drones: "I'm certified to fly and training toward building. Long term, I want to build rugged unmanned aircraft for conservation and science in places conventional platforms can't go. My first quad build is next.",
  } as Record<Field, string>,
}

// People linked in project text
const P = {
  zakary: '[Zakary Harrison](https://www.linkedin.com/in/zakaryharrison/)',
  george: '[George Liu](https://www.linkedin.com/in/georgeliux/)',
  mitchell: '[Mitchell Pasarelli](https://www.linkedin.com/in/mlp118/)',
  laliberte: '[Prof. Jeremy Laliberte](https://www.linkedin.com/in/jeremylaliberte/)',
  chen: '[William Chen](https://www.linkedin.com/in/william-chen-2b432521b/)',
}

export const sections: Section[] = [
  {
    slug: 'cu-inspace',
    name: 'CU InSpace',
    field: 'rocketry',
    intro: "Carleton's student rocketry team. We design, build, and fly SRAD hybrids.",
    description: "Carleton's student rocketry team. We design, build, and fly SRAD hybrid rockets at Launch Canada and IREC. I joined propulsion in 2024 and have led it since 2025. This year we're flying a solid-to-solid two-stage at IREC and a P-class hybrid at Launch Canada, and starting a two-year design cycle for an 8-inch Q-class motor.",
    cover: '/images/sections/cu-inspace.jpg',
    order: 1,
    groups: [
      {
        id: 'q-class',
        kicker: 'Upcoming',
        title: '8-inch Q-class hybrid',
        intro: "What comes after the P-class. A two-year design cycle, starting this winter.",
      },
      {
        id: 'p-class',
        kicker: '2027',
        title: 'P-class hybrid · Launch Canada 2027',
        intro: "Iced Cappogee, but bigger. We're stretching the oxidizer tank by two feet and widening the chamber by half an inch, which puts the motor into P-class. The plan is to lock the design by November–December, static fire as much as we can, and fly at Launch Canada 2027. I'm overseeing the motor and running four projects myself: static casting, the B⁵C spin caster, and the injector and mixing plate upscales.",
      },
      {
        id: 'iced-cappogee',
        kicker: '2026',
        title: 'Iced Cappogee (CR26H)',
        intro: "The highest amateur hybrid ever flown in Canada. 39,279 ft, 2nd in the Advanced category at Launch Canada 2026. Iced Cappogee was 11.5 ft tall and flew on SB-3, our third-generation nitrous/paraffin motor: 35.2 kN·s of total impulse, 204.7 s Isp, and an 8.3 s liquid burn. It was my first year as Propulsion Lead. I set the motor's technical direction, ran the static-fire campaign, owned the mixing plate, fuel formulation, and casting environment, and helped size the injector.",
      },
      {
        id: 'quarter-pounder',
        kicker: '2025',
        title: 'Quarter Pounder (CR25H)',
        intro: "Carleton's first hybrid. Quarter Pounder was a 14.5 ft, 110 lb rocket on a nitrous/paraffin O-class motor. Our first-ever static fire, at Reaction Dynamics, beat predictions with 5.7 kN peak thrust. Late in the cycle we had to switch to a UC valve, because we were short on time and Launch Canada had concerns about our original valve design. We proved it on a static fire a few weeks before competition, and we flew. The airframe didn't make it: the main body tube shredded in flight. I was a general member of the propulsion team that year. I co-designed the motor, designed the mixing plate, helped build and run fuel casting and the igniters, and helped conduct cold flows and leak tests.",
      },
    ],
  },
  {
    slug: 'tripoli-certification',
    name: 'Tripoli L1/L2 Certification',
    field: 'rocketry',
    intro: "One rocket, both cert flights, and a flight computer I'm building from scratch.",
    description: "My personal high-power rocketry program. One rocket, both certification flights, and a flight computer I'm building from scratch. This one's all mine, separate from CU InSpace.",
    cover: '/images/sections/tripoli.jpg',
    order: 2,
  },
  {
    slug: 'unmanned-vtol',
    name: 'Unmanned & VTOL Aircraft',
    field: 'drones',
    intro: "Where I've worked on vertical flight at the aircraft level.",
    cover: '/images/sections/unmanned-vtol.jpg',
    order: 1,
  },
  {
    slug: 'flight-training',
    name: 'Flight Training',
    field: 'drones',
    intro: "Getting certified, logging sim hours, and working toward my first build.",
    cover: '/images/sections/flight-training.jpg',
    order: 2,
  },
]

export const projects: Project[] = [
  // ── CU InSpace · Upcoming ─────────────────────────────────
  {
    slug: 'q-class-hybrid',
    title: '8-inch Q-class hybrid',
    summary: "The lightest Q-class hybrid we can build, with a thrust-to-weight of at least 10.",
    section: 'cu-inspace',
    group: 'q-class',
    field: 'rocketry',
    date: '2027-09-01',
    status: 'Upcoming',
    cover: '/images/projects/q-class-hybrid.jpg',
    body: [
      "Once the P-class design locks this winter, we start on the 8-inch. It's a two-year cycle. The goal is a motor ready to static fire by the end of summer 2027, then flight at Launch Canada after that.",
      "At this size, spin casting a grain isn't safe anymore. That's the main reason I'm developing static casting now.",
    ],
  },

  // ── CU InSpace · P-class (2027) ───────────────────────────
  {
    slug: 'static-casting',
    title: 'Static casting',
    summary: "Moving the team off spin casting entirely. As far as we know, no North American student team does this.",
    section: 'cu-inspace',
    group: 'p-class',
    field: 'rocketry',
    date: '2026-09-20',
    status: 'Early design',
    role: 'Project lead',
    cover: '/images/projects/static-casting.jpg',
    body: [
      "With spin casting, our grains only got six hours to cool, because someone had to stand with the machine the whole time. That's too fast for EVA. Cool it that quickly and it cracks; the literature points to a 20–24 hour window instead. Static casting lets a grain cool on its own for as long as it needs. It's also the only safe way to get to the 8-inch motor, where spinning a grain that big is unstable.",
      "Here's the plan so far. The mould uses our flight phenolic liner as the outer wall, sleeved in stainless steel, around a carbon-steel mandrel that forms the port. Everything gets preheated to 90 °C and coated with mould release. On top sits a detachable stainless riser wrapped in ceramic blanket, with a variable heat lamp above it keeping the top molten. That way the grain solidifies bottom-up and inside-out, and the riser feeds the shrinkage. After pouring, the whole mould goes under vacuum to pull out voids, then cools radially for about 20 hours. It's still early, but that's the direction.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 4,
  },
  {
    slug: 'b5c-spin-caster',
    title: 'B⁵C spin caster',
    summary: "A ground-up spin caster rebuild. It's our backup if static casting fails, and it's sized for the next decade of motors.",
    section: 'cu-inspace',
    group: 'p-class',
    field: 'rocketry',
    date: '2026-09-15',
    status: 'Early design',
    role: 'Project lead',
    cover: '/images/projects/b5c-spin-caster.jpg',
    body: [
      "BBBC 2.0 (a.k.a. the BBBBC) hit its limits. It vibrated and wasn't stable, the control box wiring was worn out, the PWM speed control only did full-on or full-off, the magnetic tachometer stopped working, and it couldn't cast anything bigger than 5\" in diameter.",
      "B⁵C is a clean-sheet redesign. It'll cast grains up to 10\" in diameter, with real speed control and feedback. If static casting works, we still have a proven second method. If it doesn't, we're not stuck.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 3,
  },
  {
    slug: 'injector-upscale',
    title: 'Injector upscale',
    summary: "Scaling up the SB-3 showerhead injector for the P-class motor, with CFD to make sure the flow chokes where it should.",
    section: 'cu-inspace',
    group: 'p-class',
    field: 'rocketry',
    date: '2026-09-10',
    status: 'In development',
    role: 'Design lead',
    cover: '/images/projects/injector-upscale.jpg',
    body: [
      "The bigger motor needs more oxidizer flow through the same injector design. I'm resizing the plate from last year's cold-flow data and running CFD in STAR-CCM+ to confirm the flow chokes at the injector. Choked flow there isolates the feed system from pressure oscillations in the chamber. Then we cold flow the real hardware.",
    ],
    tools: ['STAR-CCM+', 'SolidWorks'],
    lineage: 'injector',
    generation: 2,
  },
  {
    slug: 'mixing-plate-gen-3',
    title: 'Mixing plate, generation three',
    summary: "Scaling up the plate that survived, and using CFD to make sure it never chokes.",
    section: 'cu-inspace',
    group: 'p-class',
    field: 'rocketry',
    date: '2026-09-10',
    status: 'In development',
    role: 'Design lead',
    cover: '/images/projects/mixing-plate-gen-3.jpg',
    body: [
      "Generation two made it through the full burn with a coated four-port design and about three times the throat area in open flow. A bigger chamber changes that ratio. So I'm running CFD in STAR-CCM+ to confirm the plate can't become a second throat in the middle of the chamber, because that's exactly how you get instabilities and pressures that can cause a CATO.",
    ],
    tools: ['STAR-CCM+', 'SolidWorks'],
    lineage: 'mixing-plate',
    generation: 3,
  },
  {
    slug: 'combustion-instability-54hz',
    title: '54 Hz combustion instability',
    summary: "A clean 54 Hz oscillation in Iced Cappogee's chamber pressure. Eight candidate mechanisms tested, one leading hypothesis.",
    section: 'cu-inspace',
    group: 'p-class',
    field: 'rocketry',
    date: '2026-09-05',
    status: 'Awaiting test',
    cover: '/images/projects/combustion-instability-54hz.jpg',
    specs: [
      { label: 'Static fire', value: '54 Hz' },
      { label: 'In flight', value: '51 Hz' },
      { label: 'Harmonic', value: '~108 Hz' },
      { label: 'Cold flows', value: 'Absent' },
    ],
    body: [
      "Our static fire data showed a sharp 54 Hz peak with a harmonic around 108 Hz, flat across all three thirds of the burn. In flight it read 51 Hz, which fits a Doppler shift as the rocket moved away. It never showed up in either of our two cold flows, with real nitrous running through the flight injector and valve. So whatever it is, it needs combustion.",
      `With help from ${P.zakary}, ${P.george}, and ${P.mitchell} from Launch Canada, I went through the candidates by hand: longitudinal acoustics (around 730 Hz), Helmholtz modes (over 1 kHz), a feed-line quarter-wave, poppet flutter, vortex shedding (around 12 kHz), and thermal-lag low-frequency instability. None of them fit. The leading hypothesis is a bulk (L*) mode. As the port opens, L* grows, but c* rises too as the mixture shifts from lean toward rich, which keeps the frequency roughly constant.`,
      "We don't have the budget for a dedicated test, so the P-class upscale is the experiment. Grain length stays the same while the chamber gets bigger, and the next static fires will show us which way the frequency moves.",
    ],
    tools: ['Python', 'MATLAB'],
  },

  // ── CU InSpace · Iced Cappogee (2026) ─────────────────────
  {
    slug: 'iced-cappogee',
    title: 'Iced Cappogee',
    summary: "Three static fires, a dead ground station, and a nose cone that wouldn't come off. Then a Canadian record.",
    section: 'cu-inspace',
    group: 'iced-cappogee',
    field: 'rocketry',
    date: '2026-08-20',
    status: 'Flown',
    role: 'Propulsion Lead',
    featured: true,
    cover: '/images/projects/iced-cappogee.jpg',
    specs: [
      { label: 'Apogee', value: '39,279 ft' },
      { label: 'Result', value: '2nd, Advanced' },
      { label: 'Motor', value: 'SB-3 N₂O / paraffin' },
      { label: 'Role', value: 'Propulsion Lead' },
    ],
    body: [
      "We needed static-fire data just to be allowed to fly. Our first attempt at Morrison's Quarry died when wind vibrated a solder joint loose and the fire valve never opened. On the second, we burned a hole through the chamber wall at the injector plate. An old vent cut-out had left a gap that wasn't protected, and a lean, hot burn made it worse. We machined a new injector plate without the cut-out, sealed it properly, and the third fire ran full duration. We came really close to not flying.",
      "Then at competition, two more things broke. In pre-flight testing, the nose cone wouldn't separate. Our best theory was gas leaking out through the arming-switch access holes. We tested, added powder, tested again, and landed on a 5 g charge with a 7 g backup, which I helped build. Then our EGSE died. The MOSFETs kept frying and taking the Picos with them, which meant no valve control and no launch. The McGill Rocket Team handed us their spare MOSFETs, we rebuilt the box overnight, and we flew the next day. Recovery was nominal on our reefed main.",
    ],
  },
  {
    slug: 'showerhead-injector-sb3',
    title: 'Showerhead injector, SB-3',
    summary: "Our first flight-proven showerhead injector: 94 holes, sized from cold-flow data.",
    section: 'cu-inspace',
    group: 'iced-cappogee',
    field: 'rocketry',
    date: '2026-07-15',
    status: 'Flown',
    role: 'Contributor',
    cover: '/images/projects/showerhead-injector-sb3.jpg',
    specs: [
      { label: 'Holes', value: '94 × 1.51 mm' },
      { label: 'L/D', value: '15' },
    ],
    body: [
      "SB-3's injector had 94 holes, 1.51 mm each, at an L/D of 15. It built on the showerhead design we first tested the year before. The longer holes improved atomization and two-phase flow, which means better engine efficiency.",
      "We cold-flowed a 60-hole plate to measure the discharge coefficient and look at the spray. I worked with our injector lead to turn that coefficient into the hole count we needed for our target O/F. This year I'm taking over the design and scaling it up.",
    ],
    lineage: 'injector',
    generation: 1,
  },
  {
    slug: 'mixing-plate-gen-2',
    title: 'Mixing plate, generation two',
    summary: "Last year's test plate came out of the chamber in pieces. This one came back charred, but in one piece.",
    section: 'cu-inspace',
    group: 'iced-cappogee',
    field: 'rocketry',
    date: '2026-08-10',
    status: 'Flown',
    role: 'Design lead',
    cover: '/images/projects/mixing-plate-gen-2.jpg',
    body: [
      "The goal this year was simple: make the plate last the entire burn. I stuck with stainless steel purely for survivability. If the plate can't stay in the flow, none of the mixing it does matters. SOAR shared their ceramic coating procedure with me, and I refined it into my own process: a base coat of ITC 213 for oxidation and erosion resistance, under ITC 100 HT, which is rated to 5000 °F.",
      "I went through eight-port and six-port versions before a conversation with Peter Tarle got me to four equal-area ports. Simple is better. Fewer features, fewer edges to erode, fewer things to get wrong. I sized the total port area at more than twice the nozzle throat, so the gas can't choke at the plate and turn it into a second throat in the middle of the chamber. After flight, the spokes showed some regression. But it survived the whole burn. That's the win.",
    ],
    tools: ['SolidWorks'],
    lineage: 'mixing-plate',
    generation: 2,
  },
  {
    slug: 'eva-fuel-formulation',
    title: 'EVA fuel formulation',
    summary: "Slowing down paraffin's regression rate without making the grain any bigger.",
    section: 'cu-inspace',
    group: 'iced-cappogee',
    field: 'rocketry',
    date: '2026-07-01',
    status: 'Flown',
    role: 'Design lead',
    cover: '/images/projects/eva-fuel-formulation.jpg',
    specs: [
      { label: 'Paraffin', value: '84%' },
      { label: 'EVA', value: '12%' },
      { label: 'Carbon black', value: '4%' },
    ],
    body: [
      "Last year, our rocket ran out of fuel before it ran out of oxidizer. Early sims for SB-3 showed the same problem: the burnout diameter was bigger than the grain itself. A bigger grain wasn't an option in our chamber, so the fuel had to burn slower. The target was a 20–25% cut in regression rate.",
      "Paraffin burns fast because its melt layer is thin and runny, so the oxidizer rips droplets off the surface. That's called entrainment. After digging through the literature, I landed on EVA. It makes that melt layer more viscous, which cuts entrainment and slows regression. It also makes the grain stronger and more ductile. One additive, two problems solved.",
      "Then I had to actually make it. EVA melts much hotter than paraffin, so I had to find how hot I could push the wax before it started breaking down. Even then, the pellets clumped and wouldn't dissolve. The fix ended up being a paint mixer on a drill. The final blend was 84% paraffin, 12% EVA, and 4% carbon black, and it hit our regression targets in flight.",
    ],
  },
  {
    slug: 'bbbc-2-casting-environment',
    title: 'BBBC 2.0: casting environment',
    summary: "A temperature-controlled casting setup I built for under $100. Cracked grains stopped being a mystery.",
    section: 'cu-inspace',
    group: 'iced-cappogee',
    field: 'rocketry',
    date: '2026-06-15',
    status: 'Complete',
    role: 'Design lead',
    cover: '/images/projects/bbbc-2-casting-environment.jpg',
    specs: [
      { label: 'Temperature hold', value: '±1.5 °C outdoors' },
      { label: 'Cost', value: 'Under $100' },
    ],
    body: [
      "Last year we cast grains in a foam box with a heater and no real temperature control. When a grain cracked, we couldn't tell why. On a tight budget, I rebuilt the setup for under $100, some of it out of my own pocket. I redesigned the insulation box to be form-fitting and better sealed, extended the spin caster base with aluminium extrusion to cut vibration, and added an Inkbird controller to switch the heater on and off automatically.",
      "It held ±1.5 °C in outdoor weather and let me run a stepped cooling profile. The real win wasn't just better grains. If a grain cracked, I knew exactly what temperature it had been sitting at, and I could adjust. Failure became data. After a few iterations on the cooling steps, the grains came out clean.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 2,
  },

  // ── CU InSpace · Quarter Pounder (2025) ───────────────────
  {
    slug: 'mixing-plate-gen-1',
    title: 'Mixing plate, generation one',
    summary: "My idea for our first hybrid: a plate that mixes unburned oxidizer and fuel-rich gas before they reach the nozzle.",
    section: 'cu-inspace',
    group: 'quarter-pounder',
    field: 'rocketry',
    date: '2025-06-01',
    status: 'Flown',
    role: 'Designer',
    cover: '/images/projects/mixing-plate-gen-1.jpg',
    body: [
      "In a hybrid, the oxidizer rushes down the port while the fuel vapour stays close to the wall, so a lot of oxidizer leaves the nozzle without ever burning. I designed a mixing plate in SolidWorks to create turbulence in the post-combustion chamber and force those streams together. Better mixing means more complete combustion, which means more performance.",
      "The first test plate was machined from phenolic. It burned through partway into a static fire and took out the retaining ring and graphite nozzle behind it. For flight we switched to 1/2\" 304 stainless, held between two phenolic liners, with RTV insulating the edges and coating the side facing the fuel grain. Making it survive a full burn was still the open problem, and that became my goal for generation two.",
    ],
    tools: ['SolidWorks'],
    lineage: 'mixing-plate',
    generation: 1,
  },
  {
    slug: 'spin-casting-cr25h',
    title: 'Fuel grain spin casting',
    summary: "Building, troubleshooting, and running the spin-casting setup for our first paraffin grains.",
    section: 'cu-inspace',
    group: 'quarter-pounder',
    field: 'rocketry',
    date: '2025-05-01',
    status: 'Flown',
    role: 'Team member',
    cover: '/images/projects/spin-casting-cr25h.jpg',
    body: [
      "Our 16\" grain was paraffin with A-C6A and Vybar for strength and slower regression, plus carbon black to stop heat from radiating deep into the wax and driving runaway regression.",
      "I worked with the team to build and troubleshoot the spin caster, and helped cast the grains. We melted the wax, dissolved the additives at 120 °C, poured into pre-heated liners, and spun them for about six hours in a heated, insulated box to keep them from cracking. That six-hour limit came from how long someone could stand next to the machine. It's the exact problem my static-casting work is solving now.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 1,
  },
  {
    slug: 'igniter-and-procedures',
    title: 'Igniter and test procedures',
    summary: "Manufacturing our composite igniters and writing the procedures to build and verify them.",
    section: 'cu-inspace',
    group: 'quarter-pounder',
    field: 'rocketry',
    date: '2025-04-01',
    status: 'Complete',
    role: 'Team member',
    cover: '/images/projects/igniter-and-procedures.jpg',
    body: [
      "I built our composite igniters, wrote the manufacturing procedure, and made sure each one worked before test day. I also helped conduct our full-scale cold flows and leak tests on the motor and oxidizer system, and co-wrote the cold-flow procedures. Getting both written down made test days safer and more repeatable.",
    ],
  },

  // ── Tripoli L1/L2 ─────────────────────────────────────────
  {
    slug: 'lunare',
    title: 'LUNARE',
    summary: "The fiberglass rocket I'm building to fly both my Tripoli Level 1 and Level 2 certifications.",
    section: 'tripoli-certification',
    field: 'rocketry',
    date: '2026-09-16',
    status: 'In build',
    role: 'Designer and builder',
    cover: '/images/projects/lunare.jpg',
    specs: [
      { label: 'Diameter', value: '3 in' },
      { label: 'Length', value: '44 in' },
      { label: 'L1 · I140W', value: '~2,550 ft (sim)' },
      { label: 'L2 · J270W', value: '~4,990 ft (sim)' },
    ],
    body: [
      "LUNARE is named after the moon wrasse (*Thalassoma lunare*), and it's getting painted in the fish's colours. It's a 3\" fiberglass airframe with dual-split dual deploy. I'll fly an AeroTech I140 for Level 1 and a J270 for Level 2 at URRG. A Blue Jay handles all the deployment events, so my certification never depends on electronics I haven't proven yet.",
      "The design is done in OpenRocket and I've bought nearly every part. Fiberglass and epoxy are next. The cert flights are planned for URRG in May 2028.",
    ],
    tools: ['OpenRocket'],
  },
  {
    slug: 'srad-flight-computer',
    title: 'SRAD flight computer',
    summary: "My own flight computer, from PCB to firmware. It's where my rocketry and drone work meet.",
    section: 'tripoli-certification',
    field: 'rocketry',
    date: '2026-09-01',
    status: 'In development',
    role: 'Designer',
    cover: '/images/projects/srad-flight-computer.jpg',
    body: [
      "Why build my own? Honestly, because it's a lot more fun than flying something off the shelf. But also because I want to actually learn PCB design and embedded C, and those are the same skills I'll need to build a custom drone flight controller.",
      "It logs a full sensor suite: IMU, high-g accelerometer, barometer, magnetometer, and GPS. It streams LoRa GPS so I can find the rocket after landing, and it feeds a 3D flight replay and a live hand-held demo. I'm starting on a Pico 2 / RP2040 and moving to a custom four-layer PCB, with STM32 as the path to a drone FC. It flies next to the Blue Jay as a logger and never fires a charge. First flight is planned for URRG in May 2028.",
    ],
    tools: ['C', 'Altium'],
  },

  // ── Drones · Unmanned & VTOL ──────────────────────────────
  {
    slug: 'vfs-hybrid-tiltrotor',
    title: 'VFS hybrid-electric tiltrotor',
    summary: "Evaluating the fuel cell system for Carleton's first entry in the VFS Student Design Competition: a hybrid-electric version of the Bell/NASA XV-15 tiltrotor.",
    section: 'unmanned-vtol',
    field: 'drones',
    date: '2026-05-25',
    status: 'Complete',
    role: 'Contributor',
    cover: '/images/projects/vfs-hybrid-tiltrotor.jpg',
    specs: [
      { label: 'Result', value: 'Best New Undergraduate Entrant' },
      { label: 'Field', value: '17 proposals, 4 countries' },
    ],
    body: [
      `This year's challenge, sponsored by Leonardo, was to redesign the XV-15 so at least 10% of its mission energy came from electrical sources, without losing one-engine-inoperative capability, autorotation, or the ability to convert between helicopter and airplane mode. Team Ravens, led by ${P.chen}, paired the turboshafts with a hydrogen fuel cell (PEMFC) in a parallel hybrid.`,
      "I came in late as a contributor on the fuel cell system. I sized the fuel cell and the balance-of-plant hardware it needs to run, checked the options against the aircraft's weight, geometry, and mission constraints, and fed the mass and power numbers into the team's aircraft-level trades. Basically: what every added kilogram cost us in hover power and range.",
      `The team won Best New Undergraduate Entrant out of 17 proposals from universities in 4 countries. Supervised by ${P.laliberte}.`,
    ],
    links: [
      { label: 'Executive summary (VFS)', url: 'https://vtol.org/files/dmfile/newentry-undergrad_ug9_execsummary_carletonuniv_ravens_sdc2026.pdf' },
      { label: 'VFS winners announcement', url: 'https://vtol.org/news/press-release-vfs-announces-43rd-2026-student-design-winners-and-releases-44th-2027-sdc-rfp' },
      { label: 'Carleton MAE news', url: 'https://carleton.ca/mae/2026/congrats-to-team-ravens-vfs-student-design-competition-best-new-entrant/' },
    ],
  },

  // ── Drones · Flight Training ──────────────────────────────
  {
    slug: 'first-quad-build',
    title: 'First quad build',
    summary: "A self-built cinewhoop or 5-inch. My first step from flying drones to building them.",
    section: 'flight-training',
    field: 'drones',
    date: '2027-06-01',
    status: 'Upcoming',
    cover: '/images/projects/first-quad-build.jpg',
    body: [
      "Timing depends on co-op. The flight computer work feeds right into it.",
    ],
  },
  {
    slug: 'liftoff-training',
    title: 'Liftoff and whoop flying',
    summary: "Building stick time in the sim before building my first quad.",
    section: 'flight-training',
    field: 'drones',
    date: '2026-09-25',
    status: 'In development',
    cover: '/images/projects/liftoff-training.jpg',
    body: [
      "I fly Liftoff three to four hours a week, acro from day one, plus freestyle. When I can get out with a spotter, I fly my BetaFPV Air75. It's early days, but it's building the reflexes I'll need for the first real build.",
    ],
    tools: ['Liftoff', 'Betaflight'],
  },
  {
    slug: 'rpas-basic',
    title: 'RPAS Basic certificate',
    summary: "My Transport Canada Basic Operations certificate for remotely piloted aircraft, earned July 2026.",
    section: 'flight-training',
    field: 'drones',
    date: '2026-07-16',
    status: 'Complete',
    cover: '/images/projects/rpas-basic.jpg',
    body: [
      "Certified by Transport Canada to fly remotely piloted aircraft under Basic Operations rules.",
    ],
  },
]

// ── helpers ───────────────────────────────────────────────────
export const fieldLabel: Record<Field, string> = { rocketry: 'Rocketry', drones: 'Drones' }
export const isUpcoming = (p: Project) => p.status === 'Upcoming'
export const byDateDesc = (a: Project, b: Project) => b.date.localeCompare(a.date)
export const getSection = (slug: string) => sections.find((s) => s.slug === slug)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const featuredProject = () => projects.find((p) => p.featured) ?? [...projects].filter((p) => !isUpcoming(p)).sort(byDateDesc)[0]
export const latest = (n: number, field?: Field) =>
  projects.filter((p) => !isUpcoming(p) && (!field || p.field === field)).sort(byDateDesc).slice(0, n)
export const upcoming = (field?: Field) => projects.filter((p) => isUpcoming(p) && (!field || p.field === field)).sort(byDateDesc)
export const inSection = (slug: string) => projects.filter((p) => p.section === slug).sort(byDateDesc)
export const sectionsFor = (field: Field) => sections.filter((s) => s.field === field).sort((a, b) => a.order - b.order)

/** Home grid: newest work, excluding the featured project and upcoming items,
 *  with at least `minEach` from each field so both show up. */
export const homeWork = (n = 6, minEach = 2) => {
  const f = featuredProject()
  const pool = projects.filter((p) => !isUpcoming(p) && p.slug !== f.slug).sort(byDateDesc)
  const pick: Project[] = []
  ;(['rocketry', 'drones'] as Field[]).forEach((fd) => pool.filter((p) => p.field === fd).slice(0, minEach).forEach((p) => pick.push(p)))
  for (const p of pool) { if (pick.length >= n) break; if (!pick.includes(p)) pick.push(p) }
  return pick.slice(0, n).sort(byDateDesc)
}

/** Previous / next entries in a project's lineage. */
export const lineageOf = (p: Project) => {
  if (!p.lineage || p.generation === undefined) return { prev: undefined, next: undefined }
  const line = projects.filter((x) => x.lineage === p.lineage && x.generation !== undefined).sort((a, b) => a.generation! - b.generation!)
  const i = line.findIndex((x) => x.slug === p.slug)
  return { prev: line[i - 1], next: line[i + 1] }
}

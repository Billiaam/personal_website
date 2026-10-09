// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//
//  Formatting inside any text:
//    [Name](https://url)   → link
//    **bold**              → bold (used for the → lead-ins)
//    *italic*              → italic
//
//  Structure:  Field (Rocketry / Drones)
//                └ Section (CU InSpace, Tripoli, …)
//                    └ Vehicle (optional — rockets inside CU InSpace)
//                        └ Project
//
//  Adding a project: copy an entry, give it a new slug, set its section,
//  vehicle (if any), date, and status. It shows up everywhere automatically.
//  Projects sharing a `lineage` id get "previous / next version" links.
//  Missing images show a labelled placeholder.
// ─────────────────────────────────────────────────────────────

export type Field = 'rocketry' | 'drones'
export interface Spec { label: string; value: string }
export interface LinkRef { label: string; url: string }

export interface Vehicle {
  slug: string
  name: string
  kicker: string          // "2026", "Upcoming", …
  status: string
  summary: string
  cover: string
  specs?: Spec[]
  body: string[]
  order: number           // lower = higher on the page
}

export interface Section {
  slug: string
  name: string
  field: Field
  intro: string           // one line, used on cards
  description?: string    // longer, shown on the section page
  body?: string[]         // optional paragraphs shown below the banner
  cover: string
  order: number
  vehicles?: Vehicle[]
}

export interface Project {
  slug: string
  title: string
  summary: string
  section: string
  vehicle?: string
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
}

export const site = {
  name: 'William Kruse',
  wordmark: 'WILLIAM KRUSE',
  fields: 'Hybrid rocketry · Unmanned flight',
  heroLine: 'Aerospace engineering student building propulsion systems and rugged aircraft for work beyond the launchpad.',
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
  lookingFor: 'Seeking co-op placements in propulsion, testing, or unmanned systems - 4 or 12 months.',
  // The featured card on the home page. Points at a rocket page.
  featured: { section: 'cu-inspace', vehicle: 'iced-cappogee' },
  about: [
    "I'm an Aerospace Engineering student at Carleton University in Ottawa, originally from Calgary. My work sits in two fields: hybrid rocket propulsion and unmanned flight.",
    "Currently I'm one of five propulsion leads at CU InSpace, Carleton's rocketry club.",
    "In 2026, our rocket Iced Cappogee reached 39,279 ft, the highest amateur hybrid ever flown in Canada. This year I'm moving the team to static-cast fuel grains and scaling our motor to a P-class. Outside of the club, I am building LUNARE, my own Tripoli certification rocket, as well as developing the flight computer that will fly on it.",
    "Drones are where I'm headed. I hold a Transport Canada RPAS certificate, train in simulation every week, and contributed to Carleton's award-winning entry in the 2026 VFS Student Design Competition. The end goal is rugged unmanned aircraft for conservation and UAVs in places conventional platforms can't reach. The flight computer is the first piece I'm building towards it.",
    'Outside of engineering: music, football and the outdoors.',
  ],
  fieldIntro: {
    rocketry: 'SRAD hybrid propulsion, high-powered rocketry, and the test campaigns that get them off the pad.',
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
    description:
      "Carleton's student rocketry team. We design, build, and fly SRAD hybrid rockets at Launch Canada and IREC. I joined the propulsion team in 2024 and have been one of its five leads since 2025. This year we're flying a solid-to-solid two-stage at IREC and a P-class hybrid at Launch Canada, while starting a two-year design cycle for an 8-inch Q-class motor. Check out the projects I worked on below.",
    cover: '/images/sections/cu-inspace.jpg',
    order: 1,
    vehicles: [
      {
        slug: 'q-class-hybrid',
        name: '8-inch Q-class hybrid (SB-5)',
        kicker: 'Upcoming',
        status: 'Upcoming',
        summary: 'The lightest Q-class hybrid we can build, with a thrust-to-weight of at least 10.',
        cover: '/images/vehicles/q-class-hybrid.jpg',
        order: 1,
        body: [
          "The 8-inch is the next step after the P-class, and the most ambitious motor CU InSpace has taken on.",
          "It runs on a two-year design cycle. Design starts this winter after the P-class, with the goal of the motor being ready to static fire by the end of summer 2027. The Q-class is planned to fly at Launch Canada 2028.",
          "→ **Why it drives this year's work.** At this scale, spin casting a fuel grain stops being safe. Spinning a grain that large is a stability problem before it's a manufacturing one. That's the main reason I'm developing static casting now, a full year before we need it.",
          'Projects for this rocket will appear here as the design cycle starts.',
        ],
      },
      {
        slug: 'p-class-hybrid',
        name: '6-inch P-class hybrid (SB-4)',
        kicker: '2027',
        status: 'In design',
        summary: 'Iced Cappogee, but bigger. A P-class hybrid for Launch Canada 2027.',
        cover: '/images/vehicles/p-class-hybrid.jpg',
        order: 2,
        specs: [
          { label: 'Motor class', value: 'P' },
          { label: 'Oxidizer tank', value: '+2 ft' },
          { label: 'Chamber', value: '+0.5 in diameter' },
          { label: 'Target', value: 'Launch Canada 2027' },
        ],
        body: [
          'After setting a Canadian record, the obvious question was how much further the same architecture could go.',
          "The P-class keeps Iced Cappogee's proven layout and scales it up. We're stretching the oxidizer tank by two feet and widening the combustion chamber by half an inch, which moves the motor from O-class into P-class while keeping the fuel grain the same length.",
          'The plan is to lock the design by November–December, static fire as much as we can through the winter and spring, and fly at Launch Canada 2027.',
          "→ **My role.** As Propulsion Lead I'm overseeing the full motor, and running five projects directly: static casting, the B⁵C spin caster, and the injector, mixing plate, and igniter upscales. The upscale also doubles as our next experiment on the 54 Hz instability we saw on Iced Cappogee.",
        ],
      },
      {
        slug: 'iced-cappogee',
        name: 'Iced Cappogee (SB-3)',
        kicker: '2026',
        status: 'Flown',
        summary: 'The highest amateur hybrid ever flown in Canada. 39,279 ft, 2nd in the Advanced category at Launch Canada 2026.',
        cover: '/images/vehicles/iced-cappogee.jpg',
        order: 3,
        specs: [
          { label: 'Apogee', value: '39,279 ft' },
          { label: 'Result', value: '2nd, Advanced' },
          { label: 'Motor', value: 'SB-3 N₂O / paraffin' },
          { label: 'My role', value: 'Propulsion Lead' },
          { label: 'Height', value: '11.5 ft' },
          { label: 'Total impulse', value: '35.2 kN·s' },
          { label: 'Isp', value: '204.7 s' },
          { label: 'Liquid burn', value: '8.3 s' },
        ],
        body: [
          "Iced Cappogee was an 11.5 ft tall rocket which flew on our third-generation nitrous/paraffin motor, the SB-3. It was my first Launch Canada and my first year as Propulsion Lead. As part of an executive team of five, I helped set the motor's technical direction, helped run the cold-flow and static-fire campaign, and helped size the injector, and I developed the mixing plate, fuel formulation, and casting environment.",
          'The flight was the headline. Getting it off the rail was the story.',
          "→ **Qualifying.** We needed static-fire data just to be eligible to fly. Our first attempt at Morrison's Quarry ended when wind vibrated a solder joint loose and the fire valve never opened. The second burned a hole through the chamber wall at the injector plate, where a gap left by an old vent cut-out wasn't protected, and a lean, hot burn made it worse. We machined a new injector plate without the cut-out, sealed it properly, and the third fire ran full duration.",
          "→ **The nose cone.** In pre-flight testing at competition, the nose cone wouldn't separate. Same recovery architecture, same charge design, same hardware, and it just wouldn't move. Our working theory was gas venting through the arming-switch access holes. We tested, added powder, tested again, and landed on a 5 g charge with a redundant 7 g, which I helped build. In flight, they worked exactly as intended.",
          "→ **The EGSE.** Then our ground control box died. The MOSFETs kept frying and taking the Picos with them, so we could read pressures but couldn't actuate the valves. No ground control means no launch. The McGill Rocket Team handed over their spare MOSFETs without hesitation, we rebuilt the box overnight, and we flew the next day.",
          "Recovery was nominal on our reefed main, and the rocket landed safely in Ontario's boreal forest.",
        ],
      },
      {
        slug: 'quarter-pounder',
        name: 'Quarter Pounder (SB-1, SB-2)',
        kicker: '2025',
        status: 'Flown',
        summary: "Carleton's first hybrid rocket, and my first year on the propulsion team.",
        cover: '/images/vehicles/quarter-pounder.jpg',
        order: 4,
        specs: [
          { label: 'Height', value: '14.5 ft' },
          { label: 'Mass', value: '110 lb' },
          { label: 'Motor', value: 'SB-2 N₂O / paraffin' },
          { label: 'First static fire', value: '5.7 kN peak' },
        ],
        body: [
          "Quarter Pounder is where CU InSpace's hybrid program started.",
          'It was a 14.5 ft tall, 110 lb rocket which flew on our second-generation O-class nitrous/paraffin motor, the SB-2. Our first-ever static fire, at Reaction Dynamics, beat predictions with 5.7 kN of peak thrust.',
          '→ **Getting to the pad.** Late in the cycle we had to switch to a UC valve (SB-1 → SB-2). We were short on time, and Launch Canada had concerns about our original valve design. We proved the new configuration on a static fire a few weeks before competition, and we flew.',
          "→ **The flight.** The rocket left the rail, but the airframe didn't survive. The main body tube shredded in flight.",
          "→ **My role.** I was a general member of the propulsion team that year. I co-designed the propulsion system, designed the mixing plate, helped build and run fuel casting, manufactured the igniters, and helped conduct cold flows and leak tests. A lot of what I'm leading now started here.",
        ],
      },
    ],
  },
  {
    slug: 'tripoli-certification',
    name: 'Tripoli L1/L2 Certification',
    field: 'rocketry',
    intro: "One rocket, both cert flights, and a flight computer I'm building from scratch.",
    description:
      "My personal high-power rocketry program. One rocket, both certification flights, and a flight computer I'm building from scratch. This one is all mine, designed and built separately from CU InSpace.",
    cover: '/images/sections/tripoli.jpg',
    order: 2,
  },
  {
    slug: 'small-rocket',
    name: 'Small Rocket',
    field: 'rocketry',
    intro: "CU InSpace's low-power rocket launch day.",
    cover: '/images/sections/small-rocket.jpg',
    order: 3,
    body: [
      'Not every rocket at CU InSpace needs to break a record.',
      "Small Rocket is an event CU InSpace hosts, built around small, low-power rockets. It's a fun, lighter, more hands-on side of CU InSpace's rocketry, and a good excuse to get everyone out to the pad.",
      '→ **The tradition.** Some of the execs build intentionally unconventional rockets for it. Over the years, execs have flown two-stages, clusters, miniature hybrids, and rockets made from condiment bottles.',
      "→ **My part.** As a part of CU InSpace's exec team, I too partake in the tradition, CADing, simulating, and 3D printing unconventional rockets of my own.",
    ],
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
    intro: 'Getting certified, logging sim hours, and working toward my first build.',
    cover: '/images/sections/flight-training.jpg',
    order: 2,
  },
]

export const projects: Project[] = [
  // ── CU InSpace · P-class hybrid ───────────────────────────
  {
    slug: 'static-casting',
    title: 'Static casting',
    summary: 'Moving the team off spin casting entirely. As far as we know, no North American student team is doing this.',
    section: 'cu-inspace',
    vehicle: 'p-class-hybrid',
    field: 'rocketry',
    date: '2026-09-20',
    status: 'Early design',
    role: 'Project lead',
    cover: '/images/projects/static-casting.jpg',
    tools: ['SolidWorks', 'Engineering drawings'],
    body: [
      'Every grain we\u2019ve flown has been spin cast. Molten wax goes into the liner, gets capped, and spins while it cools. It works, but it has a ceiling.',
      "→ **The problem.** Our spin casts only got about six hours to cool, because someone had to stand with the machine the entire time. That's too fast for EVA. Cool it quickly and it shrinks unevenly and cracks; the literature points to a 20–24 hour window instead. Spin casting also doesn't scale. At 8 inches, spinning a grain that size becomes a stability problem before it's a manufacturing one.",
      '→ **The mould.** Our flight phenolic liner forms the outer wall, sleeved in stainless steel, around a carbon-steel mandrel that forms the port. Everything is preheated to 90 °C and coated with mould release before pouring.',
      '→ **Controlling solidification.** A detachable stainless riser sits on top, wrapped in ceramic blanket and heated from above by a variable heat lamp. Keeping the top molten means the grain solidifies bottom-up and inside-out, and the riser feeds material down as it shrinks.',
      '→ **Degassing and cooling.** After pouring, the whole mould goes under vacuum to pull out voids, then cools radially for about 20 hours, unattended.',
      "It's early in development and an engineering challenge, which is exactly why it's worth starting now, a full year before the 8-inch needs it.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 4,
  },
  {
    slug: 'b5c-spin-caster',
    title: 'B⁵C spin caster',
    summary: 'A clean-sheet spin caster. Our backup if static casting fails, and sized for the next decade of motors.',
    section: 'cu-inspace',
    vehicle: 'p-class-hybrid',
    field: 'rocketry',
    date: '2026-09-15',
    status: 'Early design',
    role: 'Project lead',
    cover: '/images/projects/b5c-spin-caster.jpg',
    tools: ['SolidWorks', 'Engineering drawings'],
    body: [
      "Static casting is the goal, but it's unproven. The team can't afford to bet the P-class on it, so B⁵C is the insurance policy.",
      "→ **Why not fix the old one?** BBBC 2.0 (a.k.a. the BBBBC) had hit its limits. The frame vibrated and wasn't stable, the control box wiring had degraded, the PWM speed control only ran full-on or full-off, the magnetic tachometer had stopped reading, and it couldn't cast anything larger than 5\" in diameter. Patching each of those would still leave a machine that can't grow with the team.",
      '→ **The redesign.** B⁵C is built from scratch to cast grains up to 10" in diameter, with a rigid frame, clean control wiring, working variable speed control, and reliable speed feedback.',
      "→ **Why build both.** If static casting works, we have a proven second manufacturing method. If it doesn't, we're not stuck. Either way, the team gets a caster that fits every motor on our roadmap.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 3,
  },
  {
    slug: 'injector-upscale',
    title: 'Injector upscale',
    summary: 'Scaling up the SB-3 showerhead injector for the P-class, and using CFD to make sure the flow chokes where it should.',
    section: 'cu-inspace',
    vehicle: 'p-class-hybrid',
    field: 'rocketry',
    date: '2026-09-10',
    status: 'In development',
    role: 'Design lead',
    cover: '/images/projects/injector-upscale.jpg',
    body: [
      "A bigger motor needs more oxidizer. The P-class keeps SB-3's showerhead architecture, so the job is scaling a design we already trust rather than starting over.",
      "→ **Sizing.** I'm resizing the plate from the discharge coefficient we measured in last year's cold flows, working out the hole count and geometry needed to hit the new oxidizer mass flow at our target O/F.",
      '→ **Why choking matters.** We want the flow to choke at the injector. A choked injector isolates the feed system from pressure oscillations in the chamber, which matters even more after the instability we saw on Iced Cappogee.',
      "→ **CFD before hardware.** I'm running the design in STAR-CCM+ to confirm the flow chokes where we expect before anything gets machined. Then we cold flow the real plate and check the results against the simulation.",
      "This is my first time owning the injector design outright, after helping size it last year.",
    ],
    tools: ['STAR-CCM+', 'SolidWorks', 'Engineering drawings'],
    lineage: 'injector',
    generation: 2,
  },
  {
    slug: 'mixing-plate-gen-3',
    title: 'Mixing plate (Gen 3)',
    summary: 'Scaling up the plate that survived, and using CFD to make sure it never becomes a second throat.',
    section: 'cu-inspace',
    vehicle: 'p-class-hybrid',
    field: 'rocketry',
    date: '2026-09-10',
    status: 'In development',
    role: 'Design lead',
    cover: '/images/projects/mixing-plate-gen-3.jpg',
    body: [
      'Generation two did its job: it survived the full burn. Generation three has to do the same thing in a bigger chamber.',
      "→ **What changes.** Gen two used a coated four-port design with about three times the throat area in open flow. Widening the chamber and raising the mass flow changes that ratio, so the geometry can't just be scaled by eye.",
      "→ **The risk.** If the gas chokes at the plate instead of at the nozzle, you've built a second throat in the middle of your chamber. That's how you get instabilities and pressures that can cause a CATO.",
      "→ **CFD first.** I'm running the upscaled plate in STAR-CCM+ to confirm it stays well clear of choking across the burn, while keeping enough restriction to actually mix the flow.",
      'The coating process and the four-port philosophy carry over unchanged. Simple still wins.',
    ],
    tools: ['STAR-CCM+', 'SolidWorks', 'Engineering drawings'],
    lineage: 'mixing-plate',
    generation: 3,
  },
  {
    slug: 'igniter-upscale',
    title: 'Igniter upscale',
    summary: "Extending Iced Cappogee's igniter for the larger P-class chamber, and refining the manufacturing documents I first wrote for Quarter Pounder.",
    section: 'cu-inspace',
    vehicle: 'p-class-hybrid',
    field: 'rocketry',
    date: '2026-09-08',
    status: 'In development',
    role: 'Contributor',
    cover: '/images/projects/igniter-upscale.jpg',
    body: [
      'A bigger chamber needs an igniter that can reliably light it.',
      "→ **The design.** Rather than starting over, we're taking the igniter design that lit Iced Cappogee and extending it to suit the P-class motor's larger chamber.",
      '→ **The documentation.** I\u2019m also refining the igniter manufacturing documents I wrote for Quarter Pounder, so the upscaled igniter can be built the same way every time, by anyone on the team.',
      'A proven design, scaled carefully, and documented properly.',
    ],
    lineage: 'igniter',
    generation: 2,
  },
  {
    slug: 'combustion-instability-54hz',
    title: '54 Hz combustion instability',
    summary: "A clean 54 Hz oscillation in Iced Cappogee's chamber pressure. Eight candidate mechanisms tested, one leading hypothesis.",
    section: 'cu-inspace',
    vehicle: 'p-class-hybrid',
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
      "Iced Cappogee flew with a problem we still haven't closed: a clean 54 Hz oscillation in chamber pressure.",
      '→ **The signal.** Our static fire showed a sharp 54 Hz peak with a harmonic around 108 Hz, flat across all three thirds of the burn. In flight it read 51 Hz, consistent with a Doppler shift as the rocket moved away. It never appeared in either of our two cold flows, with real nitrous running through the flight injector and valve. Whatever it is, it needs combustion.',
      `→ **Ruling things out.** With help from ${P.zakary}, ${P.george}, and ${P.mitchell} from Launch Canada, I worked through the candidates by hand: longitudinal acoustics (around 730 Hz), Helmholtz modes (over 1 kHz), a feed-line quarter-wave, poppet flutter, vortex shedding (around 12 kHz), and thermal-lag low-frequency instability. None of them fit.`,
      '→ **The leading hypothesis.** A bulk (L*) mode. As the port opens, L* grows, but c* rises as the mixture shifts from lean toward rich, keeping the frequency roughly constant through the burn.',
      "→ **The test.** We don't have the budget for a dedicated experiment, so the P-class upscale becomes one. Grain length stays fixed while chamber volume grows, and the next static fires will show which way the frequency moves.",
    ],
    tools: ['Python', 'MATLAB'],
  },

  // ── Small Rocket ──────────────────────────────────────────
  {
    slug: 'rocket-of-doom-and-despair',
    title: 'The Rocket of Doom and Despair',
    summary: 'How many fins is too many? A 3D-printed, minimum-diameter rocket with 24 fins and a pair of canards.',
    section: 'small-rocket',
    field: 'rocketry',
    date: '2026-10-03',
    status: 'Flown',
    role: 'Designer and builder',
    cover: '/images/projects/rocket-of-doom-and-despair.jpg',
    specs: [
      { label: 'Length', value: '52 cm' },
      { label: 'Diameter', value: '22.5 mm' },
      { label: 'Fins', value: '24 + 2 canards' },
      { label: 'Motor', value: 'Estes B6-4' },
      { label: 'Sim apogee', value: '~155 ft' },
      { label: 'Material', value: 'PETG, FDM printed' },
    ],
    body: [
      '24 fins. 2 canards. How many is too many for a lawn dart?',
      "→ **The event.** At this year's Small Rocket, the lineup included a four-motor cluster, a miniature hybrid, and a rocket made from a Sriracha bottle. I spent a good part of the day on the grill, and in between, I flew this one.",
      '→ **The idea.** My entry was a minimum-diameter rocket with three rings of eight fins and a pair of canards on the nose cone. On a serious build, that configuration would never make sense. That was the point.',
      '→ **The build.** The full workflow was mine: designed in OpenRocket, converted into a printable model in FreeCAD, and FDM printed in PETG on a Prusa XL. The body tube, fins, nose cone, canards, and bulkhead were all printed, with elastic shock cords, nylon chute lines, and an Estes B6-4 epoxied directly into the body tube.',
      '→ **Stability.** With that many fins and canards up front, this was my biggest concern going in. It flew straight off the rail.',
      "→ **The motor bond.** I wasn't sure the epoxy would survive the heat and thrust. It held perfectly. Maybe too perfectly: the motor is now permanently part of the airframe.",
      "→ **Recovery.** The parachute never deployed. I'd left enough length for the recovery system but never considered width. At minimum diameter, there was barely room to pack the chute and shock cords, and the epoxy holding the shock cords hadn't fully cured. I had a feeling before launch it wasn't coming out, and I was right.",
      'The rocket still came down in one piece, and it would be ready to fly again if the motor weren\u2019t stuck in it.',
      'The lesson: design the recovery bay around the parachute, not the parachute around the bay. Next time, proper motor retention and a recovery bay sized for packing, not just length.',
    ],
    tools: ['OpenRocket', 'FreeCAD', '3D printing'],
  },

  // ── CU InSpace · Iced Cappogee ────────────────────────────
  {
    slug: 'showerhead-injector-sb3',
    title: 'Showerhead injector',
    summary: "Our first flight-proven showerhead injector: 94 holes, sized from cold-flow data.",
    section: 'cu-inspace',
    vehicle: 'iced-cappogee',
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
      'The injector sets how oxidizer enters the chamber, and how well it atomizes decides how well it burns.',
      "→ **The design.** SB-3's injector used 94 holes, 1.51 mm each, at an L/D of 15. It built on the showerhead design the team first tested the year before. The main change was the longer holes, which improved atomization and two-phase flow through the plate and raised engine efficiency.",
      '→ **Sizing from data.** We cold-flowed a 60-hole plate to measure the real discharge coefficient and inspect the spray pattern. I worked with our injector lead to turn that coefficient into the hole count needed to hit our target O/F.',
      '→ **The result.** It flew on Iced Cappogee, the first showerhead injector the team has flown.',
      "This year I'm taking over the design and scaling it up for the P-class.",
    ],
    lineage: 'injector',
    generation: 1,
  },
  {
    slug: 'mixing-plate-gen-2',
    title: 'Mixing plate (Gen 2)',
    summary: "Last year's test plate came out of the chamber in pieces. This one came back charred, but in one piece.",
    section: 'cu-inspace',
    vehicle: 'iced-cappogee',
    field: 'rocketry',
    date: '2026-08-10',
    status: 'Flown',
    role: 'Design lead',
    cover: '/images/projects/mixing-plate-gen-2.jpg',
    body: [
      "Not much can survive the heat of a rocket's combustion chamber. Last year's test plate didn't. This year's did.",
      "→ **Material.** Stainless steel, chosen purely for survivability. If the plate can't stay in the flow, none of the mixing it does matters.",
      "→ **Coating.** SOAR had run a ceramic coating on their own plate and generously shared their application procedure. I refined it into my own process: a base coat of ITC 213 for oxidation and erosion resistance, under ITC 100 HT, which is rated to 5000 °F.",
      '→ **Geometry.** I iterated through eight and six port designs before a conversation with Peter Tarle got me to four equal-area ports. Simple is better. Fewer features, fewer edges to erode, fewer things to get wrong.',
      "→ **Port area.** Sized at more than twice the nozzle throat area. If the gas chokes at the plate instead of the nozzle, you've built a second throat in the middle of your chamber.",
      'It came back charred, with visible regression on the spokes. But it survived the entire burn. That\u2019s the win.',
    ],
    tools: ['SolidWorks', 'Engineering drawings'],
    lineage: 'mixing-plate',
    generation: 2,
  },
  {
    slug: 'eva-fuel-formulation',
    title: 'Paraffin/EVA fuel formulation',
    summary: "Slowing down paraffin's regression rate without making the grain any bigger.",
    section: 'cu-inspace',
    vehicle: 'iced-cappogee',
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
      'Last year, our rocket ran out of fuel before it ran out of oxidizer. Fixing that became my project.',
      "→ **The problem.** Early sims of SB-3 showed a burnout diameter larger than the grain itself. A bigger grain wasn't an option within our chamber, so the challenge became cutting regression rate by 20–25% while keeping the same grain and paraffin's performance advantage. Last year's additives, Vybar 103 and A-C6A, strengthened the wax but barely touched regression rate.",
      "→ **The fix.** Paraffin burns fast because its melt layer is thin and runny, so the oxidizer flow rips droplets off the surface. That's entrainment. After digging through the literature, I landed on EVA, which raises the viscosity of that melt layer, reducing entrainment and slowing regression. It also makes the grain stronger and more ductile. One additive, two problems solved.",
      '→ **Making it.** EVA melts far hotter than paraffin, so I first had to find how hot the wax could go before breaking down. Even then, the pellets clumped and refused to dissolve. I needed more shear without whipping air into the mix, and the answer was a paint mixer on an electric drill.',
      'The final blend was 84% paraffin, 12% EVA, and 4% carbon black. It flew on Iced Cappogee and hit our regression targets in flight.',
    ],
  },
  {
    slug: 'bbbc-2-casting-environment',
    title: 'BBBC 2.0: casting environment',
    summary: 'A temperature-controlled casting setup built for under $100. Cracked grains stopped being a mystery.',
    section: 'cu-inspace',
    vehicle: 'iced-cappogee',
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
      'Cool a paraffin grain too fast and it shrinks unevenly and cracks. Last year, we had no way of knowing when that was happening.',
      "→ **The problem.** Our casting setup was a foam box and a heater with no real temperature control. When a grain cracked, we couldn't tell why.",
      '→ **The rebuild.** Constrained by budget, I rebuilt the casting environment for under $100, putting some of my own money in. I redesigned the insulation box to be form-fitting and better sealed, extended the spin caster base with aluminium extrusion to cut vibration, and retrofitted an Inkbird temperature controller to switch the heater automatically.',
      '→ **The result.** The enclosure held within ±1.5 °C in outdoor weather and let me run a stepped cooling profile, bringing grains down gradually instead of all at once.',
      "The real win wasn't just better grains. Each crack stopped being a mystery. If a grain cracked, I knew exactly what temperature it had been sitting at and could adjust the profile. Failure became data, and data became adjustments. After a few iterations, the grains came out clean.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 2,
  },

  // ── CU InSpace · Quarter Pounder ──────────────────────────
  {
    slug: 'mixing-plate-gen-1',
    title: 'Mixing plate (Gen 1)',
    summary: 'My idea for our first hybrid: a plate that mixes unburned oxidizer and fuel-rich gas before they reach the nozzle.',
    section: 'cu-inspace',
    vehicle: 'quarter-pounder',
    field: 'rocketry',
    date: '2025-06-01',
    status: 'Flown',
    role: 'Designer',
    cover: '/images/projects/mixing-plate-gen-1.jpg',
    body: [
      'The mixing plate was my idea, and my first real design on the team.',
      "→ **Why a mixing plate.** In a hybrid, fuel vapour comes off the grain wall while the oxidizer flows down the core of the port. Combustion and turbulence already mix the two a fair amount inside the chamber, but not completely, and hot gases that don't fully mix mean incomplete combustion. A plate in the post-combustion chamber introduces strategic turbulence, forcing the gases to contract, expand, and mix before the throat. Better mixing means more complete combustion, which means better performance.",
      '→ **First attempt.** The first test plate was machined from phenolic. It burned through partway into a static fire and took the retaining ring and graphite nozzle with it.',
      '→ **Flight version.** For flight we moved to 1/2" 304 stainless, retained between two phenolic liners, with RTV insulating the edges and coating the face toward the grain to limit radiative heating.',
      'Surviving a full-duration burn was still the open problem. That became the entire brief for generation two.',
    ],
    tools: ['SolidWorks', 'Engineering drawings'],
    lineage: 'mixing-plate',
    generation: 1,
  },
  {
    slug: 'spin-casting-cr25h',
    title: 'Fuel grain spin casting',
    summary: 'Building, troubleshooting, and running the spin-casting setup for our first paraffin grains.',
    section: 'cu-inspace',
    vehicle: 'quarter-pounder',
    field: 'rocketry',
    date: '2025-05-01',
    status: 'Flown',
    role: 'Team member',
    cover: '/images/projects/spin-casting-cr25h.jpg',
    body: [
      'Our first paraffin grains meant building the process from nothing.',
      '→ **The fuel.** A 16" grain of paraffin with A-C6A and Vybar 103 for strength and resistance to slumping, plus carbon black to stop heat radiating deep into the wax and driving runaway regression.',
      '→ **The equipment.** I worked with the team to create and troubleshoot the spin-casting equipment, then helped cast the grains: melt the wax, dissolve the additives at 120 °C, pour into pre-heated liners, and spin for about six hours inside a heated, insulated box.',
      "→ **The limit.** Six hours wasn't a number from the literature. It was how long someone could reasonably stand next to the machine.",
      "That constraint stuck with me. It's the exact problem my static-casting work is solving now.",
    ],
    lineage: 'fuel-manufacturing',
    generation: 1,
  },
  {
    slug: 'igniter-and-procedures',
    title: 'Igniter and test procedures',
    summary: "Manufacturing our composite igniters and writing the procedures to build and verify them.",
    section: 'cu-inspace',
    vehicle: 'quarter-pounder',
    field: 'rocketry',
    date: '2025-04-01',
    status: 'Complete',
    role: 'Team member',
    cover: '/images/projects/igniter-and-procedures.jpg',
    lineage: 'igniter',
    generation: 1,
    body: [
      "Every static fire starts with the igniter, and an igniter that doesn't light is a wasted test day.",
      '→ **Manufacturing.** I built the team\u2019s composite igniters and wrote the manufacturing procedure, so anyone on the team could make one the same way.',
      '→ **Verification.** I made sure each igniter worked before it went into a test, so it was one less thing to worry about on test day.',
      '→ **Cold flows and procedures.** I also helped conduct multiple full-scale cold flows and leak tests on the motor and oxidizer system, and co-wrote the cold-flow procedures with teammates.',
      'Getting it all written down made test days safer, faster, and more repeatable.',
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
      "LUNARE is my own rocket, designed and built outside CU InSpace, and it's how I'm getting my high-power certifications.",
      "→ **The name.** It's named after the moon wrasse (*Thalassoma lunare*), and it'll be painted in the fish's colours.",
      '→ **The airframe.** A 3" diameter, 44" fiberglass airframe with a PLA nose cone. I originally planned full carbon fibre, but fiberglass is cheaper and easier to work with for a first build.',
      "→ **Recovery.** Dual-split dual deploy: a 12\" drogue at apogee and a 36\" main at 500 ft. A COTS Blue Jay handles every deployment event, so my certifications never depend on electronics I haven't proven yet.",
      '→ **The flights.** An AeroTech I140 for Level 1 (about 2,550 ft simulated) and a J270 for Level 2 (about 4,990 ft), both on the same airframe at URRG.',
      "The design is done in OpenRocket and nearly every part is purchased. Fiberglass and epoxy are next, with cert flights planned for May 2028.",
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
      "Why build my own flight computer? Because I want to understand every layer of what's flying, from the PCB to the firmware.",
      "→ **The real reason.** PCB design and embedded C are the same skills I'll need to build a custom drone flight controller. Building one for my rocket first is the most direct way I know to learn them, and it's where my rocketry and drone work meet.",
      '→ **What it does.** It logs a full sensor suite: IMU, high-g accelerometer, barometer, magnetometer, and GPS. It streams LoRa GPS for recovery, and feeds a 3D flight replay plus a live hand-held demo.',
      "→ **The path.** I'm starting on a Pico 2 / RP2040 to learn, then moving to a custom four-layer PCB, with STM32 as the bridge to a drone FC.",
      "→ **Safety first.** It flies alongside the Blue Jay as a logger and never fires a charge. My certification doesn't depend on it.",
      'First flight is planned for URRG in May 2028.',
    ],
    tools: ['C', 'Altium'],
  },

  // ── Drones · Unmanned & VTOL ──────────────────────────────
  {
    slug: 'vfs-hybrid-tiltrotor',
    title: 'VFS hybrid-electric tiltrotor',
    summary: "Evaluating the fuel cell system for Carleton's first entry in the VFS Student Design Competition: a hybrid-electric Bell/NASA XV-15.",
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
      "My first taste of aircraft-level design, and Carleton's first year in the Vertical Flight Society Student Design Competition.",
      '→ **The challenge.** Sponsored by Leonardo Helicopters, the RFP asked teams to redesign the Bell/NASA XV-15 tiltrotor so at least 10% of its mission energy came from electrical sources, without losing one-engine-inoperative capability, autorotation, or conversion between helicopter and airplane mode.',
      `→ **The concept.** Team Ravens, led by ${P.chen}, paired the XV-15's turboshafts with a hydrogen fuel cell (PEMFC) power system in a parallel hybrid architecture.`,
      "→ **My role.** I came in late as a contributor on the fuel cell system: sizing the fuel cell and the balance-of-plant hardware it needs to run, evaluating options against the aircraft's weight, geometry, and mission constraints, and feeding mass and power numbers into the team's aircraft-level trades. In short, what every added kilogram cost the aircraft in hover power and range.",
      `→ **The result.** The team won Best New Undergraduate Entrant out of 17 proposals from universities in 4 countries. Supervised by ${P.laliberte}.`,
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
    summary: 'A self-built cinewhoop or 5-inch. My first step from flying drones to building them.',
    section: 'flight-training',
    field: 'drones',
    date: '2027-06-01',
    status: 'Upcoming',
    cover: '/images/projects/first-quad-build.jpg',
    body: [
      'The next step: going from flying drones to building one.',
      "→ **The build.** A self-built cinewhoop or 5-inch, chosen once I know what I'll be flying it for.",
      '→ **Why it matters.** Building my own means understanding every component: frame, motors, ESCs, flight controller, and video system. It\u2019s also the first place my flight computer work can start feeding back into drones.',
      'Timing depends on co-op.',
    ],
  },
  {
    slug: 'liftoff-training',
    title: 'Simulator training and first flights',
    summary: 'Sim hours first, then my first real FPV flights, and my first crash.',
    section: 'flight-training',
    field: 'drones',
    date: '2026-09-25',
    status: 'In development',
    cover: '/images/projects/liftoff-training.jpg',
    body: [
      "I started in simulation before touching a real quad, and I'm glad I did.",
      "→ **Simulation.** I fly Liftoff three to four hours a week, acro from day one plus freestyle. I matched Liftoff: Micro Drones' rates to my Air75's Betaflight values, which made the jump to real hardware noticeably smoother.",
      "→ **First flights.** This August I flew my BetaFPV Air75 for the first time, a milestone I'd planned back in July. A month of sim reps meant I could fly without much trouble on day one. A few minutes in, I crashed it straight into the ground.",
      "→ **What the sim can't teach.** Battery sag cutting motors at low voltage, video-signal behaviour, and wind you can feel in the sticks. Simulators build the reflexes. Fly, crash, diagnose, fly again is where the skill actually compounds.",
      'Next: weekly practice and first outdoor footage sessions this winter.',
    ],
    tools: ['Liftoff', 'Betaflight'],
  },
  {
    slug: 'rpas-basic',
    title: 'RPAS Basic certificate',
    summary: 'My Transport Canada Basic Operations certificate for remotely piloted aircraft, earned July 2026.',
    section: 'flight-training',
    field: 'drones',
    date: '2026-07-16',
    status: 'Complete',
    cover: '/images/projects/rpas-basic.jpg',
    body: [
      'The first step to flying legally in Canada.',
      'I earned my Transport Canada RPAS Basic Operations certificate in July 2026. It covers flying drones between 250 g and 25 kg in uncontrolled airspace, away from bystanders.',
      "It's the foundation for everything I want to do with unmanned aircraft, from FPV to eventual field work.",
    ],
  },
]

// Skills on the About page are built automatically from every project's
// `tools`. This only controls grouping and order. Anything not listed here
// lands in "Other". Skills with no projects are hidden.
export const skillGroups: { name: string; skills: string[] }[] = [
  { name: 'Design & simulation', skills: ['SolidWorks', 'CATIA', 'FreeCAD', 'Engineering drawings', 'STAR-CCM+', 'OpenRocket'] },
  { name: 'Fabrication', skills: ['3D printing'] },
  { name: 'Programming & analysis', skills: ['Python', 'MATLAB', 'C'] },
  { name: 'Electronics', skills: ['Altium'] },
  { name: 'Flight', skills: ['Betaflight', 'Liftoff'] },
]

// ── helpers ───────────────────────────────────────────────────
export const fieldLabel: Record<Field, string> = { rocketry: 'Rocketry', drones: 'Drones' }
export const isUpcoming = (p: Project) => p.status === 'Upcoming'
export const byDateDesc = (a: Project, b: Project) => b.date.localeCompare(a.date)
export const getSection = (slug: string) => sections.find((s) => s.slug === slug)
export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
export const getVehicle = (section: string, slug?: string) =>
  slug ? getSection(section)?.vehicles?.find((v) => v.slug === slug) : undefined
export const vehiclesOf = (section: string) => [...(getSection(section)?.vehicles ?? [])].sort((a, b) => a.order - b.order)
export const vehicleUrl = (s: Section, v: Vehicle) => `/${s.field}/${s.slug}/${v.slug}`
export const inVehicle = (section: string, vehicle: string) =>
  projects.filter((p) => p.section === section && p.vehicle === vehicle).sort(byDateDesc)
export const latest = (n: number, field?: Field) =>
  projects.filter((p) => !isUpcoming(p) && (!field || p.field === field)).sort(byDateDesc).slice(0, n)
export const upcoming = (field?: Field) => projects.filter((p) => isUpcoming(p) && (!field || p.field === field)).sort(byDateDesc)
export const inSection = (slug: string) => projects.filter((p) => p.section === slug).sort(byDateDesc)
export const sectionsFor = (field: Field) => sections.filter((s) => s.field === field).sort((a, b) => a.order - b.order)

/** Home grid: newest work, excluding upcoming items, with at least
 *  `minEach` from each field so both always show up. */
export const homeWork = (n = 6, minEach = 2) => {
  const pool = projects.filter((p) => !isUpcoming(p)).sort(byDateDesc)
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

/** Grouped skills, each with the projects that use it. */
export const skillIndex = () => {
  const used = new Map<string, Project[]>()
  projects.forEach((p) => p.tools?.forEach((t) => used.set(t, [...(used.get(t) ?? []), p])))
  const grouped = new Set(skillGroups.flatMap((g) => g.skills))
  const groups = skillGroups
    .map((g) => ({ name: g.name, skills: g.skills.filter((k) => used.has(k)).map((k) => ({ name: k, projects: used.get(k)!.sort(byDateDesc) })) }))
    .filter((g) => g.skills.length)
  const other = [...used.keys()].filter((k) => !grouped.has(k))
  if (other.length) groups.push({ name: 'Other', skills: other.map((k) => ({ name: k, projects: used.get(k)!.sort(byDateDesc) })) })
  return groups
}

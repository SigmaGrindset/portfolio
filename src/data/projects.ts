import type { Loc } from '@/i18n/i18n';

export type TechItem = { name: string; note?: Loc };
export type TechGroup = { label: Loc; items: TechItem[] };

export type ProjectStatus = 'live' | 'archived' | 'dev';

export type ProjectDetail = {
  slug: string;
  title: string;
  shortDesc: Loc;
  category: string;
  context: Loc;
  role: Loc;
  status: ProjectStatus;
  year: string;
  featured: boolean;
  links: {
    github?: string;
    live?: string;
  };
  overview: Loc[];
  features?: Loc[];
  techStack: TechGroup[];
  cardTech?: string[];
  gallery: string[];
};

const ph = (text: string, w = 1200, h = 720) =>
  `https://placehold.co/${w}x${h}/111118/6366f1.png?text=${encodeURIComponent(text)}&font=inter`;

// Common reusable labels
const L = {
  frontend: { hr: 'Frontend', en: 'Frontend' } as Loc,
  backend: { hr: 'Backend', en: 'Backend' } as Loc,
  database: { hr: 'Baza', en: 'Database' } as Loc,
  scraping: { hr: 'Scraping', en: 'Scraping' } as Loc,
  workflow: { hr: 'Workflow', en: 'Workflow' } as Loc,
  external: { hr: 'External', en: 'External' } as Loc,
  web: { hr: 'Web', en: 'Web' } as Loc,
  authPayments: { hr: 'Auth & Plaćanja', en: 'Auth & Payments' } as Loc,
};

export const projects: ProjectDetail[] = [
  {
    slug: 'sofascore-canteen',
    title: 'Sofascore Canteen',
    shortDesc: {
      hr: 'Web aplikacija koja zaposlenicima omogućuje organizaciju tjednih obroka, a catering službi uvid u narudžbe radi pripreme jela. Razvijeno u sklopu Sofascore Frontend Academy.',
      en: 'A web app that lets employees organize their weekly meals and gives the catering service a clear overview of orders for meal prep. Built during the Sofascore Frontend Academy.',
    },
    category: 'Sofascore Academy',
    context: {
      hr: 'Sofascore Frontend Academy',
      en: 'Sofascore Frontend Academy',
    },
    role: { hr: 'Frontend (timski projekt)', en: 'Frontend (team project)' },
    status: 'live',
    year: '2026',
    featured: true,
    links: {},
    overview: [
      {
        hr: 'One-stop shop za upravljanje uredskim ručkovima. Zaposlenici biraju obroke za cijeli tjedan, mogu prepustiti ručak kolegi ako ne stignu doći i ostaviti povratnu informaciju o hrani.',
        en: 'One-stop shop for managing office lunches. Employees pick their meals for the week, can transfer a lunch to a colleague if they cannot make it, and leave feedback on the food.',
      },
      {
        hr: 'Catering služba upravlja katalogom obroka i kreira tjedne menije. Admin uloga uključuje toggle-anje korisnika, praćenje neplaćenih obroka i postavljanje deadline-ova za narudžbe.',
        en: 'The catering service manages the meal catalog and plans the weekly menus. The admin role covers toggling users on/off, tracking unpaid meals and setting order deadlines.',
      },
      {
        hr: 'Akademija je bila organizirana kao simulacija rada u kompaniji - radili smo u timu uz mentore, kroz Scrum sprintove. Iz projekta sam izvukao puno više od koda: kako se zapravo radi u timu, kako se čitaju Figma dizajni, kako se kroz code review podiže kvaliteta i kako planirati sprintove.',
        en: 'The academy simulated working inside a company - we worked in a team with mentors, through Scrum sprints. I took away much more than just code: how teamwork actually plays out, how to read Figma designs, how code review raises quality and how to plan sprints.',
      },
    ],
    features: [
      { hr: 'Tjedni odabir obroka po danima', en: 'Weekly meal selection by day' },
      { hr: 'Prepuštanje ručka drugom korisniku', en: 'Transferring a lunch to another user' },
      { hr: 'Feedback i ocjene jela', en: 'Feedback and ratings for meals' },
      { hr: 'Catering panel za upravljanje menijem', en: 'Catering panel for menu management' },
      {
        hr: 'Admin panel - toggle korisnika, praćenje plaćanja, deadlineovi',
        en: 'Admin panel - user toggling, payment tracking, deadlines',
      },
      { hr: 'Dark mode i multi-language podrška', en: 'Dark mode and multi-language support' },
      {
        hr: 'Implementacija UI-a prema Sofascore design sustavu u Figmi',
        en: 'UI implementation following the Sofascore design system in Figma',
      },
    ],
    techStack: [
      {
        label: L.frontend,
        items: [
          { name: 'React', note: { hr: 'UI library', en: 'UI library' } },
          { name: 'TanStack Router', note: { hr: 'type-safe routing', en: 'type-safe routing' } },
          { name: 'SWR', note: { hr: 'data fetching i caching', en: 'data fetching and caching' } },
          { name: 'Panda CSS', note: { hr: 'type-safe styling sustav', en: 'type-safe styling system' } },
          { name: 'Zustand', note: { hr: 'minimalni state management', en: 'minimal state management' } },
          { name: 'Vite', note: { hr: 'build tool', en: 'build tool' } },
          { name: 'Biome', note: { hr: 'linter i formatter', en: 'linter and formatter' } },
        ],
      },
      {
        label: L.workflow,
        items: [
          { name: 'Git / GitHub', note: { hr: 'version control', en: 'version control' } },
          { name: 'Figma', note: { hr: 'dizajn handoff', en: 'design handoff' } },
          { name: 'Scrum', note: { hr: 'agile workflow', en: 'agile workflow' } },
        ],
      },
    ],
    gallery: [
      ph('Canteen - Dashboard'),
      ph('Canteen - Meal Picker'),
      ph('Canteen - Catering View'),
      ph('Canteen - Admin Panel'),
    ],
  },

  {
    slug: 'usa-elections',
    title: 'USA Elections',
    shortDesc: {
      hr: 'Vizualizacija rezultata svih predsjedničkih izbora u SAD-u od 1789. do 2024. godine. Podaci scrapeani s National Archivesa, prikazani kroz interaktivnu kartu saveznih država s mogućnošću usporedbe dvaju izbora.',
      en: 'A visualization of every U.S. presidential election from 1789 to 2024. Data scraped from the National Archives, presented through an interactive map of states with the ability to compare two elections.',
    },
    category: 'Data Viz',
    context: { hr: 'Solo projekt', en: 'Solo project' },
    role: {
      hr: 'Full-stack (scraping, backend, frontend, dizajn)',
      en: 'Full-stack (scraping, backend, frontend, design)',
    },
    status: 'live',
    year: '2026',
    featured: true,
    links: {
      github: 'https://github.com/SigmaGrindset/usa-elections',
      live: 'https://usa-elections-client.vercel.app/',
    },
    overview: [
      {
        hr: 'Interaktivna vizualizacija svih predsjedničkih izbora u SAD-u od 1789. do 2024. godine. Za svaku godinu možeš vidjeti pobjednika, broj electoral votesa po kandidatu i rezultate po pojedinoj saveznoj državi.',
        en: 'An interactive visualization of every U.S. presidential election from 1789 to 2024. For each year you can see the winner, the electoral vote count per candidate and the results in each state.',
      },
      {
        hr: 'Posebna značajka je usporedba dvaju izbora - odabereš dva izbora pa aplikacija prikazuje "swing states", odnosno savezne države koje su između njih promijenile stranku.',
        en: 'A standout feature is the comparison view - pick two elections and the app highlights the "swing states", the ones that changed party between them.',
      },
      {
        hr: 'Podaci su prikupljeni scrapeanjem službenih stranica National Archivesa (archives.gov/electoral-college).',
        en: 'Data was collected by scraping the official National Archives pages (archives.gov/electoral-college).',
      },
    ],
    features: [
      {
        hr: 'Pregled svake godine izbora od 1789. do 2024.',
        en: 'Browse every election year from 1789 to 2024',
      },
      {
        hr: 'Interaktivna karta SAD-a - države obojane bojom stranke pobjednika',
        en: 'Interactive U.S. map - states colored by the winning party',
      },
      { hr: 'Detalji po saveznoj državi', en: 'Per-state details' },
      { hr: 'Usporedba dvaju izbora', en: 'Side-by-side election comparison' },
      { hr: 'Swing states karta i lista', en: 'Swing states map and list' },
      { hr: 'Objašnjenje Electoral College sustava', en: 'Explanation of the Electoral College system' },
    ],
    techStack: [
      {
        label: L.scraping,
        items: [
          { name: 'Python', note: { hr: 'scripting', en: 'scripting' } },
          { name: 'BeautifulSoup4', note: { hr: 'parsiranje HTML stranica', en: 'HTML parsing' } },
        ],
      },
      {
        label: L.database,
        items: [
          { name: 'PostgreSQL', note: { hr: 'relacijska baza', en: 'relational database' } },
          { name: 'Neon', note: { hr: 'cloud hosting', en: 'cloud hosting' } },
        ],
      },
      {
        label: L.backend,
        items: [
          { name: 'Node.js', note: { hr: 'JavaScript runtime', en: 'JavaScript runtime' } },
          { name: 'Express', note: { hr: 'REST API framework', en: 'REST API framework' } },
          { name: 'pg', note: { hr: 'PostgreSQL klijent', en: 'PostgreSQL client' } },
          { name: 'Vercel', note: { hr: 'deployment', en: 'deployment' } },
        ],
      },
      {
        label: L.frontend,
        items: [
          { name: 'React', note: { hr: 'UI library', en: 'UI library' } },
          { name: 'TypeScript', note: { hr: 'type safety', en: 'type safety' } },
          { name: 'TanStack Router', note: { hr: 'type-safe routing', en: 'type-safe routing' } },
          { name: 'TanStack Query', note: { hr: 'dohvat i caching', en: 'fetching and caching' } },
          { name: 'Tailwind CSS', note: { hr: 'utility-first styling', en: 'utility-first styling' } },
          { name: 'D3', note: { hr: 'interaktivna karta SAD-a', en: 'interactive U.S. map' } },
        ],
      },
    ],
    cardTech: ['Python', 'BeautifulSoup4', 'PostgreSQL', 'Express', 'React', 'TanStack Router', 'Tailwind'],
    gallery: [
      ph('Elections - Home'),
      ph('Elections - Year View'),
      ph('Elections - Compare'),
      ph('Elections - Swing States'),
    ],
  },

  {
    slug: 'gearshare',
    title: 'GearShare',
    shortDesc: {
      hr: 'Web platforma koja povezuje trgovce sezonskom sportskom opremom s klijentima - rezervacije, online naplata i dogovor preuzimanja.',
      en: 'A web platform connecting seasonal sports gear retailers with customers - reservations, online payments and pickup arrangements.',
    },
    category: 'Web App',
    context: { hr: 'FER - Programsko inženjerstvo', en: 'FER - Software Engineering' },
    role: {
      hr: 'Frontend i dizajn sučelja (timski projekt)',
      en: 'Frontend and UI design (team project)',
    },
    status: 'archived',
    year: '2025',
    featured: false,
    links: { github: 'https://github.com/NiHorvat67/Pokemoni' },
    overview: [
      {
        hr: 'Rezultat timskog rada na projektnom zadatku kolegija Programsko inženjerstvo na FER-u. GearShare je platforma za iznajmljivanje sezonske sportske opreme - skija, snowboarda, bicikala, kajaka - koja povezuje trgovce s klijentima.',
        en: 'The outcome of a team project for the Software Engineering course at FER. GearShare is a platform for renting seasonal sports gear - skis, snowboards, bikes, kayaks - connecting retailers with customers.',
      },
      {
        hr: 'Motivacija je smanjiti trošak i složenost posjedovanja sezonske opreme te povećati iskorištenost postojeće. Klijenti dobivaju fleksibilan pristup kvalitetnoj opremi kad im je potrebna, a trgovci dodatni kanal prodaje i transparentan sustav rezervacija s recenzijama.',
        en: 'The motivation is to lower the cost and hassle of owning seasonal gear and to make existing gear more usable. Customers get flexible access to quality gear when they need it; retailers get an extra sales channel and a transparent reservation system with reviews.',
      },
      {
        hr: 'Kroz razvoj smo savladali moderne obrasce web arhitekture, integraciju OAuth 2.0, upravljanje korisničkim ulogama i ovlastima te dobre prakse dokumentiranja, testiranja i timske suradnje.',
        en: 'Through development we picked up modern web architecture patterns, OAuth 2.0 integration, role and permission management, and good practices for documentation, testing and team collaboration.',
      },
    ],
    features: [
      { hr: 'OAuth 2.0 prijava preko GitHuba', en: 'OAuth 2.0 sign-in via GitHub' },
      {
        hr: 'Više uloga: neregistrirani, klijent, trgovac, administrator',
        en: 'Multiple roles: guest, customer, retailer, administrator',
      },
      {
        hr: 'Javni katalog opreme s detaljima, cijenom, kaucijom i galerijom',
        en: 'Public gear catalog with details, price, deposit and gallery',
      },
      {
        hr: 'Interaktivna karta lokacija preuzimanja i povrata',
        en: 'Interactive map of pickup and return locations',
      },
      {
        hr: 'Filtriranje po vrsti opreme, periodu, cijeni i udaljenosti',
        en: 'Filtering by gear type, period, price and distance',
      },
      {
        hr: 'Rezervacija s provjerom dostupnosti u stvarnom vremenu',
        en: 'Reservations with real-time availability checks',
      },
      { hr: 'Online plaćanje karticama i drugim kanalima', en: 'Online payment via cards and other channels' },
      { hr: 'Godišnja članarina za trgovce', en: 'Yearly membership for retailers' },
      { hr: 'Ocjene i recenzije nakon završetka najma', en: 'Ratings and reviews after a rental ends' },
      { hr: 'Moderiranje prijava nepravilnosti', en: 'Moderation of reported issues' },
    ],
    techStack: [
      {
        label: L.frontend,
        items: [
          { name: 'React', note: { hr: 'UI library', en: 'UI library' } },
          { name: 'Vite', note: { hr: 'build tool', en: 'build tool' } },
          { name: 'Tailwind CSS', note: { hr: 'utility-first styling', en: 'utility-first styling' } },
        ],
      },
      {
        label: L.backend,
        items: [
          { name: 'Java' },
          { name: 'Spring Boot', note: { hr: 'REST API framework', en: 'REST API framework' } },
          { name: 'AWS', note: { hr: 'deployment', en: 'deployment' } },
        ],
      },
      {
        label: L.database,
        items: [
          { name: 'PostgreSQL', note: { hr: 'relacijska baza', en: 'relational database' } },
          {
            name: 'Docker',
            note: {
              hr: 'kontejnerizacija baze, deploy na AWS',
              en: 'database containerization, deployed on AWS',
            },
          },
        ],
      },
      {
        label: L.authPayments,
        items: [
          { name: 'OAuth 2.0', note: { hr: 'preko GitHuba', en: 'via GitHub' } },
          {
            name: 'Stripe',
            note: {
              hr: 'integracija za naplatu rezervacija i članarina',
              en: 'integration for reservation and membership payments',
            },
          },
        ],
      },
    ],
    cardTech: ['React', 'Spring Boot', 'PostgreSQL', 'OAuth 2.0', 'Stripe'],
    gallery: [
      ph('GearShare - Catalog'),
      ph('GearShare - Map'),
      ph('GearShare - Reservation'),
      ph('GearShare - Retailer Dashboard'),
    ],
  },

  {
    slug: 'learnflow',
    title: 'LearnFlow',
    shortDesc: {
      hr: 'Planer učenja za studente - praćenje dnevnog plana i stvarno utrošenog vremena uz generiranje grafova aktivnosti.',
      en: 'A study planner for students - daily planning and time tracking with activity charts.',
    },
    category: 'Web App',
    context: { hr: 'FER - kolegijski projekt', en: 'FER - course project' },
    role: { hr: 'Backend (timski projekt)', en: 'Backend (team project)' },
    status: 'live',
    year: '2026',
    featured: false,
    links: {
      github: 'https://github.com/SigmaGrindset/projekt-r',
      live: 'https://projekt-r-zeta.vercel.app/',
    },
    overview: [
      {
        hr: 'Web aplikacija koja pomaže učenicima i studentima u planiranju učenja. Omogućuje unos dnevnog plana po pojedinim predmetima i praćenje stvarnog vremena utrošenog za učenje - kroz unos trajanja i opisa svake aktivnosti.',
        en: 'A web app that helps pupils and students plan their studying. You can enter a daily plan per subject and track the time you actually spent studying, by logging the duration and description of each activity.',
      },
      {
        hr: 'Iz prikupljenih podataka aplikacija generira različite grafove kroz koje korisnici lakše prate svoje obrasce učenja, identificiraju gdje gube vrijeme i koji ih predmeti najviše opterećuju.',
        en: 'From this data the app generates charts so users can spot their study patterns, see where time goes and which subjects weigh on them the most.',
      },
    ],
    features: [
      { hr: 'Unos dnevnog plana učenja po predmetima', en: 'Daily study plan entry per subject' },
      { hr: 'Praćenje stvarno utrošenog vremena', en: 'Tracking of time actually spent' },
      { hr: 'Opis i trajanje svake aktivnosti', en: 'Description and duration of each activity' },
      {
        hr: 'Grafovi aktivnosti - usporedba plana i stvarnog vremena',
        en: 'Activity charts - planned vs. actual time',
      },
      { hr: 'Pregled po predmetu i po danu', en: 'Per-subject and per-day overview' },
    ],
    techStack: [
      {
        label: L.backend,
        items: [
          { name: 'Node.js', note: { hr: 'JavaScript runtime', en: 'JavaScript runtime' } },
          { name: 'Express', note: { hr: 'REST API framework', en: 'REST API framework' } },
        ],
      },
      {
        label: L.database,
        items: [
          { name: 'PostgreSQL', note: { hr: 'relacijska baza', en: 'relational database' } },
          { name: 'Docker', note: { hr: 'kontejnerizacija baze', en: 'database containerization' } },
        ],
      },
    ],
    gallery: [ph('LearnFlow - Plan'), ph('LearnFlow - Graphs')],
  },

  {
    slug: 'spotilens',
    title: 'SpotiLens',
    shortDesc: {
      hr: 'Full-stack aplikacija spojena na Spotify API - prikazuje statistiku slušanja artista, pjesama i albuma s mogućnošću uploada dodatnih podataka.',
      en: 'A full-stack app connected to the Spotify API - listening stats for artists, songs and albums, with optional data uploads.',
    },
    category: 'Web App',
    context: { hr: 'Solo projekt', en: 'Solo project' },
    role: { hr: 'Full-stack', en: 'Full-stack' },
    status: 'dev',
    year: '2024',
    featured: false,
    links: {
      github: 'https://github.com/SigmaGrindset/spotify_stats',
      live: 'https://spotify-stats-frontend-phi.vercel.app/',
    },
    overview: [
      {
        hr: 'Web aplikacija koja koristi Spotify API za prikaz statistike slušanja glazbe - top artisti, pjesme i albumi kroz različite vremenske periode.',
        en: 'A web app that uses the Spotify API to show listening stats - top artists, songs and albums across different time ranges.',
      },
      {
        hr: 'Pored API podataka, aplikacija podržava upload detaljne povijesti slušanja (extended streaming history) iz Spotify privacy izvoza, što omogućuje analitiku koja kroz čisti API nije dostupna - npr. statistike po godini, broj sati, dnevni obrasci.',
        en: "Beyond the API data, the app supports uploading the extended streaming history from Spotify's privacy export, unlocking analytics the API alone doesn't expose - like yearly stats, total hours and daily patterns.",
      },
      {
        hr: 'Zbog nedavnih promjena u Spotify API-u, aplikacije više ne mogu dobiti "extended quota mode" nego ostaju u dev modu. Deploy je živ, ali pristup je ograničen - funkcionira samo za manualno dodane Spotify račune.',
        en: 'Due to recent changes in the Spotify API, apps can no longer get "extended quota mode" and stay stuck in dev mode. The deploy is live but access is limited - it only works for manually-added Spotify accounts.',
      },
    ],
    features: [
      {
        hr: 'Top artisti, pjesme i albumi (kratki, srednji i dugi period)',
        en: 'Top artists, songs and albums (short, medium and long range)',
      },
      {
        hr: 'Upload extended streaming history (JSON)',
        en: 'Upload extended streaming history (JSON)',
      },
      {
        hr: 'Analitika koja nije dostupna kroz API - sati slušanja, godišnje statistike',
        en: 'Analytics not exposed via the API - listening hours, yearly stats',
      },
      { hr: 'Detalji pojedinog artista i albuma', en: 'Per-artist and per-album details' },
      { hr: 'Personalizirana dashboard kartica', en: 'Personalized dashboard card' },
    ],
    techStack: [
      {
        label: L.frontend,
        items: [{ name: 'React', note: { hr: 'UI library', en: 'UI library' } }],
      },
      {
        label: L.backend,
        items: [
          { name: 'Node.js', note: { hr: 'JavaScript runtime', en: 'JavaScript runtime' } },
          { name: 'Express', note: { hr: 'REST API framework', en: 'REST API framework' } },
        ],
      },
      {
        label: L.database,
        items: [{ name: 'MongoDB', note: { hr: 'dokumentska baza', en: 'document database' } }],
      },
      {
        label: L.external,
        items: [
          {
            name: 'Spotify Web API',
            note: { hr: 'vanjski izvor podataka', en: 'external data source' },
          },
        ],
      },
    ],
    gallery: [
      ph('SpotiLens - Dashboard'),
      ph('SpotiLens - Top Artists'),
      ph('SpotiLens - Upload'),
    ],
  },

  {
    slug: 'nba-scraper',
    title: 'NBA Scraper',
    shortDesc: {
      hr: 'Automatizirani scraper koji prikuplja podatke o NBA utakmicama i prikazuje ih kroz jednostavan web prikaz.',
      en: 'An automated scraper that collects NBA game data and presents it through a simple web view.',
    },
    category: 'Scraping',
    context: { hr: 'Solo projekt', en: 'Solo project' },
    role: { hr: 'Full-stack', en: 'Full-stack' },
    status: 'archived',
    year: '2023',
    featured: false,
    links: { github: 'https://github.com/SigmaGrindset/nba-stats' },
    overview: [
      {
        hr: 'Web stranica koja automatizirano prikuplja podatke o NBA utakmicama i prikazuje ih korisniku.',
        en: 'A website that automatically collects NBA game data and presents it to the user.',
      },
      {
        hr: 'Scraping kroz Selenium i BeautifulSoup za izvore koji zahtijevaju JS rendering. Rezultati se prikazuju kroz jednostavan Node.js web layer.',
        en: 'Scraping done with Selenium and BeautifulSoup for sources that require JS rendering. Results are served through a simple Node.js web layer.',
      },
    ],
    techStack: [
      {
        label: L.scraping,
        items: [
          { name: 'Python', note: { hr: 'scripting', en: 'scripting' } },
          { name: 'Selenium', note: { hr: 'browser automation', en: 'browser automation' } },
          { name: 'BeautifulSoup', note: { hr: 'HTML parsiranje', en: 'HTML parsing' } },
        ],
      },
      {
        label: L.web,
        items: [{ name: 'Node.js', note: { hr: 'JavaScript runtime', en: 'JavaScript runtime' } }],
      },
    ],
    gallery: [ph('NBA Scraper - Games List')],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  return {
    prev: idx > 0 ? projects[idx - 1] : undefined,
    next: idx < projects.length - 1 ? projects[idx + 1] : undefined,
  };
}

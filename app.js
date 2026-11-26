// Edit the translations below to change the portfolio text in either language.
const translations = {
  en: {
    skip: "Skip to content",
    menu: "Menu",
    navWork: "Work",
    navAbout: "About",
    navSkills: "Skills",
    navContact: "Contact",
    heroEyebrow: "Portfolio of Mohamed Amine Nejdi",
    heroTitle: "Useful web apps",
    heroAccent: "built with JavaScript",
    heroLead:
      "I build with JavaScript and Node.js, from participant registration and organiser tools to appointment booking.",
    explore: "Explore my work",
    getInTouch: "Get in touch",
    artCaption: "A project preview from my portfolio",
    scrollExplore: "Selected projects ↓",
    heroFootnote: "JavaScript · Node.js · Cloudflare",
    heroPreviewAria: "Preview of the Community Tombola entry page",
    entryPreviewLabel: "Participant entry",
    entryPreviewTitle: "Enter the draw",
    nameField: "Full name",
    phoneField: "Moroccan mobile number",
    submitEntry: "Submit entry",
    drawTicket: "COMMUNITY DRAW",
    ticketCaption: "A simple entry, managed privately",
    selectedProjects: "Selected projects",
    thingsBuilt: "Things I’ve built",
    workIntro:
      "Practical projects that help me learn how to design, build, and improve web software.",
    aboutEyebrow: "About me",
    aboutTitle: "Curious by nature",
    aboutAccent: "Builder by practice",
    aboutText1:
      "I’m growing my skills in JavaScript and Node.js by making complete projects, not just isolated exercises. I enjoy taking an idea from a simple screen to working features that people can use.",
    aboutText2:
      "My current focus is clear front-end experiences, reliable server-side logic, and learning how to ship projects responsibly.",
    talkProject: "Talk about a project",
    skillsEyebrow: "Tools I’m practising",
    toolkit: "My current toolkit",
    skillsIntro:
      "I focus on JavaScript and build fundamentals before adding frameworks.",
    responsive: "Responsive design",
    contactEyebrow: "Have an idea?",
    contactTitle: "Let’s make something",
    contactAccent: "useful together",
    contactCopy:
      "I’m open to feedback, junior opportunities, and small projects where I can learn and contribute.",
    emailMe: "Email me",
    callMe: "Call me",
    footerBuilt: "Designed and built with HTML, CSS, and JavaScript.",
    projectCategory: "JavaScript web app",
    projectDescription:
      "A multilingual community draw with participant registration, Moroccan phone validation, a private organiser dashboard, CSV export, and a one-time random draw.",
    bookingCategory: "JavaScript · Cloudflare app",
    bookingDescription:
      "An appointment booking demo with service selection, available time slots, duplicate booking protection, cancellation codes, and an organiser dashboard, powered by Cloudflare Workers and D1.",
    liveDemo: "Live demo",
    inDevelopment: "In development",
    participantLink: "Visit participant draw",
    organizerLink: "Organiser sign-in",
    bookingLink: "Open booking demo",
    projectLabel: "Project",
    bookingTitle: "Appointment booking demo",
    languageButton: "Français",
    languageAria: "Passer en français",
    pageTitle: "Mohamed Amine Nejdi | JavaScript & Node.js Developer",
    pageDescription:
      "Portfolio of Mohamed Amine Nejdi, a JavaScript and Node.js developer building useful web apps.",
  },
  fr: {
    skip: "Aller au contenu",
    menu: "Menu",
    navWork: "Projets",
    navAbout: "À propos",
    navSkills: "Compétences",
    navContact: "Contact",
    heroEyebrow: "Portfolio de Mohamed Amine Nejdi",
    heroTitle: "Des applications web utiles",
    heroAccent: "créées en JavaScript",
    heroLead:
      "Je développe avec JavaScript et Node.js, de l’inscription des participants aux outils d’organisation et à la réservation de rendez-vous.",
    explore: "Voir mes projets",
    getInTouch: "Me contacter",
    artCaption: "Aperçu d’un projet de mon portfolio",
    scrollExplore: "Projets sélectionnés ↓",
    heroFootnote: "JavaScript · Node.js · Cloudflare",
    heroPreviewAria:
      "Aperçu de la page d’inscription à la tombola communautaire",
    entryPreviewLabel: "Inscription des participants",
    entryPreviewTitle: "Participer au tirage",
    nameField: "Nom complet",
    phoneField: "Numéro de mobile marocain",
    submitEntry: "Envoyer l’inscription",
    drawTicket: "TOMBOLA COMMUNAUTAIRE",
    ticketCaption: "Inscription simple, gestion privée",
    selectedProjects: "Projets sélectionnés",
    thingsBuilt: "Mes réalisations",
    workIntro:
      "Des projets pratiques pour apprendre à concevoir, créer et améliorer des applications web.",
    aboutEyebrow: "À propos de moi",
    aboutTitle: "Curieux de nature",
    aboutAccent: "Créateur par la pratique",
    aboutText1:
      "Je développe mes compétences en JavaScript et Node.js en créant des projets complets, pas seulement des exercices isolés. J’aime transformer une idée en fonctionnalités concrètes que chacun peut utiliser.",
    aboutText2:
      "Je me concentre sur des interfaces claires, une logique serveur fiable et les bonnes pratiques pour mettre un projet en ligne.",
    talkProject: "Parlons d’un projet",
    skillsEyebrow: "Mes outils",
    toolkit: "Mes compétences actuelles",
    skillsIntro:
      "Je travaille sur l’écosystème JavaScript et ses fondamentaux avant d’ajouter des frameworks.",
    responsive: "Design adaptatif",
    contactEyebrow: "Un projet en tête ?",
    contactTitle: "Créons quelque chose",
    contactAccent: "d’utile ensemble",
    contactCopy:
      "Je suis ouvert aux conseils, aux opportunités de début de carrière et aux petits projets qui me permettront d’apprendre et de contribuer.",
    emailMe: "M’envoyer un e-mail",
    callMe: "M’appeler",
    footerBuilt: "Conçu et réalisé en HTML, CSS et JavaScript.",
    projectCategory: "Application web JavaScript",
    projectDescription:
      "Une tombola communautaire multilingue avec inscription, validation des numéros marocains, espace organisateur privé, export CSV et tirage au sort unique.",
    bookingCategory: "Application JavaScript · Cloudflare",
    bookingDescription:
      "Une démo de réservation avec choix du service, créneaux disponibles, protection contre les doublons, codes d’annulation et espace organisateur, propulsée par Cloudflare Workers et D1.",
    liveDemo: "Démo en ligne",
    inDevelopment: "En développement",
    participantLink: "Accéder à la tombola",
    organizerLink: "Connexion organisateur",
    bookingLink: "Ouvrir la démo de réservation",
    projectLabel: "Projet",
    bookingTitle: "Démo de réservation",
    languageButton: "English",
    languageAria: "Switch to English",
    pageTitle: "Mohamed Amine Nejdi | Développeur JavaScript et Node.js",
    pageDescription:
      "Portfolio de Mohamed Amine Nejdi, développeur JavaScript et Node.js qui crée des applications web utiles.",
  },
};

const tombolaBaseUrl = "https://community-tombola.my-siteamine.workers.dev";
const projects = [
  {
    number: "01",
    title: "Community Tombola",
    categoryKey: "projectCategory",
    descriptionKey: "projectDescription",
    statusKey: "liveDemo",
    visual: "tombola",
    stack: ["JavaScript", "Cloudflare Workers", "D1 SQL"],
    links: [
      { key: "participantLink", url: tombolaBaseUrl },
      { key: "organizerLink", url: `${tombolaBaseUrl}/admin` },
    ],
  },
  {
    number: "02",
    titleKey: "bookingTitle",
    categoryKey: "bookingCategory",
    descriptionKey: "bookingDescription",
    statusKey: "liveDemo",
    visual: "booking",
    stack: ["JavaScript", "Cloudflare Workers", "D1 SQL"],
    links: [
      {
        key: "bookingLink",
        url: "https://appointment-booking-demo.my-siteamine.workers.dev/",
      },
    ],
  },
];

const projectGrid = document.querySelector("#project-grid");
const year = document.querySelector("#year");
const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#site-nav");
const languageToggle = document.querySelector("#language-toggle");
let currentLanguage =
  localStorage.getItem("portfolio-language") === "fr" ? "fr" : "en";

function renderProjects(language) {
  if (!projectGrid) return;
  const t = translations[language];
  projectGrid.innerHTML = projects
    .map(
      (project) => `
    <article class="project-card">
      <div class="project-top"><span class="project-number">${project.number} / ${t.projectLabel}</span><span class="status-pill"><span></span>${t[project.statusKey]}</span></div>
      ${project.visual === "booking" ? '<div class="project-visual booking-visual" aria-hidden="true"><div class="calendar-card"><span class="calendar-top"></span><span class="calendar-date">24</span><span class="calendar-lines"><i></i><i></i><i></i></span><span class="calendar-check">✓</span></div></div>' : '<div class="project-visual tombola-visual" aria-hidden="true"><span class="visual-orbit orbit-one"></span><span class="visual-orbit orbit-two"></span><span class="visual-ticket">LUCK<br><b>+&nbsp; COMMUNITY</b></span><span class="visual-spark">✳</span></div>'}
      <div class="project-info"><p class="eyebrow">${t[project.categoryKey]}</p><h3>${project.titleKey ? t[project.titleKey] : project.title}</h3><p class="project-description">${t[project.descriptionKey]}</p><div class="tag-list">${project.stack.map((tag) => `<span>${tag}</span>`).join("")}</div>${
        project.links.some((link) => link.url)
          ? `<div class="project-links">${project.links
              .filter((link) => link.url)
              .map(
                (link) =>
                  `<a class="project-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${t[link.key]} <span aria-hidden="true">↗</span></a>`,
              )
              .join("")}</div>`
          : ""
      }</div>
    </article>
  `,
    )
    .join("");
}

function setLanguage(language) {
  currentLanguage = language;
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = t.pageTitle;
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", t.pageDescription);
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  document
    .querySelector(".hero-art")
    ?.setAttribute("aria-label", t.heroPreviewAria);
  languageToggle.textContent = t.languageButton;
  languageToggle.setAttribute("aria-label", t.languageAria);
  nav?.setAttribute(
    "aria-label",
    language === "fr" ? "Navigation principale" : "Main navigation",
  );
  renderProjects(language);
  localStorage.setItem("portfolio-language", language);
}

if (year) year.textContent = new Date().getFullYear();
setLanguage(currentLanguage);
languageToggle?.addEventListener("click", () =>
  setLanguage(currentLanguage === "en" ? "fr" : "en"),
);
menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  nav?.classList.toggle("is-open", !isOpen);
});
nav?.querySelectorAll("a").forEach((link) =>
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }),
);

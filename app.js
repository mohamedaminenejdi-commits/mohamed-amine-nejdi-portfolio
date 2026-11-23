// Edit the translations below to change the portfolio text in either language.
const translations = {
  en: {
    skip: "Skip to content",
    menu: "Menu",
    navWork: "Work",
    navAbout: "About",
    navSkills: "Skills",
    navContact: "Contact",
    availability: "OPEN TO JUNIOR OPPORTUNITIES",
    heroLead:
      "JavaScript and Node.js developer based in Morocco. I learn by building useful web projects, from participant-facing websites to server-side tools.",
    explore: "Explore my work",
    getInTouch: "Get in touch",
    artCaption: "LEARNING BY BUILDING",
    basedIn: "BASED IN MOROCCO",
    scrollExplore: "SCROLL TO EXPLORE",
    selectedProjects: "SELECTED PROJECTS",
    thingsBuilt: "Things I’ve built",
    workIntro:
      "A growing collection of practical projects. Each one teaches me something new about designing, building, and improving web software.",
    aboutEyebrow: "A LITTLE ABOUT ME",
    aboutTitle: "Curious by nature.",
    aboutAccent: "Builder by practice.",
    aboutText1:
      "I’m growing my skills in JavaScript and Node.js by making complete projects, not just isolated exercises. I enjoy taking an idea from a simple screen to working features that people can use.",
    aboutText2:
      "My current focus is clean front-end experiences, reliable server-side logic, and learning how to ship projects responsibly.",
    talkProject: "Let’s talk about a project",
    skillsEyebrow: "TOOLS I’M PRACTISING",
    toolkit: "My current toolkit",
    skillsIntro:
      "I focus on the JavaScript ecosystem and build fundamentals before adding frameworks.",
    responsive: "Responsive design",
    nextEyebrow: "WHAT I’M BUILDING NEXT",
    nextTitle: "Appointment booking<br>and management app",
    nextDescription:
      "A small business tool for services, availability, bookings, and cancellations — built with a Node.js API and a JavaScript front end.",
    idea: "PROJECT IDEA",
    nextDetails:
      "This will show a different set of skills from my Tombola: scheduling, database relationships, authentication, and booking workflows.",
    suggestCollab: "Suggest a collaboration",
    contactEyebrow: "HAVE AN IDEA?",
    contactTitle: "Let’s make something",
    contactAccent: "useful together.",
    contactCopy:
      "I’m open to feedback, junior opportunities, and small projects where I can learn and contribute.",
    emailMe: "Email me",
    callMe: "Call me",
    footerBuilt: "Designed and built with HTML, CSS, and JavaScript.",
    projectCategory: "JAVASCRIPT WEB APP",
    projectDescription:
      "A multilingual community draw with participant registration, Moroccan phone validation, a private organiser dashboard, CSV export, and a one-time random draw.",
    liveDemo: "LIVE DEMO",
    participantLink: "Visit participant draw",
    organizerLink: "Organizer sign-in",
    projectLabel: "PROJECT",
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
    availability: "À LA RECHERCHE D’UN PREMIER POSTE",
    heroLead:
      "Développeur JavaScript et Node.js basé au Maroc. J’apprends en créant des projets web utiles, des sites destinés aux participants aux outils côté serveur.",
    explore: "Découvrir mes projets",
    getInTouch: "Me contacter",
    artCaption: "APPRENDRE EN CRÉANT",
    basedIn: "BASÉ AU MAROC",
    scrollExplore: "DÉFILER POUR EXPLORER",
    selectedProjects: "PROJETS SÉLECTIONNÉS",
    thingsBuilt: "Mes réalisations",
    workIntro:
      "Une collection grandissante de projets pratiques. Chacun m’apprend à concevoir, créer et améliorer des applications web.",
    aboutEyebrow: "À PROPOS DE MOI",
    aboutTitle: "Curieux de nature.",
    aboutAccent: "Créateur par passion.",
    aboutText1:
      "Je développe mes compétences en JavaScript et Node.js en créant des projets complets, pas seulement des exercices isolés. J’aime transformer une idée en fonctionnalités concrètes que chacun peut utiliser.",
    aboutText2:
      "Je me concentre sur des interfaces claires, une logique serveur fiable et les bonnes pratiques pour mettre un projet en ligne.",
    talkProject: "Parlons de votre projet",
    skillsEyebrow: "MES OUTILS",
    toolkit: "Mes compétences actuelles",
    skillsIntro:
      "Je me concentre sur l’écosystème JavaScript et ses fondamentaux avant d’ajouter des frameworks.",
    responsive: "Design adaptatif",
    nextEyebrow: "MON PROCHAIN PROJET",
    nextTitle: "Application de réservation<br>et de gestion de rendez-vous",
    nextDescription:
      "Un outil pour petites entreprises : services, disponibilités, réservations et annulations, avec une API Node.js et une interface JavaScript.",
    idea: "IDÉE DE PROJET",
    nextDetails:
      "Ce projet complétera ma Tombola avec d’autres compétences : gestion des horaires, relations entre données, authentification et réservations.",
    suggestCollab: "Proposer une collaboration",
    contactEyebrow: "UN PROJET EN TÊTE ?",
    contactTitle: "Créons quelque chose",
    contactAccent: "d’utile ensemble.",
    contactCopy:
      "Je suis ouvert aux conseils, aux opportunités de début de carrière et aux petits projets qui me permettront d’apprendre et de contribuer.",
    emailMe: "M’envoyer un e-mail",
    callMe: "M’appeler",
    footerBuilt: "Conçu et réalisé en HTML, CSS et JavaScript.",
    projectCategory: "APPLICATION WEB JAVASCRIPT",
    projectDescription:
      "Une tombola communautaire multilingue avec inscription, validation des numéros marocains, espace organisateur privé, export CSV et tirage au sort unique.",
    liveDemo: "DÉMO EN LIGNE",
    participantLink: "Accéder à la tombola",
    organizerLink: "Connexion organisateur",
    projectLabel: "PROJET",
    languageButton: "English",
    languageAria: "Switch to English",
    pageTitle: "Mohamed Amine Nejdi | Développeur JavaScript et Node.js",
    pageDescription:
      "Portfolio de Mohamed Amine Nejdi, développeur JavaScript et Node.js qui crée des applications web utiles.",
  },
};

const tombolaBaseUrl = "https://community-tombola.fiat-tomobola.workers.dev";
const projects = [
  {
    number: "01",
    title: "Community Tombola",
    stack: ["JavaScript", "Cloudflare Workers", "D1 SQL"],
    links: [
      { key: "participantLink", url: tombolaBaseUrl },
      { key: "organizerLink", url: `${tombolaBaseUrl}/admin` },
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
      <div class="project-top"><span class="project-number">${project.number} / ${t.projectLabel}</span><span class="status-pill"><span></span>${t.liveDemo}</span></div>
      <div class="project-visual tombola-visual" aria-hidden="true"><span class="visual-orbit orbit-one"></span><span class="visual-orbit orbit-two"></span><span class="visual-ticket">LUCK<br><b>+&nbsp; COMMUNITY</b></span><span class="visual-spark">✳</span></div>
      <div class="project-info"><p class="eyebrow">${t.projectCategory}</p><h3>${project.title}</h3><p class="project-description">${t.projectDescription}</p><div class="tag-list">${project.stack.map((tag) => `<span>${tag}</span>`).join("")}</div><div class="project-links">${project.links.map((link) => `<a class="project-link" href="${link.url}" target="_blank" rel="noopener noreferrer">${t[link.key]} <span aria-hidden="true">↗</span></a>`).join("")}</div></div>
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

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle?.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  });
});

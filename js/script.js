const translations = {
    en: {
      "navAbout": "About",
      "navProjects": "Projects",
      "navContact": "Contact",
      "aboutGreetings": "Hi, I'm Nasratullah Jabarkhil",
      "aboutContent": "a multiplatform application developer",
      "mainHeader": "These are some of my projects",
      "project1": "Tribute Page",
      "project2": "Random Quote Machine",
      "project3": "JavaScript Calculator",
      "project4": "Map Data Across The Globe",
      "project5": "Wikipedia Viewer",
      "project6": "Tik Tok Toe Game",
      "showAllBtn": "Show All >",
      "sectionText1": "Let's work together",
      "sectionText2": "How do you take your coffee?",
      "contactTitle": "Contactar",
      "nameLabel": "Nombre:",
      "emailLabel": "Correo:",
      "subjectLabel": "Asunto:",
      "messageLabel": "Mensaje:",
      "sendMessageBtn": "Send Message",
      "downloadCV": "Download CV",
      "footerText": "**This is just a fake portfolio. All the projects and contact details given are not real."
    },
    es: {
      "navAbout": "Sobre mí",
      "navProjects": "Proyectos",
      "navContact": "Contacto",
      "aboutGreetings": "Hola, Soy Nasratullah Jabarkhil",
      "aboutContent": "un desarrollador de aplicaciones multiplataforma",
      "mainHeader": "Estos son algunos de mis proyectos",
      "project1": "Página de Tributo",
      "project2": "Máquina de Citas Aleatorias",
      "project3": "Calculadora JavaScript",
      "project4": "Mapa de Datos en Todo el Mundo",
      "project5": "Visor de Wikipedia",
      "project6": "Juego de Tik Tok Toe",
      "showAllBtn": "Mostrar Todo >",
      "sectionText1": "Trabajemos juntos",
      "sectionText2": "¿Cómo tomas tu café?",
      "contactTitle": "Contactar",
      "nameLabel": "Nombre:",
      "emailLabel": "Correo:",
      "subjectLabel": "Asunto:",
      "messageLabel": "Mensaje:",
      "sendMessageBtn": "Enviar Mensaje",
      "downloadCV": "Descargar CV",
      "footerText": "**Este es solo un portafolio falso. Todos los proyectos y detalles de contacto dados no son reales."
    }
  };
  
  function loadTranslations(lang) {
    applyTranslations(lang);
  }
  
  function applyTranslations(lang) {
    // Para los elementos con id
    document.querySelectorAll('[id]').forEach(element => {
      const key = element.id;
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  
    // Para los elementos con clase
    document.querySelectorAll('[class*="trans-"]').forEach(element => {
      const key = element.className.split(' ').find(cls => cls.startsWith('trans-')).substring(6);
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });
  }
  
  function setLanguage(lang) {
    localStorage.setItem('lang', lang);
    loadTranslations(lang);
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('lang') || 'en';
    setLanguage(savedLang);
  });
  
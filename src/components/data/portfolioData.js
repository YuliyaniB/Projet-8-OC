/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * 
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/booki.webp',
		title: 'Booki',
		skills: ['HTML', 'CSS'],
		descripcion:
			"Créez la page d'accueil d'une agence de voyage avec HTML & CSS. Réalisation d'une interface utilisateur responsive pour Booki, une plateforme de réservation. Ce projet, issu du parcours OpenClassrooms, m'a permis de maîtriser les bases du HTML5 et CSS3, tout en intégrant des bonnes pratiques de développement web et d'accessibilité. Résultat : une interface moderne et adaptée à tous les supports.",
		demoURL: 'https://yuliyanib.github.io/Projet-2-OC/',
		repoURL: 'https://github.com/YuliyaniB/Projet-2-OC',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/sophiebluel.webp',
		title: 'Sophie Bluel',
		skills: ['JavaScript'],
		descripcion:
			"Développement d'un site web dynamique pour Sophie Bluel, architecte d'intérieur. Ce projet OpenClassrooms m'a permis de renforcer mes compétences en JavaScript, en particulier sur l'intégration d'une API pour afficher des projets en temps réel. Résultat : un site moderne, fonctionnel et interactif, offrant une expérience utilisateur fluide.",
		demoURL: '',
		repoURL: 'https://github.com/YuliyaniB/Projet-3-OC',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/ninacarducci.webp',
		title: 'Nina Carducci',
		skills: ['', 'Lighthouse'],
		descripcion: "Analyse, correction et optimisation du site web de Nina Carducci, photographe professionnelle. Ce projet OpenClassrooms m'a permis de renforcer mes compétences en résolution de bugs, optimisation des performances et amélioration de l'accessibilité web. Résultat : un site fonctionnel, fluide et conforme aux standards modernes.",
		demoURL: 'https://yuliyanib.github.io/Projet-4-OC/',
		repoURL: 'https://github.com/YuliyaniB/Projet-4-OC',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/kasa.webp',
		title: 'Kasa',
		skills: ['React', 'Sass'],
		descripcion:
			"Développement d'une application web pour Kasa, une plateforme de location. Ce projet OpenClassrooms m'a permis de consolider mes compétences en React, notamment avec la gestion des états, des composants dynamiques et la navigation. Le résultat : une interface intuitive, moderne et entièrement responsive pour une expérience utilisateur optimale.",
		demoURL: 'https://projet-5-oc-mu.vercel.app/',
		repoURL: 'https://github.com/YuliyaniB/Projet-5-OC',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/vieuxgrimoire.webp',
		title: 'Mon vieux grimoire',
		skills: ['NodeJS', 'MongoDB'],
		descripcion: "Développement d'une application web sécurisée pour gérer une bibliothèque personnelle. Ce projet OpenClassrooms m'a permis d'acquérir des compétences en Node.js, Express et MongoDB, notamment sur la création d'API RESTful et la gestion de l'authentification. Résultat : une application robuste et intuitive pour cataloguer et partager des livres.",
		demoURL: '',
		repoURL: 'https://github.com/YuliyaniB/Projet-6-OC',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/menumaker.webp',
		title: 'Menu Maker',
		skills: ['Notion', ''],
		descripcion: "Organisation et gestion du projet MenuMaker en utilisant des outils de productivité tels que Notion et Feedly. Ce projet OpenClassrooms m'a permis de structurer le processus de développement, de planifier les tâches et d'assurer une veille continue pour améliorer l'efficacité et la qualité du projet. Résultat : une gestion fluide du projet, garantissant le respect des délais et des objectifs.",
		demoURL:
			'https://bejewled-aardvark-968.notion.site/128ecc2129e380e08956c73bb148ff49?v=128ecc2129e3817fa48b000cd87918c4',
		repoURL: '',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	HTML: 'skill-icons:html',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	NodeJS: 'skill-icons:nodejs-light',
	Express: 'skill-icons:express',
	MongoDB: 'skill-icons:mongodb',
	Lighthouse: 'skill-icons:lighthouse-light',
	Notion: 'skill-icons:notion-light',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});

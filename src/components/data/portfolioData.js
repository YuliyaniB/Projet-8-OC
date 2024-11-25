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
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/booki.png',
		title: 'Booki',
		skills: ['HTML', 'CSS'],
		descripcion:
			"Créez la page d'accueil d'une agence de voyage avec HTML & CSS",
		demoURL: '',
		repoURL: 'https://github.com/YuliyaniB/Projet-2-OC',
		anim: 'fade-right',
	},
	{
		imgSrc: '/img/sophiebluel.png',
		title: 'Sophie Bluel',
		skills: ['JavaScript'],
		descripcion:
			'Créez une page web dynamique avec JavaScript',
		demoURL: '',
		repoURL: 'https://github.com/YuliyaniB/Projet-3-OC',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/Dashboard.png',
		title: 'Nina Carducci',
		skills: ['React', 'Lighthouse'],
		descripcion:
			'Débuggez et optimisez un site de photographe',
		demoURL: 'https://yuliyanib.github.io/Projet-4-OC/',
		repoURL: 'https://github.com/YuliyaniB/Projet-4-OC',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/kasa.png',
		title: 'Kasa',
		skills: ['React', 'Sass'],
		descripcion:
			'Créez une application web de location immobilière avec React',
		demoURL: '',
		repoURL: 'https://github.com/YuliyaniB/Projet-5-OC',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/vieuxgrimoire.png',
		title: 'Mon vieux grimoire',
		skills: ['NodeJS', 'MongoDB'],
		descripcion:
			"Développez le back-end d'un site de notation de livres",
		demoURL: '',
		repoURL: 'https://github.com/YuliyaniB/Projet-6-OC',
		anim: 'fade-left',
	},
	{
		imgSrc: '/img/menumaker.png',
		title: 'Menu Maker',
		skills: ['React', 'StyledComponents'],
		descripcion:
			'Planifiez le développement du site de votre client',
		demoURL: '',
		repoURL: '',
		anim: 'fade-right',
	}
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	HTML: 'skill-icons:html',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	NodeJS: 'skill-icons:nodejs',
	Express: 'skill-icons:express',
	MongoDB: 'skill-icons:mongodb',
	Lighthouse: 'skill-icons:mysql'
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

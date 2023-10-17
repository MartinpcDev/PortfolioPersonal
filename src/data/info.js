import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';
import { BiLogoJavascript, BiLogoCss3, BiLogoReact } from 'react-icons/bi';
import { BsFillDatabaseFill, BsGit } from 'react-icons/bs';

export const skills = [
	{
		name: 'HTML5',
		icon: <AiOutlineHtml5 />
	},
	{
		name: 'CSS',
		icon: <BiLogoCss3 />
	},
	{
		name: 'JavaScript',
		icon: <BiLogoJavascript />
	},
	{
		name: 'Tailwindcss',
		icon: <SiTailwindcss />
	},
	{
		name: 'ReactJS',
		icon: <BiLogoReact />
	},
	{
		name: 'MySQL',
		icon: <BsFillDatabaseFill />
	},
	{
		name: 'Git',
		icon: <BsGit />
	}
];

export const proyects = [
	{
		titulo: '',
		img: '',
		descripcion: '',
		tecnologias: [
			{
				icono: '',
				color: ''
			}
		],
		links: [
			{
				url: '',
				demo: ''
			}
		]
	}
];

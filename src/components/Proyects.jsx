import { AiOutlineHtml5 } from 'react-icons/ai';
import { ProyectCard } from './ProyectCard';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';

export const Proyects = () => {
	const proyects = [
		{
			titulo: 'Challenge Encriptador',
			img: '/src/assets/ProyectsScreen/ChallengeEncrypt.webp',
			descripcion: 'Programa diseñado para encriptar y desencriptar textos',
			tecnologias: [
				{
					icono: <AiOutlineHtml5 />,
					color: '#ff6d05'
				},
				{
					icono: <BiLogoCss3 />,
					color: '#0c3bff'
				},
				{
					icono: <BiLogoJavascript />,
					color: '#ffda05'
				}
			],
			repo: 'https://github.com/MartinChristopherPC/ONE_Challenge_Encrypt',
			demo: 'https://martinchristopherpc.github.io/ONE_Challenge_Encrypt/'
		},
		{
			titulo: 'Challenge Portfolio',
			img: '/src/assets/ProyectsScreen/portfolio.webp',
			descripcion: 'Portfolio web parte del challenge de alura latam',
			tecnologias: [
				{
					icono: <AiOutlineHtml5 />,
					color: '#ff6d05'
				},
				{
					icono: <BiLogoCss3 />,
					color: '#0c3bff'
				},
				{
					icono: <BiLogoJavascript />,
					color: '#ffda05'
				}
			],
			repo: 'https://github.com/MartinChristopherPC/PortFolio',
			demo: 'https://martinpalomino.netlify.app/'
		},
		{
			titulo: 'Challenge AluraGeek',
			img: '/src/assets/ProyectsScreen/AluraGeek.webp',
			descripcion: 'Challenge Alura latam de diseño de un ecommerce',
			tecnologias: [
				{
					icono: <AiOutlineHtml5 />,
					color: '#ff6d05'
				},
				{
					icono: <BiLogoCss3 />,
					color: '#0c3bff'
				},
				{
					icono: <BiLogoJavascript />,
					color: '#ffda05'
				}
			],

			repo: 'https://github.com/MartinChristopherPC/ONE_Challenge_AluraGeek',
			demo: 'https://alurageekmartin.netlify.app/'
		},
		{
			titulo: 'Challenge AluraFlix',
			img: '/src/assets/ProyectsScreen/AluraFlix.webp',
			descripcion:
				'Challenge de alura latam hecho con React,React-Router, Tailwind y Consumo de Apis',
			tecnologias: [
				{
					icono: <BiLogoReact />,
					color: '#0582ff'
				},
				{
					icono: <SiTailwindcss />,
					color: '#00e2d0'
				}
			],
			repo: 'https://github.com/MartinChristopherPC/AluraFlix',
			demo: 'https://alura-flix-tan.vercel.app/'
		}
	];

	return (
		<section className='container w-full flex px-5 py-24 flex-col items-center justify-center mx-auto'>
			<h1 className='text-resaltadoGreen text-5xl font-titulos pb-7'>
				Proyects
			</h1>
			<div className='flex flex-wrap gap-8 w-full justify-center'>
				{proyects.map(
					({ titulo, img, descripcion, tecnologias, repo, demo }) => (
						<ProyectCard
							key={titulo}
							titulo={titulo}
							img={img}
							descripcion={descripcion}
							tecnologias={tecnologias}
							repo={repo}
							demo={demo}
						/>
					)
				)}
			</div>
		</section>
	);
};

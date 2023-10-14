import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiTailwindcss } from 'react-icons/si';
import { BiLogoJavascript, BiLogoCss3, BiLogoReact } from 'react-icons/bi';
import { BsFillDatabaseFill, BsGit } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

export const Skills = () => {
	const skills = [
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

	return (
		<section className='container w-full mx-auto flex px-5 py-24 flex-col items-center justify-center'>
			<h1 className='text-resaltadoRed text-5xl font-titulos pb-7'>Skills</h1>
			<div className='flex flex-row justify-center items-center text-center gap-5 flex-wrap duration-300'>
				{skills.map(skill => (
					<div className='text-titulos text-tamanotitulos flex flex-col items-center justify-center text-center pr-8 pl-8'>
						<span className='text-titulos'>{skill.icon}</span>
						<h1 className='text-parrafos text-tamanotitulos'>{skill.name}</h1>
					</div>
				))}
			</div>
		</section>
	);
};

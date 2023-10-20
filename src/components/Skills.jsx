import { AiOutlineHtml5 } from 'react-icons/ai';
import { ParallaxText } from '../utils/ParallaxText';
import { BiLogoCss3, BiLogoJavascript, BiLogoReact } from 'react-icons/bi';
import { SiTailwindcss } from 'react-icons/si';
import { BsFillDatabaseFill, BsGit } from 'react-icons/bs';

export const Skills = () => {
	const skills = [
		{
			icon: <AiOutlineHtml5 />,
			name: 'HTML5'
		},
		{
			icon: <BiLogoCss3 />,
			name: 'CSS'
		},
		{
			icon: <BiLogoJavascript />,
			name: 'JavaScript'
		},
		{
			icon: <SiTailwindcss />,
			name: 'Tailwindcss'
		},
		{
			icon: <BiLogoReact />,
			name: 'ReactJS'
		},
		{
			icon: <BsFillDatabaseFill />,
			name: 'MySQL'
		},
		{
			icon: <BsGit />,
			name: 'Git'
		}
	];

	return (
		<section
			id='skills'
			className='container w-full mx-auto flex px-5 py-24 flex-col items-center justify-center'>
			<h1 className='text-resaltadoRed text-5xl font-titulos pb-7'>Skills</h1>
			<div className='w-[100%] font-titulos overflow-hidden text-tamanotitulos gap-8 tracking-tight leading-3 m-0 whitespace-nowrap flex-nowrap p-6'>
				<ParallaxText baseVelocity={15}>
					{skills.map(({ icon, name }) => (
						<span className='flex flex-col items-center gap-2' key={name}>
							<i className='text-titulos font-titulos text-[35px]'>{icon}</i>
							<h1 className='text-parrafos text-tamanotitulos'>{name}</h1>
						</span>
					))}
				</ParallaxText>
			</div>
		</section>
	);
};

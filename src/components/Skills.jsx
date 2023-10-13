import { AiOutlineHtml5 } from 'react-icons/ai';
import { SiTailwindcss, SiMysql } from 'react-icons/si';
import { BiLogoJavascript, BiLogoCss3, BiLogoReact } from 'react-icons/bi';
import { BsFillDatabaseFill, BsGit } from 'react-icons/bs';

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
		<section className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center'>
			<div className='flex flex-col justify-center items-center'>
				<h1 className='text-resaltadoRed text-5xl font-titulos'>Skills</h1>
				<div className='flex flex-row justify-evenly gap-8 flex-wrap pt-7'>
					{skills.map(skill => (
						<div
							key={skill.name}
							className='text-parrafos text-tamanotitulos flex flex-col items-center justify-center text-center text-4xl'>
							<span className='text-titulos'>{skill.icon}</span>
							<h1 className='text-parrafos text-tamanotitulos'>{skill.name}</h1>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

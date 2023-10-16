import Logo from '../assets/images/logosinfondo.svg';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
	const date = () => {
		const fecha = new Date();
		return fecha.getFullYear();
	};
	return (
		<footer className='text-parrafoBajo bg-footer body-font'>
			<div className='container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col'>
				<a className='flex title-font font-medium items-center md:justify-start justify-center '>
					<img src={Logo} className='w-10' />
					<span className='ml-3 text-xl'>MartinPC</span>
				</a>
				<p className='text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4'>
					© {date()} MartinPC
				</p>
				<span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
					<a
						className='ml-3'
						href='https://github.com/MartinChristopherPC'
						target='_blank'>
						<AiFillGithub className='w-5 h-5' />
					</a>
					<a
						className='ml-3'
						href='https://www.linkedin.com/in/martinchris-palomino/'
						target='_blank'>
						<AiFillLinkedin className='w-5 h-5' />
					</a>
				</span>
			</div>
		</footer>
	);
};

import Logo from '../assets/images/logosinfondo.svg';

export const Header = () => {
	return (
		<section className='text-parrafos text-tamanoparrafos'>
			<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
				<a className='flex font-medium items-center text-titulos mb-4 md:mb-0'>
					<img src={Logo} className='w-10' />
					<span className='ml-3 text-titulos font-titulos'>MartinPC</span>
				</a>
				<nav className='md:ml-auto flex flex-wrap items-center justify-center'>
					<a
						className='mr-5 hover:text-titulos cursor-pointer font-titulos duration-300'
						href='#inicio'>
						Inicio
					</a>
					<a
						className='mr-5 hover:text-white cursor-pointer font-titulos duration-300'
						href='#habilidades'>
						Habilidades
					</a>
					<a
						className='mr-5 hover:text-white cursor-pointer font-titulos duration-300'
						href='#proyectos'>
						Proyectos
					</a>
					<a
						className='mr-5 hover:text-white cursor-pointer font-titulos duration-300'
						href='#contacto'>
						Contacto
					</a>
				</nav>
			</div>
		</section>
	);
};

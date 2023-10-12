import Logo from '../assets/logosinfondo.svg';

export const Header = () => {
	return (
		<>
			<header className='text-gray-400 body-font'>
				<div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
					<a className='flex title-font font-medium items-center text-white mb-4 md:mb-0'>
						<img src={Logo} className='w-10' />
						<span className='ml-3 text-xl'>MartinPC</span>
					</a>
					<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
						<a className='mr-5 hover:text-white cursor-pointer' href='#inicio'>
							Inicio
						</a>
						<a className='mr-5 hover:text-white cursor-pointer' href='#sobre'>
							Sobre Mi
						</a>
						<a
							className='mr-5 hover:text-white cursor-pointer'
							href='#habilidades'>
							Habilidades
						</a>
						<a
							className='mr-5 hover:text-white cursor-pointer'
							href='#proyectos'>
							Proyectos
						</a>
						<a
							className='mr-5 hover:text-white cursor-pointer'
							href='#contacto'>
							Contacto
						</a>
					</nav>
				</div>
			</header>
		</>
	);
};

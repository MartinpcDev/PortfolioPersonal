import Foto from '../assets/perfil.png';

export const Banner = () => {
	return (
		<section className='text-titulos'>
			<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
				<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<h1 className='title-font sm:text-4xl text-3xl mb-4 font-titulos text-titulos'>
						Hello,
						<br className='hidden lg:inline-block' />
						I'm Martin
						<span className='bg-resaltadoGreen text-principal ml-4 font-titulos'>
							Frontend Developer
						</span>
					</h1>
					<p className='mb-8 leading-relaxed text-parrafos text-tamanoparrafos'>
						Soy un desarrollador Frontend con mucha pasion de aprender y con
						gran entusiasmo con el dessarrollo de websites responsivos y
						amigables para el usuario.
					</p>
					<div className='flex justify-center gap-4'>
						<a
							className='relative px-5 py-3 overflow-hidden font-titulos text-secundario bg-titulos border border-titulos rounded-lg shadow-inner group'
							href='https://github.com/MartinChristopherPC'
							target='_blank'>
							<span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease'></span>
							<span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease'></span>
							<span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-150 bg-gray-600 group-hover:h-full ease'></span>
							<span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-150 bg-gray-600 group-hover:h-full ease'></span>
							<span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-secundario opacity-0 group-hover:opacity-100'></span>
							<span className='relative transition-colors duration-300 delay-150 group-hover:text-titulos ease'>
								Github
							</span>
						</a>
						<a
							className='relative px-5 py-3 overflow-hidden font-titulos text-secundario bg-titulos border border-titulos rounded-lg shadow-inner group'
							href='https://www.linkedin.com/in/martinchris-palomino/'
							target='_blank'>
							<span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease'></span>
							<span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease'></span>
							<span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-150 bg-gray-600 group-hover:h-full ease'></span>
							<span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-150 bg-gray-600 group-hover:h-full ease'></span>
							<span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-secundario opacity-0 group-hover:opacity-100'></span>
							<span className='relative transition-colors duration-300 delay-150 group-hover:text-titulos ease'>
								Linkedln
							</span>
						</a>
						<a
							className='relative px-5 py-3 overflow-hidden font-titulos text-secundario bg-titulos border border-titulos rounded-lg shadow-inner group'
							href=''
							target='_blank'>
							<span className='absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease'></span>
							<span className='absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease'></span>
							<span className='absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-150 bg-gray-600 group-hover:h-full ease'></span>
							<span className='absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-150 bg-gray-600 group-hover:h-full ease'></span>
							<span className='absolute inset-0 w-full h-full duration-300 delay-300 bg-secundario opacity-0 group-hover:opacity-100'></span>
							<span className='relative transition-colors duration-300 delay-150 group-hover:text-titulos ease'>
								Download CV
							</span>
						</a>
					</div>
				</div>
				<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
					<img
						className='object-cover object-center rounded-[200px]'
						alt='hero'
						src={Foto}
					/>
				</div>
			</div>
		</section>
	);
};

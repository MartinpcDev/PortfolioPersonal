import { AiFillGithub } from 'react-icons/ai';
import { MdPreview } from 'react-icons/md';

export const ProyectCard = ({
	titulo,
	img,
	descripcion,
	tecnologias,
	repo,
	demo
}) => {
	return (
		<div className='group relative block bg-black w-[450px] h-auto'>
			<img
				alt='Developer'
				src={img}
				className='absolute inset-0 h-full object-cover w-full opacity-75 group-hover:opacity-50 group-hover:object-contain transition-all duration-500'
			/>
			<div className='relative p-4 sm:p-6 lg:p-8'>
				<p className='text-sm font-medium uppercase tracking-widest text-pink-500'>
					{titulo}
				</p>
				<div className='mt-32 sm:mt-48 lg:mt-64'>
					<div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
						<p className='text-sm text-white'>{descripcion}</p>
						<div className='flex flex-wrap justify-between items-center text-tamanotitulos'>
							<div className='flex flex-row gap-2 pt-1 w-5 h-5 '>
								{tecnologias.map(({ icono, color }) => (
									<span key={color} style={{ color: `${color}` }}>
										{icono}
									</span>
								))}
							</div>
							<div className='flex flex-row gap-2 pt-1 w-5 h-5 text-resaltadoOrange'>
								<a href={repo} target='_blank'>
									<AiFillGithub />
								</a>
								<a href={demo} target='_blank'>
									<MdPreview />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

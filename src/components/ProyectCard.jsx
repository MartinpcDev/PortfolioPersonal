import { FaReact } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { MdPreview } from 'react-icons/md';

export const ProyectCard = ({
	img,
	titulo,
	descripcion,
	tecnologias,
	links
}) => {
	return (
		<div className='group relative block bg-black w-[450px] h-auto'>
			<img
				alt='Developer'
				src='https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80'
				className='absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50'
			/>
			<div className='relative p-4 sm:p-6 lg:p-8'>
				<p className='text-sm font-medium uppercase tracking-widest text-pink-500'>
					{titulo}
				</p>
				<div className='mt-32 sm:mt-48 lg:mt-64'>
					<div className='translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100'>
						<p className='text-sm text-white'>{descripcion}</p>
						<div className='flex flex-wrap justify-between items-center'>
							<div className='flex flex-row gap-2 pt-1 w-5 h-5'>
								<span>
									<FaReact />
								</span>
								<span>
									<FaReact />
								</span>
								<span>
									<FaReact />
								</span>
							</div>
							<div className='flex flex-row gap-2 pt-1 w-5 h-5 text-resaltadoOrange'>
								<a href='#'>
									<AiFillGithub />
								</a>
								<a href='#'>
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

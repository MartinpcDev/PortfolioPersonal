import { ProyectCard } from './ProyectCard';

export const Proyects = () => {
	return (
		<section className='container w-full mx-auto flex px-5 py-24 flex-col items-center justify-center'>
			<h1 className='text-resaltadoGreen text-5xl font-titulos pb-7'>
				Proyects
			</h1>
			<div>
				<ProyectCard />
			</div>
		</section>
	);
};

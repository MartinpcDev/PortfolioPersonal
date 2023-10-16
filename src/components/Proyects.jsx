import { ProyectCard } from './ProyectCard';

export const Proyects = () => {
	const proyects = [
		{
			titulo: '',
			img: '',
			descripcion: '',
			tecnologias: [
				{
					icono: '',
					color: ''
				}
			],
			links: [
				{
					url: '',
					demo: ''
				}
			]
		}
	];

	return (
		<section className='container w-full flex px-5 py-24 flex-col items-center justify-center mx-auto'>
			<h1 className='text-resaltadoGreen text-5xl font-titulos pb-7'>
				Proyects
			</h1>
			<div className='flex flex-wrap gap-8 w-full justify-center'>
				<ProyectCard
					titulo={'proyecto1'}
					descripcion={'proyecto diseñado con asdasdasdasdasdas'}
				/>
				<ProyectCard
					titulo={'proyecto1'}
					descripcion={'proyecto diseñado con asdasdasdasdasdas'}
				/>
				<ProyectCard
					titulo={'proyecto1'}
					descripcion={'proyecto diseñado con asdasdasdasdasdas'}
				/>
				<ProyectCard
					titulo={'proyecto1'}
					descripcion={'proyecto diseñado con asdasdasdasdasdas'}
				/>
				<ProyectCard
					titulo={'proyecto1'}
					descripcion={'proyecto diseñado con asdasdasdasdasdas'}
				/>
				<ProyectCard
					titulo={'proyecto1'}
					descripcion={'proyecto diseñado con asdasdasdasdasdas'}
				/>
			</div>
		</section>
	);
};

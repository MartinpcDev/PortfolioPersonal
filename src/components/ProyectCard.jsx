import { AiFillGithub } from 'react-icons/ai'
import { MdPreview } from 'react-icons/md'

export const ProyectCard = ({
  titulo,
  img,
  descripcion,
  tecnologias,
  repo,
  demo
}) => {
  return (
    <div class='relative flex flex-col text-gray-700 bg-transparent shadow-md w-96 rounded-xl bg-clip-border'>
      <div class='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border'>
        <img src={img} alt='profile-picture' className='h-80 w-full object-cover' />
      </div>
      <div class='p-6 text-center text-white'>
        <h4 class='block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900'>
          {titulo}
        </h4>
        <p class='block font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text'>
          {descripcion}
        </p>
      </div>
      <div className='w-full px-10 py-4 flex flex-wrap justify-between items-center text-tamanotitulos'>
        <div className='flex flex-row gap-2 pt-1 w-5 h-5 '>
          {tecnologias.map(({ icono, color }) => (
            <span key={color} style={{ color: `${color}` }}>
              {icono}
            </span>
          ))}
        </div>
        <div className='flex flex-row gap-2 pt-1 w-5 h-5 text-resaltadoOrange'>
          <a href={repo} target='_blank' rel='noreferrer'>
            <AiFillGithub />
          </a>
          <a href={demo} target='_blank' rel='noreferrer'>
            <MdPreview />
          </a>
        </div>
      </div>
    </div>
  )
}

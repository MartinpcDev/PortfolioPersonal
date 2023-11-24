import { AiOutlineMail } from 'react-icons/ai'

export const Contact = () => {
  return (
    <section
      id='contacto'
      className='container w-full flex px-5 py-24 flex-col items-center justify-center mx-auto text-center'
    >
      <h1 className='text-resaltadoOrange text-5xl font-titulos pb-7'>
        Contacto
      </h1>
      <div className='w-full flex justify-center flex-col'>
        <p className='text-parrafos'>
          Enviame un email si quieres contactarme. Puedes contactarme en
          <a
            href='https://www.linkedin.com/in/martinchris-palomino/'
            target='_blank'
            className='text-titulos hover:text-[#0AFF9D] duration-300' rel='noreferrer'
          >
            {' '}
            Linkedln
          </a>{' '}
          o puedes contactarme por el correo:
        </p>
        <p className='text-titulos font-titulos text-tamanotitulos pt-3 flex flex-row justify-center items-center gap-2 cursor-pointer flex-wrap'>
          <div className='flex justify-center items-center gap-2 hover:text-[#0AFF9D] duration-300'>
            <AiOutlineMail /> <span>MartinChrisPC@hotmail.com</span>
          </div>
          <div className='flex justify-center items-center gap-2 hover:text-[#0AFF9D] duration-300'>
            <AiOutlineMail /> <span>martinchrispalomino@gmail.com</span>
          </div>
        </p>
      </div>
    </section>
  )
}

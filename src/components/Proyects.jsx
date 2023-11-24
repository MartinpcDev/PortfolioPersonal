import { AiOutlineHtml5 } from 'react-icons/ai'
import { ProyectCard } from './ProyectCard'
import { BiLogoCss3, BiLogoJavascript, BiLogoReact } from 'react-icons/bi'
import { SiTailwindcss, SiTypescript } from 'react-icons/si'
import CEncrypt from '../assets/ProyectsScreen/ChallengeEncrypt.webp'
import Portfolio from '../assets/ProyectsScreen/portfolio.webp'
import AluraGeek from '../assets/ProyectsScreen/AluraGeek.webp'
import AluraFlix from '../assets/Screens/aluraflix.jpg'
import MovieApp from '../assets/ProyectsScreen/movieapp.png'
import TodoApp from '../assets/ProyectsScreen/ToDoAppTScapt.png'

export const Proyects = () => {
  const proyects = [
    {
      titulo: 'Challenge Encriptador',
      img: CEncrypt,
      descripcion: 'Programa diseñado para encriptar y desencriptar textos',
      tecnologias: [
        {
          icono: <AiOutlineHtml5 />,
          color: '#ff6d05'
        },
        {
          icono: <BiLogoCss3 />,
          color: '#0c3bff'
        },
        {
          icono: <BiLogoJavascript />,
          color: '#ffda05'
        }
      ],
      repo: 'https://github.com/MartinChristopherPC/ONE_Challenge_Encrypt',
      demo: 'https://martinchristopherpc.github.io/ONE_Challenge_Encrypt/'
    },
    {
      titulo: 'Challenge Portfolio',
      img: Portfolio,
      descripcion: 'Portfolio web parte del challenge de alura latam',
      tecnologias: [
        {
          icono: <AiOutlineHtml5 />,
          color: '#ff6d05'
        },
        {
          icono: <BiLogoCss3 />,
          color: '#0c3bff'
        },
        {
          icono: <BiLogoJavascript />,
          color: '#ffda05'
        }
      ],
      repo: 'https://github.com/MartinChristopherPC/PortFolio',
      demo: 'https://martinpalomino.netlify.app/'
    },
    {
      titulo: 'Challenge AluraGeek',
      img: AluraGeek,
      descripcion: 'Challenge Alura latam de diseño de un ecommerce',
      tecnologias: [
        {
          icono: <AiOutlineHtml5 />,
          color: '#ff6d05'
        },
        {
          icono: <BiLogoCss3 />,
          color: '#0c3bff'
        },
        {
          icono: <BiLogoJavascript />,
          color: '#ffda05'
        }
      ],

      repo: 'https://github.com/MartinChristopherPC/ONE_Challenge_AluraGeek',
      demo: 'https://alurageekmartin.netlify.app/'
    },
    {
      titulo: 'Challenge AluraFlix',
      img: AluraFlix,
      descripcion: 'Challenge de alura latam hecho con React,React-Router, Tailwind y Consumo de Apis',
      tecnologias: [
        {
          icono: <BiLogoReact />,
          color: '#0582ff'
        },
        {
          icono: <SiTailwindcss />,
          color: '#00e2d0'
        }
      ],
      repo: 'https://github.com/MartinChristopherPC/AluraFlix',
      demo: 'https://alura-flix-tan.vercel.app/'
    },
    {
      titulo: 'Todo App',
      img: TodoApp,
      descripcion: 'Aplicacion Web para ingreso y eliminacion de tareas, uso de localstorage para no perder informacion',
      tecnologias: [
        {
          icono: <BiLogoReact />,
          color: '#0582ff'
        },
        {
          icono: <SiTailwindcss />,
          color: '#00e2d0'
        },
        {
          icono: <SiTypescript />,
          color: '#0582ff'
        }
      ],
      repo: 'https://github.com/MartinChristopherPC/todoAppTS',
      demo: 'https://todoappts.vercel.app/'
    },
    {
      titulo: 'Movie Maniac',
      img: MovieApp,
      descripcion: 'Aplicacion Web que mostrar peliculas de la Api Themoviedb',
      tecnologias: [
        {
          icono: <BiLogoReact />,
          color: '#0582ff'
        },
        {
          icono: <SiTailwindcss />,
          color: '#00e2d0'
        }
      ],
      repo: 'https://github.com/MartinChristopherPC/MoviesApp',
      demo: 'https://movieapp-five-phi.vercel.app/'
    }
  ]

  return (
    <section
      id='proyects'
      className='container w-full flex px-5 py-24 flex-col items-center justify-center mx-auto'
    >
      <h1 className='text-resaltadoGreen text-5xl font-titulos pb-7'>
        Proyects
      </h1>
      <div className='flex flex-wrap gap-8 w-full justify-center'>
        {proyects.map(({ titulo, img, descripcion, tecnologias, repo, demo }) => (
          <ProyectCard
            key={titulo}
            titulo={titulo}
            img={img}
            descripcion={descripcion}
            tecnologias={tecnologias}
            repo={repo}
            demo={demo}
          />
        )
        )}
      </div>
    </section>
  )
}

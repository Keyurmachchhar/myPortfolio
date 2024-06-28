import { PROJECTS } from '../constants'
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}>
        <h1 className='my-20 text-center text-4xl'>Projects</h1>
      </motion.div>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center lg:gap-16'>
            <div className="w-full lg:w-1/4">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className='mb-6 rounded md:w-2/4 lg:w-full' />
              </motion.div>
            </div>
            <div className="w-full max-w-xl lg:w-3/4 lg:p-6">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}>
                <h6 className='mb-2 font-semibold'>{project.title}</h6>
                <p className='mb-4 text-neutral-400'>{project.description}</p>
                <div className='flex flex-wrap justify-between items-center md:justify-center'>
                  {project.technologies.map((tech, index) => (
                    <span key={index} className='mr-2 rounded bg-neutral-800 px-2 py-1 text-sm font-medium text-purple-500'>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-around items-center mt-10">
                  <div>
                    <a href={project.github_link} className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md hover:text-white">
                      <span className="w-full h-full bg-gradient-to-br from-pink-600 via-stone-500 to-purple-600 group-hover:from-purple-600 group-hover:via-slate-500 group-hover:to-pink-600 absolute"></span>
                      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400 ">
                        <span className="relative">GitHub</span>
                      </span>
                    </a>
                  </div>
{/*                   <div>
                    <a href="#_demo" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md hover:text-white">
                      <span className="w-full h-full bg-gradient-to-br from-pink-600 via-stone-500 to-purple-600 group-hover:from-purple-600 group-hover:via-slate-500 group-hover:to-pink-600 absolute"></span>
                      <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400 ">
                        <span className="relative">Demo</span>
                      </span>
                    </a>
                  </div> */}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

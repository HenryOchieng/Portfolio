import { FolderGit2 } from 'lucide-react'
import ProjectCard from './ProjectCard'

export default function Projects(props) {
    return (
        <section id='projects' className='projects'>
            <div className='container'>
                <h2 className='section-heading'>
                    <FolderGit2 className='w-8 h-8 mr-3' />
                    Featured Projects
                </h2>
                <div className='projects__grid'>
                    {props.works.map((item, index) => (
                        <ProjectCard key={index} title={item.title} description={item.description} tags={item.tags} repo={item.repo} live={item.live}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
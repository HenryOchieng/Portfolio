import { FolderGit2, Zap } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export default function ProjectCard({ name, description, tags, repo, live }) {
    return (
        <div className="project-card">
            <div className="project-card__header">
                <FolderGit2 className="project-card__icon" />
                <h3 className='project-card__card'>{name}</h3>
            </div>
            <p className='project-card__description'>{description}</p>

            <div className='project-card__tags'>
                {tags.map((item, index) => (
                    <span key={index} className='project-card__tag'>
                        {item}
                    </span>
                ))}
            </div>

            <div className='project-card__links'>
                <a href={repo} target='_blank' rel='noopener noreferrer' className='project-card__link'>
                    <FaGithub className='w-5 h-5'/>
                    <span className='text-sm'>Code</span>
                </a>
                <a href={live} target='_blank' rel='noopener noreferrer' className='project-card__link'>
                    <Zap className='w-5 h-5'/>
                    <span className='text-sm'>Live Demo</span>
                </a>
            </div>
        </div>
    )
}
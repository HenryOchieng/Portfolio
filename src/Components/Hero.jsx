import { Code, Mail } from 'lucide-react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Hero({...props}) {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__profile-pic">
                    <Code className="w-16 h-16" />
                </div>

                <p className='hero__greeting'>Hello, I'm</p>
                <h1 className='hero__name'>
                    {props.name}
                </h1>
                <h2 className='hero__title'>
                    {props.title} 
                </h2>

                <div className='hero__socials'>
                    <a href={props.socials.linkedin} target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin className='w-8 h-8'/>
                    </a>
                    <a href={props.socials.github} target='_blank' rel='noopener noreferrer'>
                        <FaGithub className='w-8 h-8' />
                    </a>
                    <a href={props.socials.email} target='_blank' rel='noopener noreferrer'>
                        <Mail className='w-8 h-8'/>
                    </a>
                </div>

                <button className='btn-primary'>
                    <a href='#projects' style={{ color: 'inherit', textDecoration: 'none'}}>Explore My Work</a>
                </button>
            </div>
        </section>
    );
}
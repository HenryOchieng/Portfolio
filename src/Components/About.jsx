import { User } from 'lucide-react'

export default function About (props) {
    return (
        <section id="about" className="about">
            <div className="container">
                <h2 className="section-heading">
                    <User className="w-8 h-8 mr-3"/>
                    About Me
                </h2>
                <p className='about__text'>
                    {props.bio}
                </p>
                <p className='about__caption'>
                    {props.caption}
                </p>
            </div>
        </section>
    )
}
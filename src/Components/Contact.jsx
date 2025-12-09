import { Mail } from 'lucide-react'

export default function Contact({...props}) {
    return (
        <section id="contact" className="contact-cta">
            <div className="container">
                <div className="contact-cta__box">
                    <h2 className="section-heading" style={{ marginBottom: '16px' }}>
                        <Mail className="w-8 h-8 mr-3"/>
                        Get In Touch
                    </h2>
                    <p className='contact-cta__text'>
                        {props.contact.text}
                    </p>
                    <a href={props.contact.email}className='btn-primary' style={{ fontSize: '1.25rem' }}>
                        Say Hello!
                    </a>
                </div>
            </div>
        </section>
    )
}
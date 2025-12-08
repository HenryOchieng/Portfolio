import { Code } from 'lucide-react'
import SkillPill from "./SkillPill"


export default function Skills (props) {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <h2 className="section-heading">
                    <Code className="w-8 h-8 mr-3" />
                    Technical Stack
                </h2>
                <div className='skills__grid'>
                    {props.stack.map((item, index) => (
                        <SkillPill key={index} name={item.name} level={item.level} />
                    ))}
                </div>
            </div>
        </section>
    )
}
import { Code } from 'lucide-react'

export default function SkillPill({name, level}) {
    return (
        <div className="skill-pill">
            <Code className="skill-pill__icon"/>
            <div style={{ flexGrow: 1 }}>
                <p className='skill-pill__name'>{name}</p>
                <div className='skill-pill__progress-bar'>
                    <div className='skill-pill__progress-fill' style={{ width: level }}></div>
                </div>
            </div>
            <span className='skill-pill__level'>{level}</span>
        </div>
    )
}
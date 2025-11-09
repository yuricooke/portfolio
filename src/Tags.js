import React from "react";
import './Tags.css'

const Tags = () => {
    const skillCategories = [
        {
            title: 'Frontend',
            skills: ['React.js', 'TypeScript', 'Next.js', 'JavaScript ES6+', 'HTML5 & CSS3', 'Tailwind CSS', 'Sass/Scss']
        },
        {
            title: 'Design',
            skills: ['Figma', 'UI/UX Design', 'Design Systems', 'Adobe Creative Suite', 'Responsive Design']
        },
        {
            title: 'Tools & Methods',
            skills: ['Git/GitHub', 'Redux', 'REST APIs', 'A11Y (WCAG)', 'Agile/Scrum']
        },
        {
            title: 'Backend & Emerging',
            skills: ['AI Integration', 'Python', 'SQL', 'Node.js', 'PHP']
        }
    ];

    return(
        <div className="skills-container">
            <div className="skills-header">
                <h3>Technical Skills</h3>
            </div>
            
            {skillCategories.map((category, catIndex) => (
                <div key={catIndex} className="skills-category">
                    <h4 className="category-title">{category.title}</h4>
                    <div className="skills-list">
                        {category.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Tags
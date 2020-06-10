import React from 'react';

const Skills = () => {
    const skills = [
        'react',
        'redux',
        'node',
        'express',
        'aws_s3',
        'javascript',
        'typescript',
        'postgresql',
        'sass',
        'css3',
        'html5',
        'git'
      ];

    const skillsFormatted = skills.map(skill => {
        const name = skill.replace('_', ' ').toUpperCase();
        const img = require(`../../assets/img/skills/${skill}.png`);

        return { name, img }
    });

    const skillsMapped = skillsFormatted.map((skill, i) => {
        return (
            <li key={i}>
                <figure className='skill_container'>
                    <img className='skill_img' src={skill.img} alt={`${skill.name}`} />
                    <figcaption>
                        {skill.name}
                    </figcaption>
                </figure>
            </li>
        )
    })

    return (
        <section id='skills' className='skills_section sections'>
            <h2 className='section_titles'>skills</h2>
            <ul className='skills_list'>
                {skillsMapped}
            </ul>
        </section>
    );
}

export default Skills;
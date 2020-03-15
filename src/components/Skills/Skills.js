import React from 'react';

const Skills = () => {
    const skills = [
        {
            name: 'REACT',
            img: require('../../assets/img/skills/react.png')
        },
        {
            name: 'NODE',
            img: require('../../assets/img/skills/nodejs.png')
        },
        {
            name: 'EXPRESS',
            img: require('../../assets/img/skills/expressjs.png')
        },
        {
            name: 'JAVASCRIPT',
            img: require('../../assets/img/skills/javascript.png')
        },
        {
            name: 'POSTGRESQL',
            img: require('../../assets/img/skills/postgresql.png')
        },
        {
            name: 'SASS',
            img: require('../../assets/img/skills/sass.png')
        },
        {
            name: 'CSS3',
            img: require('../../assets/img/skills/css3.png')
        },
        {
            name: 'HTML5',
            img: require('../../assets/img/skills/html5.png')
        }
    ];

    const skillsMapped = skills.map((skill, i) => {
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
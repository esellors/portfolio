import React from 'react';
import Modal from '../Common/Modal/Modal'
import imgDir from '../../assets/img/projects/imgDir';

const Projects = () => {
    // links order: live, github

    const [ projects ] = React.useState([
        {
            name:'INSTAPLAN',
            imgs: imgDir.instaplan,
            projType: 'DevMountain Team Project (as student)',
            purpose: 'Give users one-click access to the current day\'s events. 2 week project time limit.',
            goal: 'Full-stack, intuitive, user-friendly, engaging',
            links: [
                {
                    site: 'github',
                    url: 'https://github.com/instaplan/instaplan'
                }
            ]
        },
        {
            name: 'BARTERTAG',
            imgs: imgDir.bartertag,
            projType: 'DevMountain Personal Project 2 (as student)',
            purpose: 'To create a new, modern marketplace for bartering. 2 week project time limit.',
            goal: 'Full-stack, novel, complex',
            links: [
                {
                    site: 'demo',
                    url: 'https://bartertag.esellors.com'
                },
                {
                    site: 'github',
                    url: 'https://github.com/esellors/bartertag'
                }
            ]
        },
        {
            name: 'FOODOO',
            imgs: imgDir.foodoo,
            projType: 'DevMountain Personal Project 1 (as student)',
            purpose: 'To help users visualize daily meal planning. 4 day project time limit',
            goal: '3/4 Stack (no db), lightweight, functional, intuitive',
            links: [
                {
                    site: 'demo',
                    url: 'https://foodoo.esellors.com/'
                },
                {
                    site: 'github',
                    url: 'https://github.com/esellors/foodoo'
                }
            ]
        }
    ]);

    const projectsMapped = projects.map((project, i) => {
        const { name, imgs, projType, purpose, goal } = project;

        return (
            <div className='project_container' key={i}>
                <p><span className='project_name'>{name}</span>: {projType}</p>
                <p>{purpose}</p>
                <p>{goal}</p>
                {
                    project.links.length > 0
                        ?   <p className='project_links'>
                                {
                                    project.links.map((link, i) => {
                                        return <a href={link.url} target="_blank" rel="noopener noreferrer">{link.site}</a>
                                    })
                                }
                            </p>
                        :   null
                }
                <div className='project_imgs_container'>
                    {
                        imgs.map((img, i) => <Modal 
                                displayType='flex'
                                activator={img}
                                item={null} 
                                index={i} 
                            />
                        )
                    }
                </div>
            </div>
        );
    });

    return (
        <section id='projects' className='projects_section sections'>
            <h2 className='section_titles'>projects</h2>
            <p className='stickied'>View this site's source code on <a href='https://github.com/esellors/portfolio' target='_blank' rel='noopener noreferrer'>github</a></p>
            {projectsMapped}
        </section>
    );
}

export default Projects;
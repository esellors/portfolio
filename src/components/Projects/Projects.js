import React from 'react';
import Project from './Common/Project';
import { projectDir } from './ProjectDir';

const Projects = () => {
    const projectsMapped = projectDir.projects.map((project, i) => <Project project={project} projType='project' index={i} />);

    const miniProjectsMapped = projectDir.miniProjects.map((project, i) => <Project project={project} projType='mini_project' index={i} />);

    return (
        <section id='projects' className='projects_section sections'>
            <h2 className='section_titles'>projects</h2>
            <p className='stickied'>View this site's source code on <a href='https://github.com/esellors/portfolio' target='_blank' rel='noopener noreferrer'>github</a></p>

            {projectsMapped}

            <p className='mini_projects_intro'>The following are smaller projects that I've either created for lesson content, or made just for kicks.</p>
            
            <div className='mini_projects_container'>
                {miniProjectsMapped}
            </div>

        </section>
    );
}

export default Projects;
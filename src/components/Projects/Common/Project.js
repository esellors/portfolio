import React from 'react';
import Modal from '../../Common/Modal/Modal';

const Project = ({project, projType, index}) => {
    const { name, context, desc, links, imgs } = project;

    return (
        <div 
            key={index}
            id={name}
            className={`${projType}_container`}
        >
            <p className='project_name'>{name.toUpperCase()}</p>
            <div className={`${projType}_info`}>
                <div className='project_meta'>
                    <div className='project_meta_a'>
                        <p>Context: {context}</p>
                        <p>Description: {desc}</p>

                    </div>
                    <div className='project_meta_b'>
                        <div className='project_clickables'>
                            <div className='project_links'>
                                {
                                    links.map((link, i) => {
                                        const aTarget = link.url.includes('.esellors.com')
                                            ? '_self'
                                            : '_blank'

                                        return (
                                            <p>
                                                <a 
                                                    key={i} 
                                                    href={link.url} 
                                                    target={aTarget}
                                                >
                                                    {link.site}
                                                </a>
                                            </p>
                                        )
                                    })
                                }
                            </div>
                            <div className={`${projType === 'project' ? 'project_imgs_container' : 'project_img_container'}`}>
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
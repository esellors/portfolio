import React from 'react';

const About = () => {
    return (
        <section id='about' className='about_section sections'>
            <div className='salutation_container'>
                <h3 className='salutation'>Nice to meet you!</h3>
                <img
                    className='profile_img'
                    src={require('../../assets/img/site/about/eric-sellors.jpg')} 
                    alt='Eric Sellors'
                />
            </div>
            <div className='about_intro'>
                <p>
                    My name is Eric and I love all things webdev.
                </p>
                <p>
                    In 2019, I decided to turn my Web Development passion into a career and enrolled in <a href="https://devmountain.com/web-bootcamp-immersive" target='_blank' rel='noopener noreferrer'>DevMountain's</a> Immersive Web Development program. 
                </p>
                <p>
                    After graduation, I was hired into the program as a mentor and have since been moved into the Assistant Instructor role, where I continue to mentor and teach energized students.
                </p>
                <p>
                    Thanks for visiting!
                </p>
            </div>
        </section>
    );
}

export default About;
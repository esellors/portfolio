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
            <p>
                My name is Eric and I love all things webdev.
            </p>
            <p>
                I enjoy learning, creating, and being around others that share the same passion. I find it fascinating to be able to build ideas that grow from a single “what if” moment.
            </p>
            <p>
                Outside of development, I enjoy reading, watching sci-fi and comedies, volunteering, and exploring my city of Dallas, TX.
            </p>
            <p>
                More to see below. Thanks for visiting!
            </p>
        </section>
    );
}

export default About;
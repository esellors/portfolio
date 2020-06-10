import React from 'react';
import Menu from './Menu';

const Header = () => {
    return (
        <header className='header_section'>
            <div>
                <h1>Eric Sellors</h1>
                <h3>Web Developer | Dallas, TX</h3>
            </div>
            <Menu />
        </header>
    );
}

export default Header;
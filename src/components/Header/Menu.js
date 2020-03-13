import React from 'react';
import Modal from '../Common/Modal/Modal';

const Menu = () => {
    const menu = (
        <ul className='menu_items'>
            <li><a href='#about'>about</a></li>
            <li><a href='#skills'>skills</a></li>
            <li><a href='#projects'>projects</a></li>
            <li><a href='#contact'>contact</a></li>
        </ul>
    );
    
    return (
        <nav className='site_nav'>
            <Modal 
                modalclass='menu_modal'
                displayType='block'
                activator={require('../../assets/img/site/menu/hamburger-menu.svg')} 
                item={menu} 
            />
            <div className='horizontal_menu'>
                {menu}
            </div>
        </nav>
    );
}

export default Menu;
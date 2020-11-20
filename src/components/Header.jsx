import React from 'react';
import logo from '../assets/icon/logo.jpg';

function Header () {
    return (
        <div className='bg-white shadow'>
            <header className='container mx-quto flex justify-between items-center' style={{maxHeight: '250px'}}>
                <div className='flex items-center'>
                    <img className='mr-3 object-scale-down' style={{maxHeight: '250px'}} src={logo} alt='professor' />
                    <h1 className='title text-5xl text-blue-900 mt-16'>Let's drink!</h1>
                </div>
            </header>
        </div>
    )
}

export default Header;
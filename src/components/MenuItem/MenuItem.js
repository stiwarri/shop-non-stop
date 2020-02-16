import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, imageUrl, linkUrl, size, id }) => {
    return (
        <div className={`${size} menu-item`}>
            <div className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}></div>
            <div className='content'>
                <h1 className='title'>{title}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;

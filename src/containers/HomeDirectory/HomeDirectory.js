import React from 'react';

import './HomeDirectory.scss';
import MenuItem from '../../components/MenuItem/MenuItem';
import SECTIONS_DATA from '../../assets/mock-data/sections-data';

class HomeDirectory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: SECTIONS_DATA
        }
    }

    render() {
        return <div className='directory-menu'>
            {
                this.state.sections.map(({ title, imageUrl, linkUrl, size, id }) => {
                    return <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                })
            }
        </div>
    }
}

export default HomeDirectory;

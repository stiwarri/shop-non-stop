import React from 'react';
import { connect } from 'react-redux';

import './HomeDirectory.scss';
import MenuItem from './MenuItem/MenuItem';

import { sectionSelector } from '../../redux/selectors/directorySelector';

const HomeDirectory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ title, imageUrl, linkUrl, size, id }) => {
                    return <MenuItem key={id} title={title} linkUrl={linkUrl} imageUrl={imageUrl} size={size} />
                })
            }
        </div>
    );

}

const mapStateToProps = state => {
    return {
        sections: sectionSelector(state)
    }
}
export default connect(mapStateToProps)(HomeDirectory);
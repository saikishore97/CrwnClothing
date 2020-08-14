import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
import {connect} from 'react-redux';
import {selectDirectorySections} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect';

const Directory =({sections})=>{
        return(
            <div className='directory-menu'>
                {sections.map(({title,imageUrl,size,id,linkUrl})=>
                    (<MenuItem key={id} title={title} image={imageUrl} size={size} linkUrl={linkUrl}></MenuItem>)
                )}
            </div>
        );
}

const mapStateToProps=createStructuredSelector(
  {
    sections:selectDirectorySections
}

)


export default connect(mapStateToProps)(Directory);
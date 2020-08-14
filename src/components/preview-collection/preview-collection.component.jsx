import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../../components/collection-item/collection-item.component';

const PreviewCollection=({title,items})=>{
    return (
    <div className="preview-collection">
        <h1 className="title">{title}</h1>
        <div className="preview">
            {
                items.filter((item,index)=>index<4)
                .map(item=><CollectionItem key={item.id} item={item} />)
            }
        </div>

    </div>
);
}

export default PreviewCollection;
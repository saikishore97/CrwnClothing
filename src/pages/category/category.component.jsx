import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component';
import './category.styles.scss';
import {selectCategory} from '../../redux/shop/shop.selector';
import {connect} from 'react-redux';

const CategoryPage=({dataItem})=>{
    const {title,items}=dataItem;
    return(
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item=><CollectionItem key={item.id} item={item}/>)
                }
            </div>
        </div>
    );
};

const mapStateToProps=(state,ownProps)=>({
    dataItem:selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(CategoryPage);
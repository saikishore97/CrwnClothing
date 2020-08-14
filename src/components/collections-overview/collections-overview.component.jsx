import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import './collections-overview.styles.scss';
import PreviewCollection from '../preview-collection/preview-collection.component';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';

const CollectionOverview = ({data})=>{
    return(
        <div className="collection-overview">
            {data.map(({id,...othercollectionprops})=>
          {
            return(<PreviewCollection key={id} {...othercollectionprops}></PreviewCollection>);
          }
          )
          }
        </div>
    );
};


const mapStateToProps=createStructuredSelector({
    data:selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
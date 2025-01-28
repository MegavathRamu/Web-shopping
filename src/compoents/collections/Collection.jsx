// Collection.js
import React from 'react';
import new_collections from '../Asserts/new_collections';
import Newcollection from '../newcollections/Newcollection';
import './collection.css';


const Collection = () => {
  return (
    <div className='collection'>
       <h1>ALL_COLLECTIONS OF GAMING PRODUCTS</h1>
        <hr />
        <div className="colections_items">
            {new_collections.map((newcollection, i) => {
                return <Newcollection key={i} id={newcollection.id} name={newcollection.name} image={newcollection.image} new_price={newcollection.new_price} old_price={newcollection.old_price} />
            })}
        </div>
    </div>
  )
}

export default Collection;

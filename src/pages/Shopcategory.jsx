import React from 'react'
import Mens from '../compoents/mens/Mens'
import Womens from '../compoents/womens/Womens'
import Kids from '../compoents/kids/Kids'

const Shopcategory = ({category}) => {
  return (
    <div>
     {category === 'men' && <Mens />}
      {category === 'womens' && (
        <>
          <Womens />
          
        </>
      )}
      {category === 'kids' && <Kids />}

      
    </div>
  )
}

export default Shopcategory

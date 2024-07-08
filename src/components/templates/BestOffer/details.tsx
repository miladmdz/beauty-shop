import { ProductsType } from '@/components/Type/Products.type'
import OfferBox from '@/components/modules/OfferBox/OfferBox'
import React from 'react'

type DetailsProps={
    products:ProductsType[]
}

function Details({products}:DetailsProps) {
  return (
    <div className='container flex flex-wrap gap-x-1 gap-y-3 xs:gap-4 justify-center mb-6'>
        {
            products.map(product=>(
                <OfferBox key={product.id} {...product}/>
            ))
        }
    </div>
  )
}

export default Details
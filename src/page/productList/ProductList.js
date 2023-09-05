import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchContent } from './ProductList.slice'

const ProductList = () => {
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(fetchContent())
    }, [dispatch])
    const contents = useSelector((state) => state);
    console.log(contents)
  return (
    <div>ProductList</div>
  )
}

export default ProductList
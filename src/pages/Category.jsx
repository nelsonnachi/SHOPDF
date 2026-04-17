import React, { useEffect } from 'react'
import CategoryPage from '../components/CategoryPage'

const Category = () => {
     useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
       <CategoryPage />
    </>
  )
}

export default Category
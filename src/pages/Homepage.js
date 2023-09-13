import React from 'react'
import { Link , useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate()
  const goToProductDetailpage = () =>{
    navigate('Homepage') 
  }
  const goToProduct = () =>{
    navigate('product?=detail')
  }

  return (
    <div>
      <div className='inner'>
       <Link to="/ProductAllpage">링크</Link>
       <br/>
       <button onClick={goToProductDetailpage}>버튼클릭</button>
       <br/>
       <button onClick={goToProduct}>상품상세</button>
      </div>
    </div>
  )
}

export default Homepage
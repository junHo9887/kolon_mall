import React from 'react'
import '../styles/ProductBox.css';
import { useNavigate } from 'react-router';

const ProductBox = ({item}) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  }
  return (
    <div className='pb' onClick={showDetail}>
      <img src={item?.img}></img>
      <div className='text_bx'>
      <p>KOLON SPORT</p>
      <h2>{item?.title}</h2>
      <h3>{item?.price}원</h3>
      <nav>{item?.tag}</nav>
      </div>
    </div>
  )
}

export default ProductBox
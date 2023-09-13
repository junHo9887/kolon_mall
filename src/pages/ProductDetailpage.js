import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useState } from 'react'
import '../styles/ProductDetailpage.css'

export const ProducDetailpage = () => {
  const [product, setProduct] = useState(null);
  const {id} = useParams();
  const getProductDetail = async () =>{  
    let url = 'https://my-json-server.typicode.com/junHo9887/kolon_mall/product/${id}';
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
}
useEffect(()=>{getProductDetail();},[]);
  return (
    <div className='pi'>
    <div className='product_detail_img'>
    <img src={product?.img}></img>
    </div>
    <div className='product_info'>
    <h2>{product?.title}</h2>
    <h3>{product?.price}</h3>
    <from>
      <select>
      {/* &&좌항 우항 같으면 pap실행  size.length하면 오류남*/}
      {product?.size > 0 && product.size.map((item) =>(
        <option>{item}</option>
      ))}
      </select>
    </from>
    </div>
    </div>
  )
}

export default ProducDetailpage
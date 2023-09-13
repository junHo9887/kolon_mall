import React, { useEffect, useState } from 'react';
import ProductBox from '../components/ProductBox';
import '../styles/ProductAllpage.css'
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

const ProductAllpage = () => {
  const[productList,setProductList] = useState([]);
  const[query, setQuery] = useSearchParams([]);
  const getProduct = async () => {
    let keyword = query.get('q');
    let searchQuery = query.get('q') || '';
    console.log('쿼리값', searchQuery);
    let url = `https://my-json-server.typicode.com/junHo9887/kolon_mall/products?q=${keyword}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(()=>{
    getProduct();
  },[]);
  
  const navigate = useNavigate()
  const dd = () =>{
    navigate('/pages/ProductDetailpage/ProductAllpage') ;
  }

  return (
    <div className='p_inner'>
    <ul onClick={dd}>
    {productList.map((menu)=>(
      <li><ProductBox item={menu}/></li>
    ))}
    </ul>
    </div>
  )
}

export default ProductAllpage
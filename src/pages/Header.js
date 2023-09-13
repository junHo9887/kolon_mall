import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const sideList =[
  {
    title:'KOLON MALL',
    Link:''
  },
  {
    title :'로그인',
    Link:'/pages/Login'
  },
  {
    title :'회원가입',
    Link:'/pages/User'
  },
  {
    title :'고객센터',
    Link:''
  }
  ]
  //state값추가 
  const[activeLink, setactiveLink]= useState(0); //초기값 0
  //Link를 클릭 했을 때 활성화
  const LinkClick = (index)=>{
    setactiveLink(index); //클릭시 이벤트
  };
  const navigate = useNavigate();
  const goToLogin = () =>{ navigate('/pages/login');};
  const onCheckEnter = (event) =>{
    //입력한 검색어를 읽는다 
    //url을 바꿔준다 
    if(event.key==='Enter'){
      //입력한 검색어를 읽어온다 
      let keyword =event.target.value
      console.log(keyword);
      //url변경
      navigate(`/pages/ProductAllpage?q=${keyword}`);
    }
  }
  return (
    <div className='header'>
      <div className='HeaderTop inner'>
        <Link to="/" className='logo'>
        </Link>
        <form>
          <input type='text' 
          onKeyPress={onCheckEnter}
          placeholder='신상품이 보고 싶다면? #신상품 태그'/>
          <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <div className='snb'>
          <ul>
            {sideList.map((item) => (
              <Link to={item.Link}>
                <li>{item.title}</li>
              </Link>
            ))}
            <Link to ='/'>
            <i class="fa-solid fa-basket-shopping"></i>
            </Link>
          </ul>
        </div>
      </div>
      <div className='gnb inner'>
        <Link to='/' 
        className={activeLink === 0 ? 'active':''}
        onClick={()=>LinkClick(0)}>소개
        </Link>
        <Link to='/' 
        className={activeLink === 1 ? 'active' : ''}
        onClick={()=>LinkClick(1)}
        >홈</Link>
        <Link to='pages/ProductAllpage' 
        className={activeLink===2 ? 'active': ''}
        onClick={()=>LinkClick(2)}
        >상품</Link>
        <Link to='pages/ProductDetailpage' 
        className={activeLink===3 ? 'active': ''}
        onClick={()=>LinkClick(3)}
        >기획전</Link>
        <Link to='/' 
        className={activeLink===4 ? 'active': ''}
        onClick={()=>LinkClick(4)}
        >컬렉션</Link>
        <Link to='/'
        className={activeLink===5 ? 'active': ''} 
        onClick={()=>LinkClick(5)}
        >매장안내</Link>
        <Link to='/' 
        className={activeLink===6 ? 'active': ''}
        onClick={()=>LinkClick(6)}
        >WEATHER MONSTER</Link>
      </div>
    </div>
  )
}

export default Header
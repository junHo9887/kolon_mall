import React from 'react'
import '../styles/Login.css'
import { useNavigate } from 'react-router'

const Login = ({setAuthenticate}) => {
  const navigate = useNavigate()
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user');
    setAuthenticate(true);
    navigate('/');
  }

  return (
    <div className='Login_inner'>
    <form onSubmit={(event)=>loginUser(event)}>
      <label for='email'>이메일을 입력해주세요</label>
      <input type='email'  placeholder='이메일을 입력해주세요' id='email'/> <br/>
      <label for='password'>비밀번호를 입력해주세요</label>
      <input type='password'  placeholder='비밀번호를 입력해주세요'  id='password'/>
      <br/>
      <button type='submit'>로그인</button>
    </form>
    </div>
  )
}

export default Login
import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router'
import Main from './components/Main'
import SignIn from './components/SignIn'
import Header from './layouts/Header'
import ProductList from './components/ProductList'
import ProductInfo from './components/ProductInfo'
import AddProduct from './components/AddProduct'
import { useState } from 'react'

function App() {
  // 로그인 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // is조건문이어서 true or false

  // 로그인 한 사용자 ID 관리
  const [ userName, setUserName ] = useState(''); // 이름 : 빈 문자열

  // 로그인 핸들러
  const handleLogin = (userName) => {
    setIsLoggedIn(true);  // true : 로그인 성공 시 상태 업데이트
    setUserName(userName);  // 로그인 한 사용자 ID 저장

  }

  // 로그아웃 핸들러
  const handleLogout = () => {
    setIsLoggedIn(false);   // false : 로그아웃
  }

  return (
    <>
      <section className="app">
        {/* basename : 첫 페이지 설정 */}
        <BrowserRouter basename='/product-shop/'>
        {/* 헤더에서 넘기고 받음 */}
          <Header 
            isLoggedIn={isLoggedIn}
            userName={userName}
            onLogout={handleLogout}
          />

        {/* 본문 영역 */}
        <div className='contents'>
          <Routes>
            <Route path="/" element={<Main />}/>
            <Route path="/products" element={<ProductList />}/>
            {/* :id => URL에서 동적으로 변하는 부분을 나타냄 */}
            {/* ex) /products/2 */}
            <Route path="/products/:id" element={<ProductInfo />}/>
            <Route path="/add-product" element={<AddProduct />}/>
            <Route path="/sign-in" element={<SignIn onLogin={handleLogin} />}/>            
          </Routes>
        </div>
        </BrowserRouter>
      </section>
    </>
  )
}

export default App

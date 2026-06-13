import {Link, useNavigate} from 'react-router-dom'

const Header = ({isLoggedIn, userName, onLogout}) => {
    const navigate = useNavigate();
    return (
        <div>
            {/* 헤더 영역 */}
            <div className='header'>
                <Link to='/'>Home</Link>
                <Link to='/products'>상품목록</Link>
                <Link to='/add-product'>상품등록</Link>
                {/* 삼항연산자 ? true값 : false값 */}
                {/*         로그아웃 로그인 */}
                {isLoggedIn ? (
                    <div className='header-user'>
                        <span>{userName}님</span>
                        <button
                            type='button'
                            className='btn-logout'
                            onClick={() => {onLogout(); navigate('/');}}
                        >로그아웃</button>
                    </div>

                ) : (
                    <Link to='/sign-in'>로그인</Link>
                )}
            
            </div>
        </div>
    )
}

export default Header;
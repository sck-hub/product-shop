import { useParams, useNavigate } from "react-router-dom";
import { products } from "../datas/Products";
const ProductInfo = () => {
    // URL 파라미터에서 id값을 추출
    const {id} = useParams();   // 반환된 객체 구조 분해 할당 : { 객체 }
    const navigate = useNavigate(); // 페이지 이동을 위한 Hook

    // products 리스트에서 id와 일치하는 상품 찾기(검색) : 함수 find() 사용
    // 외부에서 온 id(문자)와 저장된 id(숫자)가 일치할 때
    // 기본값이 String 문자형이라서 숫자일경우 아래처럼 해야함
    // 외부에서 입력된 id가 숫자형이므로 자료형 변환 필수 : parseInt(문자)
    const product = products.find(product => product.id === parseInt(id));

    // 페이지 이동 핸들러(함수)
    const doClick = () => {
        navigate("/products");  // 상품 목록 페이지로 이동
    }
    
    return (
        <div className="product-details">
            <p>상품 ID: {id}</p>
            {/* <p>이름: {products[id-1].name}</p>
            <p>가격: {products[id-1].price}원</p>
            <p>상세: {products[id-1].description}</p> */}
            <p>이름: {product.name}</p>
            <p>가격: {product.price}</p>
            <p>상세: {product.description}</p>
            <div className="btn-list">
                <button onClick={doClick}>목록 보기</button>
            </div>

        </div>
    )
}

export default ProductInfo;
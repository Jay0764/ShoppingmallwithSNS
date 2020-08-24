import React from 'react'
import './Store_NavBar.scss'
import { Link } from 'react-router-dom';
function Stroe_NavBar() {
    return(

        <div className="Store_navbar">
        <p>
            <Link to="/shoppingmall" style={{ color: 'inherit' }}>
                홈&nbsp;&nbsp;
			</Link>
        </p>
        <p>
            <Link to="/shoppingmall/best_item" style={{ color: 'inherit' }}>
                랭킹&nbsp;&nbsp;
			</Link>
        </p>
        <p>
            <Link to="/shoppingmall/outer" style={{ color: 'inherit' }}>
                아우터&nbsp;&nbsp;
		    </Link>
        </p>
        <p>
            <Link to="/shoppingmall/top" style={{ color: 'inherit' }}>
                상의&nbsp;&nbsp;
		    </Link>
        </p>
        <p>
            <Link to="/shoppingmall/pants" style={{ color: 'inherit' }}>
                바지&nbsp;&nbsp;
			</Link>
        </p>
        <p>
            <Link to="/shoppingmall/onepiece" style={{ color: 'inherit' }}>
                원피스&nbsp;&nbsp;
			</Link>
        </p>
        <p>
            <Link to="/shoppingmall/skirt" style={{ color: 'inherit' }}>
                치마&nbsp;&nbsp;
			</Link>
        </p>
        <p >
            <Link to="/shoppingmall/shoes" style={{ color: 'inherit' }}>
                신발&nbsp;&nbsp;
			</Link>
        </p>
    </div>

)

}

export default Stroe_NavBar

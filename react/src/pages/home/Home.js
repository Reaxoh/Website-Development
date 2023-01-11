import React from "react";
import ReactDOM from 'react-dom/client';

import NavBarList from "./compose/nav";
import ContentImgae from "./compose/carouselImages";
import Product from "./compose/commodity";
import Footer from "./compose/footer";

const Home = () => {
    return( 
        <div>
            <NavBarList />
            <ContentImgae />
            <Product />
            <Footer />
        </div>
    )
}

export default Home
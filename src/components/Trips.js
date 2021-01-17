import React from "react";

import styled from "styled-components"


const Trips = () => {
    return (
        <ProductsContainer>
            <ProductsHeading> Heading</ProductsHeading>
            <ProductWraper> Wrapper </ProductWraper>
        </ProductsContainer>   

    )
}

export default Trips

const ProductsContainer = styled.div`
min-height: 100vh;
padding: 5rem calc((100vw - 1300px) /2);
background: #fff;
color: #fff`
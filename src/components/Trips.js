import React from "react";

import styled from "styled-components"
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"


const Trips = () => {
const data = useStaticQuery(graphql`
    query TripsQuery {
        allTripsJson{
            edges {
                node {
                        alt
                        button
                        name
                        img {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                }
            }
        }

    }
    `)

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

const ProductsHeading = styled.div`
font-size: clamp(1.2rem, 5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
color: #000;`
const ProductWraper = styled.div``
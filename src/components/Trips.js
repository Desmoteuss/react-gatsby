import React from "react";

import styled from "styled-components"
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"
import { Button } from "./Button"



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
function getTrips(data){
    const tripsArray = []
    data.allTripsJson.edges.forEach((item,index) =>{
        tripsArray.push(
            <div key={index}>
                <Img
                src={item.node.img.childImageSharp.fluid.src}
                alt={item.node.alt}
                fluid={item.node.img.childImageSharp.fluid} 
                />
                
            </div>

        )
    })
}
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

const ProductWraper = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 10px;
justify-items: center;
padding: 0 2rem;
@media screen and ( max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
}
@media screen and ( max-width: 868px) {
    grid-template-columns: 1fr;

}`

const ProductCard = styled.div`
line-height: 2;
width: 100%
height: 500px;
postion: relative;
border-radius: 10px;
transition: 0.2s ease;
`
const ProductImg = styled `
line-height: 2;
`


'use client';

import styled from 'styled-components';
import React, { useState } from "react";
import { useEffect } from "react";

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Product from './components/Product';

type item = {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
  image?: string;
}

const Main = styled.div`
  background: white;
  width: 100vw;
`

const ProductsContainer = styled.div`
  background: white;
  min-height: 80px;
  width: 100vw;
  font-size: 1.5rem;
  box-sizing: border-box;
  
  padding: 70px 2rem 10rem 2rem;
`

const LoadingMessage = styled.p`
  margin-top: 40vh;

  text-align: center;
  font-size: 1.3rem;
`

export default function OrderPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch("http://localhost:3001/items");
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    };

    fetchItems();

  }, []);

  return (
    <Main>
      <NavBar />
      { isLoading === true ? 
        <LoadingMessage>목록을 <br /> 불러오고 있습니다.</LoadingMessage>
        : <ProductsContainer>
            {items.map((item: item) => (
              <Product key={item.id} item={item}></Product>
            ))}
          </ProductsContainer>
      }
      <Footer isLoading={isLoading} />
    </Main>
  )
}

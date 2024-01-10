'use client';

import styled from 'styled-components';

import { addCart, removeCart } from "@/redux/features/cart-slice";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import React, { useState } from "react";

type item = {
  id: string;
  name: string;
  event: number;
  materialType: number;
  price: number;
  image?: string;
}

type Props = {
  item: item
}

const ProductContainer = styled.div<{select: boolean}>`
  position: relative;
  display: flex;
  top: 0;
  width: 100%;
  height: 5rem;
  background-color: ${(props) => props.select ? "#FCEFEB" : "white"};
  box-sizing: border-box;

  padding: 0.5rem;
  border: solid 1px #C1C1C1;
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

const ImageBox = styled.div`
  display: inline-block;
  background-color: #C1C1C1;
  width: 4rem;
  height: 4rem;
`

const ProductDetail = styled.div`
  display: flex;

  padding: 0 1rem;
  height: 100%;
`

const ProductName = styled.section`
  color: black;
  font-size: 1.2rem;
  margin: 0;
`

const EventBadge = styled.span`
  background-color: #E36538;
  color: white;
  height: 1rem;

  padding: 4px 8px;
  margin-left: 10px;
  border-radius: 15px;
  
  text-align: center;
  font-size: 0.7rem;
`

const SelectionNumberBox = styled.section`
  position: absolute;
  bottom: 8px;
  font-size: 1.3rem;
`

const SelectionCountButton = styled.button`
  all: unset;

  margin: 0 8px;
`

const ProductPrice = styled.section`
  position: absolute;
  bottom: 5px;
  right: 5px;

  font-size: 1.2rem;
`

export default function Product({item}: Props) {
  const cartList = useSelector((state: RootState) => state.cartReducer.list);
  const dispatch = useDispatch<AppDispatch>();
  const [count, setCount] = useState(0);

  const handleIncreaseCount = () => {
    // count 값이 999를 초과하지 않는 경우에만 1 증가시킵니다.
    if (count < 999) {
      setCount(count + 1)

      dispatch(
        addCart({
          id: item.id,
          count: count,
          price: item.price
        })
      )
    }
  };
  
  const handleDecreaseCount = () => {
    // count 값이 0보다 작지 않은 경우에만 1 감소시킵니다.
    if (count > 0) {
      setCount(count - 1)

      dispatch(
        removeCart({
          id: item.id,
          count: count,
          price: item.price
        })
      )
    }
  };

  return (
    <ProductContainer select={count > 0}>
      <ImageBox />
      <ProductDetail>
        <ProductName>{item.name}</ProductName>
        {item.event === 1 && <EventBadge>이벤트</EventBadge>}
        <SelectionNumberBox>
          <SelectionCountButton onClick={handleDecreaseCount}>-</SelectionCountButton>
          <span>{count}</span>
          <SelectionCountButton onClick={handleIncreaseCount}>+</SelectionCountButton>
        </SelectionNumberBox>
        <ProductPrice>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ProductPrice>
      </ProductDetail>
    </ProductContainer>
  )
}

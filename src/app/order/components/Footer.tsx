'use client';

import Link from 'next/link';
import styled from 'styled-components';

import React, { useState } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type Props = {
  isLoading: boolean;
}

const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 10rem;
  background-color: white;

  border-radius: 1rem 1rem 0 0;

  box-sizing: border-box;
  box-shadow: 0 0 10px #999999;

  padding: 1.5rem;

  z-index: 1;
`;

const OrderListText = styled.p`
  margin: 0;

  font-size: 1.2rem;
  text-align: right;
`

const OrderButton = styled(Link)<{isLoading: boolean, isSubmit: boolean}>`
  display: block;
  width: 100%;
  height: 3rem;
  color: white;
  border: none;
  background: ${(props) => props.isLoading || props.isSubmit ? "#C1C1C1" : "black"};

  font-size: 1.2rem;

  margin-top: 1rem;

  text-decoration: none;
  text-align:center;
  line-height: 3rem;
`


export default function Footer({isLoading}: Props) {
  const totalSelectionNumber = useSelector((state: RootState) => state.cartReducer.totalSelectionNumber);
  const totalSelectionPrice = useSelector((state: RootState) => state.cartReducer.totalSelectionPrice);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleClickOrderButton = () => {
    setIsSubmit(true);

    // 추가적인 주문 로직 작성
  }

  return (
    <FooterContainer>
      <OrderListText>총 수량 : {totalSelectionNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}개</OrderListText>
      <OrderListText>총 가격 : {totalSelectionPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</OrderListText>
      <OrderButton 
        href={totalSelectionNumber > 0 ? "/complete" : "/error"} 
        isLoading={isLoading}
        isSubmit={isSubmit}
        onClick={handleClickOrderButton}
      >{isSubmit ? "로딩중..." : "주문하기"}</OrderButton>
    </FooterContainer>
  )
}

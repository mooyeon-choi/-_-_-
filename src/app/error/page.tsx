'use client';

import styled from 'styled-components';
import { navigateOrderPage } from '../actions'
import React, { useState, useEffect } from "react";

const Main = styled.div`
  background: white;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const TextArea = styled.p`
  margin: 0;
`

export default function ErrorPage() {
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigateOrderPage();
    }, 3000);
  }, []);

  return (
    <Main>
      <TextArea>주문에 실패하였습니다.</TextArea>
      <TextArea>다시 시도해주세요.</TextArea>
    </Main>
  )
}

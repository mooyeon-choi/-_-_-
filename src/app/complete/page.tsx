'use client';

import Image from 'next/image';
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

export default function Complete() {
  const [isRedirected, setIsRedirected] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      navigateOrderPage();
    }, 3000);
  }, []);

  return (
    <Main>
      <Image src="/check.svg" alt="check icon" width="48" height="48"></Image>
      주문이 완료되었습니다.
    </Main>
  )
}

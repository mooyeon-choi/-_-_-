'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Link from 'next/link';

const Main = styled.div`
  background: black;
  height: 100%;
  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const EnterButton = styled(Link)`
  background: white;
  color: black;
  height: 3em;
  width: 175px;

  font-size: 1.5em;
  text-decoration: none;
  text-align:center;
  line-height: 3em;

  border-radius: 20px;
  margin-top: 30px;
`

export default function Home() {
  return (
    <Main>
      <Image src="/logo.svg" alt="반장창고 로고" width="150" height="51"></Image>
      <EnterButton href="/order">주문하러 가기</EnterButton>
    </Main>
  )
}

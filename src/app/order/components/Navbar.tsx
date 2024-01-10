'use client';

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 53px;
  background-color: black;
  box-sizing: border-box;
  padding: 10px;

  z-index: 1;
`;


export default function Navbar() {
  return (
    <NavbarContainer>
      <Link href="/order">
        <Image src="/logo_small.svg" alt="반장창고 로고" width="95" height="32"></Image>
      </Link>
    </NavbarContainer>
  )
}

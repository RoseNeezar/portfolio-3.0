import React, { FC } from "react"
import logo from "../assets/logo.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
import styled from "styled-components"
import { colorE } from "../constants/colorEnum"

interface INav {
  navColor?: colorE
  toggle: () => void
}
interface IStyle {
  navColor?: colorE
}

const NavbarLayout = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: ${(props: IStyle) => props.navColor};

  &:after {
    content: "";
    width: 65%;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.clrPrimary5};
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 768px) {
      width: 90%;
    }
  }
`
const NavCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
`
const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    margin-bottom: 0.375rem;
  }
`
const NavButton = styled.button`
  font-size: 2rem;
  background: transparent;
  border-color: transparent;
  color: var(--clr-primary-5);
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.clrPrimary2};
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`

const Navbar: FC<INav> = ({ navColor, toggle }) => {
  return (
    <NavbarLayout navColor={navColor}>
      <NavCenter>
        <NavHeader>
          <img src={logo} alt="logo" />
          <NavButton type="button" onClick={() => toggle()}>
            <FaAlignRight></FaAlignRight>
          </NavButton>
        </NavHeader>
        <PageLinks styleClass="nav-links"></PageLinks>
      </NavCenter>
    </NavbarLayout>
  )
}

export default Navbar

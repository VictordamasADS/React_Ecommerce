import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import { BsFillCartCheckFill } from "react-icons/bs";

export const Wrapper = styled.div`
  margin: 80px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  z-index: 100;
  right: 20px;
  top: 20px;
`;

export const CartIcon = styled(BsFillCartCheckFill)`
  color: white;
  position: fixed;
  top: 10px;
  right: 15px;
  font-size: 25px;

  @media (min-width: 1200px) {
    right: 20px;
  }
`;

export const Title = styled.h1`
  color: white;
  position: fixed;
  font-weight: 600;
  left: 20px;

  @media (min-width: 1200px) {
    left: 50px;
  }
`

export const Header = styled.header`
  width: 100%;
  height: 50px;
  background-color: blue;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  margin: 0;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 768px) {
    justify-content: space-between;
    width: 90%;
    margin: 0 auto;
  }

`;

export const Footer = styled.footer`
  bottom: 0;
  left: 0;
  position: fixed;
  background-color: #F2EFF0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: black;
    font-weight: 700;
  }
`

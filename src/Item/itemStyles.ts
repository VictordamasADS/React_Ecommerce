import styled from 'styled-components';
import { BsFillCartFill } from "react-icons/bs";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;

  h3 {
    color: black;
    font-family: cursive;
    font-weight: 600;
  }

  h5 {
    color: black;
    font-weight: 900;
  }

  p {
    color: black;
  }

  img {
    width: 60%;
    height: auto;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {
    padding: 1rem;
    height: 100%;
  }

`;

export const Button = styled.button`
  width: 100%;
  border: none;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`

export const CartButton = styled(BsFillCartFill)`
  color: white;
  margin-left: 5px;
  font-size: 20px;
`


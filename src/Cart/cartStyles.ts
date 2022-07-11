import styled from 'styled-components';
import { BsFillBasket2Fill } from "react-icons/bs";
import {AiOutlineClose} from 'react-icons/ai';

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 300px;
  padding: 20px;

  p {
    color: black;
    font-weight: 600;
  }

  h3 {
    margin-bottom: 100px;
  }

  @media (min-width: 1200px) {
    width: 500px;
  }
`;

export const BagIcon = styled(BsFillBasket2Fill)`
  color: black;
  font-size: 20px;
`

export const Close = styled(AiOutlineClose)`
  position: absolute;
  color: black;
  cursor: pointer;
  top: 15px;
  right: 15px;
  font-size: 25px;
`;

export const FinishBuy = styled.div`
  position: fixed;
  border: none;
  width: 95%;
  bottom: 0;
  margin: 0;

  @media (min-width: 820px) {
    width: 45%;
  }

  @media (min-width: 1200px) {
    width: 30%;
  }
`

export const Button = styled.button`
  width: 100%;
  font-weight: 900;
  border: none;
  cursor: pointer;
  height: 50px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
`
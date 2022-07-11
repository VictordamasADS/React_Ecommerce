import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  border-bottom: 1px solid lightblue;
  padding-bottom: 20px;
  
  div {
    flex: 1;
  }

  h4 {
    font-weight: 600;
    font-family: cursive;
  }

  p {
    font-weight: 600;
  }

  .information,
  .buttons {
    font-size: 15px;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 80px;
    height: auto;
    object-fit: cover;
    margin-left: 20px;
  }
  
`;
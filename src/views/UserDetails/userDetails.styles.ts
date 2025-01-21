import styled from 'styled-components';

export const UserCard = styled.section`
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 17px rgb(215 215 215 / 37%);
  display: flex;
  flex-direction: column;
  gap: 30px;
  background-color: #fff;

  a {
    color: #59575b;
  }
`;

export const UserDetail = styled.p`
  margin: 5px 0;
  color: #59575b;
`;

export const HeaderTitle = styled.h1`
    font-weight: 600;
    color: #E77231;
    font-size: 20px;

    @media (min-width: 600px){
      font-size: 30px;
    }
`;

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const Title = styled.h2`
  display: flex;
  flex-direction: column;
  color: #E77231;
  font-weight: 600;
  text-decoration: underline;
  font-size: 18px;
  
`;

export const Header = styled.header`
  display: flex;
  padding-left: 10px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;

  svg {
    margin-top: 5px;
  }

  &:hover {
    opacity: 0.8;
  }
`
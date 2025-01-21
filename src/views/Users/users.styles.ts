import styled from 'styled-components';

export const HeaderTitle = styled.h1`
    font-size: 30px;
    font-weight: 600;
    color: #E77231;
`;

export const Search = styled.input`
    width: 50%;
    height: 70px;
    padding: 12px;
    border-radius: 10px;
    border: 1.5px solid lightgrey;
    outline: none;
    transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
    box-shadow: 0px 0px 20px -18px;
    background-color: #fff;

    &:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
    }

    &:focus {
        border: 1px solid #E77231;

    }

    @media (min-width: 600px){
      height: 60px;
    }
`;

export const Filters = styled.section`
  display: flex;
  gap: 20px;
`

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  padding: 12px;
  background-color: white;
  border: 1px solid #d1d5db;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  width: 175px;
  color: #59575b;
  height: 70px;

    &:hover {
        border: 2px solid lightgrey;
        box-shadow: 0px 0px 20px -17px;
        color: #E77231;
    }

  svg {
    margin-right: 8px;
  }

  @media (min-width: 600px){
      height: 60px;
      width: 165px;
  }
`

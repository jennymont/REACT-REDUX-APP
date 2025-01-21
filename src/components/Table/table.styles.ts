import styled from 'styled-components';

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 17px rgb(215 215 215 / 37%);
`;

export const TableContent = styled.table`
  width: 100%;
  border-collapse: collapse;

  th {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    vertical-align: middle;
    cursor: default;
    padding: 16px;
  }

  th, td {
    text-align: left;
    color: #59575b;
  }

  td {
    padding: 8px 12px;
  }

  tbody tr:nth-child(even) {
    background-color: #ffffff;
  }

  tbody tr:nth-child(odd) {
    background-color: #f9f9f9;

  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;

  &:hover {
    opacity: 0.8;
    
    svg path, svg circle{
      stroke: #E77231;
    }
  }
`
export const EmptyList = styled.span`
  width: 100%;
  text-align: center;
  color: #59575b;
  font-weight: 600;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
`;
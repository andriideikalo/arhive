import styled from '@emotion/styled';

export const TransHistStyles = styled.div`
  margin: 50px;
  margin-bottom: 20px;
  width: 400px;

  th,
  td {
    text-align: center;
    border: 1px solid black;
    width: 150px;
  }
  th {
    background-color: #00bcd5;
    color: white;
    width: 30px;
  }
  tr {
    background-color: #fff;
  }
  tr:nth-of-type(even) {
    background-color: #ecf1f3;
  }
  tr:hover {
    background-color: orange;
    font-weight: 800;
  }
`;

import styled from '@emotion/styled';

export const StatStyles = styled.div`
  border: 1px solid lightgray;
  background-color: #fff;
  width: 400px;

  position: relative;
  padding-top: 20px;
  margin: 50px;
  transition-duration: 250ms;

  .statistics {
    margin-right: auto;
    margin-left: auto;
    width: 400px;
  }

  .title {
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
  }

  .stat-list {
    padding: 0;
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: space-between;
    list-style: none;
  }

  .item {
    width: 80px;
    height: 70px;
    color: #fff;
  }

  .label {
    display: block;
    font-weight: 500;
    padding: 10px;
  }

  .percentage {
    font-size: 16px;
    font-weight: 500;
  }
`;

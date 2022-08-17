import styled from 'styled-components';

export const List = styled.ul`
  overflow:hidden;
  width: 50vw;
  border-left:1px solid #ccc;
  padding-bottom:30px;
  list-style: none;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom:1px solid #ccc;
  padding:20px;
`;

export const Button = styled.button`  
  cursor: pointer;
  align-self: center;
  padding: 0 30px;
  background:#f8a035;
  color:#fff;
  border:none;
  border-radius: 4px;
  height: auto;
  height: 30px;
  transition: 250ms;

  &:hover {
    background: #DD7F0C;
  }
`;
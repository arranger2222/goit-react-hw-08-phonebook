import styled from 'styled-components';

export const Section = styled.section`
  padding: 30px 15px;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const SectionContent = styled.section`
  line-height: 1.8;
  height: 140px;
  padding: 10px 40px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ccc;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

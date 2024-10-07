import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #f4f4f4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  
  .carousel .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
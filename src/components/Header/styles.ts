import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  height: 3.5rem;

  top: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${props => props.theme.colors.primary};
  color: #FFF;

  padding: 0 2rem 0 .5rem;

  -webkit-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  
  @media screen and (max-width: 600px) {
    padding: 0 1rem 0 0;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 1rem;

  @media screen and (max-width: 600px) {
    justify-content: flex-start;
  }
`;
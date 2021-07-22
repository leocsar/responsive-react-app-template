import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;

  padding: 6rem 2rem 0;
  
  background-color: ${props => props.theme.colors.background};
  
  @media screen and (max-width: 600px) {
    flex-direction: column;
    flex-wrap: unset;
    padding: 6rem 1.5rem 0;
  }
`;

export const Form = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  border-radius: .25rem;
  padding: 1rem;
  margin: 0 1.5rem 1.5rem 0;
  
  background-color: ${props => props.theme.colors.settings.form};

  -webkit-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);
  box-shadow: 0 .188rem .375rem rgba(0, 0, 0, 0.16), 0 .188rem .375rem rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 0 1.5rem 0;
  }
`;

export const Field = styled.div`
  min-width: 19rem;
  height: 3.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  margin: 0 .5rem 0 0;
  margin: .25rem 0 0 0;
  padding: 1.5rem 0;
  
  border-style: solid;
  border-width: 0 0 .031rem 0;
  border-color: ${props => props.theme.colors.settings.fieldBorder};

  @media screen and (max-width: 600px) {
    min-width: 100%
  }
`;

export const Title = styled.label`
  width: 100%;
  
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 0 1.5rem 0 1.5rem;
  
  color: ${props => props.theme.colors.settings.fieldTitle};
  
  font-size: 1rem;
`;

export const FormTitle = styled.label`
  width: calc(100% + 2rem);
  height: 2rem;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  border-radius: .25rem .25rem 0 0;
  margin: -1.5rem -1.5rem .625rem -1.5rem;
  
  background-color: ${props => props.theme.colors.settings.formTitleBackground};
  color: ${props => props.theme.colors.settings.formTitle};
  
  font-size: 1rem;
`;
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 90px 30px 0;
  flex-wrap: wrap;
  
  @media screen and (max-width: 600px) {
    padding: 90px 20px 0;
    flex-direction: column;
    flex-wrap: unset;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: ${props => props.theme.colors.settings.form};
  border-radius: 5px;
  padding: 20px;
  margin: 0 20px 20px 0;

  -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -ms-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  -o-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  @media screen and (max-width: 600px) {
    width: 100%;
    margin: 0 0 20px 0;
  }
  `;

export const Field = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 300px;
  height: 50px;
  margin: 0 10px 0 0;
  padding: 20px 0;
  margin 5px 0 0 0;
  border-style: solid;
  border-width: 0 0 0.5px 0;
  border-color: ${props => props.theme.colors.settings.fieldBorder};

  @media screen and (max-width: 600px) {
    min-width: 100%
  }
`;

export const Title = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px 0 0;
  font-size: 14px;
  color: ${props => props.theme.colors.settings.fieldTitle};
`;

export const FormTitle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 40px);
  height: 30px;
  margin: -20px -20px 10px -20px;
  font-size: 16px;
  background-color: ${props => props.theme.colors.settings.formTitleBackground};
  color: ${props => props.theme.colors.settings.formTitle};
  border-radius: 5px 5px 0 0;
`;
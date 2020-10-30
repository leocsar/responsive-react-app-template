import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import {
  Container,
  Form,
  Field,
  Title,
  FormTitle
 } from './styles';

interface Props {
  toggleTheme(): void;
}

const Settings: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Form>
        <FormTitle>{'Aparência'}</FormTitle>

        <Field>
          <Title>{'Tema escuro'}</Title>
          <Switch 
            onChange={toggleTheme}
            checked={title == 'dark'}
            checkedIcon={false}
            uncheckedIcon={false}
            height={10}
            width={40}
            handleDiameter={20}
            offHandleColor={colors.settings.switchHandleOff}
            onHandleColor={colors.settings.switchHandleOn}
            offColor={shade(0.15, colors.settings.switchOff)}
            onColor={colors.settings.switchOn}
          />
        </Field>
      </Form>
    </Container>
  );
};

export default Settings;
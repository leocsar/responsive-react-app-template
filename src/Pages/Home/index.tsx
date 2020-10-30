import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Link to='/settings'>
        {'Configurações'}
      </Link>
    </Container>
  );
};

export default Home;
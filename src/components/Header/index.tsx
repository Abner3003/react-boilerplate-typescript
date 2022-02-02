import React, { useContext } from "react";
import { Container } from "./styles";
import { ThemeContext } from "styled-components";

interface Props {
    alterarThema() :void 

}

const Header: React.FC<Props> = ({alterarThema}) => {
    const {colors} = useContext(ThemeContext);
  return (
    <Container>
        <p>Portifolio</p>
        <button onClick={alterarThema}>Teste</button>
    </Container>
  );
};

export default Header;

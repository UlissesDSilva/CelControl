import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Link, useHistory, useParams } from 'react-router-dom'
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";

import imgAdm from "../../assets/pacce-symbol.svg";

interface CelulaProps {
  id_celula: number;
  name: string;
  facilitator: string;
  dias_celulas: string;
  description: string;
  hours: number;
  img?: string;
}

export function HomeAdm() {
  const params = useParams() as { idCelula: string };
  const celulaId = params.idCelula;

  const history = useHistory();

  const [celula, setCelula] = useState({} as CelulaProps);

  function handleNavigateToListCelulas() {
    history.push(`/listCelulas`);
  }

  return(
      <>
        <Container>
            <div className="contentRight">
                <img src={imgAdm} alt="Pacce - ADM" />
                <h1>PACCE</h1>
                <span>
                    <p><strong>Área restrita para administração do pacce</strong></p>
                </span>
            </div>
            <div className="contentLeft">
                <Button style={{textDecoration: 'none', color: '#FFFF'}}>
                    <Link style={{ color: '#FFF' }} to='/cadastroCelula'> Cadastro </Link>
                </Button>
                <Button onClick={handleNavigateToListCelulas} style={{textDecoration: 'none'}}>
                    Células
                </Button>
            </div>
        </Container>
      
      </>
  )
}
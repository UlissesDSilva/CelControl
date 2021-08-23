import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Link, useHistory} from 'react-router-dom'

import imgAdm from "../../assets/pacce-symbol.svg";

export function HomeAdm() {

  const history = useHistory();

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
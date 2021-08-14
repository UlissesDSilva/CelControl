import { Link } from 'react-router-dom'

import { Container } from './styles'

import { Button } from '../Button/index'

type CelulaProps = {
  idCel: number,
  img?: string,
  name: string,
  description: string
}

export function Celula({ idCel, img, name, description }: CelulaProps) {
  return (
    <Container>
      <img
        src={img}
        alt={`Célula de ${name}`}
        title={`celula de ${name}`}
      />

      <h1>{name}</h1>

      <span>{description}</span>

      <Button style={{textDecoration: 'none'}}>
        <Link to="cadastroAluno" style={{textDecoration: 'none', color: '#fff'}}> Cadastrar </Link>
      </Button>

      <Button>
        <Link to={`/feedback/${idCel}`} style={{textDecoration: 'none', color: '#fff'}}> Feedback </Link>        
      </Button>
    </Container>
  );
}
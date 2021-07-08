import { Container } from './styles'

import { Button } from '../Button/index'

type CelulaProps = {
  img: string,
  name: string,
}

export function Celula({ img, name }: CelulaProps) {
  return (
    <Container>
      <img
        src={img}
        alt={`Célula de ${name}`}
        title={`celula de ${name}`}
      />

      <h1>{name}</h1>

      <span>Informações</span>

      <Button>
        Cadastro
      </Button>

      <Button>
        Feedback
      </Button>
    </Container>
  );
}
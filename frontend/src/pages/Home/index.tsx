import { Container, TopContainer } from "./styles";
import { Celula } from '../../components/Celula/index'

import fupImg from '../../assets/fup.svg';
import lolImg from '../../assets/lol.svg';
import cinemaImg from '../../assets/cinema.svg';
import rpgImg from '../../assets/rpg.svg';
import agoraImg from '../../assets/agora.svg';
import pacceImg from '../../assets/pacce-symbol.svg';

export function Home() {
  const celulas = [
    { id: 1, name: 'FUP', img: fupImg },
    { id: 2, name: 'RPG de mesa', img: rpgImg },
    { id: 3, name: 'Pacce o Filme', img: cinemaImg },
    { id: 4, name: 'Ágora', img: agoraImg },
    { id: 5, name: 'Celulol', img: lolImg },
  ]
  
  return (
    <>
      <TopContainer>
        <img src={pacceImg} alt="Símbolo do PACCE" />
        <span>Células</span>
      </TopContainer>
      <Container>
        {celulas.map(celula => (
          <Celula key={celula.id} name={celula.name} img={celula.img} />
        ))}
      </Container>    
    </>
  )
}
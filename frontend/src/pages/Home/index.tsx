import { useState, useEffect } from "react";
import { Container, TopContainer } from "./styles";
import { Celula } from '../../components/Celula/index'
import { api } from "../../services/api"; 

import fupImg from '../../assets/fup.svg';
import cinemaImg from '../../assets/cinema.svg';
import rpgImg from '../../assets/rpg.svg';
import pacceImg from '../../assets/pacce-symbol.svg';

type CelulaProps = {
  id_celula: number,
  name: string,
  description: string,
  dias_celulas: string,
  hours: string,
  img?: string
}

export function Home() {

  const [ celulas, setCelulas ] = useState<CelulaProps[]>([])

  async function getCel() {
    
    const imgs = [fupImg, cinemaImg, rpgImg]

    try {
      const response = await api.get<CelulaProps[]>('/celula')

      let parseResponse:CelulaProps[] = []
      response.data.forEach((res, indice: number) => {
        parseResponse.push({
          ...res,
          img: imgs[indice]
        })
      })

      setCelulas(parseResponse)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getCel()
  }, []) 
  
  return (
    <div style={{display: 'flex'}}>
      <div style={{margin: '0 auto'}}>
        <TopContainer>
          <img src={pacceImg} alt="Símbolo do PACCE" />
          <span>Células</span>
        </TopContainer>
        <Container>
          {celulas.map(celula => (
            <Celula key={celula.id_celula} name={celula.name} img={celula?.img} description={celula.description} idCel={celula.id_celula}/>
          ))}
        </Container>  
      </div>  
    </div>
  )
}
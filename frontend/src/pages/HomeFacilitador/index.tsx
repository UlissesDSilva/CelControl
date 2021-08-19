import { Container } from "./styles";
import { Button } from "../../components/Button";
import { Link, useHistory, useParams } from 'react-router-dom'
import { useEffect } from "react";
import { api } from "../../services/api";
import { useState } from "react";


import fupImg from '../../assets/fup.svg';
import rpgImg from '../../assets/rpg.svg';
import cinemaIMG from '../../assets/cinema.svg';
interface CelulaProps {
  id_celula: number;
  name: string;
  facilitator: string;
  dias_celulas: string;
  description: string;
  hours: number;
  img?: string;
}

const imgArray = [
  {
    celulaId: 1,
    img: rpgImg
  },
  {
    celulaId: 4,
    img: fupImg
  },
  {
    celulaId: 5,
    img: cinemaIMG,
  }
]

export function HomeFacilitador() {
  const params = useParams() as { idCelula: string };
  const celulaId = params.idCelula;

  const history = useHistory();

  const [celula, setCelula] = useState({} as CelulaProps);

  function handleNavigateToFeedback() {
    history.push(`/feedback/${celula.id_celula}`);
  }
 
  useEffect(() => {
    api.get<CelulaProps>(`/celula/${celulaId}`)
      .then(res => setCelula({  ...res.data, img: imgArray.filter(img => img.celulaId===res.data.id_celula)[0]?.img }))
      .catch(err => console.log(err));

  }, [celulaId]);

  return(
      <>
        <Container>
            <div className="contentRight">
                <img src={celula?.img} alt="" />
                <h1>{celula?.name}</h1>
                <span>
                    <p>{celula.description}</p>
                    <p>Facilitador: <strong>{celula?.facilitator}</strong></p>
                </span>
            </div>
            <div className="contentLeft">
                <Button style={{textDecoration: 'none', color: '#FFFF'}}>
                    <Link style={{ color: '#FFF' }} to={`/frequencia/${celula.id_celula}`}> Frequência </Link>
                </Button>
                <Button onClick={handleNavigateToFeedback} style={{textDecoration: 'none'}}>
                    Feedback
                </Button>
            </div>
        </Container>
      
      </>
  )
}
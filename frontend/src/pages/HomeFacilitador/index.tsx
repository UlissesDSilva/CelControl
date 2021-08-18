import { Container } from "./styles";
import { Button } from "../../components/Button";
import cinemaIMG from '../../assets/cinema.svg';
import { Link } from 'react-router-dom'
import { InfoCircleOutlined } from '@ant-design/icons';

export function HomeFacilitador() {
    return(
        <>
            <Container>
                <div className="contentRight">
                    <img src={cinemaIMG} alt="" />
                    <h1>Pacce o Filme</h1>
                    <span>
                        <p>Informações <InfoCircleOutlined/></p>
                        <p>Nome Facilitador</p>
                    </span>
                </div>
                <div className="contentLeft">
                    <Button style={{textDecoration: 'none'}}>
                        <Link to='frequencia'> Frequência </Link>
                    </Button>
                    <Button style={{textDecoration: 'none'}}>
                        Feedback
                    </Button>
                    <Button style={{textDecoration: 'none'}}>
                        Relatório
                    </Button>
                </div>
            </Container>
        
        </>
    )
}
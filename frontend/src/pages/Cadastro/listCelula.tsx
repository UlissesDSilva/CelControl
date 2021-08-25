import { useParams, Link } from 'react-router-dom';
import { Button, Comment, Avatar } from "antd";
import { api } from '../../services/api'
import { toast } from 'react-toastify';

import { CommentContainer } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

import imgADM from "../../assets/pacce-symbol.svg";

type CelulaProps = {
    id_celula: number,
    img?: string,
    name: string,
    description: string
};

export function ListCel() {
  const params = useParams() as { id: string }
  const idCel = params.id;

  const [celulas, setCelulas] = useState<CelulaProps[]>([]);

  const authorization = sessionStorage.getItem('celcontrol:admId');

 useEffect(() => {
  api.get(`/celula`)
    .then(res => setCelulas(res.data))
    .catch(err => toast.error('Erro ao listar as células', {
      position: toast.POSITION.TOP_RIGHT,
    }))
 }, [idCel]);

async function handleRemoveCelula(id_celula: number) {

    if(!window.confirm("Deseja realmente remover q célula?")){
        return
    }
    
    try {
       const response = await api.delete(`celula/${id_celula}`, {headers: {authorization}})
       setCelulas(celulas.filter(celula => celula.id_celula !== id_celula))
       const successMsg = response.data.ok
       toast.success( successMsg, { position: toast.POSITION.TOP_RIGHT } )
    } catch (error) {
        const errorMsg = error.response.data.error
        toast.error( errorMsg, { position: toast.POSITION.TOP_RIGHT })
    }
} 

const PrevFeedBacks = () => {
    
  return celulas.map((celula, indice) => (
        <Comment
            style={{ background: '#FFF', width: '70%', margin: '0 auto', borderRadius: 7 }}
            key={celula.id_celula}
            author={celula.name}
            avatar={
                <Avatar
                src={imgADM}
                alt="Pacce"
                />
            }
            content={
                <div style={{display: 'flex'}}>
                    <p style={{display: 'inline-block', width: '90%'}}>
                    {celula.description}
                    </p>
                </div>
            }
            actions={
                [
                    <Button  htmlType="submit" style={{border: '0', color:'#f8c806'}}>
                        <Link to={`updateCelula/${celula.id_celula}`}> <EditOutlined /> </Link>
                    </Button>,
                    <Button  htmlType="submit" onClick={() => handleRemoveCelula(celula.id_celula)} style={{border: '0', color:'#fd0e0e'}}>
                        <DeleteOutlined />
                    </Button>,
                    
                ]
            }
        />
  ))
};

  return (
    <CommentContainer>
        {celulas.length > 0 && (
            <>
                <strong style={{marginTop: '10px'}}>Células cadastradas</strong>
                {PrevFeedBacks()} 
            </>
        )}
    </CommentContainer>
  );
};
import { useParams, useHistory } from 'react-router-dom';
import { Form, Input, Button } from "antd";
import { api } from '../../services/api'
import { toast } from 'react-toastify';
// import moment from 'moment';

import { useEffect } from 'react';

type CommentProps = {
  id_feedback: number;
  name: string;
  text: string;
  id_celula: number;
};

export function Feedback() {
  const params = useParams() as { id: string }
  const idCel = params.id;
  const history = useHistory()
  
 async function onSubmit(values: any) {

  if( !values.name) { 
    values.name = ''
  }

  try {
    await api.post(`/feedback?celula=${idCel}`, values );
    toast.success('Feedback criado com sucesso!!!', {
      position: toast.POSITION.TOP_RIGHT,
    })
    history.push('/')
  } catch (error) {
    const errMsg = error.response.data.error;

    toast.error(errMsg, {
      position: toast.POSITION.TOP_RIGHT,
    }) 
  }
 } 

 useEffect(() => {
  api.get(`/feedback/${idCel}`)
    .catch(err => toast.error('Erro ao pegar comentários', {
      position: toast.POSITION.TOP_RIGHT,
    }))
 }, [idCel]);

  return (
    <>
      <Form style={{margin: '60px auto', maxWidth: '600px'}}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onSubmit}
        >
        <Form.Item
          label="Nome"
          name="name"
        >
          <Input placeholder="Seu nome ou envie como anônimo" />
        </Form.Item>

        <Form.Item
          label="Feedback"
          name="text"
          rules={[{ required: true, message: 'Escreva um feedback para a célula' }]}
        >
          <Input.TextArea 
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" style={{background: '#00AFEF', borderRadius: '50px'}}>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
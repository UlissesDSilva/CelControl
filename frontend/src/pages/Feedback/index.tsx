import { useParams } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { api } from '../../services/api'
import { toast } from 'react-toastify';


export function Feedback() {
  const params = useParams() as { id: string }
  const idCel = params.id
  
 async function onSubmit(values: any) {

  if( !values.name) { 
    values.name = ''
  }

  try {
    await api.post(`/feedback?celula=${idCel}`, values )
    toast.success('Feedback criado com sucesso!!!', {
      position: toast.POSITION.TOP_RIGHT,
    })
  } catch (error) {
    const errMsg = error.response.data.error;

    toast.error(errMsg, {
      position: toast.POSITION.TOP_RIGHT,
    }) 
  }
 } 

  return (
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
  );
};
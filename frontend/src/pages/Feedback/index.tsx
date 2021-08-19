import { useParams } from 'react-router-dom';
import { Form, Input, Button, Comment, Avatar } from "antd";
import { api } from '../../services/api'
import { toast } from 'react-toastify';
// import moment from 'moment';

import { CommentContainer } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';

type CommentProps = {
  id_feedback: number;
  name: string;
  text: string;
  id_celula: number;
};

export function Feedback() {
  const params = useParams() as { id: string }
  const idCel = params.id;

  const [comments, setComments] = useState<CommentProps[]>([]);
  
 async function onSubmit(values: any) {

  if( !values.name) { 
    values.name = ''
  }

  try {
    const response = await api.post<CommentProps>(`/feedback?celula=${idCel}`, values );

    setComments(prevComments => [ ...prevComments, response.data ]);
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

 useEffect(() => {
  api.get(`/feedback/${idCel}`)
    .then(res => setComments(res.data))
    .catch(err => toast.error('Erro ao pegar comentários', {
      position: toast.POSITION.TOP_RIGHT,
    }))
 }, [idCel]);

 const PrevFeedBacks = () => {
  return comments.map(comment => (
    <Comment
      style={{ background: '#FFF', width: '70%', margin: '0 auto', borderRadius: 7 }}
      key={comment.id_celula}
      author={comment.name}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      }
      content={
        <p>
          {comment.text}
        </p>
      }
      // datetime={
      //   <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
      //     <span>{moment().fromNow()}</span>
      //   </Tooltip>
      // }
    />
  ))
    };

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
      <CommentContainer>
        {comments.length > 0 && (
          <>
            <strong>Feedbacks e resenhas desta célula</strong>
            {PrevFeedBacks()} 
          </>
        )}
      </CommentContainer>
    </>
  );
};
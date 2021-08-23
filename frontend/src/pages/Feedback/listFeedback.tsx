import { useParams } from 'react-router-dom';
import { Button, Comment, Avatar } from "antd";
import { api } from '../../services/api'
import { toast } from 'react-toastify';

import { CommentContainer } from './styles';
import { useEffect } from 'react';
import { useState } from 'react';
import { DeleteOutlined } from '@ant-design/icons';

type CommentProps = {
  id_feedback: number;
  name: string;
  text: string;
  id_celula: number;
};

export function ListFeedback() {
  const params = useParams() as { id: string }
  const idCel = params.id;

  const [comments, setComments] = useState<CommentProps[]>([]);
  const [matFacilitator, setMatFacilitator] = useState('')

 useEffect(() => {
  api.get(`/feedback/${idCel}`)
    .then(res => setComments(res.data))
    .catch(err => toast.error('Erro ao pegar comentários', {
      position: toast.POSITION.TOP_RIGHT,
    }))
 }, [idCel]);

 useEffect(() => {
    api.get(`/celula/${idCel}`)
      .then(res => setMatFacilitator(res.data.matricula))
      .catch(err => console.log(err))
  }, [idCel])

async function handleRemoveFeedback(id_feedback: number) {

    if(!window.confirm("Deseja realmente remover o feedback?")){
        return
    }
    
    try {
       await api.delete(`/feedback/${id_feedback}`, {headers: {authorization: matFacilitator}})
       setComments(comments.filter(comment => comment.id_feedback !== id_feedback))
       toast.success('Feedback removido!', { position: toast.POSITION.TOP_RIGHT }) 
    } catch (error) {
        const errorMsg = error.response.data.error
        toast.error( errorMsg, { position: toast.POSITION.TOP_RIGHT })
    }
} 

const PrevFeedBacks = () => {
    console.log(comments);
    
  return comments.map(comment => (
        <Comment
            style={{ background: '#FFF', width: '70%', margin: '0 auto', borderRadius: 7 }}
            key={comment.id_feedback}
            author={comment.name}
            avatar={
                <Avatar
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                alt="Han Solo"
                />
            }
            content={
                <div style={{display: 'flex'}}>
                    <p style={{display: 'inline-block', width: '90%'}}>
                    {comment.text}
                    </p>
                </div>
            }
            actions={
                [
                    <Button  htmlType="submit" onClick={() => handleRemoveFeedback(comment.id_feedback)} style={{border: '0', color:'#fd0e0e'}}>
                        <DeleteOutlined />
                    </Button>
                ]
            }
        />
  ))
};

  return (
    <CommentContainer>
        {comments.length > 0 && (
            <>
                <strong style={{marginTop: '10px'}}>Feedbacks e resenhas desta célula</strong>
                {PrevFeedBacks()} 
            </>
        )}
    </CommentContainer>
  );
};
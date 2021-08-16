import React, { useState } from 'react'
import { useParams } from 'react-router'; 
import { api } from '../../services/api';
import { Form, Input, Button, Checkbox, Divider } from 'antd';

const horas = [
  'M-AB',
  'M-CD',
  'T-AB',
  'T-CD',
  'N-AB',
  'N-CD',
]

const horarios = [
  { 
    weekDay: 'SEG',
    horas
  },
  {
    weekDay: 'TER',
    horas
  },
  {
    weekDay: 'QUA',
    horas
  },
  {
    weekDay: 'QUI',
    horas
  },
  {
    weekDay: 'SEX',
    horas
  },
];

type Schedules = {
  weekDay: string,
  hours: []
}
const weekDay = horarios;


export function CadastroAluno() {

  const params = useParams() as {id: string}
  const idCel = params.id

  const [semana, setSemana] =  useState<Schedules[]>([])
  // const [ disabled, setDisabled ] = useState(true)
  
  function onChangeWeek(event: any) {
    setSemana({
      ...event,
      weekDay: event
    })    
  }

  function onChangeHours(event: any) {
    setSemana({
      ...event,
      hours: event
    })
  }
  console.log(semana);

  async function onFinish (values: any) {
    const data = {
      ...values,
      complementHours: 0 
    }

    try {
      const response = await api.post('/student', data)
      const student = response.data.id
      await api.post('/celulaStudent', {student, celula: idCel})
      alert("Aluno CAdastrado!")
    } catch (error) {
      console.log(error);
      
    }
    console.log('Received values of form: ', values);
  };

  return (
    <div style={{ width: '80vw', margin: '40px 10%' }}>
      <Form name="complex-form" onFinish={onFinish} style={{width: '100%'}}>
        <Form.Item required>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '25%' }}
          >
            <Input placeholder="Nome" />
          </Form.Item>
          <Form.Item
            label='Telefone'
            name="phone"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '25%', margin: '0 8px' }}
          >
            <Input placeholder="Telefone" />
          </Form.Item>
          <Form.Item
            label='Curso'
            name="course"
            rules={[{ required: true }]}
            style={{ display: 'block', width: '50.7%'}}
          >
            <Input placeholder="Curso" />
          </Form.Item>
          <Form.Item
            label='Matrícula'
            name="matricula"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '25%' }}
          >
            <Input placeholder="Matrícula" />
          </Form.Item>
          <Form.Item
            label='Senha'
            name="password"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '25%', margin: '0 8px' }}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <div style={{display: 'flex',  border: '1px solid #ccc', borderRadius: '20px', width: 'max-content', padding: '15px'}}>
            {horarios.map((horario, indice: number) => (
              <div style={{display: 'flex'}} key={horario.weekDay}>
                <div>
                  <Checkbox onChange={(event) => onChangeWeek(event.target.value)} value={horario.weekDay}>
                    {horario.weekDay}
                  </Checkbox>
                  <Checkbox.Group options={horas} style={{display: 'flex', flexDirection: 'column'}} onChange={onChangeWeek} />
                </div>
                {horarios.length - 1 > indice && (<Divider type='vertical' style={{height: '100%'}}/>)}
              </div>
            ))}
          </div>
          <br />
                  
          <Form.Item label=" " colon={false} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button type="primary" htmlType="submit" style={{background: '#00AFEF', borderRadius: '50px'}}>
              Cadastrar
            </Button>
          </Form.Item> 
        </Form.Item>
        
      </Form>
    </div>
  );
};

// Cadastro de célula
export function CadastroCelula() {

  function onChangeSemana(event: any) {
    
    console.log(event);
  }
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{margin: '40px auto', maxWidth: '80vw'}}>
      <Form.Item label="Info. da Célula" style={{ marginBottom: 0 }}>
        <Form.Item
          name="Nome Celula"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%' }}
        >
          <Input placeholder="Nome da Célula" />
        </Form.Item>
        <Form.Item
          name="Facilitador"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%', margin: '0 8px' }}
        >
          <Input placeholder="Facilitador" />
        </Form.Item>
        <Form.Item
          name="Descrição"
          rules={[{ required: true }]}
          style={{ display: 'block', width: '50.7%', margin: '0 8px 8px 0' }}
        >
          <Input.TextArea placeholder="Descrição" autoSize={{ minRows: 3, maxRows: 5 }}/>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Matricula e Senha" style={{ marginTop: '25px', marginBottom: 0 }}>
        <Form.Item
          name="Matrícula"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%' }}
        >
          <Input placeholder="Matrícula" />
        </Form.Item>
        <Form.Item
          name="Senha"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%', margin: '0 8px' }}
        >
          <Input.Password placeholder="Senha" />
        </Form.Item>
      </Form.Item>
      
      <div style={{display: 'flex', margin: '0 auto', border: '1px solid #ccc', borderRadius: '20px', width: 'max-content', padding: '15px'}}>
        {horarios.map((horario, indice: number) => (
          <div style={{display: 'flex'}} key={horario.weekDay}>
            <div>
              <Checkbox onChange={(event) => onChangeSemana(event.target.value)} value={horario.weekDay}>
                {horario.weekDay}
              </Checkbox>
              <Checkbox.Group options={horario.horas} style={{display: 'flex', flexDirection: 'column'}} onChange={onChangeSemana}/>
            </div>
            {horarios.length - 1 > indice && (<Divider type='vertical' style={{height: '100%'}}/>)}
          </div>
        ))}
      </div>
      <br />
              
      <Form.Item label=" " colon={false} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button type="primary" style={{background: '#00AFEF', borderRadius: '50px'}}>
          Cadastrar
        </Button>
      </Form.Item> 
    </Form>
  );
};
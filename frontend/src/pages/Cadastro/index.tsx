import React, { useState } from 'react'
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom' 
import { api } from '../../services/api';
import { Form, Input, Button, Select, Radio } from 'antd';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

const { Option } = Select;


export function CadastroAluno() {

  const [celulasHours, setCelulasHours] = useState('')
  const history = useHistory()
  const params = useParams() as {id: string}
  const idCel = params.id
  
  useEffect(() => {
    api.get(`/celula/${idCel}`)
      .then(res => setCelulasHours(res.data.dias_celulas))
      .catch(err => console.log(err))
  }, [idCel])

  const [ disabled, setDisabled ] = useState(true)

  function handleConfirm() {
    alert("Você confirma que não está matrículado em disciplinas no horário da célula!?")
    setDisabled(!disabled)
  }

  async function onFinish (values: any) {
    const data = {
      ...values,
      complementHours: 0 
    }

    try {
      const response = await api.post('/student', data)
      const student = response.data.id
      await api.post('/celulaStudent', {student, celula: idCel})
      toast.success('Aluno cadastrado na célula com sucesso!!!', {
        position: toast.POSITION.TOP_RIGHT,
      });

      history.push('/')
    } catch (error) {
      const errMsg = error.response.data.error;
      toast.error(errMsg, {
        position: toast.POSITION.TOP_RIGHT,
      })
      
    }
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
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <strong> Horário da célula {celulasHours}</strong>
            <Radio onChange={() => handleConfirm()}> Confirmação de horários </Radio>
          </div>        
          <Form.Item label=" " colon={false} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Button type="primary" htmlType="submit" style={{background: '#00AFEF', borderRadius: '50px'}} disabled={disabled}>
              Cadastrar
            </Button>
          </Form.Item> 
        </Form.Item>
        
      </Form>
    </div>
  );
};


const weekDaySelect = [
  {
    day: 'Segunda-Feira',
    sig: 'SEG'
  },
  {
    day: 'Terça-Feira',
    sig: 'TER'
  },
  {
    day: 'Quarta-Feira',
    sig: 'QUA'
  },
  {
    day: 'Quinta-Feira',
    sig: 'Qui'
  },
  {
    day: 'Sexta-Feira',
    sig: 'SEX'
  },
]

const hoursSelect = [
  { hour: '08:00', sig: 'MAB' },
  { hour: '10:00', sig: 'MCD' },
  { hour: '13:30', sig: 'TAB' },
  { hour: '15:30', sig: 'TCD' },
  { hour: '18:00', sig: 'NAB' },
  { hour: '20:00', sig: 'NCD' }
]

// Cadastro de célula
export function CadastroCelula() {
  const history = useHistory();

  function renderWeekDaySelect() {
    return weekDaySelect.map(day => {
      return(
        <Option key={day.sig} value={day.sig}>{day.day}</Option>
      )
    })
  }

  function renderHoursSelect() {
    return hoursSelect.map((hour, indice) => {
      return(
        <Option key={indice} value={hour.sig}>{hour.hour}</Option>
      )
    })
  }
  
  const [dayCel, setDayCel] = useState('')

  function onChangeSemana(event: any) {
    setDayCel(event)
  }

  function onChangeHours(event: any){
    const hour = event
    setDayCel(`${dayCel}-${hour}`)
  }
  
  async function onSubmit(values: any) {
    const data = {
      ...values,
      hours: 2,
      diasCelulas: dayCel
    }
    try {
      await api.post('/celula', data) 
      
      toast.success('Nova célula cadastrada!', {
        position: toast.POSITION.TOP_RIGHT,
      })

      history.push('/');
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <Form name="complex-form" onFinish={onSubmit} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{margin: '40px auto', maxWidth: '80vw'}}>
      <Form.Item label="Info. da Célula" style={{ marginBottom: 0 }}>
        <Form.Item
          name="name"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%' }}
        >
          <Input placeholder="Nome da Célula" />
        </Form.Item>
        <Form.Item
          name="facilitator"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%', margin: '0 8px' }}
        >
          <Input placeholder="Facilitador" />
        </Form.Item>
        <Form.Item
          name="description"
          rules={[{ required: true }]}
          style={{ display: 'block', width: '50.7%', margin: '0 8px 8px 0' }}
        >
          <Input.TextArea placeholder="Descrição" autoSize={{ minRows: 3, maxRows: 5 }}/>
        </Form.Item>
      </Form.Item>
      <Form.Item label="Matricula e Senha" style={{ marginTop: '25px', marginBottom: 0 }}>
        <Form.Item
          name="matricula"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%' }}
        >
          <Input placeholder="Matrícula" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%', margin: '0 8px' }}
        >
          <Input.Password placeholder="Senha" />
        </Form.Item>
      </Form.Item>

      <Form.Item style={{margin: '0 auto'}} >
        <Select style={{display: 'inline-block', width: '10%', marginRight: '10px'}} placeholder="Selecione um dia" onChange={onChangeSemana}>
          {renderWeekDaySelect()}
        </Select>

        <Select style={{display: 'inline-block', width: '10%'}} placeholder="Selecione um dia" onChange={onChangeHours}>
          {renderHoursSelect()}
        </Select>
      </Form.Item>
              
      <Form.Item label=" " colon={false} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Button type="primary" htmlType='submit' style={{background: '#00AFEF', borderRadius: '50px'}}>
          Cadastrar
        </Button>
      </Form.Item> 
    </Form>
  );
};
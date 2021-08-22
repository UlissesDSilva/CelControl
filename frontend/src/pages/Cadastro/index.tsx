import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom' 
import { api } from '../../services/api';
import { Form, Input, Button, Select, Radio } from "antd";
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
    <div style={{width: '80vw', margin: '40px auto'}}>
      <Form name="complex-form" onFinish={onFinish} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Form.Item required>
          <Form.Item
            label="Nome"
            name="name"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px' }}
          >
            <Input placeholder="Nome" />
          </Form.Item>
          <Form.Item
            label='Telefone'
            name="phone"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px', marginLeft: '8px' }}
          >
            <Input placeholder="Telefone" />
          </Form.Item>

          <Form.Item
            label='Curso'
            name="course"
            rules={[{ required: true }]}
            style={{ display: 'block', width: '508px'}}
          >
            <Select placeholder="Selecioane um curso">
              <Option value="Sistema de Informação">Sistema de Informação</Option>
              <Option value="Engenharia de Software">Engenharia de Software</Option>
              <Option value="Engenharia de Computação">Engenharia de Computação</Option>
              <Option value="Design Digital">Design Digital</Option>
              <Option value="Ciência da Computação">Ciência da Computação</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Matrícula'
            name="matricula"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px' }}
          >
            <Input placeholder="Matrícula" />
          </Form.Item>
          <Form.Item
            label='Senha'
            name="password"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px', marginLeft: '8px' }}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>

          <Form.Item>
            <div style={{display: 'inline-block'}}>
              <strong style={{display: 'block'}}> Horário da célula {celulasHours}</strong>
              <Radio onChange={() => handleConfirm()}> Confirmação de horários </Radio>
            </div>
            <Button type="primary" htmlType="submit" style={{background: '#00AFEF', borderRadius: '50px', marginLeft: '220px'}} disabled={disabled}>
              Cadastrar
            </Button> 
          </Form.Item>
          {/* <div style={{display: 'flex', flexDirection: 'column'}}>
          </div>         */}
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
    };

    const authorization = sessionStorage.getItem('celcontrol:admId');

    try {
      await api.post('/celula', data, {
        headers: {
          authorization
        }
      });
      
      toast.success('Nova célula cadastrada!', {
        position: toast.POSITION.TOP_RIGHT,
      })

      history.push('/');
    } catch (error) {
      const errMsg = error.response.data.error;

      toast.error(errMsg, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <div style={{width: '80vw', margin: '40px auto'}}>
      <Form name="complex-form" onFinish={onSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <Form.Item required>
          <Form.Item
            label="Nome da célula"
            name="name"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px' }}
          >
            <Input placeholder="Nome da Célula" />
          </Form.Item>
          <Form.Item
            label="Nome do Facilitador"
            name="facilitator"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px', marginLeft: '8px' }}
          >
            <Input placeholder="Facilitador" />
          </Form.Item>
          <Form.Item
            label="Descrição da célula"
            name="description"
            rules={[{ required: true }]}
            style={{ display: 'block', width: '508px'}}
          >
            <Input.TextArea placeholder="Descrição" autoSize={{ minRows: 3, maxRows: 5 }}/>
          </Form.Item>
          <Form.Item
            label="Matrícula do facilitador"
            name="matricula"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px' }}
          >
            <Input placeholder="Matrícula" />
          </Form.Item>
          <Form.Item
            label="Senha"
            name="password"
            rules={[{ required: true }]}
            style={{ display: 'inline-block', width: '250px', marginLeft: '8px' }}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>
          <Form.Item>
            <Select style={{display: 'inline-block', width: '250px', marginRight: '8px'}} placeholder="Selecione um dia" onChange={onChangeSemana}>
              {renderWeekDaySelect()}
            </Select>

            <Select style={{display: 'inline-block', width: '250px'}} placeholder="Selecione um dia" onChange={onChangeHours}>
              {renderHoursSelect()}
            </Select>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType='submit' style={{background: '#00AFEF', borderRadius: '50px'}}>
              Cadastrar
            </Button>
          </Form.Item> 
        </Form.Item>

                
      </Form>
    </div>
  );
};
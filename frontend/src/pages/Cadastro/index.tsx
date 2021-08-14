import React, { useState } from 'react'
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

const weekDay = horarios;

function onChange(event: any) {
  console.log('checked = ', event);
}
export function CadastroAluno() {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{margin: '40px auto', maxWidth: '80vw'}}>
      <Form.Item label="Info. Do Aluno" style={{ marginBottom: 0 }}>
        <Form.Item
          name="Nome"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%' }}
        >
          <Input placeholder="Nome" />
        </Form.Item>
        <Form.Item
          name="Sobrenome"
          rules={[{ required: true }]}
          style={{ display: 'inline-block', width: '25%', margin: '0 8px' }}
        >
          <Input placeholder="Sobrenome" />
        </Form.Item>
        <Form.Item
          name="Curso"
          rules={[{ required: true }]}
          style={{ display: 'block', width: '50.7%', margin: '0 8px 8px 0' }}
        >
          <Input placeholder="Curso" />
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
              <Checkbox onChange={(event) => onChange(event.target.value)} value={horario.weekDay}>
                {horario.weekDay}
              </Checkbox>
              <Checkbox.Group options={horario.horas} style={{display: 'flex', flexDirection: 'column'}} onChange={onChange}/>
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

export function CadastroCelula() {
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
              <Checkbox onChange={(event) => onChange(event.target.value)} value={horario.weekDay}>
                {horario.weekDay}
              </Checkbox>
              <Checkbox.Group options={horario.horas} style={{display: 'flex', flexDirection: 'column'}} onChange={onChange}/>
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
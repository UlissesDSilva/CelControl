import React from 'react';
import { useHistory } from 'react-router-dom'
import { api } from '../../services/api';
import { Form, Input, Button } from 'antd';

export function LoginFacilitador() {
  const history = useHistory()

  async function onFinish(values: any) {
    try {
      await api.post('/session', values)
      history.push('/homeFacilitador')
    } catch (error) {
      
    }
  }

  return (
    <Form style={{margin: '40px auto', maxWidth: '600px'}}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Matrícula"
        name="matricula"
        rules={[{ required: true, message: 'Informar matrícula válida' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Senha incorreta' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{background: '#00AFEF', borderRadius: '50px'}}>
          Logar
        </Button>
      </Form.Item>
    </Form>
  );
};


export function LoginPacce() {
  const history = useHistory()

  async function onFinish(values: any) {

    try {
      await api.post('/adm', values)
      history.push('/cadastroCelula')
    } catch (error) {
      
    }
  }

  return (
    <Form style={{margin: '40px auto', maxWidth: '600px'}}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Login"
        name="login"
        rules={[{ required: true, message: 'Informar matrícula válida' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="password"
        rules={[{ required: true, message: 'Senha incorreta' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" style={{background: '#00AFEF', borderRadius: '50px'}}>
          Logar
        </Button>
      </Form.Item>
    </Form>
  );
};
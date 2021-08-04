import React from 'react';
import { Form, Input, Button } from 'antd';

export function LoginFacilitador() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form style={{margin: '40px auto', maxWidth: '600px'}}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Matrícula"
        name="matrícula"
        rules={[{ required: true, message: 'Informar matrícula válida' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Senha"
        name="senha"
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
import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { HiMenu } from 'react-icons/hi';
import { Container } from "./styles";
import { MenuSider } from '../Menu'
import { Affix, Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

export function Header() {
  const [collapsed, setCollapsed] = useState(true);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    };
  return (
    <>
      <Affix offsetTop={0}>
        <Container>
          <span>
          <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 0, background: '#00AFEF', border: 'none', boxShadow: 'none' }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
          </Button>
            pacceqx
          </span>
          <span className="application-name">CelControl</span>
          <button type="button">
            <BiSearch size={24} color="#FFF" />
          </button>
        </Container>
      </Affix>
      <MenuSider collapsed={collapsed}/>
    </>
  );
}
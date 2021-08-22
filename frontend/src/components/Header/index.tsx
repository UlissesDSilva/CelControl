import React from 'react';
import { Container } from "./styles";
import { Affix, Button } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined
} from '@ant-design/icons';

interface HeaderProps {
  toggleCollapsed: () => void;
  collapsed: boolean;
}

export function Header({ toggleCollapsed, collapsed }: HeaderProps) {
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
        </Container>
      </Affix>

    </>
  );
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

type MenuSiderProps = {
    collapsed: boolean
}

export function MenuSider(props: MenuSiderProps) {
    
    return (
        <div style={{ width: 256, height: '10vh', position: 'fixed'}}>          
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            inlineCollapsed={props.collapsed}
            style={{height: '100vh'}}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to='/'> Home </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              <a href="https://linktr.ee/pacceufcqx" target='_blank' >Pacce</a>
            </Menu.Item>
            <Menu.Item key="3" icon={<DesktopOutlined />}>
              <Link to="/loginFacilitador">Login - Facilitador</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<ContainerOutlined />}>
              Cadastro
            </Menu.Item>
          </Menu>
        </div>
      );

}

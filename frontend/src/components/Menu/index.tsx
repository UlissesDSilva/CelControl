import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu } from 'antd';
import {
  HomeOutlined,
  LoginOutlined,
  LinkOutlined,
  FileDoneOutlined,
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
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to='/'> Home </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<LinkOutlined />}>
              <a href="https://linktr.ee/pacceufcqx" target='_blank' > Pacce - Links</a>
            </Menu.Item>
            <Menu.Item key="3" icon={<LoginOutlined />}>
              <Link to="/loginFacilitador">Login - Facilitador</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<FileDoneOutlined />}>
              <Link to='/loginPacce'> Cadastrar Célula </Link>
            </Menu.Item>
          </Menu>
        </div>
      );

}

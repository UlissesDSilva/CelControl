import { render } from '@testing-library/react';
import { Table, Tag, Space, Radio } from 'antd';

const columns = [
  {
    title: 'Nome',
    dataIndex: 'name',
    key: 'name',
    render: (data: any) => <a>{data}</a>,
  },
  {
    title: 'Curso',
    dataIndex: 'curso',
    key: 'curso'
  },
  {
    title: 'Matrícula',
    dataIndex: 'matricula',
    key: 'matricula',
  },
  {
    title: 'Célula',
    key: 'cel',
    dataIndex: 'cel'
  },
  {
    title: 'Presença',
    key: 'action',
    render: () => (
      <Radio></Radio>
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'Ulisses Queiroz',
    curso: 'SI',
    matricula: '471xxxx',
    cel: 'Pacce o Filme'
  },
  {
    key: '2',
    name: 'João Victor',
    curso: 'SI',
    matricula: '453xxx',
    cel: 'Pacce o Filme'
  },
  {
    key: '3',
    name: 'Rafael Lopes',
    curso: 'SI',
    matricula: '341xxxx',
    cel: 'Pacce o Filme'
  },
];

export function FrequenciaAluno(){
    return(
        <Table columns={columns} dataSource={ data } style={{width: '80vw', margin: '0 12%'}}/>
    )
    
}
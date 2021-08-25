import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom' 
import { api } from '../../services/api';
import { Form, Input, Button, Select } from "antd";
import { toast } from 'react-toastify';

const { Option } = Select;


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

type CelulaProps = {
    id_celula: number,
    img?: string,
    name: string,
    description: string,
    facilitator: string,
    dias_celulas: string,
    matricula: string
}

// Update de célula
export function UpdateCelula() {
    
    const [celula, setCelula] = useState({} as CelulaProps)

    const history = useHistory()
    const params = useParams() as {id: string}
    const idCel = params.id    
    
    useEffect(() => {
        api.get(`/celula/${idCel}`)
            .then(res => setCelula(res.data))
            .catch(err => console.log(err))
    }, [idCel])

    function renderWeekDaySelect() {
        return weekDaySelect.map(day => {
        return(
            <Option key={day.sig} value={day.sig}>{day.day}</Option>
        )
        })
    }

    const lastDay = celula.dias_celulas

    const [dayCel, setDayCel] = useState('')

    function renderHoursSelect() {
        return hoursSelect.map((hour, indice) => {
        return(
            <Option key={indice} value={hour.sig}>{hour.hour}</Option>
        )
        })
    }    

    function onChangeSemana(event: any) {
        setDayCel(event)
    }

    function onChangeHours(event: any){
        const hour = event
        setDayCel(`${dayCel}-${hour}`)
    }

    async function onSubmit(values: any) {
        const data = {
        ...celula,
        dias_celulas: dayCel || lastDay
        };

        const authorization = sessionStorage.getItem('celcontrol:admId');
        try {
        await api.put(`/celula/${idCel}`, data, {
            headers: {
            authorization
            }
        });
        
        toast.success('Dados atualizados', {
            position: toast.POSITION.TOP_RIGHT,
        })

        history.push('/listCelulas');
        } catch (error) {
        const errMsg = error.response.data.error;

        toast.error(errMsg, {
            position: toast.POSITION.TOP_RIGHT,
        });
        }
    };
    
    function changeCelula(event: any) {
        setCelula({
            ...celula,
            [event.target.name]: event.target.value
        })
    }
    
    return (
        <Form name="complex-form" onFinish={onSubmit} style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', width: '80vw', margin: '40px auto'}}>
            <div>
                <Form.Item
                    label='Nome da célula'
                    style={{ display: 'inline-block', width: '250px' }}
                >
                    <Input 
                        value={celula.name}
                        onChange={changeCelula}    
                        name='name'
                    />
                </Form.Item>
                <Form.Item
                    label="Nome do Facilitador"
                    style={{ display: 'inline-block', width: '250px', marginLeft: '8px' }}
                >
                    <Input 
                        value={celula.facilitator}
                        onChange={changeCelula}    
                        name='facilitator'    
                    />
                </Form.Item>
                <Form.Item
                    label="Descrição da célula"                    
                    style={{ display: 'block', width: '508px'}}
                >
                    <Input.TextArea 
                        value={celula.description}
                        onChange={changeCelula}
                        name="description"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                </Form.Item>
                <Form.Item
                    label="Matrícula do facilitador"                    
                    style={{ display: 'inline-block', width: '250px' }}
                >
                    <Input
                        value={celula.matricula} 
                        onChange={changeCelula}
                        name="matricula"
                    />
                </Form.Item>
                <Form.Item
                    label="Senha"
                    style={{ display: 'inline-block', width: '250px', marginLeft: '8px' }}
                >
                    <Input.Password 
                        placeholder="Senha"                       
                        onChange={changeCelula}
                        name="password"
                    />
                </Form.Item>
                <Form.Item>
                    <span style={{display: 'block'}}> O horário dessa célula está sendo: <b>{`${celula.dias_celulas}`}</b> </span>
                    <Select style={{display: 'inline-block', width: '250px', marginRight: '8px'}} placeholder="Selecione um dia" onChange={onChangeSemana}>
                        {renderWeekDaySelect()}
                    </Select>

                    <Select style={{display: 'inline-block', width: '250px'}} placeholder="Selecione um dia" onChange={onChangeHours}>
                    {renderHoursSelect()}
                    </Select>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType='submit' style={{background: '#f8c806', borderRadius: '50px', border: 'none'}}>
                        Atualizar
                    </Button>
                </Form.Item> 
            </div>                    
        </Form>
    );
};
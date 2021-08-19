import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Table, Checkbox } from "antd";
import { useParams } from 'react-router-dom';

type StudentProps = {
  student_name: string;
  matricula: string;
  id_student: string;
  phone:string;
  celula_name: string;
  id_celula: number
}

export function FrequenciaAluno(){
  const params = useParams() as { idCelula: string };
  const idCelula = params.idCelula;

  const [student, setStudent] = useState<StudentProps[]>([]);

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'student_name',
      key: 'id_student',
      render: (data: any) => <span>{data}</span>,
    },
    {
      title: 'Curso',
      dataIndex: 'course',
      key: 'course'
    },
    {
      title: 'Matrícula',
      dataIndex: 'matricula',
      key: 'matricula'
    },
    {
      title: 'Célula',
      key: 'celula_name',
      dataIndex: 'celula_name'
    },
    {
      title: 'Presença',
      key: 'name',
      render: (_data: StudentProps) => (
        <Checkbox 
          onChange={(evt) => {
            handleUpdatePresency(_data, evt.target.checked)
          }}
        />
      ),
    },
  ];

  useEffect(() => {
    async function getStudent() {
      try {
      const response = await api.get(`/celulaStudent/${idCelula}`)
      setStudent(response.data)
      
      } catch (error) {
        console.log(error)
      }
    }
    getStudent()
  }, [idCelula])
  
  async function handleUpdatePresency(dataStudent: StudentProps, presency: boolean) {
    const data = {
      student: dataStudent.id_student,
      presency
    }
    try {
      await api.patch(`/frequency?celulaId=${dataStudent.id_celula}`, data)
    } catch (error) {
      console.log(error);
      
    }
  }
    
  const data = student.map((studant, index) => {
    return {
      ...studant,
      key: index
    }
  })

  return(
    <Table columns={columns} dataSource={ data } style={{width: '80vw', margin: '0 12%'}} />
  )
    
}
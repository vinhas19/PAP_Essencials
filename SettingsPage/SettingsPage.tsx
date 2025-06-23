import React, { JSX, memo, useEffect, useState } from 'react'
import Setting from './Setting'
import '../../Style/Pages/Settings.css'
import { getConfig, setConfig } from '../../Script/configFetchers';
import ExcelArrayObjConverted from '../../Components/ExcelArrayObjConverted';
import StudentFilter from '../../Components/StudentFilter';
import EmailSender from '../../Components/EmailSender/EmailSenderBtn';
import { deleteStudents, getStudents, setStudents } from '../../Script/StudentDataFetcher';
import { Student } from '../../data/Types';
import { useConfirm } from '../../Components/ConfirmContextProvider';
import { useAlert } from '../../Components/AlertContextProvider';
import ContactUs from '../ContactUs/ContactUs';
import { DeleteAllTeachers } from '../../Script/TeachersDataFetcher';
import TimeTableStructurePage from '../TimeTableStructure/TimeTableStructurePage';

const SettingsPage: React.FC = (): JSX.Element => {
    const [theme, setTheme] = useState<string>('System');
    const [emailsWithStudentData, setEmailsWithStudentData] = useState<Student[]>([]);
    const [studentsList, setStudentsList] = useState<Student[]>([]);
    const [contactExpanded, setContactExpanded] = useState(false);
    const [timeTablesExpanded, setTimeTablesExpanded] = useState(false);

    const { showErrorConfirm } = useConfirm();
    const { showSuccess, showError } = useAlert()

    useEffect(() => {
        getConfig('theme', theme => setTheme(theme as string || 'System'), () => setTheme('System'))
        getStudents(students => setStudentsList(students))
    }, [])

    const handleDarkModeChange = (value: string | boolean) => {
        value = String(value)
        if (value === 'System') {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (prefersDarkScheme) changeTheme('Dark');
            else changeTheme('Light');
        } else {
            changeTheme(value)
        }
        setConfig('theme', value, () => setTheme(value))
    };

    return (
        <div style={{ padding: '0 0.5rem', flex: 1, overflowY: 'auto' }}>
            <h1 style={{ color: 'var(--textColor)' }}>Configurações</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <Setting
                    heading="Escolha o tema"
                    description="Ative o modo escuro, por padrão ele segue as configurações do sistema"
                    type="select"
                    options={['Sistema', 'Claro', 'Escuro']}
                    value={
                        theme === 'System' ? 'Sistema' : 
                        theme === 'Light' ? 'Claro' : 
                        'Escuro'
                    }
                    onChange={(value) => {
                        const backendValue = 
                            value === 'Sistema' ? 'System' : 
                            value === 'Claro' ? 'Light' : 
                            'Dark';
                        handleDarkModeChange(backendValue);
                    }}
                />
                <Setting
                    heading='Importar/Exportar Dados do Aluno'
                    description='Importar - exportar ou compartilhar dados dos alunos em formato Excel'
                    value=""
                    onChange={() => { }}
                    component={
                        <ExcelArrayObjConverted exportDataGetter={getStudents} onImport={data => {
                            const filteredData = data.map((student: any) => ({
                                name: student.name,
                                rollNo: student.rollNo,
                                semester: student.semester,
                                section: student.section,
                                email: student.email,
                                phoneNumbers: student.phoneNumbers,
                                address: student.address,
                                attendance: student.attendance,
                            }));
                            const cleanedStudent = [];
                            for (let index = 0; index < filteredData.length; index++) {
                                if (
                                    filteredData[index].name === null ||
                                    filteredData[index].rollNo === null ||
                                    filteredData[index].semester === null ||
                                    filteredData[index].section === null ||
                                    filteredData[index].email === null ||
                                    filteredData[index].attendance === null) {
                                    continue;
                                }
                                if (
                                    filteredData[index].name === undefined ||
                                    filteredData[index].rollNo === undefined ||
                                    filteredData[index].semester === undefined ||
                                    filteredData[index].section === undefined ||
                                    filteredData[index].email === undefined ||
                                    filteredData[index].attendance === undefined) {
                                    continue;
                                }
                                cleanedStudent.push(filteredData[index]);
                            }
                            if (cleanedStudent.length <= 0) {
                                showError("Os dados devem ter colunas de nome, número de matrícula, semestre, seção, e-mail e frequência");
                                return
                            }
                            setStudents(
                                cleanedStudent,
                                () => showSuccess('Dados dos alunos importados com sucesso'),
                                () => showError('Erro na importação de dados dos alunos')
                            );
                        }} />
                    }
                />
                <Setting
                    heading='Enviar E-mails em Massa'
                    description='Enviar e-mails em massa para alunos'
                    value=""
                    onChange={() => { }}
                    component={
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                            <StudentFilter students={studentsList} onChange={students => { setEmailsWithStudentData(students) }} />
                            <EmailSender studentsData={emailsWithStudentData} />
                        </div>
                    }
                />
                <Setting
                    heading='Exclusão Múltipla'
                    description='Excluir dados de alunos e professores'
                    value=""
                    onChange={() => { }}
                    component={
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center' }}>
                            <button
                                style={{
                                    backgroundColor: 'rgb(255, 82, 43)',
                                    border: '2px solid rgb(255, 82, 43)',
                                    color: '#fff',
                                }}
                                className="btn-type2"
                                onClick={() => {
                                    showErrorConfirm('Tem certeza de que deseja excluir todos os alunos?', () => {
                                        deleteStudents(() => {
                                            setStudentsList([]);
                                            showSuccess('Todos os dados dos alunos foram excluídos com sucesso')
                                        })
                                    })
                                }}>Apagar dados dos Estudantes</button>
                            <button
                                style={{
                                    backgroundColor: 'rgb(255, 82, 43)',
                                    border: '2px solid rgb(255, 82, 43)',
                                    color: '#fff',
                                }}
                                className="btn-type2"
                                onClick={() => {
                                    showErrorConfirm('Tem certeza de que deseja excluir todos os professores?', () => {
                                        DeleteAllTeachers(() => {
                                            showSuccess('Todos os dados dos professores foram excluídos com sucesso')
                                        })
                                    })
                                }}>Apagar dados dos Professores</button>
                        </div>
                    }
                />
                <Setting
                    heading='Importar/Exportar Dados Completos'
                    description='Importar - exportar ou compartilhar dados inteiros, incluindo alunos, professores, disciplinas, horário escolar, etc.'
                    value=""
                    onChange={() => { }}
                    component={
                        <ExcelArrayObjConverted exportDataGetter={getStudents} />
                    }
                />
                <Setting
                    heading='Contacte-nos'
                    description='Entre em contacto connosco para qualquer dúvida ou sugestão'
                    value=""
                    onChange={() => {}}
                    component={
                        <div>
                            <div 
                                onClick={() => setContactExpanded(!contactExpanded)}
                                style={{ 
                                    cursor: 'pointer', 
                                    display: 'flex', 
                                    justifyContent: 'flex-end', 
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    width: '100%'
                                }}
                            >
                                <span>Clique para {contactExpanded ? 'ocultar' : 'expandir'} &nbsp;</span>
                                <span style={{  
                                    transform: contactExpanded ? 'rotate(180deg)' : 'none',
                                    transition: 'transform 0.2s',
                                }}>
                                    ▼
                                </span>
                            </div>
                            {contactExpanded && (
                                <div style={{ marginTop: '10px', position: 'relative' }}>
                                    <ContactUs />
                                </div>
                            )}
                        </div>
                    }
                />
               <Setting
                    heading='Formato de Tabela'
                    description='Escolha o formato da tabela de horários'
                    value=""
                    onChange={() => {}}
                    component={
                        <div>
                            <div 
                                onClick={() => setTimeTablesExpanded(!timeTablesExpanded)}
                                style={{ 
                                    cursor: 'pointer', 
                                    display: 'flex', 
                                    justifyContent: 'flex-end', 
                                    alignItems: 'center',
                                    marginTop: '10px',
                                    width: '100%'
                                }}
                            >
                                <span>Clique para {timeTablesExpanded ? 'ocultar' : 'expandir'} &nbsp;</span>
                                <span style={{  
                                    transform: timeTablesExpanded ? 'rotate(180deg)' : 'none',
                                    transition: 'transform 0.2s',
                                }}>
                                    ▼
                                </span>
                            </div>
                            {timeTablesExpanded && (
                                <div style={{ 
                                    marginTop: '10px', 
                                    position: 'relative',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    backgroundColor: 'var(--backgroundColor2)',
                                    borderRadius: '8px'
                                }}>
                                    <TimeTableStructurePage />
                                </div>
                            )}
                        </div>
                    }
                />
            </div>
        </div >
    )
}

export function changeTheme(theme: string) {
    const root = document.documentElement;
    if (theme === 'Dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
}

export default memo(SettingsPage)
import MiniStateContainer from '../../Components/MiniStateContainer'
import TimeTable from '../../Components/TimeTable'
import "../../Style/Pages/TimeTablesPage.css"
import { HorizentalCardsContainer } from '../../Components/Cards'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import { getSubjectsDetailsList, SubjectsDetailsList } from '../../Script/SubjectsDataFetcher'
import { generateTimeTable, getSchedule, getTimeTableStructure, saveSchedule } from '../../Script/TimeTableDataFetcher'
import { emptyTimeTableDetails } from '../../Components/TimeTable'
import Loader from '../../Components/Loader'
import { FullTimeTable, TimeTable as TimeTableType, TimeTableStructure } from '../../data/Types'
import TeacherAndSubjectSelector from './TeacherAndSubjectSelector'
import { ButtonsContainer, SectionsBtnContainer } from './Header'
import { useAlert } from '../../Components/AlertContextProvider'

function TimeTablesPage() {
    return (
        <>
            <div className='page time-table'>
                <MainComponents />
            </div>
        </>
    )
}

function MainComponents() {
    const [sems, setSems] = useState<string[]>()
    const [allTimeTables, setAllTimeTables] = useState<FullTimeTable>()
    const [timeTable, setTimeTable] = useState<TimeTableType>(emptyTimeTableDetails)
    const [currentOpenSem, setCurrentOpenSem] = useState<number>(0)
    const [currentOpenSection, setCurrentOpenSection] = useState<number>(0)
    const [displayLoader, setDisplayLoader] = useState<boolean>(false)
    const [timeTableStructure, setTimeTableStructure] = useState<TimeTableStructure>({
        breaksPerSemester: [[4, 5], [5], [5], [5]],
        periodCount: 9,
        sectionsPerSemester: [0, 0, 0, 0],
        semesterCount: 3
    })
    const [showPopUp, setShowPopUp] = useState<boolean>(false)

    const subjectsDetails = useRef<SubjectsDetailsList | undefined>(undefined)
    const periodDetailsIndex = useRef<[number, number] | null>(null)
    const fillManually = useRef<boolean>(true)

    const { showError } = useAlert()

    useEffect(() => {
        getSubjectsDetailsList(data => subjectsDetails.current = data)
        getTimeTableStructure((data: TimeTableStructure) => {
            if (data) {
                setTimeTableStructure(data)
                let sems = []
               for (let index = 1; index <= Math.min(data.semesterCount, 3); index++) {
                    sems.push("Ano " + index);
                }
                setSems(sems)
            }
        })
    }, [])

    const startUpFunction = useCallback(() => {
        try {
            if (allTimeTables)
                if (allTimeTables[currentOpenSem][currentOpenSection])
                    setTimeTable(allTimeTables[currentOpenSem][currentOpenSection])
                else setTimeTable(emptyTimeTableDetails);
        } catch (error) {
            console.log("%cErro na seleção de tabela de horários", "color: green")
        }
    }, [currentOpenSem, currentOpenSection, allTimeTables])

    useEffect(() => {
        startUpFunction()
    }, [currentOpenSem, currentOpenSection, allTimeTables, startUpFunction])

    useEffect(() => {
        getSchedule(data => {
            setAllTimeTables(data)
        })
    }, [])

    const semCardClickHandler = useCallback((value: string) => {
        let year = parseInt(value.slice(5))
        setCurrentOpenSem(year - 1)
    }, [])

    const setBtnClickHandler = useCallback((activeTeacherName: string[], activeSubjectName: string[]) => {
        if (activeSubjectName.length > 0 && activeTeacherName.length > 0 && periodDetailsIndex.current) {
            let [dayIndex, periodIndex]: [number, number] = periodDetailsIndex.current
            let newTimeTable: TimeTableType = [...timeTable]
            if (newTimeTable[dayIndex] === null) return
            newTimeTable[dayIndex][periodIndex] = [
                activeTeacherName.join("+"),
                activeSubjectName[0],
                (subjectsDetails.current && subjectsDetails.current[activeSubjectName[0]]) ?
                    subjectsDetails.current[activeSubjectName[0]].roomCodes[0] : ""
            ]

            saveSchedule(currentOpenSem + 1, currentOpenSection + 1, newTimeTable, () => {
                newTimeTable ? setTimeTable(newTimeTable) : ""
                setShowPopUp(false)
            }, (msg) => showError(msg || "Algo deu errado!"))
        }
    }, [subjectsDetails.current, periodDetailsIndex.current, timeTable])

    return (
        <>
            <div className='top-sub-container'>
                <div className='menubar'>
                    <MiniStateContainer onChange={() => {
                        startUpFunction();
                        getSchedule(data => {
                            setAllTimeTables(data)
                        })
                    }} />
                    <div className='main-btn-container'>
                        <ButtonsContainer
                            onAutoFillBtnClick={() => {
                                setDisplayLoader(true)
                                generateTimeTable((data) => {
                                    setAllTimeTables(data);
                                    setDisplayLoader(false)
                                }, (msg) => {
                                    setDisplayLoader(false)
                                    showError(msg || "Algo deu errado!")
                                })
                            }}
                            onFillManuallyBtnClick={(value) => {
                                fillManually.current = value;
                            }}
                        />
                        {timeTableStructure && <SectionsBtnContainer
                            currentOpenSection={currentOpenSection}
                            setCurrentOpenSection={setCurrentOpenSection}
                            noOfSections={timeTableStructure.sectionsPerSemester[currentOpenSem]} />}
                    </div>
                </div>

                <HorizentalCardsContainer
                    cardList={sems}
                    onCardClick={semCardClickHandler} />

                {subjectsDetails.current && timeTableStructure && <TimeTable
                    className='class-time-table'
                    subjectsDetails={subjectsDetails.current}
                    details={timeTable}
                    periodClickHandler={(dayIndex: number, periodIndex: number) => {
                        if (!fillManually.current) return
                        periodDetailsIndex.current = [dayIndex, periodIndex];
                        setShowPopUp(true)
                    }}
                    breakTimeIndexs={timeTableStructure.breaksPerSemester[currentOpenSem]}
                    noOfPeriods={Number(timeTableStructure.periodCount)} />}
                {!timeTable &&
                    (<div style={{ display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                        Nenhum horário encontrado para o ano {currentOpenSem + 1} Sec {String.fromCharCode(65 + currentOpenSection)}
                    </div>)}
            </div>
            {subjectsDetails.current && <TeacherAndSubjectSelector
                active={showPopUp}
                onSetBtnClick={setBtnClickHandler}
                onCancelBtnClick={() => setShowPopUp(false)}
            />}
            {displayLoader && <Loader />}
        </>
    )
}

export default memo(TimeTablesPage)

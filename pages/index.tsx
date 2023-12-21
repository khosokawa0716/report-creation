import Head from 'next/head'
import InputText from '../components/InputText'
import InputNumber from '../components/InputNumber'
import InputTime from '../components/InputTime'
import InputPassword from '../components/InputPassword'
import TextArea from '../components/TextArea'
import Button from '../components/Button'
import ButtonIcon from '../components/ButtonIcon'
import PulldownMenu from '../components/PulldownMenu'
import Checkbox from '../components/Checkbox'
import Range from '../components/Range'
import Modal from '../components/Modal'
import ModalCaution from '../components/ModalCaution'
import styles from '../styles/Home.module.scss'

import React, { useState, useEffect } from 'react'

export default function Home() {
  const pageTitle = '日報作成ツール'
  const [isLogin, setIsLogin] = useState(false)
  const [loginPass, setLoginPass] = useState('')
  const [loginMessage, setLoginMessage] = useState('')
  const strageKey = 'report-creation-password'
  const password = 'report'
  const handleLogin = () => {
    const isCorrectVal = loginPass === password
    if (isCorrectVal) {
      localStorage.setItem(strageKey, loginPass)
      setLoginPass('')
      setIsLogin(true)
    } else {
      setLoginMessage('パスワードが違います。')
    }
  }
  useEffect(() => {
    const inputedPassword = localStorage.getItem(strageKey)
    if (inputedPassword === password) setIsLogin(true)
  }, [])
  const projects = [
    {
      label: 'F2023',
      value: 'FUTURE_DEVELOP_GOALS_2023',
    },
    {
      label: 'MKPL',
      value: 'MKPL_MAINTE_DEV',
    },
    {
      label: 'FB_MKPL',
      value: 'FB_MKPL',
    },
    {
      label: 'CMS_DEFECT',
      value: 'CMS_DEFECT',
    },
    {
      label: 'EC_DEFECT',
      value: 'EC_DEFECT',
    },
    {
      label: 'TICKET_DEFECT',
      value: 'TICKET_DEFECT',
    },
    {
      label: 'GOURMET_DEFECT',
      value: 'GOURMET_DEFECT',
    },
    {
      label: 'HOME_DEFECT',
      value: 'HOME_DEFECT',
    },
    {
      label: 'BEAUTY_DEFECT',
      value: 'BEAUTY_DEFECT',
    },
    {
      label: 'FARM',
      value: 'FARM',
    },
    {
      label: 'QC_FB',
      value: 'QC_FB',
    },
  ]
  const readData = (e: any) => {
    const file_reader = new FileReader()
    file_reader.addEventListener('load', function (e) {
      if (e.target === null || typeof e.target.result !== 'string') return
      const importData = JSON.parse(e.target.result)
      setAddress(importData.address)
      setCarbonCopy(importData.carbonCopy)
      setToName(importData.toName)
      setFromName(importData.fromName)
      setTasks(importData.tasks)
      setAddNewLineUnderTwoTitle(importData.addNewLineUnderTwoTitle)
      setAddNewLineUnderTask(importData.addNewLineUnderTask)
    })
    if (e.target.files === null) return
    file_reader.readAsText(e.target.files[0])
  }
  const getFileName = (): string => {
    const today = new Date()
    const zeroPadding = (time: number): string => {
      return String(time).padStart(2, '0')
    }
    const year = String(today.getFullYear())
    const month = zeroPadding(today.getMonth() + 1)
    const date = zeroPadding(today.getDate())
    const hours = zeroPadding(today.getHours())
    const minutes = zeroPadding(today.getMinutes())
    const seconds = zeroPadding(today.getSeconds())
    return `daily-report_${year}${month}${date}${hours}${minutes}${seconds}.json`
  }
  const exportData = () => {
    const output = {
      address,
      carbonCopy,
      toName,
      fromName,
      tasks,
      addNewLineUnderTwoTitle,
      addNewLineUnderTask,
    }
    const fileName = getFileName()
    const data = JSON.stringify(output)
    const link = document.createElement('a')
    link.href = 'data:text/plain,' + encodeURIComponent(data)
    link.download = fileName
    link.click()
  }
  const [errorMessages, setErrorMessages] = useState<string[]>([])
  const valide = () => {
    let errorArr: string[] = []
    tasks.forEach((task, index) => {
      if (!task.name) {
        const errorMessage = `タスク${index + 1}が未入力です。`
        errorArr = [...errorArr, errorMessage]
      }
      if (task.isToday && !task.todayProgress) {
        const errorMessage = `タスク${
          index + 1
        }の本日にチェックが入っている状態で、報告が未入力です。`
        errorArr = [...errorArr, errorMessage]
      }
      if (task.isBacklog && !task.backlogNumber) {
        const errorMessage = `タスク${
          index + 1
        }のBacklogの有無にチェックが入っている状態で、番号が未入力です。`
        errorArr = [...errorArr, errorMessage]
      }
    })
    setErrorMessages(errorArr)
    return errorArr
  }
  const closePreview = () => {
    setIsShowPreview(false)
  }
  const showPreview = () => {
    const countError = valide().length
    if (countError > 0) {
      setIsShowModal(true)
      return
    }
    setIsShowPreview(true)
  }
  const createMail = () => {
    if (navigator.clipboard) {
      return navigator.clipboard.writeText(previewContent).then(() => {
        const subject = `業務委託日報：${fromName}：${dateStr}`
        const link = document.createElement('a')
        link.href = `mailto:${address}?cc=${carbonCopy}&subject=${subject}`
        link.setAttribute('target', '_blank')
        link.click()
      })
    }
  }
  const task = {
    name: '',
    isBacklog: true,
    project: 'FUTURE_DEVELOP_GOALS_2023',
    backlogNumber: '100',
    isMonth: true,
    isWeek: true,
    isToday: true,
    isNext: true,
    monthTarget: '100',
    weekTarget: '100',
    todayTarget: '100',
    nextTarget: '100',
    todayProgress: '',
  }
  const [tasks, setTasks] = useState([task])
  const setTaskContent = (
    taskKey:
      | 'name'
      | 'isBacklog'
      | 'project'
      | 'backlogNumber'
      | 'isMonth'
      | 'isWeek'
      | 'isToday'
      | 'isNext'
      | 'monthTarget'
      | 'weekTarget'
      | 'todayTarget'
      | 'nextTarget'
      | 'todayProgress',
    index: number,
    taskStringContent = '',
    taskBooleanContent = false,
  ) => {
    setTasks(
      tasks.map((task, taskIndex) => {
        if (taskIndex !== index) return task
        if (
          taskKey === 'isBacklog' ||
          taskKey === 'isMonth' ||
          taskKey === 'isWeek' ||
          taskKey === 'isToday' ||
          taskKey === 'isNext'
        ) {
          task[taskKey] = taskBooleanContent
        } else {
          task[taskKey] = taskStringContent
        }
        return task
      }),
    )
  }
  const addTask = () => {
    setTasks((prevState) => [...prevState, task])
  }
  const operatingTime = {
    startHour: '10',
    startMinute: '00',
    endHour: '19',
    endMinute: '00',
  }
  const restTime = {
    startHour: '00',
    startMinute: '00',
    endHour: '00',
    endMinute: '00',
  }
  const [operatingTimes, setOperatingTimes] = useState([operatingTime])
  const [restTimes, setRestTimes] = useState([restTime])
  const [isRestTime, setIsRestTime] = useState(false)
  const addOperatingTime = () => {
    setOperatingTimes((prevState) => [...prevState, operatingTime])
  }
  const deleteOperatingTime = () => {
    const lastIndex = operatingTimes.length - 1
    setOperatingTimes(
      operatingTimes.filter((time, index) => {
        if (index !== lastIndex) return time
      }),
    )
  }
  const addRestTime = () => {
    setRestTimes((prevState) => [...prevState, restTime])
  }
  const deleteRestTime = () => {
    const lastIndex = restTimes.length - 1
    setRestTimes(
      restTimes.filter((time, index) => {
        if (index !== lastIndex) return time
      }),
    )
  }
  const setOperatingTimesContent = (
    timeKey: 'startHour' | 'startMinute' | 'endHour' | 'endMinute',
    timeContent: string,
    index: number,
  ) => {
    setOperatingTimes(
      operatingTimes.map((time, timeIndex) => {
        if (timeIndex === index) {
          time[timeKey] = timeContent
        }
        return time
      }),
    )
  }
  const setRestTimesContent = (
    timeKey: 'startHour' | 'startMinute' | 'endHour' | 'endMinute',
    timeContent: string,
    index: number,
  ) => {
    setRestTimes(
      restTimes.map((time, timeIndex) => {
        if (timeIndex === index) {
          time[timeKey] = timeContent
        }
        return time
      }),
    )
  }
  const [comment, setComment] = useState('本日は特にありません。')
  const [address, setAddress] = useState('example0@mail.com')
  const [carbonCopy, setCarbonCopy] = useState(
    'example1@mail.com, example2@mail.com',
  )
  const [toName, setToName] = useState('山田太郎様')
  const [fromName, setFromName] = useState('鈴木一郎')
  const [isShowPreview, setIsShowPreview] = useState(false)
  const [isShowModal, setIsShowModal] = useState(false)
  const [isShowModalCaution, setIsShowModalCaution] = useState(false)
  const [selectedTaskIndex, setSelectedTaskIndex] = useState<null | number>(
    null,
  )
  const toggleIsShowModal = () => {
    setIsShowModal(!isShowModal)
  }
  const toggleIsShowModalCaution = () => {
    setIsShowModalCaution(!isShowModalCaution)
  }
  const showModalCaution = (index: number) => {
    setSelectedTaskIndex(index)
    toggleIsShowModalCaution()
  }
  const deleteTask = () => {
    setTasks(
      tasks.filter((task, index) => {
        if (index !== selectedTaskIndex) return task
      }),
    )
    toggleIsShowModalCaution()
  }
  const getDateStr = (): string => {
    const today = new Date()
    const year = String(today.getFullYear())
    const month = String(today.getMonth() + 1)
    const date = String(today.getDate())
    return `${year}/${month}/${date}`
  }
  const formatTime = (hour: string, minute: string): string => {
    return `${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`
  }
  const getOperatingTimes = (): string => {
    return operatingTimes
      .map(
        (time) =>
          `${formatTime(time.startHour, time.startMinute)}〜${formatTime(
            time.endHour,
            time.endMinute,
          )}`,
      )
      .join('\n')
  }
  const getRestTimes = (): string => {
    return (
      '【追加休憩】\n' +
      restTimes
        .map(
          (time) =>
            `${formatTime(time.startHour, time.startMinute)}〜${formatTime(
              time.endHour,
              time.endMinute,
            )}`,
        )
        .join('\n')
    )
  }
  const [addNewLineUnderTwoTitle, setAddNewLineUnderTwoTitle] = useState(false)
  const getAddNewLineUnderTwoTitle = (checked: boolean) => {
    setAddNewLineUnderTwoTitle(checked)
  }
  const getMonthTasks = (): string => {
    return tasks
      .filter((task) => task.isMonth)
      .map((task) => `・${task.name}（${task.monthTarget}/100）`)
      .join('\n')
  }
  const getWeekTasks = (): string => {
    return tasks
      .filter((task) => task.isWeek)
      .map((task) => `・${task.name}（${task.weekTarget}/100）`)
      .join('\n')
  }
  const [addNewLineUnderTask, setAddNewLineUnderTask] = useState(false)
  const getAddNewLineUnderTask = (checked: boolean) => {
    setAddNewLineUnderTask(checked)
  }
  const getTodayProgress = (): string => {
    const filteredTasks = tasks.filter((task) => task.isToday)
    const totalTasks = filteredTasks.length
    return filteredTasks
      .map((task, index) => {
        const progress = `・${task.name}（${task.todayTarget}/100）`
        const isLastTask = index === totalTasks - 1
        if (addNewLineUnderTask && !isLastTask) {
          return task.isBacklog
            ? `${progress}\nhttps://kumukumu.backlog.com/view/${task.project}-${task.backlogNumber}\n\n`
            : `${progress}\n`
        } else {
          return task.isBacklog
            ? `${progress}\nhttps://kumukumu.backlog.com/view/${task.project}-${task.backlogNumber}\n`
            : `${progress}`
        }
      })
      .join('')
  }
  const getTodayReport = (): string => {
    if (addNewLineUnderTask) {
      return (
        tasks
          .filter((task) => task.isToday)
          .map((task) => `・${task.name}\n${task.todayProgress}`)
          .join('\n\n') + '\n'
      )
    } else {
      return tasks
        .filter((task) => task.isToday)
        .map((task) => `・${task.name}\n${task.todayProgress}`)
        .join('\n')
    }
  }
  const getNextTasks = (): string => {
    const filteredTasks = tasks.filter((task) => task.isNext)
    const totalTasks = filteredTasks.length
    return filteredTasks
      .map((task, index) => {
        const isLastTask = index === totalTasks - 1
        const progress = `・${task.name}（${task.nextTarget}/100）`
        if (addNewLineUnderTask && !isLastTask) {
          return task.isBacklog
            ? `${progress}\nhttps://kumukumu.backlog.com/view/${task.project}-${task.backlogNumber}\n\n`
            : `${progress}\n`
        } else {
          return task.isBacklog
            ? `${progress}\nhttps://kumukumu.backlog.com/view/${task.project}-${task.backlogNumber}\n`
            : `${progress}`
        }
      })
      .join('')
  }
  type GreetingMessage =
    | '明日も宜しくお願い致します。'
    | '来週も宜しくお願い致します。'
  const getGreeting = (): GreetingMessage => {
    const today = new Date()
    const dayOfWeek = today.getDay()
    const message: GreetingMessage =
      dayOfWeek === 5 || dayOfWeek === 6
        ? '来週も宜しくお願い致します。'
        : '明日も宜しくお願い致します。'
    return message
  }

  let operatingTimesStr = getOperatingTimes()
  let restTimesStr = isRestTime ? getRestTimes() : ''
  const dateStr = getDateStr()
  let monthTasks = addNewLineUnderTwoTitle
    ? getMonthTasks() + '\n'
    : getMonthTasks()
  let weekTasks = addNewLineUnderTwoTitle
    ? getWeekTasks() + '\n'
    : getWeekTasks()
  let todayProgress = getTodayProgress()
  let todayReport = getTodayReport()
  let nextTasks = getNextTasks()
  const greeting = getGreeting()
  const previewContent = `${toName}

お世話になっております。
本日の業務をご報告申し上げます。

【作業日・業務時間】
${dateStr}
${operatingTimesStr}
${restTimesStr}
【今月の目標】
${monthTasks}
【今週の目標】
${weekTasks}
【本日の業務と進捗】
${todayProgress}
【業務報告】
${todayReport}
【次の稼働日の業務予定】
${nextTasks}
【コメント】
${comment}
以上です、本日もありがとうございました。
${greeting}

${fromName}`

  const [isShowTodayTasks, setIsShowTodayTasks] = useState(false)
  const getTodayTasks = (checked: boolean) => {
    setIsShowTodayTasks(checked)
  }

  const filteredTasks = !isShowTodayTasks
    ? tasks
    : tasks.filter((task) => task.isToday === true)

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="./favicon.ico" />
      </Head>

      <main className={styles.main}>
        {!isLogin && (
          <div>
            <h1 className={styles.title}>{pageTitle}</h1>
            <div className={styles.input}>
              <InputPassword
                labelText="パスワード"
                initValue={loginPass}
                handleChange={(e) => setLoginPass(e.target.value)}
              />
            </div>
            <div className={styles['login-button']}>
              <Button backGroundColor="blue" handleClick={handleLogin}>
                ログイン
              </Button>
            </div>
            <p className={styles['login-message']}>{loginMessage}</p>
          </div>
        )}
        {isLogin && (
          <div className="wrapper">
            <h1 className={styles.title}>{pageTitle}</h1>
            <div className={styles.buttons}>
              <div className={styles['button-groups']}>
                <div className={styles['button-group']}>
                  <label
                    htmlFor="file-upload"
                    className={styles['file-upload']}
                  >
                    データの読み込み
                    <input
                      type="file"
                      onInput={(e) => readData(e)}
                      id="file-upload"
                    />
                  </label>
                  <Button backGroundColor="blue" handleClick={exportData}>
                    データの書き出し
                  </Button>
                </div>
                <div>
                  {isShowPreview ? (
                    <Button backGroundColor="green" handleClick={closePreview}>
                      プレビュー
                    </Button>
                  ) : (
                    <Button backGroundColor="green" handleClick={showPreview}>
                      プレビュー
                    </Button>
                  )}
                  <Button backGroundColor="blue" handleClick={createMail}>
                    メール作成
                  </Button>
                </div>
              </div>
              <div>
                <Checkbox
                  labelText="本日のタスクのみ"
                  initChecked={isShowTodayTasks}
                  handleChange={(e) => getTodayTasks(e.target.checked)}
                />
              </div>
            </div>
            {!isShowPreview && (
              <div className="form">
                <div className={styles.tasks}>
                  {filteredTasks.map((_task, index) => (
                    <div className={styles.task} key={index}>
                      <details>
                        <summary>
                          {!!_task.name && (
                            <>
                              {_task.name}
                              {_task.isBacklog && (
                                <p className={styles['task-link-wrapper']}>
                                  <a
                                    className={styles.link}
                                    rel="noreferrer"
                                    target="_blank"
                                    href={`https://kumukumu.backlog.com/view/${_task.project}-${_task.backlogNumber}`}
                                  >
                                    {`https://kumukumu.backlog.com/view/${_task.project}-${_task.backlogNumber}`}
                                  </a>
                                </p>
                              )}
                            </>
                          )}
                          {!_task.name && <>タスク名が未入力です。</>}
                        </summary>
                        <div className={styles['task-content']}>
                          <span className={styles['task-count']}>
                            {String(_task.name.length)}/256
                          </span>
                          <InputText
                            labelText={`タスク${index + 1}`}
                            maxLength={256}
                            borderColor="blue"
                            initValue={_task.name}
                            handleChange={(e) =>
                              setTaskContent('name', index, e.target.value)
                            }
                          />
                        </div>
                        <Checkbox
                          labelText="Backlogの有無"
                          initChecked={_task.isBacklog}
                          handleChange={(e) =>
                            setTaskContent(
                              'isBacklog',
                              index,
                              '',
                              e.target.checked,
                            )
                          }
                        />
                        <div
                          className={`${styles['task-content']} ${styles['task-project']}`}
                        >
                          <div className={styles['task-project-type']}>
                            <label>プロジェクト</label>
                            <PulldownMenu
                              initValue={_task.project}
                              isDisabled={!_task.isBacklog}
                              options={projects}
                              handleChange={(e) =>
                                setTaskContent('project', index, e.target.value)
                              }
                            />
                          </div>
                          <InputNumber
                            labelText="番号"
                            initValue={_task.backlogNumber}
                            isDisabled={!_task.isBacklog}
                            handleChange={(e) => {
                              setTaskContent(
                                'backlogNumber',
                                index,
                                e.target.value,
                              )
                            }}
                          />
                        </div>
                        <div className={styles['task-content']}>
                          <div className={styles['target-group']}>
                            <div className={styles.target}>
                              <Checkbox
                                labelText="今月"
                                initChecked={_task.isMonth}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'isMonth',
                                    index,
                                    '',
                                    e.target.checked,
                                  )
                                }
                              />
                              <Range
                                initValue={_task.monthTarget}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'monthTarget',
                                    index,
                                    e.target.value,
                                  )
                                }
                              />
                              <span>{_task.monthTarget}/100</span>
                            </div>
                            <div className={styles.target}>
                              <Checkbox
                                labelText="今週"
                                initChecked={_task.isWeek}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'isWeek',
                                    index,
                                    '',
                                    e.target.checked,
                                  )
                                }
                              />
                              <Range
                                initValue={_task.weekTarget}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'weekTarget',
                                    index,
                                    e.target.value,
                                  )
                                }
                              />
                              <span>{_task.weekTarget}/100</span>
                            </div>
                          </div>
                          <div className={styles['target-group']}>
                            <div className={styles.target}>
                              <Checkbox
                                labelText="本日"
                                initChecked={_task.isToday}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'isToday',
                                    index,
                                    '',
                                    e.target.checked,
                                  )
                                }
                              />
                              <Range
                                initValue={_task.todayTarget}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'todayTarget',
                                    index,
                                    e.target.value,
                                  )
                                }
                              />
                              <span>{_task.todayTarget}/100</span>
                            </div>
                            <div className={styles.target}>
                              <Checkbox
                                labelText="予定"
                                initChecked={_task.isNext}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'isNext',
                                    index,
                                    '',
                                    e.target.checked,
                                  )
                                }
                              />
                              <Range
                                initValue={_task.nextTarget}
                                handleChange={(e) =>
                                  setTaskContent(
                                    'nextTarget',
                                    index,
                                    e.target.value,
                                  )
                                }
                              />
                              <span>{_task.nextTarget}/100</span>
                            </div>
                          </div>
                        </div>
                        <div className={styles['task-content']}>
                          <span className={styles['task-count']}>
                            {String(_task.todayProgress.length)}/2000
                          </span>
                          <TextArea
                            labelText="報告"
                            isDisabled={!_task.isToday}
                            maxLength={2000}
                            borderColor="blue"
                            initValue={_task.todayProgress}
                            handleChange={(e) =>
                              setTaskContent(
                                'todayProgress',
                                index,
                                e.target.value,
                              )
                            }
                          />
                        </div>
                        <ButtonIcon
                          disabled={tasks.length <= 1}
                          iconType="delete"
                          handleClick={() => showModalCaution(index)}
                        ></ButtonIcon>
                      </details>
                    </div>
                  ))}
                  <ButtonIcon
                    disabled={tasks.length >= 100}
                    iconType="add"
                    handleClick={addTask}
                  />
                </div>
                <div className={styles.times}>
                  <div className={styles['operating-times']}>
                    {operatingTimes.map((_operatingTime, index) => (
                      <div className={styles['operating-time']} key={index}>
                        <label>稼働時間{index + 1}</label>
                        <div>
                          <InputTime
                            initValue={_operatingTime.startHour}
                            type="hour"
                            handleChange={(e) =>
                              setOperatingTimesContent(
                                'startHour',
                                e.target.value,
                                index,
                              )
                            }
                          />
                          :
                          <InputTime
                            initValue={_operatingTime.startMinute}
                            type="minute"
                            handleChange={(e) =>
                              setOperatingTimesContent(
                                'startMinute',
                                e.target.value,
                                index,
                              )
                            }
                          />
                          〜
                          <InputTime
                            initValue={_operatingTime.endHour}
                            type="hour"
                            handleChange={(e) =>
                              setOperatingTimesContent(
                                'endHour',
                                e.target.value,
                                index,
                              )
                            }
                          />
                          :
                          <InputTime
                            initValue={_operatingTime.endMinute}
                            type="minute"
                            handleChange={(e) =>
                              setOperatingTimesContent(
                                'endMinute',
                                e.target.value,
                                index,
                              )
                            }
                          />
                        </div>
                      </div>
                    ))}
                    <ButtonIcon
                      disabled={operatingTimes.length >= 5}
                      iconType="add"
                      handleClick={addOperatingTime}
                    />
                    <ButtonIcon
                      disabled={operatingTimes.length <= 1}
                      iconType="delete"
                      handleClick={deleteOperatingTime}
                    />
                  </div>
                  <div className={styles['rest-times']}>
                    <Checkbox
                      labelText="追加休憩の有無"
                      initChecked={isRestTime}
                      handleChange={(e) => setIsRestTime(e.target.checked)}
                    />
                    {isRestTime &&
                      restTimes.map((_restTime, index) => (
                        <div className={styles['rest-time']} key={index}>
                          <label>追加休憩{index + 1}</label>
                          <div>
                            <InputTime
                              initValue={_restTime.startHour}
                              type="hour"
                              handleChange={(e) =>
                                setRestTimesContent(
                                  'startHour',
                                  e.target.value,
                                  index,
                                )
                              }
                            />
                            :
                            <InputTime
                              initValue={_restTime.startMinute}
                              type="minute"
                              handleChange={(e) =>
                                setRestTimesContent(
                                  'startMinute',
                                  e.target.value,
                                  index,
                                )
                              }
                            />
                            〜
                            <InputTime
                              initValue={_restTime.endHour}
                              type="hour"
                              handleChange={(e) =>
                                setRestTimesContent(
                                  'endHour',
                                  e.target.value,
                                  index,
                                )
                              }
                            />
                            :
                            <InputTime
                              initValue={_restTime.endMinute}
                              type="minute"
                              handleChange={(e) =>
                                setRestTimesContent(
                                  'endMinute',
                                  e.target.value,
                                  index,
                                )
                              }
                            />
                          </div>
                        </div>
                      ))}
                    {isRestTime && (
                      <>
                        <ButtonIcon
                          disabled={restTimes.length >= 5}
                          iconType="add"
                          handleClick={addRestTime}
                        />
                        <ButtonIcon
                          disabled={restTimes.length <= 1}
                          iconType="delete"
                          handleClick={deleteRestTime}
                        />
                      </>
                    )}
                  </div>
                  <p>
                    ※稼働時間と追加休憩、コメントは、データ読み込み時に保存されません。
                    <br />
                    メール作成の直前に入力してください。
                  </p>
                </div>
                <div className={styles.other}>
                  <TextArea
                    labelText="コメント"
                    borderColor="gray"
                    initValue={comment}
                    handleChange={(e) => setComment(e.target.value)}
                  />
                </div>
                <details>
                  <summary>宛先や名前</summary>
                  <div className="others">
                    <div className={styles.other}>
                      <InputText
                        labelText="宛先"
                        borderColor="gray"
                        initValue={address}
                        handleChange={(e) => setAddress(e.target.value)}
                      />
                    </div>
                    <div className={styles.other}>
                      <InputText
                        labelText="CC"
                        borderColor="gray"
                        initValue={carbonCopy}
                        handleChange={(e) => setCarbonCopy(e.target.value)}
                      />
                    </div>
                    <div className={styles.other}>
                      <InputText
                        labelText="宛先の人の名前"
                        borderColor="gray"
                        initValue={toName}
                        handleChange={(e) => setToName(e.target.value)}
                      />
                    </div>
                    <div className={styles.other}>
                      <InputText
                        labelText="自分の名前"
                        borderColor="gray"
                        initValue={fromName}
                        handleChange={(e) => setFromName(e.target.value)}
                      />
                    </div>
                  </div>
                </details>
                <details>
                  <summary>改行の設定</summary>
                  <div>
                    <div>
                      <Checkbox
                        labelText="今月の目標と今週の目標の下に改行を追加"
                        initChecked={addNewLineUnderTwoTitle}
                        handleChange={(e) =>
                          getAddNewLineUnderTwoTitle(e.target.checked)
                        }
                      />
                    </div>
                    <div>
                      <Checkbox
                        labelText="タスクの下に改行を追加"
                        initChecked={addNewLineUnderTask}
                        handleChange={(e) =>
                          getAddNewLineUnderTask(e.target.checked)
                        }
                      />
                    </div>
                  </div>
                </details>
              </div>
            )}
            {isShowPreview && (
              <div className="preview">
                <h3 className={styles['preview-title']}>
                  プレビュー（フォームは読み取り専用です）
                </h3>
                <div className={styles['preview-address']}>
                  <label>
                    宛先
                    <input type="text" value={address} readOnly />
                  </label>
                </div>
                <div className={styles['preview-cc']}>
                  <label>
                    CC
                    <input type="text" value={carbonCopy} readOnly />
                  </label>
                </div>
                <div>
                  <label>
                    本文（メール作成ボタンをクリックすると、クリップボードにコピーされます）
                    <textarea
                      value={previewContent}
                      readOnly
                      className={styles['preview-content']}
                    ></textarea>
                  </label>
                </div>
              </div>
            )}
          </div>
        )}
        {isShowModal && (
          <Modal isShow={isShowModal} handleClick={toggleIsShowModal}>
            {errorMessages}
          </Modal>
        )}
        {isShowModalCaution && (
          <ModalCaution
            isShow={isShowModalCaution}
            okHandleClick={deleteTask}
            cancelHandleClick={toggleIsShowModalCaution}
          >
            {`タスク${String(
              Number(selectedTaskIndex) + 1,
            )}を削除しますか。\n削除したタスクは復元できません。`}
          </ModalCaution>
        )}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/khosokawa0716/report-creation#readme"
          rel="noreferrer"
          target="_blank"
          className={styles.link}
        >
          README!
        </a>
        <a href="./branch-name" className={styles.link}>
          ブランチ名作成ツール
        </a>
      </footer>
    </div>
  )
}

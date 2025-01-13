import React, { useEffect } from 'react'
import modalStyles from '@styles/components/common/Modal.module.scss'
import Button from './Button'

interface ModalProps {
  isShow: boolean
  okHandleClick: (event: any) => void
  cancelHandleClick: (event: any) => void
  children: string
}
export default function Modal({
  isShow,
  okHandleClick,
  cancelHandleClick,
  children,
}: ModalProps) {
  const stopScrollingBackContent = () => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }

  useEffect(stopScrollingBackContent, [])
  return (
    <div
      className={`${modalStyles.modal} ${isShow ? modalStyles['is-show'] : ''}`}
    >
      <div
        className={modalStyles.overlay}
        onClick={(e) => cancelHandleClick(e)}
      ></div>
      <div className={modalStyles.content}>
        <h3>タスクの削除</h3>
        <p>{children}</p>
        <div className={modalStyles.footer}>
          <Button
            backGroundColor="gray"
            handleClick={(e) => cancelHandleClick(e)}
          >
            キャンセル
          </Button>
          <Button backGroundColor="blue" handleClick={(e) => okHandleClick(e)}>
            OK
          </Button>
        </div>
      </div>
    </div>
  )
}

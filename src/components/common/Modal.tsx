import React, { useEffect } from 'react'
import modalStyles from '@styles/components/common/Modal.module.scss'
import Button from './Button'

interface ModalProps {
  isShow: boolean
  handleClick: (event: any) => void
  children: Array<string>
}
export default function Modal({ isShow, handleClick, children }: ModalProps) {
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
        onClick={(e) => handleClick(e)}
      ></div>
      <div className={modalStyles.content}>
        <h3>入力に不備があります。</h3>
        <ul>
          {children.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div className={modalStyles.footer}>
          <Button backGroundColor="gray" handleClick={(e) => handleClick(e)}>
            閉じる
          </Button>
        </div>
      </div>
    </div>
  )
}

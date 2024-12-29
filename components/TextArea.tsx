import React, { useEffect, useRef } from 'react'
import textAreaStyles from '../styles/TextArea.module.scss'

interface InputProps {
  borderColor: 'blue' | 'gray'
  labelText: string
  isDisabled?: boolean
  maxLength?: number
  initValue: string
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  height?: string
  onHeightChange?: (height: string) => void
  enableHeightChange?: boolean
}

export default function TextArea({
  borderColor,
  labelText,
  isDisabled = false,
  maxLength = 5000,
  initValue,
  handleChange,
  height = 'auto',
  onHeightChange,
  enableHeightChange = true,
}: InputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const initialRender = useRef(true)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }
    if (!enableHeightChange) {
      return
    }
    const textArea = textAreaRef.current
    if (textArea) {
      const handleResize = () => {
        const newHeight = `${textArea.scrollHeight}px`
        if (onHeightChange && newHeight !== height) {
          onHeightChange(newHeight)
        }
      }
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.attributeName === 'style') {
            handleResize()
          }
        }
      })
      observer.observe(textArea, {
        attributes: true,
        attributeFilter: ['style'],
      })
      return () => {
        observer.disconnect()
      }
    }
  }, [onHeightChange, enableHeightChange, height])

  return (
    <label
      className={`${textAreaStyles['com-textarea']}  ${
        borderColor === 'blue' ? textAreaStyles.blue : textAreaStyles.gray
      }`}
    >
      {labelText}
      <textarea
        ref={textAreaRef}
        value={initValue}
        disabled={isDisabled}
        minLength={0}
        maxLength={maxLength}
        onChange={(e) => {
          handleChange(e)
        }}
        style={{ height }}
      />
    </label>
  )
}

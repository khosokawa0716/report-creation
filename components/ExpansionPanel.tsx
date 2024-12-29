import React from 'react'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import expansionPanelStyles from '../styles/ExpansionPanel.module.scss'
interface ExpansionPanelProps {
  children: React.ReactNode
  titleChildren: React.ReactNode
  isExpanded: boolean
  onClick: () => void
}
export default function ExpansionPanel({
  children,
  titleChildren,
  isExpanded,
  onClick,
}: ExpansionPanelProps) {
  // aタグがクリックされた場合はonClickを実行しない
  const handleClick = (event: React.MouseEvent) => {
    if ((event.target as HTMLElement).tagName.toLowerCase() === 'a') {
      return
    }
    onClick()
  }

  return (
    <div
      className={`${expansionPanelStyles['com-expansion-panel']} ${
        isExpanded ? expansionPanelStyles.expanded : ''
      }`}
    >
      <div
        className={expansionPanelStyles['expansion-panel-header']}
        onClick={handleClick}
      >
        {titleChildren}
        <div className={expansionPanelStyles['expansion-panel-header-icon']}>
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      </div>
      <div className={expansionPanelStyles['expansion-panel-content']}>
        {children}
      </div>
    </div>
  )
}

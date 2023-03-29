import Head from 'next/head'
import Checkbox from '../components/Checkbox'
import PulldownMenu from '../components/PulldownMenu'
import InputNumber from '../components/InputNumber'
import InputPassword from '../components/InputPassword'
import Button from '../components/Button'
import commonStyles from '../styles/Home.module.scss'
import styles from '../styles/BranchName.module.scss'

import React, { useState, useEffect } from 'react'

export default function BranchName() {
  const pageTitle = 'ブランチ名作成ツール'
  const [isLogin, setIsLogin] = useState(false)
  const [loginPass, setLoginPass] = useState('')
  const [loginMessage, setLoginMessage] = useState('')
  const strageKey = 'branch-name-password'
  const password = 'branch'
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
  const handleClickListItem = (str: string) => {
    navigator.clipboard.writeText(str).then(
      () => {
        console.log('クリップボードに以下のテキストをコピーしました。: ' + str)
      },
      () => {
        console.log('クリップボードのコピーに失敗しました。')
      },
    )
  }
  useEffect(() => {
    const inputedPassword = localStorage.getItem(strageKey)
    if (inputedPassword === password) setIsLogin(true)
  }, [])

  const [hasParent, setHasParent] = useState(true)
  const branchType1 = [
    {
      label: 'feature',
      value: 'feature',
    },
    {
      label: 'bugfix',
      value: 'bugfix',
    },
    {
      label: 'hotfix',
      value: 'hotfix',
    },
  ]
  const [branchType1Text, setBranchType1Text] = useState(branchType1[0].value)
  const branchType2 = [
    {
      label: 'F2023',
      value: 'F2023',
    },
    {
      label: 'MKPL',
      value: 'MKPL',
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
  const [branchType2Text, setBranchType2Text] = useState(branchType2[0].value)
  const urlPartofProject = () => {
    switch (branchType2Text) {
      case 'F2023':
        return 'FUTURE_DEVELOP_GOALS_2023'
      case 'MKPL':
        return 'MKPL_MAINTE_DEV'
      default:
        return branchType2Text
    }
  }

  const [parentBacklogNumber, setParentBacklogNumber] = useState('100')
  const [childBacklogNumber, setChildBacklogNumber] = useState('10000')
  const parentLabelText = hasParent
    ? '親課題のBackLogの番号:'
    : 'BackLogの番号:'
  const parentBacklogUrl = `https://kumukumu.backlog.com/view/${urlPartofProject()}-${parentBacklogNumber}`
  const childBacklogUrl = `https://kumukumu.backlog.com/view/${urlPartofProject()}-${childBacklogNumber}`
  const parentBranchName = `${branchType2Text}-${parentBacklogNumber}`
  const childBranchName = `${branchType2Text}-${childBacklogNumber}`
  const focusBranchName = hasParent ? childBranchName : parentBranchName
  const branchNameWithHtml = hasParent
    ? `${branchType1Text}/<span style='color: red;'>#</span>${parentBranchName}/${childBranchName}`
    : `${branchType1Text}/${parentBranchName}`
  const branchName = hasParent
    ? `${branchType1Text}/#${parentBranchName}/${childBranchName}`
    : `${branchType1Text}/${parentBranchName}`
  const copyIcon = "<i class='fas fa-copy'></i>"
  return (
    <div className={commonStyles.container}>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className={styles.main}>
        {!isLogin && (
          <div>
            <h1>{pageTitle}</h1>
            <div className={commonStyles.input}>
              <InputPassword
                labelText="パスワード"
                initValue={loginPass}
                handleChange={(e) => setLoginPass(e.target.value)}
              />
            </div>
            <div className={commonStyles['login-button']}>
              <Button backGroundColor="blue" handleClick={handleLogin}>
                ログイン
              </Button>
            </div>
            <p className={commonStyles['login-message']}>{loginMessage}</p>
          </div>
        )}
        {isLogin && (
          <div>
            <h1>{pageTitle}</h1>
            <fieldset>
              <legend>Backlog</legend>
              <div className={styles['backlog-item']}>
                <Checkbox
                  labelText="親課題あり"
                  initChecked={hasParent}
                  handleChange={(e) => setHasParent(e.target.checked)}
                />
              </div>
              <div className={styles['backlog-item']}>
                <label className={styles['backlog-item-label']}>
                  ブランチの種類1:{' '}
                </label>
                <PulldownMenu
                  initValue={branchType1Text}
                  isDisabled={false}
                  options={branchType1}
                  handleChange={(e) => setBranchType1Text(e.target.value)}
                />
              </div>
              <div className={styles['backlog-item']}>
                <label className={styles['backlog-item-label']}>
                  ブランチの種類2:{' '}
                </label>
                <PulldownMenu
                  initValue={branchType2Text}
                  isDisabled={false}
                  options={branchType2}
                  handleChange={(e) => setBranchType2Text(e.target.value)}
                />
              </div>
              <div>
                <div className={styles['backlog-item']}>
                  <InputNumber
                    labelText={parentLabelText}
                    initValue={parentBacklogNumber}
                    isDisabled={false}
                    handleChange={(e) => {
                      setParentBacklogNumber(e.target.value)
                    }}
                  />
                  <a
                    className={styles['backlog-link']}
                    href={parentBacklogUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {parentBacklogUrl}
                  </a>
                </div>
                {hasParent && (
                  <>
                    <div className={styles['backlog-item']}>
                      <InputNumber
                        labelText="子課題のBackLogの番号:"
                        initValue={childBacklogNumber}
                        isDisabled={false}
                        handleChange={(e) => {
                          setChildBacklogNumber(e.target.value)
                        }}
                      />
                      <a
                        className={styles['backlog-link']}
                        href={childBacklogUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {childBacklogUrl}
                      </a>
                    </div>
                    {Number(childBacklogNumber) <=
                      Number(parentBacklogNumber) && (
                      <p className={styles['text-red']}>
                        子課題のBackLogの番号は、通常親課題のBackLogの番号よりも大きくなります。
                      </p>
                    )}
                  </>
                )}
              </div>
            </fieldset>
            <div>
              <h3>git, ブランチ関連</h3>
              <ul className={styles['list']}>
                <li onClick={() => handleClickListItem(focusBranchName)}>
                  {focusBranchName}
                  <i className="fas fa-copy"></i>
                </li>
                <li
                  dangerouslySetInnerHTML={{
                    __html: branchNameWithHtml + copyIcon,
                  }}
                  onClick={() => handleClickListItem(branchName)}
                ></li>
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "git <span style='color: red;'>checkout</span> -b " +
                      branchNameWithHtml +
                      copyIcon,
                  }}
                  onClick={() =>
                    handleClickListItem(`git checkout -b ${branchName}`)
                  }
                ></li>
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "git <span style='color: red;'>pull</span> origin " +
                      branchNameWithHtml +
                      copyIcon,
                  }}
                  onClick={() =>
                    handleClickListItem(`git pull origin ${branchName}`)
                  }
                ></li>
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "git <span style='color: red;'>push</span> --set-upstream origin " +
                      branchNameWithHtml +
                      copyIcon,
                  }}
                  onClick={() =>
                    handleClickListItem(
                      `git push --set-upstream origin ${branchName}`,
                    )
                  }
                ></li>
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      'git commit -m "' + focusBranchName + ' hoge"' + copyIcon,
                  }}
                  onClick={() =>
                    handleClickListItem(
                      `git commit -m "${focusBranchName} hoge"`,
                    )
                  }
                ></li>
                <li
                  dangerouslySetInnerHTML={{
                    __html:
                      "git <span style='color: red;'>checkout</span> -b " +
                      branchNameWithHtml + " origin/" + branchNameWithHtml + 
                      copyIcon,
                  }}
                  onClick={() =>
                    handleClickListItem(`git checkout -b ${branchName} origin/${branchName}`)
                  }
                ></li>
                <li
                  onClick={() => handleClickListItem('git pull origin master')}
                >
                  <span>
                    git pull origin{' '}
                    <span className={styles['text-red']}>master</span>
                  </span>
                  <i className="fas fa-copy"></i>
                </li>
                <li onClick={() => handleClickListItem('git stash -u')}>
                  <span>git stash -u</span>
                  <i className="fas fa-copy"></i>
                </li>
                <li
                  onClick={() =>
                    handleClickListItem('git stash apply stash@{0}')
                  }
                >
                  <span>git stash apply stash@{0}</span>
                  <i className="fas fa-copy"></i>
                </li>
              </ul>
              <h3>その他</h3>
              <ul className={styles['list']}>
                <li onClick={() => handleClickListItem('npm run compile:sass')}>
                  <span>
                    npm run compile
                    <span className={styles['text-red']}>:sass</span>
                  </span>
                  <i className="fas fa-copy"></i>
                </li>
                <li
                  onClick={() =>
                    handleClickListItem('npm run compile:baseSass')
                  }
                >
                  <span>
                    npm run compile
                    <span className={styles['text-red']}>:baseSass</span>
                  </span>
                  <i className="fas fa-copy"></i>
                </li>
                <li
                  onClick={() =>
                    handleClickListItem(
                      'psql -U postgres -d postgres -h localhost -d kumu2',
                    )
                  }
                >
                  <span>
                    psql -U postgres -d postgres -h localhost -d kumu2
                  </span>
                  <i className="fas fa-copy"></i>
                </li>
              </ul>
            </div>
          </div>
        )}
      </main>
      <footer className={commonStyles.footer}>
        <a href="./" className={commonStyles['footer-link']}>
          日報作成ツール
        </a>
      </footer>
    </div>
  )
}

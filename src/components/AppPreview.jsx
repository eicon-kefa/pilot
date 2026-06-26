import { useEffect } from 'react'
import { useLang } from '../context/LangContext'
import styles from './AppPreview.module.css'

export default function AppPreview({ project, onClose }) {
  const { lang } = useLang()

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay}>
      {/* 상단 툴바 */}
      <div className={styles.toolbar}>
        <div className={styles.toolbarLeft}>
          <span className={styles.teamName}>{project.teamName}</span>
          <span className={styles.divider}>·</span>
          <span className={styles.appTitle}>{project.projectTitle}</span>
        </div>
        <div className={styles.toolbarRight}>
          <a
            href={project.htmlPath}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.newTabBtn}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M5.5 2.5H2.5a1 1 0 00-1 1v8a1 1 0 001 1h8a1 1 0 001-1V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M8 1.5h4.5v4.5M12.5 1.5L7 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {lang === 'ko' ? '새 탭에서 열기' : 'Open in new tab'}
          </a>
          <button className={styles.closeBtn} onClick={onClose}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            {lang === 'ko' ? '닫기' : 'Close'}
          </button>
        </div>
      </div>

      {/* iframe */}
      <iframe
        src={project.htmlPath}
        title={project.projectTitle}
        className={styles.frame}
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
      />
    </div>
  )
}

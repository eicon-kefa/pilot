import { useLang } from '../context/LangContext'
import { translations, getThemeName } from '../i18n/translations'
import { projects } from '../data/projects'
import styles from './Hero.module.css'

const THEME_COLORS = {
  'Mental Health':      '#8b5cf6',
  'Fitness':            '#34d399',
  'Nutrition':          '#fb923c',
  'Elderly Care':       '#3b82f6',
  'Disability':         '#ec4899',
  'Maternal Health':    '#f59e0b',
  'Disease Prevention': '#10b981',
  'Other':              '#6b7280',
}

export default function Hero({ totalProjects }) {
  const { lang } = useLang()
  const tx = translations[lang].hero

  const eiconUrl = lang === 'ko'
    ? 'https://e-icon.or.kr/ko/'
    : 'https://e-icon.or.kr/en/'

  // 목업 카드에 표시할 프로젝트 (최대 6개)
  const mockupProjects = projects.slice(0, 6)

  return (
    <section className={styles.hero} id="about">
      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            {tx.badge}
          </div>

          <h1 className={`display-xl ${styles.headline}`}>
            {tx.headline}
          </h1>
          <p className={`display-lg ${styles.sub}`}>
            {tx.sub}
          </p>

          <p className={styles.body}>
            {tx.body(totalProjects)}
          </p>

          <div className={styles.actions}>
            <a href="#projects" className="btn-primary">
              {tx.exploreBtn}
            </a>
            <a
              href={eiconUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {tx.learnBtn}
            </a>
          </div>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statValue}>{totalProjects}</span>
              <span className={styles.statLabel}>{tx.stats.projects}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>SDG 3</span>
              <span className={styles.statLabel}>{tx.stats.focus}</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.stat}>
              <span className={styles.statValue}>Global</span>
              <span className={styles.statLabel}>{tx.stats.participants}</span>
            </div>
          </div>
        </div>

        {/* 목업 카드 */}
        <div className={styles.mockup}>
          <div className={styles.mockupCard}>
            <div className={styles.mockupHeader}>
              <div className={styles.mockupDots}>
                <span /><span /><span />
              </div>
              <div className={styles.mockupUrl}>pilot.e-icon.or.kr</div>
            </div>
            <div className={styles.mockupBody}>
              <div className={styles.mockupTag}>SDG 3</div>
              <div className={styles.mockupTitle}>{tx.mockupTitle}</div>
              <div className={styles.mockupGrid}>
                {mockupProjects.map((p) => {
                  const color = THEME_COLORS[p.theme] || THEME_COLORS['Other']
                  const themeName = getThemeName(p.theme, lang)
                  return (
                    <div key={p.id} className={styles.mockupItem}>
                      {/* 썸네일 영역 — 이미지 있으면 표시, 없으면 테마 색 타일 */}
                      <div
                        className={styles.mockupThumb}
                        style={{
                          background: p.thumbnail
                            ? `url(${p.thumbnail}) center/cover`
                            : `linear-gradient(135deg, ${color}22 0%, ${color}44 100%)`,
                          borderBottom: `2px solid ${color}55`,
                        }}
                      >
                        {!p.thumbnail && (
                          <div className={styles.mockupThumbInner}>
                            <span
                              className={styles.mockupThumbDot}
                              style={{ background: color }}
                            />
                            <span className={styles.mockupThumbLabel}>
                              {themeName}
                            </span>
                          </div>
                        )}
                      </div>
                      <div className={styles.mockupLine} />
                      <div className={styles.mockupLineShort} />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

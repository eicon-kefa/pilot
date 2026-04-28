import { useLang } from '../context/LangContext'
import { translations } from '../i18n/translations'
import ProjectCard from './ProjectCard'
import styles from './ProjectGallery.module.css'

export default function ProjectGallery({ projects, onSelect }) {
  const { lang } = useLang()
  const tx = translations[lang].gallery

  if (projects.length === 0) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>{tx.emptyTitle}</p>
        <p className={styles.emptyBody}>{tx.emptyBody}</p>
      </div>
    )
  }

  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} onClick={onSelect} />
      ))}
    </div>
  )
}

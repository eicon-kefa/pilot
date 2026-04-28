import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext(null)

export function LangProvider({ children }) {
  const [lang, setLang] = useState('ko')   // 'ko' | 'en'

  // html[lang] 속성을 동기화 → CSS word-break: keep-all 적용 기준
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

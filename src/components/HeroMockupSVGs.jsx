/**
 * 히어로 섹션 목업 카드용 미니 앱 UI SVG 일러스트
 * 각 프로젝트 테마에 맞는 실제 앱 화면처럼 보이도록 디자인
 */

/* ── 1. 질병 예방 — 지도 + 의료 시설 핀 ─────────────────────────────── */
export function SVGDiseasePreventionMap({ color = '#10b981' }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      {/* 배경 */}
      <rect width="120" height="90" fill="#f0fdf8" />
      {/* 지도 격자 */}
      {[15,30,45,60,75].map(y => <line key={y} x1="0" y1={y} x2="120" y2={y} stroke={color} strokeWidth="0.4" opacity="0.2" />)}
      {[20,40,60,80,100].map(x => <line key={x} x1={x} y1="0" x2={x} y2="90" stroke={color} strokeWidth="0.4" opacity="0.2" />)}
      {/* 도로 */}
      <path d="M0 45 Q30 38 60 45 Q90 52 120 42" stroke={color} strokeWidth="2.5" opacity="0.25" fill="none" />
      <path d="M0 62 Q40 58 80 62 Q100 64 120 60" stroke={color} strokeWidth="1.5" opacity="0.15" fill="none" />
      <path d="M48 0 Q50 30 47 90" stroke={color} strokeWidth="2" opacity="0.2" fill="none" />
      <path d="M85 0 Q88 40 84 90" stroke={color} strokeWidth="1.5" opacity="0.15" fill="none" />
      {/* 블록 */}
      <rect x="6" y="18" width="18" height="14" rx="2" fill={color} opacity="0.08" />
      <rect x="62" y="50" width="16" height="10" rx="2" fill={color} opacity="0.08" />
      <rect x="90" y="20" width="22" height="16" rx="2" fill={color} opacity="0.08" />
      {/* 위치 핀 1 (주요) */}
      <circle cx="50" cy="30" r="8" fill={color} />
      <text x="50" y="33" textAnchor="middle" fontSize="9" fill="white" fontWeight="bold">+</text>
      <path d="M50 38 L50 48" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <circle cx="50" cy="50" r="2" fill={color} opacity="0.4" />
      {/* 위치 핀 2 */}
      <circle cx="88" cy="42" r="6" fill={color} opacity="0.7" />
      <text x="88" y="45" textAnchor="middle" fontSize="8" fill="white" fontWeight="bold">+</text>
      <path d="M88 48 L88 55" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      <circle cx="88" cy="56" r="1.5" fill={color} opacity="0.3" />
      {/* 위치 핀 3 */}
      <circle cx="22" cy="55" r="5" fill={color} opacity="0.5" />
      <text x="22" y="57.5" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">+</text>
      {/* 하단 카드 */}
      <rect x="6" y="68" width="108" height="18" rx="4" fill="white" opacity="0.95" />
      <circle cx="18" cy="77" r="5" fill={color} opacity="0.15" />
      <text x="18" y="79.5" textAnchor="middle" fontSize="7" fill={color}>📍</text>
      <rect x="28" y="73" width="36" height="3" rx="1.5" fill={color} opacity="0.7" />
      <rect x="28" y="79" width="50" height="2.5" rx="1.2" fill="#e5e7eb" />
      <rect x="95" y="73" width="14" height="8" rx="2" fill={color} />
      <text x="102" y="79" textAnchor="middle" fontSize="5.5" fill="white" fontWeight="bold">길찾기</text>
    </svg>
  )
}

/* ── 2. 정신 건강 — 감정 트래커 + 차트 ──────────────────────────────── */
export function SVGMentalHealthTracker({ color = '#8b5cf6' }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="120" height="90" fill="#faf5ff" />
      {/* 헤더 */}
      <rect width="120" height="20" fill={color} />
      <circle cx="14" cy="10" r="5" fill="white" opacity="0.2" />
      <rect x="24" y="7.5" width="40" height="3" rx="1.5" fill="white" opacity="0.6" />
      <rect x="24" y="13" width="25" height="2" rx="1" fill="white" opacity="0.3" />
      <rect x="100" y="7" width="14" height="7" rx="2" fill="white" opacity="0.2" />
      {/* 오늘의 기분 라벨 */}
      <rect x="8" y="25" width="50" height="3" rx="1.5" fill={color} opacity="0.4" />
      {/* 이모지 감정 선택 행 */}
      {[
        { x: 14, emoji: '😔', selected: false },
        { x: 34, emoji: '😐', selected: false },
        { x: 54, emoji: '🙂', selected: true  },
        { x: 74, emoji: '😄', selected: false },
        { x: 94, emoji: '🥰', selected: false },
      ].map(({ x, emoji, selected }) => (
        <g key={x}>
          {selected && <circle cx={x + 6} cy="42" r="9" fill={color} opacity="0.15" stroke={color} strokeWidth="1" />}
          <text x={x + 6} y="46" textAnchor="middle" fontSize="10">{emoji}</text>
        </g>
      ))}
      {/* 주간 차트 영역 */}
      <rect x="8" y="56" width="104" height="28" rx="4" fill="white" opacity="0.9" />
      <rect x="12" y="59" width="28" height="2.5" rx="1.2" fill={color} opacity="0.5" />
      {/* 꺾은선 그래프 */}
      {[
        {x:16,y:78},{x:30,y:72},{x:44,y:74},{x:58,y:66},{x:72,y:68},{x:86,y:63},{x:100,y:65}
      ].map((p, i, arr) => i < arr.length - 1
        ? <line key={i} x1={p.x} y1={p.y} x2={arr[i+1].x} y2={arr[i+1].y} stroke={color} strokeWidth="1.8" strokeLinecap="round" />
        : null
      )}
      {[
        {x:16,y:78},{x:30,y:72},{x:44,y:74},{x:58,y:66},{x:72,y:68},{x:86,y:63},{x:100,y:65}
      ].map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={i === 5 ? 3 : 1.5} fill={color} opacity={i === 5 ? 1 : 0.5} />
      ))}
    </svg>
  )
}

/* ── 3. 영양 — 식판 + 영양소 바 ─────────────────────────────────────── */
export function SVGNutritionTracker({ color = '#fb923c' }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="120" height="90" fill="#fff7ed" />
      {/* 헤더 */}
      <rect width="120" height="18" fill={color} />
      <text x="8" y="12" fontSize="8" fill="white" fontWeight="bold" opacity="0.9">NutriKids</text>
      <rect x="90" y="6" width="22" height="7" rx="2" fill="white" opacity="0.2" />
      <text x="101" y="11.5" textAnchor="middle" fontSize="5.5" fill="white">+ 기록</text>
      {/* 도넛 차트 */}
      <circle cx="38" cy="50" r="22" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />
      {/* 도넛 세그먼트 */}
      <circle cx="38" cy="50" r="16" fill="none" stroke="#f3f4f6" strokeWidth="12" />
      <circle cx="38" cy="50" r="16" fill="none" stroke={color} strokeWidth="12"
        strokeDasharray="28 72" strokeDashoffset="25" strokeLinecap="round" />
      <circle cx="38" cy="50" r="16" fill="none" stroke="#34d399" strokeWidth="12"
        strokeDasharray="22 78" strokeDashoffset="-3" strokeLinecap="round" />
      <circle cx="38" cy="50" r="16" fill="none" stroke="#8b5cf6" strokeWidth="12"
        strokeDasharray="18 82" strokeDashoffset="-25" strokeLinecap="round" />
      <circle cx="38" cy="50" r="8" fill="white" />
      <text x="38" y="48" textAnchor="middle" fontSize="7" fill="#374151" fontWeight="bold">68%</text>
      <text x="38" y="56" textAnchor="middle" fontSize="5" fill="#6b7280">달성</text>
      {/* 영양소 바 목록 */}
      {[
        { label: '탄수화물', val: 72, color: color,     y: 26 },
        { label: '단백질',   val: 55, color: '#34d399', y: 34 },
        { label: '지방',     val: 40, color: '#8b5cf6', y: 42 },
      ].map(({ label, val, color: c, y }) => (
        <g key={label}>
          <text x="68" y={y + 3} fontSize="5.5" fill="#6b7280">{label}</text>
          <rect x="68" y={y + 5} width="44" height="4" rx="2" fill="#f3f4f6" />
          <rect x="68" y={y + 5} width={44 * val / 100} height="4" rx="2" fill={c} opacity="0.8" />
          <text x="115" y={y + 9} textAnchor="end" fontSize="5" fill="#374151">{val}%</text>
        </g>
      ))}
      {/* 하단 */}
      <rect x="6" y="70" width="108" height="16" rx="4" fill="white" opacity="0.9" />
      <text x="14" y="80" fontSize="6" fill="#6b7280">오늘 식사 3회 기록 완료</text>
      <circle cx="106" cy="78" r="5" fill={color} opacity="0.8" />
      <text x="106" y="80.5" textAnchor="middle" fontSize="7" fill="white">✓</text>
    </svg>
  )
}

/* ── 4. 노인 돌봄 — 건강 대시보드 ───────────────────────────────────── */
export function SVGElderCare({ color = '#3b82f6' }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="120" height="90" fill="#eff6ff" />
      {/* 헤더 */}
      <rect width="120" height="18" fill={color} />
      <text x="8" y="12" fontSize="8" fill="white" fontWeight="bold" opacity="0.9">ElderCare360</text>
      <circle cx="108" cy="9" r="5" fill="white" opacity="0.2" />
      <text x="108" y="11.5" textAnchor="middle" fontSize="7" fill="white">🔔</text>
      {/* 심박수 카드 */}
      <rect x="6" y="22" width="50" height="26" rx="4" fill="white" />
      <text x="12" y="31" fontSize="5.5" fill="#6b7280">심박수</text>
      <text x="12" y="41" fontSize="14" fill={color} fontWeight="bold">72</text>
      <text x="34" y="41" fontSize="5.5" fill="#6b7280">bpm</text>
      {/* 심박 선 */}
      <polyline points="10,44 16,44 19,38 22,50 25,44 28,44 31,40 34,48 37,44 50,44"
        stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* 걸음수 카드 */}
      <rect x="64" y="22" width="50" height="26" rx="4" fill="white" />
      <text x="70" y="31" fontSize="5.5" fill="#6b7280">오늘 걸음수</text>
      <text x="70" y="41" fontSize="14" fill="#10b981" fontWeight="bold">4,821</text>
      <text x="70" y="47" fontSize="5" fill="#6b7280">목표 6,000보</text>
      <rect x="70" y="43" width="36" height="3" rx="1.5" fill="#f3f4f6" />
      <rect x="70" y="43" width="29" height="3" rx="1.5" fill="#10b981" opacity="0.7" />
      {/* 알림 카드 */}
      <rect x="6" y="52" width="108" height="14" rx="4" fill="#fef9c3" />
      <text x="12" y="61" fontSize="6" fill="#854d0e">⚠ 심박수가 평소보다 높습니다. 확인해주세요.</text>
      {/* 복약 카드 */}
      <rect x="6" y="70" width="108" height="16" rx="4" fill="white" />
      <text x="12" y="79" fontSize="6" fill="#374151">💊 오후 복약 알림 — 오후 2:00</text>
      <rect x="98" y="73" width="12" height="7" rx="2" fill={color} />
      <text x="104" y="78.5" textAnchor="middle" fontSize="5" fill="white">확인</text>
    </svg>
  )
}

/* ── 5. 체력/운동 — 운동 계획 + 진행 링 ─────────────────────────────── */
export function SVGFitness({ color = '#34d399' }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="120" height="90" fill="#f0fdf4" />
      {/* 헤더 */}
      <rect width="120" height="18" fill={color} />
      <text x="8" y="12" fontSize="8" fill="white" fontWeight="bold" opacity="0.9">FitPath</text>
      <rect x="88" y="6" width="26" height="7" rx="2" fill="white" opacity="0.2" />
      <text x="101" y="11.5" textAnchor="middle" fontSize="5" fill="white">맞춤 운동</text>
      {/* 진행 링 */}
      <circle cx="36" cy="50" r="22" fill="white" stroke="#e5e7eb" strokeWidth="0.5" />
      <circle cx="36" cy="50" r="16" fill="none" stroke="#e5e7eb" strokeWidth="8" />
      <circle cx="36" cy="50" r="16" fill="none" stroke={color} strokeWidth="8"
        strokeDasharray="65 35" strokeDashoffset="25" strokeLinecap="round" />
      <circle cx="36" cy="50" r="8" fill="white" />
      <text x="36" y="48" textAnchor="middle" fontSize="9" fill="#111111" fontWeight="bold">65%</text>
      <text x="36" y="56" textAnchor="middle" fontSize="5" fill="#6b7280">완료</text>
      {/* 운동 목록 */}
      {[
        { label: '스트레칭',   done: true,  y: 24 },
        { label: '상체 운동',  done: true,  y: 36 },
        { label: '유산소 10분', done: false, y: 48 },
        { label: '코어 운동',  done: false, y: 60 },
      ].map(({ label, done, y }) => (
        <g key={label}>
          <circle cx="72" cy={y} r="5" fill={done ? color : '#f3f4f6'} />
          <text x="72" y={y + 2} textAnchor="middle" fontSize="6" fill={done ? 'white' : '#9ca3af'}>{done ? '✓' : '○'}</text>
          <text x="82" y={y + 2.5} fontSize="6" fill={done ? '#374151' : '#9ca3af'}
            textDecoration={done ? 'line-through' : 'none'}
            style={{ textDecoration: done ? 'line-through' : 'none' }}>
            {label}
          </text>
        </g>
      ))}
      {/* 하단 버튼 */}
      <rect x="6" y="72" width="108" height="14" rx="4" fill={color} />
      <text x="60" y="81" textAnchor="middle" fontSize="7" fill="white" fontWeight="bold">다음 운동 시작하기 →</text>
    </svg>
  )
}

/* ── 기본 — 알 수 없는 테마 ────────────────────────────────────────── */
export function SVGDefault({ color = '#6b7280' }) {
  return (
    <svg viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
      <rect width="120" height="90" fill="#f9fafb" />
      <rect width="120" height="18" fill={color} />
      <rect x="6" y="24" width="108" height="20" rx="4" fill="white" />
      <rect x="12" y="30" width="60" height="4" rx="2" fill={color} opacity="0.4" />
      <rect x="12" y="37" width="40" height="3" rx="1.5" fill="#e5e7eb" />
      <rect x="6" y="50" width="50" height="32" rx="4" fill="white" />
      <rect x="62" y="50" width="56" height="32" rx="4" fill="white" />
      <rect x="12" y="58" width="36" height="4" rx="2" fill={color} opacity="0.3" />
      <rect x="12" y="65" width="25" height="3" rx="1.5" fill="#e5e7eb" />
      <rect x="68" y="58" width="42" height="4" rx="2" fill={color} opacity="0.3" />
      <rect x="68" y="65" width="30" height="3" rx="1.5" fill="#e5e7eb" />
    </svg>
  )
}

/* ── 테마 → SVG 컴포넌트 매핑 ─────────────────────────────────────── */
export const THEME_SVG_MAP = {
  'Disease Prevention': SVGDiseasePreventionMap,
  'Mental Health':      SVGMentalHealthTracker,
  'Nutrition':          SVGNutritionTracker,
  'Elderly Care':       SVGElderCare,
  'Fitness':            SVGFitness,
}

export const THEME_COLORS = {
  'Disease Prevention': '#10b981',
  'Mental Health':      '#8b5cf6',
  'Nutrition':          '#fb923c',
  'Elderly Care':       '#3b82f6',
  'Fitness':            '#34d399',
  'Maternal Health':    '#f59e0b',
  'Disability':         '#ec4899',
  'Other':              '#6b7280',
}

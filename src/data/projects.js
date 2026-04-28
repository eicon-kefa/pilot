/**
 * e-ICON World Contest — Project Data
 *
 * HOW TO ADD A NEW TEAM:
 * 1. Copy one of the existing objects below (from { to the closing },)
 * 2. Paste it at the end of the array (before the closing ])
 * 3. Fill in all fields — use "" for anything not yet available
 * 4. Increment the `id` by 1 from the last entry
 * 5. Save the file — the site rebuilds automatically (or redeploy to Vercel)
 *
 * FIELD GUIDE (영문 필드 + 한국어 필드 쌍으로 구성):
 *   id              — 고유 번호, 마지막 항목보다 1 증가
 *   teamName        — 팀 이름 (국제 대회이므로 영문 유지)
 *   country         — 국가명 영문 (필터에 사용됨, 반드시 영문으로)
 *   school          — 학교/기관명
 *   projectTitle    — 프로젝트/웹앱 제목
 *   theme           — 아래 테마 값 중 하나 선택
 *                     "Mental Health" | "Fitness" | "Nutrition" | "Elderly Care" |
 *                     "Disability" | "Maternal Health" | "Disease Prevention" | "Other"
 *   problem         — SDG 3 관련 문제 설명 (영문, 1–2문장)
 *   problemKo       — SDG 3 관련 문제 설명 (한국어, 1–2문장)
 *   solution        — 해결 방법 설명 (영문, 1–2문장)
 *   solutionKo      — 해결 방법 설명 (한국어, 1–2문장)
 *   description     — 카드에 표시될 짧은 설명 (영문, ≤ 120자)
 *   descriptionKo   — 카드에 표시될 짧은 설명 (한국어, ≤ 60자)
 *   keyFeatures     — 주요 기능 목록 (영문 배열, 3–5개)
 *   keyFeaturesKo   — 주요 기능 목록 (한국어 배열, 3–5개)
 *   techStack       — 사용 기술 목록 (배열)
 *   members         — 팀원 이름 목록 (배열)
 *   teacher         — 지도교사 이름
 *   deployUrl       — 배포된 웹앱 URL (없으면 "")
 *   githubUrl       — GitHub 저장소 URL (없으면 "")
 *   thumbnail       — 썸네일 이미지 경로 /public/thumbnails/ (없으면 "")
 *
 * NOTE: 아래 데이터는 모두 PLACEHOLDER입니다 — 실제 팀 정보로 교체하세요.
 */

export const projects = [
  // ─── PLACEHOLDER TEAM 1 ───────────────────────────────────────────────────
  {
    id: 1,
    teamName: "Team HealthBridge",
    country: "South Korea",
    school: "Seoul Science High School",
    projectTitle: "HealthBridge — Community Health Connector",
    theme: "Disease Prevention",
    problem:
      "Rural communities lack easy access to preventive health information and local clinic resources, leading to delayed diagnoses.",
    problemKo:
      "농촌 지역사회는 예방적 건강 정보와 지역 의료 시설에 대한 접근성이 부족하여 진단이 늦어지는 문제가 발생합니다.",
    solution:
      "A web platform that connects residents with nearby health services, provides personalized prevention checklists, and sends health alerts.",
    solutionKo:
      "주민들을 인근 의료 서비스와 연결하고, 개인별 예방 체크리스트를 제공하며 건강 알림을 발송하는 웹 플랫폼입니다.",
    description:
      "Bridging the gap between rural communities and preventive healthcare resources.",
    descriptionKo:
      "농촌 지역사회와 예방 의료 자원 사이의 격차를 해소하는 서비스입니다.",
    keyFeatures: [
      "Nearby clinic finder with real-time availability",
      "Personalized prevention checklist by age & risk factor",
      "Community health bulletin board",
      "Multilingual support (KO / EN)",
    ],
    keyFeaturesKo: [
      "실시간 가용 정보 기반 인근 의원 찾기",
      "연령 및 위험 요인별 개인 맞춤 예방 체크리스트",
      "지역 건강 게시판",
      "한국어/영어 다국어 지원",
    ],
    techStack: ["React", "Node.js", "MongoDB", "Leaflet.js"],
    members: ["Kim Jisu", "Park Minjun", "Lee Soyeon"],
    teacher: "Choi Hyeonsuk",
    deployUrl: "https://placeholder-healthbridge.vercel.app",
    githubUrl: "https://github.com/placeholder/healthbridge",
    thumbnail: "",
  },

  // ─── PLACEHOLDER TEAM 2 ───────────────────────────────────────────────────
  {
    id: 2,
    teamName: "MindMate",
    country: "Japan",
    school: "Tokyo Metropolitan Kokusai High School",
    projectTitle: "MindMate — Youth Mental Wellness Tracker",
    theme: "Mental Health",
    problem:
      "Adolescent mental health crises often go undetected because students lack a private, stigma-free outlet to express stress and anxiety.",
    problemKo:
      "청소년 정신건강 위기는 학생들이 스트레스와 불안을 표현할 사적이고 낙인 없는 공간이 없어 종종 발견되지 못합니다.",
    solution:
      "An anonymous daily mood-tracking app that surfaces patterns over time and recommends evidence-based coping strategies.",
    solutionKo:
      "시간 경과에 따른 패턴을 파악하고 근거 기반 대처 전략을 추천하는 익명 일일 감정 추적 앱입니다.",
    description:
      "Helping students track emotions daily and discover personalized coping strategies.",
    descriptionKo:
      "학생들이 매일 감정을 기록하고 개인 맞춤형 대처 전략을 발견할 수 있도록 돕는 앱입니다.",
    keyFeatures: [
      "Anonymous daily mood check-in with emoji scale",
      "Weekly trend visualizations",
      "Curated coping exercise library",
      "Crisis resource quick-access panel",
    ],
    keyFeaturesKo: [
      "이모지 척도를 활용한 익명 일일 감정 체크인",
      "주간 감정 추세 시각화",
      "큐레이션된 대처 훈련 라이브러리",
      "위기 자원 빠른 접근 패널",
    ],
    techStack: ["Vue.js", "Firebase", "Chart.js"],
    members: ["Tanaka Yuki", "Nakamura Haruto", "Suzuki Aoi"],
    teacher: "Yamamoto Kenji",
    deployUrl: "https://placeholder-mindmate.vercel.app",
    githubUrl: "https://github.com/placeholder/mindmate",
    thumbnail: "",
  },

  // ─── PLACEHOLDER TEAM 3 ───────────────────────────────────────────────────
  {
    id: 3,
    teamName: "NutriKids",
    country: "Indonesia",
    school: "SMAN 8 Jakarta",
    projectTitle: "NutriKids — Child Nutrition Monitor",
    theme: "Nutrition",
    problem:
      "Childhood malnutrition remains high in Southeast Asia; parents often cannot assess nutritional adequacy of daily meals.",
    problemKo:
      "동남아시아의 아동 영양실조율이 높은 가운데, 부모들은 일상 식사의 영양 적절성을 평가하기 어렵습니다.",
    solution:
      "A photo-based food logging tool that estimates macro/micro-nutrient intake and guides parents toward balanced meals for children.",
    solutionKo:
      "사진 기반 식사 기록 도구로 다량·미량 영양소 섭취량을 추정하고 균형 잡힌 식단을 안내합니다.",
    description:
      "Empowering parents to monitor and improve their children's daily nutrition with AI-assisted meal scanning.",
    descriptionKo:
      "AI 식사 스캔으로 부모가 자녀의 일일 영양 상태를 쉽게 확인하고 개선할 수 있습니다.",
    keyFeatures: [
      "Photo-based meal logging with nutrient estimation",
      "Age-appropriate daily requirement guide",
      "Weekly nutrition report for parents",
      "Healthy recipe suggestions from local ingredients",
    ],
    keyFeaturesKo: [
      "사진 기반 식사 기록 및 영양소 추정",
      "연령별 일일 권장 섭취량 안내",
      "부모를 위한 주간 영양 리포트",
      "현지 식재료를 활용한 건강 레시피 추천",
    ],
    techStack: ["React", "Python (Flask)", "TensorFlow Lite", "PostgreSQL"],
    members: ["Budi Santoso", "Dewi Rahayu", "Ahmad Fauzan", "Siti Nur"],
    teacher: "Dr. Ratna Wijaya",
    deployUrl: "https://placeholder-nutrikids.vercel.app",
    githubUrl: "https://github.com/placeholder/nutrikids",
    thumbnail: "",
  },

  // ─── PLACEHOLDER TEAM 4 ───────────────────────────────────────────────────
  {
    id: 4,
    teamName: "ElderCare360",
    country: "Philippines",
    school: "Philippine Science High School — Main Campus",
    projectTitle: "ElderCare360 — Elderly Remote Health Monitor",
    theme: "Elderly Care",
    problem:
      "Elderly individuals living alone are at risk of medical emergencies with no immediate alert system for family caregivers.",
    problemKo:
      "혼자 생활하는 노인들은 응급 상황 발생 시 가족 보호자에게 즉시 알림을 전달할 수단이 없어 위험에 처할 수 있습니다.",
    solution:
      "A lightweight IoT-connected dashboard that aggregates wearable sensor data and sends caregiver alerts when anomalies are detected.",
    solutionKo:
      "웨어러블 센서 데이터를 수집하고 이상 징후 감지 시 보호자에게 알림을 전송하는 경량 IoT 연동 대시보드입니다.",
    description:
      "Keeping families connected to elderly loved ones through real-time health monitoring and automated alerts.",
    descriptionKo:
      "실시간 건강 모니터링과 자동 알림으로 가족이 노인 부모와 항상 연결될 수 있도록 돕습니다.",
    keyFeatures: [
      "Real-time heart rate & step-count dashboard",
      "Anomaly detection with caregiver SMS/email alert",
      "Medication reminder scheduler",
      "Monthly health report export (PDF)",
    ],
    keyFeaturesKo: [
      "실시간 심박수 및 걸음 수 대시보드",
      "이상 감지 시 보호자 SMS/이메일 알림",
      "복약 알림 스케줄러",
      "월간 건강 리포트 PDF 내보내기",
    ],
    techStack: ["React", "Express.js", "MQTT", "InfluxDB"],
    members: ["Maria Santos", "Jose Reyes", "Ana Cruz"],
    teacher: "Prof. Ricardo Dela Cruz",
    deployUrl: "https://placeholder-eldercare360.vercel.app",
    githubUrl: "https://github.com/placeholder/eldercare360",
    thumbnail: "",
  },

  // ─── PLACEHOLDER TEAM 5 ───────────────────────────────────────────────────
  {
    id: 5,
    teamName: "FitPath",
    country: "Vietnam",
    school: "Hanoi — Amsterdam High School",
    projectTitle: "FitPath — Adaptive Fitness for All Abilities",
    theme: "Fitness",
    problem:
      "People with physical disabilities have limited access to exercise programs that account for their specific mobility constraints.",
    problemKo:
      "신체 장애가 있는 사람들은 자신의 이동 제약을 고려한 운동 프로그램에 접근하기 어렵습니다.",
    solution:
      "An adaptive fitness web app that generates customized workout plans based on disability type, equipment availability, and fitness goals.",
    solutionKo:
      "장애 유형, 기구 보유 여부, 운동 목표에 따라 맞춤형 운동 계획을 생성하는 적응형 피트니스 웹앱입니다.",
    description:
      "Inclusive fitness planning tailored to individual mobility needs and available equipment.",
    descriptionKo:
      "개인의 이동 능력과 보유 기구에 맞춘 포용적 피트니스 계획 서비스입니다.",
    keyFeatures: [
      "Disability-type intake form with adaptive plan generator",
      "Video-guided exercise library (seated, standing, wheelchair)",
      "Progress tracker with accessible chart UI",
      "Community challenge boards",
    ],
    keyFeaturesKo: [
      "장애 유형 입력 폼과 적응형 운동 계획 생성기",
      "영상 안내 운동 라이브러리 (앉기·서기·휠체어)",
      "접근성 높은 차트 UI 기반 진도 추적",
      "커뮤니티 챌린지 게시판",
    ],
    techStack: ["Next.js", "Supabase", "Tailwind CSS"],
    members: ["Nguyen Thi Lan", "Tran Van Nam", "Le Hoang Minh"],
    teacher: "Pham Thi Thu",
    deployUrl: "https://placeholder-fitpath.vercel.app",
    githubUrl: "https://github.com/placeholder/fitpath",
    thumbnail: "",
  },
]

/** All unique countries derived from the data — used for the filter bar. */
export const countries = [...new Set(projects.map((p) => p.country))].sort()

/** All unique themes derived from the data — used for the filter bar. */
export const themes = [...new Set(projects.map((p) => p.theme))].sort()

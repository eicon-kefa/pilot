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
 *   teamName        — 팀 이름 / 앱 이름
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
 *   thumbnail       — 썸네일 이미지 경로 (없으면 "")
 *                     예: "/images/team01-먹보.png"
 *                     이미지 파일은 public/images/ 폴더에 넣어야 합니다.
 *
 * ─── 파일럿 v1 — 2026 e-ICON 파일럿 실제 팀 데이터 ───────────────────────
 */

export const projects = [
  // ─── TEAM 01 — 먹보 ───────────────────────────────────────────────────────
  {
    id: 1,
    teamName: "team-01",
    country: "South Korea",
    school: "",
    projectTitle: "먹보 — 청소년 식습관 관리 앱",
    theme: "Nutrition",
    problem:
      "Teenagers often develop poor eating habits without access to personalized guidance on balanced nutrition and healthy meal choices.",
    problemKo:
      "중·고등학생들은 균형 잡힌 영양 섭취와 건강한 식사 선택에 대한 안내 없이 잘못된 식습관을 갖게 됩니다.",
    solution:
      "A meal tracking app that records daily eating habits, recommends dietary improvements, and provides step-by-step recipes tailored to teenagers.",
    solutionKo:
      "일일 식습관을 기록하고 개선 방법을 추천하며 청소년에게 맞는 조리법을 단계별로 제공하는 식단 관리 앱입니다.",
    description:
      "Helping students build healthier eating habits through daily meal logging and personalized food recommendations.",
    descriptionKo:
      "매일 식사를 기록하고 맞춤 식습관 개선법과 조리법을 추천해 주는 청소년 식단 앱입니다.",
    keyFeatures: [
      "Daily meal habit logging & checklist",
      "Personalized dietary recommendations",
      "Dietary improvement tips & guides",
      "Step-by-step recipe suggestions",
    ],
    keyFeaturesKo: [
      "식습관 기록 및 체크리스트",
      "개인 맞춤 식습관 추천",
      "식습관 개선 방법 안내",
      "조리법 단계별 안내",
    ],
    techStack: [],
    members: ["김아인", "박성빈", "한승재", "이수민"],
    teacher: "",
    deployUrl: "",
    githubUrl: "",
    thumbnail: "",
  },

  // ─── TEAM 02 — eaaty ──────────────────────────────────────────────────────
  {
    id: 2,
    teamName: "team-2",
    country: "South Korea",
    school: "",
    projectTitle: "eaaty — 탄단지 식단 분석 앱",
    theme: "Nutrition",
    problem:
      "People struggle to track and balance their macronutrient (carbohydrate, protein, fat) intake without a simple, visual daily tool.",
    problemKo:
      "사람들은 탄수화물·단백질·지방 섭취량을 쉽게 파악하고 균형 잡는 방법을 몰라 건강한 식단을 유지하기 어렵습니다.",
    solution:
      "A nutrition tracker that analyzes the past 7 days of meals, visualizes calorie and macronutrient percentages, and suggests recipes for balanced eating.",
    solutionKo:
      "최근 7일간의 식단을 분석하고 열량·탄단지 비율을 시각화하며 균형 잡힌 식사를 위한 레시피를 추천하는 영양 추적 앱입니다.",
    description:
      "Analyze your weekly diet and get macro-balanced meal suggestions — calories, carbs, protein, and fat at a glance.",
    descriptionKo:
      "7일 식단 분석으로 탄단지 균형을 확인하고 맞춤 조리법을 추천받는 영양 관리 앱입니다.",
    keyFeatures: [
      "7-day meal history analysis",
      "Step-by-step recipe lookup",
      "Calorie & macronutrient percentage visualization",
    ],
    keyFeaturesKo: [
      "최근 7일 식단 분석",
      "조리법 단계별 안내",
      "열량·탄단지 퍼센트 시각화",
    ],
    techStack: [],
    members: ["안수범", "전유승", "이서현"],
    teacher: "",
    deployUrl: "",
    githubUrl: "",
    thumbnail: "",
  },

  // ─── TEAM 03 — 운동어디 ───────────────────────────────────────────────────
  {
    id: 3,
    teamName: "team-3",
    country: "South Korea",
    school: "",
    projectTitle: "운동어디 — 운동 시설 지도 앱",
    theme: "Fitness",
    problem:
      "People who want to exercise regularly don't know where nearby fitness facilities are or how suitable they are for their needs.",
    problemKo:
      "운동하고 싶은 사람들은 주변 운동 시설이 어디 있는지, 어떤 시설인지 파악하기 어렵습니다.",
    solution:
      "A map-based app that shows nearby fitness facilities, provides detailed information, and allows users to rate and review each location.",
    solutionKo:
      "지도 기반으로 인근 운동 시설을 보여주고, 시설 정보를 제공하며 사용자 평가 및 리뷰를 남길 수 있는 앱입니다.",
    description:
      "Find the best nearby workout spots with map-based facility search and honest community ratings.",
    descriptionKo:
      "지도로 내 주변 운동 시설을 찾고 커뮤니티 평가로 최적의 장소를 선택하는 앱입니다.",
    keyFeatures: [
      "Map-based fitness facility search",
      "Detailed facility information & hours",
      "Community ratings and reviews",
    ],
    keyFeaturesKo: [
      "지도 기반 운동 시설 검색",
      "시설 정보 및 운영 시간 안내",
      "사용자 시설 평가 및 리뷰",
    ],
    techStack: [],
    members: ["이진훤", "장재영"],
    teacher: "",
    deployUrl: "",
    githubUrl: "",
    thumbnail: "",
  },

  // ─── TEAM 04 — sleeplog ───────────────────────────────────────────────────
  {
    id: 4,
    teamName: "team-4",
    country: "South Korea",
    school: "",
    projectTitle: "sleeplog — 청소년 수면 관리 앱",
    theme: "Mental Health",
    problem:
      "Teenagers suffer from chronic sleep deprivation but lack tools to track their sleep patterns and build consistent bedtime habits.",
    problemKo:
      "청소년들은 만성적인 수면 부족에 시달리지만, 수면 패턴을 추적하고 규칙적인 취침 습관을 형성할 도구가 없습니다.",
    solution:
      "A sleep tracker that logs sleep hours, visualizes weekly trends as graphs, sends bedtime reminders, and rewards consistent sleep with achievement badges.",
    solutionKo:
      "수면 시간을 기록하고 주간 추세를 그래프로 보여주며, 취침 알림과 배지 보상으로 규칙적인 수면 습관 형성을 돕는 앱입니다.",
    description:
      "Build better sleep habits with sleep logging, weekly trend graphs, smart bedtime reminders, and badge rewards.",
    descriptionKo:
      "수면 기록, 주간 그래프, 취침 알림, 배지 보상으로 청소년의 건강한 수면 습관을 형성하는 앱입니다.",
    keyFeatures: [
      "Sleep time logging & tracking",
      "Weekly sleep trend graph visualization",
      "Bedtime reminder notifications",
      "Badge reward system for consistent sleep",
    ],
    keyFeaturesKo: [
      "수면 시간 기록 및 추적",
      "주간 수면 추세 그래프 시각화",
      "취침 시간 알림 기능",
      "꾸준한 수면 달성 배지 시스템",
    ],
    techStack: [],
    members: ["김승연", "정주윤", "문혜윤"],
    teacher: "",
    deployUrl: "",
    githubUrl: "",
    thumbnail: "",
  },

  // ─── TEAM 05 — Well-being Butler ──────────────────────────────────────────
  {
    id: 5,
    teamName: "team-5",
    country: "South Korea",
    school: "",
    projectTitle: "Well-being Butler — AI 웰빙 생활 습관 코치",
    theme: "Other",
    problem:
      "Modern workers struggle to correct unhealthy daily routines and find meaningful hobbies without personalized guidance.",
    problemKo:
      "현대 직장인들은 건강하지 않은 생활 습관을 교정하고 의미 있는 취미를 찾는 데 개인 맞춤 도움이 없어 어려움을 겪습니다.",
    solution:
      "An AI conversational assistant that provides tailored wellness solutions, helps users write specific improvement plans, and sends reminders to prevent plan abandonment.",
    solutionKo:
      "대화형 AI가 맞춤 웰빙 솔루션을 제공하고, 구체적인 개선 계획 작성을 돕고, 계획 실천을 놓치지 않도록 알림을 보내는 웰빙 코치 앱입니다.",
    description:
      "Your personal AI wellness coach — chat to get solutions, build plans, and stay accountable for healthier daily habits.",
    descriptionKo:
      "AI와 대화로 맞춤 웰빙 솔루션을 받고 생활 습관 개선 계획을 세우고 실천하도록 돕는 웰빙 버틀러 앱입니다.",
    keyFeatures: [
      "AI chat-based counseling & wellness solutions",
      "Personalized improvement plan builder",
      "Accountability reminders to prevent plan abandonment",
    ],
    keyFeaturesKo: [
      "AI 대화 기반 상담 및 웰빙 솔루션 제공",
      "개인 맞춤 생활 개선 계획 작성",
      "계획 불이행 예방 알림",
    ],
    techStack: [],
    members: ["박시우", "정상준", "김범서"],
    teacher: "",
    deployUrl: "",
    githubUrl: "",
    thumbnail: "",
  },

  // ─── TEAM 06 — 핏밀 (FitMeal) ─────────────────────────────────────────────
  {
    id: 6,
    teamName: "team-6",
    country: "South Korea",
    school: "",
    projectTitle: "핏밀(FitMeal) — 맞춤 운동·식단 추천 앱",
    theme: "Fitness",
    problem:
      "Teenagers facing lack of exercise have no personalized workout or meal plans that account for their individual body type and health goals.",
    problemKo:
      "운동이 부족한 청소년들은 자신의 체형과 목표에 맞는 운동법이나 식단 계획을 찾기 어렵습니다.",
    solution:
      "An app that recommends workouts tailored to body type and fitness goals, sends exercise reminders at the right time, and suggests matching meal plans.",
    solutionKo:
      "체형과 건강 목표에 맞는 운동을 추천하고, 운동 시간에 알림을 보내며, 운동에 맞는 식단을 함께 추천하는 청소년 피트니스 앱입니다.",
    description:
      "Personalized workout and meal plans for teens — tailored to your body type, goals, and schedule.",
    descriptionKo:
      "체형과 목표에 맞는 운동 추천, 운동 알림, 맞춤 식단까지 제공하는 청소년 맞춤 피트니스 앱입니다.",
    keyFeatures: [
      "Body-type & goal-based workout recommendations",
      "Exercise time reminder notifications",
      "Personalized meal plan suggestions",
    ],
    keyFeaturesKo: [
      "체형·목표 맞춤 운동 추천",
      "운동 시간 알림 기능",
      "맞춤 식단 추천",
    ],
    techStack: [],
    members: ["조은혁", "이예준", "류하진"],
    teacher: "",
    deployUrl: "",
    githubUrl: "",
    thumbnail: "",
  },
]

/** All unique countries derived from the data — used for the filter bar. */
export const countries = [...new Set(projects.map((p) => p.country))].sort()

/** All unique themes derived from the data — used for the filter bar. */
export const themes = [...new Set(projects.map((p) => p.theme))].sort()

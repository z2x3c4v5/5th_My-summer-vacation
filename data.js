/* =========================================================
 * 6단원 · What will you do this summer? 데이터
 * - 활동 문장(I'll ~) : 초급 / 중급 / 고급 각 12개
 * - 카테고리(인덱스별로 공통) : make / active / trip / home
 * - 묻는 말 · 응원/인사 표현
 * - 때(When) · 장소(Where) 표현
 * - 단어 뜻 사전
 * ========================================================= */

/* 카테고리: 같은 인덱스끼리 같은 종류가 되도록 정렬했어요. */
const SUGGESTION_CATEGORIES = [
  "make", "make", "make",      // 0,1,2  🌱 기르기·만들기
  "active", "active", "active",// 3,4,5  🏃 운동·배우기
  "trip", "trip", "trip",      // 6,7,8  🏖️ 나들이·여행
  "home", "home", "home",      // 9,10,11 📚 집·취미
];

/* 이미지(실사) 검색 키워드 - 인덱스별 공통 */
const IMAGE_PROMPTS = [
  "growing red tomatoes in a sunny garden",
  "kids baking cookies in a kitchen",
  "child drawing and painting pictures",
  "children practicing taekwondo",
  "happy kids playing soccer on a field",
  "child riding a bicycle outdoors",
  "kids playing on a sunny sandy beach",
  "grandfather smiling with grandchild",
  "family camping with a tent in nature",
  "child reading a stack of books",
  "child writing in a diary at a desk",
  "kids watching a movie together",
];

/* ===== 활동 문장 (모두 "I'll ~" 로 시작) ===== */
const SUGGESTION_LEVELS = {
  beginner: [
    { en: "I'll grow tomatoes.",      ko: "나는 토마토를 기를 거야.",   emoji: "🍅" },
    { en: "I'll make cookies.",       ko: "나는 쿠키를 만들 거야.",     emoji: "🍪" },
    { en: "I'll draw pictures.",      ko: "나는 그림을 그릴 거야.",     emoji: "🎨" },
    { en: "I'll learn taekwondo.",    ko: "나는 태권도를 배울 거야.",   emoji: "🥋" },
    { en: "I'll play soccer.",        ko: "나는 축구를 할 거야.",       emoji: "⚽" },
    { en: "I'll ride a bike.",        ko: "나는 자전거를 탈 거야.",     emoji: "🚴" },
    { en: "I'll go to the beach.",    ko: "나는 해변에 갈 거야.",       emoji: "🏖️" },
    { en: "I'll visit my grandpa.",   ko: "나는 할아버지를 찾아뵐 거야.", emoji: "👴" },
    { en: "I'll go camping.",         ko: "나는 캠핑을 갈 거야.",       emoji: "⛺" },
    { en: "I'll read many books.",    ko: "나는 책을 많이 읽을 거야.",  emoji: "📚" },
    { en: "I'll write a diary.",      ko: "나는 일기를 쓸 거야.",       emoji: "📔" },
    { en: "I'll watch movies.",       ko: "나는 영화를 볼 거야.",       emoji: "🎬" },
  ],
  intermediate: [
    { en: "I'll grow tomatoes in the garden.",   ko: "나는 정원에서 토마토를 기를 거야.",   emoji: "🍅" },
    { en: "I'll make cookies with my mom.",      ko: "나는 엄마와 쿠키를 만들 거야.",       emoji: "🍪" },
    { en: "I'll draw pictures of flowers.",      ko: "나는 꽃 그림을 그릴 거야.",           emoji: "🎨" },
    { en: "I'll learn taekwondo every day.",     ko: "나는 매일 태권도를 배울 거야.",       emoji: "🥋" },
    { en: "I'll play soccer with my friends.",   ko: "나는 친구들과 축구를 할 거야.",       emoji: "⚽" },
    { en: "I'll ride a bike along the river.",   ko: "나는 강을 따라 자전거를 탈 거야.",    emoji: "🚴" },
    { en: "I'll go to the beach with my family.",ko: "나는 가족과 해변에 갈 거야.",         emoji: "🏖️" },
    { en: "I'll visit my grandpa in the country.",ko: "나는 시골에 계신 할아버지를 찾아뵐 거야.", emoji: "👴" },
    { en: "I'll go camping in the mountains.",   ko: "나는 산으로 캠핑을 갈 거야.",         emoji: "⛺" },
    { en: "I'll read many books this summer.",   ko: "나는 이번 여름에 책을 많이 읽을 거야.", emoji: "📚" },
    { en: "I'll write a diary every night.",     ko: "나는 매일 밤 일기를 쓸 거야.",        emoji: "📔" },
    { en: "I'll watch movies on rainy days.",    ko: "나는 비 오는 날 영화를 볼 거야.",     emoji: "🎬" },
  ],
  advanced: [
    { en: "I'll grow tomatoes and water them every morning.", ko: "나는 토마토를 기르고 매일 아침 물을 줄 거야.", emoji: "🍅" },
    { en: "I'll make cookies and share them with my friends.", ko: "나는 쿠키를 만들어 친구들과 나눠 먹을 거야.", emoji: "🍪" },
    { en: "I'll draw pictures of beautiful places.",          ko: "나는 아름다운 곳들을 그림으로 그릴 거야.",     emoji: "🎨" },
    { en: "I'll learn taekwondo to become stronger.",         ko: "나는 더 강해지려고 태권도를 배울 거야.",       emoji: "🥋" },
    { en: "I'll play soccer at the park after lunch.",        ko: "나는 점심을 먹고 공원에서 축구를 할 거야.",     emoji: "⚽" },
    { en: "I'll ride a bike around the lake on weekends.",    ko: "나는 주말마다 호수 주변에서 자전거를 탈 거야.", emoji: "🚴" },
    { en: "I'll go to the beach and build a sandcastle.",     ko: "나는 해변에 가서 모래성을 쌓을 거야.",         emoji: "🏖️" },
    { en: "I'll visit my grandpa and help him on the farm.",  ko: "나는 할아버지를 찾아뵙고 농장 일을 도울 거야.", emoji: "👴" },
    { en: "I'll go camping and watch the stars at night.",    ko: "나는 캠핑을 가서 밤에 별을 볼 거야.",          emoji: "⛺" },
    { en: "I'll read many books and write book reports.",     ko: "나는 책을 많이 읽고 독후감을 쓸 거야.",        emoji: "📚" },
    { en: "I'll write a diary about my summer adventures.",   ko: "나는 여름 모험에 대한 일기를 쓸 거야.",        emoji: "📔" },
    { en: "I'll watch movies and learn new English words.",   ko: "나는 영화를 보며 새 영어 단어를 배울 거야.",   emoji: "🎬" },
  ],
};

/* ===== 묻는 말 (Questions) ===== */
const QUESTION_EXPRESSIONS = [
  { en: "What will you do this summer?",  ko: "이번 여름에 뭐 할 거야?",        emoji: "🤔", imgPrompt: "two kids talking about summer plans" },
  { en: "What are you going to do?",      ko: "너는 무엇을 할 거니?",            emoji: "💭", imgPrompt: "child thinking with question mark" },
  { en: "Where will you go this summer?", ko: "이번 여름에 어디에 갈 거야?",     emoji: "🗺️", imgPrompt: "child looking at a travel map" },
  { en: "Who will you go with?",          ko: "누구랑 갈 거야?",                emoji: "👫", imgPrompt: "two friends planning a trip together" },
];

/* ===== 응원·인사 (Wishes & Reactions) ===== */
const WISH_EXPRESSIONS = [
  { en: "Have a good time!",     ko: "좋은 시간 보내!",        emoji: "😄", imgPrompt: "cheerful kids waving goodbye" },
  { en: "Have fun!",             ko: "재미있게 보내!",         emoji: "🎉", imgPrompt: "happy children celebrating" },
  { en: "That sounds great!",    ko: "정말 멋지다!",           emoji: "👍", imgPrompt: "child giving a thumbs up" },
  { en: "Enjoy your summer!",    ko: "여름방학 잘 보내!",      emoji: "☀️", imgPrompt: "kid enjoying a sunny summer day" },
];

/* ===== 때 (When) ===== */
const DAY_EXPRESSIONS = [
  { en: "this summer",      ko: "이번 여름에",   emoji: "☀️" },
  { en: "this vacation",    ko: "이번 방학에",   emoji: "🎒" },
  { en: "every day",        ko: "매일",          emoji: "📆" },
  { en: "every morning",    ko: "매일 아침",     emoji: "🌅" },
  { en: "every night",      ko: "매일 밤",       emoji: "🌙" },
  { en: "on weekends",      ko: "주말마다",      emoji: "🗓️" },
  { en: "after lunch",      ko: "점심 후에",     emoji: "🍱" },
  { en: "on rainy days",    ko: "비 오는 날에",  emoji: "🌧️" },
  { en: "for two weeks",    ko: "2주 동안",      emoji: "⏳" },
  { en: "all summer long",  ko: "여름 내내",     emoji: "🌻" },
  { en: "next week",        ko: "다음 주에",     emoji: "➡️" },
  { en: "in the morning",   ko: "아침에",        emoji: "🐓" },
];

/* ===== 장소 (Where) ===== */
const PLACE_EXPRESSIONS = [
  { en: "to the beach",        ko: "해변에",          emoji: "🏖️" },
  { en: "to the mountains",    ko: "산에",            emoji: "⛰️" },
  { en: "to the park",         ko: "공원에",          emoji: "🌳" },
  { en: "to the pool",         ko: "수영장에",        emoji: "🏊" },
  { en: "to the library",      ko: "도서관에",        emoji: "📖" },
  { en: "to the museum",       ko: "박물관에",        emoji: "🏛️" },
  { en: "to my grandpa's house",ko: "할아버지 댁에",  emoji: "🏡" },
  { en: "to the countryside",  ko: "시골에",          emoji: "🌾" },
  { en: "to summer camp",      ko: "여름 캠프에",     emoji: "⛺" },
  { en: "to the zoo",          ko: "동물원에",        emoji: "🦁" },
  { en: "to the river",        ko: "강에",            emoji: "🏞️" },
  { en: "to the water park",   ko: "워터파크에",      emoji: "💦" },
];

/* ===== 단어 뜻 사전 ===== */
function wordKey(w) {
  return w.toLowerCase().replace(/^[^a-z']+/, "").replace(/[^a-z']+$/, "");
}

const WORD_MEANINGS = {
  "i'll": "나는 ~할 거야 (I will)",
  "i'm": "나는 ~이다 (I am)",
  "will": "~할 것이다",
  "going": "(be going to) ~할 거야",
  "to": "~에, ~으로",
  "do": "하다",
  "what": "무엇",
  "where": "어디에",
  "who": "누구",
  "you": "너, 너희",
  "this": "이, 이번",
  "summer": "여름",
  "vacation": "방학",
  "grow": "기르다, 키우다",
  "tomatoes": "토마토 (여러 개)",
  "make": "만들다",
  "cookies": "쿠키 (여러 개)",
  "draw": "(그림을) 그리다",
  "pictures": "그림, 사진",
  "of": "~의",
  "flowers": "꽃 (여러 송이)",
  "beautiful": "아름다운",
  "places": "장소들",
  "learn": "배우다",
  "taekwondo": "태권도",
  "every": "매~, 모든",
  "day": "날, 하루",
  "to become": "~이 되다",
  "become": "~이 되다",
  "stronger": "더 강한",
  "play": "(운동을) 하다, 놀다",
  "soccer": "축구",
  "with": "~와 함께",
  "my": "나의",
  "friends": "친구들",
  "at": "~에서",
  "park": "공원",
  "after": "~후에",
  "lunch": "점심",
  "ride": "타다",
  "a": "하나의",
  "bike": "자전거",
  "along": "~을 따라",
  "the": "그 (특정한 것)",
  "river": "강",
  "around": "~주변에",
  "lake": "호수",
  "on": "~에, ~위에",
  "weekends": "주말",
  "go": "가다",
  "beach": "해변, 바닷가",
  "family": "가족",
  "and": "그리고",
  "build": "쌓다, 짓다",
  "sandcastle": "모래성",
  "visit": "방문하다, 찾아뵙다",
  "grandpa": "할아버지",
  "country": "시골, 나라",
  "countryside": "시골",
  "help": "돕다",
  "him": "그를",
  "farm": "농장",
  "camping": "캠핑",
  "mountains": "산",
  "watch": "보다, 지켜보다",
  "stars": "별들",
  "night": "밤",
  "read": "읽다",
  "many": "많은",
  "books": "책 (여러 권)",
  "report": "보고서, 독후감",
  "reports": "보고서들, 독후감",
  "write": "쓰다",
  "diary": "일기",
  "about": "~에 대하여",
  "adventures": "모험들",
  "movies": "영화 (여러 편)",
  "new": "새로운",
  "english": "영어",
  "words": "단어들",
  "water": "물을 주다; 물",
  "them": "그것들을",
  "morning": "아침",
  "share": "나누다, 함께 쓰다",
  "have": "가지다, 보내다",
  "good": "좋은",
  "time": "시간",
  "fun": "재미, 즐거움",
  "that": "그것",
  "sounds": "~처럼 들리다",
  "great": "아주 좋은, 멋진",
  "enjoy": "즐기다",
  "your": "너의",
  "are": "~이다 (be)",
  "rainy": "비가 오는",
  "days": "날들",
  "two": "둘, 2",
  "weeks": "주 (여러 주)",
  "all": "모든, 내내",
  "long": "긴, 오래",
  "next": "다음의",
  "week": "주, 일주일",
  "in": "~안에, ~에",
  "pool": "수영장",
  "library": "도서관",
  "museum": "박물관",
  "house": "집",
  "camp": "캠프",
  "zoo": "동물원",
  "garden": "정원, 텃밭",
  "mom": "엄마",
};

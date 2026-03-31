const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger?.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

const NEWS_DATA = [
  { title: '인피닛블록, 바빌론 랩스와 비트코인 금융 2.0 인프라 공동 구축 협력', date: '2025.11.28', url: 'https://news.nate.com/view/20251128n05844', img: 'https://inbl.io/upload/maindata5/maindata589394_0.jpg' },
  { title: '쿠콘·인피닛블록·파라메타, 스테이블코인 사업 협력 MOU', date: '2025.10.01', url: 'https://www.news1.kr/finance/blockchain-fintech/5931718', img: 'https://inbl.io/upload/maindata5/maindata588049_0.jpg' },
  { title: "인피닛블록, 중기부 주관 '2025년 창업중심대학' 지원사업 선정!", date: '2025.06.05', url: 'https://news.mt.co.kr/mtview.php?no=2025060510510144321', img: 'https://inbl.io/upload/maindata5/maindata538976_0.jpg' },
  { title: '인피닛블록, iM금융그룹 피움랩 7기 선발', date: '2025.05.30', url: 'https://www.digitalasset.works/news/articleView.html?idxno=27767', img: 'https://inbl.io/upload/maindata5/maindata548176_0.jpg' },
  { title: "인피닛블록, 중기부 '이노비즈' 인증 획득", date: '2025.05.15', url: 'https://www.opinionnews.co.kr/news/articleView.html?idxno=117292', img: 'https://inbl.io/upload/maindata5/maindata548143_0.jpg' },
  { title: '인피닛블록, 글로벌 보안기업 서틱과 협력…커스터디 서비스 고도화', date: '2025.02.05', url: 'https://www.dailian.co.kr/news/view/1458158/?sc=Naver', img: 'https://inbl.io/upload/maindata5/maindata537768_0.jpeg' },
  { title: '인피닛블록, XRP 레저 기반 미국 국채 자산수탁 개시!', date: '2024.12.24', url: 'https://n.news.naver.com/article/119/0002907327', img: 'https://inbl.io/upload/maindata5/maindata503338_0.jpeg' },
  { title: '인피닛블록, 크라우드인베스트와 RWA 사업 강화 맞손!', date: '2024.12.18', url: 'https://www.etnews.com/20241217000043', img: 'https://inbl.io/upload/maindata5/maindata513709_0.jpg' },
  { title: '디지털 자산 수탁사 인피닛블록, 여가친화기업 인증 획득!', date: '2024.11.22', url: 'https://www.decenter.kr/NewsView/2DGXJIET2L/GZ03', img: 'https://inbl.io/upload/maindata5/maindata557716_0.jpg' },
  { title: '인피닛블록, 중소벤처기업부 주관 글로벌R&D 지원사업 선정!', date: '2024.11.19', url: 'https://www.etnews.com/20241114000170', img: 'https://inbl.io/upload/maindata5/maindata571764_0.jpg' },
  { title: '인피닛블록, XRP레져 커스터디 신규 지원!', date: '2024.06.24', url: 'https://www.dailian.co.kr/news/view/1374410/', img: 'https://inbl.io/upload/maindata5/maindata596353_0.jpg' },
  { title: '인피닛블록, 토큰증권 커스터디 특허 2건 등록!', date: '2024.06.18', url: 'https://www.etnews.com/20240618000011', img: 'https://inbl.io/upload/maindata5/maindata587917_0.jpg' },
  { title: '인피닛블록, ISO 정보보호 인증 3종 추가 획득!', date: '2024.06.10', url: 'https://www.venturesquare.net/927777', img: 'https://inbl.io/upload/maindata5/maindata596481_0.jpg' },
  { title: '인피닛블록, 가상자산사업자 최초 ISMS 본인증 획득!', date: '2024.04.02', url: 'https://www.etnews.com/20240402000054', img: 'https://inbl.io/upload/maindata5/maindata539381_0.jpg' },
  { title: '인피닛블록, XRP 레저 밸리데이터 합류!', date: '2024.05.13', url: 'https://zdnet.co.kr/view/?no=20240513083206', img: 'https://inbl.io/upload/maindata5/maindata561401_0.jpg' },
  { title: "인피닛블록, '가상자산사업자' 신고 수리 완료!", date: '2023.08.09', url: 'https://www.hankyung.com/finance/article/202308096316O', img: 'https://inbl.io/upload/maindata5/maindata542617_0.jpg' },
];

const BATCH = 6;
let newsShown = 0;
const mediaGrid = document.getElementById('media-grid');
const loadMoreBtn = document.getElementById('load-more-btn');

function renderNews() {
  const slice = NEWS_DATA.slice(newsShown, newsShown + BATCH);
  if (newsShown === 0) mediaGrid.innerHTML = '';
  slice.forEach(item => {
    const card = document.createElement('a');
    card.href = item.url;
    card.target = '_blank';
    card.rel = 'noopener noreferrer';
    card.className = 'media-card';
    card.innerHTML = `
      <div class="media-card-img">
        <img src="${item.img}" alt="${item.title}" loading="lazy" onerror="this.style.display='none'"/>
      </div>
      <div class="media-card-body">
        <div class="media-card-date">${item.date}</div>
        <div class="media-card-title">${item.title}</div>
      </div>`;
    mediaGrid.appendChild(card);
  });
  newsShown += slice.length;
  if (newsShown >= NEWS_DATA.length) loadMoreBtn.style.display = 'none';
}

if (mediaGrid) {
  renderNews();
  loadMoreBtn?.addEventListener('click', renderNews);
}

const PARTNER_LOGOS = [
  'https://inbl.io/upload/maindata3/maindata350150_0.png',
  'https://inbl.io/upload/maindata3/maindata350130_0.png',
  'https://inbl.io/upload/maindata3/maindata350168_0.png',
  'https://inbl.io/upload/maindata3/maindata350943_0.png',
  'https://inbl.io/upload/maindata3/maindata350932_0.png',
  'https://inbl.io/upload/maindata3/maindata350918_0.png',
  'https://inbl.io/upload/maindata3/maindata350904_0.png',
  'https://inbl.io/upload/maindata3/maindata350109_0.png',
  'https://inbl.io/upload/maindata3/maindata350850_0.png',
  'https://inbl.io/upload/maindata3/maindata350783_0.png',
  'https://inbl.io/upload/maindata3/maindata350690_0.png',
  'https://inbl.io/upload/maindata3/maindata350613_0.png',
];

const track = document.getElementById('partners-track');
if (track) {
  const doubled = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  doubled.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'partner logo';
    img.className = 'partner-logo';
    img.loading = 'lazy';
    track.appendChild(img);
  });
}

const contactForm = document.getElementById('contact-form');
const formResult = document.getElementById('form-result');
contactForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('.btn-submit');
  btn.disabled = true;
  btn.textContent = '전송 중...';
  formResult.className = 'form-result';
  formResult.textContent = '';
  const data = Object.fromEntries(new FormData(contactForm));
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/contact_inquiries`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({ name: data.name, email: data.email, message: data.message, created_at: new Date().toISOString() }),
    });
    if (res.ok || res.status === 201) {
      formResult.textContent = '문의가 접수되었습니다. 빠르게 답변드리겠습니다.';
      contactForm.reset();
    } else { throw new Error(); }
  } catch {
    window.location.href = `mailto:contact@inbl.io?subject=서비스 이용 문의&body=${encodeURIComponent(`이름: ${data.name}\n이메일: ${data.email}\n\n${data.message}`)}`;
  }
  btn.disabled = false;
  btn.textContent = '문의 보내기';
});

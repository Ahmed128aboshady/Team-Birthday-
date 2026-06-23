// ==========================================
// TRANSLATION DICTIONARY
// ==========================================
const translations = {
  ar: {
    "app-title": "أعياد ميلاد فريقنا",
    "app-subtitle": "تتبع واحتفل بالمناسبات الخاصة لـ 16 زميل عمل",
    "add-new-btn": "إضافة زميل جديد",
    "birthday-today": "يحتفل اليوم! 🎉",
    "celebrate-button": "أرسل تهنئة واحتفل!",
    "upcoming-title": "المناسبات القادمة",
    "distribution-title": "التوزيع الشهري لأعياد الميلاد",
    "month-all": "جميع الأشهر",
    "month-0": "يناير / January",
    "month-1": "فبراير / February",
    "month-2": "مارس / March",
    "month-3": "أبريل / April",
    "month-4": "مايو / May",
    "month-5": "يونيو / June",
    "month-6": "يوليو / July",
    "month-7": "أغسطس / August",
    "month-8": "سبتمبر / September",
    "month-9": "أكتوبر / October",
    "month-10": "نوفمبر / November",
    "month-11": "ديسمبر / December",
    "sort-countdown": "الترتيب حسب الأقرب",
    "sort-name": "الترتيب أبجدياً",
    "sort-age": "الترتيب حسب العمر (الأكبر)",
    "all-members-title": "فريق العمل",
    "empty-title": "لم نجد أحداً!",
    "empty-subtitle": "تأكد من كتابة الاسم بشكل صحيح أو جرب تغيير الفلتر.",
    "footer-text": "لوحة أعياد ميلاد الموظفين للمكتب. صُنع بكل حب ❤️",
    "modal-title-add": "إضافة زميل جديد",
    "modal-title-edit": "تعديل بيانات الزميل",
    "btn-cancel": "إلغاء",
    "btn-save": "حفظ البيانات",
    "import-modal-title": "استيراد بيانات الأعضاء",
    "import-description": "قم برفع ملف `members.json` المُصدّر مسبقاً لتحديث قائمة الموظفين بالمكتب.",
    "upload-drag-text": "اسحب ملف JSON هنا أو اضغط للاختيار",
    "search-placeholder": "ابحث باسم الزميل أو القسم...",
    "export-title": "تصدير البيانات",
    "import-title": "استيراد البيانات",
    "days-countdown-today": "اليوم 🎂",
    "days-countdown-1": "غداً 🎈",
    "days-countdown-2": "بعد يومين 🎁",
    "days-countdown-plural": "متبقي {days} أيام",
    "age-years": "{age} سنة",
    "zodiac-aries": "الحمل",
    "zodiac-taurus": "الثور",
    "zodiac-gemini": "الجوزاء",
    "zodiac-cancer": "السرطان",
    "zodiac-leo": "الأسد",
    "zodiac-virgo": "العذراء",
    "zodiac-libra": "الميزان",
    "zodiac-scorpio": "العقرب",
    "zodiac-sagittarius": "القوس",
    "zodiac-capricorn": "الجدي",
    "zodiac-aquarius": "الدلو",
    "zodiac-pisces": "الحوت",
    "confirm-delete": "هل أنت متأكد من رغبتك في حذف هذا الموظف؟",
    "filter-active": "فلتر نشط",
    "import-success": "تم استيراد البيانات بنجاح!",
    "import-fail": "الملف غير صالح. تأكد من أن بنية الملف مطابقة لملف members.json."
  },
  en: {
    "app-title": "Our Team's Birthdays",
    "app-subtitle": "Track and celebrate special days of our 16 colleagues",
    "add-new-btn": "Add New Colleague",
    "birthday-today": "Celebrating Today! 🎉",
    "celebrate-button": "Send Wishes & Celebrate!",
    "upcoming-title": "Upcoming Events",
    "distribution-title": "Monthly Birthday Distribution",
    "month-all": "All Months",
    "month-0": "January",
    "month-1": "February",
    "month-2": "March",
    "month-3": "April",
    "month-4": "May",
    "month-5": "June",
    "month-6": "July",
    "month-7": "August",
    "month-8": "September",
    "month-9": "October",
    "month-10": "November",
    "month-11": "December",
    "sort-countdown": "Sort by Countdown",
    "sort-name": "Sort Alphabetically",
    "sort-age": "Sort by Age (Oldest)",
    "all-members-title": "Our Team",
    "empty-title": "No members found!",
    "empty-subtitle": "Check spelling or adjust active filters.",
    "footer-text": "Office Birthday Tracker Dashboard. Made with Love ❤️",
    "modal-title-add": "Add New Colleague",
    "modal-title-edit": "Edit Colleague Details",
    "btn-cancel": "Cancel",
    "btn-save": "Save Changes",
    "import-modal-title": "Import Member Data",
    "import-description": "Upload a previously exported `members.json` file to restore or sync list data.",
    "upload-drag-text": "Drag & drop JSON file here or click to browse",
    "search-placeholder": "Search by colleague's name or department...",
    "export-title": "Export Data",
    "import-title": "Import Data",
    "days-countdown-today": "Today 🎂",
    "days-countdown-1": "Tomorrow 🎈",
    "days-countdown-2": "In 2 days 🎁",
    "days-countdown-plural": "{days} days left",
    "age-years": "{age} yrs old",
    "zodiac-aries": "Aries",
    "zodiac-taurus": "Taurus",
    "zodiac-gemini": "Gemini",
    "zodiac-cancer": "Cancer",
    "zodiac-leo": "Leo",
    "zodiac-virgo": "Virgo",
    "zodiac-libra": "Libra",
    "zodiac-scorpio": "Scorpio",
    "zodiac-sagittarius": "Sagittarius",
    "zodiac-capricorn": "Capricorn",
    "zodiac-aquarius": "Aquarius",
    "zodiac-pisces": "Pisces",
    "confirm-delete": "Are you sure you want to delete this colleague?",
    "filter-active": "Filter active",
    "import-success": "Data imported successfully!",
    "import-fail": "Invalid file format. Make sure it matches members.json structure."
  }
};

// Zodiac helper mappings
const zodiacSigns = [
  { nameKey: "zodiac-capricorn", icon: "♑", start: "12-22", end: "01-19" },
  { nameKey: "zodiac-aquarius", icon: "♒", start: "01-20", end: "02-18" },
  { nameKey: "zodiac-pisces", icon: "♓", start: "02-19", end: "03-20" },
  { nameKey: "zodiac-aries", icon: "♈", start: "03-21", end: "04-19" },
  { nameKey: "zodiac-taurus", icon: "♉", start: "04-20", end: "05-20" },
  { nameKey: "zodiac-gemini", icon: "♊", start: "05-21", end: "06-20" },
  { nameKey: "zodiac-cancer", icon: "♋", start: "06-21", end: "07-22" },
  { nameKey: "zodiac-leo", icon: "♌", start: "07-23", end: "08-22" },
  { nameKey: "zodiac-virgo", icon: "♍", start: "08-23", end: "09-22" },
  { nameKey: "zodiac-libra", icon: "♎", start: "09-23", end: "10-22" },
  { nameKey: "zodiac-scorpio", icon: "♏", start: "10-23", end: "11-21" },
  { nameKey: "zodiac-sagittarius", icon: "♐", start: "11-22", end: "12-21" }
];

// Fallback initial database containing exactly 16 people
// In case the fetched members.json fails to load.
const initialMembersFallback = [
  {"id":"1","name":{"en":"Iman Yousef","ar":"إيمان يوسف"},"dob":"1994-06-23","department":{"en":"Human Resources","ar":"الموارد البشرية"},"avatar":"IY"},
  {"id":"2","name":{"en":"Ahmed Ali","ar":"أحمد علي"},"dob":"1991-06-25","department":{"en":"Software Engineering","ar":"هندسة البرمجيات"},"avatar":"AA"},
  {"id":"3","name":{"en":"Sarah Hassan","ar":"سارة حسن"},"dob":"1996-07-02","department":{"en":"UI/UX Design","ar":"تصميم تجربة المستخدم"},"avatar":"SH"},
  {"id":"4","name":{"en":"Omar Farouk","ar":"عمر فاروق"},"dob":"1989-01-15","department":{"en":"Software Engineering","ar":"هندسة البرمجيات"},"avatar":"OF"},
  {"id":"5","name":{"en":"Nour El-Din","ar":"نور الدين"},"dob":"1993-02-18","department":{"en":"Marketing","ar":"التسويق"},"avatar":"NE"},
  {"id":"6","name":{"en":"Yasmin Kamel","ar":"ياسمين كامل"},"dob":"1995-03-09","department":{"en":"Product Management","ar":"إدارة المنتجات"},"avatar":"YK"},
  {"id":"7","name":{"en":"Mustafa Mahmoud","ar":"مصطفى محمود"},"dob":"1988-04-12","department":{"en":"DevOps","ar":"العمليات السحابية"},"avatar":"MM"},
  {"id":"8","name":{"en":"Laila Shaker","ar":"ليلى شاكر"},"dob":"1997-05-30","department":{"en":"QA Testing","ar":"اختبار الجودة"},"avatar":"LS"},
  {"id":"9","name":{"en":"Sherif Galal","ar":"شريف جلال"},"dob":"1990-08-24","department":{"en":"Software Engineering","ar":"هندسة البرمجيات"},"avatar":"SG"},
  {"id":"10","name":{"en":"Farida Nabil","ar":"فريدة نبيل"},"dob":"1994-09-05","department":{"en":"UI/UX Design","ar":"تصميم تجربة المستخدم"},"avatar":"FN"},
  {"id":"11","name":{"en":"Kareem Abdel-Aziz","ar":"كريم عبد العزيز"},"dob":"1992-10-11","department":{"en":"Finance","ar":"المالية"},"avatar":"KA"},
  {"id":"12","name":{"en":"Hana Salem","ar":"هنا سالم"},"dob":"1998-11-20","department":{"en":"Customer Support","ar":"خدمة العملاء"},"avatar":"HS"},
  {"id":"13","name":{"en":"Tarek Fahmy","ar":"طارق فهمي"},"dob":"1987-12-05","department":{"en":"Sales","ar":"المبيعات"},"avatar":"TF"},
  {"id":"14","name":{"en":"Dina Mansour","ar":"دينا منصور"},"dob":"1995-12-14","department":{"en":"Human Resources","ar":"الموارد البشرية"},"avatar":"DM"},
  {"id":"15","name":{"en":"Mohamed Ibrahim","ar":"محمد إبراهيم"},"dob":"1991-07-15","department":{"en":"Software Engineering","ar":"هندسة البرمجيات"},"avatar":"MI"},
  {"id":"16","name":{"en":"Rania Youssef","ar":"رانيا يوسف"},"dob":"1993-09-30","department":{"en":"Marketing","ar":"التسويق"},"avatar":"RY"}
];

// ==========================================
// FIREBASE CONFIGURATION & INITIALIZATION
// ==========================================
const firebaseConfig = {
  apiKey: "AIzaSyBrRNK4oyOVDE-mVdVId37RVT-4LtS8o14",
  authDomain: "team-birthday-fb1a8.firebaseapp.com",
  projectId: "team-birthday-fb1a8",
  storageBucket: "team-birthday-fb1a8.firebasestorage.app",
  messagingSenderId: "168405804715",
  appId: "1:168405804715:web:270a35ee527873e50e79ee",
  measurementId: "G-73S419F909",
  databaseURL: "https://team-birthday-fb1a8-default-rtdb.firebaseio.com"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// ==========================================
// STATE MANAGEMENT
// ==========================================
let currentLang = 'ar';
let members = [];

// ==========================================
// INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  initLanguage();
  loadData();
  setupEventListeners();
  updateCurrentDateDisplay();
  
  // Confetti initialization
  initConfetti();
  
  // Recalculate/refresh icons
  lucide.createIcons();
});

// ==========================================
// DATE & CALCULATION LOGIC
// ==========================================
function updateCurrentDateDisplay() {
  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const langTag = currentLang === 'ar' ? 'ar-EG' : 'en-US';
  document.getElementById('current-date-text').textContent = now.toLocaleDateString(langTag, options);
  document.getElementById('current-year').textContent = now.getFullYear();
}

/**
 * Calculates countdown and age for a DOB string (YYYY-MM-DD)
 */
function calculateBirthdayMetrics(dobString) {
  const dob = new Date(dobString);
  const today = new Date();
  
  // Reset time components for clean day calculations
  today.setHours(0, 0, 0, 0);
  
  // Calculate current age
  let age = today.getFullYear() - dob.getFullYear();
  
  // Set up birthday this year
  const birthdayThisYear = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
  
  // If birthday already passed this year, the next birthday is next year
  let nextBirthday = new Date(birthdayThisYear);
  if (today > birthdayThisYear) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  } else {
    // If today is or before the birthday, this year's age applies
    // However, if today is exact birthday, age calculation stands
  }
  
  // Adjustment if the birthday hasn't happened yet *this calendar year*
  if (today < birthdayThisYear) {
    age--;
  }

  // Calculate days left
  const diffTime = nextBirthday - today;
  const daysLeft = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) % 365;
  
  return {
    age: Math.max(0, age),
    daysLeft: daysLeft,
    isToday: dob.getMonth() === today.getMonth() && dob.getDate() === today.getDate()
  };
}

/**
 * Get zodiac sign from month & day
 */
function getZodiacSign(dobString) {
  const dob = new Date(dobString);
  const month = dob.getMonth() + 1;
  const day = dob.getDate();
  const dateStr = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  
  // Capricorn wrap-around check
  if (dateStr >= "12-22" || dateStr <= "01-19") {
    return zodiacSigns[0]; // Capricorn
  }
  
  const match = zodiacSigns.find(z => dateStr >= z.start && dateStr <= z.end);
  return match || zodiacSigns[0];
}

// ==========================================
// DATA CORE & SYNC
// ==========================================
const dbRef = database.ref('members');

function loadData() {
  // Listen to Firebase Realtime Database for updates in real-time
  dbRef.on('value', (snapshot) => {
    const data = snapshot.val();
    if (data && data.length > 0) {
      members = data;
      // Sync locally as fallback
      localStorage.setItem('office_members', JSON.stringify(members));
      renderDashboard();
    } else {
      // Database is empty (first load), seed it with default 16 members
      console.log("Firebase database is empty. Seeding defaults...");
      seedDefaultData();
    }
  }, (error) => {
    console.error("Firebase Database read failed: ", error);
    // If permission denied or firebase not configured, load locally
    loadLocalDataFallback();
  });
}

function seedDefaultData() {
  const localData = localStorage.getItem('office_members');
  if (localData) {
    members = JSON.parse(localData);
  } else {
    members = initialMembersFallback;
  }
  
  dbRef.set(members)
    .then(() => {
      console.log("Successfully seeded Firebase database.");
      renderDashboard();
    })
    .catch(err => {
      console.error("Failed to seed Firebase:", err);
      renderDashboard();
    });
}

function loadLocalDataFallback() {
  const localData = localStorage.getItem('office_members');
  if (localData) {
    members = JSON.parse(localData);
    renderDashboard();
  } else {
    members = initialMembersFallback;
    renderDashboard();
  }
}

function saveToLocalStorage() {
  // Write to Firebase database instead. This triggers the 'on' listener automatically for everyone.
  dbRef.set(members)
    .then(() => {
      console.log("Data synced to Firebase successfully.");
    })
    .catch(err => {
      console.error("Failed to sync to Firebase:", err);
      // Fallback: save locally
      localStorage.setItem('office_members', JSON.stringify(members));
    });
}

// ==========================================
// TRANSLATION SYSTEM
// ==========================================
function initLanguage() {
  const savedLang = localStorage.getItem('app_lang');
  if (savedLang) {
    currentLang = savedLang;
  } else {
    currentLang = 'ar'; // Default Arabic
  }
  applyLanguage();
}

function toggleLanguage() {
  currentLang = currentLang === 'ar' ? 'en' : 'ar';
  localStorage.setItem('app_lang', currentLang);
  applyLanguage();
  updateCurrentDateDisplay();
  renderDashboard();
}

function applyLanguage() {
  const html = document.documentElement;
  html.setAttribute('lang', currentLang);
  html.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
  
  // Set toggle button text
  const langBtnText = document.getElementById('lang-btn-text');
  langBtnText.textContent = currentLang === 'ar' ? 'English' : 'العربية';
  
  // Translate nodes with data-i18n attributes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[currentLang][key]) {
      el.textContent = translations[currentLang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[currentLang][key]) {
      el.setAttribute('placeholder', translations[currentLang][key]);
    }
  });

  // Translate titles
  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    if (translations[currentLang][key]) {
      el.setAttribute('title', translations[currentLang][key]);
    }
  });

  // Page title update
  document.getElementById('page-title').textContent = currentLang === 'ar' 
    ? "لوحة أعياد ميلاد المكتب | Office Birthdays"
    : "Office Birthdays Tracker | لوحة أعياد ميلاد المكتب";
}

function getTranslation(key, variables = {}) {
  let val = translations[currentLang][key] || key;
  for (const [vKey, vVal] of Object.entries(variables)) {
    val = val.replace(`{${vKey}}`, vVal);
  }
  return val;
}

// ==========================================
// RENDER VIEWS
// ==========================================
function renderDashboard() {
  const searchVal = document.getElementById('search-input').value.toLowerCase().trim();
  const monthVal = document.getElementById('month-filter').value;
  const sortVal = document.getElementById('sort-filter').value;
  
  // 1. Calculate birthday metrics on all members
  const calculatedMembers = members.map(m => {
    const metrics = calculateBirthdayMetrics(m.dob);
    const zodiac = getZodiacSign(m.dob);
    return { ...m, ...metrics, zodiac };
  });
  
  // 2. Identify Celebrations Today
  const todayCelebrants = calculatedMembers.filter(m => m.isToday);
  renderTodayBanner(todayCelebrants);
  
  // 3. Filter members list
  let filtered = calculatedMembers;
  
  // Filter pill trigger
  const filterPill = document.getElementById('filters-status-pill');
  if (searchVal !== "" || monthVal !== "all") {
    filterPill.classList.remove('hidden');
    document.getElementById('filters-status-text').textContent = getTranslation('filter-active');
  } else {
    filterPill.classList.add('hidden');
  }
  
  if (searchVal !== "") {
    filtered = filtered.filter(m => 
      m.name[currentLang].toLowerCase().includes(searchVal) ||
      m.department[currentLang].toLowerCase().includes(searchVal)
    );
  }
  
  if (monthVal !== "all") {
    const monthIndex = parseInt(monthVal);
    filtered = filtered.filter(m => {
      const mDate = new Date(m.dob);
      return mDate.getMonth() === monthIndex;
    });
  }
  
  // 4. Sort members list
  if (sortVal === "countdown") {
    filtered.sort((a, b) => a.daysLeft - b.daysLeft);
  } else if (sortVal === "name") {
    filtered.sort((a, b) => a.name[currentLang].localeCompare(b.name[currentLang]));
  } else if (sortVal === "age") {
    filtered.sort((a, b) => b.age - a.age || new Date(a.dob) - new Date(b.dob));
  }
  
  // 5. Render Main Grid
  renderMainGrid(filtered);
  
  // 6. Render Upcoming List
  // Sorting total roster (not filtered) by daysLeft to get true upcoming events
  const trueUpcoming = calculatedMembers
    .filter(m => !m.isToday) // Don't put today's celebrant in upcoming
    .sort((a, b) => a.daysLeft - b.daysLeft)
    .slice(0, 4); // Limit to top 4
    
  renderUpcomingPanel(trueUpcoming);
  
  // 7. Render monthly distribution stats
  renderMonthlyStats(calculatedMembers);
  
  // Refresh Lucide Icons
  lucide.createIcons();
}

/**
 * Renders the Today Celebration banner if anyone's birthday matches current date
 */
function renderTodayBanner(celebrants) {
  const banner = document.getElementById('today-banner');
  if (celebrants.length === 0) {
    banner.classList.add('hidden');
    return;
  }
  
  banner.classList.remove('hidden');
  const person = celebrants[0]; // If multiple, show the first one
  
  // Set avatar initials & background based on code
  const avatarEl = document.getElementById('today-avatar');
  avatarEl.textContent = person.avatar || person.name[currentLang].substring(0, 2).toUpperCase();
  
  // Set background index
  const bgIndex = person.name.en.charCodeAt(0) % 12;
  avatarEl.className = `celebrant-avatar avatar-bg-${bgIndex}`;
  
  // Details
  document.getElementById('today-name').textContent = person.name[currentLang];
  
  const ageStr = getTranslation('age-years', { age: person.age });
  document.getElementById('today-dept-age').textContent = `${person.department[currentLang]} • ${ageStr}`;
  
  // Zodiac
  document.getElementById('today-zodiac-icon').textContent = person.zodiac.icon;
  document.getElementById('today-zodiac-name').textContent = getTranslation(person.zodiac.nameKey);
  
  // Auto-launch confetti occasionally on load if birthday
  if (!window.hasCelebratedToday) {
    window.hasCelebratedToday = true;
    setTimeout(() => {
      triggerConfettiExplosion();
    }, 1000);
  }
}

/**
 * Renders main grid of filtered members
 */
function renderMainGrid(list) {
  const container = document.getElementById('members-grid-container');
  const emptyState = document.getElementById('empty-state');
  
  container.innerHTML = '';
  
  if (list.length === 0) {
    emptyState.classList.remove('hidden');
    return;
  }
  
  emptyState.classList.add('hidden');
  
  // Update header text to reflect current filter length
  document.querySelector('.section-title-bar h2').textContent = 
    `${getTranslation('all-members-title')} (${list.length})`;
  
  list.forEach(m => {
    const card = document.createElement('div');
    card.className = 'member-card';
    card.setAttribute('data-id', m.id);
    
    // Background based on name character hash
    const bgIndex = m.name.en.charCodeAt(0) % 12;
    const initialText = m.avatar || m.name[currentLang].substring(0, 2).toUpperCase();
    
    // Formatting dob local
    const dobObj = new Date(m.dob);
    const dobOptions = { month: 'short', day: 'numeric' };
    const formattedBirthday = dobObj.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', dobOptions);
    
    // Countdown text logic
    let countdownClass = 'far';
    let countdownText = '';
    
    if (m.isToday) {
      countdownClass = 'today';
      countdownText = getTranslation('days-countdown-today');
    } else if (m.daysLeft === 1) {
      countdownClass = 'upcoming';
      countdownText = getTranslation('days-countdown-1');
    } else if (m.daysLeft === 2) {
      countdownClass = 'upcoming';
      countdownText = getTranslation('days-countdown-2');
    } else if (m.daysLeft <= 15) {
      countdownClass = 'upcoming';
      countdownText = getTranslation('days-countdown-plural', { days: m.daysLeft });
    } else {
      countdownText = getTranslation('days-countdown-plural', { days: m.daysLeft });
    }
    
    // Zodiac mapping
    const zodiacName = getTranslation(m.zodiac.nameKey);
    const ageLocalized = getTranslation('age-years', { age: m.age });
    
    card.innerHTML = `
      <!-- Actions hover -->
      <div class="card-actions">
        <button class="btn-action-icon edit-action" title="${getTranslation('modal-title-edit')}" onclick="openEditModal('${m.id}')">
          <i data-lucide="pencil"></i>
        </button>
        <button class="btn-action-icon delete-action" title="حذف" onclick="deleteMember('${m.id}')">
          <i data-lucide="trash-2"></i>
        </button>
      </div>
      
      <!-- Card Body -->
      <div class="card-body">
        <div class="avatar-wrapper">
          <div class="member-avatar avatar-bg-${bgIndex}">${initialText}</div>
          <span class="zodiac-indicator" title="${zodiacName}">${m.zodiac.icon}</span>
        </div>
        <h4 class="member-name">${m.name[currentLang]}</h4>
        <span class="member-dept">${m.department[currentLang]}</span>
        
        <div class="card-details">
          <div class="detail-item">
            <span class="detail-label" data-i18n="birthday-label">${currentLang === 'ar' ? 'تاريخ الميلاد' : 'Birthday'}</span>
            <span class="detail-val">${formattedBirthday}</span>
          </div>
          <div class="detail-item">
            <span class="detail-label" data-i18n="age-label">${currentLang === 'ar' ? 'العمر الحالي' : 'Current Age'}</span>
            <span class="detail-val">${ageLocalized}</span>
          </div>
        </div>
        
        <div class="countdown-banner ${countdownClass}">
          <i data-lucide="gift"></i>
          <span>${countdownText}</span>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

/**
 * Renders the compact list of upcoming birthdays
 */
function renderUpcomingPanel(list) {
  const container = document.getElementById('upcoming-list-container');
  document.getElementById('upcoming-count').textContent = list.length;
  
  container.innerHTML = '';
  
  if (list.length === 0) {
    container.innerHTML = `<div class="loading-placeholder">${currentLang === 'ar' ? 'لا توجد مناسبات قادمة' : 'No upcoming birthdays'}</div>`;
    return;
  }
  
  list.forEach(m => {
    const item = document.createElement('div');
    item.className = 'upcoming-item';
    
    const bgIndex = m.name.en.charCodeAt(0) % 12;
    const initialText = m.avatar || m.name[currentLang].substring(0, 2).toUpperCase();
    
    const isSoon = m.daysLeft <= 10;
    const daysText = isSoon 
      ? getTranslation('days-countdown-plural', { days: m.daysLeft }) 
      : getTranslation('days-countdown-plural', { days: m.daysLeft });
      
    // DOB parsing for displaying date month
    const dobObj = new Date(m.dob);
    const dobOptions = { month: 'short', day: 'numeric' };
    const dobFormatted = dobObj.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', dobOptions);

    item.innerHTML = `
      <div class="upcoming-left">
        <div class="upcoming-avatar avatar-bg-${bgIndex}">${initialText}</div>
        <div class="upcoming-info">
          <h4>${m.name[currentLang]}</h4>
          <p>${m.department[currentLang]}</p>
        </div>
      </div>
      <div class="upcoming-right">
        <span class="days-left-badge ${isSoon ? 'soon' : ''}">${m.daysLeft === 1 ? getTranslation('days-countdown-1') : daysText}</span>
        <span class="upcoming-date">${dobFormatted}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

/**
 * Renders the bar stats distribution of birthdays across months
 */
function renderMonthlyStats(allList) {
  const container = document.getElementById('monthly-stats-container');
  container.innerHTML = '';
  
  // Calculate distribution
  const counts = Array(12).fill(0);
  allList.forEach(m => {
    const mDate = new Date(m.dob);
    counts[mDate.getMonth()]++;
  });
  
  const maxCount = Math.max(...counts, 1); // Avoid division by zero
  const currentMonthIndex = new Date().getMonth();
  
  const arabicMonthInitials = ["ينا", "فبر", "مار", "أبر", "ماي", "يون", "يول", "أغس", "سبت", "أكت", "نوف", "ديس"];
  const englishMonthInitials = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthLabels = currentLang === 'ar' ? arabicMonthInitials : englishMonthInitials;
  
  for (let i = 0; i < 12; i++) {
    const col = document.createElement('div');
    col.className = 'month-bar-col';
    
    const pct = (counts[i] / maxCount) * 100;
    const isActive = i === currentMonthIndex;
    
    col.innerHTML = `
      <div class="month-bar-track" title="${counts[i]} birthdays">
        <div class="month-bar-count">${counts[i]}</div>
        <div class="month-bar-fill ${isActive ? 'active-month' : ''}" style="height: ${pct}%"></div>
      </div>
      <span class="month-label" title="${getTranslation(`month-${i}`)}">${monthLabels[i]}</span>
    `;
    container.appendChild(col);
  }
}

// ==========================================
// EVENT LISTENERS & MODALS
// ==========================================
function setupEventListeners() {
  // Lang toggle
  document.getElementById('lang-toggle-btn').addEventListener('click', toggleLanguage);
  
  // Search
  document.getElementById('search-input').addEventListener('input', renderDashboard);
  
  // Filters
  document.getElementById('month-filter').addEventListener('change', renderDashboard);
  document.getElementById('sort-filter').addEventListener('change', renderDashboard);
  
  // Clear filters
  document.getElementById('clear-filters-btn').addEventListener('click', () => {
    document.getElementById('search-input').value = '';
    document.getElementById('month-filter').value = 'all';
    renderDashboard();
  });
  
  // Add member modal open
  document.getElementById('add-member-btn').addEventListener('click', () => {
    openAddModal();
  });
  
  // Cancel button modal
  document.getElementById('modal-cancel-btn').addEventListener('click', closeModal);
  document.getElementById('modal-close-btn').addEventListener('click', closeModal);
  
  // Submit Form
  document.getElementById('member-form').addEventListener('submit', handleFormSubmit);
  
  // Celebrate Confetti click
  document.getElementById('celebrate-btn').addEventListener('click', () => {
    triggerConfettiExplosion();
  });
  
  // Import/Export
  document.getElementById('export-btn').addEventListener('click', exportData);
  document.getElementById('import-btn').addEventListener('click', openImportModal);
  document.getElementById('import-modal-close-btn').addEventListener('click', closeImportModal);
  document.getElementById('import-cancel-btn').addEventListener('click', closeImportModal);
  
  // Drag and Drop files
  const dropZone = document.getElementById('file-drop-zone');
  const fileInput = document.getElementById('file-input');
  
  dropZone.addEventListener('click', () => fileInput.click());
  
  fileInput.addEventListener('change', handleFileSelect);
  
  dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });
  
  dropZone.addEventListener('dragleave', () => {
    dropZone.classList.remove('dragover');
  });
  
  dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    if (e.dataTransfer.files.length > 0) {
      processImportFile(e.dataTransfer.files[0]);
    }
  });
}

// Modal actions
function openAddModal() {
  document.getElementById('modal-title').textContent = getTranslation('modal-title-add');
  document.getElementById('member-id').value = '';
  document.getElementById('member-form').reset();
  
  // Set date default max to today (can't be born in the future)
  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('member-dob').setAttribute('max', todayStr);
  
  document.getElementById('member-modal').classList.remove('hidden');
}

window.openEditModal = function(id) {
  const m = members.find(item => item.id === id);
  if (!m) return;
  
  document.getElementById('modal-title').textContent = getTranslation('modal-title-edit');
  document.getElementById('member-id').value = m.id;
  document.getElementById('member-name-en').value = m.name.en;
  document.getElementById('member-name-ar').value = m.name.ar;
  document.getElementById('member-dob').value = m.dob;
  document.getElementById('member-avatar').value = m.avatar || '';
  document.getElementById('member-dept-en').value = m.department.en;
  document.getElementById('member-dept-ar').value = m.department.ar;
  
  const todayStr = new Date().toISOString().split('T')[0];
  document.getElementById('member-dob').setAttribute('max', todayStr);
  
  document.getElementById('member-modal').classList.remove('hidden');
}

function closeModal() {
  document.getElementById('member-modal').classList.add('hidden');
}

function handleFormSubmit(e) {
  e.preventDefault();
  
  const id = document.getElementById('member-id').value;
  const nameEn = document.getElementById('member-name-en').value.trim();
  const nameAr = document.getElementById('member-name-ar').value.trim();
  const dob = document.getElementById('member-dob').value;
  const avatar = document.getElementById('member-avatar').value.trim().toUpperCase();
  const deptEn = document.getElementById('member-dept-en').value.trim();
  const deptAr = document.getElementById('member-dept-ar').value.trim();
  
  // Generate avatar initials if empty
  const cleanAvatar = avatar || nameEn.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  if (id) {
    // Edit existing
    const idx = members.findIndex(item => item.id === id);
    if (idx !== -1) {
      members[idx] = {
        id,
        name: { en: nameEn, ar: nameAr },
        dob,
        department: { en: deptEn, ar: deptAr },
        avatar: cleanAvatar
      };
    }
  } else {
    // Add new
    const newId = (Math.max(...members.map(item => parseInt(item.id)), 0) + 1).toString();
    members.push({
      id: newId,
      name: { en: nameEn, ar: nameAr },
      dob,
      department: { en: deptEn, ar: deptAr },
      avatar: cleanAvatar
    });
  }
  
  saveToLocalStorage();
  renderDashboard();
  closeModal();
}

window.deleteMember = function(id) {
  if (confirm(getTranslation('confirm-delete'))) {
    members = members.filter(item => item.id !== id);
    saveToLocalStorage();
    renderDashboard();
  }
}

// ==========================================
// DATA IMPORT / EXPORT
// ==========================================
function exportData() {
  const jsonStr = JSON.stringify(members, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  
  const a = document.createElement('a');
  a.href = url;
  a.download = 'members.json';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function openImportModal() {
  document.getElementById('import-error').classList.add('hidden');
  document.getElementById('import-modal').classList.remove('hidden');
}

function closeImportModal() {
  document.getElementById('import-modal').classList.add('hidden');
}

function handleFileSelect(e) {
  if (e.target.files.length > 0) {
    processImportFile(e.target.files[0]);
  }
}

function processImportFile(file) {
  const reader = new FileReader();
  const errorBanner = document.getElementById('import-error');
  
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      
      // Structure Validation
      if (!Array.isArray(data)) throw new Error("Root is not array");
      
      const isValid = data.every(item => 
        item.id && 
        item.name && item.name.en && item.name.ar && 
        item.dob && 
        item.department && item.department.en && item.department.ar
      );
      
      if (!isValid) throw new Error("Missing required fields");
      
      members = data;
      saveToLocalStorage();
      renderDashboard();
      closeImportModal();
      alert(getTranslation('import-success'));
    } catch (err) {
      errorBanner.textContent = getTranslation('import-fail');
      errorBanner.classList.remove('hidden');
      console.error("Import error:", err);
    }
  };
  reader.readAsText(file);
}

// ==========================================
// CONFETTI PARTICLE SYSTEM (PURE JS)
// ==========================================
let canvas, ctx;
let particles = [];
const confettiColors = ['#ff4a86', '#8b5cf6', '#14b8a6', '#3b82f6', '#f59e0b', '#ec4899', '#10b981'];

function initConfetti() {
  canvas = document.getElementById('confetti-canvas');
  ctx = canvas.getContext('2d');
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Animation frame loop
  requestAnimationFrame(updateConfetti);
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class ConfettiParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 6;
    this.color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    this.speedX = Math.random() * 8 - 4;
    this.speedY = Math.random() * -12 - 5; // Launch upward
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 10 - 5;
    this.gravity = 0.35;
    this.opacity = 1;
    this.opacitySpeed = Math.random() * 0.01 + 0.005;
  }
  
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += this.gravity;
    this.rotation += this.rotationSpeed;
    
    // Slow fadeout when falling low or after a time
    if (this.speedY > 0) {
      this.opacity -= this.opacitySpeed;
    }
  }
  
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation * Math.PI / 180);
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    
    // Draw rectangles & circles alternating
    if (this.size % 2 === 0) {
      ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
    } else {
      ctx.beginPath();
      ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  }
}

function updateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].draw();
    
    // Remove dead particles
    if (particles[i].opacity <= 0 || particles[i].y > canvas.height) {
      particles.splice(i, 1);
    }
  }
  
  requestAnimationFrame(updateConfetti);
}

function triggerConfettiExplosion() {
  const xLeft = canvas.width * 0.25;
  const xRight = canvas.width * 0.75;
  const yLaunch = canvas.height * 0.85;
  
  // Spawn from left launcher
  for (let i = 0; i < 70; i++) {
    const p = new ConfettiParticle(xLeft, yLaunch);
    p.speedX = Math.random() * 8; // Shoot rightward
    particles.push(p);
  }
  
  // Spawn from right launcher
  for (let i = 0; i < 70; i++) {
    const p = new ConfettiParticle(xRight, yLaunch);
    p.speedX = Math.random() * -8; // Shoot leftward
    particles.push(p);
  }
  
  // Spawn a few from mouse center if clicked
  const xCenter = canvas.width / 2;
  for (let i = 0; i < 60; i++) {
    const p = new ConfettiParticle(xCenter, canvas.height * 0.4);
    p.speedY = Math.random() * -10 - 2;
    p.speedX = Math.random() * 12 - 6;
    particles.push(p);
  }
}

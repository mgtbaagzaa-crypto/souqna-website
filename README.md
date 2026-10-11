# موقع سوقنا | SOUQNA

موقع ثابت (HTML/CSS/JS) بلا خادم خلفي ولا قواعد بيانات، جاهز لـ GitHub Pages وCloudflare Pages.

## البنية
```
souqna/
├─ index.html      الصفحة الرئيسية + قسم التنزيل
├─ privacy.html    سياسة الخصوصية (مسودة)
├─ terms.html      شروط الاستخدام (مسودة)
├─ 404.html        صفحة الخطأ
├─ css/style.css   التنسيق (متغيرات الألوان في أعلاه)
├─ js/config.js    ← ملف الإعدادات الوحيد
├─ js/main.js      القائمة وربط الإعدادات
└─ assets/         الشعار والأيقونة
```

## الإعدادات
افتح `js/config.js` وضع: `version` و`apkSize` و`primaryUrl` (رابط Google Drive المباشر) و`backupUrl` و`contactEmail`... إلخ.
الحقول الفارغة تُخفى تلقائيًا، وتظهر رسالة «الرابط غير مفعّل» إن لم يوجد رابط تنزيل. لا تضع `googlePlayUrl` قبل نشر التطبيق فعليًا.

## التشغيل من Termux
```bash
pkg update -y && pkg install -y python unzip
cd ~/storage/downloads 2>/dev/null || cd ~
unzip souqna-website.zip && cd souqna
python -m http.server 8080
```
ثم افتح `http://localhost:8080` في المتصفح. (إن لم يوجد مجلد التنزيلات نفّذ مرة واحدة: `termux-setup-storage`)

## الرفع إلى GitHub
```bash
pkg install -y git
git config --global user.name "اسمك"
git config --global user.email "بريدك"
cd souqna
git init && git add . && git commit -m "Souqna website"
git branch -M main
git remote add origin https://github.com/USERNAME/souqna.git
git push -u origin main
```
(أنشئ المستودع أولًا من github.com، وعند طلب كلمة السر استخدم Personal Access Token.)

## النشر
- **GitHub Pages:** Settings ← Pages ← Source: `main` / `(root)` ← Save.
- **Cloudflare Pages:** Create project ← Connect to Git ← اترك أمر البناء فارغًا ومجلد الإخراج `/`.

## ملاحظات
- بعد النشر ضع رابط الموقع في `siteUrl`، واجعل رابط `og:image` في `index.html` مطلقًا (https://...) لتظهر المعاينة عند المشاركة.
- صفحتا الخصوصية والشروط مسودتان؛ راجعهما.
- ميزات مستقبلية (روابط فتح التطبيق، واجهة API للإعلانات عبر Supabase، Google Play) غير منفذة بعد؛ الحقول جاهزة في `config.js` فقط.

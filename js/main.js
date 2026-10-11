(function(){
  var C=window.SOUQNA_CONFIG||{};
  var $=function(s){return document.querySelector(s)};
  var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
  var head=$('.site-head'),btn=$('.burger');
  if(btn){
    btn.addEventListener('click',function(){var o=head.classList.toggle('nav-open');btn.setAttribute('aria-expanded',o)});
    $$('.menu a').forEach(function(a){a.addEventListener('click',function(){head.classList.remove('nav-open');btn.setAttribute('aria-expanded','false')})});
  }
  $$('[data-cfg]').forEach(function(el){
    var v=C[el.getAttribute('data-cfg')];
    if(v){el.textContent=v}else if(el.hasAttribute('data-hide-empty')){var p=el.closest('li');if(p)p.hidden=true}
  });
  var main=$('#dl-main'),back=$('#dl-back'),msg=$('#dl-msg');
  function setLink(a,u){if(!a)return;if(u){a.href=u;a.rel='noopener noreferrer';a.removeAttribute('aria-disabled')}else{a.removeAttribute('href');a.setAttribute('aria-disabled','true')}}
  setLink(main,C.primaryUrl);setLink(back,C.backupUrl);
  if(back&&!C.backupUrl)back.hidden=true;
  if(msg){
    if(!C.primaryUrl&&!C.backupUrl){msg.hidden=false;msg.textContent='رابط التنزيل غير مفعّل بعد. سنعلن عن توفر التطبيق عبر قنوات سوقنا الرسمية.'}
    else if(!C.primaryUrl){msg.hidden=false;msg.textContent='الرابط الأساسي غير متاح حاليًا، استخدم الرابط الاحتياطي.'}
    else if(C.backupUrl){msg.hidden=false;msg.textContent='إذا لم يعمل الرابط الأساسي، استخدم الرابط الاحتياطي.'}
  }
  var gp=$('#gp');if(gp&&C.googlePlayUrl){gp.href=C.googlePlayUrl;gp.hidden=false}
  var ct=$('#contact');
  if(ct){
    [['contactEmail','mailto:'],['contactTelegram',''],['contactFacebook','']].forEach(function(x){
      var v=C[x[0]];if(!v)return;
      var li=document.createElement('li'),a=document.createElement('a');
      a.href=x[1]+v;
      a.textContent=x[0]==='contactEmail'?v:(x[0]==='contactTelegram'?'تيليجرام':'فيسبوك');
      if(!x[1])a.rel='noopener noreferrer';
      li.appendChild(a);ct.appendChild(li);
    });
    if(!ct.children.length){var li=document.createElement('li');li.textContent='سيتم إضافة وسائل التواصل قريبًا.';ct.appendChild(li)}
  }
  var y=$('#year');if(y)y.textContent=new Date().getFullYear();
})();

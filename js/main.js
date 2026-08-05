/* =========================================================
   朱启东 · 个人简历作品集 — 交互逻辑
   ========================================================= */
(function(){
  "use strict";

  /* ---------- 作品数据 ---------- */
  var WORKS = [
    /* ---- AI 视频 ---- */
    {id:"v1", type:"video", cat:"video", title:"空白应答", tag:"轻科幻情绪短片",
     file:"assets/videos/1.空白应答.mp4", poster:"assets/posters/1.空白应答.webp",
     size:"约31MB · 720P",
     desc:"一个房间花了四十年把自己变成了人的身体。人离开后，它仍然在等。—— AI 情绪短片，约 135 秒，即梦 AI 图生视频。"},
    {id:"v2", type:"video", cat:"video", title:"人面巨树", tag:"暗黑奇幻短片",
     file:"assets/videos/2.人面巨树.mp4", poster:"assets/posters/2.人面巨树.webp",
     size:"约12MB · 720P",
     desc:"浓雾森林中，由万千亡魂面孔共生的人面巨树苏醒，开启轮回通道，指引林间亡魂完成一场充满宿命感的生命轮回仪式。—— 约 70 秒，即梦 AI 图生视频。"},
    {id:"v3", type:"video", cat:"video", title:"黑神话风格练习", tag:"风格练习",
     file:"assets/videos/3.黑神话风格练习.mp4", poster:"assets/posters/3.黑神话风格练习.webp",
     size:"约4MB · 720P", desc:"黑神话风格东方女祭司的风格练习片段。"},
    {id:"v4", type:"video", cat:"video", title:"巨兽风格练习", tag:"风格练习",
     file:"assets/videos/4.巨兽风格练习.mp4", poster:"assets/posters/4.巨兽风格练习.webp",
     size:"约2MB · 720P", desc:"巨兽题材的 AI 视频风格练习片段。"},
    {id:"v5", type:"video", cat:"video", title:"人物微表情练习 1", tag:"风格练习",
     file:"assets/videos/5.人物微表情练习1.mp4", poster:"assets/posters/5.人物微表情练习1.webp",
     size:"约3MB · 720P", desc:"人物微表情与表演细节的 AI 视频练习片段。"},
    {id:"v6", type:"video", cat:"video", title:"人物微表情练习 2", tag:"风格练习",
     file:"assets/videos/6.人物微表情练习2.mp4", poster:"assets/posters/6.人物微表情练习2.webp",
     size:"约3MB · 720P", desc:"人物微表情与表演细节的 AI 视频练习片段。"},
    {id:"v7", type:"video", cat:"video", title:"真人风格片段", tag:"风格练习",
     file:"assets/videos/7.真人风格片段.mp4", poster:"assets/posters/7.真人风格片段.webp",
     size:"约24MB · 720P", desc:"接近真人实拍质感的 AI 视频片段练习。"},

    /* ---- 剧本创作 ---- */
    {id:"s1", type:"script", cat:"script", title:"《人面巨树》分镜剧本", tag:"暗黑奇幻 · 约70秒",
     file:"assets/scripts/人面巨树_分镜剧本.docx", desc:"以树木为叙事主体的暗黑奇幻短片：万千亡魂面孔共生于巨树，沉默的视觉语言讲述生死轮回。风格参考宫崎英高黑暗奇幻 ×《潘神的迷宫》。"},
    {id:"s2", type:"script", cat:"script", title:"《空白应答》分镜剧本", tag:"轻科幻情绪 · 约135秒",
     file:"assets/scripts/空白应答_分镜剧本.docx", desc:"A24 系冷灰美学 × 粘土定格质感。AI 智能房间「知序」与逐渐失忆的老人之间长达四十年的沉默陪伴。AI 没有学会悲伤，它只是学会了继续。"},
    {id:"s3", type:"script", cat:"script", title:"《第4章》分镜剧本", tag:"末世超自然 · 5-6分钟",
     file:"assets/scripts/第4章_分镜剧本.docx", desc:"55 镜 12 场末世怪谈：地下避难所里，安塞尔用聆听心声的能力对抗「收走者」，救下孩子，却付出代价——收走者记住了他。"},

    /* ---- AI 概念与资产 ---- */
    {id:"a1", type:"image", cat:"asset", title:"东方女祭司 · 彩铅风格", src:"assets/images/ai/东方女祭司彩铅风格.webp"},
    {id:"a2", type:"image", cat:"asset", title:"全分镜参考思维图", src:"assets/images/ai/全分镜参考思维图.webp"},
    {id:"a3", type:"image", cat:"asset", title:"微表情分镜参考", src:"assets/images/ai/微表情分镜参考.webp"},
    {id:"a4", type:"image", cat:"asset", title:"空白应答 · 医院场景", src:"assets/images/ai/空白应答医院场景.webp"},
    {id:"a5", type:"image", cat:"asset", title:"空白应答 · 室内场景", src:"assets/images/ai/空白应答室内场景.webp"},
    {id:"a6", type:"image", cat:"asset", title:"空白应答 · 角色设定", src:"assets/images/ai/空白应答角色.webp"},
    {id:"a7", type:"image", cat:"asset", title:"蒙太奇 · 四季时间参考分镜", src:"assets/images/ai/蒙太奇四季时间参考分镜图.webp"},
    {id:"a8", type:"image", cat:"asset", title:"黑神话风格东方女祭司", src:"assets/images/ai/黑神话风格东方女祭司.webp"},

    /* ---- 视觉设计 ---- */
    {id:"d1", type:"image", cat:"design", title:"VI 设计 · 封面", src:"assets/images/design/封面.webp"},
    {id:"d2", type:"image", cat:"design", title:"VI 设计 · 目录", src:"assets/images/design/目录.webp"},
    {id:"d3", type:"image", cat:"design", title:"VI 设计 · 壹", src:"assets/images/design/壹.webp"},
    {id:"d4", type:"image", cat:"design", title:"VI 设计 · 贰", src:"assets/images/design/贰.webp"},
    {id:"d5", type:"image", cat:"design", title:"VI 设计 · 叁", src:"assets/images/design/叁.webp"},
    {id:"d6", type:"image", cat:"design", title:"VI 设计 · 肆", src:"assets/images/design/肆.webp"},
    {id:"d7", type:"image", cat:"design", title:"VI 设计 · 尾页", src:"assets/images/design/尾页.webp"},
    {id:"d8", type:"image", cat:"design", title:"VI 设计 · 总预览图", src:"assets/images/design/总预览图.webp"},
    {id:"d9", type:"image", cat:"design", title:"标志 · 设计思路", src:"assets/images/design/标志设计思路.webp"},
    {id:"d10", type:"image", cat:"design", title:"标志 · 比例规范", src:"assets/images/design/标志比例.webp"},
    {id:"d11", type:"image", cat:"design", title:"标志 · 标准化制图", src:"assets/images/design/标志标准化制图.webp"},
    {id:"d12", type:"image", cat:"design", title:"名片 · 横板规范", src:"assets/images/design/横板名片规范.webp"},
    {id:"d13", type:"image", cat:"design", title:"邀请函 · 规范", src:"assets/images/design/邀请函规范.webp"},
    {id:"d14", type:"image", cat:"design", title:"广告设计", src:"assets/images/design/广告设计.webp"},
    {id:"d15", type:"image", cat:"design", title:"文创手绘宣传海报", src:"assets/images/design/文创手绘.webp"}
  ];

  var CAT_LABEL = {video:"AI 视频", script:"剧本", asset:"概念资产", design:"视觉设计"};
  var IMAGE_WORKS = WORKS.filter(function(w){ return w.type === "image"; });

  /* ---------- DOM ---------- */
  var grid = document.getElementById("worksGrid");
  var filters = document.getElementById("filters");
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var vm = document.getElementById("videoModal");
  var vmVideo = document.getElementById("vmVideo");
  var vmTitle = document.getElementById("vmTitle");
  var vmTag = document.getElementById("vmTag");
  var vmDesc = document.getElementById("vmDesc");

  var currentFilter = "all";
  var lbIndex = -1;

  /* ---------- 渲染作品卡片 ---------- */
  function esc(s){
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  function cardHTML(w, i){
    if (w.type === "video"){
      return '<article class="work-card" data-index="'+i+'" data-open="video" tabindex="0" role="button" aria-label="播放视频 '+esc(w.title)+'">'+
        '<div class="work-thumb"><img loading="lazy" src="'+w.poster+'" alt="'+esc(w.title)+'"><span class="play-badge"></span></div>'+
        '<span class="work-cat">'+CAT_LABEL[w.cat]+'</span>'+
        '<div class="work-info"><h3 class="work-title">'+esc(w.title)+'<span class="tag">'+esc(w.tag)+'</span></h3>'+
        '<p class="work-sub">点击播放 · '+esc(w.size)+'</p></div></article>';
    }
    if (w.type === "script"){
      return '<article class="work-card" data-index="'+i+'" data-open="script" tabindex="0" role="button" aria-label="打开剧本 '+esc(w.title)+'">'+
        '<div class="work-thumb script-thumb"><div class="script-inner"><span class="script-doc">DOCX</span>'+
        '<h3 class="script-name">'+esc(w.title)+'</h3><span class="script-open">打开剧本 ↓</span></div></div>'+
        '<span class="work-cat">剧本创作</span>'+
        '<div class="work-info"><h3 class="work-title">'+esc(w.title)+'<span class="tag">'+esc(w.tag)+'</span></h3>'+
        '<p class="work-sub">'+esc(w.desc)+'</p></div></article>';
    }
    // image
    var label = (w.cat === "design") ? "视觉设计" : "概念资产";
    return '<article class="work-card" data-index="'+i+'" data-open="image" tabindex="0" role="button" aria-label="查看图片 '+esc(w.title)+'">'+
      '<div class="work-thumb"><img loading="lazy" src="'+w.src+'" alt="'+esc(w.title)+'"></div>'+
      '<span class="work-cat">'+label+'</span>'+
      '<div class="work-info"><h3 class="work-title">'+esc(w.title)+'</h3>'+
      '<p class="work-sub">点击查看大图</p></div></article>';
  }

  function render(){
    var list = WORKS.filter(function(w){ return currentFilter === "all" || w.cat === currentFilter; });
    grid.innerHTML = list.map(cardHTML).join("");
  }

  /* ---------- 筛选 ---------- */
  filters.addEventListener("click", function(e){
    var btn = e.target.closest(".filter-btn");
    if (!btn) return;
    filters.querySelectorAll(".filter-btn").forEach(function(b){ b.classList.remove("active"); });
    btn.classList.add("active");
    currentFilter = btn.getAttribute("data-filter");
    render();
    var y = document.getElementById("works").getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({top: y, behavior: "smooth"});
  });

  /* ---------- 卡片点击 ---------- */
  grid.addEventListener("click", function(e){
    var card = e.target.closest(".work-card");
    if (!card) return;
    openCard(card);
  });
  grid.addEventListener("keydown", function(e){
    if (e.key === "Enter" || e.key === " "){
      var card = e.target.closest(".work-card");
      if (card){ e.preventDefault(); openCard(card); }
    }
  });

  function openCard(card){
    var idx = parseInt(card.getAttribute("data-index"), 10);
    var w = WORKS[idx];
    if (!w) return;
    if (w.type === "video") openVideo(w);
    else if (w.type === "script") window.open(w.file, "_blank");
    else openLightboxAt(w);
  }

  /* ---------- 视频弹窗 ---------- */
  function openVideo(w){
    vmTitle.textContent = w.title;
    vmTag.textContent = w.tag;
    vmDesc.textContent = w.desc;
    vmVideo.src = w.file;
    vm.classList.add("open");
    vm.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    var p = vmVideo.play();
    if (p && p.catch) p.catch(function(){});
  }
  function closeVideo(){
    vm.classList.remove("open");
    vm.setAttribute("aria-hidden", "true");
    vmVideo.pause();
    vmVideo.removeAttribute("src");
    vmVideo.load();
    document.body.style.overflow = "";
  }
  vm.addEventListener("click", function(e){
    if (e.target.hasAttribute("data-close")) closeVideo();
  });
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape"){ if (vm.classList.contains("open")) closeVideo(); if (lightbox.classList.contains("open")) closeLightbox(); }
  });

  /* ---------- 图片灯箱 ---------- */
  function openLightboxAt(w){
    var i = IMAGE_WORKS.indexOf(w);
    if (i < 0) return;
    lbIndex = i;
    showLb();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }
  function showLb(){
    var w = IMAGE_WORKS[lbIndex];
    lbImg.src = w.src;
    lbImg.alt = w.title;
    lbCap.textContent = (lbIndex+1) + " / " + IMAGE_WORKS.length + " · " + w.title;
  }
  function stepLb(d){
    lbIndex = (lbIndex + d + IMAGE_WORKS.length) % IMAGE_WORKS.length;
    showLb();
  }
  function closeLightbox(){
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  document.getElementById("lbClose").addEventListener("click", closeLightbox);
  document.getElementById("lbPrev").addEventListener("click", function(){ stepLb(-1); });
  document.getElementById("lbNext").addEventListener("click", function(){ stepLb(1); });
  lightbox.addEventListener("click", function(e){
    if (e.target === lightbox) closeLightbox();
  });

  /* ---------- 导航 ---------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  function onScroll(){
    nav.classList.toggle("scrolled", window.pageYOffset > 40);
    document.getElementById("backTop").classList.toggle("show", window.pageYOffset > 600);
  }
  window.addEventListener("scroll", onScroll, {passive:true});
  onScroll();

  navToggle.addEventListener("click", function(){
    var open = navLinks.classList.toggle("open");
    navToggle.classList.toggle("open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.addEventListener("click", function(e){
    if (e.target.tagName === "A"){
      navLinks.classList.remove("open");
      navToggle.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
  document.getElementById("backTop").addEventListener("click", function(){
    window.scrollTo({top:0, behavior:"smooth"});
  });

  /* ---------- 复制 ---------- */
  window.copyText = function(btn){
    var text = btn.getAttribute("data-copy") || "";
    var done = function(){
      btn.textContent = "已复制";
      btn.classList.add("done");
      setTimeout(function(){
        btn.textContent = "复制";
        btn.classList.remove("done");
      }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(function(){ fallbackCopy(text, done); });
    } else {
      fallbackCopy(text, done);
    }
  };
  function fallbackCopy(text, done){
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); done(); } catch(e){}
    document.body.removeChild(ta);
  }

  /* ---------- 滚动显现 ---------- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, {threshold:.12});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });

  /* ---------- 初始化 ---------- */
  render();
})();
/* =====================================================================
   朱启东 · 作品集 v2 — 交互逻辑
   胶片条 / 作品筛选 / 灯箱 / 视频弹窗
   ===================================================================== */
(function(){
  "use strict";

  var REDUCED = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- 作品数据 ---------- */
  var WORKS = [
    /* ---- AI 视频 ---- */
    {id:"v1", type:"video", cat:"video", code:"REEL 01", title:"空白应答", tag:"轻科幻情绪短片",
     file:"assets/videos/1.空白应答.mp4", poster:"assets/posters/1.空白应答.webp",
     meta:"720P · 约31MB · 01:50",
     desc:"一个房间花了四十年把自己变成了人的身体。人离开后，它仍然在等。—— AI 情绪短片，约 135 秒，即梦 AI 图生视频。"},
    {id:"v2", type:"video", cat:"video", code:"REEL 02", title:"人面巨树", tag:"暗黑奇幻短片",
     file:"assets/videos/2.人面巨树.mp4", poster:"assets/posters/2.人面巨树.webp",
     meta:"720P · 约12MB · 00:44",
     desc:"浓雾森林中，由万千亡魂面孔共生的人面巨树苏醒，开启轮回通道，指引林间亡魂完成一场充满宿命感的生命轮回仪式。—— 约 70 秒，即梦 AI 图生视频。"},
    {id:"v3", type:"video", cat:"video", code:"REEL 03", title:"黑神话风格练习", tag:"风格练习",
     file:"assets/videos/3.黑神话风格练习.mp4", poster:"assets/posters/3.黑神话风格练习.webp",
     meta:"720P · 约4MB · 00:15",
     desc:"黑神话风格东方女祭司的风格练习片段。"},
    {id:"v4", type:"video", cat:"video", code:"REEL 04", title:"巨兽风格练习", tag:"风格练习",
     file:"assets/videos/4.巨兽风格练习.mp4", poster:"assets/posters/4.巨兽风格练习.webp",
     meta:"720P · 约2MB · 00:09", desc:"巨兽题材的 AI 视频风格练习片段。"},
    {id:"v5", type:"video", cat:"video", code:"REEL 05", title:"人物微表情练习 1", tag:"风格练习",
     file:"assets/videos/5.人物微表情练习1.mp4", poster:"assets/posters/5.人物微表情练习1.webp",
     meta:"720P · 约3MB · 00:10", desc:"人物微表情与表演细节的 AI 视频练习片段。"},
    {id:"v6", type:"video", cat:"video", code:"REEL 06", title:"人物微表情练习 2", tag:"风格练习",
     file:"assets/videos/6.人物微表情练习2.mp4", poster:"assets/posters/6.人物微表情练习2.webp",
     meta:"720P · 约3MB · 00:10", desc:"人物微表情与表演细节的 AI 视频练习片段。"},
    {id:"v7", type:"video", cat:"video", code:"REEL 07", title:"真人风格片段", tag:"风格练习",
     file:"assets/videos/7.真人风格片段.mp4", poster:"assets/posters/7.真人风格片段.webp",
     meta:"720P · 约24MB · 01:21", desc:"接近真人实拍质感的 AI 视频片段练习。"},

    /* ---- 剧本创作 ---- */
    {id:"s1", type:"script", cat:"script", code:"SCRIPT 01", title:"《人面巨树》分镜剧本", tag:"暗黑奇幻 · 约70秒成片",
     file:"assets/scripts/人面巨树_分镜剧本.docx", sub:"《人面巨树》",
     meta:"DOCX · 分镜台本 · 点击打开",
     desc:"以树木为叙事主体的暗黑奇幻短片：万千亡魂面孔共生于巨树，沉默的视觉语言讲述生死轮回。风格参考宫崎英高黑暗奇幻 ×《潘神的迷宫》。"},
    {id:"s2", type:"script", cat:"script", code:"SCRIPT 02", title:"《空白应答》分镜剧本", tag:"轻科幻情绪 · 约135秒成片",
     file:"assets/scripts/空白应答_分镜剧本.docx", sub:"《空白应答》",
     meta:"DOCX · 分镜台本 · 点击打开",
     desc:"A24 系冷灰美学 × 粘土定格质感。AI 智能房间「知序」与逐渐失忆的老人之间长达四十年的沉默陪伴。AI 没有学会悲伤，它只是学会了继续。"},
    {id:"s3", type:"script", cat:"script", code:"SCRIPT 03", title:"《第4章》分镜剧本", tag:"末世超自然 · 5-6分钟成片",
     file:"assets/scripts/第4章_分镜剧本.docx", sub:"《第4章》",
     meta:"DOCX · 55镜12场 · 点击打开",
     desc:"55 镜 12 场末世怪谈：地下避难所里，安塞尔用聆听心声的能力对抗「收走者」，救下孩子，却付出代价——收走者记住了他。"},

    /* ---- AI 概念与资产 ---- */
    {id:"a1", type:"image", cat:"asset", code:"CONCEPT 01", title:"东方女祭司 · 彩铅风格", src:"assets/images/ai/东方女祭司彩铅风格.webp", meta:"风格探索 · 点击查看大图"},
    {id:"a2", type:"image", cat:"asset", code:"CONCEPT 02", title:"全分镜参考思维图", src:"assets/images/ai/全分镜参考思维图.webp", meta:"分镜资产 · 点击查看大图"},
    {id:"a3", type:"image", cat:"asset", code:"CONCEPT 03", title:"微表情分镜参考", src:"assets/images/ai/微表情分镜参考.webp", meta:"表演参考 · 点击查看大图"},
    {id:"a4", type:"image", cat:"asset", code:"CONCEPT 04", title:"空白应答 · 医院场景", src:"assets/images/ai/空白应答医院场景.webp", meta:"场景设计 · 点击查看大图"},
    {id:"a5", type:"image", cat:"asset", code:"CONCEPT 05", title:"空白应答 · 室内场景", src:"assets/images/ai/空白应答室内场景.webp", meta:"场景设计 · 点击查看大图"},
    {id:"a6", type:"image", cat:"asset", code:"CONCEPT 06", title:"空白应答 · 角色设定", src:"assets/images/ai/空白应答角色.webp", meta:"角色设计 · 点击查看大图"},
    {id:"a7", type:"image", cat:"asset", code:"CONCEPT 07", title:"蒙太奇 · 四季时间参考", src:"assets/images/ai/蒙太奇四季时间参考分镜图.webp", meta:"时间设计 · 点击查看大图"},
    {id:"a8", type:"image", cat:"asset", code:"CONCEPT 08", title:"黑神话风格东方女祭司", src:"assets/images/ai/黑神话风格东方女祭司.webp", meta:"风格探索 · 点击查看大图"},

    /* ---- 视觉设计 ---- */
    {id:"d1",  type:"image", cat:"design", code:"VISUAL 01", title:"VI 设计 · 封面", src:"assets/images/design/封面.webp", meta:"品牌视觉 · 点击查看大图"},
    {id:"d2",  type:"image", cat:"design", code:"VISUAL 02", title:"VI 设计 · 目录", src:"assets/images/design/目录.webp", meta:"品牌视觉 · 点击查看大图"},
    {id:"d3",  type:"image", cat:"design", code:"VISUAL 03", title:"VI 设计 · 壹", src:"assets/images/design/壹.webp", meta:"品牌视觉 · 点击查看大图"},
    {id:"d4",  type:"image", cat:"design", code:"VISUAL 04", title:"VI 设计 · 贰", src:"assets/images/design/贰.webp", meta:"品牌视觉 · 点击查看大图"},
    {id:"d5",  type:"image", cat:"design", code:"VISUAL 05", title:"VI 设计 · 叁", src:"assets/images/design/叁.webp", meta:"品牌视觉 · 点击查看大图"},
    {id:"d6",  type:"image", cat:"design", code:"VISUAL 06", title:"VI 设计 · 肆", src:"assets/images/design/肆.webp", meta:"品牌视觉 · 点击查看大图"},
    {id:"d7",  type:"image", cat:"design", code:"VISUAL 07", title:"VI 设计 · 尾页", src:"assets/images/design/尾页.webp", meta:"品牌视觉 · 点击查看大图"},
    {id:"d8",  type:"image", cat:"design", code:"VISUAL 08", title:"VI 设计 · 总预览图", src:"assets/images/design/总预览图.webp", meta:"完整方案 · 点击查看大图"},
    {id:"d9",  type:"image", cat:"design", code:"VISUAL 09", title:"标志 · 设计思路", src:"assets/images/design/标志设计思路.webp", meta:"标志设计 · 点击查看大图"},
    {id:"d10", type:"image", cat:"design", code:"VISUAL 10", title:"标志 · 比例规范", src:"assets/images/design/标志比例.webp", meta:"标志规范 · 点击查看大图"},
    {id:"d11", type:"image", cat:"design", code:"VISUAL 11", title:"标志 · 标准化制图", src:"assets/images/design/标志标准化制图.webp", meta:"标志规范 · 点击查看大图"},
    {id:"d12", type:"image", cat:"design", code:"VISUAL 12", title:"名片 · 横板规范", src:"assets/images/design/横板名片规范.webp", meta:"应用规范 · 点击查看大图"},
    {id:"d13", type:"image", cat:"design", code:"VISUAL 13", title:"邀请函 · 规范", src:"assets/images/design/邀请函规范.webp", meta:"应用规范 · 点击查看大图"},
    {id:"d14", type:"image", cat:"design", code:"VISUAL 14", title:"广告设计", src:"assets/images/design/广告设计.webp", meta:"商业设计 · 点击查看大图"},
    {id:"d15", type:"image", cat:"design", code:"VISUAL 15", title:"文创手绘宣传海报", src:"assets/images/design/文创手绘.webp", meta:"商业设计 · 点击查看大图"}
  ];

  var VIDEOS = WORKS.filter(function(w){ return w.type === "video"; });
  var IMAGE_WORKS = WORKS.filter(function(w){ return w.type === "image"; });

  /* ---------- DOM ---------- */
  var grid = document.getElementById("worksGrid");
  var filters = document.getElementById("filters");
  var reelTrack = document.getElementById("reelTrack");
  var lightbox = document.getElementById("lightbox");
  var lbImg = document.getElementById("lbImg");
  var lbCap = document.getElementById("lbCap");
  var vm = document.getElementById("videoModal");
  var vmVideo = document.getElementById("vmVideo");
  var vmTitle = document.getElementById("vmTitle");
  var vmTag = document.getElementById("vmTag");
  var vmMeta = document.getElementById("vmMeta");
  var vmDesc = document.getElementById("vmDesc");

  var currentFilter = "all";
  var lbIndex = -1;

  function esc(s){
    return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
  }

  /* ---------- 胶片条 ---------- */
  function reelFrameHTML(w){
    return '<button class="reel-frame" data-reel="'+w.id+'" aria-label="播放 '+esc(w.title)+'">'+
      '<img src="'+w.poster+'" alt="" loading="eager">'+
      '<span class="reel-cap"><span class="reel-name">'+esc(w.title)+'</span>'+
      '<span class="reel-code">'+w.code+' · '+w.meta.split(" · ")[2]+'</span></span>'+
    '</button>';
  }
  function buildReel(){
    // 每半边重复两轮，保证宽屏也无缝衔接
    var one = VIDEOS.map(reelFrameHTML).join("");
    var half = '<div class="reel-half">'+one+one+'</div>';
    reelTrack.innerHTML = half + half;
  }
  reelTrack.addEventListener("click", function(e){
    var btn = e.target.closest(".reel-frame");
    if (!btn) return;
    var w = WORKS.find(function(x){ return x.id === btn.getAttribute("data-reel"); });
    if (w) openVideo(w);
  });

  /* ---------- 作品卡片 ---------- */
  function cardHTML(w){
    if (w.type === "video"){
      return '<article class="work-card" data-id="'+w.id+'" data-open="video" tabindex="0" role="button" aria-label="播放视频 '+esc(w.title)+'">'+
        '<div class="work-thumb"><img loading="lazy" src="'+w.poster+'" alt="'+esc(w.title)+'">'+
        '<span class="work-code">'+w.code+'</span><span class="work-play"></span></div>'+
        '<div class="work-info"><h3 class="work-title">'+esc(w.title)+'<span class="tag">'+esc(w.tag)+'</span></h3>'+
        '<p class="work-meta">'+esc(w.meta)+'</p></div></article>';
    }
    if (w.type === "script"){
      return '<article class="work-card" data-id="'+w.id+'" data-open="script" tabindex="0" role="button" aria-label="打开剧本 '+esc(w.title)+'">'+
        '<div class="work-thumb script-thumb"><span class="work-code">'+w.code+'</span>'+
        '<div class="script-inner"><span class="script-doc">DOCX · 分镜台本</span>'+
        '<h3 class="script-name">'+esc(w.sub)+'</h3><span class="script-open">打开剧本</span></div></div>'+
        '<div class="work-info"><h3 class="work-title">'+esc(w.title)+'<span class="tag">'+esc(w.tag)+'</span></h3>'+
        '<p class="work-meta">'+esc(w.meta)+'</p></div></article>';
    }
    return '<article class="work-card" data-id="'+w.id+'" data-open="image" tabindex="0" role="button" aria-label="查看图片 '+esc(w.title)+'">'+
      '<div class="work-thumb"><img loading="lazy" src="'+w.src+'" alt="'+esc(w.title)+'">'+
      '<span class="work-code">'+w.code+'</span></div>'+
      '<div class="work-info"><h3 class="work-title">'+esc(w.title)+'</h3>'+
      '<p class="work-meta">'+esc(w.meta)+'</p></div></article>';
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
    var y = document.getElementById("works").getBoundingClientRect().top + window.pageYOffset - 84;
    window.scrollTo({top: y, behavior: REDUCED ? "auto" : "smooth"});
  });

  /* ---------- 卡片点击 ---------- */
  grid.addEventListener("click", function(e){
    var card = e.target.closest(".work-card");
    if (card) openCard(card);
  });
  grid.addEventListener("keydown", function(e){
    if (e.key === "Enter" || e.key === " "){
      var card = e.target.closest(".work-card");
      if (card){ e.preventDefault(); openCard(card); }
    }
  });
  function openCard(card){
    var id = card.getAttribute("data-id");
    var w = WORKS.find(function(x){ return x.id === id; });
    if (!w) return;
    if (w.type === "video") openVideo(w);
    else if (w.type === "script") window.open(w.file, "_blank");
    else openLightboxAt(w);
  }

  /* ---------- 视频弹窗 ---------- */
  function openVideo(w){
    vmTitle.textContent = w.title;
    vmTag.textContent = w.tag;
    if (vmMeta) vmMeta.textContent = w.code + " · " + w.meta;
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

  document.addEventListener("keydown", function(e){
    if (e.key === "ArrowLeft" && lightbox.classList.contains("open")) stepLb(-1);
    if (e.key === "ArrowRight" && lightbox.classList.contains("open")) stepLb(1);
    if (e.key === "Escape"){
      if (vm.classList.contains("open")) closeVideo();
      if (lightbox.classList.contains("open")) closeLightbox();
    }
  });

  /* ---------- 导航 ---------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  function onScroll(){
    nav.classList.toggle("scrolled", window.pageYOffset > 40);
    document.getElementById("backTop").classList.toggle("show", window.pageYOffset > 640);
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
    window.scrollTo({top:0, behavior: REDUCED ? "auto" : "smooth"});
  });

  /* ---------- 复制 ---------- */
  window.copyText = function(btn){
    var text = btn.getAttribute("data-copy") || "";
    var done = function(){
      btn.textContent = "已复制";
      btn.classList.add("done");
      setTimeout(function(){ btn.textContent = "复制"; btn.classList.remove("done"); }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(done).catch(function(){ fallbackCopy(text, done); });
    } else fallbackCopy(text, done);
  };
  function fallbackCopy(text, done){
    var ta = document.createElement("textarea");
    ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
    document.body.appendChild(ta); ta.select();
    try { document.execCommand("copy"); done(); } catch(e){}
    document.body.removeChild(ta);
  }

  /* ---------- 滚动显现 ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (REDUCED || !("IntersectionObserver" in window)){
    reveals.forEach(function(el){ el.classList.add("in"); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, {threshold:.1});
    reveals.forEach(function(el){ io.observe(el); });
  }

  /* ---------- 初始化 ---------- */
  buildReel();
  render();
})();

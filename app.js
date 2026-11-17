(() => {
  "use strict";

  const DATA = window.SITE_DATA;
  if (!DATA) return;

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const esc = (value) => String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[c]));
  const nf = new Intl.NumberFormat("zh-CN");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const safeUrl = (url) => (/^https:\/\//i.test(String(url || "")) ? url : "#");
  const fmt = (n) => (Number.isFinite(Number(n)) ? nf.format(Number(n)) : "—");
  const dateLabel = (iso) => {
    if (!iso) return "";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "";
    return new Intl.DateTimeFormat("zh-CN", {
      month: "2-digit", day: "2-digit", timeZone: "Asia/Shanghai"
    }).format(d);
  };

  const externalIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6"></path><path d="M20 4 11 13"></path><path d="M20 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5"></path></svg>';

  function renderStats() {
    const map = {
      total: DATA.meta.total,
      analyzed: DATA.meta.analyzed,
      integrated: DATA.meta.integrated,
      pending: DATA.meta.pending,
      unreadArticles: DATA.meta.unreadArticles
    };
    $$("[data-stat]").forEach((el) => {
      if (el.dataset.stat in map) el.textContent = fmt(map[el.dataset.stat]);
    });
  }

  function statusBadges(item) {
    const out = [];
    out.push(`<span class="badge decision">${esc(item.decision)}</span>`);
    if (item.status.analyzed) out.push('<span class="badge ok">已分析</span>');
    if (item.status.integrated) out.push('<span class="badge info">已接入 · 只读</span>');
    if (item.status.pending.length) {
      out.push(`<span class="badge warn">待补 ${item.status.pending.length} 项</span>`);
    }
    return out.join("");
  }

  function metricsBlock(metrics) {
    const defs = [
      ["bookmarks", "收藏"], ["impressions", "曝光"], ["likes", "赞"],
      ["reposts", "转发"], ["quotes", "引用"], ["replies", "回复"]
    ];
    return `<dl class="metrics">${defs.map(([k, label]) => `
      <div><dt>${label}</dt><dd>${fmt(metrics[k] || 0)}</dd></div>`).join("")}</dl>`;
  }

  function listBlock(title, num, entries, open = false) {
    if (!entries || !entries.length) return "";
    return `<details class="block"${open ? " open" : ""}>
      <summary><span class="n">${num}</span>${esc(title)}</summary>
      <div class="detail-body"><ul>${entries.map((x) => `<li>${esc(x)}</li>`).join("")}</ul></div>
    </details>`;
  }

  function checksBlock(item) {
    if (!item.publicCheck.length) return "";
    return `<div class="checks">${item.publicCheck.map((x) => `<p>${esc(x)}</p>`).join("")}</div>`;
  }

  function evidenceBlock(item) {
    const links = [];
    const seen = new Set();
    const push = (url, label) => {
      const u = safeUrl(url);
      if (u === "#" || seen.has(u)) return;
      seen.add(u);
      links.push(`<div><a href="${esc(u)}" target="_blank" rel="noopener noreferrer">${esc(label || u)}</a></div>`);
    };
    item.evidence.forEach((e) => push(e.url, e.label));
    item.extraLinks.forEach((e) => push(e.url, e.label));
    if (!links.length) return "";
    return `<details class="block">
      <summary><span class="n">05</span>来源与证据</summary>
      <div class="detail-body"><div class="checks">${links.join("")}</div></div>
    </details>`;
  }

  function card(item) {
    const author = item.author || {};
    const initial = (author.name || author.handle || "?").trim().slice(0, 1);
    const article = item.article;
    const articleFlag = article
      ? `<div class="article-flag"><b>${esc(article.state)}</b><span>长文链接可点，但结论不按全文写。</span><a href="${esc(safeUrl(article.url))}" target="_blank" rel="noopener noreferrer">打开长文 ${externalIcon}</a></div>`
      : "";

    const licenseBlock = (item.license.length || item.publicCheck.length)
      ? `<details class="block">
          <summary><span class="n">02</span>许可证与公开核实</summary>
          <div class="detail-body">
            ${item.license.length ? `<ul>${item.license.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
            ${checksBlock(item)}
          </div>
        </details>`
      : "";

    const pendingBlock = item.status.pending.length
      ? listBlock("待补与缺口", "06", item.status.pending)
      : "";

    const xLink = `<a class="link-btn primary" href="${esc(safeUrl(item.url))}" target="_blank" rel="noopener noreferrer">原帖 @${esc(author.handle || "")} ${externalIcon}</a>`;

    return `<article class="card reveal" data-rank="${item.rank}">
      <div class="card-top">
        <div class="rank" aria-hidden="true">${String(item.rank).padStart(2, "0")}</div>
        <div class="card-top-main">
          <div class="byline">
            <span class="avatar" aria-hidden="true">${esc(initial)}</span>
            <b>${esc(author.name || author.handle || "未知作者")}</b>
            <span class="handle">@${esc(author.handle || "")}</span>
            ${author.followers ? `<span>${fmt(author.followers)} 粉丝</span>` : ""}
            <span class="date">${esc(dateLabel(item.createdAt))}</span>
          </div>
          <h3 class="card-title">${esc(item.title)}</h3>
          <div class="badges">${statusBadges(item)}</div>
        </div>
      </div>
      ${metricsBlock(item.metrics)}
      ${articleFlag}
      <ul class="claims">${item.claims.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      <div class="link-row">${xLink}</div>
      <div class="details">
        ${listBlock("可学方法", "01", item.methods, item.status.integrated)}
        ${licenseBlock}
        ${listBlock("需核实的夸大", "03", item.exaggerations)}
        ${listBlock("可借鉴 / 风险 / 不建议", "04", [
          ...item.borrowable.map((x) => `可借鉴：${x}`),
          ...item.risks.map((x) => `风险：${x}`),
          ...item.doNot.map((x) => `不做：${x}`)
        ])}
        ${evidenceBlock(item)}
        ${pendingBlock}
      </div>
    </article>`;
  }

  function searchText(item) {
    return [
      item.title, item.author && item.author.name, item.author && item.author.handle,
      item.decision, ...item.claims, ...item.methods, ...item.license,
      ...item.exaggerations, ...item.borrowable, ...item.risks, ...item.doNot,
      ...item.status.pending
    ].join(" ").toLowerCase();
  }

  let activeFilter = "all";
  let query = "";

  function applyFilter() {
    let visible = 0;
    $$(".card").forEach((el) => {
      const item = DATA.items.find((i) => String(i.rank) === el.dataset.rank);
      const matchFilter =
        activeFilter === "all" ||
        (activeFilter === "integrated" && item.status.integrated) ||
        (activeFilter === "pending" && item.status.pending.length > 0) ||
        (activeFilter === "hold" && /HOLD/i.test(item.decision));
      const matchQuery = !query || searchText(item).includes(query);
      const show = matchFilter && matchQuery;
      el.hidden = !show;
      if (show) visible += 1;
    });
    $("#visibleCount").textContent = String(visible);
    $("#emptyState").hidden = visible !== 0;
  }

  function renderCards() {
    $("#cards").innerHTML = DATA.items.map(card).join("");
    $$(".chip").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeFilter = btn.dataset.filter;
        $$(".chip").forEach((b) => b.classList.toggle("is-active", b === btn));
        applyFilter();
      });
    });
    $("#searchInput").addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      applyFilter();
    });
    applyFilter();
    observeReveals();
  }

  function renderMaitian() {
    const m = DATA.maitian;
    $("#modules").innerHTML = m.modules.map((x, i) => `
      <li><span class="idx">${String(i + 1).padStart(2, "0")}</span>
        <b>${esc(x.key)}</b><small>${esc(x.desc)}</small><em>${esc(x.demo)}</em></li>`).join("");

    $("#flow").innerHTML = m.flow.map((x, i) => `
      <div class="flow-step"><span class="num">STEP ${i + 1}</span><b>${esc(x.step)}</b><small>${esc(x.desc)}</small></div>`).join("");

    $("#platforms").innerHTML = m.platforms.map((x) => `
      <div class="platform">
        <b>${esc(x.name)}</b>
        <span>${esc(x.mode)}</span>
        <span class="tag ${x.group === "国内" ? "cn" : "en"}">${esc(x.group)}</span>
      </div>`).join("");

    $("#states").innerHTML = m.states.map((s, i) => {
      const hot = s === "awaiting_user" ? " hot" : "";
      const arrow = i < m.states.length - 1 ? '<span class="state arrow" aria-hidden="true">→</span>' : "";
      return `<span class="state${hot}">${esc(s)}</span>${arrow}`;
    }).join("");

    $("#sampleRows").innerHTML = m.sampleRows.map((r) => `
      <tr>
        <td class="mono">${esc(r.id)}</td>
        <td>${esc(r.title)}</td>
        <td>${esc(r.platform)}</td>
        <td><span class="st ${esc(r.state)}">${esc(r.state)}</span></td>
        <td>${esc(r.note)}</td>
      </tr>`).join("");

    const max = Math.max(...m.chart.map((x) => x.bookmarks), 1);
    $("#bars").innerHTML = m.chart.map((x) => `
      <div class="bar-row" title="${esc(x.title)}">
        <span class="bar-label"><b>${String(x.rank).padStart(2, "0")}</b>${esc(x.title)}</span>
        <span class="bar-track"><span class="bar-fill" data-w="${Math.max(3, Math.round((x.bookmarks / max) * 100))}%"></span></span>
        <span class="bar-value">${fmt(x.bookmarks)}</span>
      </div>`).join("");
    animateBars();
  }

  function animateBars() {
    const fills = $$(".bar-fill");
    if (!fills.length) return;
    if (reduceMotion) {
      fills.forEach((f) => { f.style.width = f.dataset.w; });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const f = entry.target;
        requestAnimationFrame(() => { f.style.width = f.dataset.w; });
        io.unobserve(f);
      });
    }, { threshold: 0.2 });
    fills.forEach((f) => io.observe(f));
  }

  function observeReveals() {
    if (reduceMotion) {
      $$(".reveal").forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        io.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px" });
    $$(".reveal:not(.is-in)").forEach((el) => io.observe(el));
  }

  renderStats();
  renderCards();
  renderMaitian();
})();

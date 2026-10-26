(() => {
  "use strict";

  const STORAGE_KEY = "jari-on-demo-monitors-v1";

  const MODES = {
    rail: {
      label: "코레일 열차",
      shortLabel: "철도",
      provider: "Korail",
      officialUrl: "https://www.letskorail.com",
      source: "선택 흐름 체험용 가상 시간표 (실제 운행정보 아님)",
      stations: ["서울", "광명", "천안아산", "대전", "동대구", "부산", "용산", "전주", "광주송정", "목포"],
      defaults: ["서울", "부산"],
      noticeTitle: "공개 데모는 KTX 예시 시간표를 보여줘요.",
      noticeCopy: "베타 앱에서는 KTX·ITX-새마을·ITX-마음·무궁화·ITX-청춘·관광열차 조건을 등록할 수 있지만, 실시간 잔여석 조회는 아직 비활성입니다.",
      schedules: [
        { id: "ktx-117", time: "15:48", arrival: "18:24", service: "KTX 117", detail: "KTX · 일반실", price: "운임은 공식 사이트 확인", status: "schedule-only" },
        { id: "ktx-121", time: "18:42", arrival: "21:19", service: "KTX 121", detail: "KTX · 일반실", price: "운임은 공식 사이트 확인", status: "schedule-only" },
        { id: "ktx-173", time: "20:12", arrival: "22:53", service: "KTX 173", detail: "KTX · 일반실", price: "운임은 공식 사이트 확인", status: "schedule-only" },
      ],
    },
    express: {
      label: "고속버스",
      shortLabel: "고속",
      provider: "KOBUS",
      officialUrl: "https://www.kobus.co.kr",
      source: "KOBUS 조회 흐름을 본뜬 데모 데이터",
      stations: ["서울경부", "센트럴시티", "동서울", "부산", "광주(유·스퀘어)", "대전복합", "대구", "강릉", "전주고속", "울산"],
      defaults: ["서울경부", "부산"],
      noticeTitle: "KOBUS·티머니GO 공식 연동을 검토하고 있어요.",
      noticeCopy: "현재는 성인 1명 기준 화면 흐름 데모이며, 실제 잔여석 요청·좌석 확보·예매는 실행되지 않습니다.",
      schedules: [
        { id: "express-1530", time: "15:30", arrival: "19:40", service: "천일고속", detail: "우등", price: "성인 39,700원 · 예시", status: "sold-out" },
        { id: "express-1740", time: "17:40", arrival: "21:50", service: "금호고속", detail: "프리미엄", price: "성인 51,600원 · 예시", status: "available", seats: 2 },
        { id: "express-2000", time: "20:00", arrival: "00:10", service: "동양고속", detail: "우등", price: "성인 39,700원 · 예시", status: "sold-out" },
      ],
    },
    intercity: {
      label: "시외버스",
      shortLabel: "시외",
      provider: "Tmoney",
      officialUrl: "https://intercitybus.tmoney.co.kr",
      source: "Tmoney 시외버스 조회 흐름을 본뜬 데모 데이터",
      stations: ["동서울", "서울남부", "인천", "수원", "속초", "춘천", "원주", "청주", "포항", "안동"],
      defaults: ["동서울", "속초"],
      noticeTitle: "티머니GO·시외버스 공식 연동을 검토하고 있어요.",
      noticeCopy: "터미널 코드와 예매 흐름이 달라 별도 어댑터가 필요합니다. 현재는 실제 요청이 없는 화면 데모입니다.",
      schedules: [
        { id: "intercity-1520", time: "15:20", arrival: "17:40", service: "금강고속", detail: "우등", price: "성인 21,300원 · 예시", status: "sold-out" },
        { id: "intercity-1800", time: "18:00", arrival: "20:20", service: "강원고속", detail: "일반", price: "성인 17,200원 · 예시", status: "sold-out" },
        { id: "intercity-2030", time: "20:30", arrival: "22:50", service: "금강고속", detail: "우등", price: "성인 21,300원 · 예시", status: "available", seats: 1 },
      ],
    },
  };

  // All rows are fictional. A route change does not query a transport operator.
  const trainKinds = [["KTX", "KTX"], ["ITX_MAUM", "ITX-마음"], ["ITX_SAEMAEUL", "ITX-새마을"], ["SAEMAEUL", "새마을호"], ["MUGUNGHWA", "무궁화호"], ["NURIRO", "누리로"], ["ITX_CHEONGCHUN", "ITX-청춘"], ["TOURIST", "S-Train"]];
  MODES.rail.schedules = trainKinds.flatMap(([trainType, label]) => ["00:10", "05:30", "08:00", "08:20", "12:00", "15:30", "18:00", "20:30", "23:50"].map((time, index) => ({
    id: `demo-${trainType}-${index}`, trainType, time, arrival: time,
    service: `${label} 예시 ${index + 1}`, detail: "가상 운행편 · 도착시각 미제공", price: "운임·잔여석 미확인", status: "schedule-only",
  })));
  MODES.rail.noticeTitle = "실제 운행정보가 아닌 가상 시간표입니다.";
  MODES.rail.noticeCopy = "선택 흐름을 체험할 수 있도록 모든 구간에 동일한 예시 편을 표시합니다. 실제 시간표·잔여석 조회·예매는 실행되지 않습니다.";
  for (const mode of ["express", "intercity"]) {
    MODES[mode].schedules.unshift({ id: `demo-${mode}-first`, time: "05:30", arrival: "08:00", service: "첫차 예시", detail: "가상 운행편", price: "운임·잔여석 미확인", status: "schedule-only" });
  }

  const state = {
    mode: "rail",
    search: null,
    selectedSchedule: null,
    monitors: loadMonitors(),
    lastDialogTrigger: null,
    searchRequestId: 0,
    toastTimer: null,
  };

  const elements = {
    tabs: [...document.querySelectorAll(".transport-tab")],
    panel: document.querySelector("#search-panel"),
    notice: document.querySelector("#service-notice"),
    form: document.querySelector("#journey-form"),
    departure: document.querySelector("#departure"),
    arrival: document.querySelector("#arrival"),
    date: document.querySelector("#travel-date"),
    heroTicketDate: document.querySelector("#hero-ticket-date"),
    timeStart: document.querySelector("#time-start"),
    trainType: document.querySelector("#train-type"),
    trainTypeField: document.querySelector("#train-type-field"),
    nextDay: document.querySelector("#next-day"),
    exactService: document.querySelector("#exact-service"),
    passengers: document.querySelector("#passengers"),
    swap: document.querySelector("#swap-route"),
    formError: document.querySelector("#form-error"),
    searchButton: document.querySelector(".button-search"),
    resultsPanel: document.querySelector("#results-panel"),
    resultSummary: document.querySelector("#result-summary"),
    resultList: document.querySelector("#result-list"),
    resultUpdated: document.querySelector("#result-updated"),
    monitorList: document.querySelector("#monitor-list"),
    monitorEmpty: document.querySelector("#monitor-empty"),
    monitorCount: document.querySelector("#monitor-count"),
    previewTitle: document.querySelector("#preview-title"),
    previewRoute: document.querySelector("#preview-route"),
    clearLocalData: document.querySelector("#clear-local-data"),
    monitorDialog: document.querySelector("#monitor-dialog"),
    monitorForm: document.querySelector("#monitor-form"),
    dialogClose: document.querySelector("#dialog-close"),
    dialogCancel: document.querySelector("#dialog-cancel"),
    dialogTitle: document.querySelector("#dialog-title"),
    dialogLead: document.querySelector("#dialog-lead"),
    dialogTrip: document.querySelector("#dialog-trip"),
    includeNearby: document.querySelector("#include-nearby"),
    seatPreference: document.querySelector("#seat-preference"),
    paymentAck: document.querySelector("#payment-ack"),
    resultDialog: document.querySelector("#result-dialog"),
    resultDialogClose: document.querySelector("#result-dialog-close"),
    resultDialogDismiss: document.querySelector("#result-dialog-dismiss"),
    resultDialogKicker: document.querySelector("#result-dialog-kicker"),
    resultDialogTitle: document.querySelector("#result-dialog-title"),
    resultDialogCopy: document.querySelector("#result-dialog-copy"),
    resultDialogTrip: document.querySelector("#result-dialog-trip"),
    resultDialogWarning: document.querySelector("#result-dialog-warning"),
    officialLink: document.querySelector("#official-link"),
    toast: document.querySelector("#toast"),
  };

  init();

  function init() {
    setInitialDate();
    populateStations("rail");
    updateNotice("rail");
    bindEvents();
    renderMonitors();
    window.setInterval(removeExpiredMonitors, 30000);
    removeExpiredMonitors();
  }

  function removeExpiredMonitors() {
    const before = state.monitors.length;
    state.monitors = state.monitors.filter((row) => {
      const departure = new Date(`${row.date}T${row.time}:00+09:00`).getTime();
      const endOfDay = new Date(`${row.date}T23:59:00+09:00`).getTime();
      return Math.min(departure + (row.includeNearby ? 30 * 60000 : 0), endOfDay) > Date.now();
    });
    if (before !== state.monitors.length) { persistMonitors(); renderMonitors(); }
  }

  function bindEvents() {
    elements.tabs.forEach((tab) => {
      tab.addEventListener("click", () => setMode(tab.dataset.mode));
      tab.addEventListener("keydown", handleTabKeys);
    });

    elements.swap.addEventListener("click", swapRoute);
    elements.form.addEventListener("submit", handleSearch);
    elements.form.addEventListener("input", invalidateSearch);
    elements.nextDay.addEventListener("click", () => {
      if (!state.search) return;
      elements.date.value = nextDate(state.search.date);
      elements.timeStart.value = "00:00";
      elements.form.requestSubmit();
    });
    elements.resultList.addEventListener("click", handleResultAction);
    elements.monitorList.addEventListener("click", handleMonitorAction);
    elements.monitorForm.addEventListener("submit", saveMonitor);
    elements.dialogClose.addEventListener("click", closeMonitorDialog);
    elements.dialogCancel.addEventListener("click", closeMonitorDialog);
    elements.resultDialogClose.addEventListener("click", closeResultDialog);
    elements.resultDialogDismiss.addEventListener("click", closeResultDialog);
    elements.clearLocalData.addEventListener("click", clearDemoData);

    [elements.monitorDialog, elements.resultDialog].forEach((dialog) => {
      dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
          dialog.close();
        }
      });
      dialog.addEventListener("close", () => {
        if (state.lastDialogTrigger && document.contains(state.lastDialogTrigger)) {
          state.lastDialogTrigger.focus();
        }
      });
    });
  }

  function setInitialDate() {
    const now = new Date();
    elements.date.min = toISODate(now);
    elements.date.max = "2200-12-31";
    elements.date.value = nextDate(toISODate(now));
    elements.heroTicketDate.textContent = formatDate(elements.date.value);
  }

  function toISODate(date) {
    return new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Seoul", year: "numeric", month: "2-digit", day: "2-digit" }).format(date);
  }

  function nextDate(date) {
    const next = new Date(`${date}T00:00:00Z`);
    next.setUTCDate(next.getUTCDate() + 1);
    return next.toISOString().slice(0, 10);
  }

  function invalidateSearch() {
    state.searchRequestId++;
    state.search = null;
    state.selectedSchedule = null;
    elements.resultsPanel.hidden = true;
    resetSearchButton();
  }

  function setMode(mode) {
    if (!MODES[mode]) return;
    state.searchRequestId += 1;
    state.mode = mode;
    state.search = null;
    elements.trainTypeField.hidden = mode !== "rail";
    elements.tabs.forEach((tab) => {
      const isActive = tab.dataset.mode === mode;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    elements.panel.setAttribute("aria-labelledby", `tab-${mode}`);
    populateStations(mode);
    updateNotice(mode);
    elements.resultsPanel.hidden = true;
    resetSearchButton();
    clearError();
  }

  function handleTabKeys(event) {
    if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const current = elements.tabs.indexOf(event.currentTarget);
    let next = current;
    if (event.key === "ArrowRight") next = (current + 1) % elements.tabs.length;
    if (event.key === "ArrowLeft") next = (current - 1 + elements.tabs.length) % elements.tabs.length;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = elements.tabs.length - 1;
    elements.tabs[next].focus();
    setMode(elements.tabs[next].dataset.mode);
  }

  function populateStations(mode) {
    const config = MODES[mode];
    const options = config.stations.map((station) => `<option value="${escapeHtml(station)}">${escapeHtml(station)}</option>`).join("");
    document.querySelector("#station-options").innerHTML = options;
    elements.departure.value = config.defaults[0];
    elements.arrival.value = config.defaults[1];
  }

  function updateNotice(mode) {
    const config = MODES[mode];
    const isBus = mode !== "rail";
    elements.notice.classList.toggle("service-notice-bus", isBus);
    elements.notice.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 20 20">
        ${isBus ? '<circle cx="10" cy="10" r="8"></circle><path d="M10 9v5m0-8v.2"></path>' : '<path d="M10 2.8 18 17H2L10 2.8Z"></path><path d="M10 8v4m0 2v.2"></path>'}
      </svg>
      <div><strong>${escapeHtml(config.noticeTitle)}</strong><span>${escapeHtml(config.noticeCopy)}</span></div>
    `;
  }

  function swapRoute() {
    const departure = elements.departure.value;
    elements.departure.value = elements.arrival.value;
    elements.arrival.value = departure;
    invalidateSearch();
  }

  function handleSearch(event) {
    event.preventDefault();
    clearError();

    if (!elements.date.value) {
      return showError("가는 날을 선택해 주세요.");
    }
    if (!elements.departure.value.trim() || !elements.arrival.value.trim() || elements.departure.value.trim() === elements.arrival.value.trim()) {
      return showError("출발지와 도착지는 서로 달라야 해요.");
    }
    if (elements.date.value < toISODate(new Date())) {
      return showError("지난 날짜는 조회할 수 없어요.");
    }

    const requestId = ++state.searchRequestId;
    state.search = {
      mode: state.mode,
      departure: elements.departure.value.trim(),
      arrival: elements.arrival.value.trim(),
      date: elements.date.value,
      timeStart: elements.timeStart.value,
      trainType: state.mode === "rail" ? elements.trainType.value : null,
      passengers: Number(elements.passengers.value),
    };

    setSearchButtonLoading();

    window.setTimeout(() => {
      if (requestId !== state.searchRequestId) return;
      renderResults();
      resetSearchButton();
      elements.resultsPanel.hidden = false;
      elements.resultsPanel.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
    }, 560);
  }

  function renderResults() {
    const search = state.search;
    const config = MODES[search.mode];
    const schedules = config.schedules.filter((schedule) => schedule.time >= search.timeStart &&
      (search.mode !== "rail" || search.trainType === "ALL" || schedule.trainType === search.trainType) &&
      new Date(`${search.date}T${schedule.time}:00+09:00`).getTime() > Date.now())
      .sort((a, b) => a.time.localeCompare(b.time) || a.id.localeCompare(b.id));
    elements.nextDay.disabled = search.date >= "2200-12-31";

    elements.resultSummary.innerHTML = `
      <strong>${escapeHtml(search.departure)} → ${escapeHtml(search.arrival)}</strong>
      <span>·</span>
      <span>${formatDate(search.date)}</span>
      <span>·</span>
      <span>${escapeHtml(search.timeStart)}부터 당일 마지막 편까지 (한국시간)</span>
      <span>·</span>
      <span>${search.passengers}명</span>
    `;
    elements.resultUpdated.textContent = `${formatClock(new Date())} 업데이트`;
    elements.resultList.innerHTML = schedules.length
      ? schedules.map((schedule) => resultCard(schedule, search, config)).join("")
      : `<div class="no-results"><strong>해당 시간 이후의 예시 편이 없어요.</strong><span>아래에서 다음날 시간표를 조회해 주세요.</span></div>`;
    elements.resultList.insertAdjacentHTML(
      "beforeend",
      `<span class="result-source">출처 표기: ${escapeHtml(config.source)} · 모든 결과는 실제 조회가 아닌 화면 체험용입니다.</span>`,
    );
  }

  function setSearchButtonLoading() {
    elements.searchButton.classList.add("is-loading");
    elements.searchButton.disabled = true;
    elements.searchButton.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 20 20"><path d="M10 2a8 8 0 1 1-5.7 2.4"></path></svg>
      데모 불러오는 중
    `;
  }

  function resetSearchButton() {
    elements.searchButton.classList.remove("is-loading");
    elements.searchButton.disabled = false;
    elements.searchButton.innerHTML = `
      <svg aria-hidden="true" viewBox="0 0 20 20"><circle cx="8.5" cy="8.5" r="5.5"></circle><path d="m13 13 4 4"></path></svg>
      시간표 보기
    `;
  }

  function resultCard(schedule, search, config) {
    const isRail = search.mode === "rail";
    const isAvailable = schedule.status === "available";
    const statusLabel = isRail
      ? "가상 시간표 · 좌석 조회 미지원"
      : isAvailable
        ? `잔여 ${schedule.seats}석 · 예시`
        : schedule.status === "schedule-only" ? "좌석 미확인 · 예시" : "잔여 0석 · 예시";
    const statusClass = isRail ? "info" : isAvailable ? "available" : "sold";
    const action = `<button class="result-action" type="button" data-action="monitor" data-schedule-id="${schedule.id}">이 편 선택 (데모)</button>`;

    return `
      <article class="result-card is-${schedule.status}">
        <div class="result-time">
          <strong>${escapeHtml(schedule.time)}</strong>
          <span class="time-arrow" aria-hidden="true">→</span>
          <span>${isRail ? "—" : escapeHtml(schedule.arrival)}</span>
        </div>
        <div class="result-service">
          <strong>${escapeHtml(schedule.service)}</strong>
          <span>${escapeHtml(schedule.detail)} · ${escapeHtml(config.provider)}</span>
        </div>
        <div class="result-detail">
          <strong class="seat-state"><span class="seat-indicator ${statusClass}" aria-hidden="true"></span>${escapeHtml(statusLabel)}</strong>
          <span>${escapeHtml(schedule.price)}</span>
        </div>
        <div class="result-actions">${action}</div>
      </article>
    `;
  }

  function handleResultAction(event) {
    const button = event.target.closest("[data-action='monitor']");
    if (!button || !state.search) return;
    const config = MODES[state.search.mode];
    const schedule = config.schedules.find((item) => item.id === button.dataset.scheduleId);
    if (!schedule) return;
    openMonitorDialog(schedule, button);
  }

  function openMonitorDialog(schedule, trigger) {
    state.selectedSchedule = schedule;
    state.lastDialogTrigger = trigger;
    const search = state.search;
    const config = MODES[search.mode];
    elements.dialogTitle.textContent = "데모 조건을 저장할까요?";
    elements.dialogLead.textContent = search.mode === "rail"
      ? "실시간 감시가 아닌 코레일 열차 화면 체험용 조건으로 저장됩니다."
      : "실제 좌석 조회 없이 선택한 편을 화면 체험용 조건으로 저장합니다.";
    elements.dialogTrip.innerHTML = tripMarkup(search, schedule, config);
    elements.exactService.checked = true;
    elements.includeNearby.checked = false;
    elements.seatPreference.value = "any";
    elements.paymentAck.checked = false;
    showDialog(elements.monitorDialog);
  }

  function tripMarkup(search, schedule, config) {
    return `
      <div><strong>${escapeHtml(search.departure)}</strong><span>${escapeHtml(config.label)} · ${escapeHtml(schedule.time)} 출발</span></div>
      <span class="dialog-trip-arrow" aria-hidden="true">→</span>
      <div><strong>${escapeHtml(search.arrival)}</strong><span>${formatDate(search.date)} · ${escapeHtml(schedule.service)}</span></div>
    `;
  }

  function saveMonitor(event) {
    event.preventDefault();
    if (!elements.paymentAck.checked) {
      elements.paymentAck.reportValidity();
      return;
    }
    if (!state.search || !state.selectedSchedule) return;

    const search = state.search;
    const schedule = state.selectedSchedule;
    if (new Date(`${search.date}T${schedule.time}:00+09:00`).getTime() <= Date.now()) {
      closeMonitorDialog();
      showToast("이미 출발한 편입니다. 다시 조회해 주세요.");
      renderResults();
      return;
    }
    const duplicate = state.monitors.find(
      (monitor) => monitor.mode === search.mode && monitor.date === search.date && monitor.departure === search.departure && monitor.arrival === search.arrival && monitor.scheduleId === schedule.id,
    );
    if (duplicate) {
      closeMonitorDialog();
      showToast("이미 같은 조건을 저장해 두었어요.");
      document.querySelector("#monitors").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
      return;
    }

    const monitor = {
      id: makeId(),
      mode: search.mode,
      departure: search.departure,
      arrival: search.arrival,
      date: search.date,
      passengers: search.passengers,
      scheduleId: schedule.id,
      time: schedule.time,
      arrivalTime: schedule.arrival,
      service: schedule.service,
      detail: schedule.detail,
      includeNearby: elements.includeNearby.checked,
      seatPreference: elements.seatPreference.value,
      status: "monitoring",
      createdAt: Date.now(),
      lastCheckedAt: Date.now(),
    };
    state.monitors.unshift(monitor);
    persistMonitors();
    renderMonitors();
    closeMonitorDialog();
    showToast("데모 모니터 조건을 저장했어요.");
    document.querySelector("#monitors").scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }

  function closeMonitorDialog() {
    if (elements.monitorDialog.open) elements.monitorDialog.close();
  }

  function renderMonitors() {
    const activeCount = state.monitors.filter((monitor) => monitor.status !== "paused").length;
    elements.monitorCount.textContent = String(activeCount);
    if (!state.monitors.length) {
      elements.monitorList.innerHTML = "";
      elements.monitorList.appendChild(elements.monitorEmpty);
      elements.monitorEmpty.hidden = false;
      resetNotificationPreview();
      return;
    }

    elements.monitorList.innerHTML = state.monitors.map(monitorCard).join("");
    const actionMonitor = state.monitors.find((monitor) => ["seat-detected", "action-required"].includes(monitor.status));
    if (actionMonitor) updateNotificationPreview(actionMonitor);
    else resetNotificationPreview();
  }

  function monitorCard(monitor) {
    const config = MODES[monitor.mode];
    const isRail = monitor.mode === "rail";
    const actionRequired = ["seat-detected", "action-required"].includes(monitor.status);
    const statusLabel = monitor.status === "paused"
      ? "일시 중지"
      : monitor.status === "seat-detected"
        ? "빈자리 발견 데모"
        : monitor.status === "action-required"
          ? "빈자리 알림 시뮬레이션"
          : isRail
            ? "조건 저장됨"
            : "조건 활성 · 데모";
    const cardClass = actionRequired ? "is-action-required" : monitor.status === "paused" ? "is-paused" : "";
    const icon = isRail ? trainIcon() : busIcon();
    const primaryAction = actionRequired
      ? `<a class="official-card-link" href="${config.officialUrl}" target="_blank" rel="noreferrer">${isRail ? "코레일에서 직접 확인" : "공식 홈페이지에서 다시 확인"}<span class="sr-only">(새 창)</span></a>`
      : monitor.status === "paused"
        ? ""
      : `<button class="simulate-button" type="button" data-action="simulate" data-id="${escapeHtml(monitor.id)}">빈자리 감지 시뮬레이션</button>`;
    const toggleAction = actionRequired
      ? `<button type="button" data-action="reset" data-id="${escapeHtml(monitor.id)}">다시 모니터링</button>`
      : `<button type="button" data-action="toggle" data-id="${escapeHtml(monitor.id)}">${monitor.status === "paused" ? "다시 시작" : "일시 중지"}</button>`;

    return `
      <article class="monitor-card ${cardClass}" data-monitor-id="${escapeHtml(monitor.id)}">
        <div class="monitor-card-top">
          <div class="monitor-title">
            <span class="mode-avatar ${isRail ? "" : "bus"}" aria-hidden="true">${icon}</span>
            <div><strong>${escapeHtml(config.label)} · ${escapeHtml(monitor.service)}</strong><span>${formatDate(monitor.date)} ${escapeHtml(monitor.time)} 출발</span></div>
          </div>
          <span class="monitor-status">${statusLabel}</span>
        </div>
        <div class="monitor-route">
          <div class="monitor-route-point"><strong>${escapeHtml(monitor.departure)}</strong><span>${escapeHtml(monitor.time)}</span></div>
          <div class="monitor-route-line" aria-hidden="true"><span></span></div>
          <div class="monitor-route-point"><strong>${escapeHtml(monitor.arrival)}</strong><span>${isRail ? "도착시각 미제공" : escapeHtml(monitor.arrivalTime)}</span></div>
        </div>
        <dl class="monitor-meta">
          <div><dt>현재 상태</dt><dd>${actionRequired ? "공식 사이트 확인 필요" : monitor.status === "paused" ? "확인 중지됨" : "브라우저 데모 대기"}</dd></div>
          <div><dt>최근 확인</dt><dd>${formatRelative(monitor.lastCheckedAt)}</dd></div>
          <div><dt>조건</dt><dd>${monitor.includeNearby ? "같은 날·열차종 앞뒤 30분" : "선택편만"} · ${monitor.passengers}명 · ${{any: "좌석 무관", window: "창가 선호", aisle: "통로 선호"}[monitor.seatPreference]}</dd></div>
        </dl>
        <div class="monitor-card-actions">
          ${primaryAction}
          ${toggleAction}
          <button type="button" data-action="delete" data-id="${escapeHtml(monitor.id)}">삭제</button>
        </div>
      </article>
    `;
  }

  function handleMonitorAction(event) {
    const control = event.target.closest("[data-action]");
    if (!control) return;
    const monitor = state.monitors.find((item) => item.id === control.dataset.id);
    if (!monitor) return;
    const action = control.dataset.action;

    if (action === "simulate") simulateSeat(monitor, control);
    if (action === "toggle") toggleMonitor(monitor);
    if (action === "reset") resetMonitor(monitor);
    if (action === "delete") deleteMonitor(monitor);
  }

  function simulateSeat(monitor, trigger) {
    monitor.status = monitor.mode === "rail" ? "seat-detected" : "action-required";
    monitor.lastCheckedAt = Date.now();
    persistMonitors();
    renderMonitors();
    const refreshedCard = [...elements.monitorList.querySelectorAll(".monitor-card")]
      .find((card) => card.dataset.monitorId === monitor.id);
    state.lastDialogTrigger = refreshedCard?.querySelector(".official-card-link, button") || trigger;
    updateNotificationPreview(monitor);
    openResultDialog(monitor);
  }

  function toggleMonitor(monitor) {
    monitor.status = monitor.status === "paused" ? "monitoring" : "paused";
    monitor.lastCheckedAt = Date.now();
    persistMonitors();
    renderMonitors();
    showToast(monitor.status === "paused" ? "모니터링 데모를 일시 중지했어요." : "모니터링 데모를 다시 시작했어요.");
  }

  function resetMonitor(monitor) {
    monitor.status = "monitoring";
    monitor.lastCheckedAt = Date.now();
    persistMonitors();
    renderMonitors();
    showToast("상태를 모니터링 데모로 되돌렸어요.");
  }

  function deleteMonitor(monitor) {
    state.monitors = state.monitors.filter((item) => item.id !== monitor.id);
    persistMonitors();
    renderMonitors();
    showToast("저장한 조건을 삭제했어요.");
  }

  function openResultDialog(monitor) {
    const config = MODES[monitor.mode];
    const isRail = monitor.mode === "rail";
    elements.resultDialogKicker.textContent = isRail ? "RAIL DEMO EVENT" : "BUS DEMO EVENT";
    elements.resultDialogTitle.textContent = "빈자리 알림 상황을 시뮬레이션했어요";
    elements.resultDialogCopy.textContent = isRail
      ? "실시간 좌석 조회가 아닌 화면 체험용 이벤트입니다."
      : "실제 KOBUS·티머니GO 요청이나 좌석 확보는 실행되지 않았습니다.";
    elements.resultDialogTrip.innerHTML = tripMarkup(
      { mode: monitor.mode, departure: monitor.departure, arrival: monitor.arrival, date: monitor.date },
      { time: monitor.time, service: monitor.service },
      config,
    );
    elements.resultDialogWarning.innerHTML = isRail
      ? "<strong>자동 예매는 실행되지 않았습니다.</strong>참고한 railway-timetable 스킬은 계획 시간표 조회 전용입니다. 코레일 공식 사이트에서 잔여석을 직접 확인해 주세요."
      : "<strong>실제 좌석을 확보한 결과가 아닙니다.</strong>향후 공식 연동에서 좌석 확보가 확인되더라도, 공식 페이지에서 사용자가 직접 결제해야 예매가 확정됩니다.";
    elements.officialLink.href = config.officialUrl;
    const officialLabel = isRail ? "코레일 홈페이지 열기" : `${config.provider} 홈페이지 열기`;
    const newWindowHint = document.createElement("span");
    newWindowHint.className = "sr-only";
    newWindowHint.textContent = "(새 창)";
    elements.officialLink.replaceChildren(document.createTextNode(officialLabel), newWindowHint);
    showDialog(elements.resultDialog);
  }

  function closeResultDialog() {
    if (elements.resultDialog.open) elements.resultDialog.close();
  }

  function updateNotificationPreview(monitor) {
    const isRail = monitor.mode === "rail";
    elements.previewTitle.textContent = "빈자리 알림 데모";
    elements.previewRoute.textContent = `${monitor.departure} → ${monitor.arrival}, ${monitor.time} 출발 · ${isRail ? "공식 사이트에서 직접 확인해 주세요." : "공식 홈페이지에서 좌석과 결제 단계를 다시 확인해 주세요."}`;
  }

  function resetNotificationPreview() {
    elements.previewTitle.textContent = "공식 연동 후 제공";
    elements.previewRoute.textContent = "승인된 알림톡 연동이 준비되면 이런 형태로 안내해요.";
  }

  function clearDemoData() {
    if (!state.monitors.length) {
      showToast("지울 데모 데이터가 없어요.");
      return;
    }
    const confirmed = window.confirm("이 브라우저에 저장된 모든 모니터링 데모 조건을 지울까요?");
    if (!confirmed) return;
    state.monitors = [];
    persistMonitors();
    renderMonitors();
    showToast("이 브라우저의 데모 데이터를 모두 지웠어요.");
  }

  function showError(message) {
    elements.formError.textContent = message;
    elements.formError.hidden = false;
    elements.formError.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "nearest" });
  }

  function clearError() {
    elements.formError.hidden = true;
    elements.formError.textContent = "";
  }

  function showDialog(dialog) {
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function showToast(message) {
    window.clearTimeout(state.toastTimer);
    elements.toast.textContent = message;
    elements.toast.classList.add("is-visible");
    state.toastTimer = window.setTimeout(() => elements.toast.classList.remove("is-visible"), 2800);
  }

  function formatDate(isoDate) {
    if (typeof isoDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(isoDate)) return "날짜 미상";
    const [year, month, day] = isoDate.split("-").map(Number);
    const date = new Date(year, month - 1, day);
    if (Number.isNaN(date.getTime())) return "날짜 미상";
    return new Intl.DateTimeFormat("ko-KR", { month: "long", day: "numeric", weekday: "short" }).format(date);
  }

  function formatClock(date) {
    return new Intl.DateTimeFormat("ko-KR", { hour: "2-digit", minute: "2-digit", hour12: false }).format(date);
  }

  function formatRelative(timestamp) {
    const seconds = Math.max(0, Math.floor((Date.now() - Number(timestamp)) / 1000));
    if (seconds < 20) return "방금 전";
    if (seconds < 60) return `${seconds}초 전`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}분 전`;
    return formatClock(new Date(timestamp));
  }

  function makeId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
    return `monitor-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }

  function loadMonitors() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      if (!Array.isArray(parsed)) return [];
      return parsed.map(normalizeMonitor).filter(Boolean);
    } catch {
      return [];
    }
  }

  function normalizeMonitor(monitor) {
    if (!monitor || typeof monitor !== "object" || !MODES[monitor.mode]) return null;
    const allowedStatuses = new Set(["monitoring", "paused", "seat-detected", "action-required"]);
    const id = safeStoredText(monitor.id, 100);
    const departure = safeStoredText(monitor.departure, 40);
    const arrival = safeStoredText(monitor.arrival, 40);
    const scheduleId = safeStoredText(monitor.scheduleId, 100);
    const service = safeStoredText(monitor.service, 80);
    const detail = safeStoredText(monitor.detail, 80);
    const date = safeStoredText(monitor.date, 10);
    const time = safeStoredText(monitor.time, 5);
    const arrivalTime = safeStoredText(monitor.arrivalTime, 5);
    const passengers = Number(monitor.passengers);
    const createdAt = Number(monitor.createdAt);
    const lastCheckedAt = Number(monitor.lastCheckedAt);

    if (!id || !/^[\w-]+$/u.test(id) || !departure || !arrival || !scheduleId || !service || !detail) return null;
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(time) || !/^([01]\d|2[0-3]):[0-5]\d$/.test(arrivalTime)) return null;
    if (!Number.isInteger(passengers) || passengers < 1 || passengers > 4) return null;
    if (!allowedStatuses.has(monitor.status) || !Number.isFinite(createdAt) || !Number.isFinite(lastCheckedAt)) return null;

    return {
      id,
      mode: monitor.mode,
      departure,
      arrival,
      date,
      passengers,
      scheduleId,
      time,
      arrivalTime,
      service,
      detail,
      includeNearby: Boolean(monitor.includeNearby),
      seatPreference: ["any", "window", "aisle"].includes(monitor.seatPreference) ? monitor.seatPreference : "any",
      status: monitor.status,
      createdAt,
      lastCheckedAt,
    };
  }

  function safeStoredText(value, maxLength) {
    return typeof value === "string" && value.length > 0 && value.length <= maxLength ? value : "";
  }

  function persistMonitors() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.monitors));
    } catch {
      showToast("브라우저 저장소를 사용할 수 없어 이번 화면에서만 유지돼요.");
    }
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function trainIcon() {
    return '<svg viewBox="0 0 24 24"><path d="M7 17 5 21m12-4 2 4M6 15V7c0-3 2-4 6-4s6 1 6 4v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2Zm0-5h12M9 13h.01M15 13h.01"></path></svg>';
  }

  function busIcon() {
    return '<svg viewBox="0 0 24 24"><path d="M5 16V7c0-2 1.5-3 3.5-3h7C17.5 4 19 5 19 7v9m-14-5h14M7 16v2m10-2v2M7.5 8h9M8 14h.01M16 14h.01"></path></svg>';
  }
})();

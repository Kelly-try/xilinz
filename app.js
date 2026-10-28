(() => {
  "use strict";

  const SVG_NS = "http://www.w3.org/2000/svg";
  const CENTER = { x: 360, y: 275, r: 222 };
  const DEFAULT_VIEW = { lon: 0, lat: 25 };

  const people = {
    beethoven: {
      id: "beethoven", name: "Ludwig van Beethoven", displayName: "路德维希·凡·贝多芬",
      shortName: "贝多芬", initials: "贝", kind: "pianist", role: "作曲家 · 钢琴家",
      period: "1770–1827", context: "古典主义 / 维也纳",
      bio: "贝多芬曾亲自教授卡尔·车尔尼。车尔尼后来又成为李斯特的老师，一条钢琴教学脉络由此延续。",
      place: "维也纳 · 私人钢琴教学"
    },
    czerny: {
      id: "czerny", name: "Carl Czerny", displayName: "卡尔·车尔尼",
      shortName: "车尔尼", initials: "车", kind: "pianist", role: "钢琴家 · 教育家",
      period: "1791–1857", context: "古典主义 / 维也纳",
      bio: "贝多芬的学生，也是维也纳重要的钢琴教师。1820 年代，他在维也纳指导年少的李斯特。",
      place: "维也纳 · 钢琴教学"
    },
    liszt: {
      id: "liszt", name: "Franz Liszt", displayName: "弗朗茨·李斯特",
      shortName: "李斯特", initials: "李", kind: "pianist", role: "钢琴家 · 作曲家",
      period: "1811–1886", context: "浪漫主义 / 魏玛",
      bio: "李斯特的钢琴学习始于维也纳；在魏玛时期，他也扶助了多位年轻音乐家的职业起步。",
      place: "魏玛 · 音乐家聚集地"
    },
    bulow: {
      id: "bulow", name: "Hans von Bülow", displayName: "汉斯·冯·彪罗",
      shortName: "彪罗", initials: "彪", kind: "pianist", role: "钢琴家 · 指挥家",
      period: "1830–1894", context: "浪漫主义 / 魏玛",
      bio: "钢琴家与指挥家，曾在魏玛时期得到李斯特指导，后来成为重要的音乐诠释者与指挥家。",
      place: "魏玛 · 李斯特的学生圈"
    },
    graffman: {
      id: "graffman", name: "Gary Graffman", displayName: "加里·格拉夫曼",
      shortName: "格拉夫曼", initials: "格", kind: "pianist", role: "钢琴家 · 教育家",
      period: "1928–2025", context: "近现代 / 费城",
      bio: "柯蒂斯音乐学院校友、教师与院长。他的学生包括郎朗、王羽佳等多位国际舞台上的钢琴家。",
      place: "费城 · 柯蒂斯音乐学院"
    },
    lang: {
      id: "lang", name: "Lang Lang", displayName: "郎朗",
      shortName: "郎朗", initials: "朗", kind: "pianist", role: "钢琴家",
      period: "1982–", context: "当代 / 费城",
      bio: "郎朗在柯蒂斯音乐学院师从加里·格拉夫曼，随后展开国际演奏生涯。",
      place: "费城 · 柯蒂斯音乐学院"
    },
    yuja: {
      id: "yuja", name: "Yuja Wang", displayName: "王羽佳",
      shortName: "王羽佳", initials: "王", kind: "pianist", role: "钢琴家",
      period: "1987–", context: "当代 / 费城",
      bio: "王羽佳曾在柯蒂斯音乐学院接受加里·格拉夫曼指导，毕业于该院 2008 届。",
      place: "费城 · 柯蒂斯音乐学院"
    },
    saito: {
      id: "saito", name: "Hideo Saito", displayName: "斋藤秀雄",
      shortName: "斋藤秀雄", initials: "斋", kind: "conductor", role: "大提琴家 · 指挥教育家",
      period: "1902–1974", context: "近现代 / 东京",
      bio: "日本音乐教育的重要人物，在桐朋学园培养了一代音乐家。小泽征尔曾在此跟随他学习指挥。",
      place: "东京 · 桐朋学园"
    },
    ozawa: {
      id: "ozawa", name: "Seiji Ozawa", displayName: "小泽征尔",
      shortName: "小泽征尔", initials: "小", kind: "conductor", role: "指挥家",
      period: "1935–2024", context: "近现代 / 东京",
      bio: "小泽征尔在东京跟随斋藤秀雄学习指挥，也曾在坦格尔伍德接受查尔斯·明希的指导。",
      place: "东京 · 桐朋学园"
    },
    munch: {
      id: "munch", name: "Charles Munch", displayName: "查尔斯·明希",
      shortName: "明希", initials: "明", kind: "conductor", role: "指挥家",
      period: "1891–1968", context: "近现代 / 坦格尔伍德",
      bio: "波士顿交响乐团音乐总监。1959 年小泽征尔获奖后，明希邀请他到坦格尔伍德学习。",
      place: "坦格尔伍德 · 伯克希尔音乐中心"
    },
    abreu: {
      id: "abreu", name: "José Antonio Abreu", displayName: "何塞·安东尼奥·阿布雷乌",
      shortName: "阿布雷乌", initials: "阿", kind: "conductor", role: "指挥家 · 教育家",
      period: "1939–2018", context: "近现代 / 委内瑞拉",
      bio: "委内瑞拉音乐教育家，创立 El Sistema。古斯塔沃·杜达梅尔成长于这一音乐教育体系。",
      place: "加拉加斯 · El Sistema"
    },
    dudamel: {
      id: "dudamel", name: "Gustavo Dudamel", displayName: "古斯塔沃·杜达梅尔",
      shortName: "杜达梅尔", initials: "杜", kind: "conductor", role: "指挥家",
      period: "1981–", context: "当代 / 委内瑞拉",
      bio: "杜达梅尔在 El Sistema 成长；阿布雷乌随后将西蒙·玻利瓦尔青年乐团的领导职责交给他。",
      place: "委内瑞拉 · El Sistema"
    }
  };

  const locations = {
    vienna: { id: "vienna", city: "维也纳", roman: "VIENNA", country: "奥地利", lat: 48.2082, lon: 16.3738, kinds: ["pianist"], edges: ["beethoven-czerny", "czerny-liszt"] },
    weimar: { id: "weimar", city: "魏玛", roman: "WEIMAR", country: "德国", lat: 50.9795, lon: 11.3235, kinds: ["pianist"], edges: ["liszt-bulow"] },
    philadelphia: { id: "philadelphia", city: "费城", roman: "PHILADELPHIA", country: "美国", lat: 39.9526, lon: -75.1652, kinds: ["pianist"], edges: ["graffman-lang", "graffman-yuja"] },
    tokyo: { id: "tokyo", city: "东京", roman: "TOKYO", country: "日本", lat: 35.6762, lon: 139.6503, kinds: ["conductor"], edges: ["saito-ozawa"] },
    tanglewood: { id: "tanglewood", city: "坦格尔伍德", roman: "TANGLEWOOD", country: "美国", lat: 42.3601, lon: -73.2823, kinds: ["conductor"], edges: ["munch-ozawa"] },
    caracas: { id: "caracas", city: "加拉加斯", roman: "CARACAS", country: "委内瑞拉", lat: 10.4806, lon: -66.9036, kinds: ["conductor"], edges: ["abreu-dudamel"] }
  };

  const edges = [
    { id: "beethoven-czerny", from: "beethoven", to: "czerny", place: "vienna", kind: "pianist", relation: "钢琴师生", detail: "约 1800 年起，车尔尼向贝多芬学习钢琴。", sourceTitle: "Beethoven-Haus Bonn · Beethoven’s Piano Sonatas", sourceUrl: "https://internet.beethoven.de/pdf-sonderausstellung/Beethovens-Klaviersonaten-Brief-Guide.pdf" },
    { id: "czerny-liszt", from: "czerny", to: "liszt", place: "vienna", kind: "pianist", relation: "钢琴师生", detail: "李斯特在 1821–1823 年间于维也纳随车尔尼学习。", sourceTitle: "Liszt Museum · About Franz Liszt", sourceUrl: "https://lisztmuseum.hu/research/about-franz-liszt-119943" },
    { id: "liszt-bulow", from: "liszt", to: "bulow", place: "weimar", kind: "pianist", relation: "指导与提携", detail: "李斯特在魏玛时期扶助彪罗等年轻音乐家开启事业。", sourceTitle: "Liszt Museum · About Franz Liszt", sourceUrl: "https://lisztmuseum.hu/research/about-franz-liszt-119943" },
    { id: "graffman-lang", from: "graffman", to: "lang", place: "philadelphia", kind: "pianist", relation: "钢琴教师", detail: "郎朗曾在柯蒂斯音乐学院师从格拉夫曼。", sourceTitle: "Curtis Institute · Legacy of Piano", sourceUrl: "https://www.curtis.edu/about/history/legacy-of-piano/" },
    { id: "graffman-yuja", from: "graffman", to: "yuja", place: "philadelphia", kind: "pianist", relation: "钢琴教师", detail: "王羽佳在柯蒂斯音乐学院接受格拉夫曼指导。", sourceTitle: "Curtis Institute · Yuja Wang", sourceUrl: "https://www.curtis.edu/person/yuja-wang/" },
    { id: "saito-ozawa", from: "saito", to: "ozawa", place: "tokyo", kind: "conductor", relation: "指挥学习", detail: "小泽征尔在桐朋学园跟随斋藤秀雄学习指挥。", sourceTitle: "Praemium Imperiale · Seiji Ozawa", sourceUrl: "https://www.praemiumimperiale.org/en/laureate/ozawa/" },
    { id: "munch-ozawa", from: "munch", to: "ozawa", place: "tanglewood", kind: "conductor", relation: "指挥训练", detail: "查尔斯·明希邀请小泽征尔到坦格尔伍德学习。", sourceTitle: "Boston Symphony Orchestra · Seiji Ozawa timeline", sourceUrl: "https://www.bso.org/exhibits/a-timeline-of-seiji-ozawa-and-the-bso" },
    { id: "abreu-dudamel", from: "abreu", to: "dudamel", place: "caracas", kind: "conductor", relation: "培养与提携", detail: "杜达梅尔在 El Sistema 成长，阿布雷乌后来将青年乐团领导职责交给他。", sourceTitle: "LA Phil · Gustavo Dudamel", sourceUrl: "https://www.laphil.com/people/gustavo-dudamel" }
  ];

  const lineages = [
    { id: "vienna-weimar", kind: "pianist", title: "从维也纳到魏玛", people: ["beethoven", "czerny", "liszt", "bulow"], paths: [["beethoven", "czerny", "liszt", "bulow"]], edgeIds: ["beethoven-czerny", "czerny-liszt", "liszt-bulow"], note: "三代钢琴传授与艺术扶助" },
    { id: "curtis", kind: "pianist", title: "费城的钢琴学派", people: ["graffman", "lang", "yuja"], paths: [["graffman", "lang"], ["graffman", "yuja"]], edgeIds: ["graffman-lang", "graffman-yuja"], note: "柯蒂斯音乐学院 · 教师与两位学生" },
    { id: "ozawa-training", kind: "conductor", title: "小泽征尔的指挥训练", people: ["saito", "munch", "ozawa"], paths: [["saito", "ozawa"], ["munch", "ozawa"]], edgeIds: ["saito-ozawa", "munch-ozawa"], note: "东京与坦格尔伍德 · 两段训练经历" },
    { id: "el-sistema", kind: "conductor", title: "从 El Sistema 走向世界", people: ["abreu", "dudamel"], paths: [["abreu", "dudamel"]], edgeIds: ["abreu-dudamel"], note: "委内瑞拉 · 音乐教育与人才培养" }
  ];

  let rotation = { ...DEFAULT_VIEW };
  let selectedPersonId = null;
  let selectedLocationId = null;
  let selectedLineageId = null;
  let selectedEdgeId = null;
  let currentFilter = "all";
  let isDragging = false;
  let dragStart = null;
  let didDrag = false;
  let autoRotate = false;
  let rafId = null;
  let lastFrame = 0;

  const globe = document.getElementById("globe");
  const graticuleGroup = document.getElementById("graticule");
  const landGroup = document.getElementById("land");
  const pinsGroup = document.getElementById("pins");
  const routesGroup = document.getElementById("routes");
  const detailRoot = document.getElementById("person-detail");
  const personGrid = document.getElementById("people-grid");

  const landShapes = [
    [[-168, 70], [-150, 71], [-138, 60], [-130, 54], [-128, 49], [-123, 42], [-117, 33], [-111, 31], [-106, 24], [-98, 17], [-91, 18], [-86, 13], [-80, 9], [-77, 18], [-81, 25], [-80, 32], [-74, 40], [-67, 45], [-60, 50], [-56, 55], [-66, 59], [-74, 63], [-83, 68], [-97, 73], [-115, 74], [-132, 69], [-151, 72], [-168, 70]],
    [[-73, 11], [-65, 10], [-58, 7], [-50, 1], [-48, -8], [-42, -14], [-39, -23], [-46, -31], [-51, -39], [-63, -55], [-69, -48], [-73, -35], [-76, -20], [-80, -5], [-77, 4], [-73, 11]],
    [[-53, 82], [-42, 79], [-31, 72], [-35, 63], [-47, 59], [-58, 64], [-65, 71], [-60, 78], [-53, 82]],
    [[-10, 36], [-10, 44], [-5, 51], [4, 56], [12, 60], [22, 65], [31, 70], [47, 72], [63, 69], [79, 72], [96, 74], [113, 70], [131, 64], [149, 60], [164, 56], [159, 48], [146, 45], [137, 39], [128, 35], [122, 28], [116, 22], [110, 17], [105, 8], [112, 2], [123, 0], [132, 3], [139, -3], [130, -8], [116, -8], [107, -5], [102, 1], [96, 8], [90, 20], [82, 22], [76, 10], [72, 8], [69, 22], [60, 25], [53, 17], [47, 12], [44, 19], [38, 25], [34, 31], [26, 34], [20, 39], [13, 42], [8, 43], [3, 40], [-2, 36], [-10, 36]],
    [[-17, 37], [-5, 36], [10, 34], [22, 32], [32, 31], [35, 23], [42, 12], [51, 11], [48, 1], [43, -12], [40, -20], [34, -28], [29, -34], [18, -35], [11, -26], [7, -13], [3, -4], [-3, 5], [-10, 12], [-17, 22], [-17, 37]],
    [[112, -11], [127, -12], [137, -17], [146, -22], [153, -29], [149, -38], [139, -39], [129, -35], [120, -31], [114, -23], [112, -11]],
    [[47, -13], [50, -17], [49, -24], [45, -25], [44, -18], [47, -13]],
    [[-8, 58], [-4, 59], [-3, 55], [-6, 54], [-8, 58]],
    [[-25, 66], [-17, 65], [-14, 63], [-20, 63], [-25, 66]]
  ];

  function svgEl(tag, attributes) {
    const element = document.createElementNS(SVG_NS, tag);
    Object.keys(attributes || {}).forEach((key) => element.setAttribute(key, attributes[key]));
    return element;
  }

  function toRadians(degrees) { return degrees * Math.PI / 180; }
  function wrapDegrees(degrees) {
    let result = ((degrees + 180) % 360 + 360) % 360 - 180;
    if (result === -180 && degrees > 0) result = 180;
    return result;
  }

  function project(lon, lat) {
    const phi = toRadians(lat);
    const lambda = toRadians(lon);
    const phi0 = toRadians(rotation.lat);
    const lambda0 = toRadians(rotation.lon);
    const delta = lambda - lambda0;
    const cosPhi = Math.cos(phi);
    const z = Math.sin(phi0) * Math.sin(phi) + Math.cos(phi0) * cosPhi * Math.cos(delta);
    return {
      x: CENTER.x + CENTER.r * cosPhi * Math.sin(delta),
      y: CENTER.y - CENTER.r * (Math.cos(phi0) * Math.sin(phi) - Math.sin(phi0) * cosPhi * Math.cos(delta)),
      z
    };
  }

  function curvePath(points) {
    let path = "";
    let drawing = false;
    points.forEach((point) => {
      const p = project(point[0], point[1]);
      if (p.z > 0.006) {
        path += (drawing ? " L " : " M ") + p.x.toFixed(2) + " " + p.y.toFixed(2);
        drawing = true;
      } else {
        drawing = false;
      }
    });
    return path;
  }

  function sampledPolygon(vertices) {
    const points = [];
    for (let i = 0; i < vertices.length - 1; i += 1) {
      const a = vertices[i];
      const b = vertices[i + 1];
      for (let step = 0; step < 8; step += 1) {
        const t = step / 8;
        let deltaLon = b[0] - a[0];
        if (deltaLon > 180) deltaLon -= 360;
        if (deltaLon < -180) deltaLon += 360;
        points.push([a[0] + deltaLon * t, a[1] + (b[1] - a[1]) * t]);
      }
    }
    points.push(vertices[vertices.length - 1]);
    return points;
  }

  function drawGlobe() {
    graticuleGroup.replaceChildren();
    landGroup.replaceChildren();
    pinsGroup.replaceChildren();
    routesGroup.replaceChildren();

    for (let lon = -180; lon < 180; lon += 20) {
      const points = [];
      for (let lat = -89; lat <= 89; lat += 2) points.push([lon, lat]);
      const d = curvePath(points);
      if (d) graticuleGroup.appendChild(svgEl("path", { d: d, class: "graticule-line" }));
    }
    for (let lat = -75; lat <= 75; lat += 15) {
      const points = [];
      for (let lon = -180; lon <= 180; lon += 2) points.push([lon, lat]);
      const d = curvePath(points);
      if (d) graticuleGroup.appendChild(svgEl("path", { d: d, class: "graticule-line" }));
    }

    landShapes.forEach((shape) => {
      const pts = sampledPolygon(shape);
      const d = curvePath(pts);
      if (!d) return;
      const allVisible = pts.every((point) => project(point[0], point[1]).z > 0.03);
      landGroup.appendChild(svgEl("path", { d: d + (allVisible ? " Z" : ""), class: allVisible ? "land-fill" : "land-line" }));
    });

    const activeEdgeIds = new Set();
    if (selectedLineageId) {
      const activeLineage = lineages.find((item) => item.id === selectedLineageId);
      if (activeLineage) activeLineage.edgeIds.forEach((id) => activeEdgeIds.add(id));
    } else if (selectedPersonId) {
      edges.filter((edge) => edge.from === selectedPersonId || edge.to === selectedPersonId).forEach((edge) => activeEdgeIds.add(edge.id));
    } else if (selectedEdgeId) {
      activeEdgeIds.add(selectedEdgeId);
    }

    Object.values(locations).forEach((location) => {
      const p = project(location.lon, location.lat);
      const group = svgEl("g", {
        class: "pin-group " + (location.kinds.includes("pianist") ? "piano" : "conductor") +
          (location.id === selectedLocationId ? " selected" : "") +
          (location.edges.some((edgeId) => activeEdgeIds.has(edgeId)) ? " related" : "") +
          (currentFilter !== "all" && !location.kinds.includes(currentFilter) ? " dimmed" : ""),
        transform: "translate(" + p.x.toFixed(2) + " " + p.y.toFixed(2) + ")",
        "data-location": location.id,
        role: "button",
        tabindex: p.z > 0.01 ? "0" : "-1",
        "aria-label": location.city + "，" + location.country
      });
      if (p.z <= 0.01) {
        group.setAttribute("visibility", "hidden");
        group.setAttribute("aria-hidden", "true");
      }
      group.appendChild(svgEl("circle", { r: "11", class: "pin-halo" }));
      group.appendChild(svgEl("circle", { r: "3.4", class: "pin-dot" }));
      const label = svgEl("text", { x: "9", y: "-7", class: "pin-label" });
      label.textContent = location.city;
      group.appendChild(label);
      group.addEventListener("pointerdown", (event) => event.stopPropagation());
      group.addEventListener("click", (event) => {
        event.stopPropagation();
        focusLocation(location.id);
      });
      group.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          focusLocation(location.id);
        }
      });
      pinsGroup.appendChild(group);
    });

    const latText = Math.abs(Math.round(rotation.lat)) + "°" + (rotation.lat >= 0 ? "N" : "S");
    const lonText = Math.abs(Math.round(wrapDegrees(rotation.lon))) + "°" + (wrapDegrees(rotation.lon) >= 0 ? "E" : "W");
    document.getElementById("coordinate-readout").innerHTML = latText + "&nbsp; · &nbsp;" + lonText;
    const visibleLocations = Object.values(locations).filter((loc) => currentFilter === "all" || loc.kinds.includes(currentFilter)).length;
    document.getElementById("location-count").textContent = String(visibleLocations).padStart(2, "0");
  }

  function edgeById(edgeId) { return edges.find((edge) => edge.id === edgeId); }
  function locationById(locationId) { return locations[locationId]; }
  function personById(personId) { return people[personId]; }

  function setFilter(filter) {
    currentFilter = filter;
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.classList.toggle("selected", button.dataset.filter === filter);
    });
    drawGlobe();
    renderLineages();
    renderPeople();
  }

  function focusLocation(locationId) {
    const location = locationById(locationId);
    if (!location) return;
    selectedLocationId = locationId;
    selectedPersonId = null;
    selectedLineageId = null;
    selectedEdgeId = null;
    rotation.lon = location.lon;
    rotation.lat = location.lat;
    renderDetails();
    drawGlobe();
    updateSelectedCards();
    renderPeople();
  }

  function selectPerson(personId, edgeId) {
    if (!personById(personId)) return;
    selectedPersonId = personId;
    selectedLocationId = null;
    selectedEdgeId = edgeId || null;
    selectedLineageId = null;
    const relevant = edgeId ? edgeById(edgeId) : edges.find((edge) => edge.from === personId || edge.to === personId);
    if (relevant && locationById(relevant.place)) {
      const place = locationById(relevant.place);
      rotation.lon = place.lon;
      rotation.lat = place.lat;
    }
    renderDetails();
    drawGlobe();
    updateSelectedCards();
    renderPeople();
  }

  function clearSelection() {
    selectedPersonId = null;
    selectedLocationId = null;
    selectedEdgeId = null;
    selectedLineageId = null;
    renderDetails();
    drawGlobe();
    updateSelectedCards();
    renderPeople();
  }

  function selectLineage(lineageId) {
    const lineage = lineages.find((item) => item.id === lineageId);
    if (!lineage) return;
    selectedLineageId = lineageId;
    selectedPersonId = null;
    selectedLocationId = null;
    selectedEdgeId = lineage.edgeIds[0];
    currentFilter = lineage.kind;
    const firstPlace = locationById(edgeById(lineage.edgeIds[0]).place);
    rotation.lon = firstPlace.lon;
    rotation.lat = firstPlace.lat;
    document.querySelectorAll("[data-filter]").forEach((button) => button.classList.toggle("selected", button.dataset.filter === currentFilter));
    renderDetails();
    drawGlobe();
    renderLineages();
    renderPeople();
    document.getElementById("map-view").scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function initialsAvatar(person, extraClass) {
    return '<span class="person-monogram ' + person.kind + (extraClass ? " " + extraClass : "") + '">' + person.initials + "</span>";
  }

  function connectionMarkup(edge, currentId) {
    const otherId = edge.from === currentId ? edge.to : edge.from;
    const other = personById(otherId);
    const direction = edge.from === currentId ? "师承 / 培养" : "老师 / 培养者";
    return '<button class="connection-item" data-person="' + other.id + '" data-edge="' + edge.id + '">' +
      '<span class="connection-avatar ' + other.kind + '">' + other.initials + "</span>" +
      '<span><span class="connection-name">' + other.displayName + '</span><span class="connection-role">' + direction + " · " + edge.relation + "</span>" +
      '<span class="relation-label">' + edge.detail + "</span></span><span class=\"connection-arrow\">↗</span></button>";
  }

  function sourceMarkup(edge) {
    if (!edge) return "";
    return '<div class="source-row"><span>关系来源<br>' + edge.sourceTitle + '</span><a href="' + edge.sourceUrl + '" target="_blank" rel="noopener noreferrer">查看来源 ↗</a></div>';
  }

  function renderPersonDetail(person) {
    const related = edges.filter((edge) => edge.from === person.id || edge.to === person.id);
    const currentEdge = (selectedEdgeId && related.find((edge) => edge.id === selectedEdgeId)) || related[0];
    const connectionHtml = related.length
      ? related.map((edge) => connectionMarkup(edge, person.id)).join("")
      : '<div class="empty-connections">当前档案暂无已录入的师承关系。</div>';
    detailRoot.innerHTML =
      '<div class="person-overview"><div class="person-title-row">' + initialsAvatar(person) +
      '<div class="person-title-copy"><h2>' + person.displayName + '</h2><span class="roman-name">' + person.name + "</span></div></div>" +
      '<span class="role-tag ' + person.kind + '">' + person.role + "</span>" +
      '<p class="person-description">' + person.bio + '</p></div>' +
      '<div class="detail-meta"><div class="meta-cell"><span>年代</span><strong>' + person.period + '</strong></div><div class="meta-cell"><span>音乐坐标</span><strong>' + person.context + '</strong></div></div>' +
      '<div class="connections"><div class="connections-heading"><span>关系链</span><span class="connection-count">' + String(related.length).padStart(2, "0") + " 条记录</span></div>" +
      '<div class="connection-list">' + connectionHtml + "</div></div>" + sourceMarkup(currentEdge);
  }

  function renderLineageDetail(lineage) {
    const typeLabel = lineage.kind === "pianist" ? "钢琴谱系" : "指挥谱系";
    const pathsMarkup = lineage.paths.map((path) => {
      const pathPeople = path.map((id) => personById(id));
      return '<div class="lineage-detail-path">' + pathPeople.map((person, index) =>
        (index ? '<span class="lineage-path-arrow">→</span>' : "") +
        '<button data-person="' + person.id + '">' + person.shortName + "</button>"
      ).join("") + "</div>";
    }).join("");
    const recordsMarkup = lineage.edgeIds.map(edgeById).filter(Boolean).map((edge) => {
      const teacher = personById(edge.from);
      const student = personById(edge.to);
      const place = locationById(edge.place);
      return '<div class="lineage-edge-row"><div class="place-record-line"><button data-person="' + teacher.id + '">' + teacher.shortName + '</button><span>→</span><button data-person="' + student.id + '">' + student.shortName + '</button></div>' +
        '<div class="place-record-relation">' + edge.relation + " · " + edge.detail + '</div><div class="lineage-edge-meta">' + place.city + " · " + place.country +
        '</div><a href="' + edge.sourceUrl + '" target="_blank" rel="noopener noreferrer">关系来源：' + edge.sourceTitle + " ↗</a></div>";
    }).join("");
    detailRoot.innerHTML =
      '<div class="lineage-detail-overview"><span class="role-tag ' + lineage.kind + '">' + typeLabel + '</span><h2>' + lineage.title + '</h2><p>' + lineage.note + '</p>' +
      '<div class="lineage-detail-paths">' + pathsMarkup + "</div></div>" +
      '<div class="connections"><div class="connections-heading"><span>谱系关系</span><span class="connection-count">' + lineage.edgeIds.length + " 条记录</span></div>" +
      '<div class="lineage-edge-list">' + recordsMarkup + "</div></div>";
  }

  function renderLocationDetail(location) {
    const placeEdges = location.edges.map(edgeById).filter(Boolean);
    const involved = new Set();
    placeEdges.forEach((edge) => { involved.add(edge.from); involved.add(edge.to); });
    const peopleMarkup = Array.from(involved).map((id) => {
      const person = personById(id);
      return '<button class="place-person-chip" data-person="' + person.id + '">' + initialsAvatar(person) + "<span>" + person.shortName + "</span></button>";
    }).join("");
    const recordMarkup = placeEdges.map((edge) => {
      const teacher = personById(edge.from);
      const student = personById(edge.to);
      return '<div class="place-record"><div class="place-record-line"><button data-person="' + teacher.id + '">' + teacher.shortName + '</button><span>→</span><button data-person="' + student.id + '">' + student.shortName + '</button></div><div class="place-record-relation">' + edge.relation + " · " + edge.detail + '</div><a href="' + edge.sourceUrl + '" target="_blank" rel="noopener noreferrer">来源：' + edge.sourceTitle + " ↗</a></div>";
    }).join("");
    detailRoot.innerHTML =
      '<div class="location-overview"><span class="location-eyebrow">传承地点 · ' + location.country + '</span><h2>' + location.city + '</h2>' +
      '<p>' + location.roman + " / " + location.country + '</p><div class="place-coordinate">' + Math.abs(location.lat).toFixed(1) + "°" + (location.lat > 0 ? "N" : "S") + " · " + Math.abs(location.lon).toFixed(1) + "°" + (location.lon > 0 ? "E" : "W") + "</div></div>" +
      '<div class="connections"><div class="connections-heading"><span>此地发生的关系</span><span class="connection-count">' + placeEdges.length + " 条记录</span></div><div class=\"place-records\">" + recordMarkup + "</div></div>" +
      '<div class="place-people"><span class="place-people-title">相关音乐家</span><div class="place-people-list">' + peopleMarkup + "</div></div>";
  }

  function renderDetails() {
    if (selectedLineageId) {
      const lineage = lineages.find((item) => item.id === selectedLineageId);
      if (lineage) {
        renderLineageDetail(lineage);
        return;
      }
    }
    if (selectedLocationId) {
      renderLocationDetail(locationById(selectedLocationId));
      return;
    }
    if (selectedPersonId) {
      renderPersonDetail(personById(selectedPersonId));
      return;
    }
    detailRoot.innerHTML =
      '<div class="empty-detail"><div class="empty-orbit" aria-hidden="true"></div><h2>从一段关系开始探索</h2>' +
      "<p>拖动半球发现音乐城市，或选择一位音乐家，<br>查看他的老师、学生与学习地点。</p>" +
      '<div class="empty-shortcuts"><button data-shortcut="vienna-weimar">维也纳钢琴传承</button><button data-shortcut="ozawa-training">小泽征尔的训练经历</button></div></div>';
  }

  function renderLineages() {
    const container = document.getElementById("lineage-cards");
    const filtered = lineages.filter((lineage) => currentFilter === "all" || lineage.kind === currentFilter);
    container.innerHTML = filtered.map((lineage) => {
      const typeLabel = lineage.kind === "pianist" ? "钢琴谱系" : "指挥谱系";
      const paths = (lineage.paths || [lineage.people]).map((path) =>
        '<div class="lineage-chain">' + path.map((id, index) =>
          (index ? "<b>→</b>" : "") + "<span>" + personById(id).shortName + "</span>"
        ).join("") + "</div>"
      ).join("");
      return '<button class="lineage-card ' + (lineage.kind === "conductor" ? "conductor " : "") +
        (selectedLineageId === lineage.id ? "selected" : "") + '" data-lineage="' + lineage.id + '">' +
        '<div class="lineage-card-head"><span class="lineage-type ' + lineage.kind + '"><i></i>' + typeLabel + '</span><span class="lineage-card-arrow">↗</span></div>' +
        "<h3>" + lineage.title + '</h3><div class="lineage-card-paths">' + paths + '</div><p class="lineage-card-note">' + lineage.note + "</p></button>";
    }).join("");
  }

  function renderPeople() {
    const query = (document.getElementById("person-search").value || "").trim().toLowerCase();
    const list = Object.values(people).filter((person) => {
      const matchesType = currentFilter === "all" || person.kind === currentFilter || (person.id === "bulow" && currentFilter === "conductor");
      const matchesText = !query || [person.name, person.displayName, person.shortName, person.role, person.context].join(" ").toLowerCase().includes(query);
      return matchesType && matchesText;
    });
    personGrid.innerHTML = list.length ? list.map((person) =>
      '<button class="person-card ' + (selectedPersonId === person.id ? "active" : "") + '" data-person="' + person.id + '">' +
      initialsAvatar(person) + '<span class="person-card-text"><strong>' + person.displayName + '</strong><span>' + person.role + "</span></span></button>"
    ).join("") : '<div class="no-results">没有找到匹配的音乐家，请尝试其他关键词。</div>';
  }

  function updateSelectedCards() {
    document.querySelectorAll(".lineage-card").forEach((card) => card.classList.toggle("selected", card.dataset.lineage === selectedLineageId));
  }

  function handlePointerDown(event) {
    if (event.button !== undefined && event.button !== 0) return;
    isDragging = true;
    didDrag = false;
    dragStart = { x: event.clientX, y: event.clientY, lon: rotation.lon, lat: rotation.lat };
    globe.classList.add("dragging");
    globe.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event) {
    if (!isDragging || !dragStart) return;
    const dx = event.clientX - dragStart.x;
    const dy = event.clientY - dragStart.y;
    if (Math.abs(dx) + Math.abs(dy) > 5) didDrag = true;
    rotation.lon = wrapDegrees(dragStart.lon - dx * 0.42);
    rotation.lat = Math.max(-82, Math.min(82, dragStart.lat + dy * 0.32));
    if (didDrag) document.getElementById("drag-hint").classList.add("hidden");
    drawGlobe();
  }

  function handlePointerUp() {
    isDragging = false;
    dragStart = null;
    globe.classList.remove("dragging");
  }

  function animate(time) {
    if (!autoRotate) return;
    if (time - lastFrame > 50 && !isDragging) {
      rotation.lon = wrapDegrees(rotation.lon + 0.14);
      drawGlobe();
      lastFrame = time;
    }
    rafId = window.requestAnimationFrame(animate);
  }

  function setAutoRotate(enabled) {
    autoRotate = enabled;
    const button = document.getElementById("rotate-button");
    button.setAttribute("aria-pressed", String(enabled));
    button.querySelector("span:last-child").textContent = enabled ? "暂停旋转" : "自动旋转";
    if (enabled) {
      if (rafId !== null) window.cancelAnimationFrame(rafId);
      rafId = window.requestAnimationFrame(animate);
    } else if (rafId !== null) {
      window.cancelAnimationFrame(rafId);
      rafId = null;
    }
  }

  function bindEvents() {
    globe.addEventListener("pointerdown", handlePointerDown);
    globe.addEventListener("pointermove", handlePointerMove);
    globe.addEventListener("pointerup", handlePointerUp);
    globe.addEventListener("pointercancel", handlePointerUp);
    globe.addEventListener("lostpointercapture", handlePointerUp);

    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => setFilter(button.dataset.filter));
    });
    document.querySelectorAll(".nav-item").forEach((button) => {
      button.addEventListener("click", () => {
        const view = button.dataset.view;
        document.querySelectorAll(".nav-item").forEach((item) => item.classList.toggle("active", item === button));
        const crumb = document.getElementById("crumb-current");
        if (view === "map") {
          crumb.textContent = "地理半球";
          document.getElementById("map-view").scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (view === "lineage") {
          crumb.textContent = "师承谱系";
          document.getElementById("lineage-view").scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          crumb.textContent = "音乐家索引";
          document.getElementById("people-view").scrollIntoView({ behavior: "smooth", block: "start" });
          document.getElementById("person-search").focus({ preventScroll: true });
        }
      });
    });

    document.getElementById("rotate-button").addEventListener("click", () => setAutoRotate(!autoRotate));
    document.getElementById("reset-button").addEventListener("click", () => {
      setAutoRotate(false);
      rotation = { ...DEFAULT_VIEW };
      document.getElementById("drag-hint").classList.remove("hidden");
      clearSelection();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    document.getElementById("close-detail").addEventListener("click", clearSelection);
    document.getElementById("person-search").addEventListener("input", renderPeople);
    document.getElementById("person-search").addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.currentTarget.value = "";
        renderPeople();
        event.currentTarget.blur();
      }
    });

    document.addEventListener("click", (event) => {
      const personButton = event.target.closest("[data-person]");
      if (personButton) {
        selectPerson(personButton.dataset.person, personButton.dataset.edge);
        return;
      }
      const lineageButton = event.target.closest("[data-lineage]");
      if (lineageButton) {
        selectLineage(lineageButton.dataset.lineage);
        return;
      }
      const shortcut = event.target.closest("[data-shortcut]");
      if (shortcut) selectLineage(shortcut.dataset.shortcut);
    });

    document.getElementById("see-all-lineages").addEventListener("click", () => {
      setFilter("all");
      document.getElementById("lineage-view").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    const dialog = document.getElementById("about-dialog");
    document.getElementById("about-button").addEventListener("click", () => dialog.showModal());
    document.getElementById("dialog-close").addEventListener("click", () => dialog.close());
    document.getElementById("dialog-ok").addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    document.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        document.getElementById("person-search").focus();
        document.getElementById("people-view").scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  drawGlobe();
  renderDetails();
  renderLineages();
  renderPeople();
  bindEvents();
})();

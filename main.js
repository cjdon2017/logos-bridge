"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => LogosBridgePlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  autoLinkReferences: true,
  searchKind: "AllSearch",
  preferredVersion: "",
  commonplaceFolder: "11 Commonplace Book",
  citationsFileName: "Citas desde Logos.md"
};
var BOOK_MAP = {
  // Pentateuco
  "genesis": "Gen",
  "gen": "Gen",
  "gn": "Gen",
  "exodo": "Exod",
  "ex": "Exod",
  "exo": "Exod",
  "levitico": "Lev",
  "lev": "Lev",
  "lv": "Lev",
  "numeros": "Num",
  "num": "Num",
  "nm": "Num",
  "deuteronomio": "Deut",
  "deut": "Deut",
  "dt": "Deut",
  // Históricos
  "josue": "Josh",
  "jos": "Josh",
  "jueces": "Judg",
  "jue": "Judg",
  "jc": "Judg",
  "rut": "Ruth",
  "rt": "Ruth",
  "1samuel": "1Sam",
  "1sam": "1Sam",
  "1s": "1Sam",
  "2samuel": "2Sam",
  "2sam": "2Sam",
  "2s": "2Sam",
  "1reyes": "1Kgs",
  "1re": "1Kgs",
  "1r": "1Kgs",
  "2reyes": "2Kgs",
  "2re": "2Kgs",
  "2r": "2Kgs",
  "1cronicas": "1Chr",
  "1cr": "1Chr",
  "2cronicas": "2Chr",
  "2cr": "2Chr",
  "esdras": "Ezra",
  "esd": "Ezra",
  "nehemias": "Neh",
  "neh": "Neh",
  "ester": "Esth",
  "est": "Esth",
  // Poéticos
  "job": "Job",
  "jb": "Job",
  "salmos": "Ps",
  "salmo": "Ps",
  "sal": "Ps",
  "sl": "Ps",
  "proverbios": "Prov",
  "prov": "Prov",
  "pr": "Prov",
  "eclesiastes": "Eccl",
  "ecl": "Eccl",
  "ec": "Eccl",
  "cantares": "Song",
  "cantardeloscantares": "Song",
  "cnt": "Song",
  // Profetas mayores
  "isaias": "Isa",
  "is": "Isa",
  "jeremias": "Jer",
  "jer": "Jer",
  "lamentaciones": "Lam",
  "lam": "Lam",
  "ezequiel": "Ezek",
  "ez": "Ezek",
  "daniel": "Dan",
  "dan": "Dan",
  "dn": "Dan",
  // Profetas menores
  "oseas": "Hos",
  "os": "Hos",
  "joel": "Joel",
  "jl": "Joel",
  "amos": "Amos",
  "am": "Amos",
  "abdias": "Obad",
  "abd": "Obad",
  "jonas": "Jonah",
  "jon": "Jonah",
  "miqueas": "Mic",
  "miq": "Mic",
  "nahum": "Nah",
  "nah": "Nah",
  "habacuc": "Hab",
  "hab": "Hab",
  "sofonias": "Zeph",
  "sof": "Zeph",
  "hageo": "Hag",
  "hag": "Hag",
  "zacarias": "Zech",
  "zac": "Zech",
  "malaquias": "Mal",
  "mal": "Mal",
  // Evangelios / Hechos
  "mateo": "Matt",
  "mt": "Matt",
  "marcos": "Mark",
  "mc": "Mark",
  "mr": "Mark",
  "lucas": "Luke",
  "lc": "Luke",
  "juan": "Jn",
  "jn": "Jn",
  "hechos": "Acts",
  "hch": "Acts",
  // Cartas paulinas
  "romanos": "Rom",
  "rom": "Rom",
  "ro": "Rom",
  "1corintios": "1Cor",
  "1cor": "1Cor",
  "1co": "1Cor",
  "2corintios": "2Cor",
  "2cor": "2Cor",
  "2co": "2Cor",
  "galatas": "Gal",
  "gal": "Gal",
  "efesios": "Eph",
  "ef": "Eph",
  "filipenses": "Phil",
  "fil": "Phil",
  "colosenses": "Col",
  "col": "Col",
  "1tesalonicenses": "1Thess",
  "1tes": "1Thess",
  "2tesalonicenses": "2Thess",
  "2tes": "2Thess",
  "1timoteo": "1Tim",
  "1tim": "1Tim",
  "2timoteo": "2Tim",
  "2tim": "2Tim",
  "tito": "Titus",
  "tit": "Titus",
  "filemon": "Phlm",
  "flm": "Phlm",
  // Generales / Apocalipsis
  "hebreos": "Heb",
  "heb": "Heb",
  "santiago": "Jas",
  "stg": "Jas",
  "1pedro": "1Pet",
  "1pe": "1Pet",
  "2pedro": "2Pet",
  "2pe": "2Pet",
  "1juan": "1Jn",
  "1jn": "1Jn",
  "2juan": "2Jn",
  "2jn": "2Jn",
  "3juan": "3Jn",
  "3jn": "3Jn",
  "judas": "Jude",
  "jud": "Jude",
  "apocalipsis": "Rev",
  "apoc": "Rev",
  "ap": "Rev"
};
function buildReferenceRegex() {
  const bookNames = Array.from(
    new Set(
      Object.keys(BOOK_MAP).map((k) => k.replace(/^[1-3]/, ""))
    )
  ).sort((a, b) => b.length - a.length);
  const bookPattern = bookNames.map(accentInsensitivePattern).join("|");
  return new RegExp(
    `\\b([1-3]\\s?)?(${bookPattern})\\.?\\s+(\\d{1,3})(?:[:.](\\d{1,3})(?:-(\\d{1,3}))?)?\\b`,
    "gi"
  );
}
function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
var ACCENT_CLASSES = {
  a: "[a\xE1]",
  e: "[e\xE9]",
  i: "[i\xED]",
  o: "[o\xF3]",
  u: "[u\xFA\xFC]"
};
function accentInsensitivePattern(s) {
  return s.split("").map((ch) => ACCENT_CLASSES[ch] || escapeRegex(ch)).join("");
}
function normalizeBookKey(prefix, name) {
  const cleanPrefix = (prefix || "").trim();
  const cleanName = name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\./g, "").trim();
  return `${cleanPrefix}${cleanName}`;
}
function toRefLySlug(prefix, book, chapter, verse, verseEnd) {
  const key = normalizeBookKey(prefix, book);
  const abbrev = BOOK_MAP[key];
  if (!abbrev) return null;
  let slug = `${abbrev}${chapter}`;
  if (verse) {
    slug += `.${verse}`;
    if (verseEnd) slug += `-${verseEnd}`;
  }
  return slug;
}
function buildRefLyUrl(slug, version) {
  if (version) {
    return `https://ref.ly/logosres/${encodeURIComponent(version)}?ref=${encodeURIComponent(
      `Bible${version.toUpperCase()}.${slug}`
    )}`;
  }
  return `https://ref.ly/${encodeURIComponent(slug)}`;
}
function buildSearchUrl(query, kind, engine) {
  const params = new URLSearchParams({
    kind,
    q: query,
    syntax: "v2"
  });
  if (engine) params.set("engine", engine);
  return `https://ref.ly/logos4/Search?${params.toString()}`;
}
function buildFactbookConceptUrl(topic) {
  const encodedTopic = encodeURIComponent(topic);
  const id = `ref:bk.%${encodedTopic}`;
  const params = new URLSearchParams({ id, lens: "all" });
  return `https://ref.ly/logos4/Factbook?${params.toString()}`;
}
function buildBooksSearchUrl(query) {
  return buildSearchUrl(query, "BooksSearch");
}
function buildSmartQuestionUrl(question) {
  return buildSearchUrl(question, "BooksSearch", "Semantic");
}
var LogosBridgePlugin = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    this.referenceRegex = buildReferenceRegex();
    this.registerMarkdownPostProcessor((el, ctx) => {
      if (!this.settings.autoLinkReferences) return;
      this.linkReferencesInElement(el, ctx);
    });
    this.addCommand({
      id: "open-selection-in-logos",
      name: "Abrir selecci\xF3n en Logos",
      editorCallback: (editor) => {
        const selection = editor.getSelection().trim();
        if (!selection) {
          new import_obsidian.Notice("Selecciona una referencia b\xEDblica o un texto para buscar en Logos.");
          return;
        }
        this.openInLogos(selection);
      }
    });
    this.addCommand({
      id: "search-logos-prompt",
      name: "Buscar en Logos\u2026",
      callback: () => {
        const query = window.prompt("\xBFQu\xE9 quieres buscar en Logos?");
        if (query && query.trim()) {
          this.openInLogos(query.trim());
        }
      }
    });
    this.addCommand({
      id: "search-factbook-concept",
      name: "Buscar concepto en el Factbook",
      editorCallback: (editor) => {
        const selection = editor.getSelection().trim();
        const topic = selection || window.prompt("\xBFQu\xE9 concepto o palabra quieres explorar en el Factbook?");
        if (!topic || !topic.trim()) {
          new import_obsidian.Notice("Escribe o selecciona un concepto para buscar en el Factbook.");
          return;
        }
        window.open(buildFactbookConceptUrl(topic.trim()));
      }
    });
    this.addCommand({
      id: "search-author-book",
      name: "Buscar autor u obra en Logos",
      editorCallback: (editor) => {
        const selection = editor.getSelection().trim();
        const query = selection || window.prompt("\xBFQu\xE9 autor u obra quieres buscar en tu biblioteca de Logos?");
        if (!query || !query.trim()) {
          new import_obsidian.Notice("Escribe o selecciona un autor u obra para buscar.");
          return;
        }
        window.open(buildBooksSearchUrl(query.trim()));
      }
    });
    this.addCommand({
      id: "smart-theological-question",
      name: "Pregunta teol\xF3gica (Smart Search en Logos)",
      callback: () => {
        const question = window.prompt(
          "Escribe tu pregunta teol\xF3gica (Logos usar\xE1 IA para buscar en tu biblioteca):"
        );
        if (question && question.trim()) {
          window.open(buildSmartQuestionUrl(question.trim()));
        }
      }
    });
    this.addCommand({
      id: "log-citation-commonplace",
      name: "Registrar cita en Commonplace Book",
      editorCallback: async (editor) => {
        const selection = editor.getSelection().trim();
        if (!selection) {
          new import_obsidian.Notice("Selecciona una referencia b\xEDblica o texto para registrar.");
          return;
        }
        await this.logCitation(selection);
      }
    });
    this.addCommand({
      id: "insert-citation-list",
      name: "Insertar lista de pasajes citados en esta nota",
      editorCallback: (editor) => {
        this.insertCitationList(editor);
      }
    });
    this.addSettingTab(new LogosBridgeSettingTab(this.app, this));
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  /** Decide si abrir una referencia bíblica directa o una búsqueda, y abre Logos. */
  openInLogos(text) {
    this.referenceRegex.lastIndex = 0;
    const match = this.referenceRegex.exec(text);
    if (match && match[0].length >= text.length * 0.6) {
      const [, prefix, book, chapter, verse, verseEnd] = match;
      const slug = toRefLySlug(prefix, book, chapter, verse, verseEnd);
      if (slug) {
        const url2 = buildRefLyUrl(slug, this.settings.preferredVersion);
        window.open(url2);
        return;
      }
    }
    const url = buildSearchUrl(text, this.settings.searchKind);
    window.open(url);
  }
  /** Registra una cita (referencia o texto libre) en el archivo de Commonplace Book. */
  async logCitation(text) {
    const folderPath = (0, import_obsidian.normalizePath)(this.settings.commonplaceFolder);
    const filePath = (0, import_obsidian.normalizePath)(`${folderPath}/${this.settings.citationsFileName}`);
    const folder = this.app.vault.getAbstractFileByPath(folderPath);
    if (!folder) {
      try {
        await this.app.vault.createFolder(folderPath);
      } catch (e) {
      }
    }
    let file = this.app.vault.getAbstractFileByPath(filePath);
    if (!file) {
      file = await this.app.vault.create(
        filePath,
        "# Citas desde Logos\n\nRegistro de referencias y textos enviados a Logos desde Obsidian.\n\n"
      );
    }
    this.referenceRegex.lastIndex = 0;
    const match = this.referenceRegex.exec(text);
    let url;
    if (match && match[0].length >= text.length * 0.6) {
      const [, prefix, book, chapter, verse, verseEnd] = match;
      const slug = toRefLySlug(prefix, book, chapter, verse, verseEnd);
      url = slug ? buildRefLyUrl(slug, this.settings.preferredVersion) : buildSearchUrl(text, this.settings.searchKind);
    } else {
      url = buildSearchUrl(text, this.settings.searchKind);
    }
    const today = (/* @__PURE__ */ new Date()).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    });
    const line = `- **${text}** \u2014 [Abrir en Logos](${url}) _(${today})_
`;
    await this.app.vault.append(file, line);
    new import_obsidian.Notice(`Cita registrada en ${this.settings.citationsFileName}`);
  }
  /** Escanea la nota activa, encuentra todas las referencias bíblicas y
   * agrega/actualiza una sección "## Pasajes citados" al final. */
  insertCitationList(editor) {
    const content = editor.getValue();
    this.referenceRegex.lastIndex = 0;
    const seen = /* @__PURE__ */ new Set();
    const items = [];
    let match;
    while (match = this.referenceRegex.exec(content)) {
      const [full, prefix, book, chapter, verse, verseEnd] = match;
      const slug = toRefLySlug(prefix, book, chapter, verse, verseEnd);
      if (!slug || seen.has(slug)) continue;
      seen.add(slug);
      const url = buildRefLyUrl(slug, this.settings.preferredVersion);
      items.push(`- [${full}](${url})`);
    }
    if (items.length === 0) {
      new import_obsidian.Notice("No se encontraron referencias b\xEDblicas en esta nota.");
      return;
    }
    const heading = "## Pasajes citados";
    const sectionText = `${heading}

${items.join("\n")}
`;
    const headingIndex = content.indexOf(heading);
    let newContent;
    if (headingIndex === -1) {
      const separator = content.endsWith("\n") ? "\n" : "\n\n";
      newContent = `${content}${separator}${sectionText}`;
    } else {
      const rest = content.slice(headingIndex + heading.length);
      const nextHeadingMatch = rest.match(/\n#{1,2}\s/);
      const endIndex = nextHeadingMatch ? headingIndex + heading.length + (nextHeadingMatch.index || 0) + 1 : content.length;
      newContent = content.slice(0, headingIndex) + sectionText + content.slice(endIndex);
    }
    editor.setValue(newContent);
    new import_obsidian.Notice(`Lista de pasajes citados actualizada (${items.length}).`);
  }
  /** Recorre los nodos de texto de un elemento renderizado y reemplaza referencias por enlaces. */
  linkReferencesInElement(el, _ctx) {
    var _a;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
      acceptNode: (node) => {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest("a, code, pre")) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const textNodes = [];
    let current;
    while (current = walker.nextNode()) {
      textNodes.push(current);
    }
    for (const node of textNodes) {
      const text = node.textContent || "";
      this.referenceRegex.lastIndex = 0;
      if (!this.referenceRegex.test(text)) continue;
      this.referenceRegex.lastIndex = 0;
      const frag = document.createDocumentFragment();
      let lastIndex = 0;
      let match;
      while (match = this.referenceRegex.exec(text)) {
        const [full, prefix, book, chapter, verse, verseEnd] = match;
        const slug = toRefLySlug(prefix, book, chapter, verse, verseEnd);
        if (!slug) continue;
        if (match.index > lastIndex) {
          frag.appendChild(
            document.createTextNode(text.slice(lastIndex, match.index))
          );
        }
        const a = document.createElement("a");
        a.textContent = full;
        a.href = buildRefLyUrl(slug, this.settings.preferredVersion);
        a.classList.add("logos-bridge-link");
        a.setAttribute("aria-label", "Abrir en Logos");
        a.target = "_blank";
        a.rel = "noopener";
        frag.appendChild(a);
        lastIndex = match.index + full.length;
      }
      if (lastIndex < text.length) {
        frag.appendChild(document.createTextNode(text.slice(lastIndex)));
      }
      (_a = node.parentNode) == null ? void 0 : _a.replaceChild(frag, node);
    }
  }
};
var LogosBridgeSettingTab = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Logos Bridge" });
    new import_obsidian.Setting(containerEl).setName("Enlazar referencias b\xEDblicas autom\xE1ticamente").setDesc(
      "Convierte referencias como 'Juan 3:16' o '1 Corintios 13:4-7' en enlaces que abren Logos, dentro de la vista de lectura."
    ).addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.autoLinkReferences).onChange(async (value) => {
        this.plugin.settings.autoLinkReferences = value;
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Versi\xF3n b\xEDblica preferida (opcional)").setDesc(
      "C\xF3digo de la versi\xF3n en Logos, ej. 'rvr1960' o 'esv'. D\xE9jalo vac\xEDo para usar tu versi\xF3n preferida configurada dentro de Logos."
    ).addText(
      (text) => text.setPlaceholder("rvr1960").setValue(this.plugin.settings.preferredVersion).onChange(async (value) => {
        this.plugin.settings.preferredVersion = value.trim();
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "Commonplace Book" });
    new import_obsidian.Setting(containerEl).setName("Carpeta del Commonplace Book").setDesc(
      "Carpeta de tu b\xF3veda donde se guardan las citas registradas con 'Registrar cita en Commonplace Book'."
    ).addText(
      (text) => text.setPlaceholder("11 Commonplace Book").setValue(this.plugin.settings.commonplaceFolder).onChange(async (value) => {
        this.plugin.settings.commonplaceFolder = value.trim() || "11 Commonplace Book";
        await this.plugin.saveSettings();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Nombre del archivo de citas").setDesc("Nombre del archivo dentro de esa carpeta donde se registran las citas.").addText(
      (text) => text.setPlaceholder("Citas desde Logos.md").setValue(this.plugin.settings.citationsFileName).onChange(async (value) => {
        this.plugin.settings.citationsFileName = value.trim() || "Citas desde Logos.md";
        await this.plugin.saveSettings();
      })
    );
    containerEl.createEl("h3", { text: "B\xFAsqueda" });
    new import_obsidian.Setting(containerEl).setName("Tipo de b\xFAsqueda en Logos").setDesc(
      "Qu\xE9 herramienta de b\xFAsqueda de Logos se usa cuando el texto seleccionado no es una referencia b\xEDblica clara."
    ).addDropdown(
      (drop) => drop.addOption("AllSearch", "B\xFAsqueda general (toda la biblioteca)").addOption("BibleSearch", "B\xFAsqueda b\xEDblica").addOption("BooksSearch", "B\xFAsqueda de libros").setValue(this.plugin.settings.searchKind).onChange(async (value) => {
        this.plugin.settings.searchKind = value;
        await this.plugin.saveSettings();
      })
    );
  }
};

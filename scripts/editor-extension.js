function mapObject(obj, fn) {
  return Object.fromEntries();
}

export class EditorExtension {

  constructor() {
    EditorExtension.#getTemplateList().then(list => this.#templateList = list)
  }

  static async #getTemplateList() {
    let data = {};
    try {
      data = await foundry.utils.fetchJsonWithTimeout("modules/journal-wod/json/template-list.json");
    } catch(err) {
      console.warn(`journal-wod | Failed to retrieve Template List data: ${err.message}`);
    }
    return data;
  };

  #templateList;

  registerNewProseMirrorMenuDropDowns(pmmenu, menus) {
    menus.journalWodTemplates = {
      action: "journalWodTemplates",
      title: game.i18n.localize("journal-wod.Templates") || "Templates", 
      cssClass: "journalWodTemplates",
      entries: this.#getDropDownEntries(pmmenu)
    }
  }

  #getDropDownEntries(pmmenu) {
    const getLocalizedTitle = (title) => {
      if (typeof title === 'object') {
        return title[game.i18n.lang] || title.en || Object.values(title)[0];
      }
      return title;
    };

    const mapping = ([k, v]) => {
      if ('items' in v) {
        return {
          action: `journalWodTemplates-${k}`,
          title: getLocalizedTitle(v.title), 
          children: Object.entries(v.items).map(mapping)
        }
      } else {
        return {
          action: `journalWodTemplates-${k}`,
          title: getLocalizedTitle(v.title), 
          cmd: this.#addTemplate.bind(this, pmmenu, k),
        }
      }
    }
    return Object.entries(this.#templateList).map(mapping)
  }

  async #addTemplate(pmmenu, templateId) {
    let content = await renderTemplate(
      `modules/journal-wod/templates/${templateId}.html`
    );
    const node = ProseMirror.dom.parseString(content);
    const state = pmmenu.view.state;
    const { $cursor } = state.selection;
    const tr = state.tr.insert($cursor.pos, node.content);
    const pos = $cursor.pos;// + node.nodeSize;

    tr.setSelection(ProseMirror.TextSelection.create(tr.doc, pos));
    pmmenu.view.dispatch(tr);
  }
}
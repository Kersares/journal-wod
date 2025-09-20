import { EditorExtension } from "./editor-extension.js";


Hooks.once('setup', function() {
  const editorExtension = new EditorExtension();
  
  Hooks.on('getProseMirrorMenuDropDowns', (pmmenu, menus) => {
    editorExtension.registerNewProseMirrorMenuDropDowns(pmmenu, menus);
  });
});

// Определение версии Foundry
function getFoundryVersion() {
  if (typeof game !== 'undefined' && game.release?.generation) {
    return game.release.generation >= 13 ? 'v13+' : 'v12';
  }
  if (typeof foundry !== 'undefined' && foundry.applications?.sheets?.journal?.JournalEntrySheet) {
    return 'v13+';
  }
  if (typeof JournalSheet !== 'undefined') {
    return 'v12';
  }
  console.warn("Не удалось определить версию Foundry, используется v12 как fallback");
  return 'v12';
}
// Добавление листов
Hooks.once('init', function() {
  const version = getFoundryVersion();
  console.log(`Определена версия Foundry: ${version}`); 
  
  if (version === 'v13+') {
    // ======================
    // РЕАЛИЗАЦИЯ ДЛЯ V13+
    // ======================
    /**
 * Базовый класс журналов WoD
 */
class WodJournalBase extends foundry.applications.sheets.journal.JournalEntrySheet {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    template: "templates/applications/journal-page.html"
  };
}


class VampireJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "vampire-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("vampire-theme-dark");
  }
}
class GeneralWoDJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "generalwod-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("generalwod-theme-dark");
  }
}
class DemonJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "demon-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("demom-theme-dark");
  }
}
class MageJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "mage-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("mage-theme-dark");
  }
}
class WerewolfJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "werewolf-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("werewolf-theme-dark");
  }
}
class HunterJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "hunter-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("hunter-theme-dark");
  }
}
class ChangelingJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "changeling-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("changeling-theme-dark");
  }
}
class WraithJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "wraith-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("wraith-theme-dark");
  }
}
class EastJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "east-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("east-theme-dark");
  }
}
class WildWestJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "wildwest-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("wildwest-theme-dark");
  }
}
class DarkAgesJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "darkages-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("darkages-theme-dark");
  }
}
class DarkCuprumJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "darkcuprum-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("darkcuprum-theme-dark");
  }
}
class UmbraJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "umbra-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("umbra-theme-dark");
  }
}
class AuroraJournal extends WodJournalBase {
  static DEFAULT_OPTIONS = {
    ...super.DEFAULT_OPTIONS,
    classes: ["sheet", "journal-entry", "aurora-journal", "titlebar"]
  };

  async _render(force=false, options={}) {
    await super._render(force, options);
    this.element[0]?.classList.add("aurora-theme-dark");
  }
}

const registerWodSheets = (attempt = 1) => {
  // Регистрация
  if (foundry?.applications?.apps?.DocumentSheetConfig?.registerSheet) {
    try {
      // Регистрируем листы 
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", VampireJournal, {
          label: game.i18n.localize("journal-wod.VampireJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", GeneralWoDJournal, {
          label: game.i18n.localize("journal-wod.GeneralWoDJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", DemonJournal, {
          label: game.i18n.localize("journal-wod.DemonJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", MageJournal, {
          label: game.i18n.localize("journal-wod.MageJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", WerewolfJournal, {
          label: game.i18n.localize("journal-wod.WerewolfJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", HunterJournal, {
          label: game.i18n.localize("journal-wod.HunterJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", ChangelingJournal, {
          label: game.i18n.localize("journal-wod.ChangelingJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", WraithJournal, {
          label: game.i18n.localize("journal-wod.WraithJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", EastJournal, {
          label: game.i18n.localize("journal-wod.EastJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", WildWestJournal, {
          label: game.i18n.localize("journal-wod.WildWestJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", DarkAgesJournal, {
          label: game.i18n.localize("journal-wod.DarkAgesJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", DarkCuprumJournal, {
          label: game.i18n.localize("journal-wod.DarkCuprumJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", UmbraJournal, {
          label: game.i18n.localize("journal-wod.UmbraJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      foundry.applications.apps.DocumentSheetConfig.registerSheet(
        JournalEntry, "journal-wod", AuroraJournal, {
          label: game.i18n.localize("journal-wod.AuroraJournal"),
          types: ["base"],
          makeDefault: false
        }
      );
      
      console.log("Листы зарегистрированы черезAPI!");
      return true;
    } catch (err) {
      console.error("Ошибка регистрации:", err);
    }
  }
};

// Первый запуск при полной загрузке
Hooks.once('ready', () => registerWodSheets());

  } else {
    // ======================
    // РЕАЛИЗАЦИЯ ДЛЯ V12
    // ======================
    class GeneralWoDJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "generalwod-journal"]
        };
      }
    }

    class VampireJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "vampire-journal"]
        };
      }
    }
    class DemonJournal extends JournalSheet {
	    static get defaultOptions() {
		    return {
			    ...super.defaultOptions,
			    classes: [...super.defaultOptions.classes, "demon-journal"]
		    };
	    }
    }

    class MageJournal extends JournalSheet {
	    static get defaultOptions() {
		    return {
			    ...super.defaultOptions,
			    classes: [...super.defaultOptions.classes, "mage-journal"]
		    };
	    }
    }

    class WerewolfJournal extends JournalSheet {
	    static get defaultOptions() {
		    return {
			    ...super.defaultOptions,
			    classes: [...super.defaultOptions.classes, "werewolf-journal"]
		    };
	    }
    }

    class HunterJournal extends JournalSheet {
	    static get defaultOptions() {
		    return {
			    ...super.defaultOptions,
			    classes: [...super.defaultOptions.classes, "hunter-journal"]
		    };
	    }
    }

    class ChangelingJournal extends JournalSheet {
	    static get defaultOptions() {
		    return {
			    ...super.defaultOptions,
			    classes: [...super.defaultOptions.classes, "changeling-journal"]
		    };
	    }
    }

    class WraithJournal extends JournalSheet {
	    static get defaultOptions() {
		    return {
			    ...super.defaultOptions,
			    classes: [...super.defaultOptions.classes, "wraith-journal"]
		    };
	    }
    }

    class EastJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "east-journal"]
        };
      }
    }

    class WildWestJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "wildwest-journal"]
        };
      }
    }

    class DarkAgesJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "darkages-journal"]
        };
      }
    }

    class DarkCuprumJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "darkcuprum-journal"]
        };
      }
    }

    class UmbraJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "umbra-journal"]
        };
      }
    }

    class AuroraJournal extends JournalSheet {
      static get defaultOptions() {
        return {
          ...super.defaultOptions,
          classes: [...super.defaultOptions.classes, "aurora-journal"]
        };
      }
    }

    // Регистрация для v12
    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", GeneralWoDJournal, {
      label: game.i18n.localize("journal-wod.GeneralWoDJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", VampireJournal, {
      label: game.i18n.localize("journal-wod.VampireJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", DemonJournal, {
      label: game.i18n.localize("journal-wod.DemonJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", MageJournal, {
      label: game.i18n.localize("journal-wod.MageJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", WerewolfJournal, {
      label: game.i18n.localize("journal-wod.WerewolfJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", HunterJournal, {
      label: game.i18n.localize("journal-wod.HunterJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", ChangelingJournal, {
      label: game.i18n.localize("journal-wod.ChangelingJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", WraithJournal, {
      label: game.i18n.localize("journal-wod.WraithJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", EastJournal, {
      label: game.i18n.localize("journal-wod.EastJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", WildWestJournal, {
      label: game.i18n.localize("journal-wod.WildWestJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", DarkAgesJournal, {
      label: game.i18n.localize("journal-wod.DarkAgesJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", DarkCuprumJournal, {
      label: game.i18n.localize("journal-wod.DarkCuprumJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", UmbraJournal, {
      label: game.i18n.localize("journal-wod.UmbraJournal"),
      types: ["base"],
      makeDefault: false
    });

    DocumentSheetConfig.registerSheet(JournalEntry, "journal-wod", AuroraJournal, {
      label: game.i18n.localize("journal-wod.AuroraJournal"),
      types: ["base"],
      makeDefault: false
    });
  }
});
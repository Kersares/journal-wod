// 1. Создаем КЛАССЫ для каждого стиля (CSS-классы сохраняем)
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
// 2. Регистрируем ВСЕ стили с локализациями
export function registerAllSheets() {
	Journal.registerSheet("journal-wod", GeneralWoDJournal, {
		label: game.i18n.localize("journal-wod.GeneralWoDJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", VampireJournal, {
		label: game.i18n.localize("journal-wod.VampireJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", DemonJournal, {
		label: game.i18n.localize("journal-wod.DemonJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", MageJournal, {
		label: game.i18n.localize("journal-wod.MageJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", WerewolfJournal, {
		label: game.i18n.localize("journal-wod.WerewolfJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", HunterJournal, {
		label: game.i18n.localize("journal-wod.HunterJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", ChangelingJournal, {
		label: game.i18n.localize("journal-wod.ChangelingJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", WraithJournal, {
		label: game.i18n.localize("journal-wod.WraithJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", EastJournal, {
		label: game.i18n.localize("journal-wod.EastJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", WildWestJournal, {
		label: game.i18n.localize("journal-wod.WildWestJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", DarkAgesJournal, {
		label: game.i18n.localize("journal-wod.DarkAgesJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", DarkCuprumJournal, {
		label: game.i18n.localize("journal-wod.DarkCuprumJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", UmbraJournal, {
		label: game.i18n.localize("journal-wod.UmbraJournal"),
		types: ["base"],
		makeDefault: false
	});
	Journal.registerSheet("journal-wod", AuroraJournal, {
		label: game.i18n.localize("journal-wod.AuroraJournal"),
		types: ["base"],
		makeDefault: false
	});
}
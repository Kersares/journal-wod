import { EditorExtension } from "./editor-extension.js";
import { registerAllSheets } from "./journals.js";

Hooks.once("init", () => {
  console.log("journal-wod | Registering the module's ProseMirror Styles DropDown.");
  
  registerAllSheets();
  
  const editor = new EditorExtension();
  Hooks.on("getProseMirrorMenuDropDowns", (pmmenu, menus) => {
    editor.registerNewProseMirrorMenuDropDowns(pmmenu, menus);
  });

  console.log("journal-wod | Ready");
});
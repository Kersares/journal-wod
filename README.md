<div align="center">
  
🌐 [English](README.md) ✦ [Русский](README-RU.md) 🌐

</div>

# Journal WoD  
This is a machine translation from Russian. Sorry, my English is very bad.

The Journal WoD module is a module for Foundry VTT, created for the [Foundry_WoD20](https://github.com/JohanFalt/Foundry_WoD20) system and inspired by World of Darkness (though the module is system-agnostic and can be enabled on any system).  

## 🎨 What does it do?  

The module adds interchangeable stylesheets for journals in Foundry VTT, matching the spirit of different World of Darkness editions (using graphics and styles from 1st to 4th editions). Currently, the module includes journal styles for:  

* General WoD (for edition-agnostic entries)  
* Vampires  
* Demons  
* Mages  
* Werewolves  
* Hunters  
* Changelings  
* Wraiths  
* The East (general style for Eastern Kindred and Hengeyokai)  
* Wild West (styling for Werewolves of that era)  
* Dark Ages (styling for Vampires of that era)  
* Plus three dark themes: Cuprum, Umbra, and Aurora Borealis.  

In addition to interchangeable stylesheets, the module also adds a "Templates" button to the Journal Editor, containing custom elements for formatting entries: decorated quotes, tables, text frames (including vertical text inserts), options for adding images under text (with automatic sizing and transparency settings to avoid manual adjustments), text-wrapping images, decorated spoilers, and other small features that the module author really missed in the basic functionality.  

After loading the module, a "Manual/Instruction" folder will appear in the compendium, where all the features are explained in detail with screenshots.  

## 🖼️ Screenshots  
![Wild West](https://i.ibb.co/HTvVMVqZ/Wild-West-2.jpg) ![Vampire](https://i.ibb.co/39fLwQwm/Vampire-1.jpg)  
![East](https://i.ibb.co/HpM23mvG/East-1.jpg) ![Hunter](https://i.ibb.co/kVJyqjFy/Hunter-1.jpg)  

## ⚡ How to install?  

By copying and pasting the link [https://raw.githubusercontent.com/Kersares/journal-wod/main/module.json](https://raw.githubusercontent.com/Kersares/journal-wod/main/module.json) into Foundry's standard module installation menu, or by downloading the repository and placing it in the modules folder.  

## ❓ FAQ  

### 🔹 Are there any dependencies?  
No, the module is independent of other modules and systems (technically). Conceptually, as mentioned above, it was created for World of Darkness 1st-4th editions. On some systems where Foundry's default journal sheet has been modified, the styles may display incorrectly. For the WoD5e system ([WoD5E-Developers](https://github.com/WoD5E-Developers)), a separate fix was added to ensure the journal styles display as intended.  

### 🔹 Which Foundry version is it for?  
The module was developed for Foundry v12 but has been tested on v13 and is fully compatible, though it still uses the old journal API.  

### 🔹 Localizations?  
Yes, the module and manual are translated into English (machine-translated, as the author doesn't know English—sorry! If you'd like to contribute a human translation, let me know!).  

### 🔹 Why aren't all fonts like in the books?  
Because not all of them support Cyrillic. Finding a font for the Vampire journal took over 26 hours of pure time until my co-author and colleague snapped and manually drew Cyrillic characters for the official Vampire Revised Edition font.  

### 🔹 Why does this module even exist?  
Because the author looked at the DnD5e system, envied its journal editing capabilities, and wanted to add similar (and even more) features for WoD.  

### 🔹 Compatibility?  
Not fully tested, but the module doesn't seem to conflict with monks-enhanced-journal and coexists peacefully with AG (Adventure Guys) modules without interfering.  

### 🔹 Will [insert_request] be added?  
Maybe. Write to us, we'll think about it!  

## 💜 Credits  

First and foremost, huge thanks to my co-author Shein for sleepless nights, 26 hours spent searching just for the Vampire font (not counting all the others!), color selection, constructive criticism, and inspiration. Without him, this module wouldn't exist.  

Kadath ([VK](https://vk.com/club199316981)) for ideas (the "Umbra" style sheet was his concept) and nudges in the right direction.  

Brother Nix for help with graphics and a designer's perspective.  

NeoSonic ([GitHub](https://github.com/porshkevich)) for writing the JS to integrate the button into the editor for this module and for detailed explanations on how to work with his code.  

Also, shoutout to the Adventure Guys team, who weren't involved in development and didn't even know about it, but whose module I saw and really wanted to use for WoD—unfortunately, it's tightly bound to DnD5e ([AG Module](https://gitlab.com/adventure-guys/ag-module)), so I had to create my own.  

And credit to the Custom Journal module by Fair Strides ([GitHub](https://github.com/Fair-Strides/FVTT-Custom-Journal-Theming/tree/v10-journals)), which helped me get started and structure my module. The author even allowed me to use her JS for sheet switching, though it ultimately wasn't needed—a very generous gesture.  

## ⚖️ License  

I'm not an expert in this, so I used the MIT license, like most Foundry VTT modules.  

I don't mind and even encourage others to use these developments or create their own modules based on this one. However, I'd really prefer if my work wasn't sold. I'd like the module and its derivatives to remain free and accessible to everyone =)  

## Dark Pack Agreement

Portions of the materials are the copyrights and trademarks of Paradox Interactive AB, and are used with permission. All rights reserved. For more information please visit [worldofdarkness.com](https://www.paradoxinteractive.com/games/world-of-darkness/about).

This material is NOT an official World of Darkness material.

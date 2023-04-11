const vscode = require("vscode");

const keys = {
  version: "[Data version](https://minecraft.fandom.com/wiki/Data_version) of the client version this file was last saved in; used for upgrading default settings. (numeric)",
};

vscode.languages.registerHoverProvider("options-txt", {
  provideHover(document, position, _token) {
    const line = document.lineAt(position);
    for (var k in keys) {
      if (line.text.startsWith(k)) {
        return new vscode.Hover(`**${k}**\n\n${keys[k]}`);
      }
    }
    return new vscode.Hover("*Unknown option key*");
  },
});

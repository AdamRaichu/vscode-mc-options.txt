const vscode = require("vscode");

const keys = {
  version: "[Data version](https://minecraft.fandom.com/wiki/Data_version) of the client version this file was last saved in; used for upgrading default settings. (numeric)",
  autoJump: "Whether auto-jump is enabled",
  autoSuggestions: "True if brigadier's command suggestion UI should always be shown, instead of just when pressing tab",
  chatColors: "Whether colored chat is allowed",
  chatLinks: "Whether links show as links or just text in the chat",
  chatLinksPrompt: "Whether clicking on links in chat needs confirmation before opening them",
  enableVsync: "Whether [v-sync](https://en.wikipedia.org/wiki/Screen_tearing#V-sync) (vertical synchronization) is enabled",
  entityShadows: "Whether to display entity shadows",
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

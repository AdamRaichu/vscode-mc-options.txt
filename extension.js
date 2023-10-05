const vscode = require("vscode");

const keys = {
  version: "[Data version](https://minecraft.wiki/w/Data_version) of the client version this file was last saved in; used for upgrading default settings. (numeric)",
  autoJump: "Whether auto-jump is enabled",
  autoSuggestions: "True if brigadier's command suggestion UI should always be shown, instead of just when pressing tab",
  chatColors: "Whether colored chat is allowed",
  chatLinks: "Whether links show as links or just text in the chat",
  chatLinksPrompt: "Whether clicking on links in chat needs confirmation before opening them",
  enableVsync: "Whether [v-sync](https://en.wikipedia.org/wiki/Screen_tearing#V-sync) (vertical synchronization) is enabled",
  entityShadows: "Whether to display entity shadows",
  forceUnicodeFont: "Whether Unicode font should be used",
  discrete_mouse_scroll: "Ignores scrolling set by operating system",
  invertYMouse: "Whether mouse is inverted or not",
  realmsNotifications: "Whether Realms invites are alerted on the main menu",
  reducedDebugInfo: "Whether to show reduced information on the [Debug screen](https://minecraft.wiki/w/Debug_screen)",
  showSubtitles: "If [subtitles](https://minecraft.wiki/w/Subtitles) are shown",
  directionalAudio: "	If [Directional Audio](https://en.wikipedia.org/wiki/Directional_sound) is enabled",
  touchscreen: "Whether touchscreen controls are used",
  fullscreen: "Whether the game attempts to go fullscreen at startup",
  bobView: "Whether or not the camera bobs up and down as the player walks",
  toggleCrouch: "Whether the sneak key must be pressed or held to activate sneaking",
  toggleSprint: "Whether the sprint key must be pressed or held to activate sprinting",
  darkMojangStudiosBackground: "Whether the Mojang Studios loading screen will appear monochrome",
  hideLightningFlashes: "	Hide lightning flashes (visual effect)",
  mouseSensitivity: "How much a mouse movement changes the position of the camera",
  fov: "How large the field of view is (floating-point). The in-game value is counted in degrees, however, the *options.txt* isn't. The value is converted into degrees with the following formula: `degrees = 40 * value + 70`",
  screenEffectScale: "Distortion Effects (how intense the effects of [Nausea](https://minecraft.wiki/w/Nausea) and [nether portals](https://minecraft.wiki/w/Nether_portal) are)",
  fovEffectScale: "FOV Effects (how much the field of view changes when sprinting, having [Speed](https://minecraft.wiki/w/Speed) or [Slowness](https://minecraft.wiki/w/Slowness) etc.)",
  darknessEffectScale: "Darkness Pulsing (how much the [Darkness](https://minecraft.wiki/w/Darkness) effect pulses)",
  gamma: "Brightness",
  renderDistance: "The render distance in the chunk radius from the player",
  simulationDistance: "The simulation distance in the chunk radius from the player",
  entityDistanceScaling: "The maximum distance from the player that entities render",
  guiScale: "Size of interfaces",
  particles: "Amount of particles (such as rain, potion effects, etc.)",
  maxFps: "The maximum framerate",
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

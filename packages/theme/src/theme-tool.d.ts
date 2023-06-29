interface ThemeData {
  id: string;
  name: string;
  cnName: string;
  data: object;
}

export default class TinyThemeTool {
  currentTheme: string;
  contentElement: HTMLElement;
  styleSheetId: string;
  defaultTheme: object;
  changeTheme: (theme: ThemeData) => void;
  constructor(theme: ThemeData, styleSheetId: string);
}
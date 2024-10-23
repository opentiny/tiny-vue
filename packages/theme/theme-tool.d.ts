interface ThemeData {
  id: string
  name: string
  cnName: string
  data: object
}

export default class TinyThemeTool {
  changeTheme: (theme: ThemeData) => void
  constructor(theme: ThemeData)
}

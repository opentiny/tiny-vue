import { format } from '@opentiny/vue-renderless/common/date'

export default {
  renderless: () => ({
    getDate: (dateTime: string): { date: string; time: string } => {
      return {
        date: format(dateTime, 'yyyy/MM/dd'),
        time: format(dateTime, 'hh:mm:ss')
      }
    }
  })
}

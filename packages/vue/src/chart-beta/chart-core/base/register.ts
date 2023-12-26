import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'
import RadarChart from './components/RadarChart'

function Register() {
  this.registeredComp = {}
}

function registerComp(options) {
  this.registeredComp[options.name] = options.component
}

function getRegisteredComp(name) {
  if (name in this.registeredComp) {
    return this.registeredComp[name]
  }
  return null
}

Register.prototype.registerComp = registerComp
Register.prototype.getRegisteredComp = getRegisteredComp

const register = new Register()

const components = [
  {
    name: 'AreaChart',
    component: LineChart
  },
  {
    name: 'LineChart',
    component: LineChart
  },
  {
    name: 'BarChart',
    component: BarChart
  },
  {
    name: 'PieChart',
    component: PieChart
  },
  {
    name: 'RadarChart',
    component: RadarChart
  }
]

components.forEach((comp) => {
  register.registerComp(comp)
})
export default register

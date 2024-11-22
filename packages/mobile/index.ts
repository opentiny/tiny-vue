import ActionSheet from './components/action-sheet'
import Alert from './components/alert'
import Avatar from './components/avatar'
import Badge from './components/badge'
import Button from './components/button'
import Checkbox from './components/checkbox'
import CheckboxGroup from './components/checkbox-group'
// import ColorPicker from './components/color-picker'
import Container from './components/container'
import DatePicker from './components/date-picker'
import DialogBox from './components/dialog-box'
// import DropdownItem from './components/dropdown-item'
// import DropdownMenu from './components/dropdown-menu'
import Exception from './components/exception'
import FileUpload from './components/file-upload'
import Form from './components/form'
import ImageViewer from './components/image-viewer'
import IndexBar from './components/index-bar'
import Input from './components/input'
import Label from './components/label'
import List from './components/list'
import Loading from './components/loading'
import Mask from './components/mask'
import MiniPicker from './components/mini-picker'
import Modal from './components/modal'
import MultiSelect from './components/multi-select'
import MultiSelectItem from './components/multi-select-item'
import NavBar from './components/nav-bar'
import Numeric from './components/numeric'
import PickerColumn from './components/picker-column'
import Popover from './components/popover'
import Progress from './components/progress'
import PullRefresh from './components/pull-refresh'
import Radio from './components/radio'
import Search from './components/search'
import Slider from './components/slider'
import Switch from './components/switch'
import Tabbar from './components/tabbar'
import TabbarItem from './components/tabbar-item'
import Table from './components/table'
import Tabs from './components/tabs'
import Tag from './components/tag'
import TimeLine from './components/time-line'
import Toast from './components/toast'
import UploadList from './components/upload-list'
import UserHead from './components/user-head'
import Wheel from './components/wheel'
import { $prefix } from './vue-common'

const components = [
  ActionSheet,
  Alert,
  Avatar,
  Badge,
  Button,
  Checkbox,
  CheckboxGroup,
  //   ColorPicker,
  Container,
  DatePicker,
  DialogBox,
  //   DropdownItem,
  //   DropdownMenu,
  Exception,
  FileUpload,
  Form,
  ImageViewer,
  IndexBar,
  Input,
  Label,
  List,
  Loading,
  Mask,
  MiniPicker,
  Modal,
  MultiSelect,
  MultiSelectItem,
  NavBar,
  Numeric,
  PickerColumn,
  Popover,
  Progress,
  PullRefresh,
  Radio,
  Search,
  Slider,
  Switch,
  Tabbar,
  TabbarItem,
  Table,
  Tabs,
  Tag,
  TimeLine,
  Toast,
  UploadList,
  UserHead,
  Wheel
]

export const install = (app, opts = {}) => {
  const regex = new RegExp('^' + $prefix)

  const appProperties = app.config?.globalProperties || app.prototype
  appProperties.tiny_mode = { value: 'mobile' }

  components.forEach((component) => {
    const name = component.name
    const alias = opts.alias || opts.prefix

    if (typeof component.install !== 'function') return

    if (name && alias) {
      app.component(name.replace(regex, alias), component)
    } else {
      component.install(app)
    }
  })
}

export const version = '3.18.0'

export {
  ActionSheet,
  ActionSheet as TinyActionSheet,
  Alert,
  Alert as TinyAlert,
  Avatar,
  Avatar as TinyAvatar,
  Badge,
  Badge as TinyBadge,
  Button,
  Button as TinyButton,
  Checkbox,
  Checkbox as TinyCheckbox,
  CheckboxGroup,
  CheckboxGroup as TinyCheckboxGroup,
  //   ColorPicker,
  //   ColorPicker as TinyColorPicker,
  Container,
  Container as TinyContainer,
  DatePicker,
  DatePicker as TinyDatePicker,
  DialogBox,
  DialogBox as TinyDialogBox,
  //   DropdownItem,
  //   DropdownItem as TinyDropdownItem,
  //   DropdownMenu,
  //   DropdownMenu as TinyDropdownMenu,
  Exception,
  Exception as TinyException,
  FileUpload,
  FileUpload as TinyFileUpload,
  Form,
  Form as TinyForm,
  ImageViewer,
  ImageViewer as TinyImageViewer,
  IndexBar,
  IndexBar as TinyIndexBar,
  Input,
  Input as TinyInput,
  Label,
  Label as TinyLabel,
  List,
  List as TinyList,
  Loading,
  Loading as TinyLoading,
  Mask,
  Mask as TinyMask,
  MiniPicker,
  MiniPicker as TinyMiniPicker,
  Modal,
  Modal as TinyModal,
  MultiSelect,
  MultiSelect as TinyMultiSelect,
  MultiSelectItem,
  MultiSelectItem as TinyMultiSelectItem,
  NavBar,
  NavBar as TinyNavBar,
  Numeric,
  Numeric as TinyNumeric,
  PickerColumn,
  PickerColumn as TinyPickerColumn,
  Popover,
  Popover as TinyPopover,
  Progress,
  Progress as TinyProgress,
  PullRefresh,
  PullRefresh as TinyPullRefresh,
  Radio,
  Radio as TinyRadio,
  Search,
  Search as TinySearch,
  Slider,
  Slider as TinySlider,
  Switch,
  Switch as TinySwitch,
  Tabbar,
  Tabbar as TinyTabbar,
  TabbarItem,
  TabbarItem as TinyTabbarItem,
  Table,
  Table as TinyTable,
  Tabs,
  Tabs as TinyTabs,
  Tag,
  Tag as TinyTag,
  TimeLine,
  TimeLine as TinyTimeLine,
  Toast,
  Toast as TinyToast,
  UploadList,
  UploadList as TinyUploadList,
  UserHead,
  UserHead as TinyUserHead,
  Wheel,
  Wheel as TinyWheel
}

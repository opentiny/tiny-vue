import ActionSheet from './src/action-sheet'
import Alert from './src/alert'
import Avatar from './src/avatar'
import Badge from './src/badge'
import Button from './src/button'
import Checkbox from './src/checkbox'
import CheckboxGroup from './src/checkbox-group'
import ColorPicker from './src/color-picker'
import Container from './src/container'
import DatePicker from './src/date-picker'
import DialogBox from './src/dialog-box'
import DropdownItem from './src/dropdown-item'
import DropdownMenu from './src/dropdown-menu'
import Exception from './src/exception'
import FileUpload from './src/file-upload'
import Form from './src/form'
import ImageViewer from './src/image-viewer'
import IndexBar from './src/index-bar'
import Input from './src/input'
import Label from './src/label'
import List from './src/list'
import Loading from './src/loading'
import Mask from './src/mask'
import MiniPicker from './src/mini-picker'
import Modal from './src/modal'
import MultiSelect from './src/multi-select'
import MultiSelectItem from './src/multi-select-item'
import NavBar from './src/nav-bar'
import Numeric from './src/numeric'
import PickerColumn from './src/picker-column'
import Popover from './src/popover'
import Progress from './src/progress'
import PullRefresh from './src/pull-refresh'
import Radio from './src/radio'
import Search from './src/search'
import Slider from './src/slider'
import Switch from './src/switch'
import Tabbar from './src/tabbar'
import TabbarItem from './src/tabbar-item'
import Table from './src/table'
import Tabs from './src/tabs'
import Tag from './src/tag'
import TimeLine from './src/time-line'
import Toast from './src/toast'
import UploadList from './src/upload-list'
import UserHead from './src/user-head'
import Wheel from './src/wheel'
import { $prefix } from './src/common'

const components = [
  ActionSheet,
  Alert,
  Avatar,
  Badge,
  Button,
  Checkbox,
  CheckboxGroup,
  ColorPicker,
  Container,
  DatePicker,
  DialogBox,
  DropdownItem,
  DropdownMenu,
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
  ColorPicker,
  ColorPicker as TinyColorPicker,
  Container,
  Container as TinyContainer,
  DatePicker,
  DatePicker as TinyDatePicker,
  DialogBox,
  DialogBox as TinyDialogBox,
  DropdownItem,
  DropdownItem as TinyDropdownItem,
  DropdownMenu,
  DropdownMenu as TinyDropdownMenu,
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

export default {
  ActionSheet,
  TinyActionSheet: ActionSheet,
  Alert,
  TinyAlert: Alert,
  Avatar,
  TinyAvatar: Avatar,
  Badge,
  TinyBadge: Badge,
  Button,
  TinyButton: Button,
  Checkbox,
  TinyCheckbox: Checkbox,
  CheckboxGroup,
  TinyCheckboxGroup: CheckboxGroup,
  ColorPicker,
  TinyColorPicker: ColorPicker,
  Container,
  TinyContainer: Container,
  DatePicker,
  TinyDatePicker: DatePicker,
  DialogBox,
  TinyDialogBox: DialogBox,
  DropdownItem,
  TinyDropdownItem: DropdownItem,
  DropdownMenu,
  TinyDropdownMenu: DropdownMenu,
  Exception,
  TinyException: Exception,
  FileUpload,
  TinyFileUpload: FileUpload,
  Form,
  TinyForm: Form,
  ImageViewer,
  TinyImageViewer: ImageViewer,
  IndexBar,
  TinyIndexBar: IndexBar,
  Input,
  TinyInput: Input,
  Label,
  TinyLabel: Label,
  List,
  TinyList: List,
  Loading,
  TinyLoading: Loading,
  Mask,
  TinyMask: Mask,
  MiniPicker,
  TinyMiniPicker: MiniPicker,
  Modal,
  TinyModal: Modal,
  MultiSelect,
  TinyMultiSelect: MultiSelect,
  MultiSelectItem,
  TinyMultiSelectItem: MultiSelectItem,
  NavBar,
  TinyNavBar: NavBar,
  Numeric,
  TinyNumeric: Numeric,
  PickerColumn,
  TinyPickerColumn: PickerColumn,
  Popover,
  TinyPopover: Popover,
  Progress,
  TinyProgress: Progress,
  PullRefresh,
  TinyPullRefresh: PullRefresh,
  Radio,
  TinyRadio: Radio,
  Search,
  TinySearch: Search,
  Slider,
  TinySlider: Slider,
  Switch,
  TinySwitch: Switch,
  Tabbar,
  TinyTabbar: Tabbar,
  TabbarItem,
  TinyTabbarItem: TabbarItem,
  Table,
  TinyTable: Table,
  Tabs,
  TinyTabs: Tabs,
  Tag,
  TinyTag: Tag,
  TimeLine,
  TinyTimeLine: TimeLine,
  Toast,
  TinyToast: Toast,
  UploadList,
  TinyUploadList: UploadList,
  UserHead,
  TinyUserHead: UserHead,
  Wheel,
  TinyWheel: Wheel,
  install
} as any

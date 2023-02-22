import NotifyConstructor from './src/index.vue';
import '@opentiny/vue-theme/notify/index.css';
import { ExtractPropTypes } from 'vue';
type NotifyType = ExtractPropTypes<typeof NotifyConstructor.props>;
declare const Notify: {
    ({ type, ...options }?: NotifyType): any;
    close(id: any, userOnClose: any): void;
    closeAll(): void;
};
export default Notify;

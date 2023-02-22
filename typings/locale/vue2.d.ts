import zhCN from '@opentiny/vue-locale/lang/zh-CN';
import enUS from '@opentiny/vue-locale/lang/en';
export declare function t(path: any, options: any): any;
export declare const use: (language: any) => any;
export declare const language: () => any;
export declare const i18n: (func: any) => any;
export declare const initI18n: ({ VueI18n, messages, i18n, merge }: {
    VueI18n: any;
    messages?: {} | undefined;
    i18n?: {} | undefined;
    merge: any;
}) => any;
export { zhCN, enUS };
declare const _default: {
    extend: any;
    i18n: (func: any) => any;
    initI18n: ({ VueI18n, messages, i18n, merge }: {
        VueI18n: any;
        messages?: {} | undefined;
        i18n?: {} | undefined;
        merge: any;
    }) => any;
    t: typeof t;
    use: (language: any) => any;
    enUS: any;
    zhCN: any;
};
export default _default;

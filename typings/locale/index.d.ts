export declare const use: any, t: any, i18n: any, initI18n: any, extend: any, zhCN: any, enUS: any, language: any;
export declare const globalization: (config: any) => {
    getFormatConfig: () => any;
    setFormatConfig: (obj: any) => any;
    getNumberFormat: () => any;
    getDateFormat: () => {
        DateTimeFormat: any;
        TimeFormat: any;
        Timezone: any;
        DateFormat: any;
        DbTimezone: any;
    };
    formatDate: (value: any, format: any, convert: any) => any;
    formatNumber: (value: any, format: any) => any;
    recoverNumber: (value: any, format: any) => any;
    getDateWithNewTimezone: (value: any, from: any, to: any) => any;
};
export declare const version: string | undefined;
declare const _default: any;
export default _default;

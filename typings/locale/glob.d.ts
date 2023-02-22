export declare const getNumberFormat: (config: any) => any;
export declare const getDateFormat: (config: any) => {
    DateFormat: any;
    DateTimeFormat: string;
    TimeFormat: any;
};
export declare const getStrTimezone: (value: any) => any;
declare const _default: (t: any) => (config: any) => {
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
export default _default;

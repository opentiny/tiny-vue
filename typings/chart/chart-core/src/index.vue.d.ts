declare const _default: import("vue").DefineComponent<{
    afterConfig: {
        type: FunctionConstructor;
    };
    afterSetOption: {
        type: FunctionConstructor;
    };
    afterSetOptionOnce: {
        type: FunctionConstructor;
    };
    animation: ObjectConstructor;
    axisPointer: (ObjectConstructor | ArrayConstructor)[];
    backgroundColor: (ObjectConstructor | StringConstructor)[];
    beforeConfig: {
        type: FunctionConstructor;
    };
    brush: (ObjectConstructor | ArrayConstructor)[];
    cancelResizeCheck: BooleanConstructor;
    changeDelay: {
        type: NumberConstructor;
        default: number;
    };
    colors: {
        type: ArrayConstructor;
    };
    data: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default(): {};
    };
    dataEmpty: BooleanConstructor;
    dataZoom: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    events: {
        type: ObjectConstructor;
    };
    extend: ObjectConstructor;
    geo: (ObjectConstructor | ArrayConstructor)[];
    graphic: (ObjectConstructor | ArrayConstructor)[];
    grid: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    initOptions: {
        type: ObjectConstructor;
        default(): {};
    };
    judgeWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    legend: (ObjectConstructor | ArrayConstructor)[];
    legendPosition: {
        type: StringConstructor;
    };
    legendVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: BooleanConstructor;
    markArea: {
        type: ObjectConstructor;
    };
    markLine: {
        type: ObjectConstructor;
    };
    markPoint: {
        type: ObjectConstructor;
    };
    notSetUnchange: ArrayConstructor;
    radar: ObjectConstructor;
    resizeDelay: {
        type: NumberConstructor;
        default: number;
    };
    resizeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    series: (ObjectConstructor | ArrayConstructor)[];
    setOptionOpts: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    settings: {
        type: ObjectConstructor;
        default(): {};
    };
    textStyle: (ObjectConstructor | ArrayConstructor)[];
    theme: ObjectConstructor;
    themeName: (ObjectConstructor | StringConstructor)[];
    timeline: (ObjectConstructor | ArrayConstructor)[];
    title: (ObjectConstructor | ArrayConstructor)[];
    toolbox: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    tooltip: ObjectConstructor;
    tooltipFormatter: {
        type: FunctionConstructor;
    };
    tooltipVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    visualMap: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    widthChangeDelay: {
        type: NumberConstructor;
        default: number;
    };
    xAxis: (ObjectConstructor | ArrayConstructor)[];
    yAxis: (ObjectConstructor | ArrayConstructor)[];
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    afterConfig: {
        type: FunctionConstructor;
    };
    afterSetOption: {
        type: FunctionConstructor;
    };
    afterSetOptionOnce: {
        type: FunctionConstructor;
    };
    animation: ObjectConstructor;
    axisPointer: (ObjectConstructor | ArrayConstructor)[];
    backgroundColor: (ObjectConstructor | StringConstructor)[];
    beforeConfig: {
        type: FunctionConstructor;
    };
    brush: (ObjectConstructor | ArrayConstructor)[];
    cancelResizeCheck: BooleanConstructor;
    changeDelay: {
        type: NumberConstructor;
        default: number;
    };
    colors: {
        type: ArrayConstructor;
    };
    data: {
        type: (ObjectConstructor | ArrayConstructor)[];
        default(): {};
    };
    dataEmpty: BooleanConstructor;
    dataZoom: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    events: {
        type: ObjectConstructor;
    };
    extend: ObjectConstructor;
    geo: (ObjectConstructor | ArrayConstructor)[];
    graphic: (ObjectConstructor | ArrayConstructor)[];
    grid: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    initOptions: {
        type: ObjectConstructor;
        default(): {};
    };
    judgeWidth: {
        type: BooleanConstructor;
        default: boolean;
    };
    legend: (ObjectConstructor | ArrayConstructor)[];
    legendPosition: {
        type: StringConstructor;
    };
    legendVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: BooleanConstructor;
    markArea: {
        type: ObjectConstructor;
    };
    markLine: {
        type: ObjectConstructor;
    };
    markPoint: {
        type: ObjectConstructor;
    };
    notSetUnchange: ArrayConstructor;
    radar: ObjectConstructor;
    resizeDelay: {
        type: NumberConstructor;
        default: number;
    };
    resizeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    series: (ObjectConstructor | ArrayConstructor)[];
    setOptionOpts: {
        type: (ObjectConstructor | BooleanConstructor)[];
        default: boolean;
    };
    settings: {
        type: ObjectConstructor;
        default(): {};
    };
    textStyle: (ObjectConstructor | ArrayConstructor)[];
    theme: ObjectConstructor;
    themeName: (ObjectConstructor | StringConstructor)[];
    timeline: (ObjectConstructor | ArrayConstructor)[];
    title: (ObjectConstructor | ArrayConstructor)[];
    toolbox: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    tooltip: ObjectConstructor;
    tooltipFormatter: {
        type: FunctionConstructor;
    };
    tooltipVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    visualMap: {
        type: (ObjectConstructor | ArrayConstructor)[];
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    widthChangeDelay: {
        type: NumberConstructor;
        default: number;
    };
    xAxis: (ObjectConstructor | ArrayConstructor)[];
    yAxis: (ObjectConstructor | ArrayConstructor)[];
}>>, {
    data: Record<string, any> | unknown[];
    width: string;
    height: string;
    loading: boolean;
    cancelResizeCheck: boolean;
    changeDelay: number;
    dataEmpty: boolean;
    initOptions: Record<string, any>;
    judgeWidth: boolean;
    legendVisible: boolean;
    resizeDelay: number;
    resizeable: boolean;
    setOptionOpts: boolean | Record<string, any>;
    settings: Record<string, any>;
    tooltipVisible: boolean;
    widthChangeDelay: number;
}>;
export default _default;

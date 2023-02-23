import Cropper from 'cropperjs';
import 'cropperjs/dist/cropper.css';
declare const _default: import("vue").DefineComponent<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CROP_IMAGE: string;
        };
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    aspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    autoCrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoCropArea: {
        type: NumberConstructor;
        default: number;
    };
    background: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    cropType: {
        type: StringConstructor;
        default: string;
    };
    cropvisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragMode: {
        type: StringConstructor;
        default: string;
    };
    guides: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxSize: {
        type: StringConstructor;
        default: string;
    };
    minContainerHeight: {
        type: NumberConstructor;
        default: number;
    };
    minContainerWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxHeight: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxWidth: {
        type: NumberConstructor;
        default: number;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    movable: {
        type: BooleanConstructor;
        default: boolean;
    };
    plugin: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => typeof Cropper;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    quality: {
        type: NumberConstructor;
        default: number;
    };
    rotatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: NumberConstructor;
        default: number;
    };
    wheelZoomRatio: {
        type: NumberConstructor;
        default: number;
    };
    zoomOnWheel: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    t: any;
    vm: any;
    f: (props: any, attrs?: {}) => {};
    a: (attrs: any, filters: any, include: any) => {};
    d: (props: any) => void;
    dp: (props: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ready" | "cropdata" | "cropstart" | "cropmove" | "cropend" | "crop")[], "ready" | "cropdata" | "cropstart" | "cropmove" | "cropend" | "crop", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    _constants: {
        type: ObjectConstructor;
        default: () => {
            CROP_IMAGE: string;
        };
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    aspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    autoCrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoCropArea: {
        type: NumberConstructor;
        default: number;
    };
    background: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    cropType: {
        type: StringConstructor;
        default: string;
    };
    cropvisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    dragMode: {
        type: StringConstructor;
        default: string;
    };
    guides: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxSize: {
        type: StringConstructor;
        default: string;
    };
    minContainerHeight: {
        type: NumberConstructor;
        default: number;
    };
    minContainerWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxHeight: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxWidth: {
        type: NumberConstructor;
        default: number;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    movable: {
        type: BooleanConstructor;
        default: boolean;
    };
    plugin: {
        type: (ObjectConstructor | FunctionConstructor)[];
        default: () => typeof Cropper;
    };
    preview: {
        type: BooleanConstructor;
        default: boolean;
    };
    previewShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    quality: {
        type: NumberConstructor;
        default: number;
    };
    rotatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    src: {
        type: StringConstructor;
        default: string;
    };
    viewMode: {
        type: NumberConstructor;
        default: number;
    };
    wheelZoomRatio: {
        type: NumberConstructor;
        default: number;
    };
    zoomOnWheel: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onCrop?: ((...args: any[]) => any) | undefined;
    onReady?: ((...args: any[]) => any) | undefined;
    onCropdata?: ((...args: any[]) => any) | undefined;
    onCropstart?: ((...args: any[]) => any) | undefined;
    onCropmove?: ((...args: any[]) => any) | undefined;
    onCropend?: ((...args: any[]) => any) | undefined;
}, {
    _constants: Record<string, any>;
    center: boolean;
    plugin: Function | Record<string, any>;
    alt: string;
    src: string;
    aspectRatio: number;
    autoCrop: boolean;
    autoCropArea: number;
    background: boolean;
    cropType: string;
    cropvisible: boolean;
    dragMode: string;
    guides: boolean;
    maxSize: string;
    minContainerHeight: number;
    minContainerWidth: number;
    minCropBoxHeight: number;
    minCropBoxWidth: number;
    modal: boolean;
    movable: boolean;
    preview: boolean;
    previewShow: boolean;
    quality: number;
    rotatable: boolean;
    viewMode: number;
    wheelZoomRatio: number;
    zoomOnWheel: boolean;
    zoomable: boolean;
}>;
export default _default;

export declare function getStorage(storageKey: any, storageType: any, remoteMethod: any): Promise<unknown>;
export declare function setStorage(storageKey: any, valueObj: any, storageType: any, vm: any, eventName: any): void;
export declare function generateId(): {
    id: string;
    name: any;
};
export declare function createCustom(setting: any, userKey: any): {
    id: string;
    name: any;
    userKey: any;
    setting: {
        custom: any;
    };
};
export declare function mergeArray(toArr: any, fromArr: any): any[];

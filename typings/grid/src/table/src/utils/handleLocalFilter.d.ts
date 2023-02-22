export declare function handleFilterConditionCustom({ column, condition, method, property, row }: {
    column: any;
    condition: any;
    method: any;
    property: any;
    row: any;
}): {
    flag: boolean;
    result: null;
};
export declare function handleFilterConditionExtend({ column, condition, property, row }: {
    column: any;
    condition: any;
    property: any;
    row: any;
}): {
    flag: boolean;
    result: null;
};
export declare function handleFilterRelations({ inputFilter }: {
    inputFilter: any;
}): any;
export declare function handleFilterCheckStr({ column, relationMethod, relations, row }: {
    column: any;
    relationMethod: any;
    relations: any;
    row: any;
}): (value: any, input: any, relation: any) => boolean;
export declare function handleFilterCheck({ checkStr, empty, input, property, relation, row, valueList }: {
    checkStr: any;
    empty: any;
    input: any;
    property: any;
    relation: any;
    row: any;
    valueList: any;
}): () => any;

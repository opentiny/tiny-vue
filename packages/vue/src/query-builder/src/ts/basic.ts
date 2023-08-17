import type { RuleValidator } from './validation';

export type Classname = string | string[] | Record<string, any>;

export type ValueSource = 'value' | 'field';

export type ValueEditorType =
  | 'text'
  | 'select'
  | 'checkbox'
  | 'radio'
  | 'textarea'
  | 'switch'
  | 'multiselect'
  | null;

export type ValueSources = ['value'] | ['value', 'field'] | ['field', 'value'] | ['field'];

export interface Option<N extends string = string> {
  name: N;
  label: string;
  [x: string]: any;
}

/**
 * @deprecated Renamed to `Option`
 */
export type NameLabelPair<N extends string = string> = Option<N>;

export type OptionGroup<Opt extends Option = Option> = {
  label: string;
  options: Opt[];
};

export type OptionList<Opt extends Option = Option> = Opt[] | OptionGroup<Opt>[];

interface HasOptionalClassName {
  className?: Classname;
}

export interface Field<
  FieldName extends string = string,
  OperatorName extends string = string,
  ValueName extends string = string,
  OperatorObj extends Option = Option<OperatorName>,
  ValueObj extends Option = Option<ValueName>
> extends Option<FieldName>,
    HasOptionalClassName {
  id?: string;
  operators?: OptionList<OperatorObj>;
  valueEditorType?: ValueEditorType | ((operator: string) => ValueEditorType);
  valueSources?: ValueSources | ((operator: string) => ValueSources);
  inputType?: string | null;
  values?: OptionList<ValueObj>;
  defaultOperator?: string;
  defaultValue?: any;
  placeholder?: string;
  validator?: RuleValidator;
  comparator?: string | ((f: Field, operator: string) => boolean);
}

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export type Arity = number | 'unary' | 'binary' | 'ternary';

export interface Operator<N extends string = string> extends Option<N>, HasOptionalClassName {
  arity?: Arity;
}

export interface Combinator<N extends string = string> extends Option<N>, HasOptionalClassName {}

export type ParseNumbersMethod = boolean | 'strict' | 'native';

import { IValidator } from "./ivalidator";

export interface IFieldConfig {
    label?: string;
    placeholder?: string;
    name?: string;
    inputType?: string;
    options?: {key: any, value: any}[];
    collections?: any;
    type: string;
    value?: any;
    validations?: IValidator[];
    class?: string;
}

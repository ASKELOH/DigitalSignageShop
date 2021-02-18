export interface IFormElement {
    type: string;
    label: string;
    name: string;
    disabled: boolean;
    placeholder: string;
    
    display(): any;
}

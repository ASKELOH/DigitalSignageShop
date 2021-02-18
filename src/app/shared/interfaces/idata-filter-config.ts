import { IFormElement } from "./iformelement";


export interface IDataFilterConfig {
    numberOfColumns: number;
    formElements: IFormElement[];
    
    add(element: IFormElement) :void;
    generate(): any;
}

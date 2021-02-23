import { FormGroup } from "@angular/forms";
import { IDataFilterConfig } from "../interfaces/idata-filter-config";
import { IFormElement } from "../interfaces/iformelement";

export class DataFilterConfig implements IDataFilterConfig {
    numberOfColumns: number;
    formElements: IFormElement[] = [];
    private grid: number = 12;
    form: FormGroup;

    constructor(form: FormGroup, numberOfcolumns?: number) {
        this.form = form;
        this.numberOfColumns = numberOfcolumns? numberOfcolumns : 1;
    }
    
    add(element: IFormElement) :void {
        this.formElements.push(element);
    }
    generate(): any {
        let template = '';
        let cols =  this.grid / this.numberOfColumns;
        let row_start = '<div class="row">';
        let col_start = `<div class="col-${cols} col-md-${cols}">`;
        let div_end = '</div>';
        let rest;
        let currentColumnsCount = 0;

        template += row_start;
        this.formElements.forEach(element => {
            ++currentColumnsCount;
            rest = this.numberOfColumns / currentColumnsCount;

            template += col_start;
            template += element.display();

            if (rest === 1) {
                template += div_end;
                template += div_end;
                template += row_start;
                currentColumnsCount = 0;
            } else {
                template += div_end;
            }
        });
        return template;
    }

    getFilterData(event: any): any {
        let data = [];

        this.formElements.forEach(elem => {
            if (event.target[elem.name].value) {
                let _data = {key: elem.name, value: event.target[elem.name].value};
                data.push(_data);
            }
        });
        return data;
    }
}

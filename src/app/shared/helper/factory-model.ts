import {Injectable} from '@angular/core';

@Injectable()
export class FactoryModel<T> {

    static create<T>(): T {
        const obj = {} as T;
        obj['id'] = 0;
        return obj;
    }

    static createByValues<T>(data: object): T {
        const obj = FactoryModel.create<T>();

        Object.keys(data).forEach(prop => {

            //if (obj.hasOwnProperty(prop)) {
                obj[prop] = data[prop];
            //}
        });
        return obj;
    }
}

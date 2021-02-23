export class DataMapper {

    static mapKeyValueParis(arr: any[], kv: IKeyValuePair): IKeyValuePair[] {
        const collection: IKeyValuePair[] = [];
        arr.forEach(elem => {
          if(elem[kv['key']] && elem[kv['value']]) {
            const o = {} as IKeyValuePair;
            o.key = elem[kv['key']];
            o.value = elem[kv['value']]
            collection.push(o);
          }
        });
        return collection;
    }
}

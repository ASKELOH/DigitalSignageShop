import { Observable } from 'rxjs';

export interface ICrudOperations<T, ID> {
	findOne(id: number): Observable<T>;
	findAll(): Observable<T[]>;
	post<T>(t: T): Observable<T>;
	update<T>(id: number, t: T): Observable<T>;
	delete(id: number): Observable<any>;
}

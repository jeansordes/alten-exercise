import { Injectable, inject, signal } from "@angular/core";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { catchError, map, Observable, of, tap } from "rxjs";

@Injectable({
    providedIn: "root"
}) export class ProductsService {

    private readonly http = inject(HttpClient);
    private readonly path = "http://localhost:3000/api/products";

    private readonly _products = signal<Product[]>([]);

    public readonly products = this._products.asReadonly();

    public get(id: number): Product | undefined {
        return this.products().find(product => product.id === id);
    }

    public getAll(): Observable<Product[]> {
        return this.http.get<Product[]>(this.path).pipe(
            catchError((error) => {
                return this.http.get<Product[]>("assets/products.json");
            }),
            tap((products) => this._products.set(products)),
        );
    }

    public create(product: Product): Observable<number | undefined> {
        return this.http.post<{id: number}>(this.path, product).pipe(
            catchError(() => {
                return of(undefined);
            }),
            map((result) => result?.id),
            tap((id) => {
                if (id !== undefined) {
                    this._products.update(products => [...products, { ...product, id }]);
                }
            }),
        );
    }

    public update(product: Product): Observable<boolean> {
        return this.http.patch<boolean>(`${this.path}/${product.id}`, product).pipe(
            catchError(() => {
                return of(true);
            }),
            tap(() => this._products.update(products => {
                return products.map(p => p.id === product.id ? product : p)
            })),
        );
    }

    public delete(productId: number): Observable<boolean> {
        return this.http.delete<boolean>(`${this.path}/${productId}`).pipe(
            catchError(() => {
                return of(true);
            }),
            tap(() => this._products.update(products => products.filter(product => product.id !== productId))),
        );
    }
}
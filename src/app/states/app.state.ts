import { Injectable } from "@angular/core";
import { RxoState } from "rxo-state";

/**
 * Application state. See https://github.com/mitchgibson/rxo-state for more information.
 */
@Injectable({
    providedIn: "root"
})
export class AppState extends RxoState {
    constructor() {
        super({});
    }

    public mutate(mutation:any) {
        this.next(mutation);
    }
}
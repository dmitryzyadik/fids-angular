import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";

export const increase = createAction('[FIDS] increase');
export const decrease = createAction('[FIDS] decrease');
export const zero = createAction('[FIDS] zero');

export interface CounterState {
    counter: number
}

export const initState: CounterState = {
    counter : 0
}

export const counterReducer = createReducer(
    initState,
    on(increase, state => ({
        ...state,
        counter: state.counter + 1
    })),
    on(decrease, state => ({
        ...state,
        counter: state.counter - 1
    })),
    on(zero, state => ({
        ...state,
        counter: 0
    }))
)

export  const featureSelector = createFeatureSelector<CounterState>('counter')

export  const counterSelector = createSelector(featureSelector, state => state.counter)
import * as React from 'react';
import { Component } from 'react';
import { makeObservable, observable, action, makeAutoObservable, computed } from 'mobx';
import { observer } from 'mobx-react';

export interface CounterStore { 
  number: number;
  increase: () => void;
  decrease: () => void;
}

const counterStore : CounterStore = observable({
  number: 0,

  increase: action(() => {
    counterStore.number++;
  }),

  decrease:action(() => {
    counterStore.number--;
  }),

  get getNumber() {
    return counterStore.number;
  }
});

export { counterStore }

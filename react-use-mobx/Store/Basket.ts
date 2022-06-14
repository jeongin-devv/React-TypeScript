import { makeObservable, observable, computed, autorun, action, transaction } from 'mobx';

interface basketType{
  name: string;
  price: number;
}

export class Basket {
  @observable basket : Array<basketType> = [];

  constructor() {
    makeObservable(this);
  }

  @computed
  get total() {
    console.log('calculate');
    return this.basket.reduce((prev,curr) => prev + curr.price,0);
  }

  @action
  select(name : string, price : number) {
    this.basket.push({ name, price });
  }
};

const initFunction = () => {
  const init = new Basket();
  autorun(() => init.total);
  autorun(() => {
    if (init.basket.length >0) {
      console.log('count ++');
    }
  });

  transaction(()=> {
    init.select('water',800);
    init.select('water',800);
    init.select('snack',1500);
  });
}

export default initFunction;
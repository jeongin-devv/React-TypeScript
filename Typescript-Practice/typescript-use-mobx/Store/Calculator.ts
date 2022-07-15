import { observable, reaction, computed, autorun } from 'mobx'

// Observable State
const calculator = observable({
  a: 1,
  b: 2,
});

// Reaction
// 특정 값이 변경될 때 특정 프로세스 수행
// reaction(
//   () => calculator.a,
//   (value, reaction) => {
//     console.log(`a changed ${value} !`);
//   }
// );
// reaction(
//   () => calculator.b,
//   (value) => {
//     console.log(`b changed ${value} !`);
//   }
// );

// Computed
// 의존하는 값이 변경 될 때, 미리 값을 계산 해놓고, 캐싱된 데이터를 보여줌
const sum = computed(() => {
  console.log('Calulating !');
  return calculator.a + calculator.b;
})

// sum.observe_(()=> calculator.a);
// sum.observe_(()=> calculator.a);

// Autorun
// 함수 내의 값을 자동으로 추적
autorun(() => console.log(`a changed ${calculator.a} !`));
autorun(() => console.log(`b changed ${calculator.b} !`));
autorun(() => sum.get());

const init = () => {
  console.log(sum.get());
  calculator.a = 10;
  console.log(sum.get());
  console.log(sum.get());
  console.log(sum.get());
  calculator.b = 20;
  console.log(sum.get());
  calculator.a = 5;
  console.log(sum.get());
}

export default init;

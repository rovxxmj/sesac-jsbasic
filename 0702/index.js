const name = '박미주';
console.log(`제 이름은 ${name}입니다.`);

const s = 'xxx';
const S = new String('xxx');
console.log(s == S);
console.log({ s: typeof s, S: typeof S });

const s1 = Symbol('sy'); // unique 값 - 설명을 작성하는 곳 (o), 값(x)
const s2 = Symbol('sy'); // unique 값
console.log(s1 == s2);
console.log(s1.description == s2.description);

const test = () => console.log('This is a test.');
const g = undefined;
// null - 메모리 할당 (o),
// undefined - 메모리 할당 (x);
console.log(g);

const i = 1000;
console.log(i.toString() === '1000');
u = 'hong';
u.age = 30; // 강제 형변환( primitive -> object)

console.log(j);
var j = 1;

console.log(x11); // var -> undefined
// console.log(y11); // let -> error
var x11 = (y11 = 1 + 2); // default - 'let'

const x = 2;

// () > ++, --, ! > ** > *, /, % > +, - > >, <, >=, <= > ==, ===, !=, !== > && > || > =, +=, -=, --, /=. %=

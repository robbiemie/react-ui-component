interface IPerson {
  readonly id: number; // 只读属性
  name: string;
  age: number;
  sex?: number; // 可选属性
}

let user: IPerson = {
  id: 1,
  name: "robbie",
  age: 26,
  sex: 1
}
// user.id = 123
user.name = '123'
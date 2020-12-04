// 入参与出参类型一致
function echo<T> (arg: T): T {
  return arg
}

const result:string = echo('123')

// 互换参数类型
function swap <T, U>(arr: [T,U]): [U,T] {
  return [arr[1],arr[0]]
}

const arr = swap([1,2])

// 约束泛型-指定泛型类型
function echoWithArr<T> (arr: T[]): T[] {
  console.log(arr.length) // Property 'length' does not exist on type 'T'.ts(2339)

  return arr
}

const earr = echoWithArr(['123',2,3])

interface IWithLength {
  length: number;
}
// 泛型继承接口
function echoWithLength<T extends IWithLength> (args: T): T {
  console.log(args.length)
  return args
}

const ewl = echoWithLength("123")


type IWithArrayNumberOrString = number;
// 类型过滤
function echoWithNumberOrString<T extends IWithArrayNumberOrString> (args: T[]): T[] {
  return args
}

const ewnos1 = echoWithNumberOrString([1,2,3])
function echoWithNumberOrString2<T> (args: T[]): T[] {
  return args
}
// 第二种方式
// 传入所有的参数，包含类型参数：
const ewnos2 = echoWithNumberOrString2<number|string>([1,2,'3'])

/**
 * 类的泛型
 */
class Queue {
  private data:number[] = [];
  
  push(item:number) {
    this.data.push(item)
  }
  
  pop():number {
    return Number(this.data.shift())
  }
}

let queue = new Queue()
queue.push(1)
queue.pop().toFixed(2)

class Queue2<T> {
  private data:T[] = [];
  
  push(item: T) {
    return this.data.push(item)
  }
  
  pop(): T | undefined {
    return this.data.shift() 
  }
}

let queue2 = new Queue2<number>()
queue2.push(1)
queue2.pop()?.toFixed()

let queue2New = new Queue2<string>()

queue2New.push('123')
queue2New.pop()?.indexOf('1')

// 接口定义对象
interface keyPair<T,U> {
  key: T;
  value: U;
}
// 声明创建对象
let kp1:keyPair<number,string> = {
  key: 1,
  value: '123'
}

let arr1:number[] = [1,2,3]
let arr2:Array<number> = [1,2,3] // 接口类型

// 定义函数
const plus = (x:number,y:number):number => {
  return x + y
}
const connect = (x:string,y:string):string => {
  return x.concat(y)
}
// 接口声明函数
interface IPlus {
  (x: number, y: number): number;
}

const plus2:(x:number, y:number)=>number = plus
// 或者
const plus3: IPlus = plus

// 泛型接口声明函数
interface ITPlus<T> {
  (x: T, y:T): T;
}

const a: ITPlus<number> = plus
const b: ITPlus<string> = connect

/**
 * 泛型-类型别名
 */
function sum (x: number, y: number): number {
  return x + y
}

const sum2:(x:number, y:number)=>number = sum

// 类型别名
type aliasSum = (x:number, y:number) => number
const sum3:aliasSum = sum

// 联合类型应用
type numberResolver = () => string
type numberOrResolver = numberResolver | string

function getName (n: numberOrResolver):string {
  if(typeof n === 'string') {
    return n
  } else {
    return n()
  }
}

// 类型断言 type assertion

function getLength (input: string | number): number {
  // const str = input as String
  // return str.length
  // 或者
  if((<string> input).length) {
    return (<string>input).length
  } else {
    return input.toString().length
  }
}


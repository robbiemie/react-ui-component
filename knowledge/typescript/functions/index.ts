/**
 * add
 * @param x 
 * @param y 
 * @param z 
 */
function add (x:number, y:number, z?:number):number {
  if(typeof z === 'number') {
    return x + y + z
  }
  return x + y
}

let result1 = add(1,2)

/**
 * multi
 * @param x 
 * @param y 
 * @param z 
 */
// 箭头函数
const multi = (x:number, y:number, z:number = 10):number => {
  if(typeof z === 'number') {
    return x * y + z
  }
  return x * y
}

let result2 = multi(1,2)

// 函数间赋值
// 函数类型推断
const func: (x:number,y:number,z?:number) => number = multi

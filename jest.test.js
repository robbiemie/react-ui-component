test("name", () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test("boolean", () => {
  expect(1).toBeTruthy() // true
  expect(0).toBeFalsy() // false
})

test("number", () => {
  expect(4).toBeGreaterThan(3) // 4 > 3
  expect(4).toBeLessThan(5) // 4 > 3
})

test("object", () => {
  expect({name: "robbie"}).toEqual({name: "robbie"}) // true 值相同
  expect({name: "robbie"}).toBe({name: "robbie"}) // false 完全相同
})
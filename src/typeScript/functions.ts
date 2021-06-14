function getLength(input: string | number): number {
  //    类型断言写法一：
  // const str = input as String
  // if (str.length) {
  //     return str.length;
  // } else {
  //     const number = input as Number;
  //     return number.toString().length
  // }

  // 类型断言写法二：
  if (<string>input) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}

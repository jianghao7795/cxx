function hello<T, R>(arg: Array<T>, r: R): Array<T> {
  console.log(arg.length);
  console.log(r);
  return arg;
}

hello<number, string>([1, 2], "sdfasdf");

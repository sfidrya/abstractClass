import { mergeSort, quickSort } from "./sorting";

abstract class ACLass {
  Numbers: number[];
  constructor(n: number) {
    this.Numbers = Array(n).fill(0);
    this.Numbers.length = n;
    this.fill();
  }
  private fill(): void {
    this.Numbers = this.Numbers.map(() => Math.floor(Math.random() * 100));
  }
  protected factorial(): number[] {
    return this.Numbers.map((n) => {
      return factorial(n);
    });
  }
  abstract sort(): number[];
}

function factorial(n: number): number {
  let result = 1;
  for (let i = n; i >= 1; i--) {
    result = result * i;
  }
  return result;
}

class Class1 extends ACLass {
  constructor(n: number) {
    super(n);
  }
  sort(): number[] {
    this.Numbers = mergeSort(this.Numbers);
    return this.factorial();
  }
}

class Class2 extends ACLass {
  constructor(n: number) {
    super(n);
  }
  sort(): number[] {
    this.Numbers = quickSort(this.Numbers);
    return this.factorial();
  }
}
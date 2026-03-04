export default class Node {
  key: string;
  value: string;
  prev: Node;
  next: Node;

  constructor(key: string, value: string) {
    this.key = key;
    this.value = value;
  }
}

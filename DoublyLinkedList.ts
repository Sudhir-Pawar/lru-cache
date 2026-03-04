import Node from "./Node";

export default class DoublyLinkedList {
  private head: Node;
  private tail: Node;

  constructor() {
    this.head = new Node("", "");
    this.tail = new Node("", "");

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  pushFront(newNode: Node): void {
    if (this.head.next == this.tail) {
      // Empty DLL
      this.head.next = newNode;
      newNode.prev = this.head;
      newNode.next = this.tail;
      this.tail.prev = newNode;
    } else {
      const node = this.head.next;
      this.head.next = newNode;
      newNode.prev = this.head;
      newNode.next = node;
      node.prev = newNode;
    }
  }

  popBack(): Node | null {
    if (this.head.next == this.tail) {
      // Empty DLL return
      return null;
    }

    const lastNode = this.tail.prev;
    this.tail.prev = lastNode.prev;
    lastNode.prev.next = this.tail;
    return lastNode;
  }

  moveToFront(node: Node): void {
    if (this.head.next == this.tail) {
      // Empty DLL return
      return;
    }

    this.remove(node);
    this.pushFront(node);
  }

  remove(node: Node): void {
    if (this.head.next == this.tail) {
      // Empty DLL return
      return;
    }

    const prev = node.prev;
    const next = node.next;

    prev.next = next;
    next.prev = prev;
  }

  traverse(): void {
    // Testing
    if (this.head.next == this.tail) {
      // Empty DLL return
      console.log("Empty DLL");
      return;
    }
    const array: { key: string; value: string }[] = [];
    let node = this.head.next;
    while (node.next) {
      array.push({ key: node.key, value: node.value });
      node = node.next;
    }
    console.log("DLL: ", array);
  }
}

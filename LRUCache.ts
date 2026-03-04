import DoublyLinkedList from "./DoublyLinkedList";
import Node from "./Node";

export class LRUCache {
  private size: number;
  private capacity: number;
  private map: Map<string, Node>;
  private linkedList: DoublyLinkedList;

  constructor(capacity: number) {
    this.size = 0;
    this.capacity = capacity;
    this.map = new Map<string, Node>();
    this.linkedList = new DoublyLinkedList();
  }

  get(key: string): string | null {
    const node = this.map.get(key);
    if (node) {
      this.linkedList.moveToFront(node);
      return node.value;
    }

    return null;
  }
  put(key: string, value: string): void {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this.linkedList.moveToFront(node);
      return;
    }

    console.log("size: ", this.size);
    console.log("capacity: ", this.capacity);
    if (this.size == this.capacity) {
      const lastNode = this.linkedList.popBack();
      if (lastNode !== null) {
        this.size--;
        this.map.delete(lastNode.key);
      }
    }
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this.linkedList.pushFront(newNode);
    this.size++;
  }

  getSize(): number {
    return this.size;
  }

  getCapacity(): number {
    return this.capacity;
  }

  setCapacity(newCapacity: number): void {
    this.capacity = newCapacity;
  }

  displayContents() {
    console.log("Map: ", this.map.keys());
    this.linkedList.traverse();
  }
}

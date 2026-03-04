import { LRUCache } from "./LRUCache";

const lruCache = new LRUCache(4);

lruCache.put("1", "sudhir");
lruCache.put("2", "monika");
lruCache.put("3", "pawar");
lruCache.put("4", "salunke");

console.log("Inserted initial sample data");
lruCache.displayContents();

console.log(`GET: 3, value: ${lruCache.get("3")}`);
lruCache.displayContents();

console.log(`GET: 2, value: ${lruCache.get("2")}`);
lruCache.displayContents();

console.log(`GET: 4, value: ${lruCache.get("4")}`);
lruCache.displayContents();

console.log(`GET: 5, value: ${lruCache.get("5")}`);
lruCache.displayContents();

console.log(`PUT: 5`);
lruCache.put("5", "new name");
lruCache.displayContents();

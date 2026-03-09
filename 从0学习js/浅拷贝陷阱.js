const obj1 = {
  name: "Alice",
  hobby: ["coding"],
  info: { city: "BJ" },
};

const obj2 = { ...obj1 };

obj2.name = "Bob";
obj2.hobby.push("swimming");
obj2.info.city = "SH";

console.log(obj1.name); // Alice
console.log(obj1.hobby); // [ 'coding', 'swimming' ]
console.log(obj1.info.city); // SH

//!手写深拷贝
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null || obj === undefined) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  if (hash.has(obj)) return hash.get(obj);
  const result = Array.isArray() ? [] : {};
  hash.set(obj, result);
  for (let key of obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key], hash);
    }
  }
  return result;
}

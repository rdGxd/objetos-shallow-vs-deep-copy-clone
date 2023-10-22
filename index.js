const obj = {
  a: {
    b: {
      c: {
        array: new Array(9),
        date: new Date(),
        bool: new Boolean(),
      },
    },
  },
  b: [{ name: "Rodrigo", lastName: "Silva" }],
};

function myCloneDeep(obj) {
  if (!obj) return obj;
  if (typeof obj !== "object") return obj;

  const newObj = obj.constructor();
  const keys = Object.getOwnPropertyNames(obj);

  for (let key of keys) {
    newObj[key] = myCloneDeep(obj[key]);
  }

  return newObj;
}

const test = myCloneDeep(obj);
const test2 = _.cloneDeep(obj);

console.log(test, test2);

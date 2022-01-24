const obj2arr = (obj) => {
    const arr = [];
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) {
            continue;
        }
        const item = {};
        item[key] = obj[key];
        arr.push(item);
    }
    return arr;
};


const findKey = (value, compare = (a, b) => a === b) => Object.keys(data).find(k => compare(data[k], value));


let bestFood = [];
let length = bestFood.length;

//key 为 name
let repeatName = new Map();
bestFood.forEach(v => !repeatName.has(v.name) ? repeatName.set(v.name, v) : repeatName.set(v.name, [repeatName.get(v.name), v]));
//移除非重复的
repeatName.forEach((value, key) => {
    if (!Array.isArray(value))
        repeatName.delete(key);
});
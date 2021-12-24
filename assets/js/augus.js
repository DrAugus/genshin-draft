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
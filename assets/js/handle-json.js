//转json草稿

const obj = {"name": {"id": "2"}, "n": {"id": 2}, "mm": {"id": 2}};
console.log(Object.values(obj).length)


for (let key in obj) {
    obj[key]["info"] = "";
    obj[key]["city"] = ""
}

console.log(obj)

const arr = {
    "草": "dendro",
    "岩": "geo",
    "雷": "electro",
    "水": "hydro",
    "火": "pyro",
    "风": "anemo",
    "冰": "cryo",
};

for (let key in obj) {
    obj[key]["ele"] = arr[obj[key]["element"]]
}
console.log(obj)

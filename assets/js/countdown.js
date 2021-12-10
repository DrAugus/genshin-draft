//与json一起修改
const timeAll = {
    "christmas_eve": {
        "name": "圣诞节前夜",
        "block": "12-24"
    },
    "christmas": {
        "name": "圣诞节",
        "block": "12-25"
    },
    "postgraduate_exam": {
        "name": "研究生考试",
        "2021": "12-25 09:00:00",
        "2022": "12-24 09:00:00"
    },
    "new_year": {
        "name": "元旦",
        "block": "01-01"
    },
    "new_year_eve": {
        "name": "除夕",
        "2022": "01-31",
        "2023": ""
    },
    "spring_festival": {
        "name": "春节",
        "info": "正月初一 壬寅年 虎 辛丑月 乙酉日",
        "2022": "02-01",
        "2023": ""
    },
    "lantern_festival": {
        "name": "元宵节",
        "info": "正月十五",
        "2022": "02-15",
        "2023": ""
    }
}


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
}


const arrTime = obj2arr(timeAll);

console.log(arrTime)

let ddl = (index) => {
    let y = dayjs().year()
    let k = Object.keys(timeAll)[index]
    let block = arrTime[index][k].block
    let day
    if (block) {
        day = block
        let end = y + "-" + day
        //当前时间在end后
        let endAfter = dayjs().isAfter(end, 'second')
        if (endAfter) {
            ++y;
        }

    } else {
        day = arrTime[index][k][y]
        if (!day) {
            ++y;
            day = arrTime[index][k][y]
            if (!day)
                return -1;
        }
    }

    let end = y + "-" + day
    return Deadline(dayjs(), dayjs(end));
}
const handlerTime = (index) => {
    if (ddl(index) !== -1) {
        let id = Object.keys(arrTime[index])[0];
        document.getElementById(id).innerHTML = ddl(index)

        let s = '#' + id
        let d = parseInt(ddl(index))
        if (d < 3) {
            $(s).addClass('red black-text')
        } else if (d < 7) {
            $(s).addClass('orange black-text')
        } else if (d < 10) {
            $(s).addClass('teal black-text')
        } else if (d < 15) {
            $(s).addClass('blue black-text')
        } else {
            $(s).addClass('green black-text')
        }

    } else {
        let className = document.getElementsByClassName('out-of-time-' + index);
        for (let c of className) {
            c.style.display = 'none'
        }
    }
}
const time_beat = () => {

    for (let i = 0; i < arrTime.length; ++i) {
        handlerTime(i);
    }
}

time_beat()

setInterval(time_beat, 1000);

//胡桃 语音
const voiceHuTao = [
    {
        index: 0,
        text: "嗯~早起身体好，晚睡人会飘。",
        src: "https://patchwiki.biligame.com/images/ys/8/8d/n8gei38e7k4v8os3scp7uormhc633ib.mp3"
    },
    {
        index: 1,
        text: "哟！中午好呀，吃了吗？",
        src: "https://patchwiki.biligame.com/images/ys/d/d7/kmv4y3qxzawo4lvza5sto2hqs4asxcj.mp3"
    },
    {
        index: 2,
        text: "嘻嘻，月亮出来喽~咱也出门吧。",
        src: "https://patchwiki.biligame.com/images/ys/c/c8/9p3stmpojfh2pmodmvi6srkjo55e9l9.mp3"
    },
    {
        index: 3,
        text: "咳咳...太阳出来我晒太阳，月亮出来我晒月亮咯~",
        src: "https://patchwiki.biligame.com/images/ys/0/01/2fnjqvot4urhojue61nnct93s94kpg4.mp3"
    },
    {
        index: 4,
        text: "哎哟哟",
        src: "https://patchwiki.biligame.com/images/ys/a/a7/1bxid2ud8xdv491mpn6z1nf598l6bw6.mp3"
    },
    {
        index: 5,
        text: "丘丘",
        src: "https://patchwiki.biligame.com/images/ys/2/2d/pfpqhnpnlf07hwdjud6f3ilsg840osm.mp3"
    },
    {
        index: 6,
        text: "不如去我那儿喝杯茶？嘿~",
        src: "https://patchwiki.biligame.com/images/ys/c/cd/mh8ksq83vyqgm9m065emzzstw9skjaa.mp3"
    }
];


const autoPlayVoice = () => {
    const myDate = new Date();
    const hour = myDate.getHours();

    const getVoiceIndex = (hour) => {
        if (hour < 3) {
            //丘丘
            return voiceHuTao[5].index;
        } else if (hour < 10) {
            //早上
            return voiceHuTao[0].index;
        } else if (hour < 14) {
            //中午
            return voiceHuTao[1].index;
        } else if (hour < 16) {
            //下午
            return voiceHuTao[6].index;
        } else {
            //晚上
            return voiceHuTao[2].index;
        }
    };

    let index = getVoiceIndex(hour);
    $("#hutao-voice").attr("src", voiceHuTao[index].src);
    $("#hutao-text").text(voiceHuTao[index].text);
};
autoPlayVoice();
//填充所有胡桃语音
for (let i = 0; i < voiceHuTao.length; ++i) {
    $("#hutao-voice-" + i).attr("src", voiceHuTao[i].src);
    $("#hutao-text-" + i).text(voiceHuTao[i].text);
}


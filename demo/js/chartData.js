var canvas1_1Data = [
    {
        value: 55.30,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "不知道"
    },
    {
        value: 44.70,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "知道"
    }

   ];

function canvas1_1() {
    var ctx1_1 = document.getElementById("canvas1_1").getContext("2d");
    window.myPie = new Chart(ctx1_1).Pie(canvas1_1Data, {
        responsive: false
    });
}

var canvas1_2Data = [
    {
        value: 93,
        color: "#32b72d",
        highlight: "#6bde67",
        label: "非电商"
    },
    {
        value: 7,
        color: "#fcaa11",
        highlight: "#ffca68",
        label: "电商"
    }

   ];

function canvas1_2() {
    var ctx1_2 = document.getElementById("canvas1_2").getContext("2d");
    window.myPie = new Chart(ctx1_2).Pie(canvas1_2Data, {
        responsive: false
    });
}

var canvas2_1Data = [
    {
        value: 56.91,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "影响不大"
    },
    {
        value: 20.51,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "影响很大"
    },
    {
        value: 11.52,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "没有影响"
    },
    {
        value: 11.06,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "不知道"
    }

   ];

function canvas2_1() {
    var ctx2_1 = document.getElementById("canvas2_1").getContext("2d");
    window.myDoughnut = new Chart(ctx2_1).Doughnut(canvas2_1Data, {
        responsive: false
    });
}

var canvas3_1Data = [
    {
        value: 68.43,
        color: "#F2572D",
        highlight: "#FF5A5E",
        label: "敢于创新的年轻人"
    },
    {
        value: 13.13,
        color: "#EFC028",
        highlight: "#e8c141",
        label: "领头的村干部"
    },
    {
        value: 11.06,
        color: "#008972",
        highlight: "#3da090",
        label: "镇企业领导"
    },
    {
        value: 4.61,
        color: "#00ABD8",
        highlight: "#48bbd9",
        label: "埋头苦干的农民"
    },
    {
        value: 2.07,
        color: "#0067A6",
        highlight: "#1c7eba",
        label: "无事可做的"
    },
    {
        value: 0.69,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "其他"
    }

   ];

function canvas3_1() {
    var ctx3_1 = document.getElementById("canvas3_1").getContext("2d");
    window.myDoughnut = new Chart(ctx3_1).Doughnut(canvas3_1Data, {
        responsive: false
    });
}

var canvas4Data = [
    {
        value: 60.62,
        color: "#0071c1",
        highlight: "#2189d3",
        label: "拓展客源和市场"
    },
    {
        value: 36.36,
        color: "#01b0f1",
        highlight: "#41cbff",
        label: "降低成本"
    },
    {
        value: 33.33,
        color: "#00af50",
        highlight: "#2bce76",
        label: "增加利润"
    },
    {
        value: 30.30,
        color: "#92d14f",
        highlight: "#aade72",
        label: "提高管理水平"
    },
    {
        value: 30.30,
        color: "#ffc101",
        highlight: "#ffd246",
        label: "提高竞争力"
    },
    {
        value: 24.24,
        color: "#f79647",
        highlight: "#ffb478",
        label: "增大生产规模"
    },
    {
        value: 12.12,
        color: "#712fa0",
        highlight: "#7e48a5",
        label: "没有明显帮助"
    },
   ];

function canvas4() {
    var ctx4 = document.getElementById("canvas4").getContext("2d");
    window.myPolarArea = new Chart(ctx4).PolarArea(canvas4Data, {
        responsive: true
    });
};

var canvas5_1Data = [
    {
        value: 60.37,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "自产"
    },
    {
        value: 18.66,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "代销"
    },
    {
        value: 13.82,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "自加工"
    },
    {
        value: 7.14,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "收购"
    }

   ];

function canvas5_1() {
    var ctx5_1 = document.getElementById("canvas5_1").getContext("2d");
    window.myPie = new Chart(ctx5_1).Pie(canvas5_1Data);
}

var canvas5_2Data = [
    {
        value: 37.10,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "批零兼营"
    },
    {
        value: 29.03,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "批发"
    },
    {
        value: 24.19,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "零售"
    },
    {
        value: 8.53,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "其他"
    },
    {
        value: 1.15,
        color: "#4D5360",
        highlight: "#616774",
        label: "期货"
    }

   ];

function canvas5_2() {
    var ctx5_2 = document.getElementById("canvas5_2").getContext("2d");
    window.myPie = new Chart(ctx5_2).Pie(canvas5_2Data);
}

var canvas6_1Data = [
    {
        value: 57.83,
        color: "#F7464A",
        highlight: "#FF5A5E",
        label: "一般"
    },
    {
        value: 29.26,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "满意"
    },
    {
        value: 11.29,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "不满意"
    },
    {
        value: 1.61,
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "非常满意"
    }

   ];

function canvas6_1() {
    var ctx6_1 = document.getElementById("canvas6_1").getContext("2d");
    window.myPie = new Chart(ctx6_1).Pie(canvas6_1Data);
}

var canvas7_1Data = [
    {
        value: 54.55,
        color: "#00b0f0",
        highlight: "#5dd4ff",
        label: "暂不需要"
    },
    {
        value: 18.18,
        color: "#92d050",
        highlight: "#b5e582",
        label: "容易找"
    },
    {
        value: 15.15,
        color: "#f79646",
        highlight: "#ffb87d",
        label: "人才流动频繁"
    },
    {
        value: 12.12,
        color: "#ffc000",
        highlight: "#ffd964",
        label: "非常满意"
    }

   ];

function canvas7_1() {
    var ctx7_1 = document.getElementById("canvas7_1").getContext("2d");
    window.myPie = new Chart(ctx7_1).Pie(canvas7_1Data);
}

var canvas8_1Data = [
    {
        value: 78.79,
        color: "#00008c",
        highlight: "#2020a2",
        label: "产品介绍"
    },
    {
        value: 60.61,
        color: "#006de8",
        highlight: "#006de8",
        label: "开展网上销售"
    },
    {
        value: 48.48,
        color: "#006d00",
        highlight: "#219521",
        label: "客服服务"
    },
    {
        value: 48.48,
        color: "#33ab00",
        highlight: "#5abf2e",
        label: "供求信息"
    },
    {
        value: 45.45,
        color: "#f63b00",
        highlight: "#ff6636",
        label: "价格行情"
    },
    {
        value: 18.18,
        color: "#ff8c00",
        highlight: "#ffb153",
        label: "广告服务"
    },
    {
        value: 3.03,
        color: "#020202",
        highlight: "#2a2a2a",
        label: "其他"
    },
   ];

function canvas8_1() {
    var ctx8_1 = document.getElementById("canvas8_1").getContext("2d");
    window.myPolarArea = new Chart(ctx8_1).PolarArea(canvas8_1Data, {
        responsive: true
    });
};

var canvas12Data = [
    {
        value: 5.76,
        color: "#0070c0",
        highlight: "#439bd9",
        label: "非常想，已经在着手准备"
    },
    {
        value: 16.13,
        color: "#00b0f0",
        highlight: "#46ceff",
        label: "非常想但不知道怎么操作"
    },
    {
        value: 38.25,
        color: "#92d050",
        highlight: "#b2e57c",
        label: "有机会也想试试"
    },
    {
        value: 39.86,
        color: "#f79646",
        highlight: "#ffb97f",
        label: "没考虑过"
    }

   ];

function canvas12() {
    var ctx12 = document.getElementById("canvas12").getContext("2d");
    window.myDoughnut = new Chart(ctx12).Doughnut(canvas12Data, {
        responsive: false
    });
}
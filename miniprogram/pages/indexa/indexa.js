Page({
  data: {

    jssj: "2019-12-30 07:23:00",                                   //设置结束时间

    timer: "距期末考试",                                                     //倒计时定时器名称

    qgdjs_jo: { day: "00", hour: "00", min: "00", sec: "00" }      //抢购倒计时

  },
  seetable: function () {
    wx.navigateTo({

      url: '../table/table?id='

    })

  },
  countDown: function () {
    let that = this;

    that.setData({
      timer: setInterval(function () {

        var lefttime = parseInt((new Date(that.data.jssj.replace(/-/g, "/")).getTime() - new Date().getTime()));

        if (lefttime <= 0) {
          that.setData({
            qgdjs_jo: { day: "00", hour: "00", min: "00", sec: "00" }
          })
          clearInterval(that.data.timer);
          return;
        }

        var d = parseInt(lefttime / 1000 / 3600 / 24);  //天数
        var h = parseInt(lefttime / 1000 / 3600 % 24); //小时
        var m = parseInt(lefttime / 1000 / 60 % 60);    //分钟
        var s = parseInt(lefttime / 1000 % 60);        //当前的秒

        d < 10 ? d = "0" + d : d;
        h < 10 ? h = "0" + h : h;
        m < 10 ? m = "0" + m : m;
        s < 10 ? s = "0" + s : s;

        that.setData({
          qgdjs_jo: { day: d, hour: h, min: m, sec: s }
        })
      }, 1000)
    })
  },
  onLoad: function () {
    var that = this;
    that.countDown();
  }
})

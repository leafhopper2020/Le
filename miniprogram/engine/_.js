export class Util {
  static logAndToast = (e) => {
    console.error(e)
    wx.showToast({
      title: '网络错误！',
      icon: 'none'
    })
  }
}

export class DateUtil {
  static getDayString = () => {
    let now = new Date();
    let y = now.getFullYear();//年
    let m = now.getMonth() + 1;//月
    let d = now.getDate();//日
    return `${prefixInteger(y, 4)}-${prefixInteger(m, 2)}-${prefixInteger(d, 2)}`;
  }

  static getSundayString = (date = new Date()) => {
    let dateTime = date.getTime();
    let day = date.getDay();
    let oneDayTime = 24 * 60 * 60 * 1000;
    let SundayTime = dateTime + (7 - day) * oneDayTime;
    if (day === 0) {
      SundayTime = dateTime;
    }
    let SundayDate = new Date(SundayTime);
    let y = SundayDate.getFullYear();//年
    let m = SundayDate.getMonth() + 1;//月
    let d = SundayDate.getDate();//日
    return `${prefixInteger(y, 4)}-${prefixInteger(m, 2)}-${prefixInteger(d, 2)}`;
  }
}

function prefixInteger(num, length) {
  return (Array(length).join('0') + num).slice(-length);
}


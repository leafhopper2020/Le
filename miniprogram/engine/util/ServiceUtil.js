import { Util } from '../index'
const CLOUD_NAME = 'router'

export default class ServiceUtil {
  constructor(cloudName = CLOUD_NAME) {
    this.cloudName = cloudName;
  }

  request = (url, data = {}, complete = (res) => {}) => {
    return new Promise((resolve, reject) => {
      this.callFunction(
        url,
        data,
        ((result) => {
          resolve(result?.result?.data);
        }),
        ((reuslt) => {
          reject(reuslt);
        }),
        complete,
      )
    })
  }
  
  callFunction = (url, data = {}, success = () => {}, fail = () => {}, complete = (res) => {}) => {
    wx.showLoading({
      title: '加载中',
    })
    wx.cloud.callFunction({
      name: this.cloudName,
      data: {
        $url: url,
        ...data,
      },
      success: (res) => {
        success(res);
      },
      fail: (res) => {
        Util.logAndToast(res);
        fail(res);
      },
      complete: (res) => {
        wx.hideLoading();
        complete(res);
      }
    })
  }
} 

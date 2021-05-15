import { User } from '../../engine/index'

Page({
  data: {
    user: {},
  },
  
  async onShow () {
    const result = await User.getById('cbddf0af609f9aea08a952d12df6096c');
    this.setData({
      user: result.data[0],
    })
  },
});

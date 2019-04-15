// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db =cloud.database()
// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()
  return await db.collection('order').add({
    data:{
      user:wxContent.OPENID,
      action:'新增订单'
    }
  })
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
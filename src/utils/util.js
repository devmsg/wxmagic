const Util = {
  formatTime:(date)=>{
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()

    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()


    return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
  },

  formatNumber:(n)=>{
    n = n.toString()
    return n[1] ? n : '0' + n
  },

  sleep:(ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
};

export default Util;

import wx from 'labrador'
import Util from './utils/util'

export default class {

	globalData = {
		userInfo: null
	};

	async onLaunch() {
		try {
			let rep =  await wx.getStorage({
				key: "logs",
			});
			let logs = rep.data || [];
			logs.unshift(Date.now());
			await wx.setStorage({
				key : "logs",
				data: logs
			});
		} catch (e) {
			console.error(e);
		}
	}

	async getUserInfo() {
		if (this.globalData.userInfo) {
			return this.globalData.userInfo;
		}
		await wx.login();
		let res                  = await wx.getUserInfo();
		this.globalData.userInfo = res.userInfo;
		return res.userInfo;
	}
}

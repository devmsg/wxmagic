import wx, {
	Component,
	PropTypes
} from 'labrador'
import Title from '../../components/title/title'

class log extends Component {
	//当前组件的props参数数据类型的定义
	static propTypes    = {};
	//当前组件默认的各项参数值
	static defaultProps = {};
	//构造
	constructor(props) {
		super(props);
		this.state = {
			logs: []
		};
	}

	//当前组件中的子组件集合
	children() {
		return {
			title: {
				component: Title,
				props    : {
					title: '组件的定义',
					desc : '接收父组件的数据传递'
				}
			}
		};
	}

	//当组件的 props 发生变化后被调用
	onUpdate(props) {
		this.setState();
	}

	async onLoad() {
		let rep  = await wx.getStorage({ key: "logs" });
		let logs = rep.data || [];
		this.setState({
			logs: logs
		});
	}
}

export default log;

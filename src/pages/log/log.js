import wx, {
  Component,
  PropTypes
} from 'labrador'
import util from '../../utils/util'
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
          title: '查看启动日志',
          desc : '数组来源porps（父组件）'
        }
      }
    };
  }

  //当组件的 props 发生变化后被调用
  onUpdate(props) {
    this.setState();
  }

  async onLoad() {
    let res = await wx.getStorage({key:'logs'});
    let logs = res.data || [];
    this.setState({
      logs:logs
    })
  }
}

export default log;

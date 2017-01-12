import wx, {
  Component,
  PropTypes
} from 'labrador';

class index extends Component {
  //当前组件的props参数数据类型的定义
  static propTypes    = {};
  //当前组件默认的各项参数值
  static defaultProps = {};
  //构造
  constructor(props) {
    super(props);
    this.state = {
      motto: "Hello World"
    };
  }

  //当前组件中的子组件集合
  children() {
    return {};
  }

  //当组件的 props 发生变化后被调用
  onUpdate(props) {
    this.setState();
  }

  bindViewTap() {
    wx.navigateTo({
      url: '../log/log'
    })
  }

  async onLoad() {
    try {
      //调用应用实例的方法获取全局数据
      let userInfo = await wx.app.getUserInfo();
      //更新数据
      this.setState({ userInfo });
    } catch (error) {
      console.error(error.stack);
    }
  }

}

export default index;

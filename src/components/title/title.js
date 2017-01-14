import wx,{ Component, PropTypes } from 'labrador';

class Title extends Component {
  //当前组件的props参数数据类型的定义
  static propTypes ={};
  //当前组件默认的各项参数值
  static defaultProps = {};
  //构造
  constructor(props) {
    super(props);
    this.state = {};
  }
  //当前组件中的子组件集合
  children() {
    return {};
  }
  //当组件的 props 发生变化后被调用
  onUpdate(props) {
    this.setState();
  }
}

export default Title;

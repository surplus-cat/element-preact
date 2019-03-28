import { h } from 'preact';
import Component from '../libs/Component';
import { TypeColor } from '../interfaces';

type Color = string
type Props = {
  refs?: any
  closable?: boolean
  type?: TypeColor
  hit?: boolean
  color?: Color
  closeTransition?: boolean
  onClose?: () => void
}

export default class extends Component<Props, { visible: boolean }> {
  constructor(props: Props) {
    super(props);

    this.state = {
      visible: true
    };
  }

  handleClose() {
    this.setState({
      visible: false
    }, () => {
      if (this.props.onClose) {
        this.props.onClose();
      }
    });
  }

  render() {
    const { type, hit, closable, closeTransition, color } = this.props;

    return(
          <span
            style={this.style({
              backgroundColor: color
            })}
            className={this.className('el-tag', type && `el-tag--${type}`, {
              'is-hit': hit
            })}
          >
            {this.props.children}
            { closable && <i className="el-tag__close el-icon-close" onClick={this.handleClose.bind(this)}></i> }
          </span>
    )
  }
}


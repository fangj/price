import React from 'react';

/*
data={
"url": "http://product.pconline.com.cn/dv/xiaomi/625668.html",
"price": "￥399",
"desc": "产品类型：高清摄像机；高清规格：1080p 1920×1080；光学变焦：无光学变焦；",
"采集时间": "2016-11-15",
"title": "小米米家小白摄像机"
}
 */
export default class pconline extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const data=props.data;
  }

  render() {
    const {url,price,desc,title,采集时间}=this.props.data;
    return (
      <div>
        <a href={url} target="_blank">
        <dl>
        <dt>{title}</dt>
        <dd>{desc}</dd>
        </dl>
        </a>
        <table className="table table-striped table-bordered">
        <tbody>
        <tr>
          <td>{采集时间}</td>
          <td>{price}</td>
        </tr>
        </tbody>
        </table>
      </div>
    );
  }
}

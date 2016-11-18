import React from 'react';

/*
data={
"img": "http://image.it168.com/n/240x180/7/7940/7940956.jpg",
"title": "小米 小米小盒子",
"url": "http://product.it168.com/detail/doc/1053958/index.shtml",
"price": "￥399 起",
"采集时间": "2016-11-16",
"desc": "2015年01月上市"
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
    const {url,price,desc,title,img,采集时间}=this.props.data;
    return (
      <div>
        <h4>IT168</h4>
        <a href={url} target="_blank">
        <img src={img} className="thumb"/>
        <dl>
        <dt>{title}</dt>
        <dd>{desc}</dd>
        </dl>
        </a>
        <table className="table table-striped table-bordered">
        <tr>
          <td>{采集时间}</td>
          <td>{price}</td>
        </tr>
        </table>
      </div>
    );
  }
}

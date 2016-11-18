import React from 'react';

/*
data={
"sku": "10839682778",
"img": "http://img13.360buyimg.com/n7/jfs/t3742/134/365570423/534370/62554351/580875b8N5e8604b8.jpg",
"title": "高妆 1000g山西黄小米新小米食用小米粥五谷粗粮杂粮小黄米",
"url": "http://item.jd.com/10839682778.html",
"price": "19.90",
"采集时间": "2016-11-18"
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
        <a href={url} target="_blank">
        <img src={img} className="thumb"/>
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

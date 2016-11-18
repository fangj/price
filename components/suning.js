import React from 'react';

/*
data={
"sku": "123134585|||||0070069140",
"img": "http://image3.suning.cn/uimg/b2c/newcatentries/0070069140-000000000123134585_1_200x200.jpg",
"title": "英吉利 2罐装小米米粉 原味 米粉0段米糊辅食 小米粉 大营养 小米高蛋白，营养添活力",
"url": "http://product.suning.com/0070069140/123134585.html",
"price": "99.00",
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
        <h4>苏宁</h4>
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

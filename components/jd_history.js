import React from 'react';

/*
data={
"url": "http://item.jd.com/3633865.html",
"history": "[[\"2016-11-09\",99],[\"2016-11-15\",99]]",
"img": "http://img10.360buyimg.com/n7/jfs/t3745/310/1174294890/61978/975f7b0/581fdc2eN5e1c92ae.jpg",
"title": "小米 MI 小米(MI)小米便携鼠标"
}
 */
export default class pconline extends React.Component {
  static propTypes = {
    data: React.PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    const data=props.data;
    this.showHistory=this.showHistory.bind(this)
  }

  render() {
    const {url,history,title,img}=this.props.data;
    const h=JSON.parse(history)
    return (
      <div>
        <h4>京东历史价格</h4>
        <a href={url} target="_blank">
        <img src={img} className="thumb"/>
        <dl> <dt>{title}</dt> </dl>
        </a>
        <table className="table table-striped table-bordered">
        {h.map(this.showHistory)}
        </table>
      </div>
    );
  }

  showHistory([date,price]){
    return <tr key={date}>
          <td>{date}</td>
          <td>{price}</td>
        </tr>
  }
}

import React from 'react';

export default class search extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.search=this.search.bind(this)
  }

  render() {
    return (
      <div className="row">
      <div className="col-xs-8">
        <input type="text" className="form-control" ref="search" />
    </div>
    <div className="col-xs-4">
        <span className="input-group-btn">
          <button className="btn btn-default" type="button" onClick={this.search}>搜索</button>
        </span>
    </div>
    </div>
    );
  }

  search(){
    var text=this.refs.search.value;
    PubSub.publish('search',text);
  }
}

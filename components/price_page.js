import React from 'react';
import Search from '../components/search'
import Pconline from '../components/pconline'
import It168 from '../components/it168'
import Suning from '../components/suning'
import Jd from '../components/jd'
import JdHistory from '../components/jd_history'
import api from "../api/api";
import {Tabs,Tab} from 'react-bootstrap';
export default class PricePage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.onSearch=this.onSearch.bind(this)
    this.state={}
    
  }
  componentDidMount() {
    this.token=PubSub.subscribe("search",this.onSearch)
  }
  componentWillUnmount() {
    PubSub.unsubscribe(this.token)
  }
  onSearch(msg,search){
    console.log("onSearch",search);
    api.jd(search).then(jd=>this.setState({jd}));
    api.sn(search).then(sn=>this.setState({sn}));
    api.pconline(search).then(pconline=>this.setState({pconline}));
    api.it168(search).then(it168=>this.setState({it168}));
    api.jd_history(search).then(jd_history=>this.setState({jd_history}));
  }

  render() {
    const {jd,sn,pconline,it168,jd_history} =this.state;
    return (
      <div className="container">
      <Search/>
      <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
      <Tab eventKey={1} title="京东历史">
      <div className="row">
      {
       !jd_history?null:jd_history.map(data=> <div className="col-md-3">
          <JdHistory data={data} key={data._id}/>
        </div>)
      }
      </div>
      </Tab>
      <Tab eventKey={2} title="京东">
      <div className="row">
      {
       !jd?null:jd.map(data=> <div className="col-md-3">
          <Jd data={data} key={data._id}/>
        </div>)
      }
      </div>
      </Tab>
      <Tab eventKey={3} title="苏宁" >
      <div className="row">
      {
       !sn?null:sn.map(data=> <div className="col-md-3">
          <Suning data={data} key={data._id}/>
        </div>)
      }
      </div>
      </Tab>
      <Tab eventKey={4} title="IT168" >
      <div className="row">
      {
       !it168?null:it168.map(data=> <div className="col-md-3">
          <It168 data={data} key={data._id}/>
        </div>)
      }
      </div>
      </Tab>
      <Tab eventKey={5} title="PConline" >
      <div className="row">
      {
       !pconline?null:pconline.map(data=> <div className="col-md-3">
          <Pconline data={data} key={data._id}/>
        </div>)
      }
      </div>
      </Tab>
    </Tabs>
 </div>
    );
  }
}

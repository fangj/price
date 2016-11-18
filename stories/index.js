import React from 'react';
import { storiesOf, action } from '@kadira/storybook';


storiesOf('Button', module)
  .add('with text', () => (
  	<button type="button" className="btn btn-success" onClick={action('clicked')}>Success</button>
  ))
  .add('with some emoji', () => (
    <button onClick={()=>toastr.info('Are you the 6 fingered man?')}>😀 😎 👍 💯</button>
  ))
  .add('with pubsub', () => (
    <button onClick={()=>PubSub.publish('msg.error','something wrong')}>😀 😎 👍 💯</button>
  ));

import Search from '../components/search'
import PricePage from '../components/price_page'
storiesOf('Search', module)
  .add('search', () => (
    <Search />
  ))
  .add('page', () => (
    <PricePage />
  ))

var data_pconline={
"url": "http://product.pconline.com.cn/dv/xiaomi/625668.html",
"price": "￥399",
"desc": "产品类型：高清摄像机；高清规格：1080p 1920×1080；光学变焦：无光学变焦；",
"采集时间": "2016-11-15",
"title": "小米米家小白摄像机"
}

var data_it168={
"img": "http://image.it168.com/n/240x180/7/7940/7940956.jpg",
"title": "小米 小米小盒子",
"url": "http://product.it168.com/detail/doc/1053958/index.shtml",
"price": "￥399 起",
"采集时间": "2016-11-16",
"desc": "2015年01月上市"
}

var data_suning={
"sku": "123134585|||||0070069140",
"img": "http://image3.suning.cn/uimg/b2c/newcatentries/0070069140-000000000123134585_1_200x200.jpg",
"title": "英吉利 2罐装小米米粉 原味 米粉0段米糊辅食 小米粉 大营养 小米高蛋白，营养添活力",
"url": "http://product.suning.com/0070069140/123134585.html",
"price": "99.00",
"采集时间": "2016-11-18"
}

var data_jd={
"sku": "10839682778",
"img": "http://img13.360buyimg.com/n7/jfs/t3742/134/365570423/534370/62554351/580875b8N5e8604b8.jpg",
"title": "高妆 1000g山西黄小米新小米食用小米粥五谷粗粮杂粮小黄米",
"url": "http://item.jd.com/10839682778.html",
"price": "19.90",
"采集时间": "2016-11-18"
}

var data_jd_history={
"url": "http://item.jd.com/3633865.html",
"history": "[[\"2016-11-09\",99],[\"2016-11-15\",99]]",
"img": "http://img10.360buyimg.com/n7/jfs/t3745/310/1174294890/61978/975f7b0/581fdc2eN5e1c92ae.jpg",
"title": "小米 MI 小米(MI)小米便携鼠标"
}

import Pconline from '../components/pconline'
import It168 from '../components/it168'
import Suning from '../components/suning'
import Jd from '../components/jd'
import JdHistory from '../components/jd_history'
storiesOf('show', module)
  .add('pconline', () => (
    <Pconline  data={data_pconline}/>
  ))
  .add('IT168', () => (
    <It168  data={data_it168}/>
  ))
  .add('Suning', () => (
    <Suning  data={data_suning}/>
  ))
  .add('JD', () => (
    <Jd  data={data_jd}/>
  ))
  .add('JdHistory', () => (
    <JdHistory  data={data_jd_history}/>
  ))
  

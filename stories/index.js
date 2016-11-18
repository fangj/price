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
storiesOf('Search', module)
  .add('search', () => (
    <Search />
  ))

var data_pconline={
"url": "http://product.pconline.com.cn/dv/xiaomi/625668.html",
"price": "￥399",
"desc": "产品类型：高清摄像机；高清规格：1080p 1920×1080；光学变焦：无光学变焦；",
"采集时间": "2016-11-15",
"title": "小米米家小白摄像机"
}

import PConline from '../components/pconline'
storiesOf('show', module)
  .add('pconline', () => (
    <PConline  data={data_pconline}/>
  ))

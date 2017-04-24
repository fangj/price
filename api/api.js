// import Frisbee from 'frisbee';
// const agent = new Frisbee({
//   baseURI: 'http://106.14.34.83:9000',
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json'
//   },
//   mode: 'no-cors'
// });


var agent = axios.create({
  baseURL: 'http://106.14.34.83:9000'
});

function tidy(resp){
  return resp.hits.hits.map(obj=>obj._source)
}

function jd_history(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple2/jd_history/_search",data).then(res => tidy(res.data));
}

function jd(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple2/jd_price/_search",data).then(res => tidy(res.data));
}

function sn(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple2/sn_price/_search",data).then(res => tidy(res.data));
}
function pconline(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple2/pconline/_search",data).then(res => tidy(res.data));
}
function it168(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple2/it168/_search",data).then(res => tidy(res.data));
}

module.exports={
  jd,sn,it168,pconline,jd_history
}
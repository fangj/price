import Frisbee from 'frisbee';
const agent = new Frisbee({
  baseURI: 'http://106.14.34.83:9000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  mode: 'no-cors'
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
  return agent.post("/simple/jd_history/_search",{body:data}).then(res => tidy(res.body));
}

function jd(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple/jd_price/_search",{body:data}).then(res => tidy(res.body));
}

function sn(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple/sn_price/_search",{body:data}).then(res => tidy(res.body));
}
function pconline(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple/pconline/_search",{body:data}).then(res => tidy(res.body));
}
function it168(search) {
  const data={
    "query" : {
        "match" : { "title": search}
    }
  }
  return agent.post("/simple/it168/_search",{body:data}).then(res => tidy(res.body));
}

module.exports={
  jd,sn,it168,pconline,jd_history
}
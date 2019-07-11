
const {fetch}=require("fetch-ponyfill")();
const conf=new require("./configuration")
class FetchClientObject {

     constructor () {

    // this.accessToken=conf.access_token
     this.apiUrl="https://www.zenduty.com"

     }


request(endpoint, method, body, headers) {
    
    
    const options = {
      method: method,
      headers:headers
    };
    if(method!='get')
      options["body"]=JSON.stringify(body)

    console.log(options)
    console.log("\n\n\n")
    console.log(`${this.apiUrl}${endpoint}`)
    if(method!='delete')
    {
    return fetch(`${this.apiUrl}${endpoint}`, options).then(response => {
      if (!response.ok) 
      {
             // console.log("THis is not working ")
              throw response;
             
      }
      return response.json();

     }).then(myJson=>{
      if(method!='delete')
       console.log(JSON.stringify(myJson))
     });
    }
    else{
      return fetch(`${this.apiUrl}${endpoint}`, options)
    }
  }
}

module.exports={
  FetchClientObject
}
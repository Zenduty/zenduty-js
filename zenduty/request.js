//import fetch for performing various requests to api
const {fetch}=require("fetch-ponyfill")();
const conf=new require("./configuration")
class FetchClientObject {

     constructor () {
     this.apiUrl="https://www.zenduty.com"
     }


request(endpoint, method, body, headers) {
      
     //Preparing options i.e. options={ method,headers,body }
     const options = {
      method: method,
      headers:headers
    };
     //Adding body parameter to options if method is not get
    if(method!='get')
      options["body"]=JSON.stringify(body)

    //console.log(options)
    //console.log(`${this.apiUrl}${endpoint}`)
     
    if(method!='delete')
    {
          return fetch(`${this.apiUrl}${endpoint}`, options).then(response => {
          if (!response.ok) 
          {
             // console.log("This is not working ")
              throw response;
             
           }
          return response.json();

          }).then(myJson=>{
          if(method!='delete')
          console.log(JSON.stringify(myJson))
          });
    }
    else
    {
          //DELETE
          return fetch(`${this.apiUrl}${endpoint}`, options)
    }
  }
}

module.exports={
  FetchClientObject
}

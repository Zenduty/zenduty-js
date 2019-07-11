//from .rest import RESTClientObject
//from .configuration import Configuration
const FetchClientObject=require("./request")
const Configuration=require("./configuration")
class ApiClient
{
    constructor(access_token){
        this.configuration = new Configuration.Configuration(access_token)
       // self.rest_client = RESTClientObject()
        this.fetch_client= new FetchClientObject.FetchClientObject()
     }
    call_api(url,method,body={},headers={})
    {
        //#building the header
        // url ='https://www.zenduty.com'+url
        headers["Authorization"]='Token '+this.configuration.access_token
        headers["Content-Type"]="application/json"
        //making the request through RESTClientObject
        // data=body
        return this.fetch_client.request(url,method,body,headers)// Problem1
    }
}
module.exports={
    ApiClient
}
//importing files
const FetchClientObject=require("./request")
const Configuration=require("./configuration")
class ApiClient
{
    constructor(access_token){
        this.configuration = new Configuration.Configuration(access_token)
        this.fetch_client= new FetchClientObject.FetchClientObject()
     }
    call_api(url,method,body={},headers={})
    {
        //#building the header
        headers["Authorization"]='Token '+this.configuration.access_token
        headers["Content-Type"]="application/json"
        //making the request through FETCHClientObject
        return this.fetch_client.request(url,method,body,headers)
    }
}
module.exports={
    ApiClient
}

// import ApiClient from zenduty.api_client 
// const ApiClient=require("../api_client")
const ApiClient=require("../api_client")
class ServicesApi{
  constructor(api_client=null){

    if (api_client==null)
    {
            api_client=ApiClient()
    }  
        this.api_client = api_client
    }

getServices (team_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/services/`,'get')
}
addService  (team_id,payload)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/services/`,'post',payload)
}
getServiceById (team_id,service_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,'get')
}
updateService (team_id,service_id,payload)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,"PATCH",payload)
}
deleteService (team_id,service_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,'delete')
}
}
module.exports={ServicesApi}
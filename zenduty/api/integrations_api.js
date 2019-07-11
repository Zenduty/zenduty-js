// import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class IntegrationsApi{
	constructor(api_client=null){
        if (api_client==null)
            api_client=ApiClient()
       
        this.api_client = api_client
    }
getIntegrationInService(team_id,service_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}`,'get')
}

createIntegration(team_id,service_id,payload)
{

// payload={
//     "name":"SDKNODE",
//     "summary":"testingphase",
//     "application":"f63f1c66-9fd9-4e54-8087-2734dda81ad8"
// }
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/integrations/`,'post',payload)
}
getIntegrationById(team_id,service_id,integration_id){
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/integrations/${integration_id}/`,'get')
}

getAlertsInIntegration(team_id,service_id,integration_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/integrations/${integration_id}/alerts/`,'get')
}
}
module.exports={IntegrationsApi}
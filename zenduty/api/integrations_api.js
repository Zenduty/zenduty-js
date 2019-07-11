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
	 //Returns the integrations in a service
       	//params <str> team_id: unique id of team
	//params <str> service_id: unique id of service
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}`,'get')
}

createIntegration(team_id,service_id,payload)
{
	//Creates Integration in a service 
	//params <str> team_id: unique id of team
        //params <str> service_id: unique id of service
	//params <dict> payload: contains the details of the new integration
	// payload={
	//     "name":"SDKNODE",
	//     "summary":"testingphase",
	//     "application":"f63f1c66-9fd9-4e54-8087-2734dda81ad8"
	// }
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/integrations/`,'post',payload)
}
getIntegrationById(team_id,service_id,integration_id){
	
	//Returns an integration belonging to a service in a team, identified by id
        //params <str> team_id: unique id of team
        //params <str> service_id: unique id of service
	//params <str> integration_id: unique id of integration
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/integrations/${integration_id}/`,'get')
}

getAlertsInIntegration(team_id,service_id,integration_id)
{
	//Retruns alerts in a particular integration
        //params str team_id: unique id of team
        //params str service_id: unique id of service
	//params str integration_id: unique id of integration
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/integrations/${integration_id}/alerts/`,'get')
}
}
module.exports={IntegrationsApi}

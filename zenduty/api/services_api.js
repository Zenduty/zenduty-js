// import ApiClient from zenduty.api_client
const ApiClient=require("../api_client")
module.exports=class ServicesApi{
  constructor(api_client=null){

    if (api_client==null)
    {
            api_client=ApiClient()
    }
        this.api_client = api_client
    }

getServices (team_id)
{
    //Returns all the services in a team
    //params str team_id: unnique id of team
    return this.api_client.call_api(`/api/account/teams/${team_id}/services/`,'get')
}
addService  (team_id,payload)
{
  //Adds a new servie to a give team, identified by id
        //params str team_id: unique id of team
        //params dict body: contains the details of the new service to be added
        //Sample body
        //{"name":"Name of service",
        // "description":"Description of service",
        // "integrations":[{"application":"27c9800c-2856-490d-8119-790be1308dd4",
        //                 "name":"API",
        //                 "summary":"Edit summary for this integration"}],
        // "escalation_policy":"5c9b6288-c105-418d-970b-91a93d0e919a",
        // "acknowledgement_timeout":1,
        // "auto_resolve_timeout":1}

    return this.api_client.call_api(`/api/account/teams/${team_id}/services/`,'post',payload)
}
getServiceById (team_id,service_id)
{
    //Returns a particular service from a  team, identified by id
        //params str team_id: unique id of team
        //params str service_id: unique id of service
    return this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,'get')
}
updateService (team_id,service_id,payload)
{
  //Updates the existing service in a team
        //params
        //<str> team_id: unique id of team
        //<str> service_id: unique id of service
        //<dict> body: contains the updated details of services
        //payload:
        //{"unique_id":"bc808ce3-46c0-41d0-bf1f-f405fdd0c1c3",
        //"auto_resolve_timeout":0,
        //"acknowledgement_timeout":0,
        //"status":1,
        //"escalation_policy":"5c9b6288-c105-418d-970b-91a93d0e919a"}
    return this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,"PATCH",payload)
}
deleteService (team_id,service_id)
{
  //Deletes a particular service from a team
        //params
        //<str> team_id: unique id of team
        //<str> service_id: unnique id of service
    this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,'delete')
}
}

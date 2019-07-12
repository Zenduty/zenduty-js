// import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class IncidentsApi{
       constructor(api_client=null){
        if (api_client==null)
            api_client=ApiClient()
        this.api_client = api_client
}
getIncidents(payload)
{
       //provides incidents for the given payload
           //params <dict> payload
           // payload=
           //        {
           //            'page':1,
           //      'status':5,
           //      'team_id':['a2c6322b-4c1b-4884-8f7a-a7f270de98cb'],
           //      'service_ids':[],
           //      'user_ids':[]
           //     }
    return this.api_client.call_api(`/api/incidents/`,'get',payload)
}
getIncidentByNumber(incident_number)
{
    //returns incidents identified by incident_number
    return this.api_client.call_api(`/api/incidents/${incident_number}/`,'get')
}
getIncidentAlerts(incident_number)
{
       //Returns all alerts of a particular incident
       //params int incident_number: incident number of event
    return this.api_client.call_api(`/api/incidents/${incident_number}/alerts/`,'get')
}
getIncidentNotes(incident_number)
{
       //Returns IncidentNotes
    return this.api_client.call_api(`/api/incidents/${incident_number}/note/`,'get')
}
acknowledgeOrResolveIncident(incident_number,payload)
{
   //AcknowledgesOrResolvesIncident
       //     payload={   
       //             'status':3,
       //             'incident_number':12
       //              }

    return this.api_client.call_api(`/api/incidents/${incident_number}/`,"PATCH",payload)
}
 createIncident(payload):
        #Used to create an incident for a particular service, identified by id
        #params dict payload: contains necessary details for creating incident
        # Sample payload:
        #           {"service":"c7fff4c5-2def-41e8-9120-c63f649a825c",
        #            "escalation_policy":"a70244c8-e343-4dd0-8d87-2f767115568a",
        #            "user":null,
        #            "title":"Name of trial",
        #            "summary":"summary of trial"}
        #  escalation_policy,service, title and summary are required fields.
        #  if escalation_policy is not set (set to None then), then assigned_to is required, as follows
        #           {"service":"b1559a26-c51f-45a1-886d-f6caeaf0fc7e",
        #            "escalation_policy":null,
        #            "assigned_to":"826032d6-7ccd-4d58-b114-f",
        #            "title":"Name of trial",
        #            "summary":"Summary of trial"}
       return this.api_client.call_api(''/api/incidents/','post',payload)
    
}
module.exports={IncidentsApi}

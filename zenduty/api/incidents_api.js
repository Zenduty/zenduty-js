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
    this.api_client.call_api(`/api/incidents/`,'get',payload)
}
getIncidentByNumber(incident_number)
{
    //returns incidents identified by incident_number
    this.api_client.call_api(`/api/incidents/${incident_number}/`,'get')
}
getIncidentAlerts(incident_number)
{
       //Returns all alerts of a particular incident
       //params int incident_number: incident number of event
 this.api_client.call_api(`/api/incidents/${incident_number}/alerts/`,'get')
}
getIncidentNotes(incident_number)
{
       //Returns IncidentNotes
    this.api_client.call_api(`/api/incidents/${incident_number}/note/`,'get')
}
acknowledgeOrResolveIncident(incident_number,payload)
{
   //AcknowledgesOrResolvesIncident
       //     payload={   
       //             'status':3,
       //             'incident_number':12
       //              }

    this.api_client.call_api(`/api/incidents/${incident_number}/`,"PATCH",payload)
}
    
}
module.exports={IncidentsApi}

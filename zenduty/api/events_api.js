// import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class EventsApi
{
    constructor(api_client=null){
        if (api_client==null)
            api_client=ApiClient()
       
        this.api_client = api_client
    }

  createEvent(integration_key,payload){
  //Creates an incident event on zenduty
        //params 
        //<str> integration_key: unique key provided for your integration
        //<dict> payload: contains the details of the event
        //   'message', 'summary' are required fields of the body
        //   'alert_type' is "info" by default
        //   'suppressed' is false by default
        //   if no entity_id is provided, Zenduty provides one automatically
        // Sample payload:
        //          {'message':message,
        //         'summary':summary,
        //         'alert_type':alert_type,
        // 'supressed':supressed}
     return this.api_client.call_api(`/api/events/${integration_key}/`,'post',payload)
  }
}
module.exports={EventsApi}

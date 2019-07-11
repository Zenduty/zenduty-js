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
    // payload=  {
    //     'message':"EventName",
    //     'summary':"summary",
    //      'alert_type':"critical",
    //     //  'supressed':supressed
    //   }
      this.api_client.call_api(`/api/events/${integration_key}/`,'post',payload)
  }
}
module.exports={EventsApi}

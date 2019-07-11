//import api files 
const TeamsApi= require("../zenduty/api/teams_api.js")
const serviceApi=require("../zenduty/api/services_api")
const escalationApi=require("../zenduty/api/escalationpolicies_api")
const eventsApi=require("../zenduty/api/events_api")
const incidentsApi=require("../zenduty/api/incidents_api")
const itegrationApi=require("../zenduty/api/integrations_api.js")
const membersApi=require("../zenduty/api/members_api")
const schedulesApi=require("../zenduty/api/schedules_api")
//import apiclient
const ApiClient=require("../zenduty/api_client.js")
//instantiate ApiClient
const apicl=new ApiClient.ApiClient('8f06122ae8e09059d3a85314fe877881b4d78608')
//instantiate API class
api_instance = new schedulesApi.SchedulesApi(apicl)

try
{
    api_response = api_instance.deleteSchedule("d4a777db-5bce-419c-a725-420ebb505c54","99a4f9d3-49c7-4dde-9b8f-3efa0333ce87")
}

catch(err)
{
    console.error(err )
}

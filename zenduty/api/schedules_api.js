// import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class SchedulesApi{
   constructor(api_client=null){
        if (api_client==null)
            api_client=ApiClient()
       
        this.api_client = api_client

}
getSchedule(team_id){
    this.api_client.call_api(`/api/account/teams/${team_id}/schedules/`,'get')
}

createSchedule(team_id,payload){
    // payload={
    //     "name":"NodeUpdate",
    //          "summary":"updating nodesdk",
    //          "time_zone":"Asia/Kolkata",
    //          "team":"d4a777db-5bce-419c-a725-420ebb505c54",
    //  "layers":[]}
    this.api_client.call_api(`/api/account/teams/${team_id}/schedules/`,'post',payload)
}

getScheduleById(team_id,schedule_id){
    this.api_client.call_api(`/api/account/teams/${team_id}/schedules/${schedule_id}/`,'get')
}

updateSchedule(team_id,schedule_id,payload){
    this.api_client.call_api(`/api/account/teams/${team_id}/schedules/${schedule_id}/`,'patch',payload)
}

deleteSchedule(team_id,schedule_id){
    this.api_client.call_api(`/api/account/teams/${team_id}/schedules/${schedule_id}/`,'delete')
}

}
module.exports={SchedulesApi}
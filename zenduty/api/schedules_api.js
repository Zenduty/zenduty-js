// import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class SchedulesApi{
   constructor(api_client=null){
        if (api_client==null)
            api_client=ApiClient()
       
        this.api_client = api_client

}
getSchedule(team_id){
     //Returns the schedules in a particular team, identified by id
      //params <str> team_id: unique id of a team
    return this.api_client.call_api(`/api/account/teams/${team_id}/schedules/`,'get')
}

createSchedule(team_id,payload){
   //Creates a schedule for a team
        //params str team_id: unique id of team
        //params dict body: contains the details of the schedule to be created
        //Sample payload=
        //{"name":"Name of schedule",
        // "summary":"summary of schedule",
        // "time_zone":"Asia/Kolkata",
        // "team":"d4a777db-5bce-419c-a725-420ebb505c54",
        // "layers":[]}
    return this.api_client.call_api(`/api/account/teams/${team_id}/schedules/`,'post',payload)
}

getScheduleById(team_id,schedule_id){
   //Returns a particular schedule from a team, identifed by id
        //params <str> team_id: unique id of a team
        //params <str> schedule_id: unique id of schedule
    return this.api_client.call_api(`/api/account/teams/${team_id}/schedules/${schedule_id}/`,'get')
}

updateSchedule(team_id,schedule_id,payload){
    //Updates the schedule details for a given team, identified by id
        //params str team_id: unique id of a team
        //params str schedul_id: unique id of schedule
        //params dict body: contains the updated values of  schedule
        //   'unique_id' and 'team' are required. Other fields are just those which have been changed
        //Sample payload:
        //{"name":"Name of schedule",
        // "summary":"summar of schedule",
        // "time_zone":"Asia/Kamchatka",
        // "team":"d4a777db-5bce-419c-a725-420ebb505c54",
        // "unique_id":"f9b34bd3-818a-4b98-9d8a-04d8bd501cd0",
        // "layers":[]}
    return this.api_client.call_api(`/api/account/teams/${team_id}/schedules/${schedule_id}/`,'patch',payload)
}

deleteSchedule(team_id,schedule_id){
    //Deletes a schedule from a team
        //params <str> team_id:unique id of team
        //params <str> schedule_id: unique id of schedule
    this.api_client.call_api(`/api/account/teams/${team_id}/schedules/${schedule_id}/`,'delete')
}

}
module.exports={SchedulesApi}

//import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class TeamsApi{
    constructor(api_client=null){
        if (api_client==null)
        {
            api_client= new ApiClient.ApiClient()
            console.log("running")
        }
        this.api_client = api_client
    }
 getTeams(){ 
     //Returns all the teams and their details from your Zenduty account
   return this.api_client.call_api("/api/account/teams/",'get');
}

 createTeam(payload){ 
//      Creates a new team for your zenduty account
//         params dict body: contains the details for your new team
//         payload=
//         'name' is a required field
//         {'name':name}
     return this.api_client.call_api("/api/account/teams/",'post',body=body)
}

getTeamDetails(team_id)
{
    // Returns a team form your zenduty acocunt, identified by id
    // params <str> team_id: unique id of team
    this.api_client.call_api(`/api/account/teams/${team_id}/`,'get');
} 

deleteTeam(team_id) 
{
    //Deletes a team form your zenduty account
    //params str team_id: unique id of team
    this.api_client.call_api(`/api/account/teams/${team_id}/`,'delete');
}
}
module.exports={TeamsApi}

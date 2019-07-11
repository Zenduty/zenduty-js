//import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class TeamsApi{
    constructor(api_client=null){
        if (api_client==null)
        {
            api_client= new ApiClient.ApiClient()
            console.log("running")
        }
        // console.log(api_client)
        this.api_client = api_client
    }
 getTeams(){ 
     this.api_client.call_api("/api/account/teams/",'get');
}
//Problem
 createTeam(name){ 
    let body={
        "name":name
        }
     return this.api_client.call_api("/api/account/teams/",'post',body=body)
}

getTeamDetails(team_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/`,'get');
} 
//Notchecked
deleteTeam(team_id) 
{
    this.api_client.call_api(`/api/account/teams/${team_id}/`,'delete');
}
}
module.exports={TeamsApi}
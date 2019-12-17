// import ApiClient from zenduty.api_client
const ApiClient=require("../api_client")
module.exports=class MembersApi{
   constructor(api_client=null){
        if (api_client==null)
            api_client=ApiClient()

        this.api_client = api_client
    }

addMembers (team_id,payload){
    //Adds a member to a given team, identified by id
        //params <str> team_id: unique id of team
        //params <dict> body: contains the details of the user being added and the team to add to
        //Sample payload:
        //payload={
        //  "team":"0bb5a0ef-4ff8-418e-ab1f-2c460005e5df",
        //  "user":"af9eeb60-5acb-406c-971e-3"
        // }

    return this.api_client.call_api(`/api/account/teams/${team_id}/members/`,'post',payload)
}


deleteMembers(team_id,member_id){
    //Removes a member from a particular team
        //params <str> team_id: unique id of a team
        //<str> member_id: unique id of member to be deleted
    this.api_client.call_api(`/api/account/teams/${team_id}/members/${member_id}/`,'delete')
}
}

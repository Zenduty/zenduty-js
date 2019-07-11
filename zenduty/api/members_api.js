// import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class MembersApi{
   constructor(api_client=null){
        if (api_client==null)
            api_client=ApiClient()
       
        this.api_client = api_client
    }

addMembers (team_id,payload){ 
    // payload={
    //     "team":"0bb5a0ef-4ff8-418e-ab1f-2c460005e5df",
    //     "user":"af9eeb60-5acb-406c-971e-3"
    // }
    
    this.api_client.call_api(`/api/account/teams/${team_id}/members/`,'post',payload)
}


deleteMembers(team_id,member_id){ 
    this.api_client.call_api(`/api/account/teams/${team_id}/members/${member_id}/`,'delete')
}
}
module.exports={MembersApi}
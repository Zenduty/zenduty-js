// import ApiClient from zenduty.api_client 
const ApiClient=require("../api_client")
class EscalationPoliciesApi{
    constructor(api_client=None)
    {
        if (api_client == null){
            api_client=ApiClient()
        }
        this.api_client = api_client
   }
getEscalationPoicy(team_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/`,'get')
}
createEscalationPolicy(team_id,payload)
{
//     payload={"name":"nodetrial",
//     "summary":"This one is for nodejs trial.",
//     "team":"d4a777db-5bce-419c-a725-420ebb505c54",
//     "rules":[{
//     "delay":0,
//     "targets":[{"target_id":"f9b34bd3-818a-4b98-9d8a-04d8bd501cd0","target_type":1}],
//     "unique_id":"449e746a-5835-442a-ac65-cd465ccc58c1"
//   }]
// }
    this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/`,'post',payload)
}
getEscalationById(team_id,ep_id)
{
        this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/${ep_id}`,'get')
}
updateEscalationPolicy(team_id,ep_id,payload)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/${ep_id}/`,'patch',payload)
}
deleteEscalationPolicy(team_id,ep_id)
{
    this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/${ep_id}/`,'delete')
}
}
    
module.exports={EscalationPoliciesApi}
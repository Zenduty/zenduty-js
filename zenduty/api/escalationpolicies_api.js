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
    //Returns the escalation policies belonging to one team
    //team_id: unique id of team <str>
    this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/`,'get')
}
createEscalationPolicy(team_id,payload)
{
        //Creates an escalation policy for one team
        //params 
        //str team_id: unique id of team
        //dict payload: contains the required details for creating escalation policy
        //Sample payload=
        //   {'name':name,
        //     'summary':summary,
        //     'description':description,
        //     'rules':rules,
        //     'unique_id':unique_id,
        //     'team':team_id}
        this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/`,'post',payload)
}
getEscalationById(team_id,ep_id)
{    //Returns the escalation policy belongs to one team and has ep_id as its unique id
        //params
        //str team_id: unique id of team
        //str ep_id: unique id of escalation
        this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/${ep_id}`,'get')
}
updateEscalationPolicy(team_id,ep_id,payload)
{
    //Updates escalation policy, identified by ep_id
        //params 
        //str team_id: unique id of team
        //str ep_id: unqiue id of escalation policy
        //dict body: contains all the updated values
        //'rules' is a required part of the body
        //Sample payload:
        // payload={'summary':'changes description',
        //       'rules':[{"delay":1,
        //                 "targets":[{"target_type":2,
        //                             "target_id":"826032d6-7ccd-4d58-b114-f"}],
        //                 "position":1,
        //          "unique_id":"c0dad09b-321b-491e-9c23-f816c7bd0339"}]}
    this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/${ep_id}/`,'patch',payload)
}
deleteEscalationPolicy(team_id,ep_id)
{
    //Deletes escalation policy, identified by ep_id in a team 
    //params
    //str team_id: unique id of team
    //str ep_id: unqiue id of escalation policy
    this.api_client.call_api(`/api/account/teams/${team_id}/escalation_policies/${ep_id}/`,'delete')
}
}
    
module.exports={EscalationPoliciesApi}

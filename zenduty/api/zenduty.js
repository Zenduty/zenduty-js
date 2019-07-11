// import Zenduty from "../request";

// endpoint, method, data = {}
import  {ApiClient} from zenduty.api_client 
//----------------------------------------------------------------------TeamsAPIfunctionality-------------------------------------------------------------------------
getTeams = () => this._get("/api/account/teams/");

createTeam=(name) => {
    const body={
        name:name
        }
    
     return this.request("/api/account/teams/", 'post',body)
      .then(response => {
        this.accessToken = response.access_token;
        return response;
      });

}

getTeamDetails=(team_id)=> this.api_client.call_api(`/api/account/teams/${team_id}/`,'get');

deleteTeam=(team_id)=> tthis.api_client.call_api(`/api/account/teams/${team_id}/`,'delete');

//-------------------------------------------------------------------------------Members--------------------------------------------------------------------------------

addMembers = (team_id,payload) => this.api_client.call_api(`/api/account/teams/${team_id}/members/`,'post',data=payload)


deleteMembers = (team_id,member_id)=> this.api_client.call_api(`/api/account/teams/${team_id}/members/${member_id}`,'post')

//-------------------------------------------------------------------------------Services--------------------------------------------------------------------------------



getServices =(team_id)=>this.api_client.call_api(`/api/account/teams/${team_id}/services/`,'get')

addService = (team_id,payload)=>this.api_client.call_api(`/api/account/teams/${team_id}/services/`,'post',data=payload)

getServiceById=(team_id,service_id)=>this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,'get')

updateService=(team_id,service_id,payload)=>this.api_client.call_api(`/api/account/teams/${team_id}/${service_id}/`,'patch',data=payload)

deleteService=(team_id,service_id)=>this.api_client.call_api(`/api/account/teams/${team_id}/services/${service_id}/`,'delete')

//------------------------------------------------------------------------------Integrations-------------------------------------------------------------------------------
getIntegrationInService=(team_id,service_id)=>this.reqeust(`/api/account/teams/${team_id}/services/${service_id}`,'get')

createIntegration=(team_id,service_id,payload)=>this.request(`/api/account/teams/${team_id}/services/${service_id}/`,'post',data=payload)

getIntegrationById=(team_id,service_id,integration_id)=> this.request(`/api/account/teams/${team_id}/services/${service_id}/integrations/${integration_id}/alerts/`,'get')

getAlertsInIntegration=(team_id,service_id,integration_id)=>this.request(`/api/account/teams/${team_id}/services/${service_id}/integrations/${integration_id}/alerts/`,'get')

//------------------------------------------------------------------------------events------------------------------------------------------------------------------

createEvent=(integration_key,payload)=>this.request(`/api/events/${integration_key}`,'post',data=payload)

//------------------------------------------------------------------------------Incidents---------------------------------------------------------------------------
getIncidents=(payload)=>this.request(`/api/incidents/`,'get',data=payload)

getIncidentByNumber=(incident_number)=>this.reqeuest(`/api/incidents/${incident_number}/alerts/`,'get')

getIncidentNotes=(incident_number)=>this.request(`/api/incidents/${incident_number}/note/`,'get')

acknowledgeOrResolveIncident=(incident_number,payload)=>this.reqeuest(`/api/incidents/${incident_number}/`,patch,data=payload)

//-------------------------------------------------------------------------------Escalation-----------------------------------------------------------------------------
getEscalationPoicy=(team_id)=>this.request(`/api/account/teams/${team_id}/escalation_policies/`,'get')

createEscalationPolicy=(team_id,payload)=>this.request(`/api/account/teams/${team_id}/escalation_policies/`,'post',data=payload)

getEscalationById=(team_id,ep_id)=>this.request(`/api/account/teams/$(team_id)/escalation_policies/${ep_id}`,'get')

updateEscalationPolicy=(team_id,ep_id,body)=>this.request(`/api/account/teams/${team_id}/escalation_policies/${ep_body}/`,'patch',data=payload)

deleteEscalationPolicy=(team_id,ep_id)=>this.request(`/api/account/teams/${team_id}/escalation_policies/${ep_id}/`,'delete')

//--------------------------------------------------------------------------------schedules--------------------------------------------------------------------------------
getSchedule=(team_id)=>this.request(`/api/account/teams/${team_id}/schedules`,'get')

createSchedule=(team_id,body)=>this.request(`/api/account/teams/${team_id}/schedules`,'post')

getScheduleById=(team_id,schedule_id)=>this.request(`/api/account/teams/{team_id}/schedules/{schedule_id}/`,'get')

updateSchedule=(team_id,schedule_id,payload)=>this.request(`/api/account/teams/${team_id}/schedules/${schedule_id}/`,'patch',data=payload)

deleteSchedule=(team_id,schedule_id)=>this.request(`/api/account/teams/${team_id}/schedules/${schedule_id}`,'delete')




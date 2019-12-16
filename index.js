//import api files
const TeamsApi = require("./zenduty/api/teams_api.js");
const ServicesApi = require("./zenduty/api/services_api");
const EscalationPoliciesApi = require("./zenduty/api/escalationpolicies_api");
const EventsApi = require("./zenduty/api/events_api");
const IncidentsApi = require("./zenduty/api/incidents_api");
const IntegrationsApi = require("./zenduty/api/integrations_api.js");
const MembersApi = require("./zenduty/api/members_api");
const SchedulesApi = require("./zenduty/api/schedules_api");
const ApiClient = require("./zenduty/api_client.js");

module.exports = {
  IncidentsApi,
  IntegrationsApi,
  MembersApi,
  ServicesApi,
  TeamsApi,
  EventsApi,
  SchedulesApi,
  EscalationPoliciesApi,
  ApiClient
};

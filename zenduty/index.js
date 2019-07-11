// import Zenduty from "./zenduty"
// export default {
//     zenduty,
// }
import IncidentsApi from "./api/incidents_api" 
import IntegrationsApi from "./api/integrations_api" 
import MembersApi from "./api/members_api" 
import ServicesApi from "./api/services_api" 
import TeamsApi from "./api/teams_api" 
import EventsApi from "./api/events_api" 
// # import ApiClient
import ApiClient from "./api_client" 
import Configuration from "./configuration" 
import OpenApiException from "./exceptions" 
import ApiTypeError from "./exceptions" 
import ApiValueError from "./exceptions" 
import ApiKeyError from "./exceptions" 
import ApiException from "./exceptions" 
export default {
    IncidentsApi,
    IntegrationsApi,
    MembersApi,
    ServicesApi,
    TeamsApi,
    EventsApi,
    ApiClient,
    Configuration,
    OpenApiException,
    ApiTypeError,
    ApiValueError,
    ApiKeyError,
    ApiException,
    
}
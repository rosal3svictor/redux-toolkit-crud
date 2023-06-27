export interface TemplateParams {
  translationCode: string; // en-US
  translationType: string; // rtl or ltr
  applicationContext: ApplicationContext;
  ltiToken: string;
  learnToken: string;
  jwtPayload: LTIAdvantagePayload;
  configuration: ServerConfiguration;
  rsid: string;
  params: string;
  isUef: boolean;
}

export interface ServerConfiguration {
  devPortalAppId: string;
  devPortalAppKey: string;
  ccscUrl: string;
  cdn: string;
}

export interface ApplicationContext {
  appKey: string; // Same as applicationId within this object
  applicationId: string;
  applicationName: string;
  applicationDescription: string;
  configuration: any;
  association: Association;
}

export interface Association {
  id: string;
  siteId: string;
  clientId: string;
  clientName: string;
  version: number;
  available: boolean;
  enabled: boolean;
  trial: boolean;
  autoSubscription: boolean;
  latestVersion: boolean;
  dateCreated: string;
  lastModified: string;
  configuration: any;
  settingsPage?: any;
  previousVersions?: any;
}

export interface ClaimCustom {
  [key: string]: string;
}

export interface LTIAdvantagePayload {
  aud: string;
  email: string;
  exp: number;
  family_name: string;
  given_name: string;
  ['https://blackboard.com/lti/claim/one_time_session_token']?: string;
  ['https://blackboard.com/webapps/foundations-connector/foundations-ids']?: FoundationsIds;
  ['https://purl.imsglobal.org/spec/lti/claim/context']: Context;
  ['https://purl.imsglobal.org/spec/lti/claim/custom']?: ClaimCustom;
  ['https://purl.imsglobal.org/spec/lti/claim/deployment_id']: string;
  ['https://purl.imsglobal.org/spec/lti/claim/launch_presentation']: LaunchPresentation;
  ['https://purl.imsglobal.org/spec/lti/claim/lis']: LtiClaimLis;
  ['https://purl.imsglobal.org/spec/lti/claim/message_type']: string;
  ['https://purl.imsglobal.org/spec/lti/claim/resource_link']: ResourceLink;
  ['https://purl.imsglobal.org/spec/lti/claim/roles']?: string[] | null;
  ['https://purl.imsglobal.org/spec/lti/claim/target_link_uri']: string;
  ['https://purl.imsglobal.org/spec/lti/claim/tool_platform']: ToolPlatform;
  ['https://purl.imsglobal.org/spec/lti/claim/version']: string;
  iat: number;
  iss: string;
  locale: string;
  name: string;
  nonce: string;
  sub: string;
}

export interface Configuration {
  devportalApplicationId: string;
  ccscUrl: string;
  cdn?: string;
}

export interface LaunchConfig {
  learnToken: string;
  ltiToken: string;
  jwtPayload: LTIAdvantagePayload;
  configuration: Configuration;
  applicationContext: ApplicationContext;
}

/**
 * Interface to type a UEF event
 *
 * @interface UEFEvent
 */
export interface UEFEvent {
  type: string;
  action: string;
  conditions: UEFEventCondition[];
}
export interface UEFEventCondition {
  eventType: string;
  type: string;
  analyticsId?: string;
  routeName?: string;
  selector?: string;
  correlationId?: string;
  routeData?: Record<string, string>;
}

export interface ToolPlatform {
  name: string;
  description: string;
  guid: string;
  product_family_code: string;
  version: string;
  url: string;
  contact_email: string;
}

interface Context {
  id: string;
  label: string;
  title: string;
  type?: string[] | null;
}

interface ResourceLink {
  id: string;
}

interface LtiClaimLis {
  person_sourcedid: string;
}

interface LaunchPresentation {
  return_url: string;
}
interface FoundationsIds {
  'user-id': string;
  'tenant-id': string;
}

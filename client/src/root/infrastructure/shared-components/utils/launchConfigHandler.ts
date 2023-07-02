import { setup } from '../states';
import { Store } from 'redux';

const learnToken = 'GmG4s6FZ74GqEuPSjJjB32PYmK69BEim';

const ltiToken =
  'eyJraWQiOiI3ZTAyYzI1Zi0zMDhiLTRhNWItYWZhMi0zMWQwNmJkNzIxODEiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI2MjFkMzVlZmQyZjU0NzZkYWM5ZDJiZjEzOWZkZDQ0OCIsImh0dHBzOlwvXC9wdXJsLmltc2dsb2JhbC5vcmdcL3NwZWNcL2x0aVwvY2xhaW1cL2RlcGxveW1lbnRfaWQiOiIwYjEzYjI2ZS01OTcxLTRkMTEtYmRhMi1mZjMzNGQ3Njc3MDAiLCJodHRwczpcL1wvcHVybC5pbXNnbG9iYWwub3JnXC9zcGVjXC9sdGlcL2NsYWltXC92ZXJzaW9uIjoiMS4zLjAiLCJpc3MiOiJodHRwczpcL1wvYmxhY2tib2FyZC5jb20iLCJsb2NhbGUiOiJlbi1VUyIsImh0dHBzOlwvXC9wdXJsLmltc2dsb2JhbC5vcmdcL3NwZWNcL2x0aVwvY2xhaW1cL3Rvb2xfcGxhdGZvcm0iOnsibmFtZSI6IkJsYWNrYm9hcmQsIEluYy4iLCJkZXNjcmlwdGlvbiI6IkJsYWNrYm9hcmQsIEluYy4iLCJndWlkIjoiN2I1YzJiMmEyMzViNDAxYTk2YThmYzQ0M2UwMDc3MmEiLCJwcm9kdWN0X2ZhbWlseV9jb2RlIjoiQmxhY2tib2FyZExlYXJuIiwidmVyc2lvbiI6IjM5MDAuNDQuMC1jaS44NTU0K2MwZDNjN2QiLCJ1cmwiOiJodHRwczpcL1wvcGxhdGZvcm0tZXh0ZW5zaW9ucy1xYTIuZGV2LmJicGQuaW9cLyIsImNvbnRhY3RfZW1haWwiOiJkby1ub3QtcmVwbHlAYmxhY2tib2FyZC5jb20ifSwiaHR0cHM6XC9cL3B1cmwuaW1zZ2xvYmFsLm9yZ1wvc3BlY1wvbHRpXC9jbGFpbVwvY3VzdG9tIjp7ImNhbGlwZXJfcHJvZmlsZV91cmwiOiJodHRwczpcL1wvcGxhdGZvcm0tZXh0ZW5zaW9ucy1xYTIuZGV2LmJicGQuaW9cL2xlYXJuXC9hcGlcL3YxXC90ZWxlbWV0cnlcL2NhbGlwZXJcL3Byb2ZpbGUiLCJsYXVuY2hfY29udGV4dCI6IlRETSIsInVzZXJfcHJpbWFyeV9pbnN0aXR1dGlvbl9yb2xlIjoiU1RBRkYsVERNX0NBVEFMT0dfTUFOQUdFUiwgVERNX09GRkVSSU5HX01BTkFHRVIsIFRETV9QUk9HUkFNX01BTkFHRVIsIFRETV9DT1VSU0VfTUFOQUdFUiwgIiwidXNlcl91c2VybmFtZSI6ImFkbWluaXN0cmF0b3IiLCJjYWxpcGVyX2ZlZGVyYXRlZF9zZXNzaW9uX2lkIjoiaHR0cHM6XC9cL2NhbGlwZXItbWFwcGluZy5jbG91ZGJiLmJsYWNrYm9hcmQuY29tXC92MVwvc2l0ZXNcLzliZjdjM2QyLTk1MTEtNDk2My1iMWVhLTQ0NTMwZmNjMjIyNFwvc2Vzc2lvbnNcLzFDMTJBMTk3REQ1MUY2NzE0OUNBQjc2Qjk5MThDNjE0In0sImh0dHBzOlwvXC9wdXJsLmltc2dsb2JhbC5vcmdcL3NwZWNcL2x0aVwvY2xhaW1cL2xpcyI6eyJwZXJzb25fc291cmNlZGlkIjoiYWRtaW5pc3RyYXRvciJ9LCJodHRwczpcL1wvcHVybC5pbXNnbG9iYWwub3JnXC9zcGVjXC9sdGlcL2NsYWltXC9sYXVuY2hfcHJlc2VudGF0aW9uIjp7ImRvY3VtZW50X3RhcmdldCI6IndpbmRvdyIsInJldHVybl91cmwiOiJodHRwczpcL1wvcGxhdGZvcm0tZXh0ZW5zaW9ucy1xYTIuZGV2LmJicGQuaW9cL3dlYmFwcHNcL2JsYWNrYm9hcmRcL2V4ZWN1dGVcL2JsdGlcL2xhdW5jaFJldHVybj9ub25jZT03OWUyMTJhMWMwMmY0ZDhkYWIwNjg4NzlhNzAyOTM4ZCZsYXVuY2hfaWQ9OGM2NzZjNDMtNjM3Mi00Y2E2LWI4MzYtNmI5ODlhMzM5ZGZlJmxpbmtfaWQ9cHJvZ3JhbVZpZXcmbGF1bmNoX3RpbWU9MTY1NDYwNTI2MTc3MyIsImxvY2FsZSI6ImVuLVVTIn0sImV4cCI6MTY1NDYwODg1MywiaWF0IjoxNjU0NjA1MjUzLCJlbWFpbCI6ImRvLW5vdC1yZXBseUBibGFja2JvYXJkLmNvbSIsImdpdmVuX25hbWUiOiJCbGFja2JvYXJkIiwiaHR0cHM6XC9cL3B1cmwuaW1zZ2xvYmFsLm9yZ1wvc3BlY1wvbHRpXC9jbGFpbVwvcm9sZXMiOlsiaHR0cDpcL1wvcHVybC5pbXNnbG9iYWwub3JnXC92b2NhYlwvbGlzXC92Mlwvc3lzdGVtXC9wZXJzb24jQWRtaW5pc3RyYXRvciIsImh0dHA6XC9cL3B1cmwuaW1zZ2xvYmFsLm9yZ1wvdm9jYWJcL2xpc1wvdjJcL2luc3RpdHV0aW9uXC9wZXJzb24jU3RhZmYiXSwibm9uY2UiOiIzYTc4MjM3MC1lZjg5LTQ0ZjctODRmYy02NGMyMTRlYjNlNjciLCJodHRwczpcL1wvcHVybC5pbXNnbG9iYWwub3JnXC9zcGVjXC9sdGlcL2NsYWltXC90YXJnZXRfbGlua191cmkiOiJodHRwczpcL1wvdXMuZGV2LmV4dGVuc2lvbnMuYmItZm5kcy5jb21cL2x0aVwvMV8zXC9sYXVuY2hlc1wvdG9vbHNcLzliZjdjM2QyLTk1MTEtNDk2My1iMWVhLTQ0NTMwZmNjMjIyNFwvcHJvZ3JhbVZpZXdcL2x0aSIsImh0dHBzOlwvXC9wdXJsLmltc2dsb2JhbC5vcmdcL3NwZWNcL2x0aVwvY2xhaW1cL2NvbnRleHQiOnsiaWQiOiJfOV8xIiwibGFiZWwiOiJQcm9ncmFtIFZpZXciLCJ0aXRsZSI6IlByb2dyYW0gVmlldyIsInR5cGUiOlsiaHR0cDpcL1wvcHVybC5pbXNnbG9iYWwub3JnXC92b2NhYlwvbGlzXC92MlwvY291cnNlI0NvdXJzZU9mZmVyaW5nIl19LCJodHRwczpcL1wvcHVybC5pbXNnbG9iYWwub3JnXC9zcGVjXC9sdGlcL2NsYWltXC9yZXNvdXJjZV9saW5rIjp7ImlkIjoicHJvZ3JhbVZpZXcifSwiYXVkIjoiN2UwMmMyNWYtMzA4Yi00YTViLWFmYTItMzFkMDZiZDcyMTgxIiwiaHR0cHM6XC9cL3B1cmwuaW1zZ2xvYmFsLm9yZ1wvc3BlY1wvbHRpXC9jbGFpbVwvbWVzc2FnZV90eXBlIjoiTHRpUmVzb3VyY2VMaW5rUmVxdWVzdCIsIm5hbWUiOiJCbGFja2JvYXJkIEFkbWluaXN0cmF0b3IiLCJmYW1pbHlfbmFtZSI6IkFkbWluaXN0cmF0b3IiLCJodHRwczpcL1wvYmxhY2tib2FyZC5jb21cL2x0aVwvY2xhaW1cL29uZV90aW1lX3Nlc3Npb25fdG9rZW4iOiI1OTYyYmViMmVhMDU0ZGI5YmZlZGE1YjhiMDZmZDU4OCIsImh0dHBzOlwvXC9ibGFja2JvYXJkLmNvbVwvd2ViYXBwc1wvZm91bmRhdGlvbnMtY29ubmVjdG9yXC9mb3VuZGF0aW9ucy1pZHMiOnsidXNlci1pZCI6ImYwNjIyNWRjLWUxYjYtMTFlYy05MzZjLTQ1ODQxNGQ0YjBlNSIsInRlbmFudC1pZCI6IjcxNDI3NzZhLWI0NGUtNGIxNy1iYzRjLWQwZGJmZTIzNDJhYyJ9fQ.ZTkanjE7V86n-y48JRz-NpfMLlpHpA5nR6jSCJvBSact_qNuTz9oHfP3WW4SZOUQGbLjLJAeScee30DkmQ3h6U4Qmrcr74KH7tfDA0nCKWITKhdIjpcEQ8uN3TPn-qkSIvDxthJoUofKRy1GF3-RWgf0pdTMqtAsw1s7c6Etksi4LDX-OSXugN_IHoApYXvG0wMc-V1NtUjrK-z9xPjiOHssZXRWhxdHWxIzUi-fBUbcSCfZrN6ue6Eih2lh74bXDuza37o96ZGX_ze8ScwXQOCzZ6n3kVqX3vWH4B2Gflcf0hxzx9iL8NiCM8eiL6XSEudO0_gf2Ip03pLYDJk51g';

const applicationContext = {
  appKey: 'programView',
  applicationId: 'programView',
  applicationName: 'Program View',
  applicationDescription:
    'Provides students with a complete view of their programs, enabling them to monitor their own progress and improve performance.',
  configuration: {},
  association: {
    siteId: '9bf7c3d2-9511-4963-b1ea-44530fcc2224',
    clientId: 'john',
    clientName: 'john',
    available: true,
    enabled: true,
    trial: false,
    autoSubscription: false,
    dateCreated: '2022-06-02T02:23:03.532Z',
    lastModified: '2022-06-02T02:23:03.532Z',
    configuration: {
      currency: 'USD',
      categories: [
        {
          imgUrl: 'test',
          name: 'test',
          cid: 'test',
        },
      ],
      programRequirements: [
        {
          name: 'test',
          pid: 'test',
        },
      ],
      filterTags: [
        {
          fid: 'test',
          name: 'test',
        },
      ],
    },
  },
};

const configuration = {
  //ccscUrl: 'https://us.dev.extensions.bb-fnds.com/api/v2',
  ccscUrl: 'http://localhost:3500',
  devPortalAppId: '7e02c25f-308b-4a5b-afa2-31d06bd72181',
  devPortalAppKey: '0741b92c-c758-41a1-a4ee-406854c37bcc',
  cdn: 'ui-us.dev.extensions.bb-fnds.com',
};

const jwtPayload = {
  sub: '621d35efd2f5476dac9d2bf139fdd448',
  'https://purl.imsglobal.org/spec/lti/claim/deployment_id':
    '0b13b26e-5971-4d11-bda2-ff334d767700',
  'https://purl.imsglobal.org/spec/lti/claim/version': '1.3.0',
  iss: 'https://blackboard.com',
  locale: 'en-US',
  'https://purl.imsglobal.org/spec/lti/claim/tool_platform': {
    name: 'Blackboard, Inc.',
    description: 'Blackboard, Inc.',
    guid: '7b5c2b2a235b401a96a8fc443e00772a',
    product_family_code: 'BlackboardLearn',
    version: '3900.44.0-ci.8554+c0d3c7d',
    url: 'https://platform-extensions-qa2.dev.bbpd.io/',
    contact_email: 'do-not-reply@blackboard.com',
  },
  'https://purl.imsglobal.org/spec/lti/claim/custom': {
    caliper_profile_url:
      'https://platform-extensions-qa2.dev.bbpd.io/learn/api/v1/telemetry/caliper/profile',
    launch_context: 'TDM',
    user_primary_institution_role:
      'STAFF,TDM_CATALOG_MANAGER, TDM_OFFERING_MANAGER, TDM_PROGRAM_MANAGER, TDM_COURSE_MANAGER, ',
    user_username: 'administrator',
    caliper_federated_session_id:
      'https://caliper-mapping.cloudbb.blackboard.com/v1/sites/9bf7c3d2-9511-4963-b1ea-44530fcc2224/sessions/1C12A197DD51F67149CAB76B9918C614',
  },
  'https://purl.imsglobal.org/spec/lti/claim/lis': {
    person_sourcedid: 'administrator',
  },
  'https://purl.imsglobal.org/spec/lti/claim/launch_presentation': {
    document_target: 'window',
    return_url:
      'https://platform-extensions-qa2.dev.bbpd.io/webapps/blackboard/execute/blti/launchReturn?nonce=79e212a1c02f4d8dab068879a702938d&launch_id=8c676c43-6372-4ca6-b836-6b989a339dfe&link_id=programView&launch_time=1654605261773',
    locale: 'en-US',
  },
  exp: 1654608853,
  iat: 1654605253,
  email: 'do-not-reply@blackboard.com',
  given_name: 'Blackboard',
  'https://purl.imsglobal.org/spec/lti/claim/roles': [
    'http://purl.imsglobal.org/vocab/lis/v2/system/person#Administrator',
    'http://purl.imsglobal.org/vocab/lis/v2/institution/person#Staff',
  ],
  nonce: '3a782370-ef89-44f7-84fc-64c214eb3e67',
  'https://purl.imsglobal.org/spec/lti/claim/target_link_uri':
    'https://us.dev.extensions.bb-fnds.com/lti/1_3/launches/tools/9bf7c3d2-9511-4963-b1ea-44530fcc2224/programView/lti',
  'https://purl.imsglobal.org/spec/lti/claim/context': {
    id: '_9_1',
    label: 'Program View',
    title: 'Program View',
    type: ['http://purl.imsglobal.org/vocab/lis/v2/course#CourseOffering'],
  },
  'https://purl.imsglobal.org/spec/lti/claim/resource_link': {
    id: 'programView',
  },
  aud: '7e02c25f-308b-4a5b-afa2-31d06bd72181',
  'https://purl.imsglobal.org/spec/lti/claim/message_type':
    'LtiResourceLinkRequest',
  name: 'Blackboard Administrator',
  family_name: 'Administrator',
  'https://blackboard.com/lti/claim/one_time_session_token':
    '5962beb2ea054db9bfeda5b8b06fd588',
  'https://blackboard.com/webapps/foundations-connector/foundations-ids': {
    'user-id': 'f06225dc-e1b6-11ec-936c-458414d4b0e5',
    'tenant-id': '7142776a-b44e-4b17-bc4c-d0dbfe2342ac',
  },
};

/**
 * Sets the launch config once the app is started.
 *
 * @param store - The store under which you want to perform the process.
 */
export const launchConfigHandler = (store: Store) => {
  store.dispatch((dispatch) => {
    dispatch(
      setup({
        learnToken,
        applicationContext,
        configuration,
        jwtPayload,
        ltiToken,
      })
    );
  });
};

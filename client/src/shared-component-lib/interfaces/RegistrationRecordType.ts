export type RegistrationRecordType<T> = {
  id?: string | number;
  callerId: string;
  siteId: string;
  info: T;
  applicationId: string;
  registrationId?: Array<string>;
  model: string;
};

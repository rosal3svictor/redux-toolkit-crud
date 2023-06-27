import { PaymentRecord, MediaSettings } from ".";

export interface ProgramType {
  categories: Array<any>;
  description: string;
  summary?: string;
  filterTags: Array<any>;
  name: string;
}

export interface ProgramPhase {
  uuid: string;
  name: string;
  type: string;
  quantity: number;
}

export interface Program extends PaymentRecord {
  programInfo: Record<string, ProgramType>;
  requirements: Array<any>;
  isEnabledProgramPhases: boolean;
  assignedCourses: Array<any>;
  programPhases: Array<ProgramPhase>;
  status: any;
  programId: string;
  mediaSettings: MediaSettings;
  summary: string;
}

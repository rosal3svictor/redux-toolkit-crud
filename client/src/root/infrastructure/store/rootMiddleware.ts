import { PROGRAM_ENTITY } from "@entities/programs";

export const rootMiddleware = [PROGRAM_ENTITY.restApiClient().middleware];

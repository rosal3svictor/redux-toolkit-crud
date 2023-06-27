import { ClaimCustom, Configuration } from "@interfaces";
import { RootState } from "src/entities/programs/domain/interfaces";
import { useSelector } from "react-redux";
import { ApplicationContext } from "@interfaces";

/**
 * Custom Hook For Returning Pieces Of State From `launchConfig`
 */
export const useLaunchConfigSelectors = () => {
  const configurationSelector: () => Configuration = () =>
    useSelector(({ launchConfig }: RootState) => launchConfig.configuration);

  const ltiTokenSelector = () =>
    useSelector(({ launchConfig }: RootState) => launchConfig.ltiToken);

  const learnTokenSelector = () =>
    useSelector(({ launchConfig }: RootState) => launchConfig.learnToken);

  const customClaimsSelector = () =>
    useSelector(
      ({ launchConfig }: RootState) =>
        launchConfig.jwtPayload[
          "https://purl.imsglobal.org/spec/lti/claim/custom"
        ] as ClaimCustom
    );

  const toolPlatformClaimsSelector = () =>
    useSelector(
      ({ launchConfig }: RootState) =>
        launchConfig.jwtPayload[
          "https://purl.imsglobal.org/spec/lti/claim/tool_platform"
        ]
    );

  const applicationContextSelector: () => ApplicationContext = () =>
    useSelector(
      ({ launchConfig }: RootState) => launchConfig.applicationContext
    );

  /**
   * Defines if we the app has been launched through UEF.
   */
  const UEF = window.uef;

  /**
   * Returns the value under `launch_context` from JWT Payload - Custom Claims.
   */
  const getLaunchContext = () =>
    customClaimsSelector().launch_context?.split(",");

  /**
   * Returns the value under `user_primary_institution_role` from
   * JWT Payload - Custom Claims.
   */
  const getInstitutionalRoles = () =>
    customClaimsSelector().user_primary_institution_role?.split(",");

  /**
   * Returns the value under `configuration.ccscUrl` from the launch config setup.
   */
  // const getCCSCUrl = () => configurationSelector().ccscUrl;
  const getCCSCUrl = () => "http://localhost:3500";

  /**
   * Returns the `url` value under
   * `'https://purl.imsglobal.org/spec/lti/claim/tool_platform'` from the
   * JWT Payload - Tool Platform Claims.
   */
  const getCCUrl = () => toolPlatformClaimsSelector().url;

  /**
   * Returns the value under `ltiToken` from the launch config setup.
   */
  const getLtiToken = () => ltiTokenSelector();

  /**
   * Returns the value under `learnToken` from the launch config setup.
   */
  const getLearnToken = () => learnTokenSelector();

  /**
   * Returns the `siteId` from the `association` under the applicationContext.
   */
  const getSiteId = () => applicationContextSelector().association.siteId;

  /**
   * Returns the `applicationId` from the applicationContext.
   */
  const getApplicationId = () => applicationContextSelector().applicationId;

  return {
    getLaunchContext,
    getInstitutionalRoles,
    getCCSCUrl,
    getCCUrl,
    getLtiToken,
    getLearnToken,
    getSiteId,
    getApplicationId,
  };
};

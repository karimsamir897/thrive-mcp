// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.public.api.v1.heatmap.createHeatmap',
    fullyQualifiedName: 'public.api.v1.heatmap.createHeatmap',
    httpMethod: 'post',
    httpPath: '/public/api/v1/heatmaps',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.generateGridPoints',
    fullyQualifiedName: 'public.api.v1.heatmap.generateGridPoints',
    httpMethod: 'post',
    httpPath: '/public/api/v1/heatmap/grid-points',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.listHeatmaps',
    fullyQualifiedName: 'public.api.v1.heatmap.listHeatmaps',
    httpMethod: 'get',
    httpPath: '/public/api/v1/heatmaps',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.listLocations',
    fullyQualifiedName: 'public.api.v1.heatmap.listLocations',
    httpMethod: 'get',
    httpPath: '/public/api/v1/heatmaps/locations',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.retrieveHeatmap',
    fullyQualifiedName: 'public.api.v1.heatmap.retrieveHeatmap',
    httpMethod: 'get',
    httpPath: '/public/api/v1/heatmaps/{heatmap}',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.retrieveHeatmapCompetitors',
    fullyQualifiedName: 'public.api.v1.heatmap.retrieveHeatmapCompetitors',
    httpMethod: 'get',
    httpPath: '/public/api/v1/heatmaps/{heatmap}/competitors',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.retrieveHeatmapPoint',
    fullyQualifiedName: 'public.api.v1.heatmap.retrieveHeatmapPoint',
    httpMethod: 'get',
    httpPath: '/public/api/v1/heatmaps/{heatmap_id}/points/{point_id}',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.schedules.createSchedule',
    fullyQualifiedName: 'public.api.v1.heatmap.schedules.createSchedule',
    httpMethod: 'post',
    httpPath: '/public/api/v1/heatmap/schedules',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.schedules.listSchedules',
    fullyQualifiedName: 'public.api.v1.heatmap.schedules.listSchedules',
    httpMethod: 'get',
    httpPath: '/public/api/v1/heatmap/schedules',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.schedules.pauseSchedule',
    fullyQualifiedName: 'public.api.v1.heatmap.schedules.pauseSchedule',
    httpMethod: 'post',
    httpPath: '/public/api/v1/heatmap/schedules/{schedule_id}/pause',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.schedules.resumeSchedule',
    fullyQualifiedName: 'public.api.v1.heatmap.schedules.resumeSchedule',
    httpMethod: 'post',
    httpPath: '/public/api/v1/heatmap/schedules/{schedule_id}/resume',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.schedules.retrieveSchedule',
    fullyQualifiedName: 'public.api.v1.heatmap.schedules.retrieveSchedule',
    httpMethod: 'get',
    httpPath: '/public/api/v1/heatmap/schedules/{schedule}',
  },
  {
    clientCallName: 'client.public.api.v1.heatmap.schedules.updateSchedule',
    fullyQualifiedName: 'public.api.v1.heatmap.schedules.updateSchedule',
    httpMethod: 'patch',
    httpPath: '/public/api/v1/heatmap/schedules/{schedule_id}',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}

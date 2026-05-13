// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as HeatmapAPI from './heatmap/heatmap';
import {
  Heatmap,
  HeatmapCreateHeatmapParams,
  HeatmapCreateHeatmapResponse,
  HeatmapGenerateGridPointsParams,
  HeatmapGenerateGridPointsResponse,
  HeatmapListHeatmapsParams,
  HeatmapListHeatmapsResponse,
  HeatmapListLocationsParams,
  HeatmapListLocationsResponse,
  HeatmapRetrieveHeatmapCompetitorsResponse,
  HeatmapRetrieveHeatmapPointParams,
  HeatmapRetrieveHeatmapPointResponse,
  HeatmapRetrieveHeatmapResponse,
} from './heatmap/heatmap';

export class V1 extends APIResource {
  heatmap: HeatmapAPI.Heatmap = new HeatmapAPI.Heatmap(this._client);
}

V1.Heatmap = Heatmap;

export declare namespace V1 {
  export {
    Heatmap as Heatmap,
    type HeatmapCreateHeatmapResponse as HeatmapCreateHeatmapResponse,
    type HeatmapGenerateGridPointsResponse as HeatmapGenerateGridPointsResponse,
    type HeatmapListHeatmapsResponse as HeatmapListHeatmapsResponse,
    type HeatmapListLocationsResponse as HeatmapListLocationsResponse,
    type HeatmapRetrieveHeatmapResponse as HeatmapRetrieveHeatmapResponse,
    type HeatmapRetrieveHeatmapCompetitorsResponse as HeatmapRetrieveHeatmapCompetitorsResponse,
    type HeatmapRetrieveHeatmapPointResponse as HeatmapRetrieveHeatmapPointResponse,
    type HeatmapCreateHeatmapParams as HeatmapCreateHeatmapParams,
    type HeatmapGenerateGridPointsParams as HeatmapGenerateGridPointsParams,
    type HeatmapListHeatmapsParams as HeatmapListHeatmapsParams,
    type HeatmapListLocationsParams as HeatmapListLocationsParams,
    type HeatmapRetrieveHeatmapPointParams as HeatmapRetrieveHeatmapPointParams,
  };
}

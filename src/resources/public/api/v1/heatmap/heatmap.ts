// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import * as SchedulesAPI from './schedules';
import {
  ScheduleCreateScheduleParams,
  ScheduleCreateScheduleResponse,
  ScheduleListSchedulesParams,
  ScheduleListSchedulesResponse,
  SchedulePauseScheduleResponse,
  ScheduleResumeScheduleResponse,
  ScheduleRetrieveScheduleResponse,
  ScheduleUpdateScheduleParams,
  ScheduleUpdateScheduleResponse,
  Schedules,
} from './schedules';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Heatmap extends APIResource {
  schedules: SchedulesAPI.Schedules = new SchedulesAPI.Schedules(this._client);

  /**
   * Creates one or more heatmaps. Each combination of keyword × search_type
   * generates a separate heatmap.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.createHeatmap({
   *     distanceType: 'm',
   *     grid_radius: 3495,
   *     grid_size: 3,
   *     keyword: ['roofing'],
   *     lat: 44.670381143996,
   *     lng: -88.122418774951,
   *     place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
   *     search_type: ['google_maps'],
   *   });
   * ```
   */
  createHeatmap(
    body: HeatmapCreateHeatmapParams,
    options?: RequestOptions,
  ): APIPromise<HeatmapCreateHeatmapResponse> {
    return this._client.post('/public/api/v1/heatmaps', { body, ...options });
  }

  /**
   * Returns the computed grid point coordinates for a given configuration without
   * creating a heatmap. Use this to preview a grid layout or to obtain the `points`
   * array that can be passed to the Create Heatmap or Create Schedule endpoints.
   *
   * `grid_radius` is the spacing between points and is **always in meters** — e.g.
   * `1000` = 1 km, `1609` ≈ 1 mile. When `polygon` is supplied the grid is clipped
   * to that shape and only points inside it are returned.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.generateGridPoints({
   *     grid_radius: 3495,
   *     grid_size: 3,
   *     lat: 44.670381143996,
   *     lng: -88.122418774951,
   *   });
   * ```
   */
  generateGridPoints(
    body: HeatmapGenerateGridPointsParams,
    options?: RequestOptions,
  ): APIPromise<HeatmapGenerateGridPointsResponse> {
    return this._client.post('/public/api/v1/heatmap/grid-points', { body, ...options });
  }

  /**
   * Returns a paginated list of heatmaps for the authenticated account. Supports
   * filtering, sorting, searching, and pagination.
   *
   * **Pagination** — all list responses include pagination fields at the root level
   * alongside `data`:
   *
   * - `total` total matching records; `last_page` total pages; `per_page` results
   *   per page (default 25)
   * - `next_page_url` URL of the next page (`null` on the last page)
   * - `links` array of page link objects (`url`, `label`, `active`)
   *
   * **Date filters** — `filter[created_at]` accepts an object with `start_date`
   * and/or `end_date` (YYYY-MM-DD):
   *
   * ```
   * filter[created_at][start_date]=2026-01-01
   * filter[created_at][end_date]=2026-04-30
   * ```
   *
   * Alternatively, pass a named range alias via `filter[created_at][date]`: `today`,
   * `yesterday`, `this_week`, `last_week`, `last_7_days`, `last_30_days`,
   * `last_90_days`, `this_month`, `last_month`, `this_quarter`, `last_quarter`,
   * `this_year`, `year_to_date`, `last_year`, `all_time`
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.listHeatmaps();
   * ```
   */
  listHeatmaps(
    query: HeatmapListHeatmapsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HeatmapListHeatmapsResponse> {
    return this._client.get('/public/api/v1/heatmaps', { query, ...options });
  }

  /**
   * Returns a paginated list of Google Business Profile locations for the
   * authenticated account. Supports filtering, sorting, searching, and pagination.
   *
   * **Pagination** — all list responses include pagination fields at the root level
   * alongside `data`:
   *
   * - `total` total matching records; `last_page` total pages; `per_page` results
   *   per page (default 25)
   * - `next_page_url` URL of the next page (`null` on the last page)
   * - `links` array of page link objects (`url`, `label`, `active`)
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.listLocations();
   * ```
   */
  listLocations(
    query: HeatmapListLocationsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<HeatmapListLocationsResponse> {
    return this._client.get('/public/api/v1/heatmaps/locations', { query, ...options });
  }

  /**
   * Returns full details of a single heatmap including grid points, place info, and
   * ranking statistics.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.retrieveHeatmap(1482);
   * ```
   */
  retrieveHeatmap(heatmap: number, options?: RequestOptions): APIPromise<HeatmapRetrieveHeatmapResponse> {
    return this._client.get(path`/public/api/v1/heatmaps/${heatmap}`, options);
  }

  /**
   * Returns aggregated ranking statistics for all competitor businesses found across
   * the grid points of the specified heatmap.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.retrieveHeatmapCompetitors(
   *     1482,
   *   );
   * ```
   */
  retrieveHeatmapCompetitors(
    heatmap: number,
    options?: RequestOptions,
  ): APIPromise<HeatmapRetrieveHeatmapCompetitorsResponse> {
    return this._client.get(path`/public/api/v1/heatmaps/${heatmap}/competitors`, options);
  }

  /**
   * Returns details for a single grid point within a heatmap, including its
   * coordinates, rank, and surrounding place rankings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.retrieveHeatmapPoint(
   *     1,
   *     { heatmap_id: 1 },
   *   );
   * ```
   */
  retrieveHeatmapPoint(
    pointID: number,
    params: HeatmapRetrieveHeatmapPointParams,
    options?: RequestOptions,
  ): APIPromise<HeatmapRetrieveHeatmapPointResponse> {
    const { heatmap_id } = params;
    return this._client.get(path`/public/api/v1/heatmaps/${heatmap_id}/points/${pointID}`, options);
  }
}

export interface HeatmapCreateHeatmapResponse {
  id?: number;

  area?: string | null;

  ave_review_rating?: string | null;

  average?: string | null;

  average_position?: string | null;

  business_name?: string;

  business_place_id?: string;

  created_at?: string;

  grid_center_lat?: number;

  grid_center_lng?: number;

  grid_distance_measure?: string;

  grid_point_distance?: string;

  grid_point_distance_row?: number;

  grid_size?: number;

  keyword?: string;

  keyword_difficulty?: string | null;

  keyword_search_intents?: Array<unknown>;

  lead_source_id?: string | null;

  location?: string | null;

  location_id?: string | null;

  market_share?: string | null;

  market_share_position?: string | null;

  place?: string | null;

  place_id?: string;

  points?: Array<unknown>;

  previous_ranking?: string | null;

  ranking_change?: string | null;

  ranking_change_percentage?: string | null;

  review_count?: string | null;

  search_type?: string;

  search_volume?: string | null;

  status?: string;

  tags?: Array<unknown>;

  top_3_percentage?: string | null;

  top_3_points?: number;

  top_3_position?: string | null;

  top_n?: string | null;

  total?: number;

  total_points?: number;

  updated_at?: string;

  zoom_level?: string | null;
}

export interface HeatmapGenerateGridPointsResponse {
  count?: number;

  points?: Array<HeatmapGenerateGridPointsResponse.Point>;
}

export namespace HeatmapGenerateGridPointsResponse {
  export interface Point {
    lat?: number;

    lng?: number;
  }
}

export interface HeatmapListHeatmapsResponse {
  current_page?: number;

  data?: Array<HeatmapListHeatmapsResponse.Data>;

  first_page_url?: string;

  from?: number;

  last_page?: number;

  last_page_url?: string;

  links?: Array<unknown>;

  next_page_url?: string;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number;

  total?: number;
}

export namespace HeatmapListHeatmapsResponse {
  export interface Data {
    id?: number;

    area?: string;

    ave_review_rating?: string | null;

    average?: string | null;

    average_position?: string | null;

    business_name?: string;

    business_place_id?: string;

    created_at?: string;

    grid_center_lat?: number;

    grid_center_lng?: number;

    grid_distance_measure?: string;

    grid_point_distance?: string;

    grid_point_distance_row?: number;

    grid_size?: number;

    keyword?: string;

    lead_source_id?: string | null;

    location?: string | null;

    location_id?: string | null;

    market_share?: string | null;

    market_share_position?: string | null;

    place?: Data.Place;

    place_id?: number;

    previous_ranking?: string | null;

    ranking_change?: string | null;

    ranking_change_percentage?: string | null;

    review_count?: string | null;

    search_type?: string;

    status?: string;

    status_code?: number;

    top_3_percentage?: string | null;

    top_3_points?: string | null;

    top_3_position?: string | null;

    top_n?: string | null;

    total?: string | null;

    total_points?: string | null;

    updated_at?: string;

    zoom_level?: string;
  }

  export namespace Data {
    export interface Place {
      id?: number;

      address?: string;

      ave_review_rating?: number;

      feature_id?: string | null;

      google_place_id?: string;

      google_place_serial?: string;

      latitude?: string;

      longitude?: string;

      main_category?: string;

      map_url?: string;

      name?: string;

      phone?: string;

      place_url?: string;

      ranking?: string | null;

      related_categories?: Array<string>;

      review_count?: number;

      thumbnail_url?: string;

      website_url?: string;
    }
  }
}

export interface HeatmapListLocationsResponse {
  current_page?: number;

  data?: Array<HeatmapListLocationsResponse.Data>;

  first_page_url?: string;

  from?: number;

  last_page?: number;

  last_page_url?: string;

  links?: Array<unknown>;

  next_page_url?: string;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number;

  total?: number;
}

export namespace HeatmapListLocationsResponse {
  export interface Data {
    id?: number;

    address?: string;

    ave_review_rating?: number;

    citation?: string | null;

    city?: string;

    completion_percentage?: number;

    country?: string;

    created_at?: string;

    currency?: string;

    deleted_at?: string | null;

    description?: string;

    email?: string | null;

    image?: string;

    is_authorized?: string | null;

    is_citation_subscribed?: boolean;

    is_connected?: number;

    is_gmb_activate?: number;

    last_review_date?: string;

    latitude?: number;

    location_id?: string;

    location_image?: string;

    location_name?: string;

    location_name_initials?: string;

    location_state?: string;

    lock_changes?: number;

    longitude?: number;

    map_url?: string;

    media_count?: number;

    name?: string;

    place_id?: string;

    primary_category?: string;

    primary_phone?: string;

    review_count?: number;

    review_link?: string;

    review_url?: string;

    state?: string;

    status?: string;

    subscription_id?: number;

    subscription_item_id?: number;

    unreplied_review_count?: number;

    updated_at?: string;

    website_url?: string;

    zip?: string;

    zip_code?: string;
  }
}

export interface HeatmapRetrieveHeatmapResponse {
  id?: number;

  area?: string;

  ave_review_rating?: number;

  average?: string;

  average_position?: number;

  business_name?: string;

  business_place_id?: string;

  created_at?: string;

  grid_center_lat?: number;

  grid_center_lng?: number;

  grid_distance_measure?: string;

  grid_point_distance?: string;

  grid_point_distance_row?: number;

  grid_size?: number;

  keyword?: string;

  keyword_seo_data?: HeatmapRetrieveHeatmapResponse.KeywordSeoData;

  lead_source_id?: string | null;

  location?: string | null;

  location_id?: string | null;

  market_share?: string;

  market_share_position?: number;

  place?: HeatmapRetrieveHeatmapResponse.Place;

  place_id?: number;

  points?: Array<HeatmapRetrieveHeatmapResponse.Point>;

  previous_ranking?: string | null;

  ranking_change?: string | null;

  ranking_change_percentage?: string | null;

  review_count?: number;

  search_type?: string;

  status?: string;

  status_code?: number;

  tags?: Array<unknown>;

  top_3_percentage?: number;

  top_3_points?: number;

  top_3_position?: number;

  top_n?: number;

  total?: number;

  total_points?: number;

  updated_at?: string;

  zoom_level?: string;
}

export namespace HeatmapRetrieveHeatmapResponse {
  export interface KeywordSeoData {
    id?: number;

    account_id?: number;

    created_at?: string;

    heatmap_keyword_list_id?: number;

    keyword?: string;

    keyword_difficulty?: KeywordSeoData.KeywordDifficulty;

    keyword_search_intents?: Array<KeywordSeoData.KeywordSearchIntent>;

    search_volume?: KeywordSeoData.SearchVolume;

    updated_at?: string;
  }

  export namespace KeywordSeoData {
    export interface KeywordDifficulty {
      id?: number;

      created_at?: string;

      difficulty?: number;

      keyword?: string;

      language_code?: string;

      location_code?: string;

      updated_at?: string;
    }

    export interface KeywordSearchIntent {
      id?: number;

      created_at?: string;

      keyword?: string;

      label?: string;

      language_code?: string;

      probability?: number;

      updated_at?: string;
    }

    export interface SearchVolume {
      id?: number;

      competition?: string;

      competition_index?: number;

      cpc?: string;

      created_at?: string;

      high_top_of_page_bid?: string;

      keyword?: string;

      language_code?: string;

      location_code?: string;

      low_top_of_page_bid?: string;

      search_volume?: number;

      updated_at?: string;
    }
  }

  export interface Place {
    id?: number;

    address?: string;

    ave_review_rating?: number;

    feature_id?: string;

    google_place_id?: string;

    google_place_serial?: string;

    latitude?: string;

    longitude?: string;

    main_category?: string;

    map_url?: string;

    name?: string;

    phone?: string;

    place_url?: string;

    ranking?: string | null;

    related_categories?: Array<string>;

    review_count?: number;

    thumbnail_url?: string;

    website_url?: string;
  }

  export interface Point {
    id?: number;

    index?: number;

    lat?: string;

    lng?: string;

    rank?: number;
  }
}

export type HeatmapRetrieveHeatmapCompetitorsResponse =
  Array<HeatmapRetrieveHeatmapCompetitorsResponse.HeatmapRetrieveHeatmapCompetitorsResponseItem>;

export namespace HeatmapRetrieveHeatmapCompetitorsResponse {
  export interface HeatmapRetrieveHeatmapCompetitorsResponseItem {
    id?: number;

    average?: number;

    average_position?: number;

    market_share?: string;

    market_share_position?: number;

    north_east?: number;

    north_west?: number;

    photos_count?: number;

    place?: HeatmapRetrieveHeatmapCompetitorsResponseItem.Place;

    south_east?: number;

    south_west?: number;

    top_20_points?: number;

    top_3_percentage?: string | null;

    top_3_points?: number;

    top_3_position?: number;

    total_points?: number;
  }

  export namespace HeatmapRetrieveHeatmapCompetitorsResponseItem {
    export interface Place {
      id?: number;

      address?: string;

      ave_review_rating?: number;

      feature_id?: string;

      google_place_id?: string;

      google_place_serial?: string;

      latitude?: string;

      longitude?: string;

      main_category?: string;

      map_url?: string;

      name?: string;

      phone?: string;

      place_url?: string;

      ranking?: string | null;

      related_categories?: Array<string>;

      review_count?: number;

      thumbnail_url?: string;

      website_url?: string;
    }
  }
}

export interface HeatmapRetrieveHeatmapPointResponse {
  id?: number;

  index?: number;

  lat?: number;

  lng?: number;

  places?: Array<HeatmapRetrieveHeatmapPointResponse.Place>;

  rank?: number;
}

export namespace HeatmapRetrieveHeatmapPointResponse {
  export interface Place {
    id?: number;

    address?: string;

    ave_review_rating?: number;

    google_place_id?: string;

    name?: string;

    ranking?: number;

    review_count?: number;
  }
}

export interface HeatmapCreateHeatmapParams {
  /**
   * Unit for the radius. Accepted: `km`, `mi`, `m`.
   */
  distanceType: string;

  /**
   * Radius between grid points in the chosen unit. Used to auto-generate points when
   * `points` is not provided.
   */
  grid_radius: number;

  /**
   * Number of grid points per side (e.g. 3 = 3×3). Maximum: `13` (13×13 = 169
   * points). Used to auto-generate points when `points` is not provided.
   */
  grid_size: number | null;

  /**
   * Keywords to track.
   */
  keyword: Array<string>;

  /**
   * Latitude of the grid center.
   */
  lat: number;

  /**
   * Longitude of the grid center.
   */
  lng: number;

  /**
   * Google Place ID of the business. you can get the place_id by calling
   * heatmaps/locations endpoint in case you don't have it.
   */
  place_id: string;

  /**
   * Search type(s) to run per keyword. Accepted: `google_maps`, `local_pack`.
   */
  search_type: Array<string>;

  /**
   * optional Pre-computed grid point coordinates (max 169). If provided (must not be
   * empty), `grid_radius` and `grid_size` are ignored. If omitted, points are
   * auto-generated from `grid_size` and `grid_radius`. Use the
   * [Generate grid points](#tag/Heatmap-Points/POST/public/api/v1/heatmap/grid-points)
   * endpoint to compute coordinates from a grid config and pass them here.
   */
  points?: Array<HeatmapCreateHeatmapParams.Point | null>;
}

export namespace HeatmapCreateHeatmapParams {
  export interface Point {
    /**
     * Latitude of the point.
     */
    lat: number;

    /**
     * Longitude of the point.
     */
    lng: number;
  }
}

export interface HeatmapGenerateGridPointsParams {
  /**
   * Spacing between grid points, **in meters** (e.g. `1000` = 1 km, `1609` ≈ 1
   * mile).
   */
  grid_radius: number;

  /**
   * Number of grid points per side (e.g. 3 = 3×3 grid). Maximum: `13` (produces a
   * 13×13 = 169-point grid).
   */
  grid_size: number;

  /**
   * Latitude of the grid center.
   */
  lat: number;

  /**
   * Longitude of the grid center.
   */
  lng: number;

  /**
   * optional Custom polygon to clip the grid. Points outside the polygon are
   * excluded.
   */
  polygon?: { [key: string]: unknown } | null;
}

export interface HeatmapListHeatmapsParams {
  /**
   * Filter by business name (partial match).
   */
  'filter[business_name]'?: string;

  /**
   * Filter by lead source / company ID.
   */
  'filter[company_id]'?: number;

  /**
   * Filter by a named date alias instead of a range. Accepted: `today`, `yesterday`,
   * `this_week`, `last_week`, `last_7_days`, `last_30_days`, `last_90_days`,
   * `this_month`, `last_month`, `this_quarter`, `last_quarter`, `this_year`,
   * `year_to_date`, `last_year`, `all_time`.
   */
  'filter[created_at][date]'?: string;

  /**
   * Filter by creation date — range end (YYYY-MM-DD).
   */
  'filter[created_at][end_date]'?: string;

  /**
   * Filter by creation date — range start (YYYY-MM-DD).
   */
  'filter[created_at][start_date]'?: string;

  /**
   * Filter by Google Place ID (exact).
   */
  'filter[google_place_id]'?: string;

  /**
   * Filter by keyword text (partial match).
   */
  'filter[keyword]'?: string;

  /**
   * Filter by location ID.
   */
  'filter[location_id]'?: number;

  /**
   * Filter by search type. Accepted: `google_maps`, `local_pack`.
   */
  'filter[search_type]'?: string;

  /**
   * Filter by heatmap status. Accepted slugs: `queue`, `in_progress`, `completed`,
   * `incomplete`, `failed`. Numeric values (0–4) are also accepted.
   */
  'filter[status]'?: string;

  /**
   * Filter by tag name (exact match).
   */
  'filter[tag]'?: string;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Full-text search across keyword and business name.
   */
  search?: string;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `created_at`, `average`,
   * `top_3_points`, `top_3_position`, `top_3_percentage`, `review_count`,
   * `review_rating`, `average_position`, `zoom_level`, `grid_size`, `market_share`,
   * `keyword`, `business_name`, `reviews`.
   */
  sort?: string;
}

export interface HeatmapListLocationsParams {
  /**
   * Filter by address (partial match).
   */
  'filter[address]'?: string;

  /**
   * Filter by city.
   */
  'filter[city]'?: string;

  /**
   * Filter by location ID.
   */
  'filter[id]'?: number;

  /**
   * Filter by location name (partial match).
   */
  'filter[location_name]'?: string;

  /**
   * Filter by Google Place ID (exact).
   */
  'filter[place_id]'?: string;

  /**
   * Filter by primary business category.
   */
  'filter[primary_category]'?: string;

  /**
   * Filter by state.
   */
  'filter[state]'?: string;

  /**
   * Filter by zip code.
   */
  'filter[zip_code]'?: string;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `location_name`,
   * `address`, `city`, `state`, `zip_code`, `primary_category`, `website_url`,
   * `review_count`, `ave_review_rating`, `created_at`, `last_review_date`,
   * `is_connected`, `location_state`, `media_count`, `unreplied_review_count`,
   * `completion_percentage`.
   */
  sort?: string;
}

export interface HeatmapRetrieveHeatmapPointParams {
  /**
   * The ID of the heatmap.
   */
  heatmap_id: number;
}

Heatmap.Schedules = Schedules;

export declare namespace Heatmap {
  export {
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

  export {
    Schedules as Schedules,
    type ScheduleCreateScheduleResponse as ScheduleCreateScheduleResponse,
    type ScheduleListSchedulesResponse as ScheduleListSchedulesResponse,
    type SchedulePauseScheduleResponse as SchedulePauseScheduleResponse,
    type ScheduleResumeScheduleResponse as ScheduleResumeScheduleResponse,
    type ScheduleRetrieveScheduleResponse as ScheduleRetrieveScheduleResponse,
    type ScheduleUpdateScheduleResponse as ScheduleUpdateScheduleResponse,
    type ScheduleCreateScheduleParams as ScheduleCreateScheduleParams,
    type ScheduleListSchedulesParams as ScheduleListSchedulesParams,
    type ScheduleUpdateScheduleParams as ScheduleUpdateScheduleParams,
  };
}

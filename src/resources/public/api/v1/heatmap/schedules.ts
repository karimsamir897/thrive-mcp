// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

/**
 *
 * Create and manage automated heatmap schedules. Schedules run heatmaps on a recurring interval (weekly, monthly, or custom).
 */
export class Schedules extends APIResource {
  /**
   * Creates a new automated heatmap schedule. The schedule will run heatmaps on the
   * specified recurrence.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.schedules.createSchedule(
   *     {
   *       heatmap_config: {
   *         grid_points: [
   *           { lat: 28.174798245111, lng: -81.429216072674 },
   *           { lat: 28.174798245111, lng: -81.457292244549 },
   *           { lat: 28.198987716187, lng: -81.401139900799 },
   *           { lat: 28.198987716187, lng: -81.429216072674 },
   *           { lat: 28.198987716187, lng: -81.457292244549 },
   *         ],
   *         keywords: [
   *           'Plumbing',
   *           'general contractor',
   *           'electrician',
   *           'hvac',
   *         ],
   *         name: 'Weekly Roofing Check',
   *         place_id: 2795512,
   *       },
   *       schedule_config: { repeat_type: 'custom-month' },
   *     },
   *   );
   * ```
   */
  createSchedule(
    body: ScheduleCreateScheduleParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleCreateScheduleResponse> {
    return this._client.post('/public/api/v1/heatmap/schedules', { body, ...options });
  }

  /**
   * Returns a paginated list of heatmap schedules for the account. Supports
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
   * **Date filters** — date params accept an object with `start_date` and/or
   * `end_date` (YYYY-MM-DD):
   *
   * ```
   * filter[created_at][start_date]=2026-01-01
   * filter[created_at][end_date]=2026-04-30
   * ```
   *
   * Named range aliases are also supported via `filter[created_at][date_range]`:
   * `today`, `yesterday`, `last_7_days`, `last_30_days`, `this_month`, `last_month`,
   * `this_year`, `last_year`, `all_time`
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.schedules.listSchedules();
   * ```
   */
  listSchedules(
    query: ScheduleListSchedulesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<ScheduleListSchedulesResponse> {
    return this._client.get('/public/api/v1/heatmap/schedules', { query, ...options });
  }

  /**
   * Pauses an active schedule so it stops running until resumed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.schedules.pauseSchedule(
   *     10,
   *   );
   * ```
   */
  pauseSchedule(scheduleID: number, options?: RequestOptions): APIPromise<SchedulePauseScheduleResponse> {
    return this._client.post(path`/public/api/v1/heatmap/schedules/${scheduleID}/pause`, options);
  }

  /**
   * Resumes a paused schedule so it runs again on its next scheduled date.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.schedules.resumeSchedule(
   *     10,
   *   );
   * ```
   */
  resumeSchedule(scheduleID: number, options?: RequestOptions): APIPromise<ScheduleResumeScheduleResponse> {
    return this._client.post(path`/public/api/v1/heatmap/schedules/${scheduleID}/resume`, options);
  }

  /**
   * Returns full details of a single heatmap schedule including its configuration
   * and next run time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.schedules.retrieveSchedule(
   *     10,
   *   );
   * ```
   */
  retrieveSchedule(schedule: number, options?: RequestOptions): APIPromise<ScheduleRetrieveScheduleResponse> {
    return this._client.get(path`/public/api/v1/heatmap/schedules/${schedule}`, options);
  }

  /**
   * Updates the grid configuration and/or recurrence settings of an existing
   * schedule.
   *
   * @example
   * ```ts
   * const response =
   *   await client.public.api.v1.heatmap.schedules.updateSchedule(
   *     89465,
   *     {
   *       heatmap_config: {
   *         name: 'Weekly Roofing Check Updated',
   *         place_id: 12,
   *       },
   *       schedule_config: { repeat_type: 'month' },
   *     },
   *   );
   * ```
   */
  updateSchedule(
    scheduleID: number,
    body: ScheduleUpdateScheduleParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleUpdateScheduleResponse> {
    return this._client.patch(path`/public/api/v1/heatmap/schedules/${scheduleID}`, { body, ...options });
  }
}

export interface ScheduleCreateScheduleResponse {
  id?: number;

  draw_type?: string;

  google_location?: string | null;

  grid_points?: Array<ScheduleCreateScheduleResponse.GridPoint>;

  grid_size?: number;

  keywords?: Array<string>;

  lat?: number;

  lead_source_id?: string | null;

  length_unit?: string;

  lng?: number;

  name?: string;

  place?: ScheduleCreateScheduleResponse.Place;

  place_id?: number;

  radius?: number;

  schedule_config?: ScheduleCreateScheduleResponse.ScheduleConfig;

  status?: string;

  stop_reason?: string;

  zoom_level?: string | null;
}

export namespace ScheduleCreateScheduleResponse {
  export interface GridPoint {
    lat?: number;

    lng?: number;
  }

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

  export interface ScheduleConfig {
    id?: number;

    ai_recurring?: number;

    created_at?: string;

    delete_oldpost_on_recurring?: number;

    is_recurring?: number;

    last_schedule_ran_at?: string | null;

    recurring_count?: number;

    repeat_every?: number;

    repeat_on?: string;

    repeat_type?: string;

    scheduled_at?: string;

    status?: string;

    stop_reason?: string;

    timezone?: string;

    updated_at?: string;
  }
}

export interface ScheduleListSchedulesResponse {
  current_page?: number;

  data?: Array<ScheduleListSchedulesResponse.Data>;

  first_page_url?: string;

  from?: number;

  last_page?: number;

  last_page_url?: string;

  links?: Array<ScheduleListSchedulesResponse.Link>;

  next_page_url?: string | null;

  path?: string;

  per_page?: number;

  prev_page_url?: string | null;

  to?: number;

  total?: number;
}

export namespace ScheduleListSchedulesResponse {
  export interface Data {
    id?: number;

    draw_type?: string | null;

    google_location?: string | null;

    grid_points?: Array<Data.GridPoint>;

    grid_size?: number;

    keywords?: Array<string>;

    lat?: string;

    lead_source_id?: string | null;

    length_unit?: string;

    lng?: string;

    name?: string;

    place?: Data.Place;

    place_id?: number;

    radius?: number;

    schedule_config?: Data.ScheduleConfig;

    status?: string;

    stop_reason?: string;

    zoom_level?: string | null;
  }

  export namespace Data {
    export interface GridPoint {
      lat?: string;

      lng?: string;
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

    export interface ScheduleConfig {
      id?: number;

      ai_recurring?: number;

      created_at?: string;

      delete_oldpost_on_recurring?: number;

      is_recurring?: number;

      last_schedule_ran_at?: string | null;

      recurring_count?: number;

      repeat_every?: number;

      repeat_on?: string;

      repeat_type?: string;

      scheduled_at?: string;

      status?: string;

      stop_reason?: string;

      timezone?: string;

      updated_at?: string;
    }
  }

  export interface Link {
    active?: boolean;

    label?: string;

    url?: string | null;
  }
}

export interface SchedulePauseScheduleResponse {
  id?: number;

  draw_type?: string | null;

  google_location?: string | null;

  grid_points?: Array<SchedulePauseScheduleResponse.GridPoint>;

  grid_size?: string | null;

  keywords?: Array<string>;

  lat?: string;

  lead_source_id?: string | null;

  length_unit?: string;

  lng?: string;

  name?: string;

  place?: SchedulePauseScheduleResponse.Place;

  place_id?: number;

  radius?: string | null;

  schedule_config?: SchedulePauseScheduleResponse.ScheduleConfig;

  status?: string;

  stop_reason?: string;

  zoom_level?: string | null;
}

export namespace SchedulePauseScheduleResponse {
  export interface GridPoint {
    lat?: number;

    lng?: number;
  }

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

  export interface ScheduleConfig {
    id?: number;

    ai_recurring?: number;

    created_at?: string;

    delete_oldpost_on_recurring?: number;

    is_recurring?: number;

    last_schedule_ran_at?: string | null;

    recurring_count?: number;

    repeat_every?: number;

    repeat_on?: string;

    repeat_type?: string;

    scheduled_at?: string;

    status?: string;

    stop_reason?: string;

    timezone?: string;

    updated_at?: string;
  }
}

export interface ScheduleResumeScheduleResponse {
  id?: number;

  draw_type?: string | null;

  google_location?: string | null;

  grid_points?: Array<ScheduleResumeScheduleResponse.GridPoint>;

  grid_size?: string | null;

  keywords?: Array<string>;

  lat?: string;

  lead_source_id?: string | null;

  length_unit?: string;

  lng?: string;

  name?: string;

  place?: ScheduleResumeScheduleResponse.Place;

  place_id?: number;

  radius?: string | null;

  schedule_config?: ScheduleResumeScheduleResponse.ScheduleConfig;

  status?: string;

  stop_reason?: string;

  zoom_level?: string | null;
}

export namespace ScheduleResumeScheduleResponse {
  export interface GridPoint {
    lat?: number;

    lng?: number;
  }

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

  export interface ScheduleConfig {
    id?: number;

    ai_recurring?: number;

    created_at?: string;

    delete_oldpost_on_recurring?: number;

    is_recurring?: number;

    last_schedule_ran_at?: string | null;

    recurring_count?: number;

    repeat_every?: number;

    repeat_on?: string;

    repeat_type?: string;

    scheduled_at?: string;

    status?: string;

    stop_reason?: string;

    timezone?: string;

    updated_at?: string;
  }
}

export interface ScheduleRetrieveScheduleResponse {
  id?: number;

  draw_type?: string | null;

  google_location?: string | null;

  grid_points?: Array<ScheduleRetrieveScheduleResponse.GridPoint>;

  grid_size?: number;

  keywords?: Array<string>;

  lat?: string;

  lead_source_id?: string | null;

  length_unit?: string;

  lng?: string;

  name?: string;

  place?: ScheduleRetrieveScheduleResponse.Place;

  place_id?: number;

  radius?: number;

  schedule_config?: ScheduleRetrieveScheduleResponse.ScheduleConfig;

  status?: string;

  stop_reason?: string;

  zoom_level?: string | null;
}

export namespace ScheduleRetrieveScheduleResponse {
  export interface GridPoint {
    lat?: string;

    lng?: string;
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

  export interface ScheduleConfig {
    id?: number;

    ai_recurring?: number;

    created_at?: string;

    delete_oldpost_on_recurring?: number;

    is_recurring?: number;

    last_schedule_ran_at?: string | null;

    recurring_count?: number;

    repeat_every?: number;

    repeat_on?: string;

    repeat_type?: string;

    scheduled_at?: string;

    status?: string;

    stop_reason?: string;

    timezone?: string;

    updated_at?: string;
  }
}

export interface ScheduleUpdateScheduleResponse {
  id?: number;

  draw_type?: string;

  google_location?: string | null;

  grid_points?: Array<ScheduleUpdateScheduleResponse.GridPoint>;

  grid_size?: number;

  keywords?: Array<string>;

  lat?: number;

  lead_source_id?: string | null;

  length_unit?: string;

  lng?: number;

  name?: string;

  place?: ScheduleUpdateScheduleResponse.Place;

  place_id?: number;

  radius?: number;

  schedule_config?: ScheduleUpdateScheduleResponse.ScheduleConfig;

  status?: string;

  stop_reason?: string;

  zoom_level?: string | null;
}

export namespace ScheduleUpdateScheduleResponse {
  export interface GridPoint {
    lat?: number;

    lng?: number;
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

  export interface ScheduleConfig {
    id?: number;

    ai_recurring?: number;

    created_at?: string;

    delete_oldpost_on_recurring?: number;

    is_recurring?: number;

    last_schedule_ran_at?: string | null;

    recurring_count?: number;

    repeat_every?: number;

    repeat_on?: number;

    repeat_type?: string;

    scheduled_at?: string;

    status?: string;

    stop_reason?: string;

    timezone?: string;

    updated_at?: string;
  }
}

export interface ScheduleCreateScheduleParams {
  /**
   * Grid and place configuration for the heatmap.
   */
  heatmap_config: ScheduleCreateScheduleParams.HeatmapConfig;

  /**
   * Recurrence settings for the schedule.
   */
  schedule_config: ScheduleCreateScheduleParams.ScheduleConfig;
}

export namespace ScheduleCreateScheduleParams {
  /**
   * Grid and place configuration for the heatmap.
   */
  export interface HeatmapConfig {
    /**
     * Pre-computed grid point coordinates (min 1, max 169). Use the
     * [Generate grid points](#tag/Heatmap-Points/POST/public/api/v1/heatmap/grid-points)
     * endpoint to compute these from a grid config.
     */
    grid_points: Array<HeatmapConfig.GridPoint | null>;

    /**
     * Keywords to search.
     */
    keywords: Array<string>;

    /**
     * Schedule name.
     */
    name: string;

    /**
     * The heatmap place ID.
     */
    place_id: number;

    /**
     * optional Grid center latitude (informational).
     */
    lat?: number;

    /**
     * optional Lead source / company ID.
     */
    lead_source_id?: number;

    /**
     * optional Grid center longitude (informational).
     */
    lng?: number;

    /**
     * optional Location ID to associate the schedule with.
     */
    location_id?: number;
  }

  export namespace HeatmapConfig {
    export interface GridPoint {
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

  /**
   * Recurrence settings for the schedule.
   */
  export interface ScheduleConfig {
    /**
     * Recurrence pattern. Each value has different requirements for `repeat_every` and
     * `repeat_on`:
     *
     * - `week` — runs once a week on a fixed day. **Requires** `repeat_on` (1=Monday …
     *   7=Sunday). `repeat_every` is ignored.
     *
     *   _Example: run every Monday → `repeat_type: "week", repeat_on: 1`_
     *
     * - `month` — runs once a month on a fixed calendar day. **Requires** `repeat_on`
     *   (1–31). `repeat_every` is ignored.
     *
     *   _Example: run on the 15th of every month →
     *   `repeat_type: "month", repeat_on: 15`_
     *
     * - `custom-day` — runs every N days. **Requires** `repeat_every` (≥ 1).
     *   `repeat_on` is ignored.
     *
     *   _Example: run every 3 days → `repeat_type: "custom-day", repeat_every: 3`_
     *
     * - `custom-week` — runs every N weeks. **Requires** `repeat_every` (≥ 1).
     *   `repeat_on` is ignored.
     *
     *   _Example: run every 2 weeks → `repeat_type: "custom-week", repeat_every: 2`_
     *
     * - `custom-month` — runs every N months. **Requires** `repeat_every` (≥ 1).
     *   `repeat_on` is ignored.
     *
     *   _Example: run every 6 months → `repeat_type: "custom-month", repeat_every: 6`_
     */
    repeat_type: string;

    /**
     * optional Required when `repeat_type` is `custom-day`, `custom-week`, or
     * `custom-month`. Specifies the interval between runs (minimum 1). Ignored for
     * `week` and `month`.
     */
    repeat_every?: number;

    /**
     * optional Required when `repeat_type` is `week` or `month`. For `week`: day of
     * the week where 1=Monday and 7=Sunday. For `month`: day of the calendar month
     * (1–31). Ignored for `custom-*` types.
     */
    repeat_on?: number;

    /**
     * optional Time of day to run the schedule in `HH:MM` 24-hour format. Defaults to
     * `12:00`.
     */
    schedule_hour_minute?: string;

    /**
     * optional Timezone for the schedule. Accepts an IANA timezone name (e.g.
     * `America/Chicago`) or a UTC offset (e.g. `+02:00`). Defaults to `UTC`.
     */
    timezone?: string;
  }
}

export interface ScheduleListSchedulesParams {
  /**
   * Filter by lead source / company ID.
   */
  'filter[company_id]'?: number;

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
   * Filter by keyword in the schedule (exact match).
   */
  'filter[keyword]'?: string;

  /**
   * Filter by location ID.
   */
  'filter[location_id]'?: number;

  /**
   * Filter by schedule name (partial match).
   */
  'filter[name]'?: string;

  /**
   * Filter by place ID.
   */
  'filter[place_id]'?: number;

  /**
   * Filter by repeat interval.
   */
  'filter[repeat_every]'?: number;

  /**
   * Filter by day of week (1–7) or day of month (1–31) depending on repeat_type.
   */
  'filter[repeat_on]'?: number;

  /**
   * Filter by repeat type. Accepted: `week`, `month`, `custom-day`, `custom-week`,
   * `custom-month`.
   */
  'filter[repeat_type]'?: string;

  /**
   * Filter by schedule status. Accepted: `active`, `paused`.
   */
  'filter[status]'?: string;

  /**
   * Page number.
   */
  page?: number;

  /**
   * Number of results per page (default 25).
   */
  per_page?: number;

  /**
   * Full-text search across schedule name and place name.
   */
  search?: string;

  /**
   * Sort field. Prefix with `-` for descending. Accepted: `created_at`, `name`,
   * `status`, `scheduled_at`, `last_schedule_ran_at`, `repeat_type`, `repeat_every`,
   * `place_id`, `place.name`, `location_id`.
   */
  sort?: string;
}

export interface ScheduleUpdateScheduleParams {
  /**
   * Updated grid and place configuration.
   */
  heatmap_config: ScheduleUpdateScheduleParams.HeatmapConfig;

  /**
   * Updated recurrence settings.
   */
  schedule_config: ScheduleUpdateScheduleParams.ScheduleConfig;
}

export namespace ScheduleUpdateScheduleParams {
  /**
   * Updated grid and place configuration.
   */
  export interface HeatmapConfig {
    /**
     * Schedule name.
     */
    name: string;

    /**
     * The heatmap place ID.
     */
    place_id: number;

    /**
     * optional Updated grid point coordinates, max 169 (omit to keep existing). Use
     * the
     * [Generate grid points](#tag/Heatmap-Points/POST/public/api/v1/heatmap/grid-points)
     * endpoint to compute these from a grid config.
     */
    grid_points?: Array<{ [key: string]: unknown } | null>;

    /**
     * optional Keywords to search (omit to keep existing).
     */
    keywords?: Array<string>;
  }

  /**
   * Updated recurrence settings.
   */
  export interface ScheduleConfig {
    /**
     * Recurrence type. Accepted: `week`, `month`, `custom-day`, `custom-week`,
     * `custom-month`.
     */
    repeat_type: string;

    /**
     * optional Day of week (1–7) or day of month (1–31).
     */
    repeat_on?: number;
  }
}

export declare namespace Schedules {
  export {
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

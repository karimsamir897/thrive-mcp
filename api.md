# Public

## API

### V1

#### Heatmap

Types:

- <code><a href="./src/resources/public/api/v1/heatmap/heatmap.ts">HeatmapCreateHeatmapResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/heatmap.ts">HeatmapGenerateGridPointsResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/heatmap.ts">HeatmapListHeatmapsResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/heatmap.ts">HeatmapListLocationsResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/heatmap.ts">HeatmapRetrieveHeatmapResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/heatmap.ts">HeatmapRetrieveHeatmapCompetitorsResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/heatmap.ts">HeatmapRetrieveHeatmapPointResponse</a></code>

Methods:

- <code title="post /public/api/v1/heatmaps">client.public.api.v1.heatmap.<a href="./src/resources/public/api/v1/heatmap/heatmap.ts">createHeatmap</a>({ ...params }) -> HeatmapCreateHeatmapResponse</code>
- <code title="post /public/api/v1/heatmap/grid-points">client.public.api.v1.heatmap.<a href="./src/resources/public/api/v1/heatmap/heatmap.ts">generateGridPoints</a>({ ...params }) -> HeatmapGenerateGridPointsResponse</code>
- <code title="get /public/api/v1/heatmaps">client.public.api.v1.heatmap.<a href="./src/resources/public/api/v1/heatmap/heatmap.ts">listHeatmaps</a>({ ...params }) -> HeatmapListHeatmapsResponse</code>
- <code title="get /public/api/v1/heatmaps/locations">client.public.api.v1.heatmap.<a href="./src/resources/public/api/v1/heatmap/heatmap.ts">listLocations</a>({ ...params }) -> HeatmapListLocationsResponse</code>
- <code title="get /public/api/v1/heatmaps/{heatmap}">client.public.api.v1.heatmap.<a href="./src/resources/public/api/v1/heatmap/heatmap.ts">retrieveHeatmap</a>(heatmap) -> HeatmapRetrieveHeatmapResponse</code>
- <code title="get /public/api/v1/heatmaps/{heatmap}/competitors">client.public.api.v1.heatmap.<a href="./src/resources/public/api/v1/heatmap/heatmap.ts">retrieveHeatmapCompetitors</a>(heatmap) -> HeatmapRetrieveHeatmapCompetitorsResponse</code>
- <code title="get /public/api/v1/heatmaps/{heatmap_id}/points/{point_id}">client.public.api.v1.heatmap.<a href="./src/resources/public/api/v1/heatmap/heatmap.ts">retrieveHeatmapPoint</a>(pointID, { ...params }) -> HeatmapRetrieveHeatmapPointResponse</code>

##### Schedules

Types:

- <code><a href="./src/resources/public/api/v1/heatmap/schedules.ts">ScheduleCreateScheduleResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/schedules.ts">ScheduleListSchedulesResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/schedules.ts">SchedulePauseScheduleResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/schedules.ts">ScheduleResumeScheduleResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/schedules.ts">ScheduleRetrieveScheduleResponse</a></code>
- <code><a href="./src/resources/public/api/v1/heatmap/schedules.ts">ScheduleUpdateScheduleResponse</a></code>

Methods:

- <code title="post /public/api/v1/heatmap/schedules">client.public.api.v1.heatmap.schedules.<a href="./src/resources/public/api/v1/heatmap/schedules.ts">createSchedule</a>({ ...params }) -> ScheduleCreateScheduleResponse</code>
- <code title="get /public/api/v1/heatmap/schedules">client.public.api.v1.heatmap.schedules.<a href="./src/resources/public/api/v1/heatmap/schedules.ts">listSchedules</a>({ ...params }) -> ScheduleListSchedulesResponse</code>
- <code title="post /public/api/v1/heatmap/schedules/{schedule_id}/pause">client.public.api.v1.heatmap.schedules.<a href="./src/resources/public/api/v1/heatmap/schedules.ts">pauseSchedule</a>(scheduleID) -> SchedulePauseScheduleResponse</code>
- <code title="post /public/api/v1/heatmap/schedules/{schedule_id}/resume">client.public.api.v1.heatmap.schedules.<a href="./src/resources/public/api/v1/heatmap/schedules.ts">resumeSchedule</a>(scheduleID) -> ScheduleResumeScheduleResponse</code>
- <code title="get /public/api/v1/heatmap/schedules/{schedule}">client.public.api.v1.heatmap.schedules.<a href="./src/resources/public/api/v1/heatmap/schedules.ts">retrieveSchedule</a>(schedule) -> ScheduleRetrieveScheduleResponse</code>
- <code title="patch /public/api/v1/heatmap/schedules/{schedule_id}">client.public.api.v1.heatmap.schedules.<a href="./src/resources/public/api/v1/heatmap/schedules.ts">updateSchedule</a>(scheduleID, { ...params }) -> ScheduleUpdateScheduleResponse</code>

// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import ThriveMcp from 'thrive-mcp';

const client = new ThriveMcp({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource heatmap', () => {
  // Mock server tests are disabled
  test.skip('createHeatmap: only required params', async () => {
    const responsePromise = client.public.api.v1.heatmap.createHeatmap({
      distanceType: 'm',
      grid_radius: 3495,
      grid_size: 3,
      keyword: ['roofing'],
      lat: 44.670381143996,
      lng: -88.122418774951,
      place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
      search_type: ['google_maps'],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('createHeatmap: required and optional params', async () => {
    const response = await client.public.api.v1.heatmap.createHeatmap({
      distanceType: 'm',
      grid_radius: 3495,
      grid_size: 3,
      keyword: ['roofing'],
      lat: 44.670381143996,
      lng: -88.122418774951,
      place_id: 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
      search_type: ['google_maps'],
      points: [
        { lat: 44.626765686401, lng: -88.078293153604 },
        { lat: 44.626765686401, lng: -88.100354964951 },
      ],
    });
  });

  // Mock server tests are disabled
  test.skip('generateGridPoints: only required params', async () => {
    const responsePromise = client.public.api.v1.heatmap.generateGridPoints({
      grid_radius: 3495,
      grid_size: 3,
      lat: 44.670381143996,
      lng: -88.122418774951,
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('generateGridPoints: required and optional params', async () => {
    const response = await client.public.api.v1.heatmap.generateGridPoints({
      grid_radius: 3495,
      grid_size: 3,
      lat: 44.670381143996,
      lng: -88.122418774951,
      polygon: {},
    });
  });

  // Mock server tests are disabled
  test.skip('listHeatmaps', async () => {
    const responsePromise = client.public.api.v1.heatmap.listHeatmaps();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listHeatmaps: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.public.api.v1.heatmap.listHeatmaps(
        {
          'filter[business_name]': 'Green City',
          'filter[company_id]': 3,
          'filter[created_at][date]': 'last_30_days',
          'filter[created_at][end_date]': '2026-04-30',
          'filter[created_at][start_date]': '2026-01-01',
          'filter[google_place_id]': 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
          'filter[keyword]': 'roofing',
          'filter[location_id]': 20,
          'filter[search_type]': 'google_maps',
          'filter[status]': 'completed',
          'filter[tag]': 'priority',
          page: 1,
          per_page: 25,
          search: 'roofing',
          sort: '-created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ThriveMcp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('listLocations', async () => {
    const responsePromise = client.public.api.v1.heatmap.listLocations();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('listLocations: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.public.api.v1.heatmap.listLocations(
        {
          'filter[address]': '123 Main St',
          'filter[city]': 'Green Bay',
          'filter[id]': 20,
          'filter[location_name]': 'Green City',
          'filter[place_id]': 'ChIJFzfDtmDzAogRn0zn9LJaP_A',
          'filter[primary_category]': 'Roofing contractor',
          'filter[state]': 'WI',
          'filter[zip_code]': '54301',
          page: 1,
          per_page: 25,
          sort: '-created_at',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(ThriveMcp.NotFoundError);
  });

  // Mock server tests are disabled
  test.skip('retrieveHeatmap', async () => {
    const responsePromise = client.public.api.v1.heatmap.retrieveHeatmap(1482);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveHeatmapCompetitors', async () => {
    const responsePromise = client.public.api.v1.heatmap.retrieveHeatmapCompetitors(1482);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveHeatmapPoint: only required params', async () => {
    const responsePromise = client.public.api.v1.heatmap.retrieveHeatmapPoint(1, { heatmap_id: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Mock server tests are disabled
  test.skip('retrieveHeatmapPoint: required and optional params', async () => {
    const response = await client.public.api.v1.heatmap.retrieveHeatmapPoint(1, { heatmap_id: 1 });
  });
});

<script lang="ts">
  import { getContext } from 'svelte';
  import { key } from '$lib/components/Header.ts';
  import type { HeaderContext } from '$lib/components/Header.ts';
  import backgroundImage from '$lib/assets/bg-header-visit.png';
  // map imports
  import { browser } from '$app/environment';
  import { LeafletMap, Marker, Popup, Tooltip, TileLayer } from 'svelte-leafletjs?client';
  import 'leaflet/dist/leaflet.css';

  const headerContext: HeaderContext = getContext(key);
  headerContext.setHeaderImage(backgroundImage);
  headerContext.setHeaderText(
    'ArtSci 2023 is expected to exhibit on the 5th of October - 25th of October, 2023. '
  );

  let address = 'ETH CHN, Universitätstrasse 16, 8006 Zürich';
  let addressCoordinates = [47.379223, 8.548385];

  const mapOptions = {
    center: addressCoordinates,
    zoom: 16
  };
  const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tileLayerOptions = {
    minZoom: 0,
    maxZoom: 20,
    maxNativeZoom: 19,
    attribution: '© OpenStreetMap contributors'
  };
</script>

<svelte:head>
  <title>Visit | ArtSci</title>
</svelte:head>

<div class="flex flex-col">
  <div>
    <h1 class="text-3xl">Exhibition location</h1>

    <div class="mt-2 text-lg">{address}</div>
  </div>

  <div class="h-[60vh] mt-4">
    {#if browser}
      <LeafletMap options={mapOptions}>
        <TileLayer url={tileUrl} options={tileLayerOptions} />
        <Marker latLng={addressCoordinates}>
          <Popup>{address}</Popup>
          <Tooltip>{address}</Tooltip>
        </Marker>
      </LeafletMap>
    {/if}
  </div>
</div>

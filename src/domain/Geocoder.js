import axios from 'axios';
import Api from './Api';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geocode = place =>
axios
  .get(GEOCODE_ENDPOINT, {
    params: { address: place, key: Api.GEOCODE_API },
  })
  .then((results) => {
    const data = results.data;
    const status = data.status;
    const result = results.data.results[0];
    if (typeof result === 'undefined') {
      return { status };
    }

    const address = result.formatted_address;
    const location = result.geometry.location;
    return { status, address, location };
  })
;

export const reverceGeocode = () => null;

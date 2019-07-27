import * as qs from 'querystring';

export default function() {
  const querystring = window.location.search
    ? window.location.search.slice(1)
    : '';
  return qs.parse(querystring);
}

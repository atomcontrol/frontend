import { API_BASE_URL, API_VERBOSE} from './config';


function urlBase64Decode(str) {
  if(str==undefined)
    return;
  var output = str.replace('-', '+').replace('_', '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw 'Illegal base64url string!';
  }
  return window.atob(output);
}


export function decodeJWT(token) {

  var user = {};
  if (token != undefined && token != null) {
    var encoded = token.split('.')[1];
    user = JSON.parse(urlBase64Decode(encoded));
  }
  return user;
}


function completeRequest(route,config) {
  return fetch(API_BASE_URL+route, config)
    .then(response =>
      response
        .json()
        .then(body => ({ body, response }))
    )
    .then(({ body, response }) =>  {
      if(API_VERBOSE) {
        console.log("body", body);
        console.log("response", response);
        console.groupEnd('APIRequest:' + route);
      }
      return body;
    });
}
export function APIget(route)
{
  let token = localStorage.getItem('id_token') || null;
  if(API_VERBOSE)
  {
    console.group('APIRequest: GET '+route);
    console.log('auth\'d?',token!=null? 'yes':'no');
  }

  let config = {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` }
    // headers: { 'Content-Type':'application/x-www-form-urlencoded' },
    // body: data
  };
  return completeRequest(route,config);
}
export function APIput(route, data)
{
  let token = localStorage.getItem('id_token') || null;
  if(API_VERBOSE)
  {
    console.group('APIRequest: PUT '+route);
    console.log('data',data);
    console.log('auth\'d?',token!=null? 'yes':'no');
  }

  var dataa = new FormData();
  dataa.append("json",JSON.stringify(data));

  var myHeaders = new Headers();
  myHeaders.append('Authorization', `Bearer ${token}`);

  let config = {
    method: 'POST',
    headers: myHeaders,
     body: dataa
  };
  return completeRequest(route,config);
}

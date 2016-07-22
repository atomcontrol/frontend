export function test1(inp)
{
  console.log('test1 receieved',inp);
}
import { API_BASE_URL} from '.././config';


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


function completeRequest(route,config,verbose) {
  return fetch(API_BASE_URL+route, config)
    .then(response =>
      response
        .json()
        .then(body => ({ body, response }))
    )
    .then(({ body, response }) =>  {
      if(verbose) {
        console.log(body);
        console.log(response);
        console.groupEnd('APIRequest:' + route);
      }
      return body;
    });
}
export function APIget(route)
{
  let verbose = false;
  let token = localStorage.getItem('id_token') || null;
  if(verbose)
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
  return completeRequest(route,config,verbose);
}

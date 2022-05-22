// Name of the cookie for Single Instance App
var cookieSingleInstName = 'singleInstApp'; 
// Name of the cookie when user try to run more than one instance 
var cookieErrorMsg = 'singleInstAppMsg'; 
// Cookie will expire in one day, if user continue to run the app without exit out browser 
var cookieExpireDays = 1; 
// This value will indicate, whether these cookies are set or not 
var cookieSetValue = '1';


// SetCookie function sets the cookie with expire days

function SetCookie(name) {
    var d = new Date();
    d.setTime(d.getTime() + (cookieExpireDays * 24 * 60 * 60 * 1000));
    var expires = 'expires=' + d.toUTCString();
    document.cookie = name + '=' + cookieSetValue + '; ' + expires;
  }


  // SetSingleInstance function verifies whether
// application is running or not. And setup corresponding
// cookies. This function will be called from onload events

function SetSingleInstance() {

    // Check this application is running. If true, then set the
    // Error message cookie and redirect user to ErrorPage
    if (GetCookie(cookieSingleInstName) == cookieSetValue) { // already opened
      SetCookie(cookieErrorMsg);
      alert("Another session of this App is running please close the browser")
      document.location = "ErrorPage.aspx";
    }
    else { // first instance of the application
      // Set cookie for the application
      SetCookie(cookieSingleInstName);
    }
  }

  // RemoveSingleInstance function removes the cookie for the application
// This function will be called from the onunload function
function RemoveSingleInstace() {
    // Check already running the application
    if (GetCookie(cookieErrorMsg) != cookieSetValue) {
      DeleteCookie(cookieSingleInstName);
    }
  }

  // RemoveErrorMsg function clears the cookie
// which one was set before redirecting to ErrorPage
// This function will be called from the onload event of
// ErrorPage
function RemoveErrorMsg() {
    DeleteCookie(cookieErrorMsg);
  }

  // GetCookie function returns the value of the cookie
function GetCookie(name) {
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var cvalues = ca[i].split('=');
      for (var j = 0; j < cvalues.length; j++) {
        if (cvalues[j].toString().trim() == name) {
          return cvalues[j + 1];
        }
       }
    }
    return '';
  }

  // DeleteCookie function set the expire date to an earlier date
// to clear the cookie

function DeleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC';
  }
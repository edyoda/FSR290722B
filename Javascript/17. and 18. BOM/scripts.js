/**
 *
 * BOM : represents additional objects provided by the browser (host environment) for working with everything except the document.
 *
 * window.history
 * => history.back() - same as clicking back in the browser
 * => history.forward() - same as clicking forward in the browser
 * => history.go() - go n pages forward or -n pages backward
 *
 * window.location
 * => location.href : returns the href (URL) of the current page
 * => location.hostname : returns the domain name of the web host
 * => location.pathname : returns the path and filename of the current page
 * => location.assign() method loads a new document.
 *
 * window.navigator
 * => userAgent : returns the user agent string for the current browser.
 * ====> Format: appCodeName/appVersion number (Platform; Security; OS-or-CPU;
Localization; rv: revision-version-number) product/productSub
Application-Name Application-Name-version
 * => navigator.onLine : returns true if the browser is online
 * => navigator.connection : returns information about the system's connection, such as the current bandwidth of the user's device or whether the connection is metered.
 * => navigator.cookieEnabled:  returns a Boolean value that indicates whether cookies are enabled or not.
 *
 * window.screen
 * => screen.width
 * => screen.height
 * => screen.availWidth
 * => screen.availHeight
 * 
 * Pop-ups:
 * => alert()
 * => confirm()
 * => prompt()
 *
 *
 *
 * web storage:
 * https://stackoverflow.com/questions/19867599/what-is-the-difference-between-localstorage-sessionstorage-session-and-cookies
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage 
 * https://web.dev/storage-for-the-web/
 * 
 * Cookies: 4kb limit
 * Cookies were invented to solve the problem "how to remember information about the user":
 * When a user visits a web page, his/her name can be stored in a cookie.
 * Next time the user visits the page, the cookie "remembers" his/her name.
 * 
 * document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
 * 
 * Session Storage: 5mb limit
 * SessionStorage is tab specific, and scoped to the lifetime of the tab. 
 * It may be useful for storing small amounts of session specific information.
 * It should be used with caution because it is synchronous and will block the main thread. 
 * It can contain only strings. 
 * 
 * Local Storage:
 * 
 * 
 */

// Cookies : https://javascript.info/cookie
// +1 day from now
let date = new Date(Date.now() + 86400e3)
date = date.toUTCString()
document.cookie = 'user=John; expires=' + date

// how to delete a cookie ?
function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  })
}

//Local Storage:

localStorage.setItem('test', 1)

console.log(localStorage.getItem('test'))

localStorage.test = 2
console.log(localStorage.getItem('test'))
delete localStorage.test

// How to store an object ?
localStorage.info = JSON.stringify({ number: '000-00-000' })
localStorage.user = JSON.stringify({ name: 'John' })

// sometime later
console.log(localStorage.info)
console.log(JSON.parse(localStorage.info))
console.log(localStorage.getItem('info'))
console.log(JSON.parse(localStorage.getItem('info')))

let user = JSON.parse(localStorage.user)
// console.log(user.name) // John

// localStorage.clear()

// Session storage:

sessionStorage.setItem('test', 1)

console.log(sessionStorage.getItem('test'))

sessionStorage.test = 2
console.log(sessionStorage.getItem('test'))
delete sessionStorage.test
// How to store an object ?
sessionStorage.info = JSON.stringify({ number: '000-00-000' })
sessionStorage.user = JSON.stringify({ name: 'John' })

// sometime later
console.log(sessionStorage.info)
console.log(JSON.parse(sessionStorage.info))
console.log(sessionStorage.getItem('info'))
console.log(JSON.parse(sessionStorage.getItem('info')))

let user1 = JSON.parse(sessionStorage.user)
console.log(user1.name) // John

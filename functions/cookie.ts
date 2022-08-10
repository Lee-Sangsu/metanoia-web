export function getCookie(cname:string) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(window.document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
};

export function setCookie(cname:string, cvalue:string, exdays:number) {
    const d:Date = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    window.document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

export function getAllCookies() {
  return window.document.cookie.split(";");
  /*.reduce((cookieObj:object, cookie) => {
    const [name, val]:string[] = cookie.split('=').map(c => c.trim());
    cookieObj[name] = val;
    return cookies;
  }, {});
*/
}

export function removeAllCookies() {
  const cookies = getAllCookies();
  cookies.forEach((c) => { 
      window.document.cookie = c.replace(/^ +/, "").replace(
          /=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"
      ); 
  });  
}
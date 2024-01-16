export function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return JSON.parse(cookie.substring(name.length + 1));
      }
    }
    return null;
  }
  export function setCookie(name, value, days=1) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + days);
    const cookieValue = `${name}=${JSON.stringify(value)};expires=${expirationDate.toUTCString()}`;
    document.cookie = cookieValue;
  }
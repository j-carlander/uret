export function getCurrentUser() {
  // get all cookies from document
  const cookies = document.cookie;

  const userCookie = cookies
    .split(";")
    .find((cookie) => cookie.includes("user="));

  if (userCookie) {
    const currentUser = userCookie
      .slice(userCookie.indexOf("=") + 1)
      .replace(";", "");

    return currentUser.charAt(0).toUpperCase() + currentUser.slice(1);
  }
}

export function signOutCurrentUser() {
  document.cookie = "user=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  window.location.reload();
}

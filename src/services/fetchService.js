// import sessionService from "./sessionService";

/* Helper function */
function fetchHelper(url, method, body) {
  const fetchOptions = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (method.toUpperCase() !== "GET") {
    fetchOptions.body = JSON.stringify(body);
  }

  // const token = sessionService.getToken();

  // if (token !== null) {
  //   fetchOptions.headers.authorization = `Bearer ${token}`;
  // }
  console.log("fetch: ", url, method, body);

  return fetch("/api" + url, fetchOptions);
}

async function login(credentials) {
  const response = await fetchHelper("/login", "POST", credentials);
  return await response.json();
}

/* Export services */
const fetchService = {
  login,
};

export default fetchService;

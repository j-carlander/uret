/* Helper function */
function fetchHelper(url, method, body) {
  const fetchOptions = {
    method,
    headers: { "Content-Type": "application/json" },
  };

  if (method.toUpperCase() !== "GET") {
    fetchOptions.body = JSON.stringify(body);
  }

  return fetch("/api" + url, fetchOptions);
}

async function login(credentials) {
  const response = await fetchHelper("/login", "POST", credentials);
  return await response.json();
}

async function register(userDetails) {
  const response = await fetchHelper("/user", "POST", userDetails);
  return await response.json();
}

/* Export services */
const fetchService = {
  login,
  register,
};

export default fetchService;

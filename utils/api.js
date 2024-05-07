export async function apiRequest(url, method = "GET", data = null) {
  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await $fetch(url, config);
    return response;
  } catch (error) {
    // Throw an object with the error message
    throw { message: error.toString() };
  }
}



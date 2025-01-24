export function fetchCount(amount = 1) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`http://localhost:8080?amount=${amount}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      resolve({ data });
    } catch (error) {
      reject(error); // Handle fetch errors
    }
  });
}

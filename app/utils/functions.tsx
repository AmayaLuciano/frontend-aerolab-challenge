export const fetchData = async () => {
  const res = await fetch('https://coding-challenge-api.aerolab.co/user/me', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
    },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
};

export const addPoints = async (points: number) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5ODQ2MDdiNWE0NTAwMjFiNWY1MDEiLCJpYXQiOjE2ODE0OTEwNDB9.M9Mdl9O9jqyO1Nxy0Jaw0rXoa_k07fo_hE7-Rv3eKvY`,
    },
    body: JSON.stringify({ amount: points }),
  };
  const res = await fetch(
    'https://coding-challenge-api.aerolab.co/user/points',
    requestOptions
  );
  return res.json();
};

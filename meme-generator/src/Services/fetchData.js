const fetchData = url => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.json())
      .then(data => data);
  });
};

export default fetchData;

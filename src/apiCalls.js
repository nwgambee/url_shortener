export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
      .then(response => response.json())
}

export const postUrl = (longUrl, title) => {
  const options = { 
    method: 'POST',
    body: JSON.stringify({
      long_url: longUrl,
      title: title,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/urls', options)
            .then(res => {
              if(!res.ok) {
                throw Error('Failed to get shortened URL')
              }
              return res.json()})
}

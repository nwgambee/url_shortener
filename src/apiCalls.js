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
                throw Error('Failed to post shortened URL')
              }
              return res.json()})
}

export const deleteUrl = id => {
  const options = { 
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch(`http://localhost:3001/api/v1/urls/${id}`, options)
            .then(res => {
              if(!res.ok) {
                throw Error('Failed to delete shortened URL')
              }
              return res.json()})

}
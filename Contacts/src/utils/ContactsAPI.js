
const api = 'https://dummy-api.now.sh';

let token = localStorage.token;
if (!token) token = localStorage.token = Math.random().toString(36);

const headers = {
  "Accept": "application/json",
  "Authorization": token
}

const contacts = {
  getAll: () => fetch(`${api}/contacts`, { headers })
    .then(res => res.json())
    .then(data => data.contacts)
  ,
  add: (contact) => fetch(`${api}/contact`, { 
    method: 'POST', 
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(contact) 
  })
    .then(res => res.json())
    .then(data => data.contact)
  ,
  delete: (contactId) => fetch(`${api}/contact/${contactId}`, { method: 'DELETE', headers })
    .then(res => res.json())
    .then(data => data.contact)
}
    
export default contacts;
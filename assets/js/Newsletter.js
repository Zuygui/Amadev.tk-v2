function sendNews()
{
  webhook()
  alert('Vous êtes bien inscrit a la newsletter !')
}

function webhook()
{

  var email = document.getElementById('newsletter')
  var xhr = new XMLHttpRequest()
  xhr.open('POST', 'https://discord.com/')
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify({
    'embeds': [
      { 'fields': [{ 'inline': false, 'name': 'Un nouvel abboné a la newsletter ! Email:', 'value': email}]}
    ]
  }))
}
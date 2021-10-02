function sendNews()
{
  alert('Oh non ! Nous rencontrons des problèmes avec les webhooks de discord afin de vous inscrire... Nous ferons une annonce a')
}

function webhook()
{

  var email = document.getElementById('newsletter')
  var xhr = new XMLHttpRequest()
  xhr.open(
    'POST',
    'https://discord.com/api/webhooks/893807655183851520/gqJXKPqKcaT_yNAE6UarXWI2jJacqfFq6IThzFQU81NsyiYXOSEHsAC8QAlh4CgAoj_S'
  )
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(JSON.stringify({
    'embeds': [
      {
        'fields': [{
          'inline': false, 'name': 'Un nouvel abboné a la newsletter ! Email:',
          'value': email
        }]
      }
    ]
  }))
}
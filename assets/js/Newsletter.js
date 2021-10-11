function sendNews()
{
  alert('Oh non ! Nous rencontrons des problèmes avec les webhooks de discord afin de vous inscrire... Nous ferons une annonce une fois ce systeme finit.')
}

function webhook()
{

  var email = document.getElementById('newsletter').innerHTML.toString()
  var xhr = new XMLHttpRequest()
  xhr.open(
    "POST",
    "https://discord.com/api/webhooks/897171558068543588/JV736Ps9fk9n0Bp8UxwZVEYuhMqT6XsYJlgW5VNaoXJgr0_csODBbWdMu-etJ1ugwsUG"
  )
  xhr.setRequestHeader('Content-Type', 'application/json')
  xhr.send(
    JSON.stringify({
      embeds: [{ color: 0, title: "Un nouvel abboné a la newletter !", description: `Email: ${email}` }],
    })
  )
}
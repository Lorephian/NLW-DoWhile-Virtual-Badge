const userInfo = {
  github: 'lorephian',
  youtube: 'channel/UCYrdl_BOt0Ev_qHGH_SIF0g',
  instagram: 'lorephian',
  facebook: 'guilherme.thomas.73',
  twitter: 'lorephian'
}
function changeUserInformationsOnBadge() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://www.${social}.com/${userInfo[social]}`
  }
}

changeUserInformationsOnBadge()

function getGithubUserData() {
  const url = `https://api.github.com/users/${userInfo.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      bio.textContent = data.bio
      githubLink.href = data.html_url
      profilePicture.src = data.avatar_url
      githubId.textContent = data.login
    })
}

getGithubUserData()

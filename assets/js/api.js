async function fetchProfile() {
  const url = 'https://raw.githubusercontent.com/Edcarloszaya/Portfolio_js/main/data/profile.json'
  const response = await fetch(url)
  const profileData = await response.json()
  return profileData
}


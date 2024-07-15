function updateInfo(profileData) {
  const profileName = document.getElementById("name");
  profileName.innerText = profileData.name;

  const profilePhoto = document.getElementById("photo");
  profilePhoto.src = profileData.photo;
  profilePhoto.alt = profileData.name;

  const profileJob = document.getElementById("job");
  profileJob.innerHTML = ` <img src="./assets/img/icons/job.svg"> ${profileData.job}`;

  const profileLocation = document.getElementById("location");
  profileLocation.innerHTML = ` <img src="./assets/img/icons/location.svg"> ${profileData.location}`;

  const profilePhone = document.getElementById("phone");
  profilePhone.innerHTML = ` <img src="./assets/img/icons/phone.svg"> <a href="tel:${profileData.phone}">${profileData.phone}</a>`;

  const profileEmail = document.getElementById("email");
  profileEmail.innerHTML = ` <img src="./assets/img/icons/email.svg"> <a href="mailto:${profileData.email}">${profileData.email}</a>`;
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("softSkills");
  softSkills.innerHTML = profileData.skills.softSkills
    .map((skill) => `<li>${skill}</li>`)
    .join("");
}

function updateLanguages(profileData) {
  const languagems = document.getElementById("languagen");
  languagems.innerHTML = profileData.languages
    .map(
      (languagen) =>
        `<li> <img src="/assets/img/icons/check.svg" alt="check"> ${languagen}</li>`
    )
    .join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("portfolio-list");
  portfolio.innerHTML = profileData.portfolio
    .map((project) => {
      return ` <li>
                    <h3> <img src="/assets/img/icons/github.svg" alt="github"> ${project.name}</h3>
                    <a href="${project.url}" target="_blank" >${project.url}</a>
                </li>  `;
    })
    .join("");
}

function updateExperiencia(profileData) {
  const experiencia = document.getElementById("experiencia-list");
  experiencia.innerHTML = profileData.professionalExperience
    .map((exp) => {
      return `  <li>${exp.description}</li>`;
    })
    .join("");
}

(async () => {
  const profileData = await fetchProfile();
  updateInfo(profileData);
  updateSoftSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  updateExperiencia(profileData);
})();

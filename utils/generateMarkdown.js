// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log("License rendered");
  if(license === 'None'){
    console.log("none")
    return `This project does not contain a License.`
  }
  else{
    console.log(license);
    return `This project uses the ${license} license.`
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let projectLicense = renderLicenseSection(response.license);
  return`

  
  # ${response.title}
  

  ## Table Of Contents

  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

  * [Contributors](#contributors)

  * [Tests](#tests)

  * [ScreenShots](#screenshots)

  * [Links](#links)

  * [Questions](#questions)

  ## Description

  ${response.description}
  
  ## Installation

  To run this application properly, you need to install ${response.installation}
  

  ## Usage
  
  ${response.usage}
  
  
  ## License
  
 ${projectLicense}
  
  
  ## Contributors
  
  The following helped make this project possible:

  ${response.contributors}
  
  
  ## Tests
  
  To test this application, enter ${response.tests} in the command line

  ## ScreenShots

  space for screenshot

  ## Links

  space for links
  
  
  ## Questions

  If you have any questions, comments, or issues feel free to contact ${response.userName} directly through
  
  email: ${response.userEmail}

  or check out my gitHub: ${response.userGitHub}
  `;
}

module.exports = generateMarkdown;
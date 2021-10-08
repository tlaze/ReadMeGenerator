// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'None'){
    console.log('No License Provided')
    return''
  }
  else{
    return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license){
    case 'MIT':
      return 'https://choosealicense.com/licenses/mit/'
      break;
    case 'Apache':
      return 'https://choosealicense.com/licenses/apache-2.0/#'
      break;
    case 'Mozilla':
      return 'https://choosealicense.com/licenses/mpl-2.0/'
      break;
    case 'GNU':
      return 'https://choosealicense.com/licenses/agpl-3.0/'
      break;
    default:
      return '#'; 
    
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'None'){
    return `nobody.`
  }
  else{
    return `${license}`
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  let projectLicense = renderLicenseSection(response.license);
  let licenseBadge = renderLicenseBadge(response.license);
  let licenseLink = renderLicenseLink(response.license);
  return`

  ${licenseBadge}
  
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
  
  This Project is licensed by [${projectLicense}](${licenseLink}).
  
  ## Contributors
  
  The following helped make this project possible:

  ${response.contributors}
  
  
  ## Tests
  
  To test this application, enter ${response.tests} in the command line

  ## ScreenShots

  ![Screenshots](${response.screenshots})

  ## Links

  Live application: ${response.liveapp}

  Project Repository: ${response.repository}
  
  
  ## Questions

  If you have any questions, comments, or issues feel free to contact ${response.userName} directly through
  
  email: ${response.userEmail}

  or check out my [GitHub](${response.userGitHub})

  `;
}

module.exports = generateMarkdown;
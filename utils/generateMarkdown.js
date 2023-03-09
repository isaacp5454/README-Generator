// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "The MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  }
  else if (license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  }
  else if
    (license === "Attribution License (BY)") {
    return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
  }
  else if
    (license === "Open Database License (ODbL)") {
    return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)"
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 if (license === "The MIT License") {
    return "[https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT)";
  }
  else if (license === "Mozilla Public License 2.0") {
    return "[https://opensource.org/licenses/MPL-2.0](https://opensource.org/licenses/MPL-2.0)"
  }
  else if
    (license === "Attribution License (BY)") {
    return "[https://opendatacommons.org/licenses/by/](https://opendatacommons.org/licenses/by/)"
  }
  else if
    (license === "Open Database License (ODbL)") {
    return "[https://opendatacommons.org/licenses/odbl/](https://opendatacommons.org/licenses/odbl/)"
  }
  return ""

 }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var link = renderLicenseLink(license)
  if (typeof license ==="undefined"){
    return ""
  }
  else {
   return "We used"+license + " , here is the link: "+ link

  }  
  
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  var badge = renderLicenseBadge(data.license)
  var license = renderLicenseSection(data.license)
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  
  ## Installation
  
  ${data.instructions}
  
  ## Usage
  
  ${data.usageInfo}
  ## License
  
  ${license}
  
  ## Badges
  
 ${badge}
  
  ## How to Contribute
  
  ${data.contributionGuidelines}
  
  ## Contact Us 
  [${data.email}](${data.email})
  [${data.githubUsername}](https://github.com/${data.githubUsername})
`;
}

exports.generateMarkdown=generateMarkdown;

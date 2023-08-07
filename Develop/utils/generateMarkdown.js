// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.Title}

## Description
${data.Description}


## Table of Contents



## Installation
${data.Installation}

## Usage
${data.Usage}

## Credits
${data.Credits}


## License
${renderLicenseLink(data.License)}
${renderLicenseSection(data.License)}


## Badges
${renderLicenseBadge(data.License)}

## Features
${data.Features}



## How to Contribute
${data.Contribute}


## Tests
${data.Tests}



`;
}

module.exports = generateMarkdown;

// Add Bootstrap and Fontawesome
const HTML = function (teamMembers) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Team Portfolio</title>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet">
<link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
<link  rel="stylesheet" href="./Styles/styles.css">
<style>
</style>
</head>
<body>
<div class="header">
<div class="jumbotron">
   <h1 class="display-4 yellow text-center">Employee Directory</h1>
</div>
</div>
<div class="container-body container-fluid">
   <div class="row">
        ${teamMembers} 
    </div>
</div>
<script src="https://kit.fontawesome.com/257de25400.js" crossorigin="anonymous"></script>  
</body>
</html>`

}

// Generates cards for each employee class based
const Profile = function (arr) {
    //Fontawesome Icons change based on role
    let positionIcon;
    //display info
    let positionInformation;

    if (arr.title === "Manager") {
        positionIcon = `<i class="fas fa-mug-hot"></i>`
        positionInformation = `Office Number: ${arr.officeNumber}`
    } else if (arr.title === "Engineer") {
        positionIcon = `<i class="fas fa-glasses"></i>`
        positionInformation = `GitHub Username: <a href="https://github.com/${arr.github}" target="_blank">${arr.github}</a>`
    } else if (arr.title === "Intern") {
        positionIcon = `<i class="fas fa-user-graduate"></i>`
        positionInformation = `School: ${arr.school}`
    }

    return `
    
<div class="col-md-4 col-sm-6 col-12 col-lg-3">
    <div class="card mb-5 bg-white">
        <div class="card-header">
            <h4 class="text-white text-center">${arr.name}</h4>
            <h4 class="text-white text-center">${positionIcon} ${arr.title}</h4>
        </div>
        <div class="card-body">
            <ul>
                <li>Employee ID: ${arr.id}</li>
                <li>Email: <a href="mailto:${arr.email}">${arr.email}</a></li>
                <li><i>${positionInformation}</i></li>
            </ul>
        </div>
    </div>
  </div>
`
}

exports.completedHTML = HTML;
exports.completedProfile = Profile;
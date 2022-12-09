function generateHTML(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.company} Team Profile</title>
    <link src="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">">
</head>

<body>
    <nav class="navbar bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">${data.company} Team Portfolio</span>
        </div>
    </nav>
    
    <h1>Team Members <span class="badge bg-secondary">New</span></h1>

    ${generateManagerCard(data)}

    ${generateEngineerCard(data)}

    ${generateInternCard(data)}

    <div class="card text-center">
        <div class="card-header">
          ${data.company}
        </div>
        <div class="card-body">
          <h5 class="card-title">${data.company} Website & Other Information</h5>
          <p class="card-text">www.${data.company}.com/</p>
          <a href="#" class="btn btn-primary">CLICK HERE!</a>
        </div>
        <div class="card-footer text-muted">
          2 days ago
        </div>
      </div> 

</body>
</html>
    `
}

function generateManagerCard(data) {
    return `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.manager}</h5>
    <p class="card-text">${data.managerId}</p>
    <a href="#" class="btn btn-primary">${data.managerEmail}</a>
    <a href="#" class="btn btn-primary">${data.officeNumber}</a>
  </div>
</div>
    `
}

function generateInternCard(data) {
     {
        return `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.internName}</h5>
    <p class="card-text">${data.internId}</p>
    <a href="#" class="btn btn-primary">${data.internEmail}</a>
    <a href="#" class="btn btn-primary">${data.school}</a>
  </div>
</div>
    `
    }
}

function generateEngineerCard(data) {
    {
        return `
    <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.engineerName}</h5>
    <p class="card-text">${data.engineerId}</p>
    <a href="#" class="btn btn-primary">${data.engineerEmail}</a>
    <a href="#" class="btn btn-primary">${data.github}</a>
  </div>
</div>
    `
    }
}

module.exports = generateHTML;
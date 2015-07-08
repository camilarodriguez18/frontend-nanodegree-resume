var bio = {
	"name":"Camila Rodriguez",
  "role":"Web Developer",
  "welcomeMessage":"At the intersection of Technology and Psychology", 
  "contacts": {
        "email":"mcamilagarcia@gmail.com",
        "github":"https://github.com/camilarodriguez18/",
        "location":"Mountain View, CA"
     },
    "bioPic":"images/bio.jpg",
    "skills":["HTML","Javascript","Web Accessibility","Web Development"]
    };

bio.display = function() {
  var formattedPic = HTMLbioPic.replace("%data%",bio.bioPic);
  $("#header").prepend(formattedPic);
  var formattedName = HTMLheaderName.replace("%data%",bio.name);
  $("#name").prepend(formattedName);
  var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
  $("#name").append(formattedRole);
  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%",bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%",contact);
    $("#topContacts").prepend(formattedContact);
    }
  var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
  $("#header").append(formattedWelcomeMsg);

  if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    }

  for (skill in bio.skills) {
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
    $("#skills").append(formattedSkill);
    }
  
  for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#footerContacts").append(formattedContact);
  }
}
var work = {
 "jobs":[
  {    
    "employer": "Center for the Advancement of Foodservice Education",
         "title": "Web Administrator", 
         "location": "Mountain View, CA", 
         "dates": "June 2008 - Present",
         "description": "Manage Online presence including website and social network"
    }, 
    {
      "employer": "NYC Early Childhood Professional Development Institute",
        "title": "Web Developer and Administrator", 
        "location": "New York, NY", 
        "dates": "April 2004 - June 2008",
        "description": "Create a web site in English and Spanish and establish online presence" 
    }
    ]
}     
work.display = function() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}
var projects ={
  "projects":[
    {
          "title": "Web Developer and Administrator",
          "dates": "2008- Present",
          "description":"For the last 8 years, I have been in charge of developing and administering the website for the Center for the Advancement Foodservice Education (CAFÉ). Including the implementation of several content management systems, implementing multiple iterations of different designs, testing for quality assurance, debugging website, troubleshooting as well as monitoring, reviewing and updating website traffic reports.",
          "images": ["images/cafe.jpg"]
    },
    {
          "title": "Website Collaborator and Administrator",
          "dates": "2004-2008",
          "description": "At the New York City Early Childhood Professional Development Institute within the City University of New York, I managed the implementation of the Institute’s first cold fusion web site working closely with consultants to create this online presence. After the web site was created, I solely administered the resource in English and Spanish for two years.",
          "images": ["images/pdi.jpg"]
    }, 
    {
          "title": "Accessibility Expert",
          "dates": "2009-Present",
          "description": "During the last 6 years, I have worked as a consultant for the Office of Child Care ensuring that pdf documents comply with all current accessibility standards and creating and evaluating HTML documents to assure 508 compliance. Also providing training and acting a source of expertise concerning Section 508 requirements.",
          "images": ["images/icf.jpg"]
    }          
    ]
  }
projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    
    var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    
    var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    
    var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    
    if (projects.projects[project].images.length>0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
} 
var education ={
"schools": [
	{
         "name": "Pontifical University of Commilas",
         "location": "Madrid, Spain",
         "degree": "Bachelor of Arts",
         "majors":["Psychology","Computer Science"],
         "dates":"2003",
         "url":"http//www.comillas.es"
     },
     {
     	"name": "Santa Clara University",
     	"location":"Santa Clara, CA",
     	"degree": "Masters",
     	"major":["Counseling Psychology"],
     	"dates":"2015",
     	"url":"https://www.scu.edu"
     }
    ],
"onlineCourses": [
	{
         "title": "Web Development Nanodegree",
         "school": "Udacity",
         "date": "2015",
         "url": "http://www.udacity.com"
     }
     ]
}
education.display = function() {
  for (school in education.schools) {
    $("#education").append(HTMLschoolStart);

    var formattedSchoolName = HTMLworkEmployer.replace("%data%", education.schools[school].name);
    var formattedDegree = HTMLworkTitle.replace("%data%", education.schools[school].degree);
    var formattedSchoolHeader = formattedSchoolName + formattedDegree;
    $(".education-entry:last").append(formattedSchoolHeader);
    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    for (major in education.schools[school].majors) {
      var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors[major]);
      $(".education-entry:last").append(formattedMajor);
    }
  }
  
  $("#education").append(HTMLonlineClasses);
  for (course in education.onlineCourses) {
    $("#education").append(HTMLschoolStart);

    var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
    var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
    var formattedOnlineHeader  = formattedTitle + formattedSchool;
    $(".education-entry:last").append(formattedOnlineHeader);
    
    var formattedDates = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedURL = HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
    $(".education-entry:last").append(formattedURL);
  }
}
bio.display();
education.display();
projects.display();
work.display();

var googleMap = '<div id="map"></div>';
$('#mapDiv').append(googleMap);
document.addEventListener("DOMContentLoaded", function() {

  // Ambil semua elemen dengan class "lesson"

  var lessonElements = document.getElementsByClassName("lesson");



  // Tambahkan event listener pada setiap elemen

  for (var i = 0; i < lessonElements.length; i++) {

    var lessonElement = lessonElements[i];

    var subjectNameElement = lessonElement.getElementsByTagName("h4")[0];

    var timeElement = lessonElement.getElementsByTagName("p")[0];

    subjectNameElement.addEventListener("click", function(event) {

      showTeacherName(event, timeElement);

    });

  }



  function showTeacherName(event, timeElement) {

    var clickedElement = event.target;

    var lessonElement = clickedElement.parentNode;

    var teacherName = getTeacherName(lessonElement);

    var lessonTime = timeElement.textContent;

    var currentTime = new Date();



    var lessonDate = new Date();

    var lessonTimeParts = lessonTime.split(" - ");

    var startTimeParts = lessonTimeParts[0].split(":");

    var endTimeParts = lessonTimeParts[1].split(":");



    lessonDate.setHours(startTimeParts[0]);

    lessonDate.setMinutes(startTimeParts[1]);

    lessonDate.setSeconds(0);



    if (lessonDate > currentTime) {

      var timeDifference = lessonDate - currentTime;

      var timeRemaining = getTimeRemaining(timeDifference);

      var message = "Mata pelajaran " + teacherName + " akan dimulai dalam " + timeRemaining;

      alert(message);

    } else if (lessonDate < currentTime) {

      alert("Mata pelajaran " + teacherName + " sudah berlalu.");

    } else {

      alert("Saat ini mata pelajaran " + teacherName + " sedang berlangsung.");

    }

  }



  function getTeacherName(lessonElement) {

    var subjectNameElement = lessonElement.getElementsByTagName("h4")[0];

    var subjectName = subjectNameElement.textContent;



    // Logika untuk mendapatkan nama guru berdasarkan nama mata pelajaran

    // Anda dapat menyesuaikan logika ini sesuai dengan data guru yang Anda miliki

    var teacherName = "";



    switch (subjectName) {

      case "Matematika":

        teacherName = "Guru Eni";

        break;

      case "Mata Pelajaran 2":

        teacherName = "Guru B";

        break;

      case "Mata Pelajaran 3":

        teacherName = "Guru C";

        break;

      default:

        teacherName = "Nama guru tidak ditemukan";

    }



    return teacherName;

  }

  function getTimeRemaining(timeDifference) {

    var seconds = Math.floor(timeDifference / 1000);

    var minutes = Math.floor(seconds / 60);

    seconds = seconds % 60;

    var hours = Math.floor(minutes / 60);

    minutes = minutes % 60;

    var days = Math.floor(hours / 24);

    hours = hours % 24;



    var timeRemaining = "";

    if (days > 0) {

      timeRemaining += days + " hari ";

    }

    if (hours > 0) {

      timeRemaining += hours + " jam ";

    }

    if (minutes > 0) {

      timeRemaining += minutes + " menit ";

    }

    if (seconds > 0) {

      timeRemaining += seconds + " detik";

    }



    return timeRemaining;

  }

});



function myFunction() {

  var x = document.getElementById("myLinks");

  if (x.style.display === "block") {

    x.style.display = "none";

  } else {

    x.style.display = "block";

  }

                                                         

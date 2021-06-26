
/* for linkedin url */
a = document.getElementById('linkedinUrl');
a.setAttribute("href", "https://www.linkedin.com/in/mitayan/")

/* for github url */
b = document.getElementById('githubUrl');
b.setAttribute("href", "https://github.com/milyastayan")

/* for get button */

function getFunc() {

	/* define variables */

	var name = "Muhammed Ilays TAYAN";
	var age = new Date().getFullYear() - 1996;

/* get the values after click */

  document.getElementById("nameSurname").innerHTML = name;
  document.getElementById("age").innerHTML = age;

/* hide the button after click */
  document.getElementById('btn').style.display = "none";

}
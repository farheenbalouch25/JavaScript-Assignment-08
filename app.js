
// chapter 43 to 48

// question 3

function DeleteRow(btn){
var row = btn.closest("tr");
row.remove();

}

// question 5

// function increase(btn){
//     var value= parseInt(btn.innerText);
//     value++;
//     btn.innerText= value;
// }

// function decrease(btn){
//       var value= parseInt(btn.innerText);
//     value--;
//     btn.innerText= value;
// }

// chapter 49 to 52

//    <!-- question 1 -->
  document.getElementById("signupform").addEventListener("submit", function(e){
      e.preventDefault();

      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

      document.getElementById("result").innerHTML = `  
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>
      `;
    });


// question 2

function Readtext() {
      var moreText = document.getElementById("moreText");
      var btn = document.getElementById("readBtn");

      if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btn.innerText = "Read Less";
      } else {
        moreText.style.display = "none";
        btn.innerText = "Read More";
      }
    }



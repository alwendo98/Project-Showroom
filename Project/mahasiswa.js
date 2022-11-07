let tableCont = document.querySelector('#table-cont');
  function postToRest() {
    let nim = document.getElementById("nim").value;
    let name = document.getElementById("name").value;
    let dob = document.getElementById("dob").value;
    let address = document.getElementById("address").value;
    let gender = document.getElementById("gender").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
   
        
        fetch('http:', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nim: nim,
                Nama: name,
                TglLahir: dob,
                Address: address,
                JenisKelamin: gender,
                Username: username,
                Password: password                
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
          
    }
   

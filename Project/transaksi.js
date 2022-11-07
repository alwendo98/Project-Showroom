function postToRest() {
    let idTransaksi = document.getElementById("idTransaksi").value;
    let kdsal = document.getElementById("kdsal").value;
    let kdKenda = document.getElementById("kdKenda").value;
    let idCustomermotor = document.getElementById("idCustomermotor").value;
    let nmCustomer = document.getElementById("nmCustomer").value;
    let noFaktur = document.getElementById("noFaktur").value;
    let tglTransaksi = document.getElementById("tglTransaksi").value;
   
        
        fetch('http://localhost:8296/api/transaksiMotor/addTransaksiMotor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                idTransaksi : idTransaksi,
                kdsal: kdsal,
                kdKenda: kdKenda,
                idCustomermotor: idCustomermotor,
                nmCustomer: nmCustomer,
                noFaktur: noFaktur,
                tglTransaksi: tglTransaksi                
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data));
          
    }

   

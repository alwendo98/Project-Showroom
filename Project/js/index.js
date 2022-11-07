let tableCont = document.querySelector('#table-cont');

fetch('http://localhost:8194/api/tableSales', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
})
    .then((response) => response.json())
    .then((data) => {
        let thead = '<tr><th>Kode Sales</th><th>Nama Sales</th><th>Jenis Kelamin</th><th>Umur</th><th>Alamat</th><th>Id Transaksi Motor</th></tr>';

        data.forEach((element) => {
            thead += '<tr><td>' + element.kdSal + '</td><td>' + element.nameSal + '</td><td>' + element.jnskel + '</td><td>'  + element.ageSal + '</td><td>' + element.addresSal + '</td><td>'  + element.idtransaksimotor + '</td></tr>';
        });
        tableCont.innerHTML = thead;
    });



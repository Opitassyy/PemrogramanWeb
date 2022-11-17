// console.log("Selamat Pagi")

// //Variabel
// let npm = 2125250096
// let nama = "Bebin Paula"
// let arrayMahasiswa = ["Opita", "Dhea"]
// let arrayDosen = Array("Silvi", "Azzar")
// //Objek
// let mahasiswa = { npm: 2125250103, nama: "Opita", hobi: ["ngoding", "gaminng", "reading"]}

// console.log(arrayMahasiswa[0])
// console.log(arrayDosen[1])
// console.log(mahasiswa.nama) // output 
// console.log(mahasiswa.hobi[0]) // output ngoding

let txtNpm = document.getElementById("npm")
let txtNama = document.getElementById("nama")
let listMhs = document.getElementById("listMahasiswa")
let tblMhs = document.getElementById("tblMahasiswa")

let data = []
//panggil function tampil()
tampil()

function simpan (){
    console.log("Button simpan ditekan")
    console.log(txtNpm.value)
    console.log(txtNama.value)

    // simpan object ke array data
    data.push({"npm" : txtNpm.value,"nama" : txtNama.value}
    )

    //cek apakah ada data di dalam localStorage dengan key 1sMahasiswa
    if (localStorage.getItem("lsMahasiswa")===null){
        //jika localstorge dengan key 1sMahasiswa belum ada
        
        //simpan localstorge dengan key 1sMahasiswa
        localStorage.setItem("lsMahasiswa", JSON.stringify(data))
    
    }else{
        //jika localstorage dengan key lsMahasiswa sudah ada/sudah di simpan sebelumnya

        //ambil dulu data di localstorage dengan key 1sMahasiswa
        let dataLs = JSON.parse(localStorage.getItem("lsMahasiswa"))
        console.log(dataLs)

        //push data baru ke dalam array
        dataLs.push({"npm" : txtNpm.value, "nama" : txtNama.value})
        
        //simpan data baru ke dalam localstorage
        localStorage.setItem("lsMahasiswa", JSON.stringify(dataLs))
    }

    //panggil function tampil()
    tampil()
}

function tampil(){
    // clear elemen listMahasiswa
    listMhs.innerHTML = ""
    //gunakan forEach
    data.forEach(listData)

    //clear elemen tblMahasiswa
    tblMhs.innerHTML=""
    //ambil data localstorage dengan key lsMahasiswa
    let dataTampil = JSON.parse(localStorage.getItem("lsMahasiswa"))
    dataTampil.forEach(listData)
}

function listData(item, index) {
    //innerHTML elemen ul id = "listMahasiswa" pada index.html
    listMhs.innerHTML += "<li class='list-group-item'>" + item.npm + "-" + item.nama  + "</li>"

    //innerHTML elemen table id = "tblMahasiswa" pada index.html
    tblMhs.innerHTML += `<tr><td>${item.npm}</td><td>${item.nama}</td><tr>`
}





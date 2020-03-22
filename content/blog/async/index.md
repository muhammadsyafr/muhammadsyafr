---
title: Synchronous dan Asynchronous
date: "2019-09-06T23:46:37.121Z"
---

Synchronous dan Asynchronous ini merupakakan salah satu fundamental pada javascript, memang butuh sedikit waktu untuk memahami teknik asynchronous ini, tetapi sebetulnya tanpa kita sadari kita sering melakukan teknik asynchronous ini, contoh yang paling sering mungkin ketika kita *melakukan request AJAX, event, listener, setTime dll*

Jadi?? apa sebenenarnya teknik asynchronous atau sering disebut dengan async itu?

Dalam dunia programming kedua istilah ini digunakan untuk membedakan tentang cara urutan eksekusi perintah-perintah yang ada dalam kode anda.

**Synchronous** adalah hal paling umum yang paling dimengerti, misalnya synchronous itu dianalogikan ketika kita sedang *mengantri* pasti jika kita mendapat urutan pertama pasti akan di layani pertama, begitupun seterusnya sampai urutan mengantri selesai, itulah konsep synchronous`

    console.log('antrian 1')
    console.log('antrian 2')
    console.log('antrian 3')
maka jelas outputnya adalah sebagai berikut : 

    //output
    antrian 1
    antrian 2
    antrian 3
nah proses diatas disebut **blocking**, karena *memproses urutan yang terdefinisi lebih dulu* ketimbang proses baru dibawahnya

Sedangkan **Asynchronous** merupakan kebalikan dari proses synchronous
karena hasil eksekusi tidak berdasarkan urutan, bisa saja kita memprioritaskan atau bisa juga menunda outputnya. Eksekusi dengan asynchronous tidak akan membloking atau menunggu suatu perintah sampai selesai, kode dibawah adalah sedikit gambaran dari apa itu asynchronous

    console.log('antrian 1')
    setTimeout(()=>{ console.log('antrian 2'},100 ) //menunda selama 100ms
    console.log('antrian 3')
jadi outputnya sebagai berikut :

    antrian 1
    antrian 3
    antrian 2
Catatan : 
output dari kode diatas tidak berurutan karena adanya proses asynchronous yaitu penggunaan setTimeout yang berarti waktu dari proses *antrian 2* **ditunda** selama 100ms, sehingga antrian 3 dieksekusi terlebih dahulu

Dari contoh diatas model eksekusi asynchronous lebih effisien.
tetapi ada suatu kondisi dimana asynchronous membutuhkan pertimbangan dalam penggunaanya, yaitu kondisi **Race Condition** kondisi ini terjadi ketika ada satu perintah yang bergantung pada perintah lain, seperti contoh dibawah ini :

    let user = requestAJAX()
    displayUser(user)

Dari contoh kode diatas besar kemungkinan _displayUser_ menampilkan data kosong, karena belum tentu output dari ekskusi _requestAJAX_ sudah selesai.

Solusi untuk problem diatas yaitu menggunakan teknik *callback*, *promise*, *generator* atau *async/await* yang akan kita bahas di sesi berikutnya.



    




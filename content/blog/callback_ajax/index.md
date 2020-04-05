---
title: Callback dan AJAX
date: "2020-03-01T23:46:37.121Z"
---

### Callback

Callback bisa dipahami dengan arti **memanggil** **kembali** code sebagai function biasanya function tersebut bersifat asynchronous, dengan adanya callback ini maka kita bisa menerima informasi / data yang dibutuhkan dari proses asynchronous tersebut.

Callback juga bisa disebut teknik memasangkan beberapa tugas atau function agar berjalan berurutan. Ada banyak contoh function bawaan dari javascript yang bersifat ascync, seperti setTimeout, setInterval dll

>dibawah ini merupakan kode yang menggunakan fungsi setTimeout

    function callback(){
    	console.log('hello world');
    }
    
    //async function
    function onClick(){
    	setTimeout(function(){ 
    		callback();
    	}, 3000);
    }

---

> Output dari kode diatas yaitu ' hello world ' yang akan muncul 3 detik setelah fungsi onClick() dijalankan

### AJAX

Asynchronous javascript and XML apa itu? 

ajax dapat digunakan untuk mengambil data dari server atau client side render sehingga web yang memakai ajax bisa dikatan responsif, dengan menggunakan ajax kita bisa memisahkan kerja dari frontend dan backend, dimana frontend menyediakan tampilanya serta backend yang mengirim datanya, nah peran dari ajax disini adalah menampilkan data dari backend dan ditampilkan di frontend nya tanpa merefresh ulang atau mereload suatu halaman website.

![Ajax](https://i.ibb.co/74H81Rk/ajax.png)

    MEMBUAT AJAX
    
    const ajax = new XMLHttpRequest(); //deklarasikan ajax

    CONTOH GET DATA DENGAN AJAX
    
    function getData(){
    	const url = 'url_to_get_your_data';
    	const ajax = new XMLHttpRequest(); 
    	ajax.open('GET', url);
    	ajax.send();
    
    	ajax.responseText; //untuk mengembalikan response get data tsb
    }
    

---
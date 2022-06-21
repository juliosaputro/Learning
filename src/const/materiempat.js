const materiempat = [
  {
    id: "1",
    bab: "Bab 4",
    judul: "Arithmetic Logic Unit ( ALU )",
    des1: "\t\tALU (Arithmetic Logic Unit) adalah salah satu bagian dari sebuah mikroprosesor yang berfungsi untuk melakukan operasi hitungan aritmetika dan logika. Contoh operasi aritmetika adalah operasi penjumlahan dan pengurangan, sedangkan contoh operasi logika adalah logika AND dan OR.\nTugas utama dari ALU adalah melakukan semua perhitungan anitmetika yang terjadi sesuai dengan instruksi program. ALU melakukan operasi aritmetika dengan dasar pertambahan, sedang operasi aritmetika yang Iainnya seperti pengurangan, perkalian, dan pembagian, dilakukan dengan dasar penjumlahan. Karena itu, sirkuit elektronik di ALU yang digunakan untuk melaksanakan operasi aritmetika ini disebut adder. Tugas lain dari ALU adalah melakukan keputusan dan operasi logika sesuai dengan instruksi program. Operasi logika (logical operation) meliputi perbandingan dua buah elemen logika dengan menggunakan operator logika, yaitu:\n\n1.\tsama dengan (=)\n2.\ttidak sama deugan (<>)\n3.\tkurang dari (< )\n4.\tkurang atau sama dengan dari ,(<=)\n5.\tIebih besar dari (>)\n\nRangkaian pada ALU yang digunakan untuk menjumlahkan bilangan dinamakan dengan Adder.Adder digunakan untuk memproses operasi aritmetika. Adder juga disebut rangkaian kombinasional aritmetika. Ada 3 jenis adder:\n\n1.\tRangkaian Adder dengan menjumlahkan dua bit disebut Half Adder.\n2.\tRangkaian Adder dengan menjumlahkan tiga bit disebut Full Adder.\n3.\tRangkaian Adder dengan menjumlahkan banyak bit disebut Parallel Adder.\n",
  },
  {
    id: "2",
    bab: "Bab 4",
    judul: "Rangkaian Half Adder",
    des1: "\t\tHalf adder adalah suatu rangkaian penjumlahan sistem bilangan biner yang  paling sederhana. Rangkaian ini hanya dapat digunakan untuk operasi penjumlahan data bilangan biner sampai 1 bit saja. Rangkaian Half Adder memiliki 2 terminal input untuk 2 variabel bilangan biner dan 2 terminal output, yaitu summary out (SUM) dan carry out (CARRY).\nHalf Adder (HA) adalah rangkaian penjumlahan sistem bilangan biner yang paling sederhana. Rangkaian ini hanya dapat digunakan untuk melakukan operasi penjumlahan dua bilangan biner 1 bit. Rangkaian half adder memiliki dua terminal input untuk 2 variabel bilangan biner dan 2 terminal output, yaitu summary out (sum) dan carry out (carry). Aturan-aturan untuk melakukan penambahan biner dua bit diilustrasikan sebagai berikut:\nAturan 1\t0 + 0 = 0\nAturan 2\t0 + 1 = 1\nAturan 3\t1 + 0 = 1\nAturan 4\t1 + 1 = 0 dan carry 1 = 10\n\nTiga aturan pertama mudah dimngerti, sedangkan aturan 4 menyatakan bahwa penjumlahan biner 1 + 1 = 10 (desimal 2). Angka 1 hasil penjumlahan dibawa ke kolom yang mempunyai tingkatan lebih tinggi, dan dikatakan terdapat carry.\nRancangan diagram logika menggunakan XOR dan AND, masukan diberikan simbol A dan B sedangkan keluaran diberi simbol ∑ yang berarti jumlah (SUM) dan Simbol Co berarti bawaan keluar (Carry Out). Diagram logika dan penambahan setengah (half adder) dengan input A dan B, simbol half adder dan tabel kebenaran diberikan pada gambar berikut.\n",
    des2:"\n\t\tTabel 2.3 Operator Logika",
    des3:"\t\t",
    des4:"",
    tabel:require("../../src/assets/materi/bab4/4.1.jpg"),
  },
  {
    id: "3",
    bab: "Bab 4",
    judul: "Rangkaian Full Adder",
    des1: "\t\tFull Adder adalah rangkaian elekronik yang bekerja melakukan perhitungan penjumlahan penuhdari dua buah bilangan biner yang masing-masing terdiri dari satu bit. Rangkaian ini memiliki 3input dan 2 output, salah satu input merupakan nilai dari pindahan penjumlahan, kemudian sama seperti pada hafl adder salah satu outputnya dipakai sebagai tempat nilai pindahan dan yang lain sebagai hasil dari penjumlahan.\nRangkaian full adder (FA) dapat digunakan untuk menjumlahkan bilangan biner yang lebih dari 1 bit. Rangkaian Full Adder dapat dibentuk oleh gabungan 2 buah rangkaian half adder dan sebuah gerbang OR untuk menjumlahkan carry output. Pada penambahan penuh muncul aturan kelima yang menyatakan suatu penjumlahan setengah tidak akan bekerja bila muncul carry-in. Oleh karena itu penambahan penuh mempunyai tiga masukan yaitu A, B dan C-in, sedangkan keluaran adalah SUM dan Co (carry out). Diagram logika dari full adder dan tabel kebenaran disajikan pada gambar berikut, untuk simulasi bisa digunakan software electronic workbench.\n",
    tabel:require('../../src/assets/materi/bab4/4.2.jpg'),
    tabel1:require('../../src/assets/materi/bab4/4.3.jpg'),
  },
  {
    id: "4",
    bab: "bab 4",
    judul: "Rangkaian Penjumlahan dan Pengurangan (Ripple Carry Adder)",
    des1:"\n\t\tA.\tPenjumlahan\n\nALU tidak memproses bilangan desimal melainkan bilangan biner. Sebelum dapat memahamirangkaian-rangkaian di dalam sebuah ALU kita harus mempelajari bagaimana penjumlah bilangan biner itu dilaksanakan.\nAda lima aturan penjumlahan yang harus diingat, yaitu:\n0 + 0\t= 0\n0 + 1\t= 1\n1 + 0\t= 1\n1 + 1\t= 0 / + 1 sebagai simpanan (carry)\n1 + 1 + 1\t= 1 / + 1 sebagai simpanan\nUntuk bilangan biner yang lebih besar, sebagaimana halnya dalam bilangan desimal, penjumlahan biner juga dilakukan kolom demi kolom.\n\nContoh:\n11011\n11010\n \t+\n?\n\nKita mulai dari kolom yang bernilai kecil (least sigfinicant bit) sehingga:\n11011\n11010\n \t\t+ 1\n\nBerikutnya jumlahkan bit-bit kolom kedua, ketiga dan keempat sebagai berikut.\n11011\n11010\n \t+ 111111\n\nContoh\nJumlahkan bilangan biner 01010111 dan 00110101! Jawaban:\n \n\n01010111\n00110101\n \t+ 10001100\n",
  },
  {
    id: "5",
    bab: "bab 4",
    judul: "Rangkaian Penjumlahan dan Pengurangan (Ripple Carry Adder)",
    des1:"\n\t\tB.\tPengurangan\nUntuk mengurangkan bilangan biner diberlakukan aturan sebagai berikut. 0 - 0\t= 0\n1 - 0\t= 1\n1 - 1\t= 0\n0 - 1\t= 1\nUntuk pengurangan bilangan biner yang lebih besar dapat dilakukan dengan cara berikut.\nContoh:\n111\n101\n \t - 010\nDari kolom paling kanan, 1 - 1 = 0, kemudian 1 - 0 - 1 dan akhirnya 1 - 1 = 0\n1101\n1010\n \t- 0011\n\nDalam kolom bernilal kecil (Least Sigfinicant Bit), 1 - 0 = 1, pada kolom kedua kita harusmeminjam dan kolom berikutnya sehingga 10 -1 = 1. Pada kolom ketiga menjadi 0 - 0 = 0 dan kolom keempat 1 — 1 = 0. Pengurangan Iangsung seperti contoh di atas telah diterapkan dalam operasi komputer. Namun pengurangan dapat pula dilakukan dengan cara berbeda yang akan dibahas juga di bab ini.\n",
    des2:"\n\t\t",
    des3:"\n\t\tDengan sifat yang demikian, maka dapat disimpulkan bahwa output dari gerbang NOT selalu berlawanan dengan inputnya. Jadi dapat disimpulkan bahwa NOT di NOT-kan lagi akan kembali ke kondisi semula (kondisi sama dengan input). Secara aljabar Boolean dapat ditulis: Y = A‘ = A\n",
    image: require("../../src/assets/book.png"),
    tabel:require("../../src/assets/materi/bab2/gambarC1.1.jpg"),
  },
  {
    id: "6",
    bab: "bab 4",
    judul: "Transistor-Transistor Logic ",
    des1:"\n\t\tA. Tansistor-Transistor Logic ( TTL )\nTransistor-Transistor Logic (TTL) adalah salah satu teknologi IC yang paling hanyak digunakansecara luas saat ini. TTL adalah IC digital yang digunakan untuk peralatan komputer, kalkulatordan sistem kontrol elektronik. IC digital bekerja dengan dasar pengoperasian bilangan Biner logic (bilangan dasar 2), yaitu hanya mengenal dua kondisi saja 1(on) dan 0 (off). Jenis IC digital terdapat 2 (dua) jenis, yaitu TTL dan CMOS. Jenis IC- TTL. dibangun dengan menggunakan transistor sebagai komponen utamanya dan fungsinya digunakan untuk berbagai variasi Logic, sehingga dinamakan Transistor- Transistor Logic. Dalam satu kemasan IC terdapat beberapa macam gate (gerbang) yang dapat melakukan berbagai macam fungsi logic seperti AND, NAND, OR, NOR, XOR serta beberapa fungsi logika lainnya seperti Decoder, Encoder, Multiplexer, dan Memory sehingga pin (kaki) IC jumlahnya banyak dan bervariasi ; ada yang berkaki 8, 14, 16, 24, dan 40.\n",
    des2:"\n\t\t",
    des3:"\n\t\tSemua mikroprosesor tidak hanya mampu melaksanakan operasi-operasi aritmetika saja, tetapijuga mampu melaksanakan operasi-operasi logika. Kedua operasi ini dilaksanakan di dalam Aritmatic Logic Unit (ALU) yang terdapat pada seluruh mikroprosesor. Ada tiga dasar operasi logika yaltu,\nA ˄ B (Operasi AND) A ˅ B (Operasi OR)\nA ˅B (Operasi EX-OR)\nKeluaran dan ALU diatur oleh kombinasi input pengontrol tambahan S5 dan S6 seperti tabelberikut ini.\n",
    tabel:require("../../src/assets/materi/bab4/4.4.jpg"),
    tabel1:require("../../src/assets/materi/bab4/4.5.jpg"),
  },
  // {
  //   id: "7",
  //   bab: "bab 4",
  //   judul: "B.	Fungsi Gerbang NOR ( NOT OR )",
  //   des1:"\n\t\tOperasi gerbang NOR sama seperti dengan gerbang OR, tetapi bedanya keluarannya diinverterkan (dibalikkan). Disini Anda dapat membedakan gerbang NOR dan gerbang OR dengan membedakan outputnya. Simbol untuk gerbang NOR ini seperti dengan OR-Inverter, simbol diperlihatkan pada Gambar dibawah ini :\n",
  //   des2:"\n\t\t",
  //   des3:"\n\t\tSimbol gerbang NOR ini serupa dengan OR-Inverter dengan A = O, B = O akan menghasilkan output 1. Persamaan boolean untuk fungsi NOR adalah Y = A + B dengan kata lain Y akan bernilai 0 bila A atau B = 1.",
  //   tabel:require("../../src/assets/materi/bab2/gambar2.4.4.jpg"),
  // },
  // {
  //   id: "8",
  //   bab: "bab 4",
  //   judul: "C.	Fungsi EX – OR Gate ( Gerbang EX-OR )",
  //   des1:"\n\t\tEX-OR singkatan dan Exclusive OR di mana jika input berlogika sama maka output akan berlogika 0 dan sebaliknya jika input berlogika beda maka output akan berlogika Rangkaian EX-OR disusun dengan menggunakan gerbang AND, OR, dan NOT.",
  //   des2:"\n\t\t",
  //   des3:"\n\t\t",
  //   tabel:require("../../src/assets/materi/bab2/gambar2.4.5.jpg"),
  // },
  // {
  //   id: "9",
  //   bab: "bab 4",
  //   judul: "D.	Fungsi EX-NOR",
  //   des1:"\n\t\tGerbang EX-NOR akan memberikan output berlogika 0 jika inputnya berlogika beda, dan akan berlogika 1 jika kedua Inputnya berlogika sama. Rangkaian EX-NOR disusun dengan menggunakan gerbang AND, OR, NOT.",
  //   des2:"\n\t\t",
  //   des3:"\n\t\tTabel kebenaran EX-NOR memberikan keluaran 1 apabila kedua inputnya sama dan akan memberikan keluaran 0 apabila kedua inputnya berbeda.\n",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/bab2/gambar2.4.6.jpg"),
  //   tabel1:require("../../src/assets/materi/bab2/gambar2.4.7.jpg"),
  // },
  // {
  //   id: "10",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Desimal ke Sistem Bilangan Oktal",
  //   des1:"\n\t\tUntuk mengkonversikan bilangan desimal kebilangan oktaI dapat dipergunakan remainder method dengan pembaginya adalah basis dari bilangan oktal tersebut, yaitu 8. Misalnya bilangan desimal 385, dalam bilangan oktal bernilai:",
  //   des2:"\n\t\t",
  //   des3:"\n\t\t",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/destooctal.jpg"),
  // },
  // {
  //   id: "11",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Desimal ke Sistem Bilangan Heksadesimal",
  //   des1:"\n\t\tDengan menggunakan remainder method, dengan pembaginya adalah basis dari bilangan heksadesimal, yaitu 16, maka bilangan desimal dapat dikonversikan ke bilangan heksadesimal. ",
  //   des2:"\n\t\t",
  //   des3:"\n\t\t",
  //   des4:"\n\t\t",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/destoheksa.jpg"),
  // },
  // {
  //   id: "12",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Biner ke Sistem Bilangan Desimal",
  //   des1:"\n\t\tDari bilangan biner dapat dikonversikan ke bilangan desimal dengan cara mengalikan masing - masing bit dalam bilangan dengan nilai tempatnya.",
  //   des2:"t",
  //   des3:"",
  //   des4:"",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/binertodes.jpg"),
  // },
  // {
  //   id: "13",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Biner ke Sistem Bilangan Oktal",
  //   des1:"\n\t\tKonversi dari bilangan biner ke bilangan oktal dapat dilakukan dengan mengkonversikan tiap- tiap tiga buah digit biner. Misalnya, bilangan biner 11010100 dapat dikonversikan ke oktal dengan cara :\n\n11 / 3\t\t 010 / 2\t\t100 / 4\n\nHubungan ini dapat dilihat pada tabel dibawah ini.\n",
  //   des2:"\n\t\tTabel 1.7 Konversi Bilangan Oktal",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/bintooctal.jpg"),
  // },
  // {
  //   id: "14",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Biner ke Sistem Bilangan Heksadesimal",
  //   des1:"\n\t\tKonversi dari bilangan biner ke bilangan heksadesimal dapat dilakukan dengan mengkonversikan tiap-tiap empat buah digit biner.Misalnya bilangan biner 11010100 dapat dikonversikan ke bilangan heksadesimal dengan cara\n\n1101/D\t\t 0100/4\n\nHubungan ini dapat dilihat pada tabel berikut.\n",
  //   des2:"\n\t\tTabel 1.8 Konversi bit bilangan Heksadesimal",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/bintoheksa.jpg"),
  // },
  // {
  //   id: "15",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Oktal ke Sistem Bilangan Desimal",
  //   des1:"\n\t\tBilangan oktal dapat dikonversikan ke bilangan desimal dengan cara mengalikan masing-masing bit dalam bilangan dengan nilai tempatnya.",
  //   des2:"\n\n\t\t",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/octaltodes.jpg"),
  // },
  // {
  //   id: "16",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Oktal ke Sistem Bilangan Biner",
  //   des1:"\n\t\tKonversi dan bilangan oktal ke bilangan biner dapat dilakukan dengan mengkonversikanmasing-masing digit oktal ke 3 digit biner, sebagai berikut.",
  //   des2:"\n\t\t",
  //   des3:"\n\n\n\t\t",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/octaltobiner.jpg"),
  // },
  // {
  //   id: "17",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Oktal ke Sistem Bilangan Heksadesimal",
  //   des1:"\n\t\tKonversi dan bilangan oktal ke bilangan heksadesimal dapat dilakukan dengan cara mengubah dari bilangan oktal menjadi bilangan biner terlebih dahulu, kemudian dikonversikan kebilanganheksadesimal. Misalnya, bilangan oktal 2537, akan dikonversikan ke heksadesimal, dengan langkah-langkahberikut ini.",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/octaltoheksa.jpg"),
  // },
  // {
  //   id: "18",
  //   bab: "bab 4",
  //   judul: "Konversi Bilangan Heksadesimal ke Sistem Bilangan Desimal",
  //   des1:"\n\t\tDari bilangan heksadesimal dapat dikonversikan ke bilangan desimal dengan cara mengalikanmasing-masing digit bilangan dengan nilai tempatnya.",
  //   des2:"\n\t\t",
  //   des3:"\n\t\tUntuk mengkonversikan bilangan heksadesimal ke bilangan desimal, dapat dengan bantuan table berikut.\n\nTabel 1.9 Hubungan nilai heksadesimal di posisi tertentu dengan nilai desimal",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/heksatodes.jpg"),
  //   tabel1:require("../../src/assets/materi/heksatodes1.jpg"),
  // },
  // {
  //   id: "19",
  //   bab: "bab 4",
  //   judul:"Konversi Bilangan Heksadesimal ke Sistem Bilangan Biner",
  //   des1:"\n\t\tKonversi dan hilangan heksadesimal ke sistem bilangan biner dapat dilakukan denganmengkonversikan masing-masing digit heksadesimal ke 4 digit biner sebagai berikut.",
  //   des2:"\n\t\t",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/heksatobiner.jpg"),
  // },
  // {
  //   id: "20",
  //   bab: "bab 4",
  //   judul:"Konversi Bilangan Heksadesimal ke Sistem Bilangan Oktal",
  //   des1:"\n\t\tKonversi dan bilangan heksadesimal ke bilangan oktal dapat dilakukan dengan cara mengubah dari bilangan heksadesimal menjadi bilangan biner terlebih dahulu, baru dikonversikan ke bilangan oktal.Misalnya bilangan heksadesimal 55F, akan dikonversikan ke oktal dengan Iangkah-Iangkah:",
  //   des2:"\n\t\t",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/heksatooctal.jpg"),
  // },
  // {
  //   id: "21",
  //   bab: "bab 4",
  //   judul: "Bentuk BCD ( Binary Coded Decimal)",
  //   des1:"\n\t\tBCD merupakan sistem sandi dengan 6 bit, sehingga kombinasi yang dapat digunakan sebagai sandi banyaknya adalah 2 pangkat 6 sama dengan 64 kombinasi. Pada transmisi sinkron sebuah karakter dibutuhkan 9 bit, yang terdiri dari 1 bit awal, 6 bit data, 1 bit paritas dan 1 bit akhir. (Kristanto, 2003, hal. 97)\n\n\t\tBCD (Binary Coded Decimal) merupakan kode biner yang digunakan hanya untuk mewakili nilai digit desimal saja, yaitu nilai angka 0 sampai dengan 9. BCD menggunakan kombinasi dari 4 bit, sehingga sebanyak 16 (24 = 16) kemungkinan kombinasi yang bisa diperoleh dan hanya 10 kombinasi yang digunakan.\n",
  //   des2:"\n\t\tTabel 1.10 BCD 4-bit",
  //   des3:"\n\t\tBilangan desimal pada setiap tempat dapat terdiri dari 10 bilangan yang berbeda- beda. Untuk bilangan biner, bentuk dari 10 elemen yang berbeda-beda memerlukan 4 bit. Sebuah BCD mempunyai 4 bit biner untuk setiap tempat bilangan desimal.",
  //   des4:"\n\t\tDalam contoh ini BCD terdiri dan 3 kelompok bilangan masing-masing terdiri dari 4 bit, dan jika bilangan desimal tersebut dikonversi ke dalam bilangan biner secara langsung adalah 31710 = 1001111012 dan hanya memerlukan 9 bit. Untuk contoh proses sebaliknya dapat dilihat di bawah ini.",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/bcd.jpg"),
  //   tabel1:require("../../src/assets/materi/bcd1.jpg"),
  //   tabel2:require("../../src/assets/materi/bcd2.jpg"),
  // },
  // {
  //   id: "22",
  //   bab: "bab 4",
  //   judul:"Bentuk BCH ( Binary Coded Hexadecimal)",
  //   des1:"\n\t\tBilangan heksadesimal dalam setiap tempat dapat terdiri dari 16 bilangan yang berbeda-beda angka dan huruf. Bentuk biner untuk 16 elemen memerlukan 4 bit.",
  //   des2:"\n\t\tTabel 1.11 BCH",
  //   des3:"\t\tSebuah BCH mempunyai 4 bit biner untuk setiap tempat bilangan heksadesimal.",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/bch.jpg"),
  //   tabel1:require("../../src/assets/materi/bch1.jpg"),
  // },
  // {
  //   id: "23",
  //   bab: "bab 4",
  //   judul:"ASCII Code-American Standard Code-for Information Interchange",
  //   des1:"\n\t\tDalam bidang komputer mikro, ASCII Code mempunyai arti yang sangat khusus, yaitu untuk mengkodekan karakter (huruf, angka, dan tanda baca yang Iainnya). Kode- kode ini merupakan kode standar yang dipakai oleh sebagian besar sistem komputer mikro. Selain huruf, angka dan tanda baca yang terdiri dari 32 karakter (contoh: ACK, NAK), ASCII Code merupakan kontrol untuk keperluan transportasi data. Di bawah ini adalah tabel 7 bit ASCII Code beserta beberapa penjelasan yang diperlukan.",
  //   des2:"\n\t\tTabel 1.12ACII Code 7 bit",
  //   des3:"\t\tASCII merupakan sandi 7 bit, sehingga terdapat 2 pangkat 7 yang berarti ada 128 macam simbol yang dapat disandikan dengan sistem sandi ini, sedangkan bit ke 8 merupakan bit paritas. Sandi ini dapat dikatakan yang paling banyak dipakai sebagai standard pensinyalan pada peralatan komunikasi data. Untuk transmisi asinkron tiap karakter disandikan dalam 10 atau 11 bit yang terdiri dari 1 bit awal, 7 bit data, 1 bit paritas, 1 atau 2 bit akhir.\n\nTabel 1.13 Sandi ASCII",
  //   image: require("../../src/assets/book.png"),
  //   tabel:require("../../src/assets/materi/ascii.jpg"),
  //   tabel1:require("../../src/assets/materi/ascii2.jpg"),
  // },
];

export default materiempat;

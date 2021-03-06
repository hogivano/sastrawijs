var assert = require('assert');
var sastrawi = require('../index');
describe('stemmer', function() {
    describe('stem function', function() {
        it('stem words', function () {
            var custom=["hancur", "benar", "apa", "siapa", "jubah",
                "baju", "beli", "celana", "hantu", "jual", "buku", "milik", "kulit",
                "sakit", "kasih", "buang", "suap", "nilai", "beri", "rambut", "adu",
                "suara", "daerah", "ajar", "kerja", "ternak", "asing", "raup", "gerak",
                "puruk", "terbang", "lipat", "ringkas", "warna", "yakin", "bangun",
                "fitnah", "vonis", "baru", "ajar", "tangkap", "kupas", "minum", "pukul",
                "cinta", "dua", "jauh", "ziarah", "nuklir", "gila", "hajar", "qasar",
                "udara", "populer", "warna", "yoga", "adil", "rumah", "muka", "labuh",
                "tarung", "tebar", "indah", "daya", "untung", "sepuluh", "ekonomi",
                "makmur", "telah", "serta", "percaya", "pengaruh", "kritik", "seko",
                "sekolah", "tahan", "capa", "capai", "mula", "mulai", "petan", "tani",
                "aba", "abai", "balas", "balik", "peran", "medan", "syukur", "syarat",
                "bom", "promosi", "proteksi", "prediksi", "kaji", "sembunyi", "langgan",
                "laku", "baik", "terang", "iman", "bisik", "taat", "puas", "makan",
                "nyala", "nyanyi", "nyata", "nyawa", "rata", "lembut", "ligas",
                "budaya", "karya", "ideal", "final", "taat", "tiru", "sepak", "kuasa",
                "malaikat", "nikmat", "lewat", "nganga", "allah"];
            var stemmer = new sastrawi.Stemmer(custom);
            assert.equal(stemmer.stem("mei"),"mei");
            assert.equal(stemmer.stem("bui"),"bui");
            assert.equal(stemmer.stem("nilai"),"nilai");
            assert.equal(stemmer.stem("hancurlah"),"hancur");
            assert.equal(stemmer.stem("benarkah"),"benar");
            assert.equal(stemmer.stem("apatah"),"apa");
            assert.equal(stemmer.stem("siapapun"),"siapa");
            assert.equal(stemmer.stem("jubahku"),"jubah");
            assert.equal(stemmer.stem("bajumu"),"baju");
            assert.equal(stemmer.stem("celananya"),"celana");
            assert.equal(stemmer.stem("hantui"),"hantu");
            assert.equal(stemmer.stem("belikan"),"beli");
            assert.equal(stemmer.stem("jualan"),"jual");
            assert.equal(stemmer.stem("bukumukah"),"buku");
            assert.equal(stemmer.stem("miliknyalah"),"milik");
            assert.equal(stemmer.stem("kulitkupun"),"kulit");
            assert.equal(stemmer.stem("berikanku"),"beri");
            assert.equal(stemmer.stem("sakitimu"),"sakit");
            assert.equal(stemmer.stem("beriannya"),"beri");
            assert.equal(stemmer.stem("kasihilah"),"kasih");
            assert.equal(stemmer.stem("dibuang"),"buang");
            assert.equal(stemmer.stem("kesakitan"),"sakit");
            assert.equal(stemmer.stem("sesuap"),"suap");
            assert.equal(stemmer.stem("beradu"),"adu");
            assert.equal(stemmer.stem("berambut"),"rambut");
            assert.equal(stemmer.stem("bersuara"),"suara");
            assert.equal(stemmer.stem("berdaerah"),"daerah");
            assert.equal(stemmer.stem("belajar"),"ajar");
            assert.equal(stemmer.stem("bekerja"),"kerja");
            assert.equal(stemmer.stem("beternak"),"ternak");
            assert.equal(stemmer.stem("terasing"),"asing");
            assert.equal(stemmer.stem("teraup"),"raup");
            assert.equal(stemmer.stem("tergerak"),"gerak");
            assert.equal(stemmer.stem("terpuruk"),"puruk");
            assert.equal(stemmer.stem("teterbang"),"terbang");
            assert.equal(stemmer.stem("melipat"),"lipat");
            assert.equal(stemmer.stem("meringkas"),"ringkas");
            assert.equal(stemmer.stem("mewarnai"),"warna");
            assert.equal(stemmer.stem("meyakinkan"),"yakin");
            assert.equal(stemmer.stem("membangun"),"bangun");
            assert.equal(stemmer.stem("memfitnah"),"fitnah");
            assert.equal(stemmer.stem("memvonis"),"vonis");
            assert.equal(stemmer.stem("memperbaru"),"baru");
            assert.equal(stemmer.stem("mempelajar"),"ajar");
            assert.equal(stemmer.stem("meminum"),"minum");
            assert.equal(stemmer.stem("memukul"),"pukul");
            assert.equal(stemmer.stem("mencinta"),"cinta");
            assert.equal(stemmer.stem("mendua"),"dua");
            assert.equal(stemmer.stem("menjauh"),"jauh");
            assert.equal(stemmer.stem("menziarah"),"ziarah");
            assert.equal(stemmer.stem("menuklir"),"nuklir");
            assert.equal(stemmer.stem("menangkap"),"tangkap");
            assert.equal(stemmer.stem("menggila"),"gila");
            assert.equal(stemmer.stem("menghajar"),"hajar");
            assert.equal(stemmer.stem("mengqasar"),"qasar");
            assert.equal(stemmer.stem("mengudara"),"udara");
            assert.equal(stemmer.stem("mengupas"),"kupas");
            assert.equal(stemmer.stem("menyuarakan"),"suara");
            assert.equal(stemmer.stem("mempopulerkan"),"populer");
            assert.equal(stemmer.stem("pewarna"),"warna");
            assert.equal(stemmer.stem("peyoga"),"yoga");
            assert.equal(stemmer.stem("peradilan"),"adil");
            assert.equal(stemmer.stem("perumahan"),"rumah");
            assert.equal(stemmer.stem("permuka"),"muka");
            assert.equal(stemmer.stem("perdaerah"),"daerah");
            assert.equal(stemmer.stem("pembangun"),"bangun");
            assert.equal(stemmer.stem("pemfitnah"),"fitnah");
            assert.equal(stemmer.stem("pemvonis"),"vonis");
            assert.equal(stemmer.stem("peminum"),"minum");
            assert.equal(stemmer.stem("pemukul"),"pukul");
            assert.equal(stemmer.stem("pencinta"),"cinta");
            assert.equal(stemmer.stem("pendua"),"dua");
            assert.equal(stemmer.stem("penjauh"),"jauh");
            assert.equal(stemmer.stem("penziarah"),"ziarah");
            assert.equal(stemmer.stem("penuklir"),"nuklir");
            assert.equal(stemmer.stem("penangkap"),"tangkap");
            assert.equal(stemmer.stem("penggila"),"gila");
            assert.equal(stemmer.stem("penghajar"),"hajar");
            assert.equal(stemmer.stem("pengqasar"),"qasar");
            assert.equal(stemmer.stem("pengudara"),"udara");
            assert.equal(stemmer.stem("pengupas"),"kupas");
            assert.equal(stemmer.stem("penyuara"),"suara");
            assert.equal(stemmer.stem("pelajar"),"ajar");
            assert.equal(stemmer.stem("pelabuh"),"labuh");
            assert.equal(stemmer.stem("petarung"),"tarung");
            assert.equal(stemmer.stem("terpercaya"),"percaya");
            assert.equal(stemmer.stem("pekerja"),"kerja");
            assert.equal(stemmer.stem("peserta"),"serta");
            assert.equal(stemmer.stem("mempengaruhi"),"pengaruh");
            assert.equal(stemmer.stem("mengkritik"),"kritik");
            assert.equal(stemmer.stem("bersekolah"),"sekolah");
            assert.equal(stemmer.stem("bertahan"),"tahan");
            assert.equal(stemmer.stem("mencapai"),"capai");
            assert.equal(stemmer.stem("dimulai"),"mulai");
            assert.equal(stemmer.stem("petani"),"tani");
            assert.equal(stemmer.stem("terabai"),"abai");
            assert.equal(stemmer.stem("mensyaratkan"),"syarat");
            assert.equal(stemmer.stem("mensyukuri"),"syukur");
            assert.equal(stemmer.stem("mengebom"),"bom");
            assert.equal(stemmer.stem("mempromosikan"),"promosi");
            assert.equal(stemmer.stem("memproteksi"),"proteksi");
            assert.equal(stemmer.stem("memprediksi"),"prediksi");
            assert.equal(stemmer.stem("pengkajian"),"kaji");
            assert.equal(stemmer.stem("pengebom"),"bom");
            assert.equal(stemmer.stem("bersembunyi"),"sembunyi");
            assert.equal(stemmer.stem("bersembunyilah"),"sembunyi");
            assert.equal(stemmer.stem("pelanggan"),"langgan");
            assert.equal(stemmer.stem("pelaku"),"laku");
            assert.equal(stemmer.stem("pelangganmukah"),"langgan");
            assert.equal(stemmer.stem("pelakunyalah"),"laku");
            assert.equal(stemmer.stem("perbaikan"),"baik");
            assert.equal(stemmer.stem("kebaikannya"),"baik");
            assert.equal(stemmer.stem("bisikan"),"bisik");
            assert.equal(stemmer.stem("menerangi"),"terang");
            assert.equal(stemmer.stem("berimanlah"),"iman");
            assert.equal(stemmer.stem("memuaskan"),"puas");
            assert.equal(stemmer.stem("berpelanggan"),"langgan");
            assert.equal(stemmer.stem("bermakanan"),"makan");
            assert.equal(stemmer.stem("menyala"),"nyala");
            assert.equal(stemmer.stem("menyanyikan"),"nyanyi");
            assert.equal(stemmer.stem("menyatakannya"),"nyata");
            assert.equal(stemmer.stem("penyanyi"),"nyanyi");
            assert.equal(stemmer.stem("penyawaan"),"nyawa");
            assert.equal(stemmer.stem("rerata"),"rata");
            assert.equal(stemmer.stem("lelembut"),"lembut");
            assert.equal(stemmer.stem("lemigas"),"ligas");
            assert.equal(stemmer.stem("kinerja"),"kerja");
            assert.equal(stemmer.stem("bertebaran"),"tebar");
            assert.equal(stemmer.stem("terasingkan"),"asing");
            assert.equal(stemmer.stem("membangunkan"),"bangun");
            assert.equal(stemmer.stem("mencintai"),"cinta");
            assert.equal(stemmer.stem("menduakan"),"dua");
            assert.equal(stemmer.stem("menjauhi"),"jauh");
            assert.equal(stemmer.stem("menggilai"),"gila");
            assert.equal(stemmer.stem("pembangunan"),"bangun");
            assert.equal(stemmer.stem("marwan"),"marwan");
            assert.equal(stemmer.stem("subarkah"),"subarkah");
            assert.equal(stemmer.stem("memberdayakan"),"daya");
            assert.equal(stemmer.stem("persemakmuran"),"makmur");
            assert.equal(stemmer.stem("keberuntunganmu"),"untung");
            assert.equal(stemmer.stem("kesepersepuluhnya"),"sepuluh");
            assert.equal(stemmer.stem("Perekonomian"),"ekonomi");
            assert.equal(stemmer.stem("menahan"),"tahan");
            assert.equal(stemmer.stem("peranan"),"peran");
            assert.equal(stemmer.stem("memberikan"),"beri");
            assert.equal(stemmer.stem("medannya"),"medan");
            assert.equal(stemmer.stem("idealis"),"ideal");
            assert.equal(stemmer.stem("idealisme"),"ideal");
            assert.equal(stemmer.stem("finalisasi"),"final");
            assert.equal(stemmer.stem("mentaati"),"taat");
            assert.equal(stemmer.stem("melewati"),"lewat");
            assert.equal(stemmer.stem("menganga"),"nganga");
            assert.equal(stemmer.stem("kupukul"),"pukul");
            assert.equal(stemmer.stem("kauhajar"),"hajar");
            assert.equal(stemmer.stem("kuasa-Mu"),"kuasa");
            assert.equal(stemmer.stem("nikmat-Ku"),"nikmat");
            assert.equal(stemmer.stem("allah-lah"),"allah");
        });
    });
});

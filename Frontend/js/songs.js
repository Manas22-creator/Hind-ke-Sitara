// New data structure: An object of albums
// Each key is a unique album ID
// Each value is an object with a title, cover, and an array of songs
const albums = {
    "bhakti_bhajan": {
        title: "Bhakti Bhajan",
        description: "Bhakti Bhajan, enjoy the devotional vibes...",
        cover: "assets/images/bhakti_bhajan_cover.jpg",
        songs: [
            {
                name: "Hanuman Chalisa",
                filePath: "assets/music/Bhakti_Bhajan/HanumanChalisa.mp3"
            },
            {
                name: "Jai Kanhaiya Lal ki",
                filePath: "assets/music/Bhakti_Bhajan/Jai Kanhaiya Lal ki.mp3"
            },
            {
                name: "Kaun Kehte hai Bhagwan Aate Nahi",
                filePath: "assets/music/Bhakti_Bhajan/Kaun Kehte hai Bhagwan Aate Nahi.mp3"
            },
            {
                name: "Krishna",
                filePath: "assets/music/Bhakti_Bhajan/Krishna.mp3"
            },
            {
                name: "Mahabharat title song",
                filePath: "assets/music/Bhakti_Bhajan/Mahabharat title song.mp3"
            },
            {
                name: "Ram bhakt",
                filePath: "assets/music/Bhakti_Bhajan/Ram bhakt.mp3"
            },
            {
                name: "Mere Nishaan (OMG)",
                filePath: "assets/music/Bhakti_Bhajan/Mere Nishaan (OMG).mp3"
            }
            // Add more bhakti songs here if you have them
        ]
    },
    "diljit_dosanjh": {
        title: "Diljit Dosanjh",
        description: "Diljit Dosanjh hits",
        cover: "assets/images/diljit_dosanjh_cover.jpg",
        songs: [
            {
                name: "Bornto Shine",
                filePath: "assets/music/Diljit/BorntoShine.mp3"
            },
            {
                name: "Ik Kudi",
                filePath: "assets/music/Diljit/ikkkudi.mp3"
            },
            {
                name: "Pagal",
                filePath: "assets/music/Diljit/Pagal.mp3"
            },
            {
                name: "Sauda Khara Khara",
                filePath: "assets/music/Diljit/SaudaKharaKhara.mp3"
            },
            {
                name: "Nach Heeriye",
                filePath: "assets/music/Diljit/NachHeeriye.mp3"
            },
            {
                name: "Tension",
                filePath: "assets/music/Diljit/Tension.mp3"
            },
            {
                name: "IshqDiBaajiyaan",
                filePath: "assets/music/Diljit/IshqDiBaajiyaan.mp3"
            }
        ]
    },
    "panchayat_beats": {
        title: "Panchayat beats",
        description: "Panchayat all songs at one place...",
        cover: "assets/images/panchayat_beats_cover.jpg",
        songs: [
            {
                name: "Panchayat Theme",
                filePath: "assets/music/Panchayat/Hind Ke Sitara.mp3"
            },
            {
                name: "Khali Khali",
                filePath: "assets/music/Panchayat/Khali Khali Sa.mp3"
            },
            {
                name: "Aasman Rootha",
                filePath: "assets/music/Panchayat/AasmanRootha.mp3"
            },
            {
                name: "Paheli",
                filePath: "assets/music/Panchayat/Paheli.mp3"
            },
            {
                name: "Pyar Badhta Hai",
                filePath: "assets/music/Panchayat/Pyar Badhta Hai.mp3"
            },
            {
                name:"Ek Kahani - Panchayat Season 3",
                filePath: "assets/music/Panchayat/Ek Kahani - Panchayat Season 3.mp3"
            }
            // Add more Panchayat songs here
        ]
    },
    "90s_beats": {
        title: "90's beats",
        description: "90's beats, enjoy the old vibes...",
        cover: "assets/images/90s_beats_cover.jpg",
        songs: [
           {
                name: "Khai Ke Paan Banaras Wala",
                filePath: "assets/music/90's/khai ke paan banaras wala.mp3"
            },
            {
                name: "Intaha Ho Gai Intezar Ki",
                filePath: "assets/music/90's/Intaha Ho Gai Intezar Ki - Sharaabi.mp3"
            },
            {
                name: "Duniya Banane Wale",
                filePath: "assets/music/90's/DUNIYABANANE WALE.mp3"
            },
            {
                name: "DUM DUM DIGA DIGA",
                filePath: "assets/music/90's/DUMDUMDIGA DIGA.mp3"
           },
            {
                name: "Main Pal Do Pal Ka Shayar Hoon",
                filePath: "assets/music/90's/MAIN PALDO PAL KA.mp3"
            },
            {
                name: "Kya Khoob Lagti Ho",
                filePath: "assets/music/90's/KYA KHOOB LAGTI HO.mp3"
            },
            {
                name: "Roop Tera Mastana",
                filePath: "assets/music/90's/RoopTera Mastana.mp3"
            },
            {
                name: "Ek Ladki Bheegi Bhaagi Si",
                filePath: "assets/music/90's/Ek ladki bheegi bhaagi.mp3"
            },
            {
                name: "Jab Koi Bat (Jurm)",
                filePath: "assets/music/90's/Jab Koi Bat(Jurm).mp3"
            }
            // Add more 90's songs here if you have them
        ]
    },
    "guru_randhawa_hits": {
        title: "Guru Randhawa Hits",
        description: "Guru Randhawa's popular tracks",
        cover: "assets/images/guru_randhawa_cover.jpg",
        songs: [
            {
                name: "Lahore",
                filePath: "assets/music/Guru_Randhawa/HauliHauli.mp3"
            },
            {
                name: "High Rated",
                filePath: "assets/music/Guru_Randhawa/High Rated.mp3"
            },
            {
                name: "Ishare Tere",
                filePath: "assets/music/Guru_Randhawa/Ishare Tere.mp3"
            },
            {
                name: "Raat Kamaal Hai - Guru Randhawa",
                filePath: "assets/music/Guru_Randhawa/Raat Kamaal Hai - Guru Randhawa.mp3"
            },
            {
                name: "Patola",
                filePath: "assets/music/Guru_Randhawa/Patola.mp3"
            }
        ]
    },
    "B-Praak hits": {
        title: "B-Praak Hits",
        description: "B-Praak's popular tracks",
        cover: "assets/images/b_praak_cover.jpg",
        songs: [
            {
                name: "Baarish ki Jaaye",
                filePath: "assets/music/B-Praak/Baarish Ki Jaaye.mp3"
            },
            {
                name: "Dil Tod Ke",
                filePath: "assets/music/B-Praak/Dil Tod Ke.mp3"
            },
            {
                name: "Channa Ve Sufna",
                filePath: "assets/music/B-Praak/Channa Ve Sufna.mp3"
            },
            {
                name: "Dolna Qismat",
                filePath: "assets/music/B-Praak/Dholna Qismat.mp3"
            },
            {
                name: "Filhall",
                filePath: "assets/music/B-Praak/Filhall.mp3"
            }
        ]
    },
    "Party_(Song)": {
        title: "Part (Song)",
        description: " Part (Song) collection of various artists and genres",
        cover: "assets/images/party_cover.jpg",
        songs: [
            {
                name: "Baby Ko Bass Pasand Hai",
                filePath: "assets/music/Party_(Song)/BabyKoBassPasandHa.mp3"
            },
            {
                name: "Bhare Bazaar - Namaste England",
                filePath: "assets/music/Party_(Song)/Bhare Bazaar - Namaste England.mp3"
            },
            {
                name: "Badri Ki Dulhania",
                filePath: "assets/music/Party_(Song)/Badri Ki Dulhania.mp3"
            },
            {
                name: "Ding Dang",
                filePath: "assets/music/Party_(Song)/Ding Dang.mp3"
            },
            {
                name: "Bolo Har Har Har",
                filePath: "assets/music/Party_(Song)/Oh Ho Ho Ho.mp3"
            },
            {
                name: "Proper Patola - Namaste England",
                filePath: "assets/music/Party_(Song)/Proper Patola - Namaste England.mp3"
            },
            {
                name: "Sweety Tera Drama",
                filePath: "assets/music/Party_(Song)/Sweety Tera Drama.mp3"
            },
            {
                name: "Tamma Tamma Again",
                filePath: "assets/music/Party_(Song)/Tamma Tamma Again.mp3"
            },
            {
                name: "Na Na Na Na Na Re",
                filePath: "assets/music/Party_(Song)/Na Na Na Na Na Re.mp3"
            },
            {
                name: "Kala Chashma - Baar Baar Dekho",
                filePath: "assets/music/Party_(Song)/Kala Chashma - Baar Baar Dekho.mp3"
            }
        ]
    }
};

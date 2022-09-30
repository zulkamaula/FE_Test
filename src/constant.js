const bulan = ['Januari','Februari','Maret','April','Mei','Juni','Juli','Oktober','September','November','Desember'];

const labelsLine = ["Babol",	"Cabanatuan",	"Daegu",	"Jerusalem",	"Fairfield",	"New York",	"Gangtok", "Buenos Aires", "Hafar Al-Batin", "Idlib"];

const resDataMultipleLine = [ 
    {
        label: 'Line Chart',
        data: [600,	1150,	342,	6050,	2522,	3241,	1259,	157,	1545, 9841],
        fill: false,
        borderColor: '#2554FF',
        backgroundColor: '#2554FF',
        borderWidth: 1
    }
];

const labelsBar = ['Januari','Februari','Maret','April','Mei','Juni','Juli'];

const resDataBarChart = {
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }

const gallerImage = [
    {
        key: 'img-1',
        name_alt: 'toll-1',
        link_img: 'https://www.nusantarainfrastructure.com/assets/images/section/md/1569298529-_en.jpg'
    },
    {
        key: 'img-2',
        name_alt: 'toll-2',
        link_img: 'https://d16yj43vx3i1f6.cloudfront.net/uploads/2020/06/GettyImages-182475239-CROP.jpg'
    },
    {
        key: 'img-3',
        name_alt: 'toll-3',
        link_img: 'https://res.cloudinary.com/astra-infra/image/upload/v1656411403/header_tangerang_merak__4_nqmbhg.jpg'
    },
    {
        key: 'img-4',
        name_alt: 'toll-4',
        link_img: 'https://exadel.com/wp-content/uploads/2019/09/shutterstock_626914814-tollroad.png'
    },
    
]

export default {
    bulan,
    labelsLine,
    labelsBar,
    resDataMultipleLine,
    resDataBarChart,
    gallerImage
}
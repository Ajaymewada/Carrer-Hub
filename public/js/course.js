var coursedata = [
  {
    id: 1,
    title: "Python for Everybody – Full University Course",
    image: "https://raspberry-valley.azurewebsites.net/img/Python-01.jpg",
    rating: 4.5,
    reviews: 1991,
    lessons: 6,
    duration: "3h 56m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/rfscVS0vtbw",
    description:
      "A complete beginner-friendly university-level Python foundation course.",
  },
  {
    id: 2,
    title: "R Programming Tutorial – Full Course",
    image:
      "https://www.infoworld.com/wp-content/uploads/2024/06/cw_r_guide_video_series_thinkstock_16x9_1920x1080-100758020-orig.jpg",
    rating: 4.1,
    reviews: 1991,
    lessons: 5,
    duration: "4h 35m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/_V8eKsto3Ug",
    description:
      "Learn R programming, statistics, and data analysis from scratch.",
  },
  {
    id: 3,
    title: "Cyber Security Full Course for Beginners",
    image:
      "https://www.shutterstock.com/image-photo/glowing-digital-lock-surrounded-by-600nw-2517566697.jpg",
    rating: 3.8,
    reviews: 1891,
    lessons: 7,
    duration: "2h 30m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/3Kq1MIfTWCE",
    description:
      "Fundamentals of cybersecurity, hacking concepts, and system protection.",
  },
  {
    id: 4,
    title: "SAP ERP Tutorial for Beginners",
    image:
      "https://img.freepik.com/free-photo/enterprise-resource-planning-holographic-interface_23-2149092252.jpg",
    rating: 4.8,
    reviews: 1891,
    lessons: 7,
    duration: "5h 30m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/AML4GEckVsc",
    description: "A beginner-level SAP ERP crash course.",
  },
  {
    id: 5,
    title: "Microsoft Power BI Full Course",
    image: "https://www.advancedexcel.net/power-bi/images/power-bi-hero.jpg",
    rating: 4.5,
    reviews: 1891,
    lessons: 8,
    duration: "7h 30m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/VaOhNqNtGGE?si=fekUubdVsrbA6I6N",
    description: "Learn Power BI dashboards, DAX, and data transformations.",
  },
  {
    id: 6,
    title: "Tableau Full Course – Learn Tableau",
    image: "https://miro.medium.com/1*3rt9Poxf3YgAIJCfA1am1w.jpeg",
    rating: 3.9,
    reviews: 1990,
    lessons: 7,
    duration: "6h 45m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/TPMlZxRRaBQ",
    description: "Everything you need to know to become proficient at Tableau.",
  },
  {
    id: 7,
    title: "SQL Full Course – Learn SQL",
    image: "https://cdn.hackersandslackers.com/2022/06/SQLpt1.jpg",
    rating: 3.9,
    reviews: 1990,
    lessons: 7,
    duration: "6h 45m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/HXV3zeQKqGY",
    description: "SQL basics to advanced queries for database beginners.",
  },
  {
    id: 8,
    title: "Microsoft Excel Full Course – Beginners to Advanced",
    image:
      "https://wallpapers.com/images/hd/excel-microsoft-spreadsheet-computer-application-enhdz9phqfeeurhx.jpg",
    rating: 3.9,
    reviews: 1990,
    lessons: 7,
    duration: "6h 45m",
    level: "Beginner",
    price: 179,
    offerPrice: 79,
    video: "https://www.youtube.com/embed/tD4aF73X6cM",
    description:
      "Core to advanced Excel skills including formulas, charts, and automation.",
  },
];

const params = new URLSearchParams(window.location.search);
const courseId = Number(params.get("id")); // convert to number

// Find the course by ID
const c = coursedata.find((item) => item.id === courseId);

if (!c) {
  document.body.innerHTML =
    "<h3 class='text-center mt-5'>Course not found!</h3>";
} else {
  document.getElementById("courseTitle").innerText = c.title;
  document.getElementById("courseVideo").src = c.video;
  document.getElementById("courseDescription").innerText = c.description;
  document.getElementById("lessons").innerText = c.lessons;
  document.getElementById("duration").innerText = c.duration;
  document.getElementById("level").innerText = c.level;
}


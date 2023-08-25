
let hamburger = document.querySelector("#hamburger");
let MenuClose = document.querySelector("#close");
let overlay = document.querySelector(".overlay");
let MobMenu = document.querySelector(".mob-menu");

let website = {
  //Header
  logo: './images/interstride.png',
  login: {
    text: 'Login',
    link: '#'
  },
  book: {
    text: 'Book a Demo',
    link: '#'
  },
  // Header Links
  navigation: [{
    name: "Admissions",
    link: "#"
  },
  {
    name: "Career Centers",
    link: "#"
  },
  {
    name: "Students",
    link: "#"
  },
  {
    name: "Employers",
    link: "#"
  },
  {
    name: "Resources",
    link: "#"
  }],
  //Section 1
  Section1: {
    heading: 'Attract, engage, and retain international students',
    description: 'An integrated platform to support international students and alumni every step of the way from admissions through graduation.',
    btnTxt: 'Book a demo',
    btnSrc: 'https://youtube.com',
    ImgSrc: './images/Attract-engage-and-retain-international-students.png'
  },
  // Section 2
  Section2: {
    heading: 'Trusted by 300+ programs',
    img: './images/slider-logos-12-min.png',
  },
  //Section 3
  Section3: {
    heading: 'Strategically reach international students at any stage!',
    // Tabs Buttons
    tabs: [
      {
        title: 'Applicaiton',
        class: 'tablinks active',
      },
      {
        title: 'Student',
        class: 'tablinks',
      },
      {
        title: 'Alumni',
        class: 'tablinks',
      },
    ],

    // Tabs Content
    tabList: [
      {
        id: "Applicaiton",
        title: "Effectively engage and enroll more international prospects",
        ImgSrc: './images/Applicants@2x.jpg',
        btnTxt: 'Learn about Admissions',
        btnSrc: 'https://youtube.com',
        ListTxt: [{
          list01: "Connect prospects 1:1 with student ambassadors & admissions officers.",
          list02: "Leverage personalized marketing",
          list03: "Authentically engage applicants to ensure they are receiving the support they need from early exploration stages through enrollment.",
        }],
      },
      {
        id: "Student",
        title: "Empower your career center to better support international students!",
        ImgSrc: './images/home-careers.jpg',
        btnTxt: 'Learn about Careers',
        btnSrc: 'https://youtube.com',
        ListTxt: [{
          list01: "Make a positive impact on existing international students",
          list02: "Effectively support students in their job search, community building, and immigration journey from arrival through graduation.",
          list03: "Access expert resources created specifically for international students",
        }],
      },
      {
        id: "Alumni",
        title: "Boost alumni satisfaction and university reputation!",
        ImgSrc: './images/home-reputation.jpg',
        btnTxt: 'Learn about Alumini',
        btnSrc: 'https://youtube.com',
        ListTxt: [{
          list01: "Empower international alumni to build a successful career and life in the U.S. after graduation",
          list02: "Support them in navigating the complex immigration landscape",
          list03: "Help them find meaningful employment opportunities",
        }],
      }
    ]
  },

  // Section 4
  Section4: {
    heading: "What’s meaningful to international<br>students is clear.",
    innerSection: [
      {
        heading: '94%',
        description: 'of prospects want enhanced admissions support and consistent communication.',
        Subj: 'QS International Survey',
      },
      {
        heading: '60%',
        description: 'of students want tailored career support from their university’s career services',
        Subj: 'National Association of Colleges and Employers (NACE)',
      },
      {
        heading: '81%',
        description: 'of alumni want to stay in the U.S. to work or pursue further education opportunities',
        Subj: 'U.S. Immigration & Customs Enforcement (ICE)',
      },
    ],
  },

  // Section 5
  Section5: {
    heading: "Be a champion to international students",
    description: "International students face unique and complex challenges. Empowering<br> applicants, students, and graduates to make confident decisions about their<br> future in the U.S. starts with you.",
    btnTxt: 'Book a demo',
    btnSrc: 'https://youtube.com',
    ImgSrc: './images/Champion.svg',
  },

  // Section 6
  Section6: {
    heading: "Used by leading universities to empower international students",
    quoteIcon: './images/quote.svg',
    quote: "It just feels like Interstride is two steps ahead, or sometimes ten steps ahead of where we would be.",
    btnTxt: 'Read our case studies',
    btnSrc: 'https://youtube.com',
    Images: [{
      ImgSrc: './images/Duke.svg',
    },
    {
      ImgSrc: './images/RIT.svg',
    },
    {
      ImgSrc: './images/UniversityMiami.svg',
    },
    {
      ImgSrc: './images/BYU-marriott.svg',
    },
    ]
  },

  footer: {
    aboutUs: 'We empower international students – and their institutions to help – build a career and life they love wherever in the world.',
    desc: 'Stay up-to-date with the latest international student news',

    // Footer Icons
    icons: [
      {
        icon: './images/fb.svg',
        link: '#'
      },
      {
        icon: './images/tw.svg',
        link: '#'
      },
      {
        icon: './images/link.svg',
        link: '#'
      },
      {
        icon: './images/in.svg',
        link: '#'
      },
      {
        icon: './images/tiktok1.svg',
        link: '#'
      },
    ],

    // Footer Links
    solutions: [
      {
        text: 'Admissions',
        link: '#'
      },
      {
        text: 'Career Centers',
        link: '#'
      },
      {
        text: 'Students',
        link: '#'
      },
      {
        text: 'Employers',
        link: '#'
      },
    ],

    started: [
      {
        text: 'Book a demo',
        link: '#'
      }
    ],

    company: [
      {
        text: 'About',
        link: '#'
      }
    ],

    portal: [
      {
        text: 'Students & Alumni',
        link: '#'
      },
      {
        text: 'University Admins',
        link: '#'
      },
      {
        text: 'Employers',
        link: '#'
      },
    ],

    resource: [
      {
        text: 'Blog',
        link: '#'
      },
      {
        text: 'Research Reports',
        link: '#'
      },
      {
        text: 'Case Studies',
        link: '#'
      },
      {
        text: 'Guides',
        link: '#'
      },
      {
        text: 'Podcasts',
        link: '#'
      },
      {
        text: 'University Rankings',
        link: '#'
      },
      {
        text: 'Discord Community',
        link: '#'
      },
    ],

    bottomLinks: [
      {
        text: 'contact@interstride.com',
        link: '#'
      },
      {
        text: 'Single Sign On',
        link: '#'
      },
      {
        text: 'Privacy Policy',
        link: '#'
      },
      {
        text: 'Terms & Conditions',
        link: '#'
      },
    ]
  }

}

console.log(website);

// Header
document.querySelector('.header-row a img').src = website.logo;
document.querySelector('.header-btn a.login').href = website.login.link;
document.querySelector('.header-btn a.login').innerHTML = website.login.text;
document.querySelector('.header-btn a.book').href = website.book.link;
document.querySelector('.header-btn a.book').innerHTML = website.book.text;

let headerLinks = "";
for (menu of website.navigation) {
  document.querySelector('.header-row a img').src = website.logo;

  headerLinks += '<a href="' + menu.link + '">' + menu.name + '</a>';
}
document.querySelector(".nav-menu").innerHTML = headerLinks;

// Section 1
document.querySelector(".m-h1").innerHTML = website.Section1.heading;
document.querySelector(".mb-clo2 p").innerHTML = website.Section1.description;
document.querySelector(".booking").href = website.Section1.btnSrc;
document.querySelector(".booking").innerHTML = website.Section1.btnTxt;
document.querySelector(".mb-clo1 img").src = website.Section1.ImgSrc;



// Section 2
document.querySelector(".row-2 h2").innerHTML = website.Section2.heading;
document.querySelector(".img-slider img").src = website.Section2.img;



// Section 3
document.querySelector(".row-3 h1").innerHTML = website.Section3.heading;

let text = "";
for (tab of website.Section3.tabList) {
  text += '<div id="' + tab.id + '" class="tabcontent "><div class="tabs-content"><div class="col-1"><img src="' + tab.ImgSrc + '"></div><div class="col-2"><h3>' + tab.title + '</h3><ul><li>' + tab.ListTxt[0].list01 + '</li><li>' + tab.ListTxt[0].list02 + '</li><li>' + tab.ListTxt[0].list03 + '</li></ul><a class="tab-btn" href="' + tab.btnSrc + '" target="_blank">' + tab.btnTxt + '</a></div></div></div>';
}
document.querySelector("#tabs").innerHTML = text;


let BtnTxt = "";
for (btns of website.Section3.tabs) {
  BtnTxt += '<button class="' + btns.class + '" onclick="TabsOpen(event, `' + btns.title + '`)">' + btns.title + '</button>';
}
document.querySelector(".tab").innerHTML = BtnTxt;



// Section 4
document.querySelector(".row-4 h1").innerHTML = website.Section4.heading;

let section = "";
for (sec of website.Section4.innerSection) {
  section += '<div class="inner-2"><h2>' + sec.heading + '</h2><p>' + sec.description + '</p><p class="pp">' + sec.Subj + '</p></div>'
}
document.querySelector(".inner").innerHTML = section;



// Section 5
document.querySelector(".row-5 img").src = website.Section5.ImgSrc;
document.querySelector(".row-5 h1").innerHTML = website.Section5.heading;
document.querySelector(".row-5 p").innerHTML = website.Section5.description;
document.querySelector(".row-5 a").innerHTML = website.Section5.btnTxt;
document.querySelector(".row-5 a").href = website.Section5.btnSrc;


// Section 6
document.querySelector(".row-6 h1").innerHTML = website.Section6.heading;
document.querySelector(".quote p").innerHTML = website.Section6.quote;
document.querySelector(".quote img").src = website.Section6.quoteIcon;
document.querySelector(".case").innerHTML = website.Section6.btnTxt;
document.querySelector(".case").href = website.Section6.btnSrc;
document.querySelector(".case").target = "_blank";

let logos = '';
for (images of website.Section6.Images) {
  logos += '<img src="' + images.ImgSrc + '">'
}
document.querySelector('.logos').innerHTML = logos;

// Footer 
document.querySelector('.ftr-info a img').src = website.logo;
document.querySelector('.ftr-info p').innerHTML = website.footer.aboutUs;
document.querySelector('.ftr-info p.txt').innerHTML = website.footer.desc;

let social = "";
for (socialIcons of website.footer.icons) {
  social += '<a href="' + socialIcons.link + '"><img src="' + socialIcons.icon + '"></a>'
};
document.querySelector('.social-icons').innerHTML = social;

// footer links

// Solution
let solution = '';
for (solutionLinks of website.footer.solutions) {
  solution += '<a href="' + solutionLinks.link + '">' + solutionLinks.text + '</a>';
}
document.querySelector('.solutions').innerHTML = 'Solution' + solution;


// Get Started
let started = '';
for (startedLinks of website.footer.started) {
  started += '<a href="' + startedLinks.link + '">' + startedLinks.text + '</a>';
}
document.querySelector('.started').innerHTML = 'Get Started' + started;


// Company
let company = '';
for (companyLinks of website.footer.company) {
  company += '<a href="' + companyLinks.link + '">' + companyLinks.text + '</a>';
}
document.querySelector('.company').innerHTML = 'Company' + company;


// Login to Potal
let portal = '';
for (portalLinks of website.footer.portal) {
  portal += '<a href="' + portalLinks.link + '">' + portalLinks.text + '</a>';
}
document.querySelector('.portal').innerHTML = 'Login to Portal' + portal;


// Resources
let resource = '';
for (resourceLinks of website.footer.resource) {
  resource += '<a href="' + resourceLinks.link + '">' + resourceLinks.text + '</a>';
}
document.querySelector('.resource').innerHTML = 'Resources' + resource;



// Bottom Section Links
let right = '';
for (resourceLinks of website.footer.bottomLinks) {
  right += '<a href="' + resourceLinks.link + '">' + resourceLinks.text + '</a>';
}
document.querySelector('.right').innerHTML = right;

document.querySelector('.left').innerHTML = '© 2023 Interstride. All rights reserved.';


// Mobile menu
document.querySelector('.mobile-menu-container').innerHTML = '<a href="/">Home</a> ' + solution + ' <a>Resources</a><div id="sub-menu">' + resource + '</div><a>Login</a><div id="sub-menu">' + portal + '</div>';


// Tabs Open and Close
function TabsOpen(evt, idName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(idName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Moile Menu Open and Close 
hamburger.addEventListener("click", () => {
  overlay.style.display = "block";
  MobMenu.style.display = "block";
});

overlay.addEventListener("click", () => {
  overlay.style.display = "none";
  MobMenu.style.display = "none";
});

MenuClose.addEventListener("click", () => {
  overlay.style.display = "none";
  MobMenu.style.display = "none";
});
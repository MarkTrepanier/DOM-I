const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//ready to start
const nav = document.querySelector('nav');
const nava = document.querySelectorAll('nav a');
const logoimg = document.querySelector('.logo-img');
const cta = document.querySelector('.cta');
const ctaText = cta.querySelector('.cta-text h1');
const ctabutton = cta.querySelector('.cta-text button');
const ctaimg = cta.querySelector('#cta-img');
const mainContent = document.querySelector('.main-content')
const contact = document.querySelector('.contact');
const footer = document.querySelector('footer');

//const nava = nav.querySelectorAll('a');
nava.forEach(a => a.style.color = '#4f4f4f');
nav.querySelector('a:nth-of-type(1)').textContent = siteContent['nav']['nav-item-1'];
nav.querySelector('a:nth-of-type(2)').textContent = siteContent['nav']['nav-item-2'];
nav.querySelector('a:nth-of-type(3)').textContent = siteContent['nav']['nav-item-3'];
nav.querySelector('a:nth-of-type(4)').textContent = siteContent['nav']['nav-item-4'];
nav.querySelector('a:nth-of-type(5)').textContent = siteContent['nav']['nav-item-5'];
nav.querySelector('a:nth-of-type(6)').textContent = siteContent['nav']['nav-item-6'];

ctaText.textContent = siteContent['cta']['h1'];
ctaimg.src = siteContent['cta']['img-src'];
ctabutton.textContent = siteContent['cta']['button'];

const topcontent = document.querySelector('.main-content .top-content');
const bottomcontent = document.querySelector('.main-content .bottom-content');

const featuresh4 = topcontent.querySelector('.text-content:nth-of-type(1) h4');
const featurestext = topcontent.querySelector('.text-content:nth-of-type(1) p');
const abouth4 = topcontent.querySelector('.text-content:nth-of-type(2) h4');
const abouttext = topcontent.querySelector('.text-content:nth-of-type(2) p');
const servicesh4 = bottomcontent.querySelector('.text-content:nth-of-type(1) h4');
const servicestext = bottomcontent.querySelector('.text-content:nth-of-type(1) p');
const producth4 = bottomcontent.querySelector('.text-content:nth-of-type(2) h4');
const producttext = bottomcontent.querySelector('.text-content:nth-of-type(2) p');
const visionh4 = bottomcontent.querySelector('.text-content:nth-of-type(3) h4');
const visiontext = bottomcontent.querySelector('.text-content:nth-of-type(3) p');
//main-content>top-content>text-content nth2
//main-content>bottom-content>text-content nth3

//topcontent.style.backgroundColor = 'red';
//topcontent.querySelector('.text-content:nth-of-type(2)').textContent = 'butts';

featuresh4.textContent = siteContent['main-content']['features-h4']
featurestext.textContent = siteContent['main-content']['features-content']
//topcontent.querySelector('.text-content:nth-of-type(1)').prepend(featuresh4);
//topcontent.querySelector('.text-content:nth-of-type(1)').appendChild(featurestext);

abouth4.textContent = siteContent['main-content']['about-h4']
abouttext.textContent = siteContent['main-content']['about-content']
//topcontent.querySelector('.text-content:nth-of-type(2)').prepend(abouth4);
//topcontent.querySelector('.text-content:nth-of-type(2)').appendChild(abouttext);

servicesh4.textContent = siteContent['main-content']['services-h4']
servicestext.textContent = siteContent['main-content']['services-content']
//bottomcontent.querySelector('.text-content:nth-of-type(1)').prepend(serviceh4);
//bottomcontent.querySelector('.text-content:nth-of-type(1)').appendChild(servicetext);

producth4.textContent = siteContent['main-content']['product-h4']
producttext.textContent = siteContent['main-content']['product-content']
//bottomcontent.querySelector('.text-content:nth-of-type(2)').prepend(producth4);
//bottomcontent.querySelector('.text-content:nth-of-type(2)').appendChild(producttext);

visionh4.textContent = siteContent['main-content']['vision-h4']
visiontext.textContent = siteContent['main-content']['vision-content']
//bottomcontent.querySelector('.text-content:nth-of-type(3)').prepend(visionh4);
//bottomcontent.querySelector('.text-content:nth-of-type(3)').appendChild(visiontext);
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

let mainTitle = document.querySelector(".cta .cta-text h1");
mainTitle.innerHTML ="DOM <br> IS<br>AWESOME"; 
document.querySelector(".cta .cta-text button").textContent = siteContent["cta"]["button"];
let mainImage = document.getElementById("cta-img");
mainImage.setAttribute('src', siteContent["cta"]["img-src"]);

 

let a = document.createElement("a");
a.textContent =siteContent["nav"]["nav-item-1"];
let header = document.querySelector(nav);

let secondB = document.querySelector("nav a:nth-child(3)");
c.textContent = siteContent["nav"]["nav-item-3"];
secondB.prepend(c);

let nav = document.querySelectorAll("a");
nav.forEach(function(element){
  element.style.color = "green";
})




document.querySelector(".text-content h4").textContent  = siteContent["main-content"] ["features-h4"];
document.querySelector(".text-content p").textContent = siteContent["main-content"]["features-content"];
document.querySelector(".second-hr").textContent = siteContent["main-content"]["about-h4"];
document.querySelector(".second-hr+p").textContent=siteContent["main-content"]["about-content"];
let middleImage = document.querySelector(".middle-img");
middleImage.setAttribute('src',siteContent["main-content"]["middle-img-src"]);
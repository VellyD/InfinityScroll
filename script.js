const imgContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let photosArr = [];

const apiKey = "uem6kDj09GZWS6XoTA5pTHff4UZB79BuhXKcGGPgNeY";
const count = 30;

const unsplashAPI = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function setAttributes(item, attributes) {
  for (const key in attributes) {
    item.setAttribute(key, attributes[key]);
  }
}

function displayPhotos() {
  photosArr.forEach((photo) => {
    const item = document.createElement("a");
    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    item.appendChild(img);
    imgContainer.appendChild(item);
  });
}

// Get Photos from UnsplashAPI
async function getPhotos() {
  try {
    const response = await fetch(unsplashAPI);
    photosArr = await response.json();
    displayPhotos();
  } catch (err) {
    alert(err);
  }
}

getPhotos();

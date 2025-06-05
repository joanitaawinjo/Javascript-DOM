const body = document.body.style.backgroundColor = 'silver'

const heading = document.getElementById('title')
heading.style.color = 'green'


document.querySelectorAll('h3').forEach(h3 => {
    h3.style.textTransform = 'uppercase';
  });



const fruitList = document.getElementById("fruList");
const newFruit = document.createElement("li");
newFruit.textContent = "Apple";
fruitList.style.display = "flex";
fruitList.style.justifyContent = "space-between";
fruitList.appendChild(newFruit);
const  fruitImages = {
  "Mangoes": "images/mango.webp",
  "Bananas": "images/banana.jpeg",
  "Water Melons": "images/watermelon.jpg",
  "Apple": "images/apple.avif"
}
document.querySelectorAll("#fruList li").forEach(li => {
    const fruitName = li.firstChild.textContent.trim();
    if (fruitImages[fruitName]) {
      const img = document.createElement("img");
      img.src = fruitImages[fruitName];
      img.alt = fruitName;
      img.className = "fruit-image";
      li.appendChild(img);
    }
  });
  const img = document.createElement('img');




const vegList = document.getElementById("vegList");
const newVeg = document.createElement("li");
newVeg.textContent = "cabagge";
vegList.style.display = "flex";
vegList.style.justifyContent = "space-between";
vegList.appendChild(newVeg);
const  vegImages = {
  "Onions": "images/onions.jpg",
  "Tomatoes": "images/Tomato_je.jpg",
  "Kales": "images/kales.jpeg",
  "Cabagge": "images/cabagge.jpg"
};
document.querySelectorAll("#vegList li").forEach(li => {
    const vegName = li.firstChild.textContent.trim();
    if (vegImages[vegName]) {
      const img = document.createElement("img");
      img.src = vegImages[vegName];
      img.alt = vegName;
      img.className = "veg-image";
      li.appendChild(img);
    }
  });
  const images = document.createElement('img');

  
const orderButton = document.getElementById('order-button');

orderButton.addEventListener('click', ()=>{
    orderButton.textContent = 'Ordered';
    orderButton.style.backgroundColor = 'red';
});

const paragraph = document.querySelector('p')

const footer = document.createElement('footer');
const copyright = document.createElement('p');
copyright.textContent = 'Greens Kiosk \u00A9 2025 ';

footer.appendChild(copyright);
footer.style.backgroundColor = 'brown';
footer.style.padding = '2px';
footer.style.height= '20vh';
document.body.appendChild(footer);












  

    




 
      
       
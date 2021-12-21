import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

function createImageGallery(){
    return galleryItems.map(({preview,original,description})=>{
        return `
        <a class = gallery__link>
        <img class=gallery__image
        src=${preview} 
        data-big=${original} 
        alt=${description}>
        </a>
        `
    }).join('')
    }
    const gallery = document.querySelector('.gallery')
    
    gallery.insertAdjacentHTML('beforeend',createImageGallery())
    
    gallery.addEventListener('click', onImageClick)
    
    function onImageClick (e){
        const galleryImage = e.target.classList.contains('gallery__image');
    if(!galleryImage){
        return;
    }
    const bigImage= e.target.dataset.big
    
    console.log(bigImage)
    
    }
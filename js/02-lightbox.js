import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
function createImageGallery(){
    return galleryItems.map(({preview,original,description})=>{
        return `     
<div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</div>
        `
    }).join('')
}
const gallery = document.querySelector('.gallery')
    
gallery.insertAdjacentHTML('beforeend',createImageGallery())

let lightbox = new SimpleLightbox('.gallery a',{captionDelay:'250ms', captionsData:'alt'});
lightbox.close()
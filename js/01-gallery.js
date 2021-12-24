import { galleryItems } from './gallery-items.js';
// Change code below this line
{/* <a class = gallery__link href="" data-lightbox="lbox"> */}
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
    

gallery.addEventListener('click', onImageClick)
function onImageClick(e) {
    e.preventDefault();
    const galleryImage = e.target.classList.contains('gallery__image');
        if(!galleryImage){
            return;
        }  

    const bigImg = e.target.dataset.source
    const modalImg = basicLightbox.create(
        `<img width="1400" height="900" src="${bigImg}">`
    );
    modalImg.show();


    window.addEventListener('keydown', closeModal);

    function closeModal(e) {
        if (e.code === 'Escape') {
            modalImg.close();
             window.removeEventListener('keydown', closeModal)
        }
    }
}




 
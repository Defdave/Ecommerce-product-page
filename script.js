const thumbnailImgs = document.querySelectorAll('.thumbnail-img')
const minusBtn = document.querySelector('.minus-btn')
const plusBtn = document.querySelector('.plus-btn')
const addToCartBtn = document.querySelector('.add-to-cart-btn')
const cartIcon = document.querySelector('.cart-icon')

// cart box
cartIcon.addEventListener('click', () => {
    document.querySelector('.cart-box').classList.toggle('show')
})


document.querySelector('.no-of-product').textContent = localStorage.getItem('noProduct') || 0

// getting the total number of items added to cart after reload
let totalNoProduct = document.querySelectorAll('.cart-icon sup')
totalNoProduct.forEach(total => {
    total.textContent = localStorage.getItem('totalNoProduct') || ''
})

// for getting desktop main view display after reload
document.querySelector('.main-img').src = localStorage.getItem('mainImg') || 'images/image-product-1.jpg'

function activeThumbnailImg() {
    let img = document.querySelector('.main-img').src

    selectCurrentActiveImg(img, thumbnailImgs)
}

activeThumbnailImg()


// function for selecting the active current thumbnail image
function selectCurrentActiveImg(mainimg, thumbnailImg) {
    img = mainimg.split('/')
    let imgURL = img[img.length - 1]
    
    if(imgURL == 'image-product-1.jpg') {
        thumbnailImg[0].classList.add('active')
    }
    else if (imgURL == 'image-product-2.jpg') {
        thumbnailImg[1].classList.add('active')
    }
    else if (imgURL == 'image-product-3.jpg') {
        thumbnailImg[2].classList.add('active')
    }
    else if (imgURL == 'image-product-4.jpg') {
        thumbnailImg[3].classList.add('active')
        }
}

// selecting the different thumbnailImgs to display on the mainview
thumbnailImgs.forEach(img => 
    img.addEventListener('click', () => {
        let mainImg = document.querySelector('.main-img')

        let activeImg = document.querySelector('.active')
        activeImg.classList.remove('active')

        changeMainView(img, mainImg)

        localStorage.setItem('mainImg', mainImg.src)

    })
)


// function for changing main View
function changeMainView(img, mainView) {
    let imgURL = img.src.split('/')
    imgURL = imgURL[imgURL.length - 1]
    
    img.classList.add('active')
    if(imgURL== 'image-product-1-thumbnail.jpg') {
        mainView.src = 'images/image-product-1.jpg'
    }
    else if (imgURL == 'image-product-2-thumbnail.jpg') {
        mainView.src = 'images/image-product-2.jpg'
    }
    else if (imgURL == 'image-product-3-thumbnail.jpg') {
        mainView.src = 'images/image-product-3.jpg'
    }
    else if (imgURL == 'image-product-4-thumbnail.jpg') {
        mainView.src = 'images/image-product-4.jpg'
    }
}

minusBtn.addEventListener('click', () => {
    let number = document.querySelector('.no-of-product').textContent
    number = parseInt(number)
    number--

    if (number >= 0) {
        noOfProduct(number)    

        localStorage.setItem('noProduct', number)
    }
})

plusBtn.addEventListener('click', () => {
    let number = document.querySelector('.no-of-product').textContent
    number = parseInt(number)
    number++

    noOfProduct(number)
    localStorage.setItem('noProduct', number)
})

function noOfProduct(int) {
    let number = document.querySelector('.no-of-product')
    number.textContent = int 
}

addToCartBtn.addEventListener('click', () => {
    let number = document.querySelector('.no-of-product').textContent
    let totalNoProducts = document.querySelectorAll('.cart-icon sup')

    totalNoProducts.forEach(total => {
        if (number > 0) {
            total.textContent = number

            localStorage.setItem('totalNoProduct', number)
        }
        else {
            total.textContent = ''

            localStorage.setItem('totalNoProduct', '')
        }
    })

    cartBox()
})


function cartBox() {
    let number = localStorage.getItem('noProduct') || 0
    let cartNumber = document.querySelector('.cart-icon sup').textContent || ''

    if(number > 0) {
        let cartIconStyle = document.querySelector('.cart-icon sup')
        cartIconStyle.classList.add('total-no-product')

        document.querySelector('.cart-box').innerHTML = `
            <h4>Cart</h4>
            <hr>
            <div class="sub-cart">
                <img class="cart-img" src="images/image-product-1-thumbnail.jpg" alt="">
                <div class="cart-text">
                    <p>Fall Limited Edition Sneakers</p>
                    <span>$125.00 x <span class="total-no-product">${cartNumber}</span></span> <span class="total"></span></span>
                </div>
                <i class="fa-solid fa-trash-can"></i>
            </div>
            <button class="checkout-btn">Checkout</button>`
            
            calTotal()
    }
    else if (number == 0) {
        let cartIconStyle = document.querySelector('.cart-icon sup')
        cartIconStyle.classList.remove('total-no-product')

        document.querySelector('.cart-box').innerHTML = '<h4>Cart</h4> <hr> <p class="cart-empty">Your cart is empty.</p>'
    }
   
    
    
}

cartBox()

function calTotal() {
    let total = document.querySelector('.total')
    let number = document.querySelector('.cart-icon sup').textContent
    let calTotal = 125 * parseInt(number)

    total.textContent = `$${calTotal}.00`
    
}

// light-box section

const thumbnailImgsLIghtBox = document.querySelectorAll('.thumbnail-img-light-box')
const cancelBtn = document.querySelector('.cancel-btn')
const lightBox = document.getElementById('light-box')
const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')
const mainImgLightBox = document.querySelector('.main-img-light-box')

// when main view image clicked image to display in the lightBox aspect
const mainImg = document.querySelector('.main-img')
mainImg.addEventListener('click', () => {
    let imgSrc = mainImg.src

    mainImgLightBox.src = imgSrc

    activeThumbnailImgIightBox()
    lightBox.style.display = 'block'
})

cancelBtn.addEventListener('click', () => {
    lightBox.style.display = 'none'
    document.querySelector('.thumbnail-img-light-box.active').classList.remove('active')
})

function activeThumbnailImgIightBox() {
    let img = document.querySelector('.main-img-light-box').src

    selectCurrentActiveImg(img, thumbnailImgsLIghtBox)
}


thumbnailImgsLIghtBox.forEach(img => 
    img.addEventListener('click', () => {
        let mainImg = document.querySelector('.main-img-light-box')
        let activeImg = document.querySelector('.thumbnail-img-light-box.active')
        activeImg.classList.remove('active')
    
        changeMainView(img, mainImg)

        })
)

leftBtn.addEventListener('click', () => {
    let imgURL = mainImgLightBox.src.split('/')
    imgURL = imgURL[imgURL.length - 1]

    if(imgURL == 'image-product-4.jpg') {
        mainImgLightBox.src = 'images/image-product-3.jpg'
    }
    else if (imgURL == 'image-product-3.jpg') {
        mainImgLightBox.src = 'images/image-product-2.jpg'
    }
    else if (imgURL == 'image-product-2.jpg') {
        mainImgLightBox.src = 'images/image-product-1.jpg'
    }
    else if (imgURL == 'image-product-1.jpg') {
        mainImgLightBox.src = 'images/image-product-4.jpg'
    }

    let activeImg = document.querySelector('.thumbnail-img-light-box.active')
    activeImg.classList.remove('active')

    activeThumbnailImgIightBox()
})

rightBtn.addEventListener('click', () => {
    let imgURL = mainImgLightBox.src.split('/')
    imgURL = imgURL[imgURL.length - 1]

    if(imgURL == 'image-product-1.jpg') {
        mainImgLightBox.src = 'images/image-product-2.jpg'
    }
    else if (imgURL == 'image-product-2.jpg') {
        mainImgLightBox.src = 'images/image-product-3.jpg'
    }
    else if (imgURL == 'image-product-3.jpg') {
        mainImgLightBox.src = 'images/image-product-4.jpg'
    }
    else if (imgURL == 'image-product-4.jpg') {
        mainImgLightBox.src = 'images/image-product-1.jpg'
    }

    let activeImg = document.querySelector('.thumbnail-img-light-box.active')
    activeImg.classList.remove('active')

    activeThumbnailImgIightBox()
})

// open nav btn
const openBtn = document.querySelector('.open-btn')
const closeBtn = document.querySelector('.close-btn')
const nav = document.querySelector('.nav')

openBtn.addEventListener('click', () => {
    nav.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
    nav.style.display = 'none'
})

// mobile show img
const mobileLeftBtn = document.querySelector('.mobile-left-btn')
const mobileRightBtn = document.querySelector('.mobile-right-btn')
const mobileImgs = document.querySelectorAll('.mobile-img')
const mobileImg = document.querySelector('.mobile-imgs')

let count = 0

mobileLeftBtn.addEventListener('click', () => {
    if (count > 0) {
        count--
    }
    else {
        count = mobileImgs.length - 1
    }
    mobileImg.style.transform = `translateY(-${count * 100}%)`
})

mobileRightBtn.addEventListener('click', () => {
    if (count < mobileImgs.length -1 ) {
        count++
    }
    else {
        count = 0
    }

    mobileImg.style.transform = `translateY(-${count * 100}%)`
})

const $ = document
const navbar = $.querySelector(".firstNavbar")
const openNav = $.querySelector('.openNav')
const closeNav = $.querySelector('.closeNav')
const bigImg = $.querySelector('.bigImg')
const manyspan = $.querySelector('.manyNum')
const btnplus = $.querySelector('.btn-plus')
const btnminus = $.querySelector('.btn-minus')
const littleimg = $.querySelectorAll('.littleimg')
const buycart = $.querySelector('.buyCart')
const popoverHover = $.querySelector('.popoverHover')
const addToCart = $.querySelector('.addToCart')
const numproductPopover = $.querySelector('.numproduct-popover')
const pricePopover = $.querySelector('.price-popover')
const badgeCart = $.querySelector('.badgeCart')
const checkOut = $.querySelector('.checkOut')


let imgSrc = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
]

window.addEventListener('resize', () => {
    let nowWidth = screen.width
    if (nowWidth > 992) {
        navbar.classList.remove('menu-respons')
    }
})

// responsiv nav
openNav.addEventListener('click', () => {
    navbar.classList.add('menu-respons')
})
closeNav.addEventListener('click', () => {
    navbar.classList.remove('menu-respons')
})

// Number of products
let many = 0
btnplus.addEventListener('click', () => {
    many++
    write(many)
})
btnminus.addEventListener('click', () => {
    many--
    write(many)
})
function write(many) {
    if (many > -1) {
        manyspan.innerHTML = many
    }
}

// Change the photo
littleimg[0].onclick = (e) => {
    removeStyle()
    bigImg.src = imgSrc[0];
    e.target.classList.add("little-action")
}
littleimg[1].onclick = (e) => {
    removeStyle()
    bigImg.src = imgSrc[1];
    e.target.classList.add("little-action")
}
littleimg[2].onclick = (e) => {
    removeStyle()
    bigImg.src = imgSrc[2];
    e.target.classList.add("little-action")
}
littleimg[3].onclick = (e) => {
    removeStyle()
    bigImg.src = imgSrc[3];
    e.target.classList.add("little-action")
}

function removeStyle() {
    littleimg.forEach((e) => {
        e.classList.remove("little-action")
    })
}

// buy cart
let numprice = 0
function removebox() {
    badgeCart.classList.remove("badgeCartshow")
    popoverHover.innerHTML = ""
    popoverHover.insertAdjacentHTML("beforeend", `
    <p class="fw-bolder text-center py-2 m-0">
            Cart
          </p>
          <hr class="m-0">
          <div class="text-center p-2">
            <p class="py-5">
              your Cart is empty
            </p>
          </div>
    `)
}
function ZarbPrice(many) {
    return many * 12500
}
addToCart.addEventListener("click", () => {
    if (many > 0) {
        badgeCart.innerHTML = many
        badgeCart.classList.add("badgeCartshow")
        numprice = Number(badgeCart.innerHTML)
    } else if (many <= 0) {
        numprice = Number(badgeCart.innerHTML)
        badgeCart.classList.remove("badgeCartshow");
    }
})
buycart.addEventListener('click', () => {
    popoverHover.classList.toggle("popoverBox")
    if (numprice > 0) {
        popoverHover.innerHTML = ""
        popoverHover.insertAdjacentHTML('beforeend', `
        <p class="fw-bolder text-center py-2 m-0">
            Cart
          </p>
          <hr class="m-0">
          <div class="text-center p-2">
            <!-- <p class="py-5">
              Your Cart is empty
            </p> -->
            <div class="d-flex align-items-center justify-content-between pb-2">
              <img src="./images/image-product-1-thumbnail.jpg" class="w-25 rounded">
              <div>
                <span class="fs-10">
                  Fall Limited Edition Sneakers
                </span><br>
                <span class="fs-10">
                  $125.00 * <span class="numproduct-popover">${numprice}</span><span class="price-popover fw-bolder ps-1">$ ${ZarbPrice(numprice)}</span>
                </span>
              </div>
              <img src="./images/icon-delete.svg" alt="delet" class="pointer" onclick="deleteProduct()">
            </div>
            <button class="py-2 px-3 text-white rounded border-0 bg-btn w-100 checkOut" onclick="hidePopover()">Checkout</button>
          </div>
        `)
    }else{
        popoverHover.innerHTML = ""
        popoverHover.insertAdjacentHTML('beforeend', `
        <p class="fw-bolder text-center py-2 m-0">
                Cart
            </p>
            <hr class="m-0">
            <div class="text-center p-2">
                <p class="py-5">
                your Cart is empty
                </p>
            </div>
        `)
    }
})
function hidePopover() {
    popoverHover.classList.remove('popoverBox')
}
function deleteProduct() {
    removebox()
}




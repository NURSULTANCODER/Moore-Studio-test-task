let totalCount = 0;
let totalPrice = 0;

const orderCount = document.querySelectorAll('.shop-list__item-count')
const deleteOrder = document.querySelectorAll('.shop-list__item-delete')
const shopListTittle = document.querySelector('.shop-list__title h2')
const arrow = document.querySelector('.shop-list__title span')

arrow.addEventListener('click', () => {
  arrow.classList.toggle('view')
  document.querySelector('aside').classList.toggle('view')
  document.querySelector('.shop-list').classList.toggle('view')
})

function calculateShop() {
  totalCount = 0;
  totalPrice = 0;
  document.querySelectorAll('.shop-list__item').forEach(item => {
    let count = Number(item.children[3].dataset.count)
    let price = Number(item.children[4].dataset.price)
    totalPrice += count * price
    totalCount += count
  })

  shopListTittle.innerText = `Корзина (${totalCount})`
  document.querySelector('.order__count').innerText = `Корзина (${totalCount})`
  document.querySelector('.main__header-shop span').innerText = totalCount
  document.querySelector('.order__price').innerText = totalPrice + 'c'
  document.querySelector('.order__total-price').innerText = totalPrice + 'c'
}



calculateShop()

deleteOrder.forEach(item => {
  item.addEventListener('click', () => {
    item.parentNode.remove()
    calculateShop()
  })
})

orderCount.forEach(item => {
  item.addEventListener('click', (e) => {
    if(e.target.className === 'plus') {
      item.dataset.count = Number(item.dataset.count) + 1 
    }else if(e.target.className === 'minus') {
      item.dataset.count = Number(item.dataset.count) - 1 
    }

    if(item.dataset.count === '0') {
      item.parentNode.remove()
    }

    item.children[1].innerText = item.dataset.count
    calculateShop()
  })
})


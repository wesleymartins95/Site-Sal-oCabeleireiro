const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
console.log(toggle)

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/*COMO FUNCIONA O BLOCO ACIMA?
toggle: para trocar ex: se tiver show tira, se não tiver coloca
-hey nav na sua classList tem 'show'?
-não tem.
-então coloque
- mas quando?
-quando a função for executada
-e como ela vai ser executada?
-quando der o 'click'
-quando der o click em quem?
-no element
-quem é o element?
- é o X q esta recebendo a classe toggle
*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove(
      'show'
    ) /* quero remover o show,pq se eu cliquei no menu para abrir a classe show foi colocada, agora tenho q retirar.*/
  })
}

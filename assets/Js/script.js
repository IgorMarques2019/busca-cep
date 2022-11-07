function search() {

  let cep = document.querySelector('#cep_search').value

  //Requisição
  const ajax = new XMLHttpRequest()
  ajax.open('GET', `https://viacep.com.br/ws/${cep}/json/`);
  ajax.send();
  
  ajax.onload = function () {
    let rua = document.querySelector('#rua')
    let bairro = document.querySelector('#bairro')
    let localidade = document.querySelector('#localidade')
    let uf = document.querySelector('#uf')
    let ddd = document.querySelector('#ddd')


    let obj = JSON.parse(this.responseText)
    rua.innerHTML = obj.logradouro
    bairro.innerHTML = obj.bairro
    localidade.innerHTML = obj.localidade
    uf.innerHTML = obj.uf
    ddd.innerHTML = obj.ddd

  }


}
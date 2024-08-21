let input = document.getElementById('input-add');
let btn = document.getElementById('button-add');
let main = document.getElementById('lista');

function addTarefa(){
    //pegar o que esta digitado no input
    let valorInput = input.value;

    //se não for vazio,null ou indefinido  
    if ((valorInput !=="")  &&  (valorInput!==null) && (valorInput!==undefined)){
        let novoItem = `<div class="item">

            <div class="item-icone">
                <i class="material-symbols-outlined">
                     radio_button_unchecked
                </i>
            </div>

            <div class="item-texto">
                tarefas a fazer
            </div>

            <div class="item-botao">
                <button class="deletar"><span class="material-symbols-outlined">
                     delete
                     </span>Deletar</button>
            </div>

            </div>`;
        }
}    


const container = document.getElementById('contenedor-inputs');
const addInputBtn = document.getElementById('crear-input');

let inputCount = 0;
if(addInputBtn && container){
addInputBtn.addEventListener('click', () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.id = `input-${++inputCount}`;
  input.addEventListener('click', ()=>{
    agregarImagen(input, deleteBtn);

  });
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Eliminar';
  deleteBtn.addEventListener('click', () => {
    deleteInput(input, deleteBtn);
  });

  const wrapper = document.createElement('div');
  wrapper.appendChild(input);
  wrapper.appendChild(deleteBtn);

  container.appendChild(wrapper);
});
}else{
  alert("Error total")
}
function deleteInput(input: HTMLInputElement, button: HTMLButtonElement) {
  const wrapper = button.parentElement;
  if (wrapper) {
      wrapper.remove();
  }else{
    alert("Error");
  }
}

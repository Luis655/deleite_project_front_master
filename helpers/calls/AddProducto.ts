import axios from 'axios';

interface ProductImage {
    idProducto: number,
    idCategoria: number;
    idTematica: number;
    nombreP: string;
    descripcionP: string;
    precio: string;
    imagenPrincipalchar?: string;
    popular: boolean;
    ingredienteselect: string;
    saludable: boolean;
  }
  const formProducto = document.getElementById('formProd') as HTMLFormElement;
  formProducto.addEventListener('submit', async (event) => {
   event.preventDefault();
  
    const nombreid = (document.getElementById('nombreid') as HTMLInputElement).value;
    const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
    const descripcion = (document.getElementById('descripcion') as HTMLTextAreaElement).value;
    const precio = (document.getElementById('precio') as HTMLInputElement).value;
    const imagenElement = document.getElementById('imagen') as HTMLInputElement;
    const imagen = await readFileAsBase64(imagenElement.files?.[0]);
  
    const productImage: ProductImage = {
      idProducto: parseInt(nombreid, 10),
      idCategoria: 1,
      idTematica: 1,
      nombreP: nombre,
      descripcionP: descripcion,
      precio: precio,
      imagenPrincipalchar: imagen,
      popular: true,
      ingredienteselect: 'Ingredientes del producto',
      saludable: true
    };
  
    const response = await axios.post<ProductImage>('https://localhost:7058//api/Producto/create', productImage);
  
    console.log(response.data);
  });
  
  function readFileAsBase64(file?: File): Promise<string | undefined> {
    return new Promise((resolve) => {
      if (!file) {
        resolve(undefined);
        return;
      }
  
      const reader = new FileReader();
      reader.readAsDataURL(file);
  
      reader.onload = () => {
        const base64Image = reader.result as string;
        resolve(base64Image);
        console.log(base64Image);
      };
    });
  }
import { CommonModule, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import jspdf, { jsPDF } from 'jspdf'
import { CarritoService } from '../../servicios/carrito.service';

@Component({
  selector: 'app-compra',
  standalone:true,
  imports: [ CommonModule, ReactiveFormsModule, NgIf],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})
export class CompraComponent implements OnInit {

  //declaracion de formulario reactivo para la compra
  formularioCompra!: FormGroup;

  //variable para almacenar el total de la compra (subtotal+envio)
  total!:number

  //costo fijo de envio
  envio = 5000

  //indicador para saber si la factura ya fue generada
  facturaGenerada = false

  //objeto que contiene la informacion de la factura generada
  factura: any

  //controla la visibilidad del modal que muestra el pdf
  mostrarModal = false

  //fuente segura para mostrar el pdf generado en el ifrem (URL sanitizada)
  pdfSrc: SafeResourceUrl | undefined;

  constructor(
    private fb:FormBuilder, //FormBuilder para crear el formulario activo
    private carritoService:CarritoService, //servicio para manejar el carrito y obtener producto total
    private sanitizer: DomSanitizer //para samitizar la URL del pdf y que angular lo pueda mostrar

  ){}

  //metodo que se ejecuta al inicializar el componente
  ngOnInit(): void {
    //formulario con lo s campos requeridos y validadores
    this.formularioCompra = this.fb.group({
      nombre:['',Validators.required],
      direccion :['', Validators.required],
      correo :['', [Validators.required, Validators.email]],
      telefono :['', Validators.required],
      codigoPostal :['', Validators.required],
      ciudad :['', Validators.required],
      provincia :['', Validators.required],
      metodoPago :['', Validators.required],
    })
  }
  //calcula el total de la compra sumando el subtotal y en costo de enivo
  calcularTotal():number{
    const subtotal = this.carritoService.obtenerTotal();//obtiene subtotal del carrito
    this.total = subtotal + this.envio
    return this.total
  }

  //prepara los datos para la factura con cliente, productos, totales y fechas
  emitirFactura():void{
    const datosCliente = this.formularioCompra.value; //datos ingresados del formulario
    const productos = this.carritoService.obtenerProductos(); //productos de carrito
    const totalFinal = this.calcularTotal(); //totalñ calñculado con envio

    //construye el objeto factura con todsa la info del usuario
    this.factura = {
      cliente:datosCliente,
      productos: productos,
      envio: this.envio,
      total:totalFinal,
      fecha: new Date()
    };

    //marca que la factura fue generada
    this.facturaGenerada = true;
  }

  //metodo que se ejecuta al finalizar la compra(click al boton)
  //verifica validez del formulario, genera factura y muestra PDF
  finalizarCompra(): void{
    if(this.formularioCompra.valid){
      this.emitirFactura(); //crea la factura
      this.generarPDFModal(); //genera y muestra el PDF en modal
    } else{
      this.formularioCompra.markAllAsTouched(); //marca todos los campos tocados
    }
  }

  //genera el PDF con jsPDF y crea la URL para mostrar dentro del modal
  generarPDFModal(): void{
    if(!this.factura) return; //si no hay factura que no haga nada
    const doc = new jsPDF(); //crea instancia jsPDF

    //agrgar titulo y fecha al PDF
    doc.setFontSize(18)
    doc.text('factura de Compra',14,20)
    doc.setFontSize(12);
    doc.text(`Fecha: ${this.factura.fecha.toLocaleString()}`, 14,30)
    //informacion del cliente 
    doc.text('cliente:',14,40)
    const c = this.factura.cliente;
    doc.text(`nombre: ${c.nombre}`,20,50);
    doc.text(`Direccion: ${c.direccion}`,20,60);
    doc.text(`Correo: ${c.correo}`,20,70);
    doc.text(`Telefono: ${c.telefono}`,20,80);
    doc.text(`Provincia: ${c.provincia}`,20,90);
    doc.text(`Ciudad: ${c.ciudad}`,20,100);
    doc.text(`Codigo postal: ${c.codigoPostal}`,20,110);

    //Listado de productos con cantidad, precio y subtotal
    let y = 120
    doc.text('Productos:',14,y)

    this.factura.productos.forEach((item:any, index:number) => {
      y += 10;
      doc.text(
        `${index + 1}. ${item.producto.Nombre} - Cantidad: ${item.cantidad} - Precio: ${item.producto.precio.toFixed(2)} - Subtotal: ${(item.producto.precio * item.cantidad).toFixed(2)}`,20,y
      )
    })

    //costos finales
    y += 10;
    doc.text(`Costo de Envio: $${this.factura.envio.toFixed(2)}`,14,y);
    y += 10;
    doc.text(`Total a pagar: $${this.factura.total.toFixed(2)}`,14,y);

    //convierte el PDF y generar una URL segura para Angular
  const pdfBlob = doc.output('blob')
  this.pdfSrc = this.sanitizer.bypassSecurityTrustResourceUrl(URL.createObjectURL(pdfBlob))

  //abre el modal que contiene el pdf
  this.mostrarModal = true;
  }

  //metodo para cerrar el modal y liberar la URL del PDF para evitar fugas de memoria
  cerrarModal(): void{
    this.mostrarModal = false;
    if(this.pdfSrc){
      URL.revokeObjectURL((this.pdfSrc as any).changingThisBreaksApplicationSecurity)
      this.pdfSrc = undefined
    }
  }
  //Metodo para impimir el PDF que esta cargando dentro del ifrem en la vista
  imprimirPDF(): void{
    //opbtener la referencia al elemento ifrem del DOM medinte su ID 'pdfframe'
    //puede devolver null si no se encuentra el elemento
    const ifrem : HTMLIFrameElement | null = document.getElementById('pdfFrame') as HTMLIFrameElement

    //verifica que la ifrem exista y que tenga un objeto contenwindow
    if(ifrem && ifrem.contentWindow){
      //le da foc al contenido del ifame para asegurarse que la venta correcta esta activa para imprimir
      ifrem.contentWindow.focus();
      //llama al estado print() de la ventana del iframe para abrir  la ventana de impresion del navegador
      ifrem.contentWindow.print();
    }
  }

}

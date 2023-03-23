let UsuarioReg, PassReg, Usering, PassIng;

UsuarioReg = "mauro";
PassReg = 1234;
Usering = prompt("ingrese su usuario");
PassIng = prompt("ingrese su clave");

function MostrarBienvenida(b) {
  alert(" has ingresado, Bienvenido "  + b );
}
 
if (UsuarioReg == Usering && PassIng == PassReg) {
    MostrarBienvenida(UsuarioReg);

}else
alert (" va a cambiar su contraseña");
PassIng = prompt("ingrese su clave");
CambiarContraseña (PassIng); 

function CambiarContraseña (PassIng){
    alert(" su contarseña se ha cambiado "  + PassIng);
 }
  
# Angular-From_HTML_Template_to_WebApp
Based in Udemy course to lear how transform a HTML template to WebApp in Angular


# 1. Introducción
## 1.1 Herramientas Necesarias
- Navegador Google Chrome para testear (https://www.google.com/intl/es_es/chrome/). Descargar e instalar.
- Node JS para cargar paquetes, ejecutar comandos de Angular, etc. La versión recomendable (https://nodejs.org/en). Descargar e instalar.
- Angular CLI, interfaz de linea de comnandos para algunar. En una terminal ejecutar "npm install -g @angular/cli"
- (Opcional) Git, para el control de versiones de código. Descargar e instalar. Y GitTortoise como interfaz de Git.
- (Opcional) Visual Studio Code (VSC), el IDE de Microsoft para desarrollar. Descargar e instalar. Este IDE soporta multitud de extensiones útiles que se pueden encontrar en /docs/extensiones-vsc.pdf. Las extensiones se instalan desde el mismo VSC pulsando en el menú lateral o Ctrl+Shift+X

## 1.2 Visual Studio Code extensions:
- 

## 1.3 Comandos utiles:
- Version de Node: node -v
- Versión de NPM: npm -version
- Instalar Angular: npm install -g @angular/cli
- Versión de Angular: ng version
- Creación de proyecto angular: ng new nombreApp
- Arrancar aplicación: ng serve -o
- Crear un componente: ng g c nombreComponente
- Ayuda en creación de componentes: ng g c --help


# 2 Estructuras HTML a componentes Angular
- Descargar el portfolio que servirá de base para la apliación. De la web o de los rescursos del curso (sección 2.7 / 2.8)
- Copiarlo dentro de la carpeta de trabajo
- Crear una carpeta docs donde almacenar los documentos (recursos del curso)
  
## 2.1 Iniciar proyecto Angular
- Con la instrucción "**ng new** portafolio" se crea un nuevo proyecto llamado portafolio. Crea además el componente principal de la aplicación **app.component**.
- Para levantar la aplicación "**ng serve -o**", este comando debe ejecutarse dentro del proyecto Angular (carpeta portafolio)

## 2.2 Estructura HTML basica en el proyecto Angular
- Dentro del proyecto "portafolio" en src > assets ya se crea una carpeta donde poder almacenar el contenido estático. Aquí se debe copiar los assets de la template descargada
- Abriendo al fichero index.html de la carpeta HTML de la template y pulsando en la opción Portfolio se puede ver la estrucutra de la página y analizando determinar los componentes de la WebApp. En este caso un **header**, un **body** y un **footer**. Tres componentes en total.
  ![Template Header](course_resources/imgs/template_header.PNG)
  ![Template Body](course_resources/imgs/template_body.PNG)
  ![Template Footer](course_resources/imgs/template_footer.PNG)
- Abriendo el código del index.html de la template se pueden ver todas las referencias a la carpeta assets (los elmenots link). Estos se deben copiar al index.html de la aplicación Angular.
  ![Template index.html links](course_resources/imgs/template_index_links.PNG)
- En la parte inferior del index.html de la template hay dos bloques de script, encargados de ejecutar lógica en la web. La acción a tomar es la misma que con los links, conpiar estos bloques y pegarlos también al final del index.html de la aplicación Angular.
  ![Template index.html scripts](course_resources/imgs/template_index_scripts.PNG)

  ## 2.3 Componente Header
- Como estructura de página el fichero "portfolio-masonry.html" parece el más actrativo y es el que se elegirá para crear los componentes
- Los recursos compartidos dentro de la misma aplicación los podemos almacenar creando una carpeta "shared" dentro de "src > app"
- Para crear el componente "ng g c shared/header --spec=false", la ultima parte es para indicar que no se cree el fichero de pruebas unitarias, pero este argumento ha sido cambiado en version es de Angular posteriores al curso, ahora hay que usar "--skip-tests", por lo que el comando queda "ng g c shared/header --skip-tes
  ![Header Component creation](course_resources/imgs/header_component_creation_console.PNG)
  ![Header Component creation](course_resources/imgs/header_component_creation_folder.PNG)
- Este componente es el encargado del header, por lo que, desde "portfolio-masonry.html" se copia el header y se lleva al html del componente.
  ![Header Component](course_resources/imgs/header_html_1.PNG)
- El componente creado tiene el selector **app-header**, por lo que se puede utilizar en el componente principal de la aplicación "app.component.html". Y esto se puede ver en el resultado final en el navegador.  
  ![App Component](course_resources/imgs/app_html_1.PNG)
  ![App](course_resources/imgs/app_browser_1.PNG)
- Siempre que se crea un componente este es añadido al módulo de la aplicación app.module.ts, es buena práctica verificarlo.
  ![App Module](course_resources/imgs/app_module.PNG)

  ## 2.4 Componente Footer
  - Al igual que se ha hecho para crear el componente header, se tiene que hacer para crear el componente footer.
  - Se debe tomar el footer del "portfolio-masonry.html" para el nuevo componente footer.
  - Se debe crear igual que antes, en este caso "ng g c shared/footer --skip-tests"
  - El nuevo componente tiene el selector **app-footer** que se debe usar para añadirlo al componente principal de la aplicación "app.component.hmtl"
  - Tras añadirlo, el footer aparecía oculto tras el header y además lo desplazaba. Si se añaden saltos de linea entre ambos selectores se podrá ver.
  ![App Component](course_resources/imgs/app_html_2.PNG)
  ![App](course_resources/imgs/app_browser_2.PNG)
  - En el footer aparece una fecha, esta está desactualizada. Se puede usar una instrucción angular para que siempre muestre la fecha actual. Para ello hay que añadir la lógica en el componente footer, en su fichero typescript (ts). Posteriormente entre llaves dobles se puede invocar la variable creada que contiene la fecha actual.
  ![Footer Component year](course_resources/imgs/footer_component_year.PNG)
  ![Footer Component year](course_resources/imgs/footer_component_year_html.PNG)

  ## 2.5 Componente Portafolio
  - Al igual que se ha hecho para crear el componente header y footer, se debe tomar el portafolio del "portfolio-masonry.html" para el nuevo componente portafolio. Se debe detectar los elementos de HTML que pertenecerían al cuerpo.
  - Se debe crear igual que antes, en este caso el portafolio no será común para todas las páginas, por lo que no se deberá crear en la carpeta shared, si no que se creará una carpeta nueva donde almacenar todas las posibles páginas a tener llamada "pages", por lo que el comanod sería "ng g c pages/portafolio --skip-tests"
  - La pagina se puede personalizar como se quiera, por ejemplo, quitar las categorías de portafolios y dejar sólo el tipo Masonry.
  - Cada componente sólo debe tener información única, y el componente creado posee un primer elemento **section** que se repite en otras páginas, por lo que se debe quitar del componente y añadir al HTML de la aplicación.
  ![App Component](course_resources/imgs/app_html_3.PNG)

  ## 2.6 Componente About
  - Como se viene haciendo, tomar el HTML de la template referente al about y crear un nuevo componente. Este es tipo página por lo que tendrá que ir a la carpeta pages y se le deberá eliminar el primer elemento section/div que ya se ha añadido al HTML del componente de la aplicación (app)
  - El comando a ejectuar debe ser "ng g c pages/about --skip-tests"
  - Por ahora no existe navegación, así que si se quiere ver el resultado de la creación de esta nueva página habrá que sustituirla en el app.component.
  ![App Component](course_resources/imgs/app_html_4.PNG)

  ## 2.7 Componente Item
  - Partir del portfolio-item.html y crear el componente tipo página llamado item. Se debe usar "ng g c pages/item --skip-tests"
  - Usarlo en el app.component para comprobar que se muestra correctamente
  ![App Component](course_resources/imgs/app_html_5.PNG)

  # 3 Creacion de rutas
  - Se puede usar Angular CLI para crear el routing, pero en este curso la idea es crear todo desde cero (o casi todo), por lo que en este caso habrá que crear un fichero en la carpeta app llamado "app-routing.module.ts" donde se configurarán las rutas de la aplicación. Es posible que en la creación del proyecto ya se haya creado este fichero (es mi caso), ya que dependerá de la versión de Angular.
  ![Routing](course_resources/imgs/routing_1.PNG)
  - El ruteo se podría añadir al app.module.ts, donde se declaran los componentes, pero se hace por separado para que no quede tan cargado.
  - En Angular, todo son clases, y para que estas se puedan usar se deben exportar, de ahí que se use la palabra **export** antes del **class**.
  - Para crear un módulo se debe usar del decorativo **@NgModule** e importarlo de **@angular/core**.
  - Las rutas quedan almacenadas en un array constante del tipo **Routes**, que debe ser importado de **@angular/router**. En esta constante es donde se alacenará el mapa de rutas componentes de la aplicación.
  - Al ir rellenando la constante de rutas (path y component) se deberían ir añadiendo automaticamente los imports necesarios, si no, habrá que añadirlos a mano. Se puede definir que cualuqier ruta que no declarada (**) se redireccione a otra, lo ideal, a la principal, el PortafolioComponent.
  ![Routing](course_resources/imgs/routing_2.PNG)
  - En el modulo de la aplicación (app.module.ts) si no se ha hecho de manera automatica, hay que importar el modulo de rutas AppRoutingModule creado.
  ![Routing](course_resources/imgs/routing_3.PNG)
  - En este punto se puede comprobar en el navegador las rutas aceptadas y las que no, pero no se verán cambios en la web. Se comrpueba escribiendo rutas que existen, permaneceran en el navegador y las que no redireccionarán a la principal, tal y como se ha definido. Es decir:
    - Escribir /about, el navegador mantendrá la dirección aunque por ahora no se verá nada
    - Escribir /item, el navegador mantendrá la dirección aunque por ahora no se verá nada
    - Escribir /hola, el navegador cambiará la dirección a '' que es lo que se ha definido, aunque por ahora no se verá nada
  - Ahora hay que indicarle a Angular que dependiendo de la ruta, renderice un componente u otro, es decir, use lo definido en el modulo de routing (app-routing.module.ts). Para ello se usa **router-outlet** en el HTML de la aplicación. Si al usar este selector en la web aparece un error se debe a que falta exportar en el modulo de ruta el RouterModule.
  - Si ahora se cambia la ruta la web se actualizará con el contenido de los componentes además de la redirección cuando sea necesario. Esto hace un full refresh, que no es lo deseado, aunque por ahora funciona.
  ![App Component](course_resources/imgs/app_html_6.PNG)
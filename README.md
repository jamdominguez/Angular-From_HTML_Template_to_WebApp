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
  ## 3.1 Definición de rutas
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

  ## 3.1 Full Refresh
  - Hay que indicarle a Angular que dependiendo de la ruta, renderice un componente u otro, es decir, use lo definido en el modulo de routing (app-routing.module.ts). Para ello se usa **router-outlet** en el HTML de la aplicación. Si al usar este selector en la web aparece un error se debe a que falta exportar en el modulo de ruta el RouterModule.
  - Si ahora se cambia la ruta la web se actualizará con el contenido de los componentes además de la redirección cuando sea necesario. Esto hace un full refresh, que no es lo deseado, aunque por ahora funciona.
  ![App Component](course_resources/imgs/app_html_6.PNG)

  ## 3.2 RouterLink
  - En este punto se va a editar en menú de navegación y el footer para que funcionen correctamente. Ahora mismo si se clicka en cualquier opción de la aplicación la ruta cambia para recuperar un recurso HTML, como ninguna de estas rutas está definida, siempre se redirecciona a la ruta por defecto como se indicon en el modulo de rutas.
  - El componente header es el que se encarga de pintar la cabecera, y por tanto el que se tendrá que modificar para que las opciones del mismo funcionen.
  - En su HTML contiene una sección con todos los href de los enlaces, esto en una aplicación Angular se debe cambiar para que no tenga que recargar completamente la página.
  ![Header with href](course_resources/imgs/header_html_2.PNG)
  - En Angular los href son susitutiidos por la directiva **routerLink** igualando la ruta deseada. Si se sustituyen los htref por las rutas de los componentes relacionados, se podrá observar como al clickar en ellos en la aplicación, la ruta va cambiando y los componentes apareciendo.
  ![Header with routerLink](course_resources/imgs/header_html_3.PNG)
  - Además se ha detectado que la clase "active" es la que cambia el estilo de la opción según esté seleccionada, pero ahora no está funionando. Para ello se usará Angular también.  Para ello se usa la directiva **routerLinkActive** igualandola a la clase deseada cuando esté activa, en este caso, "active". Añadiendo esta directiva lo que hace Angular es que si la ruta coincide con la del routerLink que contiene, pondrá la clase indicada en el routerLinkActive. Haciendo esto no termina de comportarse del todo, porque la ruta about también contiene ruta vacía, por lo que coincide y se activan Home y About a la vez al marca Home, no pasa marcando Homme.
  ![Header with routerLink](course_resources/imgs/header_html_4.PNG)
  - Para solventar lo anterior habrá que definir mejor el modulo de rutas. Para ello sustituiremos la ruta vacía "" por "home". También habrá que cambiarlo en el routerLink del header.
  ![Routing change empty rout by home](course_resources/imgs/routing_4.PNG)
  ![Header with routerLink](course_resources/imgs/header_html_5.PNG)
  - En el footer también hay links para sustituir por su versión en Angular, se puede cambiar también.
  - Por último sería cambiar los items, pero por ahora se hará sólo con el primero, esto está en el componente portafolio. En portafolio para configurar la llamada a item, aquí se usa "/item" ya que si no se pensaría que es una ruta hija, y en este caso es una ruta padre.
  ![Portafolio con item](course_resources/imgs/portafolio_html_1.PNG)

  ## 3.3 Hash Routing
  - Normalmente en los servidores las rutas se configuran en el archivo htaccess. La idea final de este curso es poder desplegar en GitHub Pages, donde no se tiene acceso a este archivo, por lo que no se podrá usar este tipo de rutas. El navegador pensará que tiene que buscar el directoro item, about, home, o cualquiera que se indique después del slash (/). Para solventar eso, usaremos el hash, es decir, que a la ruta se agregue un hash.
  - Para configurar el hash en las rutas es necesario modificar el app-routing.module.ts. Hay que añadir un parametro la import del RouterModule quedando:
  ![Routing with hash](course_resources/imgs/routing_5.PNG)
  - Probando la aplicación, ahora se introduce un hash previo a la ruta, esto le indica al navegador que no intente cargar el directorio que viene después del slash (/), sino que eso es parte de la ruta.
  ![Routing with hash in browser](course_resources/imgs/app_browser_3.PNG)
  ![Routing with hash in browser](course_resources/imgs/app_browser_4.PNG)

  # 4 Servicios, constantes y HTTP
  ## 4.1 Configuración de la aplicación usando JSON
  - Para configurar cosas globales de la aplicación, como enlaces a otras aplicaciones, nombres, emails, etc, se puede usar un JSON donde almacenar todo.
  - En la carpeta assets, crear una nueva carpeta llamada data y dentro un fichero JSON llamado "data-page-json".
  - Definir dentro de el json creado algunas propiedades fijas/constantes de la aplicación. Una de las propiedades debe almacenar el equipo de trabajo, yo la he llamado "work_team", por ahora no hace falta darle valor.
  ![Data page JSON](course_resources/imgs/data_page_json.PNG)
  - Para comprobar que la estrucutra de un JSON es correcta, se puede usar la web http://json.parser.online.fr/.

  ## 4.2 Servicio para consultar los datos
  - Un servicio se puede usar para compartir información global dentro de toda la aplicación, para manejar logica, etc. Se ha de crear un servicio que permita leer el JSON de la configuración en cualquier punto de la aplicación. La idea es que la configuración se cargue una sola vez al acceder a la aplicación.
  - Para crear un servicio en Angular hay que ejecutar el comando **ng g s services/infoPage --skip-tests**. Este comando creará el servicio infoPage dentro de una nueva carpeta services y en la creación de éste, no generará un archivo para test.
  - Tras crear el servicio se puede comprobar como el app-module.ts no fue actualizado automaticamente (como cuando se crea un componente). Los servicios normalmente se deberían importar y añadir al array de providers. Pero esto ya no es necesario, ya que en la definición del servicio tiene un decorado (**@Injectable**) que indica dónde ha de inyectar el servicio, y por defecto lo hace en "root".
  ![infoPage service](course_resources/imgs/info_page_1.PNG)
  - Ahora habría que invocar el servicio al iniciar la aplicación, es decir, en el "app.component.ts". Se debe crear un constructor y en el hacer la inyección de una dependencia. El nombre en la inyección puede ser cualquiera, pero se suele indicar como "_nombre" o "nombreService", a mi me gusta más la segunda opción.
  - Con sólo hacer la inyección, Angular llama al servicio automaticamente.
  ![infoPage service](course_resources/imgs/info_page_2.PNG)
  ![App HTML](course_resources/imgs/app_html_7.PNG)
  ![App browser](course_resources/imgs/app_browser_5.PNG)
  - Ahora hay que implementar en el servicio la lógica necesaria para obtener la información, para ello será necesario el uso de un modulo que permita hacer llamadas http, **HttpClientModule**. Habrá que importar este módulo en el app.module.ts. Si al añadirlo a los imports no se reconoce el módulo hay que añadir la importación manualmente tal y como se indica el la siguiente imagen.
  ![App module](course_resources/imgs/app_module_2.PNG)
  - En el InfoPageService hay que inyectar un servicio ya incluido en el módulo HttpClientModule que se acaba de importar a la aplicación. Se puede usar su función **get** para obtener la información en una dirección. Además se puede añadir un par de campos propios del servicio que se está implementando (InfoPageService) para guardar información relativa a la consulta hecha. Como se desconoce la información que se va a obtener al invocar la dirección mediante get, el tipo de objecto donde se guardará se define como **any** y con un boolean podemos controlar si ya hubo o no respuesta del servicio. *Si por alguna razón, se obtiene un 404 al intentar acceder al json habiendo escrito correctamente la dirección, cambia recompila la aplicación*.
  ![infoPage service](course_resources/imgs/info_page_3.PNG)
  ![App HTML](course_resources/imgs/app_html_8.PNG)

  ## 4.3 Interfaz para la información de página (DataPage)
  - Esta sección es opcional, pero aconsejable, ya que se explica cómo crear una interfaz para la respuesta obtenida en la consulta get al fichero data-page.json. De esta manera, la respuesta que se almacena en el campo info de tipo **any**, será del tipo interfaz que creemos, dotando así de identidad al objeto y conociendo sus propiedades.
  - Con el comando **ng g i interfaces/data-page interface** se crea la carpeta interfaces y dentro la interfaz DataPage. El ultim atributo "interface" es opcional, pero si no se pone, el nombre del fichero no contendrá ".interface" y por tanto habrá que cambiar el nombre a mano ya que la generación automática no lo hace (a diferencia que en los servicios). También se puede omitir, pero no respetaríamos la sintaxis que seguimos con los services.
  ![Data Page Interface commands](course_resources/imgs/data_page_interface_1.PNG)
  ![Data Page Interface](course_resources/imgs/data_page_interface_2.PNG)
  - Siempre está la opción de crear el fichero completamente de manera manual, al igual que con el resto de elementos de la aplicación, pero de ese modo no aprovecharíamos las ventajas de Angular CLI.
  - Ahora sólo quedaría añadir a la interfaz todo los campos del JSON, pero esto es muy tedioso. Con la extensión *JSON to TS* se puede hacer de manera automática.
  ![Data Page Interface](course_resources/imgs/data_page_interface_3.PNG)
  - En este momento dentro del servicio info-page es posible dotar de entidad a la respuesta de la llamada cambiando any por el tipo DataPage. Pero se nos marca error, ya que no se puede inicializar a objeto vacío.
  ![Data Page Interface](course_resources/imgs/info_page_4.PNG)
  - La manera de solventar esto es indicarle a Angular que todas las propiedades de la intefaz son opcionales. Esto se hace añadiendo un **?** a todas las propiedaes. Además, si se especifíca que la respuesta en la llamada al get es tipo DataPage, TS reconocerá las propiedades del objeto.
  ![Data Page Interface](course_resources/imgs/info_page_5.PNG)

  ## 4.4 Using InfoPageService
  - En este punto, cuando se accede a la aplicación, se inyecta el servicio y como se ha implementado, en el constructor del mismo almacena en su campo info la respuesta de la llamada a obtejer el fichero JSON. Este campo info es de tipo DataPage y se puede usar en distintas partes de la aplicación para obtener la información obtenida.
  - Los componentes footer y header se van a beneficiar de esta información, por tanto deberán importar el servicio e inyectarlo en el constructor para poder acceder a su campo info y las diferentes propiedades usando **{{}}**. También se puede poner entre **[]** el atributo que se quiere asociar a la propiedad y usar esta sin las llaves (cono en el ejemplo del footer)
  ![Header ts](course_resources/imgs/header_ts_1.PNG)
  ![Header html](course_resources/imgs/header_html_6.PNG)
  ![Footer html](course_resources/imgs/footer_html_1.PNG)

  ## 4.5 Adding animations
  - Se agregar animaciones a los elementos de la web con css. Animate.css son un conjunto de clases que permite hacer este tipo de animaciones facilmente.
    - Fichero: https://github.com/animate-css/animate.css/blob/main/animate.css
    - Documentación: https://animate.style/
  - El fichero src > styles.css es el que contiene los estilos css de la aplicación, por ahora debería estar vacío. Aquí se deben añadir las clases que se van a utilizar (fadeIn).
   ![Styles css](course_resources/imgs/styles_1.PNG)
  - Ahora se puede agregar la animación a las fotos en about, para ello, en los elementos de las imágenes, agregar a su atributo class la clase **animate__animated animate__fadeIn**. Por ejemplo al primer item de portafolio y a la primera imagen del about.
  ![Portafolio html](course_resources/imgs/portafolio_html_2.PNG)
  ![About html](course_resources/imgs/about_html_1.PNG)

  # 5. Backend with FireBase
  Firebase es un servicio que proporciona una base de datos muy parecida a Mongo, es decir, base de datos documental. Este tipo de base guarda los objetos en tipos muy parecidos a los de JavaScript. Además de esto proporciona un backend con los servicios rest para poder consultar la base de datos.
  ## 5.1 Data Base creation with Firebase
  - La idea de este punto es almacenar la información de los componentes del equipo (la información de about) en una base de datos y mediante un servicio rest que provea Firebase acceder a esta información.
  - Acceder a Firebase en https://firebase.google.com/, para ello se debe estar registrado. Pulsar el "Go to console" y pulsar en la tarjeat "Agregar proyecto"
  ![Firebase web](course_resources/imgs/firebase_1.PNG)
  - Ahora hay que ir rellenando la información necesaria, como nombre de proyecto (angular-from-html-to-webapp), país y aceptar las condiciones. Yo he dejado Google Analytics activo ya que es gratuito y en un futuro podría aportar información relevante. Finalizar pulsando en "Crear proyecto". Tarda menos de un minuto en crearse el proyecto.
  ![Firebase web](course_resources/imgs/firebase_2.PNG)
  ![Firebase web](course_resources/imgs/firebase_3.PNG)
  ![Firebase web](course_resources/imgs/firebase_4.PNG)
  - Pulsar en el menú lateral "Todos los productos", se podrá ver todo lo que proporciona Firebasse. Una de las opciones es Realtime Database, pulsar en ella.
  ![Firebase web](course_resources/imgs/firebase_5.PNG)
  ![Firebase web](course_resources/imgs/firebase_6.PNG)
  ![Firebase web](course_resources/imgs/firebase_7.PNG)
  - Pulsar en "Crear una base de datos", elegir la ubicación más cercana a su localización para la base de datos, en reglas de seguridad elegir "modo de prueba" y pulsar "Habilitar". Una vez creada, acceder al tab "Reglas" y en read escribir true en write escribir false, para ser nosotros los únicos que pueden escribir. Después pulsar "Ctrl+s" o pulsar "Publicar".
  ![Firebase web](course_resources/imgs/firebase_8.PNG)
  - En la pestaña "Datos" es donde se gestionan los datos de la base de datos. Poniendo el icono sobre la dirección aparece un + que sirve para añdir la información. Como lo que se quiere es añadir la información en about, hay que ir añadiendo filas hasta que quede como en la siguiente imagen.
  ![Firebase web](course_resources/imgs/firebase_9.PNG)
  - La primera fila representa el campo "team", la siguitente el primer miembro "0" y las que cuelgan de este, son los diferentes campso para cada miembro como puede ser message, name, subtitle, twitter. Después de ello pulsar agregar. Lo siguiente sería crear una entrada por cada componente del about.
  - Clicando sobre "work_team" la url cambia, si se pulsa sobre el icono del "lik", el que está a la izquierda de la url, se copiará al porta papeles. En mi caso https://angular-from-html-to-webapp-default-rtdb.europe-west1.firebasedatabase.app/work_team. Si en el navegador se pega esta dirección concatenado de **.json**, se estará invocando al servicio REST que devuelve el JSON del objeto ("tabla") "work_team" que se acaba de crear. En total sería la dirección **https://angular-from-html-to-webapp-default-rtdb.europe-west1.firebasedatabase.app/work_team.json**
  ![Firebase web](course_resources/imgs/firebase_10.PNG)
  ![Firebase web](course_resources/imgs/firebase_11.PNG)
  - Lo que quedaría por añadir son las imagenes (fotos) de cada persona que aparece en el about. Estas las podemos almacenar en el "Storage" de Firebase. Pulsar en el menú de la izquierda "Storage", después "Comenzar" y una vez creado el la pestaña "Reglas" modificarla para que todo el mundo pueda leer, quedando:
  ![Firebase web](course_resources/imgs/firebase_12.PNG)
  - Desde la pestaña de "Archivos", seleccionar "Subir archivo". Seleccionar de dentro del proyecto de la aplicación "assets > img", los fichero team-1.jpg, team-2.jpg y team-3.jpg.
  ![Firebase web](course_resources/imgs/firebase_13.PNG)
  - Seleccionando la primera imagen, después en la parte inferior derecha, clicakndo sobre el hash bajo "Token de acceso" se copiará al porta papeles la dirección de la imagen. Si se pega en el navegador se podrá ver.
  ![Firebase web](course_resources/imgs/firebase_14.PNG)
  - Ahora, habrá que copiar esta dirección y almacenarla en cada elemento del objeto "work_team" creado previamente. El campo que almacenará esta dirección se llamará "url".
  ![Firebase web](course_resources/imgs/firebase_15.PNG)

  ## 5.2 Using Firebase REST service to get work_team information
  - Si se recuerda, anteriormente el servicio InfoPageService obtenia de un json almacenado en el proyecto información de la web, pero se dejó sin informar el campo "work_team". En este punto, lo que se hará es una llamada al servicio REST de Firebase que expone el objeto "work_team" creado en el punto anterior para obtener la información.
  - En el servicio InfoPageService, agregar una llamada get para obtenerla información y guardarla en el campo info.work_team. En la siguiente imagen se muestra como se ha hecho junto con una pequeña estructuración del fichero "info-page-service-ts". Tras el cambio y recarga de la aplicación, se podrá ver en los logs que se obtienen los datos incluidos en Firebase.
  ![Firebase web](course_resources/imgs/info_page_6.PNG)
  ![Firebase web](course_resources/imgs/info_page_7.PNG)
  - Ya con la información se podría crear un interfaz al igual que antes para dotar de identidad al objeto obtenido en la llamada (también se puede usar sin interfaz). Y así, con mayor fiabilidad usar los campos en el HTML del componente about para mostrar la información, aunque previamente hay que inyectar el servicio en el componente about.
  ![Firebase web](course_resources/imgs/about_1.PNG)
  - Ahora en el HTML podemos añadir la información. Este es buen momento para usar las ventajas de Angular. Como se requiere mostrar 3 "tarjetas" (div) de los componetnes del equipo (Work_team), se puede usar la instrucción / directiva ***ngFor="let person of infoPageService.team"** en una sola tarjeta (div) e iterar a lo largo del array team. Esta instrucción lo que hace es repetir el div por cada elemento de team, y en cada iteración lo guarda en la variable person, por lo que usando esta variables se puede acceder a la infromaciónd e cada componetne del quipo. Como se puede ver en la siguiente imagen, ahora sólo hay un div que se repetirá tantas veces como componentes / miembros del equipo y se usa la variable person para acceder a la información.
  ![Firebase web](course_resources/imgs/about_html_2.PNG)
  ![Firebase web](course_resources/imgs/about_web_1.PNG)

  # 5.3 Exporting and importing information to Firebase
  - La idea es cargar toda la información de la web de manera dinámica. En el recurso adjunto de la clase del curso está la información necesaria.
  - Previamente a añadir la información, se debe hacer una backup de la base de datos creada. Para ello, en los tres puntos a la derecha de la dirección de la base de datos en Firebase Realtime, pulsar "Exportar JSON". Esto exporta el JSON con la información añadida hasta ahora que debería ser sólo el objeto "work_team".
  ![Firebase web](course_resources/imgs/firebase_16.PNG)
  - Es posbile importar JSON en la base de datos y así se crearán los objetos necesarios. Para ello, de los recursos del curso, obtener productos.json y productos_idx.json. Previo a ello hay que crear un nodo temporal para productos, esto se hace clicando en la url o en el lapíz que aparece a su derecha en Firebase y editandola concatenando "productos" al final. Es en esta url donde se debe clickar en los tres puntos e "Importar JSON" para importar el productos.json.
  ![Firebase web](course_resources/imgs/firebase_17.PNG)
  ![Firebase web](course_resources/imgs/firebase_18.PNG)
  - Repetir lo mismo para crear el objeto productos_idx. Una vez hecho esto, clickando en la url de la base de datos se puede observar la estructura con los nuevos objetos.
  ![Firebase web](course_resources/imgs/firebase_19.PNG)

  ## 5.4 Creating ProductsService and building items
  - En esta sección se va a crear un servicio para obtener los productos y poder así construir la parte del home de la aplicación (componente portfolio)
  - Usando el comando **ng g s services/products --skip-tests** se creará el servicio. Nótese que no hace falta añadir al comando el atributo service para que Angular le concatene la palabra Service al mismo.
  - En el constructor se inyecta la clase HttClient ya que se necesitará para hacer peticiones a Firebase. Además se añadirá un flag "loading" que indicará si se está cargando la información desde el servicio o no, éste será utilizado en el futuro.  
  - Como buena práctica hay que crear una interfaz para la respuesta de este servicio. El comando sería **ng g i interfaces/products interface**, se puede tomar de la consola del navegador el JSON de la respuesta y usando la extensión "JSON to TS" implementar el products.component.
  ![Product interface](course_resources/imgs/product_interface_1.PNG)
  ![Products service](course_resources/imgs/products_service_1.PNG)


  - Dónde llamar a este servicio depende de cada uno. En este caso, se puede hacer an al app.component o en el portafolio.component. Pero lo optimo es hacerlo en el app.component, ya que aquí sólo se llamará una sóla vez al acceder a la web. Si se pone en el portfolio.component, cada vez que se acceda a home de la web se llamará al servicio. A priori, la información sobre productos no cambia mientras navegamos por lo que lo ideal es hacerlo al cargar la web.
  ![App component](course_resources/imgs/app_component_1.PNG)
  - Antes de empezar a usar la información obtenida hay que arreglar un error en el campo url de los elementos del objeto productos_idx en Firebase. En los campos url que contengan ".jpg" se deberá elimnar esta extensión, dejando sólo el nombre del fichero. Después de modificar el campo url, se puede verificar en el log del navegador que ahora responde sin ".jpg".
  ![Firebase web](course_resources/imgs/firebase_20.PNG)
  ![Web application](course_resources/imgs/app_browser_6.PNG)
  - El servicio lo vamos a usar el el componente portfolio, por lo que deberemos inyectarlo también aquí (portafolio.component.ts) para poder recuperar la información y pintarla en su HTML (portafolio.component.html). Este HTML va a quedar mucho más simple ya que todos los items se recuperan del servicio y con la misma directiva / instucción que se usó en el about se puede iterar en el array de productos, ***ngFor="let item of products"**.
  - Hay que tener en cuenta que las imagenes de los productos están en los recursos proporcionados en el curso anteriormente, en la carpeta "productos" del último zip del curso, por lo que habrá que copiarla y pegarla en la carpeta "assets" del proyecto para poder acceder a ellos.
  ![Project structure](course_resources/imgs/project_structure.PNG)
  ![Portafolio component](course_resources/imgs/portafolio_component_1.PNG)
  ![Portafolio HTML](course_resources/imgs/portafolio_html_3.PNG)
  - Quedaría pendiente que al seleccionar un item, aparezca la información del mismo, lo cual no está pasando ahora mismo. Para ello habrá que enviar el id del item para así poder recuperarlo en el componente item.
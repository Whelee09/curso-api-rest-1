## Documentacion de la api usada en el proyecto

[the cat api](https://thecatapi.com/)

### endpoint
rutas como api.com/algo

### query parameters

informacion extra para los endpoints.
Usamos '?' para un query parameter y '&'cuando queremos concatenar mas parametros

### http status code
[documentacion](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

### api key
basicamente es una key para poder accceder a la api, hay mejores formas de autenticar pero 
con fines practicos esta es facil/sencilla de entender


### metodos http

+ get
+ post 
+ put and patch
+ delete


### content type 

[commons content types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)

## form data
En el proyecto recuperammos un objeto formData para pasarlo en el body de la solicitud

Sin embargo tiene mas usos como los mostrados [aqui](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)


#### otras alternativas a fetch
+ axios
+ trae.js 



## mode:
[documentacion](https://developer.mozilla.org/en-US/docs/Glossary/CORS)
+ cors
+ no-cors
+ same-origin

## cache(tratar de no tocarlo a menos de que toque): 
+ default
+ no-store
+ reload
+ no-cache
+ force-cache
+ only-if-cached

## redirect (codigos 300-399) 
que hacer en caso de redireccion??

+ follow
+ error
+ manual


### tips/recomendaciones
+ analiza el codifo de fecth
+ build your own fetch


### mas alla del rest

+ sendBeacon

No espera una respuesta del servidor. 
Es buena idea para analytics(tipo google analiytics)


#### GraphQL

+ empowered clients
+ all request on the same endpoint

para no tener distintos endpoints, todo junto, en el front end decidimos como queremos que nos llegue la respuesta


#### Web Sockets

+ dejar el "tunel abierto"
+ util para aplicaciones real-time




## Web 3.0

+ Dapps: aplicaciones descentralizadas


### Otra manera de enviar la peticion de subir imagenes
```javascript
instanceAxios({
  method: "post",
  url: "/images/upload",
  data: formData,
    headers: { "Content-Type": "multipart/form-data" },
  })
  .then(function ({data}) {
     console.log(data);
     saveCatFav(data.id)
 })

```




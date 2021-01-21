# API GitHub
Obtiene información de un usuario de github

## Instalación 

```
npm install githubjs-api
```

## consola de node

```
const api = require('./')
api.getUserInfo('jcvaldes').then(resp => console.log(resp))
```

## Uso

```
const api = require('githubjs-api')
api.getUserInfo('jcvaldes')
  .then(resp => console.log(resp))
  .catch(err => console.error(err))
```

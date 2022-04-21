import Router from 'koa-router'
import { append } from 'koa/lib/response'
import getHealth from './health/health'
import {KEY,SECRET} from '../utils/constants'
import objeto from '../utils/uuid'
function getToken(id,secret,key){
    const us= require ('../data/users')
    const usuarios =us.getUsers()
    // Para obtener los usuarion

    usuarios.forEach(usuarios => {   // Para revisar uno por uno los usuarion
       if(usuarios.id===id){
        console.log("El usuario efectivamente existe.")
        if(KEY===key && SECRET===secret){
                 console.log("Todos los parametros son correctos")
                 token = objeto.getUUIDV4()
                 console.log("Token:  ",token)
        }
        if(KEY!==key){
            console.log("Error!!!! La 'Key' ingresada es incorrecta")
        }
        if(SECRET!==secret){
            console.log("Error!!!! El parametro 'secret' ingresada es incorrecta")
        }
    }
    return token
});

}
const router = new Router()
var token
router.get('/health', getHealth)


//Aqui ingresaras los datos a consultar
//Recuerda que la id puede obtener valores entre 1 y 100000
//getToken(Id,Secret,Key) ----->Formato necesario para getToken()
getToken(10000,"f68747ae-731f-46f6-92a8-c21180ff7b59","tel335")

router.put('/api/users',(req,res)=>{
    res.send(users)
});
const APY_KEY = 'mis-credenciales'
export default router

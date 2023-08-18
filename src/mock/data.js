const list = [
    {id:'01', category: 'tintos', name: 'Extraterrestre', stock: '48', price: '1900', description: 'Malbec', img: '../img/extraterrestre.jpg'},
    {id:'02', category: 'tintos', name: 'Casimiro', stock: '28', price: '3200', description: 'Malbec OAK', img: '../img/casimiro.jpg'},
    {id:'03', category: 'blancos', name: 'Abismal', stock: '32', price: '3400', description: 'Naranjo Torrontés', img: '../img/abismal.png'},
    {id:'04', category: 'rosados', name: 'Porfavor', stock: '24', price: '2000', description: 'Rosé Syrah', img:'../img/porfavor.png'},
    {id:'05', category: 'tintos', name: 'Lamuchi', stock: '54', price: '2400', description: 'Bonarda Especial', img:'../img/lamuchi.png'},
    {id:'06', category: 'blancos', name: 'CASIR dos Santos', stock: '34', price: '2800', description: 'Sauvignon Blanc', img:'../img/casirdossantos.png'},
    {id:'07', category: 'tintos', name: 'Desfachatados', stock: '22', price: '1900', description: 'Malbec', img:'../img/desfachatados.png'},
    {id:'08', category: 'tintos', name: 'Camuñas', stock: '35', price: '3200', description: 'Syrah', img:'../img/camuñas.png'},
    {id:'09', category: 'tintos', name: 'tres PIRA2', stock: '52', price: '3000', description: 'Malbec 2021', img:'../img/trespirados.png'},
    {id:'10', category: 'blancos', name: 'Tajungapul', stock: '44', price: '3500', description: 'Tempranoir', img:'../img/tajungapul.png'},
  ]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      let error = false
      setTimeout (()=> {
        if (error) {
          reject ('No hay información, intente más tarde')
        } else {
          resolve (list)
        }
      }, 2000)
    })
}

export const getItem = (id) => {
    return new Promise ((resolve) => {
        setTimeout (()=>{
            resolve(list.find ((item)=> item.id === id))
        },2000)
    })
}
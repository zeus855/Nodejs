const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout    

});

let contact = [];

const command = ()=> {
    rl.question('Hey sir i\'m, Enter /help to display a list of comands. Command :',(command)  => {
        
 switch(command){
    case '/help':
        help()
        break;
    case '/add':
        add()
        break;
    case '/list':
        list()
       break;
    case '/delete':
        deleteUser()
        break;
    case '/stop':
        stop()
        break;       
    default:
        console.log('command not found'); 
}
})};


const help = () =>{
    console.log('There is the details of differents commands available :');
    console.log('/help : Display all the commands available :');
}


const add = () =>{
    console.log('Let\'s add a new contact !');
    rl.question('what is the first name of your contact :' ,(prenom) => {
        console.log(prenom);
        rl.question('what is the family name of your contact : ', (nom) => {
            console.log(nom);
            rl.question('whats is the phone number of Yacoub Gbane: ',(numero) => {
                contact.push(
                    {prenom,
                     nom,
                     numero}
                    )
                    command()
                 
            })
        })

    })
}

const list = () =>{
    contact.map((element, index) => {
    console.log(` ID ${index} : ==> ${element.prenom} ${element.nom}`);
    console.log(` Phone number : ${element.numero}`);

});    
    
    command();
};


const deleteUser = () =>{
    // list();
    rl.question('Wich contact do you want to delete ? ', (id) => {
        contact.splice(id)
        console.log('Contact deleted! ');
         command();   

    })
    
}





const stop = () =>{
    console.log('Thanks you tor using our application! ');
    rl.close();
}



command();

const fs = require('fs');
const path = require('path');

const clientsFilePath = path.join(__dirname, '../data/clientsDataBase.json');
const clients = JSON.parse(fs.readFileSync(clientsFilePath, 'utf-8'));


const controller = {
    home:(req,res)=>{
        res.sendFile('/Users/home/Documents/Node/proyecto-KRAK/src/views/home.html')
    },
    contact:(req,res)=>{
        res.sendFile("/Users/home/Documents/Node/proyecto-KRAK/src/views/contact.html")
    },
    store: (req, res) => {
		let clients = JSON.parse(fs.readFileSync(clientsFilePath, 'utf-8'));
		let newClient = {
			name: req.body.nombre,
			phoneNumber: req.body.telefono,
			email: req.body.email,
			question: req.body.consulta,
		}

		clients.push(newClient);
		//let clientsJSON = JSON.stringify(clients);
		fs.writeFileSync(clientsFilePath, JSON.stringify(clients, null, ' '));

		res.redirect('/')
		
	}
}

module.exports = controller
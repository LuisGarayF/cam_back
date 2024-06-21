const express = require('express');
const { EufySecurity } = require('eufy-security-client');
const app = express();
const port = 3001;

app.use(express.json());


async function connectToEufy() {
    const client = new EufySecurity({
        username: 'luis.alexander.garay@gmail.com',
        password: 'L3tm31n1.*',
    });

    try {
        await client.connect();
        console.log("Conectado a Eufy Security");
        // Ahora puedes realizar operaciones con la instancia `client`
    } catch (error) {
        console.error("Error al conectar con Eufy Security:", error);
    }
}


connectToEufy();

app.get('/api/cameras', async (req, res) => {
    try {
        const devices = await eufyClient.getDevices();
        res.json(devices);
    } catch (error) {
        console.error('Error fetching cameras:', error);
        res.status(500).json({ message: 'Error fetching cameras' });
    }
});

// Aquí añadirías más endpoints para iniciar/detener stream, etc.

app.listen(port, () => {
    //console.log( styleText('bold',styleText('blue,'`Server listening at http://localhost:${port}`)));
    console.log('\x1b[34m%s\x1b[0m', `Servidor desplegado en: http://localhost:${port}`);

});

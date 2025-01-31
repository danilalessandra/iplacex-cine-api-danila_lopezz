import express, {urlencoded} from 'express';
import cors from 'cors'
import actorRoutes from './src/pelicula/routes.js'; 
import peliculaRoutes from './src/actor/routes.js';
import client from './src/common/dbconn.js';

const PORTS = 3000
const app = express()

app.use(express.json())
app.use(urlencoded( { extended: true }))
app.use(cors())

app.all('/', (req, res) => { return res.status(200).send('Bienvenido al cine Iplacex') })

app.use('/api/pelicula', peliculaRoutes);
app.use('/api/actor', actorRoutes);

const startServer = async () => {
  try {
    await client.connect();
    console.log('Conectado al clúster');
    
    // Iniciar el servidor si la conexión es exitosa
    app.listen(PORTS, () => {
      console.log(`Servidor corriendo en http://localhost:${PORTS}`);
    });
  } catch (error) {
    console.error('Ha ocurrido un error al conectar al clúster de Atlas:', error.message);
    console.error('Detalles del error:', error);  // Esto te dará más información sobre el error.
    process.exit(1);  // Detener el proceso si la conexión falla
  }
};

// Iniciar servidor
startServer();
























































































































































































































































































































































































































































































































































































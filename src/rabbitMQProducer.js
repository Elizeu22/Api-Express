import amqp from 'amqplib';
import "dotenv/config";
import CorretoraController from "./controllers/corretora.js"


class conexaoRabbitMQ{

static async conexao(publish){
    const connection = await amqp.connect({
        hostname:'localhost',
        port:5672,
        username:process.env.USERNAME_RABBIT,
        password:process.env.PASSWORD_RABBIT
    })

    const canal = await connection.createChannel();

    await canal.assertQueue('corretora',{
        durable:true
    })

   canal.publish('','corretora',Buffer.from(JSON.stringify(publish)));


    await canal.close();
    await connection.close();
}
}


export default conexaoRabbitMQ
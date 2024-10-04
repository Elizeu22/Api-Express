import amqp from 'amqplib';
import "dotenv/config";

class conexaoConsumer{
static async  conexaoConsumer(consume){
    const connectionConsumer = await amqp.connect({
        hostname:'localhost',
        port:5672,
        username:process.env.USERNAME_RABBIT,
        password:process.env.PASSWORD_RABBIT
    })


    const canalConsumer = await connectionConsumer.createChannel();

    await canalConsumer.assertQueue('corretora',{
        durable:true
    })



    canalConsumer.consume("corretora",(consume)=>{
        console.log(consume.content)
        console.log("Dados consumidos com sucesso")
    })

}
}

export default conexaoConsumer
import { createServer, Factory, Model } from "miragejs";
import faker from "@faker-js/faker";

type User = {
    name: string;
    email: string;
    created_at: string;
}

export function makeServer() {
    const server = createServer({

        models: {
            user: Model.extend<Partial<User>>({})
        },

        // Gera dados em massa
        factories: {
            user: Factory.extend({
                name(i: number) {
                    return  `User ${i + 1}`
                },
                email() {
                    return faker.internet.email().toLowerCase();
                },
                createdAt() {
                    return faker.date.recent(10)
                },
            })

        },
        // Cria os dados no momento que inicia a aplicação
        seeds(server) {
            server.createList('user', 10)
        },

        routes() {

            this.namespace = 'api';
            this.timing = 750; // toda chamada irá demorar 750 ms p/ carregar p/ testar loadings, etc..

            this.get('/users');
            this.post('/users');

            this.namespace = ''; // volta p/ status original para nao atraapalhar api routes
            this.passthrough(); // passa adiante p/ rota original caso nao tenha interceptado pelo mirage
        }
    })

    return server;
}
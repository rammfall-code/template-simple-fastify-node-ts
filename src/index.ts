import fastify from 'fastify';

const server = fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});

server
  .listen({
    port: 4043,
  })
  .then(() => {
    server.log.info('Started');
  });

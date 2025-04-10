import redis from 'redis';

const redisPort: string | undefined = process.env.REDIS_PORT || '6379';
// const redisHost: string | undefined = process.env.REDIS_HOST || '127.0.0.1';

export const redisClient = redis.createClient({
  url: `redis://localhost:${redisPort ?? '6379'}`,
});

redisClient.on('ready', () => {
  console.log('Redis is ready');
});

redisClient.on('error', (err) => {
  console.log('Redis Client Error', err);
});

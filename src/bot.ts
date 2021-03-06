import { RoleClient } from './client/RoleClient';

const client: RoleClient = new RoleClient();
client.start();

client.on('disconnect', () => process.exit(100));

process.on('unhandledRejection', (reason: string) => {
	if (/ETIMEDOUT|getaddrinfo|Something took too long to do/.test(reason)) process.exit(200);
	else console.error(reason);
});

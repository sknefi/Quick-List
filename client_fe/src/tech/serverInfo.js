const port = 3001;
const serverUrl = `http://localhost:${port}`
const eventUrl = `${serverUrl}/event`
const userUrl = `${serverUrl}/user`

export const serverInfo = {
		port,
		url: serverUrl,
		eventUrl,
		userUrl
}

import { serverInfo } from "../serverInfo";

export async function createEventSC(event) {
	const state = "pending";
	const error = null
	const urlCall = `${serverInfo.eventUrl}/create`;
	const { id, ...eventTotSend } = event;
	try {
		const response = await fetch(urlCall, {
			method: "POST",
			authorization: `Bearer ${localStorage.getItem("token")}`,
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(eventTotSend),
		});
		if (response.status < 400)
		{
			return ({ state: "success", event: await response.json(), error });
		}
		else 
			return ({ state: "error", event: {}, error: await response.json() });	
	}
	catch {
		return { state: "error", event: {}, error: "Server is not responding" };
	}
}

export async function deleteEventSC(eventId) {
	const state = "pending";
	const error = null
	const urlCall = `${serverInfo.eventUrl}/delete?id=${eventId}`;
	try {
		const response = await fetch(urlCall, {
			method: "DELETE",
			authorization: `Bearer ${localStorage.getItem("token")}`,
		});
		if (response.status < 400)
			return ({ state: "success", error });
		else 
			return ({ state: "error", error: await response.json() });
	}
	catch {
		return { state: "error", error: "Server is not responding" };
	}
}

export async function updateEventSC(event) {
    const state = "pending";
    const error = null;
    const urlCall = `${serverInfo.eventUrl}/update?id=${event._id}`;
    
    // Create a new event object without _id, _v and cleaned items
    const { _id, __v, ...eventWithoutIdAndV } = event; // Exclude _id and _v
    eventWithoutIdAndV.items = event.items.map(({ _id, __v, ...itemWithoutIdAndV }) => itemWithoutIdAndV); // Clean items array
	console.log(eventWithoutIdAndV)
    try {
        const response = await fetch(urlCall, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(eventWithoutIdAndV), // Send the modified event
        });

        if (response.status < 400) {
            return { state: "success", event: await response.json(), error };
        } else {
            return { state: "error", event: {}, error: await response.json() };
        }
    } catch {
        return { state: "error", event: {}, error: "Server is not responding" };
    }
}

export async function getEventsSC() {
	const state = "pending";
	const error = null
	const urlCall = `${serverInfo.eventUrl}/list`;
	try {
		const response = await fetch(urlCall, {
			method: "GET",
			authorization: `Bearer ${localStorage.getItem("token")}`,
		});
		const responseJson = await response.json();
		// console.log(responseJson);
		if (response.status < 400)
			return ({ state: "success", events: responseJson, error });
		else 
			return ({ state: "error", events: [], error: responseJson });
	}
	catch {
		return { state: "error", events: [], error: "Server is not responding" };
	}
}

export async function getEventSC(eventId) {
	const state = "pending";
	const error = null
	const urlCall = `${serverInfo.eventUrl}/get?id=${eventId}`;
	try {
		const response = await fetch(urlCall, {
			method: "GET",
			authorization: `Bearer ${localStorage.getItem("token")}`,
		});
		if (response.status < 400)
			return ({ state: "success", event: await response.json(), error });
		else 
			return ({ state: "error", event: {}, error: await response.json() });
	}
	catch {
		return { state: "error", event: {}, error: "Server is not responding" };
	}
}
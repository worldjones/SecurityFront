import axios from "axios";

export const API_MAIN = axios.create({
	baseURL: "http://localhost:8080/jpareststarter/api",
	headers: {
		"Content-type": "application/json",
		Accept: "application/json",
	},
});

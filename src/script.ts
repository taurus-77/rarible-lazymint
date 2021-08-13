import Web3 from "web3"
import 'regenerator-runtime/runtime'
import axios from "axios"
import { testSignAndCreateLazyMint } from "./lazy-mint/script"

const provider = (window as any).ethereum
export const web3 = new Web3(provider)

export const client = axios.create({
	baseURL: "https://api.rarible.com",
})


document.getElementById("createLazyMint")?.addEventListener("click", (e) => {
	e.preventDefault()
	provider.enable()

	testSignAndCreateLazyMint()
		.then(x => {
			console.log("SENT", x)
		})
		.catch(err => console.error("ERROR", err))
})


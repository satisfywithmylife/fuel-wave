import {iter_file, get_file} from './utils'
import {Account, Wallet, Signer, Address, Provider, Contract, Mnemonic} from "fuels";

const endpoint = 'https://beta-5.fuel.network/graphql'
const provider = await Provider.create(endpoint)

const eth_address = ''
const wallet_list = iter_file('wallet.txt')

const contract_address = ''
const abi = get_file('abi.json')
const contract = new Contract(contract_address, abi, provider)
wallet_list.forEach(element => {
    const wallet = Wallet.fromMnemonic(element, undefined, undefined, provider)
    console.log(wallet.address)
    const balance = await wallet.getBalance(eth_address)
});
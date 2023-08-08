import './style.css';
import'./Topics/01-basics.ts';
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
HOLA MUNDO`;
console.log ('hola mundo')

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

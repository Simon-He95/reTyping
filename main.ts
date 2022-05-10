import { calculatePatch, diff, createAnimator } from './src'

const inputEl = document.getElementById('input') as HTMLTextAreaElement
const outputEl = document.getElementById('output') as HTMLTextAreaElement
const typingEl = document.getElementById('typing') as HTMLTextAreaElement

let input = ``

let output = `　　Hey, I am Simon He, a fanatical programmers.

This page is meant to share some of the projects I've done and some of the things I've been doing lately.

Recently，i always follow [antfu](https://github.com/antfu), he makes me gain a lot, and I even post some new news on Twitter every day and follow the latest github technical information

I'm not typing code for work, but because I love it, I'll be happy to pull requests for some open source projects in GitHubs.

Hopefully more people can join me and love the code I write as much as I do.
`

inputEl.value = input
outputEl.value = output

const _start = debounce(start, 300)
inputEl.addEventListener('input', () => {
  input = inputEl.value
  _start()
})

outputEl.addEventListener('input', () => {
  output = outputEl.value
  _start()
})


function debounce(fn, ms) {
  let timer = null
  return () => {
    if (timer !== null) {
      clearTimeout(timer)
    }
    timer = setTimeout(fn, ms)
  }
}

function sleep(abortSignal, ms: number) {
  return new Promise(resolve => {
    const timer = setTimeout(resolve, ms)
    abortSignal.addEventListener('abort', () => {
      clearTimeout(timer)
    })
  })
}

let abortController = null
async function start() {
  if (abortController) {
    abortController.abort()
    abortController = null
  }
  abortController = new AbortController()
  let _input = input
  let _output = output

  const patches = calculatePatch(diff(_input, _output))
  const animator = createAnimator(_input, patches)
  for (const result of animator) {
    typingEl.textContent = result.output
    await sleep(abortController.signal, Math.random() * 100)
  }
}
start()
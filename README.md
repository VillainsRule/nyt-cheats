<div align="center">
    <img src="https://i.imgur.com/3GYp69x.png" width="70%">
    <h1>NYTimes Puzzle Hacks</h1>
    <h3>working hacks for the puzzles of the new york times.</h3>
    <br>
    <h2>Supported Puzzles</h2>
</div>

- [Wordle](https://www.nytimes.com/games/wordle)
    - [Daily Answer](./wordle/script.js)
- [Connections](https://www.nytimes.com/games/connections)
    - [Daily Categories](./connections/script.js)
- [Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee)
    - [Daily Words](./spelling-bee/script.js)
- [Crossword Mini](https://www.nytimes.com/crosswords/game/mini)
    - [Daily Words](./mini/script.js)

<br>
<h2 align="center">About the Codebase</h2>

I'd basically seen a lot of cheats for Wordle, but few were maintained, so I decided to make my own.<br>
I made a now-lost Wordle cheat. It wasn't that good. <br>
<br>
I started by importing the wordle cheat, cleaning it up, and doing more related stuff.<br>
I then put the raw HTML of Spelling Bee into js-beautify and realized that there is a variable named gameData exposed to the window.<br>
Well, that's easy. Some quick playing dealt with that. The same is true for Connections.<br>
Later, I added the Mini hack. It used an endpoint similar to the one in Wordle, and some difficult parsing.

<br>
<h5 align="center">made with ❤️ by <b>@xthonk</b></h5>

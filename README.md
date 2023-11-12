<div align="center">
    <img src="https://i.imgur.com/3GYp69x.png" width="70%">
    <h1>NYTimes Puzzle Hacks</h1>
    <h3>working hacks for the puzzles of the new york times.</h3>
    <br>
    <h2>Supported Puzzles</h2>
</div>

- [Wordle](https://www.nytimes.com/games/wordle)
    - [Daily Answer](https://github.com/VillainsRule/nytimes/blob/main/wordle/script.js)
- [Connections](https://www.nytimes.com/games/connections)
    - [Daily Categories](https://github.com/VillainsRule/nytimes/blob/main/connections/script.js)
- [Spelling Bee](https://www.nytimes.com/puzzles/spelling-bee)
    - [Daily Words](https://github.com/VillainsRule/nytimes/blob/main/spelling-bee/script.js)

<br>
<h2 align="center">About the Codebase</h2>

I'd basically seen a lot of cheats for Wordle, but few were maintained, so I decided to make my own.<br>
My first wordle cheat was made for [Polaris](https://polarislearning.org) (unblocking site with cheats).<br>
I decided to make them for more puzzles, and here we are.<br>
<br>
I started by importing the wordle cheat, cleaning it up, and doing more related stuff.<br>
I then put the raw HTML of Spelling Bee into js-beautify and realized that there is a variable named gameData exposed to the window.<br>
Well, that's easy. Some quick playing dealt with that. The same is true for Connections. This probably existed on Wordle before people started exploiting it.

<br>
<h2 align="center">The Future</h2>

I'm working on a cheat for the Mini and the Sudoku.<br>
These are both daily-rotating puzzles, and seem pretty easy to work with.<br>
The Sudoku uses the silly `gameData` and the Mini sends a fetch to [this API endpoint](https://www.nytimes.com/svc/crosswords/v6/puzzle/mini.json) onload with the data.<br>
<br>
PRs for these welcome :)<br>
<br>
<h5 align="center">made with ❤️ by <b>@xthonk</b></h5>

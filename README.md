# Wordle: A Dictionary and a Cheat Engine
A dictionary scraper and a cheat engine for the game Wordle.

## Acknowledgements
This could not have been built without the help of:
- Samuel Morse (1791-1872)
- [Wordle](https://www.powerlanguage.co.uk/wordle/)

## Usage
0. Download the notebook and open it with [Google Colab](https://colab.research.google.com/?utm_source=scs-index) (g-drive) or [JupyterLab](https://jupyter.org/) (software download).
- For Google Colab, simply upload the notebook back to your google drive, then open it.

1. To generate the Wordle dictionary and list of letters sorted by their frequencies in five letter words, run cells 1-8 *[cells under the Part 1 heading]*.

2. For the wordle solver:
- Upload *wordle_dict.json* and *sorted_letters* into the session's files.
- Run cells 9-10 *[first 2 cells under Part 2 heading]*
- In the cell 11 [the last cell], input your clues, anti-clues, word order and run it. **All inputs should be in lowercase**
- e.g. if no clues, `clues = ''`, `anti-clues = ''`, `order = ''` > run cell
- As you play, input the clues (yellow and green tiles), anti-clues (un-coloured tiles) and word order (green tiles) to return more accurate result.
- If the algorithm returns an empty list, you can ask it to widen it's search by adding a number to the end. *i.e. `getWordle(clues, anticlues, order, 2)`*
- Note that the higher the number, the more results the algorithm will return.

## Contributing
Contributions, issues and feature requests are welcome!  
Feel free to check the [issues](https://github.com/joisse1101/wordlescrapy/issues) page.

## Authors
Joyce T.  
[Link to my blog](https://joisse1101.wordpress.com/2022/01/27/the-wordle-dictionary/)

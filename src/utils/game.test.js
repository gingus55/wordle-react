import { startGame } from "./game"

const game = startGame();

describe('Game: startGame', () => {
  it('Provides a length for the word generated', () => {
    expect(typeof game.length).toBe('number')
  })

  it('Provides a "checker" function', () => {
    expect(typeof game.checker).toBe('function');
  })
})
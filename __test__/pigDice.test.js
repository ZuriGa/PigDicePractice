import PigDiceGame from "./../src/pigDice.js";

describe('PigDiceGame', () => {
    test('It should correctly create a Pig Dice object with two players, player1 and player2', () => {
        const player1 = new PigDiceGame("Player 1");
        const player2 = new PigDiceGame("Player 2");
        const game = new PigDiceGame([player1, player2]);
        expect(game.players).toHaveLength(2);
    });
});
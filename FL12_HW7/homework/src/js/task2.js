// 'use strict';
const minRandom = 0;
const maxAttempt = 3;
let play = true;

while (play) {
    play = confirm('Do you want to play a game?');
    if (play) {
        let maxRandom = 8;
        let winNumb = Math.floor(Math.random() * (maxRandom - minRandom)) + minRandom;
        let fstPrize = 100;
        let currentPrize = 0;
        let yourPrize = 0;
        for (let attemp = 1; attemp <= maxAttempt; attemp++) {
            if (attemp == 1) {
                currentPrize = fstPrize;
            }
            if (attemp === 2) {
                currentPrize = fstPrize / 2;
            }
            if (attemp === 3) {
                currentPrize = fstPrize / 4;
            }
            let currentNumber = parseInt(
                prompt(`Choose a roulette pocket number from ${minRandom} to ${maxRandom}.` +
                    `\n\rAttempts left: ${attemp}` +
                    `\n\rTotal prize: ${yourPrize}$` +
                    `\n\rPossible prize on current attempt: ${currentPrize}$`, '')
            );
            if (winNumb === currentNumber) {
                yourPrize += currentPrize;
                alert(`Congratulation, you won! Your prize is: ${yourPrize}$.`);
                play = confirm("Do you wan't to continue a game?");
                if (play) {
                    fstPrize *= 2;
                    currentPrize = 0;
                    maxRandom += 4;
                    attemp = 0;
                } else {
                    break;
                }
            }

        }
        alert(`Thank you for your participation. Your prize is: ${yourPrize}$`);
        yourPrize = 0;
    } else {
        alert('You did not become a billionaire, but can.');
    }
}
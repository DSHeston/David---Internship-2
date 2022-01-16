const MONSTER_ATTACK_VALUE = 14;
const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 20;
const HEAL_VALUE = 20;

const attackType_ATTACK = 1
const attackType_STRONG_ATTACK = 2
const LOG_EVENT_PLAYER_ATTACK = 'Player attacked';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'Player strong attacked';
const LOG_EVENT_MONSTER_ATTACK = 'Monster attacked';
const LOG_EVENT_PLAYER_HEAL = 'player healed';
const LOG_EVENT_GAME_OVER = 'Game over!';

const enteredValue = prompt('choose HP for you and the monster.', '100' )

let chosenMaxLife = parseInt(enteredValue);
let battleLog = [];

if (isNaN(enteredValue) || chosenMaxLife <= 0) {
    chosenMaxLife = 100
    alert('Invalid input for HP, set to default of 100.')
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeToLog(ev, val, monsterHP, playerHP) {
    let logEntry;
    if (ev === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'Monster',
            finalMonsterHealth : monsterHP,
            finalPlayerHealth : playerHP
        };
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'Monster',
            finalMonsterHealth : monsterHP,
            finalPlayerHealth : playerHP
        }; 
    } else if (ev === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'Monster',
            finalMonsterHealth : monsterHP,
            finalPlayerHealth : playerHP
        };
    } else if (ev === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: 'Player',
            finalMonsterHealth : monsterHP,
            finalPlayerHealth : playerHP
        };
    } else if (ev === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: ev,
            value: val,
            target: 'Player',
            finalMonsterHealth : monsterHP,
            finalPlayerHealth : playerHP
        };
    } else if (ev === LOG_EVENT_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth : monsterHP,
            finalPlayerHealth : playerHP
        };
    }
    battleLog.push(logEntry);
    
}

function reset() {
    currentMonsterHealth = chosenMaxLife;
    currentPlayerHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    const initialPlayerHealth = currentPlayerHealth
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth-= playerDamage;
    writeToLog (
        LOG_EVENT_MONSTER_ATTACK,
        playerDamage,
        currentMonsterHealth,
        currentPlayerHealth
    )

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false
        removeBonusLife()
        setPlayerHealth(initialPlayerHealth)
        currentPlayerHealth = initialPlayerHealth
        alert('Bonus life consumed!')
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert ('you won!');
        writeToLog(LOG_EVENT_GAME_OVER,
            'You Won!',
            currentMonsterHealth,
            currentPlayerHealth)
    }
    else if (currentPlayerHealth<= 0 && currentMonsterHealth > 0) {
        alert ('you lost!');
        writeToLog(LOG_EVENT_GAME_OVER,
            'You Lost!',
            currentMonsterHealth,
            currentPlayerHealth)
    }
    else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
        alert ('you have a draw');
        writeToLog(LOG_EVENT_GAME_OVER,
            'Draw!',
            currentMonsterHealth,
            currentPlayerHealth)
    }
    if (currentMonsterHealth <= 0 || currentPlayerHealth<= 0) {
        reset();
    }
}

function attackMonster(attackType) {
    let maxDamage = attackType === 1 ? ATTACK_VALUE : STRONG_ATTACK_VALUE;
    let logEvent = attackType === 1 ? LOG_EVENT_PLAYER_ATTACK : LOG_EVENT_PLAYER_STRONG_ATTACK;
    /*if (attackType === 1) {
        maxDamage = ATTACK_VALUE
        logEvent = LOG_EVENT_PLAYER_ATTACK
    }
    else if (attackType === 2) {
        maxDamage = STRONG_ATTACK_VALUE
        logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK
    }*/

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= damage;
    writeToLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth)

    endRound();
    
}

function attackHandler() {
    attackMonster(attackType_ATTACK);
}

function strongAttackHandler() {
   attackMonster(attackType_STRONG_ATTACK);
    
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth;
    }
    else {
        healValue = HEAL_VALUE
    }

    increasePlayerHealth(healValue)
    currentPlayerHealth += healValue
    writeToLog (LOG_EVENT_PLAYER_HEAL,
        healValue,
        currentMonsterHealth,
        currentPlayerHealth
    );        

    endRound()
}

function printLogHandler() {
    for (let i = 0; i < 3; i ++){
        console.log ('-------')
    }

    let i = 0
    for (const logEntry of battleLog) {
        console.log(`#${i}`);
        for (const key in logEntry) {
            console.log(`${key} => ${logEntry[key]}`);
        }
        i++
    }
    console.log (battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click',healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);

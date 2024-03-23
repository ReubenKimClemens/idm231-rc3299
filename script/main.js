/*
'sign' is an array of objects. Each object represents a sign and contains 4
different properties. The first two, 'first' and 'last' represent the max
or minimum month and day the sign applies. 'sign' is the name of the symbol
and 'text' is the description of the symbol. This array is used in findSign()
and activeSign
*/
const signs = [
    {
        first: [3, 21],
        last: [4, 19],
        sign: 'Abomination',
        imgPath: 'images/Abomination.webp',
        text: "Beaten, branded and imprisoned for untold decades, this furtive vagrant hides a terrible secret. The Eldritch poison coursing through his veins has given him unspeakable power, at a terrible cost. As his form changes, so too does his role in combat!"
    },
    {
        first: [4, 20],
        last: [5, 20],
        sign: 'Antiquarian',
        imgPath: 'images/Antiquarian.webp',
        text: "A scholar, researcher, and keen archaeologist, The Antiquarian is not well suited for combat. She is, however, an expert in self-preservation - by making herself scarce in a fight, or demanding an ally protect her, she ensures her survival. If direct combat is unavoidable, The Antiquarian can use her fulminating censer to heal and invigorate allies...and to toxify attackers."
    },
    {
        first: [5, 21],
        last: [6, 20],
        sign: 'Arbalest',
        imgPath:'images/Arbalest.webp',
        text: "A runaway turned soldier, the Arbalest is the definitive backline fighter. Able to rain suppressing fire down on the enemy, snipe high profile targets and apply powerfully effective first-aid, she is a rallying point, a turret, a beacon in the dark."
    },
    {
        first: [6, 21],
        last: [7, 22],
        sign: 'Bounty Hunter',
        imgPath:'images/Bounty-Hunter.webp',
        text: "A brutally efficient single-target executioner and crowd control specialist. For the Bounty Hunter, planning is key - mark targets for bonus damage or look for opportunities to capitalize on a stunned foe. He can also wreak havoc on an enemy party's order using his grappling hook, flashbangs and powerful uppercut."
    },
    {
        first: [7, 23],
        last: [8, 22],
        sign: 'Crusader',
        imgPath:'images/Crusader.webp',
        text: "Battle-hardened and stalwart, the Crusader has held the front lines in a hundred holy wars. He either attacks foes head-on with righteous fury, or embraces a melee support role by leveraging his powerful defensive buffs & off-heals."
    },
    {
        first: [8, 23],
        last: [9, 22],
        sign: 'Grave Robber',
        imgPath:'images/Grave-Robber.webp',
        text: "The Grave Robber is a versatile and nimble combatant, moving back and forth through the ranks with ease. She strikes without warning and retreats to the shadows, continuing her assault at range. If her throwing daggers and poison darts aren't getting the job done, she can return to the melee, buffed and slinging her pickaxe!"
    },
    {
        first: [9, 23],
        last: [10, 22],
        sign: 'Hellion',
        imgPath:'images/Hellion.webp',
        text: "Wild, unpredictable, and utterly ruthless, the Hellion thrills to the spilling of blood! Her massive glaive affords her impressive reach in combat, while its razor sharp edge leaves lasting wounds on enemies. Versatile and unrelenting, she can hit the back row with her blade and devastate her foes. Certain skills leave her exhausted, however, and she may occasionally need to take a turn to recharge her adrenaline before entering the fray once again."
    },
    {
        first: [10, 23],
        last: [11, 21],
        sign: 'Highwayman',
        imgPath: 'images/Highwayman.webp',
        text: "A rogue, a thug and a thief, the Highwayman has honed his skills with dirk and flintlock to devastating effect. Whether at range or in a melee, he is equally effective at dispatching his foes. Be it a grapeshot area-of-effect, or single target bleed, the Highwayman's skills focus solely on dealing damage in a variety of ways."
    },
    {
        first: [11, 22],
        last: [12, 21],
        sign: 'Hound Master',
        imgPath:'images/Hound-Master.webp',
        text: "A tough and uncommonly compassionate ex-lawman, the Houndmaster and his faithful Wolfhound work in tandem to bring down their enemies and protect the innocent. Together they stalk the back ranks, bursting forth in a flurry of harrying bleeds, gnashing teeth, and stunning blows. Should the tide of battle turn, the pair can support an ailing party by protecting the weak, and rallying the stressed."
    },
    {
        first: [12, 22],
        last: [1, 19],
        sign: 'Jester',
        imgPath:'images/Jester.webp',
        text: "Combat is a power ballad - a slow build up, and a grand finale! On the offense, the Jester leaps to and fro in a bloody cacophony, positioning himself for a glorious end in the front ranks! Alternatively, he can hang back, delivering chilling melodies and unsettling riffs that terrorize his foes, and give strength to his allies."
    },
    {
        first: [1, 20],
        last: [2, 18],
        sign: 'Leper',
        imgPath:'images/Leper.webp',
        text: "A ruined man, a warrior, and a poet. The Leper is most effective when given a turn to focus himself before raising his massive blade. When he swings, it is all or nothing - crushing blows and massive damage or the empty whistling of a glancing blow. He is entirely self-sufficient, drawing strength from his life of trauma, and able to channel it into healing, protection, or unrelenting fury."
    },
    {
        first: [2, 19],
        last: [3, 20],
        sign: 'Man At Arms',
        imgPath:'images/Man-At-Arms.webp',
        text: "The Man-at-Arms is a seasoned veteran of combat, and has been rewarded for his toil with haunting guilt and stoic resilience in equal measure. Immovable, commanding, and focused, the Man-at-Arms breaks down enemy lines with his mace, buckler, and furious battle cries."
    },
]

document.querySelector('#signButton').addEventListener('click', getDate, false);
const clickedSign = document.querySelectorAll('.signs div');

let i = 0;
for (const sign of clickedSign) {
    if (sign.textContent.trim() == signs[i].sign) {
        sign.addEventListener('click', function(){
            activeSign(sign.textContent.trim());
        }, false);
    }
    i++;
}

/*
The function getDate() is activated when the user clicks the button 
that says 'Click to find your sign!'. The purpose of this function 
is to take the date inputted from the form and split it into usable 
parts (year, month, day) for the other functions. It utilizes 
querySelector to get value and split() to seperate the data
*/
function getDate() {
    const userDate = document.querySelector('#birthDate').value;
    const yearMonthDay = userDate.split('-');
    const month = Number(yearMonthDay[1]);
    const day = Number(yearMonthDay[2]);

    // Calling to fignSign() with month and day in its parameters
    // It then returns a string value that defines the variable yourSign 
    const yourSign = findSign(month, day);

    // Calling activeSign() using the variable yourSign which is a string
    // It will put the relevant information to the sign on the card
    activeSign(yourSign);
}

/*
The function findSign() contains the parameters 'month' and 'day' value is
exactly like the name implies. This function is currently activated when its
called by getDate(). The purpose of findSign() is finding the specific sign
related to the month and day inputted. It does this by first running a for 
loop that repeats 12 times. Each instance it will check an if statement that
compares the month and day to each signs respective range. If the month/day
is in a signs range, it will return the related name of the sign and stop
the for loop.
*/
function findSign(month, day) {
    for (let i = 0; i < 12; i++) {
        if ((month == signs[i].first[0] && day >= signs[i].first[1]) || (month == signs[i].last[0] && day <= signs[i].last[1])) {
            return signs[i].sign
        }
    }
}

/*

*/
function activeSign(sign) {
    const title = document.querySelector('.info h2');
    const description = document.querySelector('.info p');
    const image = document.querySelector('.info img');
    for (let i = 0; i < 12; i++) {
        if (sign == signs[i].sign) {
            title.textContent = signs[i].sign;
            description.textContent = signs[i].text;
            image.src = signs[i].imgPath;
        }
    }
}

function signSound(sign) {
    const soundSource = document.querySelector('#audioPlayer').src = "" + sign + "";

}

document.querySelector('.help').addEventListener('click', helpFeature, false);

function helpFeature() {
    var x = document.querySelector(".help-info");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
let yearMonthDay;

/*
The function getDate() is activated when the user clicks the button 
that says 'Click to find your sign!'. The purpose of this function 
is to take the date inputted from the form and split it into usable 
parts (year, month, day) for the other functions. It utilizes 
querySelector to get value and split() to seperate the data
*/
function getDate() {
    const userDate = document.querySelector('#birthDate').value;
    yearMonthDay = userDate.split('-');
    const month = Number(yearMonthDay[1]);
    const day = Number(yearMonthDay[2]);

    const yourSign = findSign(month, day);
    document.querySelector('#userSign').textContent = yourSign;

    activeSign(yourSign);
}

/*
The function findingSign(month, day) currently activates due to being
called in getDate(). Its purpose is to return the zodiac sign the user
is in by utilizing multiple if statements that contain conditions that 
relate to the individual signs. the parameters 'month' and 'day' value
is exactly like the name implies. Their used for the conditions.
*/

let objectSigns = {
    firstMonthDate: [[3, 21],[4, 20],[5, 21],[6, 21],[7, 23],[8, 23],[9, 23],[10, 23],[11, 22],[12, 22],[1, 20],[2, 19]],
    secondMonthDate: [[4, 19],[5, 20],[6, 20],[7, 22],[8, 22],[9, 22],[10, 22],[11, 21],[12, 21],[1, 19],[2, 18],[3, 20]],
    sign: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces']
}

const signs = [
    {
        first: [3, 21],
        last: [4, 19],
        sign: 'Aries',
        text: "There is nothing an Aries cannot achieve once they set their mind to it—no mountain is too high. However, you will also find them nursing a hidden imposter syndrome that can chip away at their confidence if allowed free rein. "
    },
    {
        first: [4, 20],
        last: [5, 20],
        sign: 'Taurus',
        text: "Loyal to a fault, a Taurean is the most reliable person you can have in your corner when the chips are down. However, they have a stubborn streak a mile wide and can hold a grudge like no one else, so make sure you don't cross them. "
    },
    {
        first: [5, 21],
        last: [6, 20],
        sign: 'Gemini',
        text: "Throw a Gemini to the wolves, and they will come back leading the pack—the air element in this sign means that they can adapt easily to any situation. But their fuse runs short and once they run out of patience with someone, there is no wiggle room for second chances. "
    },
    {
        first: [6, 21],
        last: [7, 22],
        sign: 'Cancer',
        text: "Behind the brooding fortress that a Cancer has erected to protect themselves are abundant reserves of deep, undying love and loyalty. Pity that few will get to experience it because they aren’t the best at communicating what is in their hearts. "
    },
    {
        first: [7, 23],
        last: [8, 22],
        sign: 'Leo',
        text: "Born to be under the spotlight, there is nothing that this lion enjoys as much as being the cynosure of all eyes. However, this innate conviction that they are always in the right means that they can often run roughshod over others’ feelings and sentiments. "
    },
    {
        first: [8, 23],
        last: [9, 22],
        sign: 'Virgo',
        text: "Meticulous, organised and diligent, if the world were to end tomorrow, you would want a Virgo to lead the march into the new dawn. However, that pesky niggle of self-doubt in their head means that they are often harsher on themselves than anybody else can be. "
    },
    {
        first: [9, 23],
        last: [10, 22],
        sign: 'Libra',
        text: "If you are looking for someone to lend a comforting shoulder during times of distress and truly put themselves in your shoes, ring up the first Libra in your contacts. This empathetic side of theirs can sometimes get derailed by their inability to make up their mind, compounded by a fear of confrontations, which means that you never truly know which side they stand on."
    },
    {
        first: [10, 23],
        last: [11, 21],
        sign: 'Scorpio',
        text: "The fiery, intense personality of a Scorpio can make any time spent together a wild, dizzying ride. But while they will go the extra mile to take care of your emotional needs, they remain notoriously secretive about their own—good luck cracking open the spine of this closed book. "
    },
    {
        first: [11, 22],
        last: [12, 21],
        sign: 'Sagittarius',
        text: "There is no storyteller quite like a Sagittarius—they can have the entire room hanging on their every word. But while they can show you grand dreams, it can sometimes be hard to pin them down and make them deliver on their promises. "
    },
    {
        first: [12, 22],
        last: [1, 19],
        sign: 'Capricorn',
        text: "Not everyone can conquer the world but if a Cap were to set out to do it, nothing would deter them until they had accomplished their goal. With a personality that is hardwired in practicality, they can often fail to appreciate nuance and are known to be unforgiving of others’ mistakes. "
    },
    {
        first: [1, 20],
        last: [2, 18],
        sign: 'Aquarius',
        text: "A deep-thinker with a humanitarian streak, an Aquarian has grand plans to change the world. Shame that they left the party early though because their reclusive nature makes it hard for them to establish bonds with those around them. "
    },
    {
        first: [2, 19],
        last: [3, 20],
        sign: 'Pisces',
        text: "If you are looking to escape the mundane everyday grind, a Pisces’s imaginative mind can whisk you away into a realm of fantasy. Their kind, nurturing personality can prove to be a double-edged sword though, because their overtly sensitive heart is easily wounded, further compounded by a tendency to play the victim."
    },
]

console.log(testObject);

function testObject() {
    for (let i = 0; i < 12; i++) {
        console.log(testObject.firstMonthDate[i]);
        console.log(testObject.secondMonthDate[i]);
        console.log(testObject.sign[i]);
    }
}

function findSign(month, day) {
    for (let i = 0; i < 12; i++) {
        console.log(signs);
        if ((month == signs[i].first[0] && day >= signs[i].first[1]) || (month == signs[i].last[0] && day <= signs[i].last[1])) {
            return signs[i].sign
        }
    }
}

function findingSign(month, day) {
    if ((month == 3 && day >= 21) || (month == 4 && day <=19)) {
        return 'Aries'
    }
    else if ((month == 4 && day >= 20) || (month == 5 && day <=20)) {
        return 'Taurus'
    }
    else if ((month == 5 && day >= 21) || (month == 6 && day <=20)) {
        return 'Gemini'
    }
    else if ((month == 6 && day >= 21) || (month == 7 && day <=22)) {
        return 'Cancer'
    }
    else if ((month == 7 && day >= 23) || (month == 8 && day <=22)) {
        return 'Leo'
    }
    else if ((month == 8 && day >= 23) || (month == 9 && day <=22)) {
        return 'Virgo'
    }
    else if ((month == 9 && day >= 23) || (month == 10 && day <=22)) {
        return 'Libra'
    }
    else if ((month == 10 && day >= 23) || (month == 11 && day <=21)) {
        return 'Scorpio'
    }
    else if ((month == 11 && day >= 22) || (month == 12 && day <=21)) {
        return 'Sagittarius'
    }
    else if ((month == 12 && day >= 22) || (month == 1 && day <=19)) {
        return 'Capricorn'
    }
    else if ((month == 1 && day >= 20) || (month == 2 && day <=18)) {
        return 'Aquarius'
    }
    else if ((month == 2 && day >= 19) || (month == 3 && day <=20)) {
        return 'Pisces'
    }
}

function userSignActive(sign) {
    // Here is where the code that shows the user's sign is
    const title = document.querySelector('.card h2');
    const description = document.querySelector('.card p');
    if (sign == 'Scorpio') {
        title.textContent = "Scorpio";
        description.textContent = "scorpio";
    }
}

function activeSign(sign) {
    const title = document.querySelector('.card h2');
    const description = document.querySelector('.card p');
    const image = document.querySelector('.card img');
    for (let i = 0; i < 12; i++) {
        if (sign == signs[i].sign) {
            title.textContent = signs[i].sign;
            description.textContent = signs[i].text;
            image.src = `images/${signs[i].sign}.jpg`;

        }
    }
}

function closeUserSign() {
    // Here is where the code that closes out of the user sign info
}
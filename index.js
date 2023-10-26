// Maosh
function maoshlar(hodim1, hodim2, hodim3) {
    let birinchi = Math.abs(hodim1 - hodim3);
    let ikkinchi = Math.abs(hodim1 - hodim2);
    let uchinchi = Math.abs(hodim2 - hodim3);
    let engKam = birinchi;
    if (ikkinchi > birinchi) {
        engKam = ikkinchi
    }
    if (uchinchi > ortacha) {
        engKam = uchinchi;
    }
    return engKam;
}

// Uchburchakli sonlar
function uchburchaklarSoni(uchburchaklarUzunligi) {
    let dotCounter = 0; 
    for (let i = 1; i <= uchburchaklarUzunligi; i++) {
        dotCounter += i;
    }
    return dotCounter;
}

// Harorat
function temperatureConversion(celsius) {
    celsius = +celsius;
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.8 + 32;
    console.log(kelvin);
    console.log(fahrenheit); 
}

// Omadsiz chipta
function unlucky(ticketNumber) {
    let lastTwoDigits;
    while (ticketNumber > 0) {
        lastTwoDigits = ticketNumber % 100;
        if (lastTwoDigits == 13) {
            return "Omadsiz chipta";
        }
        ticketNumber = Math.trunc(ticketNumber / 10);
    }
    return "Omadli chipta";
}

// 10 ming qadam
function stepsWalkedPercentage(stepsCount) {
    let targetSteps = 10000;
    let percentageCalculation = (stepsCount * 100)/ targetSteps
    return percentageCalculation + "%";
}

// Isfandiyor algebra darsida
function algebraHomeworkCalculation(x) {
    if (x > 10 || x < -10) {
        return "Faqat (-10 <= x <= 10) oralig'idagi sonlarni kiritishingiz kerak";
    }
    solution = x ** 5 + 8 * x ** 4 - 5 * x ** 3 + 3 * x ** 2 + x - 12;
    return solution;
}

// Azimjonning qo'ylari
function sheepsEarsCount(legsCount) {
    if (legsCount <= 0 || isNaN(legsCount)) return -1;
    let earsCount = legsCount / 2;
    return earsCount;
}

// Diagonallari soni
function polygonDiagonalCount(sideCount) {
    let diagonalsCount = (sideCount * (sideCount - 3)) / 2;
    return diagonalsCount;
}   

// Oxirgi raqam
function lastDigitCalculation(number) {
    lastDigit = number % 10;
    return lastDigit;
}

// Ikki xonali sonning birinchi raqami
function firstDigitCalculation(number) {
    firstDigit = Math.trunc(number / 10);
    return firstDigit;
}

// Yangi yil sovg'asi
function presentAffordability(Price, buyer1, buyer2, buyer3) {
    if (Price < 0 || buyer1 < 0 || buyer2 < 0 || buyer3 < 0 || isNaN(Price) || isNaN(buyer1) || isNaN(buyer2) || isNaN(buyer3)) {
        return "Bir narsani noto'g'ri kiritdingiz";
    }
    canAfford = Price <= +buyer1 + +buyer2 + +buyer3;
    if (canAfford) return "Yes";
    if (!canAfford) return "No";
}

// Katta kichik
function comparison(A, B) {
    if (A > B) return '>';
    if (A == B) return '=';
    if (A < B) return '<';
}

// Sanash vaqti
function countingTime(N, M) {
    let numbersCounted = M - N + 1;
    let speedPerNumber = 10;
    return numbersCounted * speedPerNumber;
}

// Kechikkan poyezd
function delayedTrain(plannedDepartureTime, delayedFor) {
    currentDepartureTime = (plannedDepartureTime + delayedFor) % 24;
    return currentDepartureTime;
}

// HTTS 
function oddDigitsNumbers(number) {
    let digitsCounter = 0;
    let lastDigit;
    while (number > 0) {
        digitsCounter++;
        lastDigit = number % 10;
        if (lastDigit % 2 == 0) return "NO";
        number = Math.trunc(number / 10);
    }
    if (digitsCounter % 2 == 0) {
        return "NO";
    } else {
        return "YES";
    }
}

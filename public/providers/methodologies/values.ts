export const shuffledValues = ():Array<string> => {
    const valueArray: Array<string> = [
        "Freedom",
        "Independent",
        "Creativity",
        "Privacy",
        "Self-respect",
        "Curiousity",
        "Daring",
        "Excitement",
        "Pleasure",
        "Self-indulgent",
        "Intelligence",
        "Influence",
        "Ambition",
        "Success",
        "Capability",
        "Wealth",
        "Authority",
        "Love",
        "Responsibility",
        "Forgiveness",
        "Friendship",
        "Meaning in life",
        "Humble",
        "Self-disciplin",
        "Politeness",
        "Respect on tradition",
        "Health",
        "Sense of belonging",
        "Enjoy",
        "Social recognition",
        "Public image",
        "Wisdom",
        "Social justice",
        "Equality",
        "Broadminded"
    ];

    let currentIndex = valueArray.length, randomIndex;
    
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [valueArray[currentIndex], valueArray[randomIndex]] = [
        valueArray[randomIndex], valueArray[currentIndex]];
    }
    
    return valueArray;
};
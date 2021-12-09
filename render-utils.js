export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const friendDiv = document.createElement('div');
    const friendName = document.createElement('p');
    const friendLevel = document.createElement('p');
    // add friend, name, and emoji classes to the appropriate elements

    // put the friend's name in the nameEl
    friendName.textContent = friend.name;
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    friendLevel.textContent = friend.level
    
    if (friend.level === 0) {
        '😩';
    } if (friend.level === 1) {
        '😐';
    } if (friend.level === 2) {
        '😃';
    } else {
        '😆';
    }
    // append the emojiEl and nameEl to the outer div
    friendDiv.append(friendName, friendLevel);
    // return the outer div
    return friendDiv;
}
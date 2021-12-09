export function renderMushroom() {
    const div = document.createElement('div');
    div.classList.add('mushroom');

    return div;
}

export function renderFriend(friend) {
    // make three elements: an outer div, a place for the name, and a place for an emoji
    const friendDiv = document.createElement('div');
    const friendName = document.createElement('p');
    const friendFace = document.createElement('p');
    // add friend, name, and emoji classes to the appropriate elements
    friendDiv.classList.add('friend');
    friendName.classList.add('friend-name');
    friendFace.classList.add('friend-face');
    // put the friend's name in the nameEl
    friendName.textContent = friend.name;
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level

    if (friend.satisfaction === 1) {
        friendFace.textContent = '😩';
    }

    if (friend.satisfaction === 2) {
        friendFace.textContent = '😐';
    }

    if (friend.satisfaction === 3) {
        friendFace.textContent = '😃';
    }

    if (friend.satisfaction >= 4) {
        friendFace.textContent = '😆';
    }

    // append the emojiEl and nameEl to the outer div
    friendDiv.append(friendName, friendFace);
    // return the outer div
    return friendDiv;
}
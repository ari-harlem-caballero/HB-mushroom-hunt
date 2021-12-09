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
    friendDiv.classList.add('friends');
    friendName.classList.add('friend-name');
    friendFace.classList.add('friend-face');
    // put the friend's name in the nameEl
    friendName.textContent = friend.name;
    
    // for each friend, set the emojiEl's text content to a different emoji depending on their satisfaction level
    friendFace.textContent = friend.satisfaction < 0 ? 0 : friend.satisfaction;
    
    if (friend.satisfaction === 0) {
        '😩';
    } if (friend.satisfaction === 1) {
        '😐';
    } if (friend.satisfaction === 2) {
        '😃';
    } else {
        '😆';
    }
    // append the emojiEl and nameEl to the outer div
    friendDiv.append(friendName, friendFace);
    // return the outer div
    return friendDiv;
}
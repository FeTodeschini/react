import Friend from "./Friend.js";

export default function FirendsList({ friends, onSelection, selectedFriend }) {
  
    return <ul>
        {friends.map(friend=>
          <Friend 
            friend={friend} 
            key={friend.id}
            selectedFriend = {selectedFriend}
            onSelection={onSelection}
          />)
        }
      </ul>
  }
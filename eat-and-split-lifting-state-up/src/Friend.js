import Button from "./Button.js";

export default function Friend({ friend, onSelection, selectedFriend }) {

    const isSelected = selectedFriend === null ? false : selectedFriend.id == friend.id;
    console.log("Friend:");
    console.log({friend});
  
    console.log("Selected Friend:");
    console.log({selectedFriend});
  
    return (
        <li className={isSelected ? "selected" : ""}>
        <img src={friend.image} alt="" />
        <h3>{friend.name}</h3>
        {friend.balance < 0 && <p className="red">You owe {friend.name} ${Math.abs(friend.balance)}</p>}
        {friend.balance > 0 && <p className="green">{friend.name} owes you ${Math.abs(friend.balance)}</p>}
        {friend.balance === 0 && <p>You and {friend.name} are even</p>}
        <Button onClick={()=>onSelection(friend)}>{isSelected ? "Close" : "Select"}</Button>        
      </li>
    )
  }
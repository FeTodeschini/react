import { useState } from "react";

import FriendsList from "./FriendsList.js";
import FormAddFriend  from "./FormAddFriend";
import FormSplitBill from "./FormSplitBill.js";

import Button from "./Button.js";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App () {

  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  
  function handleShowAddFriend() {
    setShowAddFriend(!showAddFriend);
  }

  function handleAddFriend(friend){
    setFriends(friends => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend){
    setSelectedFriend((cur)=> (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  function handleSplitBill(value){

    setFriends(friends => friends.map(
        friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend
      )
    )

    setSelectedFriend(null);
    
  }

  return (
    <>
      <h1 className="header">Select a friend to split a bill with:</h1>
      <div className="app">
        <div className="sidebar">
          <FriendsList friends={friends} 
            onSelection={handleSelection} 
            selectedFriend={selectedFriend}/>
          { showAddFriend && <FormAddFriend onAddFriend={handleAddFriend}/>}
          <Button 
            onClick={handleShowAddFriend}>{showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>

        {selectedFriend && <FormSplitBill selectedFriend={ selectedFriend } onSplitBill={handleSplitBill}/>}
      </div>
    </>
  )
}


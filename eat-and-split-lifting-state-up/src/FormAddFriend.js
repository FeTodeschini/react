import { useState } from "react";
import Button from "./Button.js";

export default function FormAddFriend ({onAddFriend}){

    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");
  
    const id = crypto.randomUUID();
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (!name || !image) return;
  
      const newFriend = {
        name,
        image: `${image}?=${id}`,
        balance: 0,
        id
      }
  
      onAddFriend(newFriend);
  
      setName("");
      setImage("https://i.pravatar.cc/48");
  
      
    }
  
    return (
      <form action="" className="form-add-friend" onSubmit={handleSubmit}>
        <label>Friend name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
  
        <label>Image URL</label>
        <input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
  
        <Button onAddFriend={onAddFriend}>Add</Button>
      </form>
    )
  }
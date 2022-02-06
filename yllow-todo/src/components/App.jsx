import React, { useState } from "react";
import toDoItem from "./ToDoItem";

function App() {
	const [inputText, setInputText] = useState("");
	const [items, setItems] = useState([]);

	function handleChange(event) {
		const newValue = event.target.value;
		setInputText(newValue);
	}
	function addItem() {
		setItems((prevItems) => {
			return [...prevItems, inputText];
		});
		setInputText("");
	}
	function deleteItem(id) {
		setItems((prevItems) => {
			return prevItems.filter((item, index) => {
				return index !== id;
			});
		});
	}
	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input onChange={handleChange} type="text" value={inputText} />

				<button onClick={addItem}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>
					{items.map((todoItem, index) => (
						<toDoItem
							key={index}
							id={index}
							text={toDoItem}
							onChecked={deleteItem}
						/>
					))}
					{/* .map is mapping through all of the todoItems and then put the item in the list */}
				</ul>
			</div>
		</div>
	);
}

export default App;

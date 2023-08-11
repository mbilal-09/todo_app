"use client"
import { Children, useState } from "react"

export default function Home() {

  const [item, setItem] = useState('');
  const [listItem, setList] = useState([]);

  const handleOnChange = (input) => {
    setItem(input.target.value);
  }

  const addList = () => {
    if (item) {
      listItem.push(item)
      console.log(listItem);
      setItem('');
    } else {
      alert('Write Something first')
    }
  }

  const removeItem = (e) => {
    const delItem = e.target.parentNode
    delItem.remove();
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className='text-5xl font-bold'>Todo App</h1>
      <input className='h-10 w-60 mt-20 mb-5 ps-2 outline-none' value={item} onChange={handleOnChange} type="text" />
      <button className="mb-5" onClick={addList}>Add</button>
      {listItem.map((e, index) => {
        return (
        <div key={index} className="my-1">
          <span>{e}</span>
          <button className="ms-5 bg-black text-white p-1 px-2" onClick={removeItem}>del</button>
        </div>
        )
      })}
    </main>
  )
}

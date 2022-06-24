import React, { useState } from "react";
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";

/* カスタムフック */
import useStorage from "../hooks/storage";
import useFireBase from "../hooks/useFirebase";

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  // const [items, putItems] = React.useState([
  //     /* テストコード 開始 */
  //   { key: getKey(), text: '日本語の宿題', done: false },
  //   { key: getKey(), text: 'reactを勉強する', done: false },
  //   { key: getKey(), text: '明日の準備をする', done: false },
  //   /* テストコード 終了 */
  // ]);

  const [items, addItem, updateItem, clearItems] = useFireBase();

  const [filter, changeFilter] = React.useState("ALL");

  const handleCheck = (checked) => {
    // const newItems = items.map(item => {
    //   if (item.key === checked.key) {
    //     item.done = !item.done;
    //   }
    //   return item;
    // });
    updateItem(checked);
  };

  const displayItems = items.filter((item) => {
    if (filter === "ALL") return items;
    if (filter === "TODO") return !item.done;
    if (filter === "DONE") return item.done;
    return items;
  });

  const handleEnter = (e) => {
    addItem({ text: e.target.value, done: false });
  };

  const handeFilter = (selectedTab) => {
    changeFilter(selectedTab);
    // console.log(filter)
  };

  return (
    <div className="panel">
      <div className="panel-heading">ITSS ToDoアプリ</div>
      <Input onSubmit={handleEnter}></Input>
      <Filter onChange={handeFilter} status={filter}></Filter>
      {displayItems.map((item) => (
        <TodoItem item={item} key={item.key} onCheck={handleCheck} />
      ))}
      <div className="panel-block">{items.length} items</div>
      <div className="panel-block">
        <button className="button is-light is-fullwidth" onClick={clearItems}>
          全てのToDoを削除
        </button>
      </div>
    </div>
  );
}

export default Todo;
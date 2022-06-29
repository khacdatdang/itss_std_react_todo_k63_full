import React, { useState } from 'react';
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({onAdd}  ) {
  const [text, setText] = React.useState('');

  const handleChange = e => setText(e.target.value);

  const handleSubmit = () => {
      onAdd(text);
      setText('');
  };
  return (
   <div className="panel-block">
      <input
        class="input"
        type="text"
        placeholder="Todoを入力してください"
        value={text}
        onChange={handleChange}
      />
       <button　onClick = {handleSubmit}> 追加 </button>
    </div>
    
  );
}

export default Input;
export const CreateTodo = (props) => {
  const {
    todoTitle,
    onChangeTodoText,
    todoDetail,
    onChangeTodoDetail,
    createTodo,
    closeTodo,
  } = props;
  return (
    <div class="overlay">
      <div className="input-area">
        <label>タイトル</label>
        <input
          placeholder="タイトルを入力"
          value={todoTitle}
          onChange={onChangeTodoText}
        />
        <label>詳細</label>
        <input
          placeholder="詳細を入力"
          value={todoDetail}
          onChange={onChangeTodoDetail}
        />
        <button onClick={createTodo}>追加</button>
        <button onClick={closeTodo}>キャンセル</button>
      </div>
    </div>
  );
};

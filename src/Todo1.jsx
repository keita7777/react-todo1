import { useState } from "react";
import "./Todo.css";

function Todo() {
  // TODOリストを定義
  const [todos, setTodos] = useState([]);
  // TODOタイトルを定義
  const [todoTitle, setTodoTitle] = useState("");
  // TODO詳細を定義
  const [todoDetail, setTodoDetail] = useState("");
  // TODOのIDを定義
  const [todoId, setTodoId] = useState(1);

  // 入力欄の値をtodoTitleに設定
  const onChangeTodoText = (e) => setTodoTitle(e.target.value);
  // 入力欄の値をtodoDetailに設定
  const onChangeTodoDetail = (e) => setTodoDetail(e.target.value);

  // 追加ボタンクリック時の処理
  const createTodo = () => {
    setTodos([...todos, { id: todoId, title: todoTitle, detail: todoDetail }]);
    setTodoId(todoId + 1);
    setTodoTitle("");
    setTodoDetail("");
  };

  // 編集ボタンクリック時の処理
  const onClickEdit = () => {};

  // 削除ボタンクリック時の処理
  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
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
      </div>
      <table className="todo-area">
        <tbody>
          <tr>
            <th>ID</th>
            <th>状況</th>
            <th>TODO</th>
            <th>詳細</th>
            <th colSpan="2"></th>
          </tr>
          {todos.map((todo, index) => (
            <tr key={todo.id}>
              <td>{todo.id}</td>
              <td>
                <select>
                  <option>未着手</option>
                  <option>進行中</option>
                  <option>完了</option>
                </select>
              </td>
              <td>{todo.title}</td>
              <td>{todo.detail}</td>
              <td>
                <button onClick={() => onClickEdit(index)}>編集</button>
              </td>
              <td>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Todo;

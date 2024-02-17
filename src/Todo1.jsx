import { useState } from "react";
import "./Todo.css";
import { CreateTodo } from "./components/CreateTodo";
// import { EditTodo } from "./components/EditTodo";

function Todo() {
  // TODOリストを定義
  const [todos, setTodos] = useState([]);
  // TODOタイトルを定義
  const [todoTitle, setTodoTitle] = useState("");
  // TODO詳細を定義
  const [todoDetail, setTodoDetail] = useState("");
  // TODOのIDを定義
  const [todoId, setTodoId] = useState(1);
  // 入力欄の表示/非表示を定義
  const [isCreateVisible, setIsCreateVisible] = useState(false);
  // 編集欄の表示/非表示を定義
  const [isEditVisible, setIsEditVisible] = useState(false);

  // 入力欄の値をtodoTitleに設定
  const onChangeTodoText = (e) => setTodoTitle(e.target.value);
  // 入力欄の値をtodoDetailに設定
  const onChangeTodoDetail = (e) => setTodoDetail(e.target.value);

  // 入力欄を開く
  const dispCreateTodo = () => {
    setIsCreateVisible(!isCreateVisible);
  };

  // 追加ボタンクリック時の処理
  const createTodo = () => {
    if (todoTitle === "") return;
    setTodos([...todos, { id: todoId, title: todoTitle, detail: todoDetail }]);
    setTodoId(todoId + 1);
    setTodoTitle("");
    setTodoDetail("");
    setIsCreateVisible(false);
  };

  // キャンセルボタンクリック時の処理
  const closeCreateTodo = () => {
    setIsCreateVisible(false);
  };

  // 編集ボタンクリック時の処理
  const onClickEdit = () => {
    // できてない
  };

  // 削除ボタンクリック時の処理
  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <>
      <div className="create-box">
        {isCreateVisible ? (
          <CreateTodo
            todoTitle={todoTitle}
            onChangeTodoText={onChangeTodoText}
            todoDetail={todoDetail}
            onChangeTodoDetail={onChangeTodoDetail}
            createTodo={createTodo}
            closeTodo={closeCreateTodo}
          />
        ) : (
          ""
        )}

        {/* {isEditVisible ? (
          <EditTodo
            todoTitle={todoTitle}
            onChangeTodoText={onChangeTodoText}
            todoDetail={todoDetail}
            onChangeTodoDetail={onChangeTodoDetail}
            createTodo={createTodo}
            closeTodo={closeTodo}
          />
        ) : (
          ""
        )} */}

        <button onClick={dispCreateTodo} className="create-btn">
          TODOを作成
        </button>
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

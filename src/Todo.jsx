import { useState } from "react";
import "./Todo.css";
import { CreateTodo } from "./components/CreateTodo";
import { EditTodo } from "./components/EditTodo";
import { TodoList } from "./components/TodoList";

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
  // 編集欄の表示/非表示を定義
  const [selectName, setSelectName] = useState("all");
  // ステータスを定義
  const [status, setStatus] = useState("未着手");
  // セレクトボックスの要素を定義
  const filterOptions = [
    { value: "all", label: "すべて" },
    { value: "notStarted", label: "未着手" },
    { value: "inProgress", label: "作業中" },
    { value: "done", label: "完了" },
  ];

  // 編集時のタイトルを定義
  const [editTitle, setEditTitle] = useState("");
  // 編集時の詳細を定義
  const [editDetail, setEditDetail] = useState("");

  // 入力欄の値をtodoTitleに設定
  const onChangeTodoText = (e) => setTodoTitle(e.target.value);
  // 入力欄の値をtodoDetailに設定
  const onChangeTodoDetail = (e) => setTodoDetail(e.target.value);

  // 編集欄の値をeditTitleに設定
  const onEditTodoText = (e) => setEditTitle(e.target.value);
  // 編集欄の値をeditDetailに設定
  const onEditTodoDetail = (e) => setEditDetail(e.target.value);

  // 入力欄を開く
  const dispCreateTodo = () => {
    setIsCreateVisible(!isCreateVisible);
  };

  // 追加ボタンクリック時の処理
  const createTodo = () => {
    if (todoTitle === "") return;
    setTodos([
      ...todos,
      {
        id: todoId,
        title: todoTitle,
        detail: todoDetail,
        status: status,
      },
    ]);
    setTodoId(todoId + 1);
    setTodoTitle("");
    setTodoDetail("");
    setIsCreateVisible(false);
  };

  // キャンセルボタンクリック時の処理
  const closeTodo = () => {
    setIsCreateVisible(false);
    setIsEditVisible(false);
  };

  // 編集ボタンクリック時の処理
  const onClickEdit = (index) => {
    setEditTitle(todos[index].title);
    setEditDetail(todos[index].detail);
    setIsEditVisible(true);
  };

  // 削除ボタンクリック時の処理
  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  // 更新ボタンクリック時の処理
  const onClickUpdate = (index) => {
    setIsEditVisible(false);
  };

  const onChangeSelectName = (e) => {
    setSelectName(e.target.value);
    setStatus(e.target.value);
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
            closeTodo={closeTodo}
          />
        ) : (
          ""
        )}

        {isEditVisible ? (
          <EditTodo
            todoTitle={editTitle}
            onChangeTodoText={onEditTodoText}
            todoDetail={editDetail}
            onChangeTodoDetail={onEditTodoDetail}
            updateTodo={onClickUpdate}
            closeTodo={closeTodo}
          />
        ) : (
          ""
        )}

        <button onClick={dispCreateTodo} className="create-btn">
          TODOを作成
        </button>
      </div>
      <TodoList
        todos={todos}
        filterOptions={filterOptions}
        selectName={selectName}
        onChangeSelectName={onChangeSelectName}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
    </>
  );
}

export default Todo;

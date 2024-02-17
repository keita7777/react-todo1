export const TodoList = (props) => {
  const {
    todos,
    filterOptions,
    onClickEdit,
    onClickDelete,
    selectName,
    onChangeSelectName,
  } = props;
  return (
    <table className="todo-area">
      <tbody>
        <tr>
          <th>ID</th>
          <th>ステータス</th>
          <th>TODO</th>
          <th>詳細</th>
          <th colSpan="2"></th>
        </tr>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>
              <select onChange={onChangeSelectName} name={selectName}>
                {filterOptions.map(({ value, label }) => (
                  <option value={value}>{label}</option>
                ))}
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
  );
};

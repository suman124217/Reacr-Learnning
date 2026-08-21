function UserList({ users }) {
  return (
    <div>
      <h3>User List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {users.map((user, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
export default UserList;

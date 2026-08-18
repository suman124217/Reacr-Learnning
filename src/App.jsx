import { useState } from 'react'; 
import withLoading from './withloading.jsx';
import UserList from './userlist.jsx';

const UserListWithLoading = withLoading(UserList);

function App() { 
  const [isLoading, setIsLoading] = useState(true);

  const users = ['Ram', 'Amit', 'Rahul', 'Priya'];

  return (
    <div style={{ padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '20px auto' }}>
      <h2>ReactJS Higher-Order Component Example</h2>
      
      <button 
        onClick={() => setIsLoading(!isLoading)} 
        style={{ padding: '8px 16px', cursor: 'pointer', marginBottom: '15px' }}
      >
        [Toggle Loading]
      </button>

      <UserListWithLoading isLoading={isLoading} users={users} />
    </div>
  );
}

export default App;
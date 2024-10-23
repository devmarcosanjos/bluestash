import {APP_URL} from '@/config/env-client'

export const TodoList = async () => {
  const response = await fetch(`${APP_URL}/api/users`)
  const users = await response.json()

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>uID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user, i) => (
            <tr key={i} className='bg-base-200'>
              <th>{user.id}</th>
              <td>{user.uid}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

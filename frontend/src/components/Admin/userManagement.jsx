import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';
import summaryAPI from '../../../common';

const roles = ['user', 'admin'];

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'user', password: '' });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(summaryAPI.get_users.url);
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingUser) {
        const response = await axios.put(`${summaryAPI.update_user.url}/${editingUser._id}`, newUser);
        setUsers(users.map(user => (user._id === editingUser._id ? response.data : user)));
      } else {
        const response = await axios.post(summaryAPI.create_user.url, newUser);
        setUsers([...users, response.data]);
      }
      setNewUser({ name: '', email: '', role: 'user', password: '' });
      setEditingUser(null);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (user) => {
    setNewUser(user);
    setEditingUser(user);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`${summaryAPI.delete_user.url}/${userId}`);
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex h-screen">
      <AdminSidebar className="w-1/4 h-full" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="mb-4 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="name"
                value={newUser.name}
                onChange={handleInputChange}
                placeholder="Nom"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleInputChange}
                placeholder="Adresse email"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex space-x-4">
              <select
                name="role"
                value={newUser.role}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
              >
                {roles.map(role => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded w-full"
              >
                {editingUser ? 'Modifier utilisateur' : 'Ajouter utilisateur'}
              </button>
            </div>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Liste des utilisateurs</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50">Nom</th>
                <th className="px-6 py-3 bg-gray-50">Adresse email</th>
                <th className="px-6 py-3 bg-gray-50">Rôle</th>
                <th className="px-6 py-3 bg-gray-50">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => (
                <tr key={user._id}>
                  <td className="px-6 py-4">{user.name}</td>
                  <td className="px-6 py-4">{user.email}</td>
                  <td className="px-6 py-4 capitalize">{user.role}</td>
                  <td className="px-6 py-4 space-x-4">
                    <button
                      onClick={() => handleEdit(user)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Supprimer
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;

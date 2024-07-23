import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminSidebar from './AdminSidebar';
import summaryAPI from '../../../common';
import { getImageUrl } from '../../utils';

const categories = [
  'telephones',
  'electromenagers',
  'televisions',
  'electroniques',
  'climatiseurs',
  'imprimantes',
  'ordinateurs',
];

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    id: '',
    name: '',
    description: '',
    prix: '',
    image: '',
    category: '',
    stock: 50,
    note: 3,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await axios.get(summaryAPI.get_products.url);
      if (Array.isArray(response.data)) {
        setProducts(response.data);
      } else {
        throw new Error('Response is not an array');
      }
      setLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Handle file input change for image upload
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setNewProduct({
      ...newProduct,
      image: file.name,  // Display the file name for preview
      imageFile: file,  // Store the actual file for submission
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('id', newProduct.id);
      formData.append('name', newProduct.name);
      formData.append('description', newProduct.description);
      formData.append('prix', newProduct.prix);
      formData.append('image', newProduct.imageFile);  // Add the image as a file
      formData.append('category', newProduct.category);
      formData.append('stock', newProduct.stock);
      formData.append('note', newProduct.note);

      let response;
      if (editingProduct) {
        response = await axios.put(
          `${summaryAPI.update_product.url}/${editingProduct._id}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',  // Specify content type as 'multipart/form-data'
            },
          }
        );
        setProducts(products.map((product) => (product._id === editingProduct._id ? response.data : product)));
      } else {
        response = await axios.post(summaryAPI.create_product.url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setProducts([...products, response.data]);
      }

      setNewProduct({
        id: '',
        name: '',
        description: '',
        prix: '',
        image: '',
        category: '',
        stock: 50,
        note: 3,
      });
      setEditingProduct(null);
    } catch (error) {
      console.error('Error submitting product:', error);
      setError(error.message);
    }
  };

  // Handle editing a product
  const handleEdit = (product) => {
    setNewProduct(product);
    setEditingProduct(product);
  };

  // Handle deleting a product
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`${summaryAPI.delete_product.url}/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('Error deleting product:', error);
      setError(error.message);
    }
  };

  // Render loading state while fetching data
  if (loading) return <div>Loading...</div>;

  // Render error message if there's an error fetching data
  if (error) return <div>Error: {error}</div>;

  // Render the product management UI
  return (
    <div className="flex h-screen">
      <AdminSidebar className="w-1/4 h-full" />
      <div className="flex-1 p-4 overflow-auto">
        <div className="mb-4 bg-white p-6 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                name="id"
                value={newProduct.id}
                onChange={handleInputChange}
                placeholder="ID"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                name="name"
                value={newProduct.name}
                onChange={handleInputChange}
                placeholder="Nom"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="text"
                name="description"
                value={newProduct.description}
                onChange={handleInputChange}
                placeholder="Description"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                name="prix"
                value={newProduct.prix}
                onChange={handleInputChange}
                placeholder="Prix"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <div className="flex space-x-4">
              <input
                type="file"
                onChange={handleFileInputChange}
                accept="image/*"
                className="p-2 border rounded w-full"
              />
              <select
                name="category"
                value={newProduct.category}
                onChange={handleInputChange}
                className="p-2 border rounded w-full"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex space-x-4">
              <input
                type="number"
                name="stock"
                value={newProduct.stock}
                onChange={handleInputChange}
                placeholder="Stock"
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="number"
                name="note"
                value={newProduct.note}
                onChange={handleInputChange}
                placeholder="Note"
                required
                className="p-2 border rounded w-full"
              />
            </div>
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded w-full"
            >
              {editingProduct ? 'Modifier produit' : 'Ajouter produit'}
            </button>
          </form>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4">Liste des produits</h2>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50">ID</th>
                <th className="px-6 py-3 bg-gray-50">Nom</th>
                <th className="px-6 py-3 bg-gray-50">Description</th>
                <th className="px-6 py-3 bg-gray-50">Prix</th>
                <th className="px-6 py-3 bg-gray-50">Image</th>
                <th className="px-6 py-3 bg-gray-50">Catégorie</th>
                <th className="px-6 py-3 bg-gray-50">Stock</th>
                <th className="px-6 py-3 bg-gray-50">Note</th>
                <th className="px-6 py-3 bg-gray-50">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="px-6 py-4">{product.id}</td>
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.description}</td>
                  <td className="px-6 py-4">{product.prix}</td>
                  <td className="px-6 py-4">
                    <img
                      src={getImageUrl(product.image)}
                      alt={product.name}
                      className="w-16 h-16 object-cover"
                    />
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">{product.note}</td>
                  <td className="px-6 py-4 space-x-4">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      Modifier
                    </button>
                    <button
                      onClick={() => handleDelete(product._id)}
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

export default ProductManagement;

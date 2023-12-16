

import React from 'react';
import { Link } from 'react-router-dom';

function CategoryList({ categories, onDeleteCategory }) {
  return (
    <div>
      <h2>Categories</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category._id}>
              <td>{category.name}</td>
              <td>
                <Link to={`/admin/edit/${category._id}`} className="btn btn-primary btn-sm">
                  Edit
                </Link>
              </td>
              <td>
                <button
                  onClick={() => onDeleteCategory(category._id)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;

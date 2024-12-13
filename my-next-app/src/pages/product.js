import React from 'react';

const Product = () => (
  <div>
    <main className="container">
      <h1 id="heading">Product List</h1>
      <div id="product-list" className="row"></div>
      <div id="noProductsMessage" style={{ display: 'none' }}>No products available.</div>
      <div id="pagination" className="d-flex justify-content-between mt-4">
        <button id="prevButton" className="btn btn-primary">Previous</button>
        <button id="nextButton" className="btn btn-primary">Next</button>
      </div>
    </main>

    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="deleteModalLabel">Confirm Delete</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this product?
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <button type="button" className="btn btn-danger" id="confirmDelete">Delete</button>
          </div>
        </div>
      </div>
    </div>

    <footer id="footer" className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div className="col-md-4 d-flex align-items-center">
        <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg className="bi" width="30" height="24">
            <use href="#bootstrap"></use>
          </svg>
        </a>
        <span className="mb-3 mb-md-0 text-body-secondary" id="footer-content"></span>
      </div>
    </footer>
  </div>
);

export default Product;

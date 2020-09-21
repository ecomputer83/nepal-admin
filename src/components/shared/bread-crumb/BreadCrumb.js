import React from 'react';

const BreadCrumb = ({ title, isAdmin }) => {
  return (
    <div>
      <div className="card-body">
        <div className="row">
          <div className="col-7 align-self-center">
            <h4 className="card-title">{title}</h4>
          </div>
          {
            isAdmin ?
              <div className="col-5 align-self-center">
                <div className="customize-input float-right">
                  <button type="button" className="btn wasves-effect waves-light btn-info">Add User</button>
                </div>
              </div>
              :
              null
          }
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb;
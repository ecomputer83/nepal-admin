import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { format } from "date-fns";
import ReactTooltip from "react-tooltip";
import { useDispatch, useSelector } from 'react-redux';
import { articleActions } from 'state/actions/articleActions';




const ArticleItem = ({ article }) => {

  const [picture, setPicture] = useState(null);
  const dispatch = useDispatch();
  const { register, handleSubmit, errors, formState, reset } = useForm({
    mode: "onChange"
  });

  const reducer = useSelector(state => state.articleReducer);
  const newArticle = reducer.article;



  var date = new Date(article.articleDate);
  var orderDate = format(date, 'dd-MM-yyyy');


  const updateArticle = (data, e) => {
    const id = newArticle.id;
    data.imageFile = picture;
    dispatch(articleActions.updateArticle(id, data));
    reset();
  }

  const deleteArticle = () => {
    const articleId = localStorage.getItem('selectedArticleId');
    dispatch(articleActions.deleteArticle(articleId));
  }

  const handleModalOpen = (id) => {
    localStorage.setItem('selectedArticleId', id);
  };

  const handleArticleModalOpen = (id) => {
    localStorage.setItem('selectedArticleId', id);
    dispatch(articleActions.getArticle(id));
  }

  const handleChange = e => {
    e.preventDefault()
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      // const reader = new FileReader();

      // reader.addEventListener("load", () => {
      //   setImgData(reader.result);
      // });
      // reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <>
      <tr>


        <th style={{ padding: '1rem 1rem 1rem 3rem' }}>{article.id}</th>
        <td >{article.title}</td>
        <td className="text">{article.body}</td>
        <td >{orderDate}</td>
        <td style={{ textAlign: 'end' }}>
          <button onClick={() => handleArticleModalOpen(article.id)} type="button"
            className="btn btn-success btn-circle" style={{ marginRight: '10px' }} data-tip="Edit Article"
            data-for='toolTip1' data-place='top' data-toggle="modal"
            data-target="#add-alert-modal" >
            <i className="fa fa-edit"></i></button>
          <button onClick={() => handleModalOpen(article.id)} type="button"
            className="btn btn-danger btn-circle" data-tip="Remove Article"
            data-for='toolTip2' data-place='top' style={{ marginRight: '10px' }} data-toggle="modal"
            data-target="#warning-alert-modal"><i className="fa fa-times"></i></button>

          <ReactTooltip id="toolTip1" />
          <ReactTooltip id="toolTip2" />
        </td>
        <td style={{ padding: '1rem 1rem 1rem 0' }}>
          <div id="add-alert-modal" className="modal fade" tabIndex="-1" role="dialog"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="">
                    <i className="dripicons-warning h1 text-warning"></i>
                    <form className="pl-3 pr-3" action="#">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input className="form-control" type="text" id="title"
                              defaultValue={newArticle.title}
                              required="" placeholder="Title" name="title" ref={register({
                                required: "Title is required",
                              })} />
                            {errors.title && <p className="error">{errors.title.message}</p>}

                          </div>
                        </div>


                      </div>



                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea className="form-control" rows="4" name="body"
                              defaultValue={newArticle.body}
                              ref={register({
                                required: "Body is required",
                              })}></textarea>
                            {errors.body && <p className="error">{errors.body.message}</p>}
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="file">Update Article Image</label>
                            <input
                              type="file"
                              id="upload-button"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group text-center">
                        <div className="customize-input float-right">
                          <button className="btn btn-primary" disabled={!formState.isValid}
                            onClick={handleSubmit(updateArticle)} style={{ marginRight: '20px' }}
                            data-dismiss="modal" type="submit">Submit</button>
                          <button className="btn btn-danger" data-dismiss="modal" type="submit">Cancel</button>
                        </div>
                      </div>
                    </form>
                    {/* <button type="submit" onClick={handleSubmit(updateArticle)} style={{ margin: '0 1em' }} className="btn btn-outline-info submit-btn"
                      data-dismiss="modal" disabled={!formState.isValid} > Submit</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="warning-alert-modal" className="modal fade" tabIndex="-1" role="dialog"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-body center-item">
                  <div className="">
                    <i className="dripicons-warning h1 text-warning"></i>
                    <p>Are you sure you want to remove this article?</p>
                    <button type="submit" onClick={deleteArticle} style={{ margin: '0 1em' }} className="btn btn-outline-info submit-btn alert-btn"
                      data-dismiss="modal" > Yes</button>
                    <button type="button" className="btn btn-outline-info submit-btn alert-btn"
                      data-dismiss="modal">No</button>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </>
  )
}


export default ArticleItem;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import ArticleItem from './ArticleItem';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';

import { articleActions } from 'state/actions/articleActions';
import Spinner from 'components/shared/spinner/Spinner';

const Articles = () => {
  const dispatch = useDispatch();
  const arReducer = useSelector(state => state.articleReducer);
  const articles = arReducer.articles;
  const pending = arReducer.pending;

  useEffect(() => {
    dispatch(articleActions.getArticles())
  }, [dispatch])

  const articleItems = articles.map((ar) => <ArticleItem key={ar.id} creditApproval={ar} />);


  return (
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
      {pending ? <Spinner /> : null}
      <HeaderNav />
      <LeftNav />
      <div className="page-wrapper" style={{ display: 'block' }}>
        <div className="col-12">
          <div className="card">
            <BreadCrumb title="Articles" isAdmin="neutral"/>
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <thead className="bg-primary text-white">
                  <tr>
                    <th style={{ padding: '1rem 1rem 1rem 3rem' }} scope="col">Business Name</th>
                    <th scope="col">Order Date</th>
                    <th scope="col">Order No</th>
                    <th scope="col">Total Amount (#)</th>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Teller No</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {articles.length > 0 ? articleItems : <tr><td>No record available</td></tr>}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles;
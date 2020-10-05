import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import HeaderNav from 'components/shared/header-nav/HeaderNav';
import LeftNav from 'components/shared/left-nav/LeftNav';
import ArticleItem from './ArticleItem';
import BreadCrumb from 'components/shared/bread-crumb/BreadCrumb';

import { articleActions } from 'state/actions/articleActions';
import Spinner from 'components/shared/spinner/Spinner';
import { useSortableData } from 'utils/sorter';

const Articles = () => {
  const dispatch = useDispatch();
  const arReducer = useSelector(state => state.articleReducer);
  const articles = arReducer.articles;
  const { items, requestSort, sortConfig } = useSortableData(articles);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  const pending = arReducer.pending;

  useEffect(() => {
    dispatch(articleActions.getArticles())
  }, [dispatch])

  const articleItems = items.map((ar) => <ArticleItem key={ar.id} article={ar} />);


  return (
    <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full"
      data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
      <HeaderNav />
      <LeftNav />
      <div className="page-wrapper" style={{ display: 'block' }}>
        <div className="col-12">
          <div className="card">
            <BreadCrumb title="Articles" articleBtn="true" />
            <div className="table-responsive">
              {pending ? <Spinner /> : null}
              <table className="table table-striped mb-0" id="myTable">
                <thead className="bg-primary text-white">
                  <tr>
                    <th style={{ padding: '1rem 1rem 1rem 3rem' }} onClick={() => requestSort('title')} className={getClassNamesFor('title')}>Id</th>
                    <th scope="col" onClick={() => requestSort('body')} className={getClassNamesFor('body')}>Title</th>
                    <th scope="col" onClick={() => requestSort('imageFile')} className={getClassNamesFor('imageFile')}>Body</th>
                    <th scope="col" onClick={() => requestSort('articleDate')} className={getClassNamesFor('articleDate')}>Date</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 ? articleItems : <tr><td>No record available</td></tr>}
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
import React from 'react';

let eventPage = '';
export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      switch (eventPage) {
        case 'payment':
          if (sortConfig.key === 'orderDate' || sortConfig.key === 'orderNo') {
            multiLevelOrderSortFunction(sortableItems, sortConfig);
          }
          if (sortConfig.key === 'totalAmount' || sortConfig.key === 'name' || sortConfig.key === 'reference') {
            multiLevelCreditSortFunction(sortableItems, sortConfig);
          }
          break;
        case 'creditApproval':
          if (sortConfig.key === 'ipmanCode' || sortConfig.key === 'businessName' || sortConfig.key === 'creditBalance') {
            multiLevelUserOrderSortFunction(sortableItems, sortConfig);
          }
          if (sortConfig.key === 'orderNo' || sortConfig.key === 'orderDate') {
            multiLevelOrderSortFunction(sortableItems, sortConfig);
          }
          if (sortConfig.key === 'totalAmount') {
            multiLevelCreditSortFunction(sortableItems, sortConfig);
          }

          break;
        default:
          singleLevelSortFunction(sortableItems, sortConfig);
          break;
      }
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key, e = '') => {
    eventPage = e;
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

function multiLevelOrderSortFunction(sortableItems, sortConfig) {
  sortableItems.sort((a, b) => {
    if (a.order[sortConfig.key] < b.order[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a.order[sortConfig.key] > b.order[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
}

function multiLevelUserOrderSortFunction(sortableItems, sortConfig) {
  sortableItems.sort((a, b) => {
    if (a.order.user[sortConfig.key] < b.order.user[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a.order.user[sortConfig.key] > b.order.user[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
}

function multiLevelCreditSortFunction(sortableItems, sortConfig) {
  sortableItems.sort((a, b) => {
    if (a.credit[sortConfig.key] < b.credit[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a.credit[sortConfig.key] > b.credit[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
}

function singleLevelSortFunction(sortableItems, sortConfig) {
  sortableItems.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });
}


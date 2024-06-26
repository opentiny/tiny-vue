const tableConfig = [
  { title: 'Number', field: 'id', width: '100' },
  { title: 'Title', field: 'subject', width: '200' },
  { title: 'Priority', field: 'priority', width: '100' },
  { title: 'Iteration', field: 'iteration', width: '100' },
  { title: 'Status', field: 'status', width: '100' },
  { title: 'Conductor', field: 'assigned_to', width: '100' },
];

export function createTable(data: any[]) {
  const table = document.createElement<'table'>('table');
  createColGroup(table);
  createTableHead(table);
  createTableBody(table, data);
  return table;
}

function createColGroup(table: HTMLTableElement) {
  const colGroup = document.createElement<'colgroup'>('colgroup');
  tableConfig.forEach(({width}) => {
    const col = document.createElement<'col'>('col');
    col.setAttribute('width', width);
    colGroup.appendChild(col);
  });
  table.insertAdjacentElement('afterbegin', colGroup);
}

function createTableHead(table: HTMLTableElement) {
  const tHead = table.createTHead();
  const tRow = tHead.insertRow();
  tableConfig.forEach(({title}) => {
    const tCell = tRow.insertCell();
    tCell.textContent = title;
  });
  return tHead;
}

function createTableBody(table: HTMLTableElement, data: any[]) {
  const tBody = table.createTBody();

  [].forEach.call(data, (d) => {
    const tRow = tBody.insertRow();
    // @ts-ignore
    tRow.setAttribute('href', d.url);
    tableConfig.forEach(({field}) => {
      const tCell = tRow.insertCell();
      tCell.classList.add(`work-item-${field}`);
      // @ts-ignore
      tCell.textContent = d[field];
    });
  });

  return tBody;
}

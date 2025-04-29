import React from "react";
import { customersData, customersGrid } from "../data/dummy";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Selection,
  Toolbar,
  Sort,
  Filter,
  Page,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pages" title="Customers" />
      <GridComponent
        id="gridCustomer"
        dataSource={customersData}
        allowSorting
        allowPaging
        toolbar={["Delete"]}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Selection, Toolbar, Sort, Filter, Page, Edit]} />
      </GridComponent>
    </div>
  );
};

export default Customers;

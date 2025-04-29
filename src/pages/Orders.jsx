import React from "react";
import { ordersData, contextMenuItems, ordersGrid } from "../data/dummy";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from "@syncfusion/ej2-react-grids";
import { Header } from "../components";
const Orders = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Pages" title="Orders" />
      <GridComponent id="gridcomp" allowSorting allowPaging dataSource={ordersData}>
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort,ContextMenu, Filter, Page,ExcelExport,Edit,PdfExport]} />
      </GridComponent>
    </div>
  );
};

export default Orders;

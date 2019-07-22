import React from 'react'
import { v4 } from 'uuid'
import './Invoice.css'

function Invoice({ data: { name, address, article1, article2, price1, price2 } }) {
  const date = new Date().toString()
  const handlePrice = (string) => string ? parseFloat(string).toFixed(2) : parseFloat('0').toFixed(2);
  return (
    <div className="invoice">
      <nav className="invoice_navbar">
        <img
          src="http://kidsforward.net/assets/PDF-Logo.png"
          className="d-inline-block align-top"
          alt="logo"
          width="30"
          height="30"
        />
        <span className="invoice_navbar-brand">
          Invoice number: {v4()}
        </span>
      </nav>
      <div className="invoice_container">
        <p className="invoice_text-right">{date}</p>
        <p>Name: <strong>{name}</strong></p>
        <p>Address: {address}</p>
        <div className="invoice_list-group top">
          <div className="invoice_list-item description">Description</div>
          <div className="invoice_list-item">Price</div>
        </div>
        <div className="invoice_list-group">
          <div className="invoice_list-item description">{article1}</div>
          <div className="invoice_list-item invoice_text-right">{handlePrice(price1)}</div>
        </div>
        <div className="invoice_list-group">
          <div className="invoice_list-item description">{article2}</div>
          <div className="invoice_list-item invoice_text-right">{handlePrice(price2)}</div>
        </div>
        <div className="invoice_list-group bottom">
          <div className="invoice_list-item description invoice_text-right">Total</div>
          <div className="invoice_list-item invoice_text-right">{handlePrice(Number(price1) + Number(price2))}</div>
        </div>
      </div>
    </div>
  )
}

export default Invoice

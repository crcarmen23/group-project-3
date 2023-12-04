import MenuList from "../components/MenuList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import React from "react";



export default function Menu() {
    return (
        <div class="row row-cols-1 row-cols-sm-3 g-4">
            <div className="col">
                <div className="card w-60 h-40 m-5">
                    <img
                        src="https://media.istockphoto.com/id/1181611076/photo/homemade-italian-bruschetta-on-rustic-wooden-table.jpg?s=612x612&w=is&k=20&c=_uYCejX-sH-UamilQrgGtySgCWlj4i0m61YU-00IEJU="
                        class="card-img-top"
                        alt="Appetizers Image"
                    />
                    <div>
                        <h5 className="card-title">Appetizers</h5>
                        <p className="card-text">
                           Stuzzichino, Antipasto
                        </p>
                        <div className="d-flex justify-content-evenly">
                           
                            <a
                                href=""
                                className="btn btn-primary"
                            >
                                View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card w-60 h-40 m-5">
                    <img
                        src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        class="card-img-top"
                        alt="Veggie Image"
                    />
                    <div className="card-body">
                        <h5 className="card-title">Vegetarian</h5>
                        <p className="card-text">
                            Vegetariano
                        </p>
                        <div className="d-flex justify-content-evenly">
                            
                              <a
                                href=""
                                className="btn btn-primary"
                            >
                                View
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            class="card-img-top"
            alt="Entree Image"
          />
          <div className="card-body">
            <h5 className="card-title">Entrees</h5>
            <p className="card-text">
              Antipasti
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href=""
                className="btn btn-primary"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
            class="card-img-top"
            alt="Dessert Image"
          />
          <div className="card-body">
            <h5 className="card-title">Dessert</h5>
            <p className="card-text">
              Dolce
            </p>
            <div className="d-flex justify-content-evenly">
             
              <a
                href=""
                className="btn btn-primary"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
</div>           

    
  )}


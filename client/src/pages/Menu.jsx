import MenuList from "../components/MenuList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import React from 'react';

export default function Menu() {
  return (
    <div className="columns is-multiline">
      <div className="column is-half">
        <div className="card">
          <div className="card-image">
            <figure className="image is-2by1">
          <img
            src="https://media.istockphoto.com/id/1403532879/photo/homemade-fresh-caprese-skewer-appetizer.jpg?s=612x612&w=is&k=20&c=BxPdMjkvjMFc7UM8Rr9DkdmXOI5EbIoMHH9bLfC2zp8="
            alt="Appetizers Image"
            className="card-img-top"
          />
          <div className="card-content">
            <h5 className="title is-5">Appetizers</h5>
            <p>
              Stuzzichino, Antipasto
            </p>
            <div className="buttons is-centered">
              <a href="" className="button is-primary">
                View
              </a>
            </div>
          </div>
          </figure>
        </div>
        
        </div>
      </div>
      <div className="column is-one-third">
        <div className="card">
        <div className="card-content">
          <img
            src="https://media.istockphoto.com/id/1189709277/photo/pasta-penne-with-roasted-tomato-sauce-mozzarella-cheese-grey-stone-background-top-view.jpg?s=612x612&w=is&k=20&c=ZlfL1M5DBB1V4WtWt_cFBTcMpUvSSCTzwZODCWI-9IE="
            alt="Veggie Image"
            className="card-img-top"
          />
          <div className="card-content">
            <h5 className="title is-5">Vegetarian</h5>
            <p>
              Vegetariano
            </p>
            <div className="buttons is-centered">
              <a href="" className="button is-primary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="card">
        <div className="card-content">
          <img
            src="https://media.istockphoto.com/id/962194078/photo/chicken-marsala.jpg?s=612x612&w=is&k=20&c=dcRHc-AebwwvD3yb4A0q5fFyk3mnQMwipz48wx9l7IA="
            alt="Entree Image"
            className="card-img-top"
          />
          <div className="card-content">
            <h5 className="title is-5">Entrees</h5>
            <p>
              Antipasti
            </p>
            <div className="buttons is-centered">
              <a href="" className="button is-primary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="column is-one-third">
        <div className="card">
        <div className="card-content">
          <img
            src="https://media.istockphoto.com/id/903092896/photo/cannoli-italian-sweet-dessert.jpg?s=612x612&w=is&k=20&c=Bs2lshPcKYl-AkD2MXGfipJHvMldqHECWeC-S2vQyyU="
            alt="Dessert Image"
            className="card-img-top"
          />
          <div className="card-content">
            <h5 className="title is-5">Dessert</h5>
            <p>
              Dolce
            </p>
            <div className="buttons is-centered">
              <a href="" className="button is-primary">
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
}
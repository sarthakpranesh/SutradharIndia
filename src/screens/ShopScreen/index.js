import React, {useState, useEffect} from 'react';
import 'firebase/firestore';
import Skeleton from 'react-loading-skeleton';

import SectionContainer from '../../components/SectionContainer/SectionContainer.js'
import Button from '../../components/Button/Button.js';
import Footer from '../../components/Footer/Footer.js';

import firebase from '../../config/firebase.js';

import "./styles.css";

const ShopScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    firebase.firestore().collection("products").get()
      .then((querySnap) => {
        let p = []
        querySnap.forEach((snap) => {
          p.push(snap.data())
        })
        setProducts(p);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])
  console.log(products)
  return (
    <>
    <SectionContainer
      className="topShopRoller"
      leftClassName=""
      leftContent={() => (
        <div>
          <h1 className="topShopRollerFixedHeader">Shop With Us</h1>
          <div className="topShopRollerInnerDiv">
            <h3 id="">Name of the Product</h3>
              <ol>
                <li>Hand woven grass containers</li>
                <li>Long lasting</li>
                <li>Fully biodegradable</li>
              </ol>
              <br />
            <Button>Buy Now</Button>
          </div>
        </div>
      )}
      rightContent={() => <img src={require("../../assets/Handicraft/Seasonal Grass/grass-tray.jpg")} alt="Product" />}
    >
    </SectionContainer>

    {
      products.length !== 0 ? (
        products.map((type) => {
          return (
            <div class="productDisplayContainer" id="Containers" >
              <div class="productDisplayTitle">
                  <h3>Few Grass Containers</h3>
              </div>
              <div class="productDisplayShowcase">
                {
                  type.items.map((item, index) => {
                    return (
                      <div key={`${index}`}>
                        <img class="showcaseImage" src={item.img} alt="Sutradhar India Grass Utils" />
                        <h5>{item.name}</h5>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      ) : (
        <div class="productDisplayContainer" id="Containers" >
          <div class="productDisplayTitle">
              <h3><Skeleton count={4}/></h3>
          </div>
          <div class="productDisplayShowcase">
            <div>
              <div className="showcaseImage"><Skeleton circle={true} /></div>
              <h5><Skeleton /></h5>
            </div>
            <div>
              <div className="showcaseImage"><Skeleton circle={true} /></div>
              <h5><Skeleton /></h5>
            </div>
            <div>
              <div className="showcaseImage"><Skeleton circle={true} /></div>
              <h5><Skeleton /></h5>
            </div>
          </div>
        </div>
      )
    }

    <Footer />
    </>
  );
}

export default ShopScreen;

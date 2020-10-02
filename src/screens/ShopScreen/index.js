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
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  if (selectedProduct !== null) {
    return (
      <SectionContainer
        className="topShopRoller"
        leftClassName=""
        leftContent={() => <img src={selectedProduct.img} alt="Product" />}
        rightClassName=""
        rightContent={() => (
          <div>
            <div className="topShopRollerInnerDiv">
              <h3>{selectedProduct.name}</h3>
              <p>
                {selectedProduct.desc != null ? selectedProduct.desc : "No Description Provided!"}
              </p>
              <br />
              {
                selectedProduct.features != null
                ?
                (
                  <>
                    <h6>Key Features</h6>
                    <ol>
                      {selectedProduct.features.map((f) => <li>{f}</li>)}
                    </ol>
                  </>
                ) : 
                null
              }
              <br />
              <p>
                Cost: Rs. xxx /-
              </p>
              <Button href={`/order/${selectedProduct.id}@@@${selectedProduct.index}`}>BUY NOW</Button>
            </div>
          </div>
        )}
      >
        <button onClick={() => setSelectedProduct(null)} style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          width: "40px",
          height: "40px",
          textAlign: "center",
          padding: "0px",
          borderRadius: "50%",
        }}>
          x
        </button>
      </SectionContainer>
    );
  }

  return (
    <>
    <SectionContainer
      className="topShopRoller"
      leftClassName=""
      leftContent={() => (
        <div>
          <h1 className="topShopRollerFixedHeader">Shop With Us</h1>
          <div className="topShopRollerInnerDiv">
            <h3 id="">Grass Tray Set</h3>
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
      rightClassName="topRollerImageWrapper"
      rightContent={() => <img src={require("../../assets/Handicraft/Seasonal Grass/grass-tray.jpg")} alt="Product" />}
    >
      <button onClick={() => window.location.href = "/"} className="topSutradharHomeLink">
        <h5>Sutradhar India</h5>
      </button>
    </SectionContainer>

    {
      products.length !== 0 ? (
        products.reverse().map((type) => {
          return (
            <div class="productDisplayContainer" id="Containers" >
              <div class="productDisplayTitle">
                  <h3>{type.name}</h3>
              </div>
              <div class="productDisplayShowcase">
                {
                  type.items.map((item, index) => {
                    return (
                      <button style={{backgroundColor: "transparent", border: "none"}} key={`${index}`} onClick={() => {
                        setSelectedProduct({
                          ...item,
                          id: type.id,
                          index,
                        })
                      }}>
                        <div>
                          <img class="showcaseImage" src={item.img} alt="Sutradhar India Grass Utils" />
                          <h5>{item.name}</h5>
                        </div>
                      </button>
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

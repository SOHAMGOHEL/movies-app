import React from "react";
import "./index.css";

const Search = () => {
  const App = [
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg",
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7BF8D434B7B43E4815C725C6A5FF4BF27D64E98D0EADD6C2D820E81008A94B6B/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal",
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/52AB5D97F245DD6F0A007347504D736C914C474EB5EECFD1955789065662CC5F/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal",
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg",
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal",
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg",
	" https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C47B65BB35697D58EFA4C776C4D93DA9F2DBCF24195413CE664F241441142721/scale?width=400&aspectRatio=0.71&format=jpeg",
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/2BB63ED859DC9CCFEFE1A6A239F2A3DD26C34718F3046891AB97E16D620D7360/badging?width=400&aspectRatio=0.71&format=jpeg&label=disneyplusoriginal",
    " https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7B1BF88E4AD4A07C0DF489ACCA234032BB719C2757BC44FC58B6E782C188D77D/scale?width=500&aspectRatio=0.71&format=jpeg",
  
  ];
  console.log(App);
  return (
    <section className=" h-80 overflow-hidden bg-[#131520]">
		<div className="wrapper-images">

		<div className="images-line flex w-full flex-wrap">
      {App.map((image) => {
        return (
          <div className="line w-24 h-28 rounded-lg overflow-hidden">
            <img src={image} alt="search" className=" w-full h-full object-cover " />
          </div>
        );
      })}
	  </div>
	  <div className="images-line flex w-full flex-wrap">
      {App.map((image) => {
        return (
          <div className="line w-24 h-28 rounded-lg overflow-hidden">
            <img src={image} alt="search" className=" w-full h-full object-cover " />
          </div>
        );
      })}
	  </div>
	  <div className="images-line flex w-full flex-wrap">
      {App.map((image) => {
        return (
          <div className="line w-24 h-28 rounded-lg overflow-hidden">
            <img src={image} alt="search" className=" w-full h-full object-cover " />
          </div>
        );
      })}
	  </div>
	  <div className="images-line flex w-full flex-wrap">
      {App.map((image) => {
        return (
          <div className="line w-24 h-28 rounded-lg overflow-hidden">
            <img src={image} alt="search" className=" w-full h-full object-cover " />
          </div>
        );
      })}
	  </div>
	  </div>
    </section>
  );
};

export default Search;

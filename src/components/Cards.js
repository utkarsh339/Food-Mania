import React from "react";

export default function Cards(props) {


  let options=props.options;
  let priceOptions=Object.keys(options);

  const handleAddToCart=()=>{

  }


  return (
    <div>
      <div className="card m-3 d-inline-block" style={{ width: "15rem", maxHeight: "360px" }}>
        <img
          src={props.imgSrc}
          className="card-img-top"
          alt="..." style={{height: "120px", objectFit: "fill"}}
        />
        <div className="card-body">
          <h5 class="card-title">{props.foodName}</h5>
          <div className="container w-100">
            <select className="mt-1 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <div className="d-inline mx-2">
              <select className=" h-100 bg-success">
                {priceOptions.map((data)=>{
                  return <option key={data} value={data}>{data}</option>
                })}
              </select>
              <div className="h-10 fs-6">Total Price</div>
            </div>
            <hr/>
            <button className={`btn btn-success justify-center ms-2`} onClick={handleAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

function cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            <img src={item.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline font-bold">${item.price}</div>
              <div className="cursor-pointer p-3 font-bold badge badge-outline hover:bg-green-400 hover:text-white duration-200">
                Buy me
              </div>
              {/* <div>
                <button className="border" onclick={item.Pdf}>
                  Download PDF
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default cards;

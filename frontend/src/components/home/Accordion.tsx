import React from "react";

const Accordion = () => {
  return (
    <div className="accordion shadow-sm border-0 " id="accordionFlushExample">
      <div className="accordion-item  ">
        <h2 className="accordion-header " id="flush-headingOne">
          <button
            className="accordion-button mainColor collapsed h6"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Our mountains and our location
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="paraColor">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first accordion body.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item ">
        <h2 className="accordion-header" id="flush-headingTwo">
          <button
            className="accordion-button mainColor collapsed h6"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            About our treks and trips
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="paraColor">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second accordion body. imagine this being filled with some actual
              content.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion-item ">
        <h2 className="accordion-header" id="flush-headingThree">
          <button
            className="accordion-button mainColor collapsed h6"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            About our team and guests
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            <p className="paraColor">
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              third accordion body. Nothing more exciting happening here in
              terms of content, but just filling up the space to make it look,
              at least at first glance, a bit more representative of how this
              would look in a real-world application.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
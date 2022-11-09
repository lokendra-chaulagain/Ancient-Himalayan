import React, { useContext } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { HomeContext } from "../../../context/HomeContext";

export default function Add2iiDialog() {
  const { handleSec2iiInputChange, newSec2ii, handle2iiFormSubmit } = useContext(HomeContext);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Grid
        container
        justifyContent="end">
        <Button
          size="large"
          onClick={handleClickOpen}
          className="customCard px-4">
          Add New
        </Button>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}>
        <form className="customCard p-3 overflow_hidden">
          <h4>Create New Service </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="title"
                className="form-label ">
                Title
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handleSec2iiInputChange}
                name="title"
                value={newSec2ii.title}
                placeholder="placeholder"
              />
            </div>

            <div className="col">
              <label
                htmlFor="subtitle"
                className="form-label ">
                subtitle
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                id="subtitle"
                onChange={handleSec2iiInputChange}
                value={newSec2ii.subtitle}
                name="subtitle"
                placeholder="placeholder"
              />
            </div>
          </div>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="description"
                className="form-label ">
                description
              </label>
              <input
                className=" input_field_style form-control form-control-lg mb-2  border-0  rounded-0"
                onChange={handleSec2iiInputChange}
                value={newSec2ii.description}
                name="description"
                placeholder="placeholder"
              />
            </div>

            <div className="col"></div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="customCard px-4"
              onClick={handle2iiFormSubmit}>
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}

import * as React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Link from "next/link";
import { useContext } from "react";
import TableHeading from "../TableHeading";
import { Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { TeamContext } from "../../../context/TeamContext";
import AddTeamMemberDialog from "./AddTeamMemberDialog";

export default function TeamMemberTable() {
  const { members, deleteTeamMember } = useContext(TeamContext);

  return (
    <>
      <div className="d-flex align-items-center ">
        <TableHeading heading={"Team Members"} />
        <AddTeamMemberDialog />
      </div>

      <div className="customCard mt-2 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Profile Picture</th>
              <th scope="col">Position</th>
              <th scope="col">Description</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {members &&
              members.map((data: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.profilePicture}</td>
                  <td>{data.position}</td>
                  <td>{data.description}</td>
                  <td>
                    <div className="d-flex ">
                      <Link href={`/team/${data._id}`}>
                        <IconButton aria-label="delete">
                          <VisibilityIcon
                            fontSize="inherit"
                            color="warning"
                          />
                        </IconButton>
                      </Link>

                      {/* Delete Modal */}
                      <IconButton
                        aria-label="delete"
                        data-bs-toggle="modal"
                        data-bs-target="#teamMemberModal">
                        <DeleteIcon
                          fontSize="inherit"
                          color="warning"
                        />
                      </IconButton>

                      <div
                        className="modal fade "
                        id="teamMemberModal"
                        tab-index="-1"
                        aria-labelledby="teamMemberModalLabel"
                        aria-hidden="true">
                        <div className="modal-dialog ">
                          <div
                            className="modal-content p-2 rounded-1 "
                            style={{ backgroundColor: "#16181d", color: "#bbc4cc", border: "1px solid #2d3741 " }}>
                            <div className="modal-body">
                              <h3 className="text-center">Are you sure ?</h3>
                            </div>
                            <div className="d-flex justify-content-end gap-3 mt-3">
                              <Button
                                className="table_button px-2"
                                size="small"
                                data-bs-dismiss="modal">
                                Cancell
                              </Button>

                              <Button
                                onClick={() => deleteTeamMember(data._id)}
                                data-bs-dismiss="modal"
                                className="table_button "
                                size="small">
                                Yes Delete
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Delete Modal End */}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

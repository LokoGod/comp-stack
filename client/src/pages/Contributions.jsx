import React from "react";

const Contributions = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
        <img
          className="mask mask-squircle w-1/6"
          src="https://img.freepik.com/free-vector/data-science-concept-digital-information-processing-server-room-cloud-storage_39422-557.jpg"
        />
      </div>

      <div className="card lg:card-side bg-base-100 shadow-xl m-10">
        <div className="card-body">
          <h2 className="card-title">Hey pitcher ;)</h2>
          <p>
            Why dont we start by adding some details about the place you work
            at,
          </p>

          <form>
            <div className="flex justify-center items-center">
              <div className="flex">
                <div className="card w-96 bg-base-100 shadow m-5">
                  <div className="card-body">
                    <h2 className="card-title">General Details</h2>

                    <form className="">
                      <div className="mt-5">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-80"
                        />
                      </div>
                      <div className="mt-5">
                        <textarea
                          className="textarea textarea-bordered w-80"
                          placeholder="Bio"
                        ></textarea>
                      </div>
                      <div className="mt-5">
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-80"
                        />
                      </div>
                    </form>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow m-5">
                  <div className="card-body">
                    <h2 className="card-title">In-Depth Details</h2>
                    <form className="">
                      <div className="mt-5">
                        <select className="select select-bordered w-80">
                          <option defaultValue={"Company Type"}>
                            Company Type
                          </option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                      <div className="mt-28">
                        <select className="select select-bordered w-80">
                          <option defaultValue={"Company Size"}>
                            Company Size
                          </option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                    </form>
                  </div>
                </div>

                <div className="card w-96 bg-base-100 shadow m-5">
                  <div className="card-body">
                    <h2 className="card-title">Technologies Used</h2>
                    <form className="">
                      <div className="mt-5">
                        <select className="select select-bordered w-80">
                          <option defaultValue={"Tech"}>Tech</option>
                          <option>Han Solo</option>
                          <option>Greedo</option>
                        </select>
                      </div>
                    </form>
                    <div className="flex justify-center items-center">
                      <div className="badge badge-secondary text-center mt-5 mr-2">
                        Node.Js
                      </div>
                      <div className="badge badge-neutral text-center mt-5 mr-2">
                        .Net
                      </div>
                      <div className="badge badge-accent text-center mt-5">
                        React.Js
                      </div>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="badge badge-ghost text-center mt-5 mr-1">
                        Laravel
                      </div>
                      <div className="badge badge-primary text-center mt-5 mr-1">
                        Docker
                      </div>
                      <div className="badge badge-secondary text-center mt-5">
                        Terraform
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Pitch</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contributions;

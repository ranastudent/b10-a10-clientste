import React from 'react';
import Swal from "sweetalert2";

const AddNewCampaign = () => {
      const userEmail = "reduanulislam92665@gmail.com"; // Mock read-only user email
      const userName = "Reduanul Islam"; // Mock read-only user name

      const handleSubmit = (event) => {
            event.preventDefault();
            const formData = new FormData(event.target);
            const newCampaign = Object.fromEntries(formData.entries());
            console.log(newCampaign); // Handle form data
            //send data to the server 
            fetch('http://localhost:5000/newCampaign', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newCampaign)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data.insertedId) {
                              Swal.fire({
                                    icon: "success",
                                    title: "Success",
                                    text: "Campaign added successfully!",
                                    confirmButtonColor: "#4CAF50",
                              });
                        }
                        
                  })

      };
      return (
            <div className="max-w-lg mx-auto p-5">
                  <h2 className="text-2xl font-bold text-center mb-5">Create a Campaign</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Photo URL */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Photo URL</span>
                              </label>
                              <input
                                    type="url"
                                    name="photoUrl"
                                    placeholder="Enter photo URL"
                                    className="input input-bordered w-full"
                                    required
                              />
                        </div>

                        {/* Title */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Title</span>
                              </label>
                              <input
                                    type="text"
                                    name="title"
                                    placeholder="Enter campaign title"
                                    className="input input-bordered w-full"
                                    required
                              />
                        </div>

                        {/* User Email (Read Only) */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">User Email</span>
                              </label>
                              <input
                                    type="email"
                                    name="userEmail"
                                    value={userEmail}
                                    readOnly
                                    className="input input-bordered w-full bg-gray-100"
                              />
                        </div>

                        {/* User Name (Read Only) */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">User Name</span>
                              </label>
                              <input
                                    type="text"
                                    name="userName"
                                    value={userName}
                                    readOnly
                                    className="input input-bordered w-full bg-gray-100"
                              />
                        </div>

                        {/* Minimum Donation Amount */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Minimum Donation Amount</span>
                              </label>
                              <input
                                    type="number"
                                    name="minDonation"
                                    placeholder="Enter minimum donation"
                                    className="input input-bordered w-full"
                                    required
                              />
                        </div>

                        {/* Deadline */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Deadline</span>
                              </label>
                              <input
                                    type="date"
                                    name="deadline"
                                    className="input input-bordered w-full"
                                    required
                              />
                        </div>

                        {/* Campaign Type */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Campaign Type</span>
                              </label>
                              <select
                                    name="campaignType"
                                    className="select select-bordered w-full"
                                    required
                              >
                                    <option value="">Select campaign type</option>
                                    <option value="personal-issue">Personal Issue</option>
                                    <option value="startup">Startup</option>
                                    <option value="business">Business</option>
                                    <option value="creative-ideas">Creative Ideas</option>
                              </select>
                        </div>

                        {/* Description */}
                        <div className="form-control">
                              <label className="label">
                                    <span className="label-text">Description</span>
                              </label>
                              <textarea
                                    name="description"
                                    placeholder="Describe your campaign..."
                                    className="textarea textarea-bordered w-full"
                                    rows="5"
                                    required
                              ></textarea>
                        </div>

                        {/* Add Button */}
                        <div className="form-control">
                              <button type="submit" className="btn btn-primary w-full">
                                    Add
                              </button>
                        </div>
                  </form>
            </div>
      );
};

export default AddNewCampaign;
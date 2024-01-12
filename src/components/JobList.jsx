import React from 'react';

const JobList = ({ onSelectJob, jobs }) => {
    return (
        <div>
            <h2 className="mt-3 mb-4">Job Listings</h2>
            <ul className="list-group">
                {jobs && jobs.map((job) => (
                    <li className="list-group-item" key={job._id}>
                        {/* Use a button element instead of an anchor */}
                        <button
                            type="button"
                            className="btn btn-link text-decoration-none"
                            onClick={() => onSelectJob(job)}
                        >
                            {job.title} - {job.company}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default JobList;

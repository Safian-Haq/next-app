"use client";
import React from "react";

interface ErrorPageProps {
    error: Error;
    reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
    return (
        <>
            <div>
                An unexpected error occurred. <br />
                {error.message}
            </div>
            <button className='btn' onClick={() => reset()}>
                Reset
            </button>
        </>
    );
};

export default ErrorPage;

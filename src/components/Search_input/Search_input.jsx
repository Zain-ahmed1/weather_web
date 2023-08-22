import React, { useState } from "react";
import { Icon } from '@iconify/react';

const Search_input = ({ onSearch }) => {
    const [search, setSearch] = useState("");

    const handleSearchInput = (e) => {
        setSearch(e.target.value)
    }

    const searchType = () => {
        onSearch(search); // Trigger the search and pass search query to parent
    }


    return (
        <>
            <div className="w-full relative z-10 flex justify-between items-center">
                <h1 className="text-white mx-12 text-3xl hidden sm:block ">Logo</h1>
                <div className="z-10 relative w-full sm:basis-3/4 md:basis-1/4">
                    <div className="text-white backdrop-blur-lg bg-slate-600/50 w-full py-4">
                        <div className="relative w-full flex items-center justify-center px-5">
                            <input
                                placeholder="Search Location"
                                type="text"
                                className="bg-transparent outline-none border-b p-2 py-4 border-gray-200 h-8 w-full m-auto placeholder:text-gray-400"
                                onChange={(e) => handleSearchInput(e)}
                                value={search}
                            />
                            <button onClick={searchType} className="absolute right-5 md:right-6 bottom-1"><Icon icon="ic:sharp-search" className="text-3xl" /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Search_input;

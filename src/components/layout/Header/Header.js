import * as React from "react";

const Header = (props) => {
    return (
        <div className="w-full border-b-[#E6EBF3] flex items-center justify-between gap-5 px-8 py-5 border-b border-solid max-md:flex-wrap max-md:px-5 box-border h-[92px]">
            <div className="border border-[color:var(--Stroke,#E6EBF3)] flex flex-col justify-center pl-4 pr-16 py-3 rounded-lg border-solid items-start max-md:pr-5">
                <div className="items-stretch flex gap-2">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/814796a94286fb5dcd2341e6c591e96334190541d2369c456d18afc66027da70?"
                        className="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full"
                    />
                    <div className="text-zinc-900 text-sm font-medium leading-5">
                        Search
                    </div>
                </div>
            </div>
            <div className="flex items-stretch justify-between gap-4">
                <img
                    loading="lazy"
                    srcSet="..."
                    className="aspect-[2.14] object-contain object-center w-[94px] justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d0cb672bc57786b0df99309abf87739c4ba4ec6e329a8f33329ed5cdcd21698?"
                    className="aspect-square object-contain object-center w-11 justify-center items-center overflow-hidden shrink-0 max-w-full"
                />
            </div>
        </div>
    );
}


export default Header;
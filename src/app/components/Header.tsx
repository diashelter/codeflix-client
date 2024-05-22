'use client'

import React, { ChangeEvent, FormEvent, useState } from "react";
import useScroll from "../hooks/useScroll";
import { SearchForm } from "./SearchForm";
import { useRouter, useSearchParams } from "next/navigation";
import { HeaderLayout } from "./HeaderLayout";

export default function Header(): JSX.Element {
    const isScrolled = useScroll();
    const router = useRouter();
    const params = useSearchParams();
    const initialSearchTerm = params.get('title') || '';
    const [searchTerm, setSearchTerm] = useState<string>(initialSearchTerm);

    function handleSearch(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        const newParams = new URLSearchParams(params.toString());
        newParams.set('title', searchTerm);
        router.push(`/search?${newParams.toString()}`);
      }
    
      function handleSearchTermChange(e: ChangeEvent<HTMLInputElement>): void {
        setSearchTerm(e.target.value);
      }

    return(
       <HeaderLayout isScrolled={isScrolled}>
            <SearchForm
                searchTerm={searchTerm}
                onSearch={handleSearch}
                onSearchTermChange={handleSearchTermChange}
            />
       </HeaderLayout>
    );
}
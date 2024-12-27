import { useState, useRef, useEffect } from 'react';
import { useDebounce } from '~/hooks';
import clsx from 'clsx';
import axios from 'axios';

import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import { searchService } from '~/services';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItems from '~/components/AccountItems';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [isSearchResultShown, setIsSearchResultShown] = useState(false);
    const [isLoadingUserTyping, setIsLoadingUserTyping] = useState(false);

    const delaySearchValue = useDebounce(searchValue, 600);

    const input_ref = useRef();

    useEffect(() => {
        if (!delaySearchValue.trim()) {
            setSearchResult([]);
            return;
        }

        //1st way use fetch go get data from API
        // setIsLoadingUserTyping(true);
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(delaySearchValue)}&type=less`)
        //     .then((res) => {
        //         return res.json();
        //     })
        //     .then((res) => {
        //         // console.log(res);
        //         // console.log(res.data);
        //         setIsLoadingUserTyping(false);
        //         setSearchResult(res.data);
        //     })
        //     .catch((err) => {
        //         setIsLoadingUserTyping(false);
        //     });

        //2nd way to get data from API => use axios lib
        // setIsLoadingUserTyping(true);
        //request is an instance made from axios.create([config])
        //request from '~/utils/request'
        // request
        //     .get('users/search', {
        //         params: {
        //             q: delaySearchValue,
        //             type: 'less',
        //         },
        //     })
        //     .then((res) => {
        //         // console.log(res);
        //         // console.log(res.data);
        //         // console.log(res.data.data);
        //         setIsLoadingUserTyping(false);
        //         setSearchResult(res.data);
        //     })
        //     .catch((err) => {
        //         setIsLoadingUserTyping(false);
        //     });

        //optimize with async and await
        //created an api service: searchService for search api handling
        const fetchAPI = async () => {
            setIsLoadingUserTyping(true);

            const result = await searchService(delaySearchValue);
            // console.log(result);

            setSearchResult(result);

            setIsLoadingUserTyping(false);
        };
        fetchAPI();
    }, [delaySearchValue]);

    const handleClearInput = () => {
        setSearchValue('');
        setSearchResult([]);
        input_ref.current.focus();
    };

    const handleHideSearchResult = () => {
        setIsSearchResultShown(false);
    };

    const handleSearchInputChange = (e) => {
        const searchInputValue = e.target.value;
        if (searchInputValue.length > 0 && searchInputValue === ' ') {
            return;
        }
        setSearchValue(searchInputValue.trimStart());
    };

    const renderSearchResult = (attrs) => {
        return (
            <div className={clsx(styles.search_results)} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                    <h4 className={clsx(styles.search_title)}>Accounts</h4>
                    {searchResult.map((val, index) => {
                        return <AccountItems key={val.id} data={val} />;
                    })}
                    {/* <AccountItems /> */}
                </PopperWrapper>
            </div>
        );
    };

    return (
        //disable Tippy warning
        // Using a wrapper <div> tag around the reference element solves
        // Tippy waring by creating a new parentNode context.
        <div>
            <HeadlessTippy
                visible={isSearchResultShown && searchResult.length > 0}
                interactive={true}
                render={renderSearchResult}
                onClickOutside={handleHideSearchResult}
            >
                <div className={clsx(styles.search)}>
                    <input
                        ref={input_ref}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleSearchInputChange}
                        onFocus={() => setIsSearchResultShown(true)}
                    />

                    {/* Clear search btn */}
                    {!isLoadingUserTyping && !!searchValue && (
                        <button className={clsx(styles.clear_search_btn)} onClick={handleClearInput}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}

                    {/* Loading icon when search */}
                    {isLoadingUserTyping && <FontAwesomeIcon className={clsx(styles.loading_icon)} icon={faSpinner} />}

                    {/* Search btn */}
                    <button className={clsx(styles.search_btn)} onMouseDown={(e) => e.preventDefault()}>
                        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;

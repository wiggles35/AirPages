import React, { useEffect } from 'react'
import { InstantSearch, Hits, SearchBox } from 'react-instantsearch/dom'
import { connectStateResults } from 'react-instantsearch/connectors'

import algoliasearch from 'algoliasearch';
import * as Env from "../../../environments";
import "./instantsearch.css"
import { Link } from "react-router-dom";

function FancySearch() {
    const searchClient = algoliasearch(
        Env.ALGO_APP_ID,
        Env.ALGO_ADMIN_KEY
    );

    const Results = connectStateResults(
        ({ searchState, searchResults, children }) =>
            searchResults && searchState.query && searchResults.nbHits !== 0 ? (
                children
            ) : null
    );

    const Hit = ({ hit }) => (
        <div>
            <Link to={ "profile/" + hit.userid }>{hit.username}</Link>
        </div>
    );

    return (
        <div className="ais-InstantSearch">
            <InstantSearch searchClient={searchClient} indexName="airpages">
                <div className="ais-SearchBox">
                    <SearchBox />
                    <Results>
                        <Hits hitComponent={Hit} />
                    </Results>
                </div>
            </InstantSearch>
        </div>
    )
}

export default FancySearch
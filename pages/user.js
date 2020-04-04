import React from 'react';

export default function HomePage() {

    return (<>
        <div id="home">
            <div class="container">
                <div class="row">
                    <div class="col-8 offset-2">

                        <h2>Stock Up On Your Options!</h2>


                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                Stock
          </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button class="dropdown-item stock-select" type="button">SP 500</button>
                                <button class="dropdown-item stock-select" type="button">MDB</button>
                                <button class="dropdown-item stock-select" type="button">AMZ</button>
                                <button class="dropdown-item stock-select" type="button">TSLA</button>
                            </div>
                            <div class="form-group">
                                <label for="example-text">Income Invested</label>
                                <input type="text" id="example-text" class="form-control" aria-describedby="example-text" placeholder="$$$" />
                            </div>
                            <div class="dropdown">
                                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown"
                                    aria-haspopup="true" aria-expanded="false">
                                    Time Period
            </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button class="dropdown-item time-select" type="button">12</button>
                                    <button class="dropdown-item time-select" type="button">6</button>
                                    <button class="dropdown-item time-select" type="button">1</button>
                                </div>



                            </div>

                        </div>

                        <form>
                            <button id="submit" class="btn btn-primary float-right">Calculate</button>
                        </form>
                        <div id="yonge">
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>

        )}

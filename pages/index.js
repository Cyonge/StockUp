import React from 'react';

export default function HomePage() {

var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var stockPlaceHolder = "";
var timePlaceHolder = "";


// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  submitStockAndTime: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/data",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  },
  deleteExample: function(id) {
    return $.ajax({
      url: "api/examples/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    // description: $exampleDescription.val().trim()
  };

  if (!(example.text)) {
    alert("You must enter an example text and description!");
    return;
  }

  // API.saveExample(example).then(function() {
  //   refreshExamples();
  // });
  // this is what is reflective of what the user picked
  // console.log(time)
  console.log($exampleText.val().trim());
  var backEndInfo = {
    stock: stockPlaceHolder,
    timeframe: timePlaceHolder,
    userInput: $exampleText.val().trim(),
    

  };
  API.submitStockAndTime(backEndInfo).then(function(res){
    console.log(res);
    $('#yonge').append(res);
  })

  $exampleText.val("");
  $exampleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteExample(idToDelete).then(function() {
    refreshExamples();
  });
};

function saveStockChoice(){
  stockPlaceHolder = this.innerHTML;
  // will do the same with time span that we did with stockPlaceHolder, this.html timespan.
  // will use time span element not .stock select
}

function saveTimeChoice(){
  timePlaceHolder = this.innerHTML;
}

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$exampleList.on("click", ".delete", handleDeleteBtnClick);

var stockChoices = $(".stock-select").on("click", saveStockChoice);
console.log(stockChoices);

var timeChoices = $(".time-select").on("click", saveTimeChoice);
console.log(saveTimeChoice);

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


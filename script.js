//Create an array of golfers names and handicaps
  // Golfer 1 / 7
  // Golfer 2 / -5
  // Golfer 3 / 2


//Create the golf course and its handicap hole designations
  // The Lakes at Castle Hills
  // Hole 1 - 9 Handicap
  // Hole 2 - 13 Handicap 
  // Hole 3 - 17 Handicap
  // Hole 4 - 1 Handicap
  // Hole 5 - 11 Handicap
  // Hole 6 - 7 Handicap
  // Hole 7 - 15 Handicap
  // Hole 8 - 3 Handicap
  // Hole 9 - 5 Handicap

  // Hole 10 - 4 Handicap
  // Hole 11 - 10 Handicap
  // Hole 12 - 2 Handicap
  // Hole 13 - 18 Handicap
  // Hole 14 - 14 Handicap
  // Hole 15 - 12 Handicap
  // Hole 16 - 16 Handicap
  // Hole 17 - 8 Handicap
  // Hole 18 - 6 Handicap


// Auto sum the hole by hole scores before you hit enter score button
  function findTotal(){
    var arr = document.getElementsByClassName('amount');
    var tot=0;
    for(var i=0;i<arr.length;i++){
        if(parseFloat(arr[i].value))
            tot += parseFloat(arr[i].value);
    }
    document.getElementById('total').value = tot;
  }


// Add date, golfers name and score to an ordered list on button click or enter key


//Input hole by hole score and subtract handicap from correct handicap hole
  // Golfer 1  - 4, 4, 3, 4, 4, 4, 3, 4, 4 - 4, 4, 4, 4, 3, 3, 3, 4, 4
  // Golfer 2 - 4, 5, 3, 5, 4, 5, 3, 5, 4 - 5, 5, 4, 4, 4, 3, 3, 5, 4
  // Golfer 3 - 4, 4, 3, 4, 4, 5, 3, 4, 4 - 5, 4, 4, 4, 4, 3, 3, 4, 4


//Be able to run one golfer against all of the golfers in the array
//Compute a win/loss ratio per golfer

  // const golferName = golfers[i];
  // const golferHandicap = handicaps[i];




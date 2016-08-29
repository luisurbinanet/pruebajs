/**
 *
 *
 *
 *
 */

var Calendar = function(divId, yy, mm, dd) {

    this.divId = divId; 

    // Days of week, starting on Sunday
    this.DaysOfWeek = [ 'S','M','T','W','T','F','S'	];

    // Months
    this.Months = ['January', 'Febrary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'Octuber', 'November', 'December' ];

    // Set the current month, year
    this.dateOrigin = new Date( yy, mm - 1, dd ); ;
    this.dateFinish = new Date( yy, mm - 1, dd ); ;
    
    this.CurrentMonth = this.dateOrigin.getMonth() ;
    this.CurrentYear = this.dateOrigin.getFullYear();
    
}

// Goes to next month
Calendar.prototype.nextMonth = function() {
    if ( this.CurrentMonth == 11 ) {
        this.CurrentMonth = 0;
        this.CurrentYear = this.CurrentYear + 1;
    }
    else {
        this.CurrentMonth = this.CurrentMonth + 1;
    }
    this.showCurrent();
};

// Goes to previous month
Calendar.prototype.previousMonth = function() {
    if ( this.CurrentMonth == 0 ) {
        this.CurrentMonth = 11;
        this.CurrentYear = this.CurrentYear - 1;
    }
    else {
        this.CurrentMonth = this.CurrentMonth - 1;
    }
    this.showCurrent();
};

// Show current month
Calendar.prototype.showCurrent = function() {
    this.showMonth(this.CurrentYear, this.CurrentMonth);
};

// Show month (year, month)
Calendar.prototype.showMonth = function(y, m) {

    var d = new Date()
        // First day of the week in the selected month
        , firstDayOfMonth = new Date(y, m, 1).getDay()
        // Last day of the selected month
        , lastDateOfMonth =  new Date(y, m+1, 0).getDate()
        // Last day of the previous month
        , lastDayOfLastMonth = m == 0 ? new Date(y-1, 11, 0).getDate() : new Date(y, m, 0).getDate();

    var dowStyle = '' ;
    var html = '';
    
    html += '<div class="calendar">';
    html += '<table>';

    // Write selected month and year
    html += '<tr><td colspan="7">' + this.Months[m] + ' - ' + y + '</td></tr>';

    // Write the header of the days of the week
    html += '<tr>';
    for(var i=0; i < this.DaysOfWeek.length;i++) {
        html += '<td>' + this.DaysOfWeek[i] + '</td>';
    }
    html += '</tr>';

    // Write the days
    var i=1;
    do {

        var dow = new Date(y, m, i).getDay();

        // If Sunday, start new row
        if ( dow == 0 ) {
            html += '<tr>';
        }
        // If not Sunday but first day of the month
        // it will write the last days from the previous month
        else if ( i == 1 ) {
            html += '<tr>';
            var k = lastDayOfLastMonth - firstDayOfMonth+1;
            for(var j=0; j < firstDayOfMonth; j++) {
                html += '<td class="not-current">' + k + '</td>';
                k++;
            }
        }
        
        // Applies different styles for workDays or weekEnds
        if ( dow == 0 || dow== 6 ) {
            dowStyle = "weekEnd";
        } else {
            dowStyle = "workDay";
        }

        // Write the current day in the loop
        html += '<td class="'+dowStyle+'">' + i + '</td>';

        // If Saturday, closes the row
        if ( dow == 6 ) {
            html += '</tr>';
        }
        // If not Saturday, but last day of the selected month
        // it will write the next few days from the next month
        else if ( i == lastDateOfMonth ) {
            var k=1;
            for(dow; dow < 6; dow++) {
                html += '<td class="not-current">' + k + '</td>';
                k++;
            }
        }

        i++;
    }while(i <= lastDateOfMonth);

    // Closes table
    html += '</table>';
    html += '</div>';

    // Write HTML to the div
    document.getElementById(this.divId).innerHTML += html;
};

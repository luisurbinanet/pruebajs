/**
 *
 *
 *
 *
 */

function makeMyCalendars(){

    // Clean the calendar dashboard
    document.getElementById("divCalendars").innerHTML = "";
    
    var dInputDate = document.getElementById('dInitDate').value ;

    var nDaysToShow = parseInt( document.getElementById( 'nDaysToShow' ).value );
    
    // dInputDate comes this way XXXX-XX-XX
    var yy = dInputDate.substr(0, 4) ;
    var mm = dInputDate.substr(5, 2) ;
    var dd = dInputDate.substr(8, 2) ;
    
    var c = new Calendar("divCalendars", yy, mm, dd);
    
    c.dateFinish.setDate( c.dateOrigin.getDate() + nDaysToShow );
    
    if (c.dateFinish.getFullYear() > c.dateOrigin.getFullYear() ) {
        calendars = ( 12 - c.dateOrigin.getMonth() ) + c.dateFinish.getMonth() + 1; 
    } else {
        calendars = c.dateFinish.getMonth() - c.dateOrigin.getMonth() + 1 ;        
    }
    
/** */
            
            console.log( 'Fecha Origen ' + c.dateOrigin.toLocaleDateString() );
            console.log( 'dd ' + dd + ' mm ' + mm + ' yy ' + yy );
            console.log( 'Fecha Final ' + c.dateFinish.toLocaleDateString() );
            console.log( 'Nro de Dias ' + nDaysToShow );
            console.log( 'Calendarios ' + calendars );
            console.log( 'Mes Actual ' + c.CurrentMonth +1 );
            
/**/

    c.showCurrent();
    
    if( c.dateFinish.getMonth() != c.dateOrigin.getMonth() ){
        var i=1;
        do {

            console.log( 'Calendario ' + c.CurrentMonth + ' / ' + c.CurrentYear  );
            c.nextMonth();

            i++;
       }while(i <= calendars - 1 );
    }
}

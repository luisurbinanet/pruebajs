/**
 *
 *
 *
 *
 */

function makeMyCalendars(){

    // Clean the calendar dashboard
    document.getElementById("divCalendars").innerHTML = "";
    
    var c = new Calendar("divCalendars");
    
    var dInputDate = document.getElementById('dInitDate').value ;

    var nDaysToShow = parseInt( document.getElementById( 'nDaysToShow' ).value );
    
    // dInputDate comes this way XXXX-XX-XX
    var yy = dInputDate.substr(0, 4) ;
    var mm = dInputDate.substr(5, 2) ;
    var dd = dInputDate.substr(8, 2) ;
    
    // var dateOrigin = new Date( nDaysToShow );
    //var dateOrigin = new Date( yy, mm - 1, dd );
    //var dateFinish = new Date ( dateOrigin );
    
    c.dateOrigin = new Date( yy, mm - 1, dd );
    c.dateFinish.setDate( c.dateOrigin.getDate() + nDaysToShow );

    // dateFinish.setDate(dateOrigin.getDate() + nDaysToShow ) ;

    var calendars = c.dateFinish.getMonth() - c.dateOrigin.getMonth() + 1 ;    
/** */
            
            console.log( 'Fecha Origen ' + c.dateOrigin.toLocaleDateString() );
            console.log( 'dd ' + dd + ' mm ' + mm + ' yy ' + yy );
            console.log( 'Fecha Final ' + c.dateFinish.toLocaleDateString() );
            console.log( 'Nro de Dias ' + nDaysToShow );
            console.log( 'Calendarios a Crear ' + calendars );
            
/**/

    c.showCurrent();
    
    if( calendars > 1){
        var i=1;
        do {

//            console.log( 'Calendario ' + i );
            c.nextMonth();

            i++;
        }while(i <= calendars - 1 );                
    }
}

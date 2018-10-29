$(document).ready(function () {

    new Cleave('.txtPhone', {
        phone: true,
        phoneRegionCode: 'VI',
        delimiter: '-'
    });

    var date = document.querySelectorAll('.txtDate');
    for (var i = 0; i < date.length; i++) {
        new Cleave(date[i], {
            date: true,
            delimiter: '/',
        });
    }


    window.Parsley.addValidator('dateformat1', {
        validate: function (value, id) {
            var isValid = moment(value, ['DD/MM/YY', 'DD/MM/YYYY', 'DD-MM-YY', 'DD-MM-YYYY'], true).isValid();
            return isValid;
        },
        messages: {
            en: 'Please provide date in given format'
        }
    });

    $('form').parsley({
        required: true
    });

    var idDate1 = $('#txtDate1');
    var idDate2 = $('#txtDate2');

    function stringToDate(str) {
        var arrDate = str.split('/');
        return new Date(arrDate[2], arrDate[1] - 1, arrDate[0]);
    }

    idDate2.on('blur', function () {
        var date1 = stringToDate(idDate1.val());
        var date2 = stringToDate(idDate2.val());

        console.log(typeof (date1), typeof (date2));

        if (date1 > date2) {
            console.log('date1 > date2 ===> error ne');
            idDate2.addClass('parsley-error');
            $('#date').append("<p class='parsley-errors-list'>Date1 > date2</p>");
        } else {
            console.log('good');
        }


    })

});
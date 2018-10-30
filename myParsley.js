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

    function stringToDate(str) {
        var arrDate = str.split('/');
        return new Date(arrDate[2], arrDate[1] - 1, arrDate[0]);
    }

    function checkDate(d1, d2) {
        var date1 = stringToDate(d1.val());
        var date2 = stringToDate(d2.val());

        if (date1 > date2) {
            // d2.addClass('parsley-error');
            return false;
        }
        return true;
    }

    var idDate1 = $('#txtDate1');
    var idDate2 = $('#txtDate2');

    window.Parsley.addValidator('checkdate', {
        validate: function (value) {
            if (checkDate(idDate1, idDate2)) {
                value = true;
            } else {
                value = false;
            }
            return value;
        },
        messages: {
            en: 'thich thi error thoi'
        }
        // $('#date').parsley().addError('errordate', { message: 'Error: date 1 > date 2', updateClass: true });
    });

    if (idDate1) {
        console.log(idDate1.onblur);
    } else {
        console.log('error');
    }



    // window.Parsley.on('form:submit', function () {

    //     if (!checkDate(idDate1, idDate2)) {
    //         $('#date').parsley().addError('errordate', { message: 'Error: date 1 > date 2', updateClass: true });
    //     } else {
    //         $('#date').parsley().removeError('errordate', { updateClass: true });
    //     }
    //     return false;
    // })


    $('form').parsley({
        // required: true
    });





});
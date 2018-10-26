$(document).ready(function () {

    new Cleave('.txtPhone', {
        phone: true,
        phoneRegionCode: 'VI',
        // blocks: [3, 3, 4],
        delimiter: '-'
    });

    new Cleave('.txtDate', {
        date: true,
        delimiter: '/'
    });

    window.Parsley.addValidator('dateformat1', {
        validate: function (value, id) {
            var isValid = moment(value, ['DD/MM/YY', 'DD/MM/YYYY', 'DD-MM-YY', 'DD-MM-YYYY'], true).isValid();
            return isValid;
        },
        messages: {
            en: 'Please provide date in given format'
        }
    });

    // $('#submit').on('click', function ($event) {
    //     $event.preventDefault();
    //     console.log('hello');
    // });

    $('form').parsley({
        // required: true
    });
});
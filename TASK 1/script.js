



let rTextSmall = $('.rTextSmall');
let rTextLarge = $('.rTextLarge');
let exp = '';
let histNo = 0;
let histContainer = $('.histContainer');
if (histNo === 0) {
    $('.historyContainer').text(`There's no History yet`);
}
if (exp === '') {
    rTextSmall.css('opacity', '0');
    rTextLarge.css('opacity', '100');
    rTextLarge.text('0');
}

function check() {
    if (exp === '') {
        rTextSmall.css('opacity', '0');
        rTextLarge.css('opacity', '100');
        rTextLarge.text('0');
    }
}

$('.historyShowBtn').on('click', function (e) {
    alert('history show icon clicked');
    $('.historyWrapper').css('display', 'flex');

    $('.historyWrapper').removeAttr('id').addClass('rightContainerSmall');

});
$('.historyWrapper').on('click', function (e) {
    // alert('history show icon clicked');
    $('.historyWrapper').css('display', 'none');

    $('.historyWrapper').removeAttr('id').addClass('rightContainerSmall');

});


$('.rTextLarge').on('input', function (e) {
    console.log(rTextLarge.text());
    exp = $('.rTextLarge').text();
    console.log('exp: ', exp);
    rTextSmall.css('opacity', '100');
    rTextSmall.val(`= ${eval(exp)}`);
});

$(document).bind('click', function (e) {
    var target = $(e.target);
    if (target.is('.histCal')) {
        console.log("target is: ", target);
        console.log("inside histcall click--")
        let histId = target.attr('id');
        console.log(`histId: ${histId}`);
        exp = $(`.histCal#${histId} .histTextSmall`).text();
        console.log(`exp text: ${exp}`);
        rTextLarge.text(exp);
        rTextSmall.css('opacity', '100');
        rTextSmall.val(`= ${eval(exp)}`);
        e.preventDefault(); // if you want to cancel the event flow

    } else if (target.is('#theme1')) {
        let randNo = Math.floor(Math.random() * 4);
        console.log(randNo);
        $('.lightModeSelect').css('background-image', `url(bg${randNo}.jpg)`);
        $('body').addClass('lightModeSelect');
        $('#theme2').removeClass('default');
        $('#theme3').removeClass('default');
        $('#theme1').addClass('default');
        e.preventDefault();

    }
    else if (target.is('#theme2')) {
        $('#theme1').removeClass('default');
        $('#theme3').removeClass('default');
        $('body').removeClass('lightModeSelect');
        $('body').css('background-color', '#3d3c3c');
        $('#theme2').addClass('default');
        e.preventDefault();
    }
    else if (target.is('#theme3')) {
        $('#theme1').removeClass('default');
        $('#theme2').removeClass('default');
        $('body').removeClass('lightModeSelect');
        $('body').css('background-color', '#0385b4');
        $('#theme3').addClass('default');
        e.preventDefault();
    }
});

$('.commonBtn').on('click', function () {

    let value = $(this).data('value');
    console.log('histno: ', histNo);
    if (histNo === 0) {
        $('.historyContainer').text(`There's no History yet`);
    }

    if (value.includes('equals')) {
        if (exp.includes('i')) {
            if (("" + Math.pow(exp, -1)).length === 13) {
                rTextLarge.css('font-size', '50px');
            } else if (("" + Math.pow(exp, -1)).length === 16) {
                rTextLarge.css('font-size', '40px');
            }
            else if (("" + Math.pow(exp, -1)).length === 20) {
                rTextLarge.css('font-size', '30px');
            }
            else if (("" + Math.pow(exp, -1)).length < 13) {
                rTextLarge.css('font-size', '60px');
            }

        } else {

            if (("" + eval(exp)).length === 13) {
                rTextLarge.css('font-size', '50px');
            } else if (("" + eval(exp)).length === 16) {
                rTextLarge.css('font-size', '40px');
            }
            else if (("" + eval(exp)).length === 20) {
                rTextLarge.css('font-size', '30px');
            }
            else if (("" + eval(exp)).length < 13) {
                rTextLarge.css('font-size', '60px');
            }
        }
    } else {
        if (exp.length === 13) {
            rTextLarge.css('font-size', '50px');
        } else if (exp.length === 16) {
            rTextLarge.css('font-size', '40px');
        }
        else if (exp.length === 20) {
            rTextLarge.css('font-size', '30px');
        }
        else if (exp.length < 13) {
            rTextLarge.css('font-size', '60px');
        }

    }
    if (exp === '') {
        if (value.includes('v')) {
            exp = exp + value.replace('v', '');
            rTextLarge.text(exp);
            rTextSmall.css('opacity', '100');
            rTextSmall.val(`= ${eval(exp)}`);
        }
    } else if (exp !== '') {
        if (value.includes('delete')) {
            exp = exp.substring(0, exp.length - 1);
            console.log('exp', exp);
            // console.log('eval(exp)', eval(exp));
            rTextLarge.text(exp);
            rTextSmall.css('opacity', '100');
            try {
                rTextSmall.val(eval(exp));
                console.log('in try');
            } catch (err) {
                rTextSmall.val(`= ${eval(exp.substring(0, exp.length - 1))}`);
                console.log('in catch');
            }
        }
        else if (value.includes('clear')) {
            exp = '';
            rTextLarge.text('0');
            rTextSmall.css('opacity', '100');
            rTextSmall.val(`= ${eval(exp)}`);
        }
        else if (exp.includes('+') || exp.includes('-') || exp.includes('*') || exp.includes('/') || exp.includes('%')) {

            if (value.includes('operator') || value.includes('equals')) {
                let lastChar = exp.charAt(exp.length - 1);
                if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/' || lastChar === '%') {
                    exp = exp.substring(0, exp.length - 1) + value.replace('operator', '');
                    rTextLarge.text(exp);
                    rTextSmall.css('opacity', '100');
                    rTextSmall.val(`= ${eval(exp)}`);

                } else if (value.includes('equals')) {
                    console.log("equals inside --", histNo);

                    if (histNo === 0) {
                        console.log("inside if ......");
                        histNo = 1;
                        $('.historyContainer').html(`<div class="histCal" id="hist${histNo}">
                        <div class="textSmall histTextSmall" readonly>${exp}</div>
                        <div readonly class="textLarge histTextLarge">${eval(exp)}</div>
                        </div>`);

                    } else {
                        histNo = histNo + 1;
                        console.log("inside else if --", histNo);
                        // $('.historyContainer').html(`<div class="histCal" id="hist${histNo}">
                        // <input type="text" class="textSmall histTextSmall" readonly value="${exp} =">
                        // <div readonly class="textLarge histTextLarge">${eval(exp)}</div>
                        // </div>`);
                        $(`<div class="histCal" id="hist${histNo}">
                        <div class="textSmall histTextSmall" readonly>${exp}</div>
                        <div readonly class="textLarge histTextLarge">${eval(exp)}</div>
                        </div>`).insertBefore($(`#hist${(histNo - 1)}`));
                        console.log($(`#hist${(histNo - 1)}`));
                        console.log("after the else if end..");
                        // 54463console.log("hhhhhhhhh: ", $('.histCal#hist2 .histTextSmall').text());
                    }
                    console.log("equals inside --", histNo);
                    console.log(`= ${eval(exp)}`);
                    rTextSmall.css('opacity', '0');
                    rTextLarge.text(`${eval(exp)}`);
                    exp = '' + eval(exp);
                } else {
                    exp = exp + value.replace('operator', '');
                    rTextLarge.text(exp);
                    rTextSmall.css('opacity', '100');
                    rTextSmall.val(`= ${eval(exp)}`);
                }
            }
            else if (value.includes('v')) {
                exp = exp + value.replace('v', '');
                rTextLarge.text(exp);
                rTextSmall.css('opacity', '100');
                rTextSmall.val(`= ${eval(exp)}`);
            }
        } else {
            if (value.includes('v')) {
                exp = exp + value.replace('v', '');
                rTextLarge.text(exp);
                rTextSmall.css('opacity', '100');
                rTextSmall.val(`= ${eval(exp)}`);
            } else if (value.includes('operator')) {
                exp = exp + value.replace('operator', '');
                rTextLarge.text(exp);
                rTextSmall.css('opacity', '100');
                rTextSmall.val(`= ${eval(exp.substring(0, exp.length - 1))}`);
            } else if (value.includes('pn')) {
                exp = value.replace('pn', '-') + exp;
                rTextLarge.text(exp);
                rTextSmall.css('opacity', '100');
                rTextSmall.val(`= ${eval(exp)}`);
            }
        }
    }

    console.log(exp);
    check();
});

$('.dustBinBtn').on('click', function () {
    $('.historyContainer').text(`There's no History yet`);
    histNo = 0;
});

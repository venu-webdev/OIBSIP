let tasks = 0;
let cTasks = 0;
const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
$('.addTask').on('click', function (e) {
    var d = new Date($.now());
    var sec = d.getSeconds();
    var date = (month[d.getMonth()]) + ' ' + d.getDate() + ' ' + d.getFullYear() + ', ';
    if (("" + sec).length === 1) {
        sec = "0" + sec;
    }
    d = d.toLocaleTimeString().replace(/:\d+ /, ' '); // current time, e.g. "1:54 PM"
    if (d.includes('AM')) {
        d = d.replace(' AM', `:${sec} AM`);
    } else {
        d = d.replace(' PM', `:${sec} PM`);
    }
    d = date + ' ' + d;

    if ($('.inputText').val() === '') {
        alert("Task Description Can't be Empty!!");
    } else {
        let taskNameInput = $('.inputText').val();
        $('.inputText').val('');
        $('.statusP').css('display', 'none');
        if (tasks === 0) {
            tasks = tasks + 1;
            $('.taskContentP').html(`<div class="taskTab" id="pTab${tasks}">
            <div class="taskTabLeft" >
                <div class="circle pendingCircle"></div>
                <div class="tabContent" id="ptask${tasks}">
                    <small class="addedTime">${d}</small>
                    <p class="taskName">${taskNameInput}</p>
                </div>
            </div>
            <div class="taskTabRight">
            <svg class="tickIcon"  id="pt${tasks}" xmlns="http://www.w3.org/2000/svg" height="35"
            viewBox="0 -960 960 960" width="35">
            <path
            d="M379.154-247.309 156.616-469.846l41.615-41.23 180.923 180.923 383-383.384 41.614 41.614-424.614 424.614Z" />
            </svg>
            <svg class="removeIcon"  id="pr${tasks}" xmlns="http://www.w3.org/2000/svg" height="30"
            viewBox="0 -960 960 960" width="30">
            <path
            d="M276.309-124.001q-29.596 0-50.144-20.548-20.548-20.549-20.548-50.145v-549.228h-40.616v-58.384h185.076v-32.077h260.846v32.077h185.076v58.384h-40.616v549.228q0 28.254-21.219 49.473-21.219 21.22-49.473 21.22H276.309ZM697-743.922H264v549.228q0 5.385 3.654 8.847 3.655 3.462 8.655 3.462h408.382q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463v-549.228ZM371.232-267.846h58.383v-392.615h-58.383v392.615Zm161.153 0h58.383v-392.615h-58.383v392.615ZM264-743.922V-182.385-743.922Z" />
            </svg>
            </div>
            
            </div>`);
        } else if ($(`#pTab${tasks}`).length) {
            tasks = tasks + 1;
            $(`<div class="taskTab" id="pTab${tasks}">
            <div class="taskTabLeft">
                <div class="circle pendingCircle"></div>
                <div class="tabContent" id="ptask${tasks}">
                    <small class="addedTime">${d}</small>
                    <p class="taskName">${taskNameInput}</p>
                </div>
            </div>
            <div class="taskTabRight">
                <svg class="tickIcon" id="pt${tasks}" xmlns="http://www.w3.org/2000/svg" height="35"
                    viewBox="0 -960 960 960" width="35">
                    <path
                        d="M379.154-247.309 156.616-469.846l41.615-41.23 180.923 180.923 383-383.384 41.614 41.614-424.614 424.614Z" />
                </svg>
                <svg class="removeIcon" id="pr${tasks}" xmlns="http://www.w3.org/2000/svg" height="30"
                    viewBox="0 -960 960 960" width="30">
                    <path
                        d="M276.309-124.001q-29.596 0-50.144-20.548-20.548-20.549-20.548-50.145v-549.228h-40.616v-58.384h185.076v-32.077h260.846v32.077h185.076v58.384h-40.616v549.228q0 28.254-21.219 49.473-21.219 21.22-49.473 21.22H276.309ZM697-743.922H264v549.228q0 5.385 3.654 8.847 3.655 3.462 8.655 3.462h408.382q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463v-549.228ZM371.232-267.846h58.383v-392.615h-58.383v392.615Zm161.153 0h58.383v-392.615h-58.383v392.615ZM264-743.922V-182.385-743.922Z" />
                </svg>
            </div>

        </div>`).insertBefore($(`#pTab${tasks - 1}`));
        } else {
            freshPTabId = $($('.taskContentP').children()[0]).attr('id').replace('pTab', '');
            tasks = tasks + 1;
            $(`<div class="taskTab" id="pTab${tasks}">
            <div class="taskTabLeft">
                <div class="circle pendingCircle"></div>
                <div class="tabContent" id="ptask${tasks}">
                    <small class="addedTime">${d}</small>
                    <p class="taskName">${taskNameInput}</p>
                </div>
            </div>
            <div class="taskTabRight">
                <svg class="tickIcon" id="pt${tasks}" xmlns="http://www.w3.org/2000/svg" height="35"
                    viewBox="0 -960 960 960" width="35">
                    <path
                        d="M379.154-247.309 156.616-469.846l41.615-41.23 180.923 180.923 383-383.384 41.614 41.614-424.614 424.614Z" />
                </svg>
                <svg class="removeIcon" id="pr${tasks}" xmlns="http://www.w3.org/2000/svg" height="30"
                    viewBox="0 -960 960 960" width="30">
                    <path
                        d="M276.309-124.001q-29.596 0-50.144-20.548-20.548-20.549-20.548-50.145v-549.228h-40.616v-58.384h185.076v-32.077h260.846v32.077h185.076v58.384h-40.616v549.228q0 28.254-21.219 49.473-21.219 21.22-49.473 21.22H276.309ZM697-743.922H264v549.228q0 5.385 3.654 8.847 3.655 3.462 8.655 3.462h408.382q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463v-549.228ZM371.232-267.846h58.383v-392.615h-58.383v392.615Zm161.153 0h58.383v-392.615h-58.383v392.615ZM264-743.922V-182.385-743.922Z" />
                </svg>
            </div>

        </div>`).insertBefore($(`#pTab${freshPTabId}`));

        }
        $(".notifyAdd").css('display', 'flex').hide().fadeIn().delay(2000).fadeOut(500);
    }
})


$(document).bind('click', function (e) {

    var target = $(e.target);
    if (target.is('.tickIcon')) {
        var d = new Date($.now());
        var sec = d.getSeconds();
        var date = (month[d.getMonth()]) + ' ' + d.getDate() + ' ' + d.getFullYear() + ', ';
        if (("" + sec).length === 1) {
            sec = "0" + sec;
        }
        d = d.toLocaleTimeString().replace(/:\d+ /, ' ');
        if (d.includes('AM')) {
            d = d.replace(' AM', `:${sec} AM`);
        } else {
            d = d.replace(' PM', `:${sec} PM`);
        }
        d = date + ' ' + d;
        let tabId = target.attr('id').replace('pt', '');
        $('.statusC').css('display', 'none');
        if (cTasks === 0) {
            cTasks = cTasks + 1;
            $('.taskContentC').html(`<div class="taskTab" id="cTab${cTasks}">
            <div class="taskTabLeft" >
                <div class="circle completedCircle"></div>
                <div class="tabContent" id="task1">
                    <small class="addedTime"> created: ${$(`#ptask${tabId} .addedTime`).text()}<br/>completed: ${d}</small>
                    <p class="taskName">${$(`#ptask${tabId} .taskName`).text()}</p>
                </div>
            </div>
            <div class="taskTabRight">
                <svg class="removeIcon"  id="cr${cTasks}" xmlns="http://www.w3.org/2000/svg" height="30"
                    viewBox="0 -960 960 960" width="30">
                    <path
                        d="M276.309-124.001q-29.596 0-50.144-20.548-20.548-20.549-20.548-50.145v-549.228h-40.616v-58.384h185.076v-32.077h260.846v32.077h185.076v58.384h-40.616v549.228q0 28.254-21.219 49.473-21.219 21.22-49.473 21.22H276.309ZM697-743.922H264v549.228q0 5.385 3.654 8.847 3.655 3.462 8.655 3.462h408.382q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463v-549.228ZM371.232-267.846h58.383v-392.615h-58.383v392.615Zm161.153 0h58.383v-392.615h-58.383v392.615ZM264-743.922V-182.385-743.922Z" />
                </svg>
            </div>

        </div>`);

        } else if ($(`#cTab${cTasks}`).length) {
            cTasks = cTasks + 1;
            $(`<div class="taskTab" id="cTab${cTasks}">
            <div class="taskTabLeft" >
                <div class="circle completedCircle"></div>
                <div class="tabContent" id="task1">
                <small class="addedTime">created: ${$(`#ptask${tabId} .addedTime`).text()}<br/>${d}</small>
                
                <p class="taskName">${$(`#ptask${tabId} .taskName`).text()}</p>
                </div>
            </div>
            <div class="taskTabRight">
                <svg class="removeIcon"  id="cr${cTasks}" xmlns="http://www.w3.org/2000/svg" height="30"
                    viewBox="0 -960 960 960" width="30">
                    <path
                        d="M276.309-124.001q-29.596 0-50.144-20.548-20.548-20.549-20.548-50.145v-549.228h-40.616v-58.384h185.076v-32.077h260.846v32.077h185.076v58.384h-40.616v549.228q0 28.254-21.219 49.473-21.219 21.22-49.473 21.22H276.309ZM697-743.922H264v549.228q0 5.385 3.654 8.847 3.655 3.462 8.655 3.462h408.382q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463v-549.228ZM371.232-267.846h58.383v-392.615h-58.383v392.615Zm161.153 0h58.383v-392.615h-58.383v392.615ZM264-743.922V-182.385-743.922Z" />
                        </svg>
                        </div>
                        
                        
        </div>`).insertBefore($(`#cTab${cTasks - 1} `));
        }
        else {
            freshCTabId = $($('.taskContentC').children()[0]).attr('id').replace('cTab', '');
            cTasks = cTasks + 1;
            $(`<div class="taskTab" id="cTab${cTasks}">
            <div class="taskTabLeft" >
                <div class="circle completedCircle"></div>
                <div class="tabContent" id="task1">
                <small class="addedTime">created: ${$(`#ptask${tabId} .addedTime`).text()}<br/>completed: ${d}</small>
                
                <p class="taskName">${$(`#ptask${tabId} .taskName`).text()}</p>
                </div>
            </div>
            <div class="taskTabRight">
                <svg class="removeIcon"  id="cr${cTasks}" xmlns="http://www.w3.org/2000/svg" height="30"
                    viewBox="0 -960 960 960" width="30">
                    <path
                        d="M276.309-124.001q-29.596 0-50.144-20.548-20.548-20.549-20.548-50.145v-549.228h-40.616v-58.384h185.076v-32.077h260.846v32.077h185.076v58.384h-40.616v549.228q0 28.254-21.219 49.473-21.219 21.22-49.473 21.22H276.309ZM697-743.922H264v549.228q0 5.385 3.654 8.847 3.655 3.462 8.655 3.462h408.382q4.616 0 8.462-3.846 3.847-3.847 3.847-8.463v-549.228ZM371.232-267.846h58.383v-392.615h-58.383v392.615Zm161.153 0h58.383v-392.615h-58.383v392.615ZM264-743.922V-182.385-743.922Z" />
                        </svg>
                        </div>
                        
                        
        </div>`).insertBefore($(`#cTab${freshCTabId} `));

        }
        $(`#pTab${tabId}`).remove();
        if (+($('.taskContentP').children().length) === 0) {
            $('.statusP').css('display', 'block');
            tasks = 0;
        }
        $(".notifyMarked").css('display', 'flex').hide().fadeIn().delay(2000).fadeOut(500);

        e.preventDefault();
    } else if (target.is('.removeIcon')) {
        let tabId = target.attr('id');

        if (tabId.includes('pr')) {
            tabId = tabId.replace('pr', '');
            $(`#pTab${tabId}`).remove();
        } else if (tabId.includes('cr')) {
            tabId = tabId.replace('cr', '');
            $(`#cTab${tabId}`).remove();
        }
        $(".notifyRemove").css('display', 'flex').hide().fadeIn().delay(2000).fadeOut(500);

        if (+($('.taskContentP').children().length) === 0) {
            $('.statusP').css('display', 'block');
            tasks = 0;
        }
        if (+($('.taskContentC').children().length) === 0) {
            $('.statusC').css('display', 'block');
            cTasks = 0;
        }
    }

});
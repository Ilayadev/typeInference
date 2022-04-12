var calendar = {
    notes: {
        id: {
            title: "", 
            checked:'boolean',
            stared:'boolean',          
            description: 'text or checklist',
            text: '',
            checklist: [{
                description: '',
                checked: 'booleann',
                delete: function () { }
            }],
            update: function () { },
            convertToTask: function () { },
            deletingcheckeditems: function () { },
            deletingthenote: function () { },
            uncheckingall: function () { }, 
            checkingall:function(){},           
            saving: function () { }
        },
        notesid:[],
        deletingmultiplenotes:function(){},
        sorting:function(){}
    },
    task: [    //For both task and events details are same  ,for the event "conformation alert" and "reschedule" and "snooze" option is not possible
        {
            key: 'event or task',
            id: "number",
            createdtime: '',
            Time: "", //default is fullday
            category: "",
            status: "",
            importance: "",
            repeat: "boolean",
            reminder: "boolean",
            //this below  properties will creat if this event have reminder while saving
            reminder_time: "time",
            snooze: "boolean",//up to two times
            stop: "boolean",
            snooze_count: "number", //maximum 2           
            repeat_type: 'daily',
            dataForRepeat: 'alldays',
            repeat_end: 'bydate'
        }
    ],
    events: [
        {
            key: 'event or task',
            id: "number",
            createddate: '',
            Time: "", //default is full day
            category: "",
            repeat: "boolean",
            reminder: "boolean",
            //this below  properties will creat if this event have reminder while saving
            reminder_time: "time",
            repeat_type: 'daily',
            dataForRepeat: 'alldays',
            repeat_end: 'bydate'
        }
    ],
    trashEvents_arr: [],
    notificaton: [],
    updating: function () {
        //it will update the event which is passed'
    },
    deleting: function () {
        //'it will delete the  event which is passed'
    },
    saving: function () {
        //'it will save the data for the task in correct order'
    },
    conformation: function () {
        //'it will ask if  the task is completed or not.if complete it will go to completed events or it will go to  pending event'
    },
    categorywise_functions: function () {
        //'it will return the tasks according to category'//default is allcategory
    },
    upcomingevents: function () {
        //'return the future event'
    },
    completedEvents: function () {
        //'it will return the completed events '
    },
    trashEvents: function () {
        //'it will return the deleted events'
    },
    pendingEvents: function () {
        //'it will return the pending events'
    },
    currentEvents: function () {
        //'it will return the present events'
    },
    addEvents: function () {
        //'create the new event not from the notes'
    },
    repeating: function () {
        //'it will creat the event in the date '
    },
    //this all are  the posibilities
    repeaters: {
        type: 'daily' || 'weekly' || 'monthly' || 'yearly',
        //daily
        daily: 'alldays' || 'weekdays' || 'weekend',
        weekly: 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday' || 'saturday' || 'sunday',//more than one days
        monthly: {
            on_that_date: 'default is created date or custom date',//optional
            weeks_days: {
                weeks: 'first' || 'second' || 'third' || 'fourth' || 'last',
                days: 'monday' || 'tuesday' || 'wednesday' || 'thursday' || 'friday' || 'saturday' || 'sunday',//more than one days
            }
        },
        yearly: 'it will repeated in the created time in each year',
        end: {
            bydate: '',
            bycount: '',
            default: 'never'
        }
    },
    reschedule: {
        start_date: '',
        end_date: '',
        all_task: "boolean",
        replacement_date: '',
        on_particular_time: ''//it will take  the particular tasks on given time        
    }

}


o
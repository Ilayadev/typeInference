var calendar = {
    repeaters: { //this all are  the posibilities
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
        end: 'the task it repeated until end time'//defult is never        
    },
    notes: {
        creatednotes: [{
            title: string,
            description: string,
            checked: boolean,
            editing: function () { }
        }],
        creatingnotes: function () {
           // 'it will create the new notes '
        },
        deletingcheckednotes: function () {
            //'it will delete the checkednotes'
        },
        convertingToTask: function () {
           // 'it will convert the notes to task '
        }
    },
    events: [
        {
            id: number,//it will created automaticaly
            starttime: date,
            endtime: date,
            category: string,
            importance: string,
            completed: boolean,
            collaboraters: ['the memembers who are in your friendlist'],//in this we select the persons to  whom this event is to apply ;
            participants: ['the members who are linked to this event'],
            reminder: boolean,
            repeat: boolean,
            //this below  properties will creat if this event have reminder while saving
            reminder_time: time,
            snooze: boolean,//up to two times
            stop: boolean,
            snooze_count: number, //maximum 2
            reschedule_range: date, //optional  
            repeat_type: 'daily',
            dataForRepeat: 'alldays'
        }

    ],
    // reminders: {
    //     event_id: {
    //         id: event_id,
    //         reminder: time,
    //         snooze:boolean,//up to two times
    //         stop:boolean,
    //         snooze_count: number,
    //         reschedule_range: date, //optional
    //         rescheduling: function () {
    //             'it will reschedule the task'
    //         }
    //     }
    // },
    
    repeated_events: [
        {
            id: event_id,
            //other details are collected from parent event except date and time
        }
    ],
    trashEvents_arr: [],
    notificaton:[],
    updating: function () {
        'it will update the event which is passed'
    },
    deleting: function () {
        'it will delete the  event which is passed'
    },
    saving: function () {
        'it will save the data for the task in correct order'
    },
    conformation: function () {
        'it will ask if  the task is completed or not.if complete it will go to completed events or it will go to  pending event'
    },
    categorywise_functions: function () {
        'it will return the tasks according to category'//default is allcategory
    },
    upcomingevents: function () {
        'return the future event'
    },
    completedEvents: function () {
        'it will return the completed events '
    },
    trashEvents: function () {
        'it will return the deleted events'
    },
    pendingEvents: function () {
        'it will return the pending events'
    },
    currentEvents: function () {
        'it will return the present events'
    },
    addEvents: function () {
        'create the new event not from the notes'
    },
    repeating: function () {
        'it will creat the event in the date '
    }
}
